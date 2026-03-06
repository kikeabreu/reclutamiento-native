import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let db: any;
async function initDb() {
  try {
    const { default: Database } = await import("better-sqlite3");
    db = new Database("data.db");
    db.exec(`
      CREATE TABLE IF NOT EXISTS settings (
        key TEXT PRIMARY KEY,
        value TEXT
      )
    `);
  } catch (e: any) {
    console.warn("SQLite could not be initialized (expected on Vercel):", e.message);
    db = {
      prepare: () => ({
        run: () => ({}),
        get: () => null
      })
    };
  }
}

initDb();

const sanitizeNotionId = (id: string | undefined) => {
  if (!id) return "";
  
  let rawId = id.trim();
  
  // If it's a URL, extract the ID part
  if (rawId.includes("notion.so")) {
    // Notion URLs often look like:
    // https://www.notion.so/workspace/Database-Name-76384763847638476384763847638476
    // The ID is the last 32 characters.
    const match = rawId.match(/[a-f0-9]{32}/i);
    if (match) {
      rawId = match[0];
    } else {
      // Fallback to path parsing
      try {
        const url = new URL(rawId);
        const parts = url.pathname.split("/");
        const lastPart = parts[parts.length - 1];
        // The ID is often at the end of the last part
        const idMatch = lastPart.match(/[a-f0-9]{32}/i);
        if (idMatch) rawId = idMatch[0];
      } catch (e) {
        // Ignore
      }
    }
  }

  // Normalize: remove hyphens and take only hex chars
  const sanitized = rawId.replace(/-/g, "").toLowerCase();
  
  // Final check: must be exactly 32 hex chars
  const finalMatch = sanitized.match(/[a-f0-9]{32}/);
  if (finalMatch && finalMatch[0].length === 32) {
    const result = finalMatch[0];
    console.log(`Sanitized Notion ID successfully: "${result}"`);
    return result;
  }
  
  console.warn(`Warning: Notion ID "${id}" could not be properly sanitized. Result: "${sanitized}"`);
  return sanitized;
};

const NOTION_DATABASE_ID = sanitizeNotionId(process.env.NOTION_DATABASE_ID);

const app = express();
app.use(express.json());

const PORT = 3000;

// Lazy load Google Auth only if needed
let oauth2Client: any;
function getGoogleAuth() {
  if (!oauth2Client && process.env.GOOGLE_CLIENT_ID) {
    const { google } = require("googleapis");
    oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      `${process.env.APP_URL}/auth/google/callback`
    );
  }
  return oauth2Client;
}

// --- API Routes ---

// 1. Auth Routes for Blanca
app.get("/auth/google", (req, res) => {
  const auth = getGoogleAuth();
  if (!auth) return res.status(500).send("Google Auth not configured");
  const url = auth.generateAuthUrl({
    access_type: "offline",
    scope: ["https://www.googleapis.com/auth/calendar.events"],
    prompt: "consent",
  });
  res.redirect(url);
});

app.get("/auth/google/callback", async (req, res) => {
  const { code } = req.query;
  const auth = getGoogleAuth();
  if (!auth) return res.status(500).send("Google Auth not configured");
  try {
    const { tokens } = await auth.getToken(code as string);
    if (tokens.refresh_token && db) {
      db.prepare("INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)").run(
        "google_refresh_token",
        tokens.refresh_token
      );
    }
    res.send("¡Autenticación exitosa! Ya puedes cerrar esta ventana.");
  } catch (error) {
    console.error("Error in Google Auth:", error);
    res.status(500).send("Error en la autenticación.");
  }
});

