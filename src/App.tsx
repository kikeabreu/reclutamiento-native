import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Users, 
  Award, 
  AlertTriangle,
  Lock,
  History,
  Building2,
  MessageCircle,
  Calendar as CalendarIcon,
  Clock,
  XCircle
} from 'lucide-react';
import { AppointmentDetails } from './constants';

// --- Components ---

const Navbar = ({ step, onHome, onAgendar }: { step?: number, onHome: () => void, onAgendar: () => void }) => (
  <nav className="sticky top-0 z-50 w-full border-b border-black/5 bg-cream/90 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
      <div className="flex items-center gap-2 md:gap-3 cursor-pointer" onClick={onHome}>
        <div className="size-8 md:size-10 bg-primary rounded flex items-center justify-center text-white">
          <Building2 size={20} />
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-base md:text-lg font-extrabold tracking-tight uppercase">Native</span>
          <span className="text-[8px] md:text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Master Broker</span>
        </div>
      </div>
      {step ? (
        <div className="text-[10px] font-bold text-dark/40 uppercase tracking-widest">Paso {step} de 2</div>
      ) : (
        <button 
          onClick={onAgendar}
          id="nav-agendar-btn"
          className="bg-primary hover:bg-primary/90 text-white px-4 py-2 md:px-6 md:py-2.5 rounded font-bold text-xs md:text-sm transition-all shadow-lg shadow-primary/20 uppercase tracking-widest"
        >
          Agendar
        </button>
      )}
    </div>
  </nav>
);

// --- Screens ---

