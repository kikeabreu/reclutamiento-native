import React, { useState } from 'react';
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
  XCircle,
  Star,
  Sparkles,
  TrendingUp,
  Heart,
} from 'lucide-react';

// ─── Navbar ────────────────────────────────────────────────────────────────────

const Navbar = ({
  step,
  onHome,
  onAgendar,
}: {
  step?: number;
  onHome: () => void;
  onAgendar: () => void;
}) => (
  <nav className="sticky top-0 z-50 w-full border-b border-black/5 bg-cream/90 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
      <div className="flex items-center gap-2 md:gap-3 cursor-pointer" onClick={onHome}>
        <div className="size-8 md:size-10 bg-primary rounded flex items-center justify-center text-white">
          <Building2 size={20} />
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-base md:text-lg font-extrabold tracking-tight uppercase">Native</span>
          <span className="text-[8px] md:text-[10px] font-bold tracking-[0.2em] text-primary uppercase">
            Master Broker
          </span>
        </div>
      </div>
      {step ? (
        <div className="text-[10px] font-bold text-dark/40 uppercase tracking-widest">
          Paso {step} de 2
        </div>
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

// ─── Landing Page ───────────────────────────────────────────────────────────────

const LandingPage = ({ onNext }: { onNext: () => void }) => {
  return (
    <div className="overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative pt-10 pb-16 md:py-28 flex flex-col items-center justify-center text-center min-h-[85vh]">
        {/* Subtle background texture */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(var(--primary-rgb),0.07),transparent)] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 flex flex-col gap-6 md:gap-10 relative">
          {/* Eyebrow */}
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 text-primary w-fit mx-auto bg-primary/5"
          >
            <Sparkles size={13} />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
              Para mujeres 30+ que quieren más
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black leading-[1.05] text-dark"
          >
            No estás fuera del juego.{' '}
            <br className="hidden md:block" />
            Estás en tu{' '}
            <span className="text-primary italic font-serif">segundo despertar</span>{' '}
            económico.
          </motion.h1>

          {/* Sub-hook: 3 puntos de dolor */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="flex flex-col gap-2 max-w-lg mx-auto text-left"
          >
            {[
              '"Otra vez buscan gente de 25 a 35."',
              '"Pausé mi carrera y no sé cómo volver."',
              '"Después de los 40 ya valí."',
            ].map((line, i) => (
              <div key={i} className="flex items-start gap-3 text-dark/60 font-medium text-base md:text-lg">
                <span className="text-primary mt-0.5">—</span>
                <span className="italic">{line}</span>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-dark/80 leading-relaxed max-w-2xl mx-auto font-semibold"
          >
            Si alguna vez pensaste esto…{' '}
            <span className="text-primary">quiero decirte algo con total claridad.</span>
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full max-w-md mx-auto"
          >
            <button
              onClick={onNext}
              className="bg-primary hover:bg-primary/90 text-white w-full py-5 rounded-xl font-extrabold text-lg md:text-xl transition-all shadow-2xl shadow-primary/30 flex items-center justify-center gap-3 uppercase tracking-wider"
            >
              Agendar sesión con Blanca
              <CalendarIcon size={20} />
            </button>
            <p className="text-xs text-dark/40 font-bold uppercase tracking-widest mt-3">
              Solo 5 cupos disponibles por semana
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── VIDEO ────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-dark text-cream">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-primary font-black uppercase tracking-widest text-xs mb-3">
              Un mensaje importante antes de continuar
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Blanca te habla directo:
              <br />
              <span className="italic font-serif text-cream/70">así es realmente esto.</span>
            </h2>
          </div>

          <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-black ring-1 ring-white/10">
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <iframe
                src="https://player.vimeo.com/video/1170458452?badge=0&autopause=0&player_id=0&app_id=58479&portrait=0&byline=0&title=0"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="Blanca | Native Master Broker"
              />
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onNext}
              className="bg-primary hover:bg-primary/90 text-white w-full md:w-auto md:px-16 py-6 rounded-xl font-black text-xl md:text-2xl transition-all shadow-2xl shadow-primary/40 uppercase tracking-widest"
            >
              Agendar sesión con Blanca
            </button>
          </div>
        </div>
      </section>

      {/* ── IDENTIFICACIÓN / PARA QUIÉN ─────────────────────────── */}
      <section className="py-24 px-6 max-w-4xl mx-auto space-y-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter italic font-serif">
            ¿Esto es para ti?
          </h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* SÍ */}
          <div className="p-8 md:p-12 rounded-3xl bg-white border border-black/5 shadow-xl shadow-black/5">
            <div className="flex items-center gap-4 mb-8">
              <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">Sí, si...</h3>
            </div>
            <ul className="space-y-7">
              {[
                {
                  icon: Heart,
                  text: 'Pausaste tu carrera por tu familia y ahora quieres retomar tu independencia económica.',
                },
                {
                  icon: Clock,
                  text: 'No quieres un empleo rígido que te robe el tiempo de calidad con los tuyos.',
                },
                {
                  icon: TrendingUp,
                  text: 'Tienes disciplina, ganas de aprender y disposición para crecer. La edad no importa aquí.',
                },
                {
                  icon: Users,
                  text: 'Buscas pertenecer a un equipo real, con líderes que te acompañan — no solo un número más.',
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-5">
                  <item.icon className="text-primary shrink-0 mt-0.5" size={26} />
                  <p className="text-lg font-medium text-dark/80 leading-snug">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* NO */}
          <div className="p-8 md:p-12 rounded-3xl bg-dark text-cream/70 border border-white/5 shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="size-14 rounded-2xl bg-white/5 flex items-center justify-center text-white/40">
                <XCircle size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-cream uppercase tracking-tight">
                No, si...
              </h3>
            </div>
            <ul className="space-y-7">
              {[
                {
                  icon: ArrowRight,
                  text: 'Buscas un sueldo fijo sin responsabilidad sobre tus propios resultados.',
                },
                {
                  icon: Award,
                  text: 'No estás dispuesta a aprender nuevas habilidades ni a comprometerte con tu propio crecimiento.',
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-5">
                  <item.icon className="text-white/30 shrink-0 mt-0.5" size={26} />
                  <p className="text-lg font-medium leading-snug">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── EL SISTEMA (Infraestructura) ─────────────────────────── */}
      <section className="py-24 bg-white/60 border-y border-black/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-black uppercase tracking-widest text-xs mb-4">
              Lo que encuentras aquí
            </p>
            <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">
              No ofrecemos sueldo fijo.
              <br />
              <span className="italic font-serif text-primary">Ofrecemos estructura real.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Award,
                title: 'Comisiones hasta el 8%',
                desc: 'El esquema más competitivo del mercado inmobiliario. Tu cierre, tu retorno.',
              },
              {
                icon: ShieldCheck,
                title: 'Certeza legal total',
                desc: 'Portafolio respaldado por el despacho jurídico de la Lic. Sheila Alejo. Cero riesgo.',
              },
              {
                icon: Users,
                title: 'Acompañamiento 1 a 1',
                desc: 'Blanca y los líderes no solo te enseñan — te acompañan hasta tu primera venta.',
              },
              {
                icon: Star,
                title: 'Marketing desde el día uno',
                desc: 'Sesión de fotos profesional, videos para redes y posicionamiento estratégico incluidos.',
              },
              {
                icon: Building2,
                title: 'Productos listos para vender',
                desc: 'No buscas propiedades. Recibes un portafolio ya filtrado, con certeza legal.',
              },
              {
                icon: TrendingUp,
                title: 'Escalabilidad real',
                desc: 'Varias mujeres empezaron como asesoras y hoy son coordinadoras. El sistema reconoce el compromiso.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 p-8 rounded-2xl bg-cream/60 border border-black/5 hover:shadow-lg hover:shadow-primary/5 transition-all"
              >
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                  <p className="text-dark/60 font-medium leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Cultura / quote */}
          <div className="mt-14 p-10 border-l-8 border-primary bg-primary/5 rounded-r-3xl">
            <p className="italic font-serif text-2xl md:text-3xl text-dark/80 leading-relaxed mb-4">
              "El día que vi a Miguel, uno de los socios, en bermuda y sudado arreglando sillas…
              entendí que aquí nadie está por encima del trabajo."
            </p>
            <p className="font-bold text-dark/50 text-sm uppercase tracking-widest">— Blanca, Coordinadora</p>
          </div>
        </div>
      </section>

      {/* ── FLEXIBILIDAD ─────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight">
            Trabajas en las mañanas.
            <br />
            <span className="italic font-serif text-primary">Tu familia no lo resiente.</span>
          </h2>
          <p className="text-xl text-dark/70 font-medium leading-relaxed max-w-xl mx-auto">
            Muchas de nuestras asesoras organizan sus recorridos mientras sus hijos están en la
            escuela. Se apoyan entre ellas. No es desorden — es{' '}
            <span className="font-bold text-dark">flexibilidad con responsabilidad</span>.
          </p>
          <p className="text-lg text-dark/50 font-semibold">
            Aquí no vienes a probar suerte. Vienes a construir habilidad.
          </p>
        </div>
      </section>

      {/* ── ADVERTENCIA ──────────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-dark rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute -top-8 -left-8 opacity-[0.06] rotate-12">
              <AlertTriangle size={160} />
            </div>
            <p className="text-primary font-black uppercase tracking-widest text-xs mb-6 relative z-10">
              Lee esto con honestidad
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-8 text-cream relative z-10 uppercase tracking-tighter leading-tight">
              Si buscas un empleo tradicional, esto probablemente no es para ti.
            </h2>
            <div className="space-y-6 text-xl md:text-2xl text-cream/70 relative z-10 leading-relaxed">
              <p>
                No hay sueldo base que limite tu potencial. Hay un negocio escalable con retornos
                extraordinarios.
              </p>
              <p className="text-primary font-bold font-serif">
                Requiere disciplina, ética y hambre de éxito.
              </p>
              <p>
                Si estás dispuesta a comprometerte con tu propio crecimiento,{' '}
                <span className="text-cream font-bold">entonces agenda tu sesión</span>. Si no,
                por favor no agendes.
              </p>
            </div>
            <div className="mt-10 inline-flex items-center gap-3 px-6 py-3 bg-primary/20 text-primary rounded-full font-black uppercase tracking-widest text-xs border border-primary/30">
              <Users size={16} />
              Solo 5 cupos por semana
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-cream text-center px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
              Tu siguiente paso no es buscar trabajo.
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif italic text-primary">
              Es explorar tu segundo despertar.
            </h3>
            <p className="text-xl text-dark/60 font-medium max-w-xl mx-auto leading-relaxed mt-4">
              No es una entrevista tradicional. Es una conversación para descubrir si este puede
              ser tu camino.
            </p>
          </div>
          <div className="w-full max-w-lg">
            <button
              onClick={onNext}
              className="bg-primary hover:bg-primary/90 text-white w-full py-7 rounded-2xl font-black text-2xl transition-all shadow-2xl shadow-primary/40 flex items-center justify-center gap-4 group uppercase tracking-widest"
            >
              Agendar sesión con Blanca
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={36} />
            </button>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-dark/50 font-bold uppercase tracking-widest text-xs">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-primary" size={15} />
              <span>100% Personalizado</span>
            </div>
            <div className="flex items-center gap-2">
              <History className="text-primary" size={15} />
              <span>Sin compromiso de permanencia</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="text-primary" size={15} />
              <span>Privacidad garantizada</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// ─── Qualification Form ─────────────────────────────────────────────────────────

const QualificationForm = ({
  onNext,
  isLoading,
}: {
  onNext: (data: any) => void;
  isLoading: boolean;
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    age: '',
    occupation: '',
    interest: '',
    experience: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  const fieldClass =
    'w-full bg-white border border-black/8 rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-dark placeholder:text-dark/30 font-medium';
  const labelClass = 'block text-[10px] font-black uppercase tracking-widest text-dark/40 mb-2';

  return (
    <div className="max-w-md mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <p className="text-primary font-black uppercase tracking-widest text-xs mb-3">Paso 1 de 2</p>
        <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-3">
          Cuéntanos sobre ti
        </h2>
        <p className="text-dark/50 font-medium leading-relaxed">
          Esta información le ayuda a Blanca a preparar una conversación útil para ti.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className={labelClass}>Nombre Completo</label>
          <input
            required
            type="text"
            className={fieldClass}
            placeholder="Ej. María García"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label className={labelClass}>Correo Electrónico</label>
          <input
            required
            type="email"
            className={fieldClass}
            placeholder="maria@ejemplo.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div>
          <label className={labelClass}>WhatsApp</label>
          <input
            required
            type="tel"
            className={fieldClass}
            placeholder="Ej. +52 1 999 000 0000"
            value={formData.whatsapp}
            onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
          />
        </div>
        <div>
          <label className={labelClass}>Edad</label>
          <input
            required
            type="number"
            className={fieldClass}
            placeholder="Ej. 38"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          />
        </div>
        <div>
          <label className={labelClass}>¿A qué te dedicas actualmente?</label>
          <input
            required
            type="text"
            className={fieldClass}
            placeholder="Tu ocupación actual"
            value={formData.occupation}
            onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
          />
        </div>
        <div>
          <label className={labelClass}>
            ¿Por qué quieres entrar al ramo inmobiliario?
          </label>
          <textarea
            required
            rows={3}
            className={`${fieldClass} resize-none`}
            placeholder="Cuéntanos brevemente tu motivación..."
            value={formData.interest}
            onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
          />
        </div>
        <div>
          <label className={labelClass}>¿Tienes experiencia previa en ventas?</label>
          <select
            required
            className={`${fieldClass} appearance-none`}
            value={formData.experience}
            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
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
          className={`w-full bg-primary hover:bg-primary/90 text-white py-5 rounded-xl font-black text-lg transition-all shadow-2xl shadow-primary/30 flex items-center justify-center gap-3 uppercase tracking-widest mt-4 ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? 'Registrando...' : 'Continuar'}
          <ArrowRight size={20} />
        </button>

        <p className="text-center text-xs text-dark/30 font-bold uppercase tracking-widest pt-2">
          Tus datos están protegidos
        </p>
      </form>
    </div>
  );
};

// ─── Confirmation Page ──────────────────────────────────────────────────────────

const ConfirmationPage = ({ userData }: { userData: any }) => {
  const blancaPhone = '5219991166251';

  const experienceMap: Record<string, string> = {
    none: 'No, ninguna',
    some: 'Un poco',
    expert: 'Sí, mucha',
  };

  const message = encodeURIComponent(
    `Hola Blanca, me registré para la sesión en Native Master Broker.\n\n` +
      `📌 *Mis Datos:*\n` +
      `- Nombre: ${userData?.name || 'Prospecto'}\n` +
      `- Email: ${userData?.email || 'No proporcionado'}\n` +
      `- WhatsApp: ${userData?.whatsapp || 'No proporcionado'}\n` +
      `- Edad: ${userData?.age || 'No proporcionado'}\n` +
      `- Ocupación: ${userData?.occupation || 'No proporcionado'}\n` +
      `- Motivación: ${userData?.interest || 'No proporcionado'}\n` +
      `- Experiencia en ventas: ${
        experienceMap[userData?.experience] || userData?.experience || 'Sin especificar'
      }\n\n` +
      `Me gustaría agendar mi conversación contigo ✨`
  );
  const whatsappLink = `https://wa.me/${blancaPhone}?text=${message}`;

  return (
    <div className="flex-grow flex items-center justify-center py-12 px-6">
      <div className="max-w-xl w-full">
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-primary/10 text-center relative overflow-hidden">
          {/* Confetti-like accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary rounded-t-[2rem]" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary mb-8 mt-4">
            <CheckCircle2 size={14} />
            <span className="text-[11px] font-black uppercase tracking-widest">
              ¡Registro exitoso!
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-dark mb-4 leading-tight tracking-tighter">
            Ya diste el <span className="italic font-serif text-primary">primer paso.</span>
          </h1>
          <p className="text-dark/60 font-medium text-lg leading-relaxed mb-8 max-w-sm mx-auto">
            Tus datos fueron registrados. El siguiente paso es coordinar tu sesión directamente
            con Blanca por WhatsApp.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8 text-amber-900">
            <div className="flex items-center justify-center gap-2 mb-2">
              <AlertTriangle className="text-amber-600 shrink-0" size={18} />
              <p className="font-black uppercase tracking-widest text-xs">Aviso importante</p>
            </div>
            <p className="text-base font-medium leading-relaxed">
              El calendario aún no está disponible. Es necesario coordinar tu fecha directamente
              con Blanca por WhatsApp.
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 bg-[#25D366] hover:bg-[#20c05b] text-white w-full py-6 rounded-2xl font-black text-xl transition-all shadow-xl shadow-green-500/20 uppercase tracking-wide"
          >
            <MessageCircle size={24} />
            Hablar con Blanca por WhatsApp
          </a>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 text-dark/30 font-bold uppercase tracking-[0.3em] text-[10px]">
            <span className="h-px w-8 bg-dark/10" />
            <span>Native Master Broker</span>
            <span className="h-px w-8 bg-dark/10" />
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Main App ───────────────────────────────────────────────────────────────────

export default function App() {
  const [screen, setScreen] = useState<'landing' | 'form' | 'confirmation'>('landing');
  const [userData, setUserData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const isEmbed =
    typeof window !== 'undefined' &&
    new URLSearchParams(window.location.search).get('embed') === 'true';

  const handleFormSubmit = async (data: any) => {
    setUserData(data);
    setIsLoading(true);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userData: data }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        if (!result.notion) {
          console.warn('Registrado pero falló el guardado en Notion. Revisa la configuración de la tabla.');
        }
        if (typeof window !== 'undefined' && (window as any).fbq) {
  (window as any).fbq('track', 'Lead');
}
        setScreen('confirmation');
      } else {
        alert(`Error al registrar: ${result.error || 'Inténtalo de nuevo.'}`);
      }
    } catch {
      alert('Error de conexión. Por favor, revisa tu internet e inténtalo de nuevo.');
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
            <motion.div
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <LandingPage onNext={() => setScreen('form')} />
            </motion.div>
          )}
          {screen === 'form' && (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <QualificationForm onNext={handleFormSubmit} isLoading={isLoading} />
            </motion.div>
          )}
          {screen === 'confirmation' && (
            <motion.div
              key="confirmation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ConfirmationPage userData={userData} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