// 2. Fetch Booked Appointments (from Notion)
app.get("/api/appointments", async (req, res) => {
  if (!process.env.NOTION_TOKEN || !NOTION_DATABASE_ID || NOTION_DATABASE_ID.length !== 32) {
    console.warn("Notion credentials missing or Database ID is invalid");
    return res.json({ booked: [] });
  }

  try {
    console.log(`Querying Notion Database with ID: "${NOTION_DATABASE_ID}"`);
    const response = await axios.post(
      `https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`,
      {},
      {
        headers: {
          Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
        },
      }
    );

    const data = response.data;
    console.log(`Found ${data.results.length} entries in Notion`);

    const booked = data.results.map((page: any) => {
      const props = page.properties;
      // Try to find the date and time properties even if case varies slightly
      const dateProp = props.Fecha || props.fecha || props.DATE || props.Date;
      const timeProp = props.Hora || props.hora || props.TIME || props.Time;
      
      let date = dateProp?.date?.start;
      // If not a date property, try rich_text or title
      if (!date) {
        date = dateProp?.rich_text?.[0]?.plain_text || dateProp?.title?.[0]?.plain_text;
      }

      let time = timeProp?.rich_text?.[0]?.plain_text || timeProp?.title?.[0]?.plain_text;
      if (!time && timeProp?.date?.start) {
        // In case they used a date property for time (unlikely but possible)
        time = timeProp.date.start.split('T')[1]?.substring(0, 5);
      }
      
      if (date && time) {
        // Normalize date to YYYY-MM-DD if it's in D/M/YYYY or M/D/YYYY
        if (date.includes('/')) {
          const parts = date.split('/');
          if (parts.length === 3) {
            // Assuming D/M/YYYY based on context (4/3/2026 for March 4th)
            const d = parts[0].padStart(2, '0');
            const m = parts[1].padStart(2, '0');
            const y = parts[2];
            date = `${y}-${m}-${d}`;
          }
        }
        
        console.log(`Booked slot found: ${date} ${time.trim()}`);
        return `${date} ${time.trim()}`;
      }
      return null;
    }).filter(Boolean);

    res.json({ booked });
  } catch (error) {
    console.error("Notion Fetch Error:", error);
    res.json({ booked: [] });
  }
});

// 3. Prospect Registration Route
app.post("/api/register", async (req, res) => {
  const { userData } = req.body;

  try {
    // 1. Save to Notion (Independent Process)
    let notionSuccess = false;
    const dbId = NOTION_DATABASE_ID || sanitizeNotionId(process.env.NOTION_DATABASE_ID);
    
    if (process.env.NOTION_TOKEN && dbId && dbId.length === 32) {
      try {
        await axios.post(
          "https://api.notion.com/v1/pages",
          {
            parent: { database_id: dbId },
            properties: {
              Nombre: { title: [{ text: { content: userData.name || 'Sin nombre' } }] },
              Email: { email: userData.email || null },
              WhatsApp: { phone_number: userData.whatsapp || null },
              Edad: { rich_text: [{ text: { content: userData.age?.toString() || '' } }] },
              Ocupacion: { rich_text: [{ text: { content: userData.occupation || '' } }] },
              Interes: { rich_text: [{ text: { content: userData.interest || '' } }] },
              Experiencia: { rich_text: [{ text: { content: userData.experience || 'Sin especificar' } }] },
            },
          },
          {
            headers: {
              Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
              "Notion-Version": "2022-06-28",
              "Content-Type": "application/json",
            },
          }
        );
        notionSuccess = true;
        console.log("Successfully saved to Notion");
      } catch (notionError: any) {
        console.error("Notion Error:", notionError.response?.data || notionError.message);
      }
    } else {
      console.warn("Notion credentials missing or invalid ID");
    }

    // 2. Send WhatsApp Notification (Independent Process)
    let whatsappSuccess = false;
    if (process.env.WHATSAPP_TOKEN && process.env.WHATSAPP_PHONE_NUMBER_ID && process.env.BLANCA_PHONE_NUMBER) {
      try {
        const experienceMap: Record<string, string> = {
          'none': 'No, ninguna',
          'some': 'Un poco',
          'expert': 'Sí, mucha'
        };

        const message = `🚀 *Nuevo Prospecto Registrado*\n\n` +
                        `👤 *Nombre:* ${userData.name}\n` +
                        `📧 *Email:* ${userData.email}\n` +
                        `📱 *WhatsApp:* ${userData.whatsapp}\n` +
                        `🎂 *Edad:* ${userData.age}\n` +
                        `💼 *Ocupación:* ${userData.occupation}\n` +
                        `🎯 *Interés:* ${userData.interest}\n` +
                        `💪 *Experiencia Ventas:* ${experienceMap[userData.experience] || userData.experience}`;

        await axios.post(
          `https://graph.facebook.com/v17.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`,
          {
            messaging_product: "whatsapp",
            to: process.env.BLANCA_PHONE_NUMBER,
            type: "text",
            text: { body: message },
          },
          {
            headers: { Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}` },
          }
        );
        whatsappSuccess = true;
        console.log("Successfully sent WhatsApp");
      } catch (wsError: any) {
        console.error("WhatsApp Error:", wsError.response?.data || wsError.message);
      }
    }

    // Return success if at least Notion worked, or if we want to show success anyway
    res.json({ 
      success: true, 
      notion: notionSuccess, 
      whatsapp: whatsappSuccess,
      debug: {
        hasToken: !!process.env.NOTION_TOKEN,
        hasDbId: !!dbId,
        dbIdLength: dbId?.length
      }
    });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ error: "Error al procesar el registro." });
  }
});

// --- Vite Middleware ---
async function setupVite() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }
}

setupVite();

// --- Server Start ---
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

export default app;