const LandingPage = ({ onNext }: { onNext: () => void }) => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-10 pb-16 md:py-24 flex flex-col items-center justify-center text-center min-h-[80vh]">
        <div className="max-w-4xl mx-auto px-6 flex flex-col gap-6 md:gap-10">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 text-primary w-fit mx-auto bg-primary/5"
          >
            <Award size={14} />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.15em]">Oportunidad para Mujeres 30+</span>
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black leading-[1.05] text-dark"
          >
            No estás fuera del juego. Estás en tu <span className="text-primary italic font-serif">segundo despertar</span> económico.
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-dark/70 leading-relaxed max-w-2xl mx-auto font-medium"
          >
            Descubre cómo generar ingresos en <span className="font-bold text-dark">bienes raíces sin volver al empleo tradicional</span> y sin descuidar a tu familia.
          </motion.p>
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full max-w-md mx-auto"
          >
            <button 
              onClick={onNext}
              className="bg-primary hover:bg-primary/90 text-white w-full py-5 rounded-xl font-extrabold text-lg md:text-xl transition-all shadow-2xl shadow-primary/40 flex items-center justify-center gap-3 uppercase tracking-wider"
            >
              Agendar sesión con Blanca
              <CalendarIcon size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 md:py-24 bg-dark text-cream">
        <div className="max-w-5xl mx-auto text-center">
          <div className="px-6 mb-10">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">Antes de agendar, mira este mensaje importante</h2>
            <p className="text-cream/60 font-medium">Un mensaje directo de Blanca sobre tu futuro en Native</p>
          </div>
          
          <div className="relative w-full aspect-video md:rounded-2xl overflow-hidden shadow-2xl bg-black ring-1 ring-white/10 mx-auto max-w-4xl group">
            {/* 
              INSTRUCCIONES PARA CAMBIAR EL VIDEO:
              1. Si es YouTube: Cambia el ID 'dQw4w9WgXcQ' por el ID de tu video.
              2. Si es Vimeo: Cambia la URL del iframe por la de Vimeo.
            */}
           
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <iframe 
                src="https://player.vimeo.com/video/1170458452?badge=0&autopause=0&player_id=0&app_id=58479&portrait=0&byline=0&title=0" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                title="Blanca | Native Master Broker"
              ></iframe>
            </div>
          </div>

          <div className="mt-12 px-6">
            <button 
              onClick={onNext}
              className="bg-primary hover:bg-primary/90 text-white w-full md:w-auto md:px-16 py-6 rounded-xl font-black text-xl md:text-2xl transition-all shadow-2xl shadow-primary/40 uppercase tracking-widest"
            >
              Agendar sesión con Blanca
            </button>
          </div>
        </div>
      </section>

      {/* Is this for you? */}
      <section className="py-24 px-6 max-w-4xl mx-auto space-y-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter italic font-serif">¿Esto es para ti?</h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 gap-10">
          <div className="p-8 md:p-12 rounded-3xl bg-white border border-black/5 shadow-xl shadow-black/5">
            <div className="flex items-center gap-4 mb-10">
              <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">Sí, si...</h3>
            </div>
            <ul className="space-y-8">
              {[
                { icon: Users, text: "Pausaste tu carrera por tu familia y ahora buscas retomar tu independencia." },
                { icon: Clock, text: "No quieres un empleo rígido de 9 a 6 que te robe tiempo de calidad." },
                { icon: Building2, text: "Quieres generar ingresos sin descuidar a tus hijos o tu hogar." }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-5">
                  <item.icon className="text-primary shrink-0" size={28} />
                  <p className="text-xl font-medium text-dark/80 leading-snug">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 md:p-12 rounded-3xl bg-dark text-cream/70 border border-white/5 shadow-2xl">
            <div className="flex items-center gap-4 mb-10">
              <div className="size-14 rounded-2xl bg-white/5 flex items-center justify-center text-white/40">
                <XCircle size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-cream uppercase tracking-tight">No, si...</h3>
            </div>
            <ul className="space-y-8">
              {[
                { icon: ArrowRight, text: "Buscas un sueldo fijo sin responsabilidad sobre tus resultados." },
                { icon: Award, text: "No estás dispuesta a aprender nuevas habilidades digitales." }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-5">
                  <item.icon className="text-white/30 shrink-0" size={28} />
                  <p className="text-xl font-medium leading-snug">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white/50 border-y border-black/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black mb-12 leading-tight uppercase tracking-tighter text-center">
            Tu Respaldo en <span className="text-primary italic font-serif">Native Culture</span>
          </h2>
          <div className="space-y-12">
            {[
              { icon: ShieldCheck, title: "Certeza legal total", desc: "Operamos bajo el respaldo jurídico del despacho de la Lic. Sheila Alejo. Seguridad total." },
              { icon: Award, title: "Comisiones hasta el 8%", desc: "El esquema más competitivo del mercado. Valoramos tu capacidad de cierre como nadie más." },
              { icon: Users, title: "Acompañamiento 1 a 1", desc: "Mentoria directa de Blanca hasta tu primera venta. No te soltamos la mano hasta lograrlo." }
            ].map((benefit, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-10 items-center text-center md:text-left p-8 rounded-2xl hover:bg-cream/50 transition-colors">
                <div className="shrink-0 size-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <benefit.icon className="text-primary" size={40} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-3">{benefit.title}</h4>
                  <p className="text-lg text-dark/70 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 p-10 border-l-8 border-primary bg-primary/5 rounded-r-3xl italic font-serif text-2xl md:text-3xl text-dark/80">
            "Aquí no empiezas sola. Empiezas acompañada por mujeres que ya recorrieron el camino."
          </div>
        </div>
      </section>

      {/* Warning */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-dark rounded-[2.5rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute -top-10 -left-10 opacity-10 rotate-12">
              <AlertTriangle size={160} />
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-10 text-cream relative z-10 uppercase tracking-tighter">Antes de agendar, lee esto con honestidad</h2>
            <div className="space-y-8 text-xl md:text-2xl text-cream/70 relative z-10 leading-relaxed">
              <p>No somos una agencia de reclutamiento masivo. No ofrecemos un sueldo base que limite tu potencial.</p>
              <p className="text-primary font-bold text-2xl md:text-3xl font-serif">Ofrecemos un negocio escalable con retornos extraordinarios.</p>
              <p>Esto requiere <span className="text-cream font-bold underline decoration-primary underline-offset-8">disciplina, ética y hambre de éxito</span>. Si no estás dispuesta a comprometerte con tu propio crecimiento, por favor no agendes.</p>
            </div>
            <div className="mt-12 inline-flex items-center gap-3 px-8 py-4 bg-primary/20 text-primary rounded-full font-black uppercase tracking-widest text-sm border border-primary/30">
              <Users size={18} />
              Solo 5 cupos por semana
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-cream text-center px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">Tu siguiente paso no es buscar trabajo.</h2>
            <h3 className="text-3xl md:text-5xl font-serif italic text-primary">Es agendar tu sesión con Blanca.</h3>
          </div>
          <div className="w-full max-w-lg">
            <button 
              onClick={onNext}
              className="bg-primary hover:bg-primary/90 text-white w-full py-8 rounded-2xl font-black text-2xl transition-all shadow-2xl shadow-primary/40 flex items-center justify-center gap-4 group uppercase tracking-widest"
            >
              Agendar sesión con Blanca
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={40} />
            </button>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-dark/50 font-bold uppercase tracking-widest text-xs md:text-sm">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-primary" size={16} />
              <span>100% Personalizado</span>
            </div>
            <div className="flex items-center gap-3">
              <History className="text-primary" size={16} />
              <span>Sin compromiso de permanencia</span>
            </div>
            <div className="flex items-center gap-3">
              <Lock className="text-primary" size={16} />
              <span>Privacidad garantizada</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ConfirmationPage = ({ userData }: { userData: any }) => {
  // WhatsApp link construction
  const blancaPhone = "5219991166251";
  
  const experienceMap: Record<string, string> = {
    'none': 'No, ninguna',
    'some': 'Un poco',
    'expert': 'Sí, mucha'
  };

  const message = encodeURIComponent(
    `Hola Blanca, me estoy postulando para asesora inmobiliaria en Native Master Broker. Mis datos son:\n\n` +
    `📌 *Mis Datos:*\n` +
    `- Nombre: ${userData?.name || 'Prospecto'}\n` +
    `- Email: ${userData?.email || 'No proporcionado'}\n` +
    `- WhatsApp: ${userData?.whatsapp || 'No proporcionado'}\n` +
    `- Edad: ${userData?.age || 'No proporcionado'}\n` +
    `- Ocupación actual: ${userData?.occupation || 'No proporcionado'}\n` +
    `- Interés en inmobiliario: ${userData?.interest || 'No proporcionado'}\n` +
    `- Experiencia en ventas: ${experienceMap[userData?.experience] || userData?.experience || 'Sin especificar'}\n\n` +
    `Me interesa agendar mi cita... ✨`
  );
  const whatsappLink = `https://wa.me/${blancaPhone}?text=${message}`;

  return (
    <div className="flex-grow flex items-center justify-center py-12 px-6">
      <div className="max-w-xl w-full">
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-primary/10 text-center relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary mb-8">
            <CheckCircle2 size={14} />
            <span className="text-[11px] font-black uppercase tracking-widest">Registro Exitoso</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-dark mb-6 leading-tight tracking-tighter">
            ¡Tus datos han sido <span className="italic font-serif text-primary">registrados</span>!
          </h1>
          
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10 text-amber-900">
            <div className="flex items-center justify-center gap-3 mb-4">
              <AlertTriangle className="text-amber-600" size={24} />
              <p className="font-black uppercase tracking-widest text-sm">Aviso Importante</p>
            </div>
            <p className="text-lg font-medium leading-relaxed">
              EL CALENDARIO AÚN NO ESTÁ DISPONIBLE, ES NECESARIO PLATICAR EN WHATSAPP CON BLANCA PARA COORDINAR TU ENTREVISTA.
            </p>
          </div>

          <div className="space-y-4">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-4 bg-whatsapp hover:bg-whatsapp/90 text-white w-full py-6 rounded-2xl font-black text-xl transition-all shadow-xl shadow-whatsapp/20 uppercase tracking-wide"
            >
              <MessageCircle size={24} />
              Hablar con Blanca por WhatsApp
            </a>
          </div>
        </div>
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 text-dark/40 font-bold uppercase tracking-[0.3em] text-[10px]">
            <span className="h-px w-8 bg-dark/10"></span>
            <span>Native Master Broker</span>
            <span className="h-px w-8 bg-dark/10"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

const QualificationForm = ({ onNext, isLoading }: { onNext: (data: any) => void, isLoading: boolean }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    age: '',
    occupation: '',
    interest: '',
    experience: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <div className="max-w-md mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-serif italic mb-4">Casi estamos ahí...</h2>
        <p className="text-dark/60 text-sm">Ayúdanos a conocerte mejor respondiendo estas breves preguntas.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-dark/40 mb-2">Nombre Completo</label>
          <input 
            required
            type="text" 
            className="w-full bg-white/50 border border-black/5 rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            placeholder="Ej. Maria Garcia"
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-dark/40 mb-2">Correo Electrónico</label>
          <input 
            required
            type="email" 
            className="w-full bg-white/50 border border-black/5 rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            placeholder="maria@ejemplo.com"
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-dark/40 mb-2">WhatsApp</label>
          <input 
            required
            type="tel" 
            className="w-full bg-white/50 border border-black/5 rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            placeholder="Ej. +52 1..."
            value={formData.whatsapp}
            onChange={e => setFormData({...formData, whatsapp: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-dark/40 mb-2">Edad</label>
          <input 
            required
            type="number" 
            className="w-full bg-white/50 border border-black/5 rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            placeholder="Ej. 35"
            value={formData.age}
            onChange={e => setFormData({...formData, age: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-dark/40 mb-2">¿A qué te dedicas actualmente?</label>
          <input 
            required
            type="text" 
            className="w-full bg-white/50 border border-black/5 rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            placeholder="Tu ocupación actual"
            value={formData.occupation}
            onChange={e => setFormData({...formData, occupation: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-dark/40 mb-2">¿Por qué tu interés en ingresar al ramo inmobiliario?</label>
          <textarea 
            required
            rows={3}
            className="w-full bg-white/50 border border-black/5 rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
            placeholder="Cuéntanos brevemente..."
            value={formData.interest}
            onChange={e => setFormData({...formData, interest: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-dark/40 mb-2">¿Tienes experiencia previa en ventas?</label>
          <select 
            required
            className="w-full bg-white/50 border border-black/5 rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none"
            value={formData.experience}
            onChange={e => setFormData({...formData, experience: e.target.value})}
          >
            <option value="">Selecciona una opción</option>
            <option value="none">No, ninguna</option>
            <option value="some">Un poco</option>
            <option value="expert">Sí, mucha</option>
          </select>
        </div>
        <button 
          type="submit"
          disabled={isLoading}
          className={`w-full bg-primary hover:bg-primary/90 text-white py-5 rounded-2xl font-black text-lg transition-all shadow-2xl shadow-primary/40 flex items-center justify-center gap-3 uppercase tracking-widest ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isLoading ? 'Registrando...' : 'Registrarme'}
          <ArrowRight size={20} />
        </button>
      </form>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [screen, setScreen] = useState<'landing' | 'form' | 'confirmation'>('landing');
  const [userData, setUserData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Check if we are in embed mode
  const isEmbed = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('embed') === 'true';

  const handleFormSubmit = async (data: any) => {
    setUserData(data);
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userData: data })
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        if (!result.notion) {
          console.warn("Registrado pero falló el guardado en Notion. Revisa la configuración de la tabla.");
        }
        setScreen('confirmation');
      } else {
        alert(`Error al registrar: ${result.error || 'Inténtalo de nuevo.'}`);
      }
    } catch (e) {
      alert("Error de conexión. Por favor, revisa tu internet e inténtalo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream/30">
      {!isEmbed && (
        <Navbar 
          step={screen === 'form' ? 1 : screen === 'confirmation' ? 2 : undefined} 
          onHome={() => setScreen('landing')}
          onAgendar={() => setScreen('form')}
        />
      )}
      
      <main className={`flex-grow ${isEmbed ? 'pt-0' : ''}`}>
        <AnimatePresence mode="wait">
          {screen === 'landing' && (
            <motion.div key="landing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <LandingPage onNext={() => setScreen('form')} />
            </motion.div>
          )}
          {screen === 'form' && (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <QualificationForm onNext={handleFormSubmit} isLoading={isLoading} />
            </motion.div>
          )}
          {screen === 'confirmation' && (
            <motion.div key="confirmation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <ConfirmationPage 
                userData={userData}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
