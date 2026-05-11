import {
  Dumbbell,
  HeartPulse,
  Instagram,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  TimerReset,
} from 'lucide-react';
import {
  MotionConfig,
  motion,
} from 'framer-motion';

const phone = '07976 218413';
const email = 'carolmeechan@aol.com';
const instagram = 'carolmeechanpt';
const mailtoHref = (subject) => `mailto:${email}?subject=${encodeURIComponent(subject)}`;
const phoneHref = `tel:${phone.replace(/\s/g, '')}`;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};

const services = [
  {
    title: 'Strength & Conditioning',
    icon: Dumbbell,
    description:
      'Build strength, confidence and long-term physical resilience through tailored conditioning plans designed around your goals, ability and lifestyle.',
    includes: ['Strength Conditioning', 'Body Conditioning', 'Muscle Tone', 'Progressive Training'],
    accent: 'from-[#fff7ec] via-[#d6b08a] to-[#5f4635]',
    glow: 'bg-[#d6b08a]',
  },
  {
    title: 'Movement, Mobility & Rehab',
    icon: TimerReset,
    description:
      'Improve how your body moves, recovers and performs with calm, structured sessions that support mobility, flexibility and safe progression.',
    includes: ['Flexibility & Mobility', 'Pre & Rehab', 'Recovery Support', 'Movement Quality'],
    accent: 'from-[#f8ecdc] via-[#caa37c] to-[#7d6048]',
    glow: 'bg-[#caa37c]',
  },
  {
    title: 'Fitness, Stamina & Performance',
    icon: HeartPulse,
    description:
      'Develop cardiovascular fitness, stamina and performance with intelligent training that feels purposeful, energising and sustainable.',
    includes: ['Cardio & Stamina', 'Sports Specific Training', 'Energy', 'Performance'],
    accent: 'from-[#fff3e2] via-[#d7b28f] to-[#765840]',
    glow: 'bg-[#ead5bd]',
  },
  {
    title: 'Weight Management & Nutrition',
    icon: Sparkles,
    description:
      'Create realistic training habits and practical nutrition foundations to support long-term weight management, energy and everyday wellbeing.',
    includes: ['Weight Loss', 'Weight Management', 'Nutrition Advice', 'Sustainable Habits'],
    accent: 'from-[#f4e6d6] via-[#bf9168] to-[#70513b]',
    glow: 'bg-[#bf9168]',
  },
  {
    title: 'Wellbeing, Menopause & Lifestyle Support',
    icon: ShieldCheck,
    description:
      'Designed for clients who want to feel stronger, steadier and more confident in everyday life, this support focuses on fitness, wellbeing, menopause, energy and long-term health with a calm, understanding approach.',
    includes: [
      'Menopause Support',
      'General Fitness & Wellbeing',
      'Confidence',
      'Long-Term Health',
    ],
    accent: 'from-[#f7efe4] via-[#b8a796] to-[#6a5240]',
    glow: 'bg-[#b8a796]',
  },
];

const stats = [
  ['30+', 'Years Experience', 'A career built on consistency, care and real-world training knowledge.'],
  ['1:1', 'Tailored Plans', 'Sessions shaped around your body, goals, lifestyle and confidence.'],
  ['Calm', 'Supportive Coaching', 'Encouraging structure without pressure, noise or one-size-fits-all routines.'],
  ['Whole', 'Fitness & Wellbeing', 'Strength, stamina, mobility, nutrition and long-term health together.'],
];

function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.24 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function ButtonLink({ href, children, variant = 'primary', icon: Icon }) {
  const base =
    'group relative z-20 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full px-6 py-3.5 text-center text-base font-semibold leading-tight transition duration-200 focus:outline-none focus:ring-2 focus:ring-copper/70 focus:ring-offset-2 focus:ring-offset-coal sm:min-h-[4.25rem] sm:w-auto sm:px-10 sm:py-4 sm:text-[1.12rem]';
  const styles =
    variant === 'primary'
      ? 'bg-button-glow text-linen shadow-[0_14px_34px_rgba(44,33,25,.28)] hover:-translate-y-0.5 hover:shadow-[0_18px_46px_rgba(44,33,25,.34)]'
      : 'border border-linen/24 bg-linen/12 text-linen shadow-[0_14px_34px_rgba(44,33,25,.2)] sm:backdrop-blur-md hover:-translate-y-0.5 hover:border-linen/42 hover:bg-linen/20';

  return (
    <a href={href} className={`${base} ${styles}`}>
      {Icon ? <Icon className="h-5 w-5 transition group-hover:scale-110" /> : null}
      <span>{children}</span>
    </a>
  );
}

function Background() {
  return (
    <>
      <div className="grain" />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[30rem] bg-[radial-gradient(circle_at_50%_0%,rgba(255,248,238,.15),transparent_58%)]"
      />
    </>
  );
}

function ECGWaveform() {
  const rhythmPath =
    'M0 150 H58 C68 150 71 132 82 132 C93 132 93 150 105 150 H128 C142 150 146 92 164 92 C185 92 175 236 198 236 C221 236 212 150 236 150 H270 C286 150 290 118 306 118 C328 118 324 184 346 184 C363 184 365 150 383 150 H438 C452 150 456 135 470 135 C484 135 484 150 500 150 H524 C543 150 548 76 570 76 C596 76 583 252 612 252 C640 252 628 150 658 150 H692 C709 150 713 116 731 116 C755 116 752 190 776 190 C794 190 796 150 817 150 H873 C889 150 894 130 910 130 C927 130 928 150 950 150';

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-[30%] z-[1] h-[20rem] w-[112vw] -translate-x-1/2 -translate-y-1/2 opacity-[0.1] sm:top-[31%] sm:h-[24rem] sm:w-[108vw] sm:opacity-[0.12] md:top-[32%] md:h-[28rem] md:w-[104vw] md:opacity-[0.14] lg:left-auto lg:right-[-12vw] lg:top-[47%] lg:h-[46rem] lg:w-[76vw] lg:translate-x-0 lg:opacity-[0.2]"
    >
      <svg viewBox="0 0 950 300" preserveAspectRatio="none" className="h-full w-full overflow-visible">
        <defs>
          <linearGradient id="ecg-fade" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#f7efe4" stopOpacity="0" />
            <stop offset="18%" stopColor="#f7efe4" stopOpacity="0.82" />
            <stop offset="72%" stopColor="#f7efe4" stopOpacity="0.96" />
            <stop offset="100%" stopColor="#f7efe4" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[74, 112, 150, 188, 226].map((y) => (
          <line
            key={y}
            x1="0"
            x2="950"
            y1={y}
            y2={y}
          stroke="#f7efe4"
          strokeDasharray="2 14"
          strokeWidth="1"
            opacity="0.32"
          />
        ))}

        <path
          d={rhythmPath}
          fill="none"
          stroke="url(#ecg-fade)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.62"
        />
        <motion.path
          d={rhythmPath}
          fill="none"
          stroke="url(#ecg-fade)"
          strokeWidth="3.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="150 800"
          initial={{ strokeDashoffset: 880 }}
          animate={{ strokeDashoffset: -880 }}
          transition={{ duration: 8.5, repeat: Infinity, ease: 'linear' }}
        />
      </svg>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full overflow-hidden px-[clamp(1.25rem,5vw,6.5rem)] py-[clamp(1.25rem,3vw,3rem)]">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_72%_36%,rgba(255,248,238,.22),transparent_26%),radial-gradient(circle_at_15%_20%,rgba(44,33,25,.2),transparent_30%)]" />
      <div className="pointer-events-none absolute left-[-5vw] top-[8vh] z-0 text-[11rem] font-extrabold leading-none tracking-[-0.08em] text-linen/[0.08] sm:text-[18rem] lg:text-[30rem]">
        30
      </div>
      <ECGWaveform />
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex min-h-[calc(100svh-clamp(2.5rem,6vw,6rem))] w-full flex-col justify-between"
      >
        <div className="relative flex min-h-full flex-1 flex-col">
          <motion.div
            variants={fadeUp}
            className="flex w-full items-center justify-between gap-8 py-1 text-linen"
          >
            <p className="text-[clamp(1.05rem,1.4vw,1.35rem)] font-extrabold uppercase tracking-[-0.04em]">
              Carol Meechan PT
            </p>
            <div className="hidden items-center gap-[clamp(2rem,3vw,4rem)] text-[clamp(1rem,1.05vw,1.15rem)] font-semibold text-linen/76 lg:flex">
              <a href="#about" className="transition hover:text-white">About</a>
              <a href="#services" className="transition hover:text-white">Services</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
            </div>
          </motion.div>

          <div className="grid flex-1 items-center pt-[clamp(5.5rem,15vh,8rem)] pb-[clamp(2.5rem,6vh,5rem)] sm:pt-[clamp(6rem,14vh,9rem)] lg:grid-cols-[minmax(0,1fr)_minmax(10vw,.18fr)] lg:py-[clamp(3rem,7vh,6rem)]">
            <div className="max-w-[min(100%,92rem)]">
              <motion.div
                variants={fadeUp}
                className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-linen/20 bg-linen/12 px-4 py-2.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-ember sm:mb-7 sm:px-5 sm:py-3 sm:text-sm sm:tracking-[0.22em]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_18px_rgba(234,213,189,.5)]" />
                Fitness Instructor & Personal Trainer
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="max-w-none font-black uppercase leading-[.84] tracking-[-0.068em] text-white lg:leading-[.78] lg:tracking-[-0.075em]"
              >
                <span className="block text-[clamp(3.8rem,17vw,5.65rem)] sm:text-[clamp(4.5rem,13vw,8.5rem)] lg:text-[clamp(4.8rem,16.8vw,13.8rem)]">
                  Carol
                </span>
                <span className="mt-3 block text-[clamp(2.45rem,11.6vw,4.05rem)] sm:mt-4 sm:text-[clamp(3.35rem,9.7vw,6.4rem)] lg:mt-0 lg:text-[clamp(3.85rem,10.7vw,9.7rem)]">
                  Meechan PT
                </span>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-[92rem] text-[clamp(1.65rem,8vw,2.5rem)] font-extrabold leading-[1] tracking-[-0.05em] text-linen/92 sm:mt-7 sm:text-[clamp(1.75rem,3.55vw,4.75rem)] sm:leading-[.95]"
              >
                Strength. Wellbeing. Confidence.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-[62rem] text-[clamp(1rem,4.1vw,1.18rem)] font-medium leading-[1.55] text-linen/86 sm:mt-7 sm:text-[clamp(1.1rem,1.4vw,1.5rem)]"
              >
                With over 30 years experience, Carol delivers tailored personal training sessions
                and long or short-term plans designed to build strength, improve wellbeing and
                support lasting change.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 grid gap-3 sm:mt-10 sm:flex sm:flex-wrap">
                <ButtonLink href={phoneHref} icon={Phone}>
                  Call Carol
                </ButtonLink>
                <ButtonLink href={mailtoHref('Personal Training Enquiry')} icon={Mail} variant="secondary">
                  {email}
                </ButtonLink>
                <ButtonLink
                  href={`https://instagram.com/${instagram}`}
                  icon={Instagram}
                  variant="secondary"
                >
                  Instagram
                </ButtonLink>
              </motion.div>
            </div>
          </div>

          <motion.div
            variants={fadeUp}
            className="flex items-center justify-between gap-4 pb-2 text-[0.78rem] font-bold uppercase tracking-[0.2em] text-linen/72 sm:text-sm"
          >
            <span>30+ years</span>
            <span className="h-px flex-1 bg-linen/22" />
            <span>Private coaching</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section className="section-shell pb-10 pt-16 sm:pb-14 sm:pt-24" id="about">
      <Reveal className="glass grid gap-8 overflow-hidden rounded-[2rem] p-7 sm:p-10 lg:grid-cols-[.82fr_1fr] lg:gap-12 lg:p-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ember">Approach</p>
          <h2 className="mt-5 text-[clamp(2.75rem,5vw,5.4rem)] font-black leading-[.95] tracking-[-0.055em] text-white">
            Training with precision, warmth and purpose.
          </h2>
        </div>
        <div className="flex items-center border-t border-linen/14 pt-7 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
          <p className="max-w-3xl text-lg leading-8 text-linen/84 sm:text-xl sm:leading-9 lg:text-[1.35rem] lg:leading-10">
            Carol helps clients improve strength, fitness, wellbeing, confidence and long-term
            health through carefully tailored training plans. Every session is built around the
            person in front of her, balancing challenge with support so progress feels sustainable,
            intelligent and deeply personal.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

function DesktopServiceCard({ service, nextService, index, total }) {
  const Icon = service.icon;
  const serviceEmailHref = mailtoHref(`Enquiry about ${service.title}`);

  return (
    <div
      className={`relative ${index === 0 ? 'h-[124svh]' : index === total - 1 ? 'h-[88svh]' : 'h-[108svh]'}`}
      style={{ zIndex: 20 + index }}
    >
      <div className="sticky top-[7svh] flex h-[86svh] min-h-[36rem] items-center">
        <motion.article
          className="relative mx-auto w-full"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.42 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {nextService ? (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-10 -bottom-6 h-20 rounded-[1.85rem] border border-linen/10 bg-[linear-gradient(145deg,rgba(180,151,124,.24),rgba(69,52,40,.62))] shadow-[0_20px_46px_rgba(44,33,25,.18)]"
            />
          ) : null}

          <div className="relative min-h-[36rem] overflow-hidden rounded-[2rem] border border-linen/20 bg-[linear-gradient(145deg,rgba(139,118,99,.95),rgba(91,72,57,.98)_48%,rgba(48,36,28,.98))] px-8 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,.14),0_28px_76px_rgba(44,33,25,.3)] lg:min-h-[40rem] lg:px-14 lg:py-12 xl:min-h-[42rem] xl:px-[4.5rem]">
            <div className={`absolute inset-x-8 top-0 h-1 rounded-full bg-gradient-to-r ${service.accent} opacity-80`} />
            <div
              aria-hidden="true"
              className={`absolute -right-20 -top-24 hidden h-72 w-72 rounded-full ${service.glow} opacity-[0.1] blur-2xl lg:block`}
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(255,248,238,.12),transparent_26rem),linear-gradient(180deg,rgba(255,255,255,.07),transparent_34%,rgba(44,33,25,.18))]" />

            <div className="relative z-10 flex min-h-[inherit] flex-col">
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl border border-linen/18 bg-linen/12 text-linen shadow-[0_14px_34px_rgba(44,33,25,.2)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-ember/86">
                    Service {String(index + 1).padStart(2, '0')}
                  </p>
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-linen/50">
                  {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                </p>
              </div>

              <div className="mt-9 max-w-7xl xl:mt-10">
                <h3 className="max-w-7xl text-[clamp(3.45rem,6.5vw,7.4rem)] font-extrabold leading-[.88] tracking-[-0.055em] text-white">
                  {service.title}
                </h3>
                <p className="mt-6 max-w-5xl text-xl leading-9 text-linen/78 lg:text-[1.48rem] lg:leading-10">
                  {service.description}
                </p>

                <div className="mt-8 flex max-w-5xl flex-wrap gap-2.5">
                  {service.includes.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-linen/16 bg-linen/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.13em] text-linen/82 shadow-[inset_0_1px_0_rgba(255,255,255,.08)] lg:text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex flex-wrap items-end justify-between gap-6 pt-10">
                <div className="relative z-20 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
                  <a
                    href={serviceEmailHref}
                    className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-linen/20 bg-button-glow px-7 py-4 text-base font-bold text-linen shadow-[0_14px_34px_rgba(44,33,25,.24)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(44,33,25,.3)] focus:outline-none focus:ring-2 focus:ring-copper/70 focus:ring-offset-2 focus:ring-offset-coal lg:text-lg"
                  >
                    <Mail className="h-5 w-5" />
                    Enquire about {service.title}
                  </a>
                  <a
                    href={phoneHref}
                    className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-linen/24 bg-linen/10 px-7 py-4 text-base font-bold text-linen shadow-[0_10px_28px_rgba(44,33,25,.18)] transition duration-200 hover:-translate-y-0.5 hover:border-linen/42 hover:bg-linen/16 focus:outline-none focus:ring-2 focus:ring-copper/70 focus:ring-offset-2 focus:ring-offset-coal lg:text-lg"
                  >
                    <Phone className="h-5 w-5" />
                    Call Carol
                  </a>
                </div>
                <div className="flex min-w-[14rem] flex-1 items-center gap-4">
                  <div className={`h-px flex-1 bg-gradient-to-r ${service.accent} opacity-70`} />
                  <Sparkles className="h-5 w-5 shrink-0 text-ember/70" />
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}

function MobileServiceCard({ service, index, total }) {
  const Icon = service.icon;
  const serviceEmailHref = mailtoHref(`Enquiry about ${service.title}`);

  return (
    <Reveal>
      <article className="relative overflow-hidden rounded-[1.65rem] border border-linen/20 bg-[linear-gradient(145deg,rgba(139,118,99,.96),rgba(88,69,55,.98)_52%,rgba(48,36,28,.98))] p-5 shadow-[0_18px_42px_rgba(44,33,25,.26)]">
        <div className={`absolute inset-x-5 top-0 h-1 rounded-full bg-gradient-to-r ${service.accent} opacity-80`} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(255,248,238,.14),transparent_18rem),linear-gradient(180deg,rgba(255,255,255,.08),transparent_36%,rgba(44,33,25,.22))]" />
        <div className="relative z-10">
          <div className="flex items-center justify-between gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-2xl border border-linen/18 bg-linen/12 text-linen shadow-[0_10px_26px_rgba(44,33,25,.22)]">
              <Icon className="h-5 w-5" />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember/82">
              {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </p>
          </div>

          <h3 className="mt-7 text-[clamp(2.1rem,9vw,3.15rem)] font-extrabold leading-[.92] tracking-[-0.045em] text-white">
            {service.title}
          </h3>
          <p className="mt-4 text-base leading-7 text-linen/82">{service.description}</p>

          <div className="relative z-20 mt-6 grid gap-3">
            <a
              href={serviceEmailHref}
              className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full border border-linen/20 bg-button-glow px-5 py-3 text-sm font-bold text-linen shadow-[0_12px_30px_rgba(44,33,25,.26)] transition duration-200 focus:outline-none focus:ring-2 focus:ring-copper/70 focus:ring-offset-2 focus:ring-offset-coal"
            >
              <Mail className="h-5 w-5" />
              Enquire about {service.title}
            </a>
            <a
              href={phoneHref}
              className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full border border-linen/24 bg-linen/10 px-5 py-3 text-sm font-bold text-linen shadow-[0_10px_24px_rgba(44,33,25,.18)] transition duration-200 focus:outline-none focus:ring-2 focus:ring-copper/70 focus:ring-offset-2 focus:ring-offset-coal"
            >
              <Phone className="h-5 w-5" />
              Call Carol
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {service.includes.map((item) => (
              <span
                key={item}
                className="rounded-full border border-linen/16 bg-linen/10 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-linen/82"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function Services() {
  return (
    <section
      className="relative pb-16 pt-10 sm:pb-24 sm:pt-14"
      id="services"
    >
      <div className="section-shell relative z-10 mb-12 sm:mb-16 lg:mb-20">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ember">
            Services
          </p>
          <h2 className="mt-4 max-w-5xl text-[clamp(3rem,6vw,6.75rem)] font-black leading-[.92] tracking-[-0.06em] text-linen">
            Expert coaching across every stage of fitness.
          </h2>
          <p className="mt-6 max-w-3xl text-xl font-medium leading-9 text-linen/84 sm:text-2xl sm:leading-10">
            Tailored support across strength, mobility, stamina, weight management and wellbeing,
            shaped around your goals, confidence and long-term progress.
          </p>
        </Reveal>
      </div>

      <div className="section-shell grid gap-5 md:hidden">
        {services.map((service, index) => (
          <MobileServiceCard
            key={service.title}
            service={service}
            index={index}
            total={services.length}
          />
        ))}
      </div>

      <div className="relative hidden md:block">
        <div
          aria-hidden="true"
          className="pointer-events-none sticky top-8 z-0 mx-auto -mb-28 text-center text-[10rem] font-extrabold leading-none text-linen/[.055] lg:text-[14rem]"
        >
          SERVICES
        </div>
        <div className="pointer-events-none absolute -right-28 top-52 hidden h-72 w-72 rounded-full bg-ember/10 blur-2xl lg:block" />
        <div className="pointer-events-none absolute -left-28 bottom-40 hidden h-72 w-72 rounded-full bg-ink/12 blur-2xl lg:block" />

        <div className="relative z-10 mx-auto w-[min(92vw,106rem)]">
          {services.map((service, index) => (
            <DesktopServiceCard
              key={service.title}
              service={service}
              nextService={services[index + 1]}
              index={index}
              total={services.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="section-shell py-24 sm:py-32 lg:py-40" id="why">
      <Reveal className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ember">Why Carol</p>
        <motion.h2
          className="mx-auto mt-5 max-w-7xl text-[clamp(2.1rem,9.4vw,3.15rem)] font-black leading-[.98] tracking-[-0.055em] text-linen sm:text-[clamp(3.2rem,7.4vw,8.5rem)] sm:leading-[.88] sm:tracking-[-0.07em]"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block sm:hidden">Personal training built around</span>
          <span className="block sm:hidden">your goals, your body</span>
          <span className="block sm:hidden">and your confidence.</span>
          <span className="hidden sm:block">Personal training built</span>
          <span className="hidden sm:block">around your goals,</span>
          <span className="hidden sm:block">your body and your confidence.</span>
        </motion.h2>
      </Reveal>
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-6">
        {stats.map(([value, label, copy], index) => (
          <Reveal key={label} delay={index * 0.05}>
            <div className="h-full min-h-[18rem] rounded-[2rem] border border-linen/20 bg-[linear-gradient(145deg,rgba(103,82,66,.92),rgba(58,43,34,.9))] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,.12),0_18px_48px_rgba(44,33,25,.24)] transition duration-200 hover:-translate-y-1 hover:border-linen/34 sm:min-h-[21rem] sm:p-8 sm:backdrop-blur-md lg:p-9">
              <p className="text-[clamp(3.75rem,5.1vw,5.75rem)] font-black leading-[1.02] tracking-[-0.055em] text-ember">
                {value}
              </p>
              <h3 className="mt-7 text-2xl font-extrabold leading-tight tracking-[-0.025em] text-white lg:text-[1.7rem]">
                {label}
              </h3>
              <p className="mt-4 text-base leading-7 text-linen/78 lg:text-[1.05rem] lg:leading-8">
                {copy}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section
      className="relative w-full overflow-hidden px-[clamp(1.25rem,5vw,6.5rem)] py-20 sm:py-32 lg:py-44"
      id="contact"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(151,129,111,.38),rgba(70,54,43,.86)_46%,rgba(44,33,25,.96)),radial-gradient(circle_at_82%_28%,rgba(234,213,189,.18),transparent_26rem)]" />
      <div className="pointer-events-none absolute -right-32 top-8 hidden h-[30rem] w-[30rem] rounded-full bg-ember/10 blur-2xl sm:block" />
      <div className="pointer-events-none absolute left-[-10vw] bottom-[-12rem] hidden h-[24rem] w-[42rem] rounded-full bg-ink/16 blur-2xl sm:block" />
      <div className="pointer-events-none absolute right-[-8vw] top-1/2 h-px w-[62vw] bg-[linear-gradient(90deg,transparent,rgba(247,239,228,.32),transparent)] shadow-[0_0_48px_rgba(247,239,228,.22)]" />

      <Reveal className="relative z-10 grid min-h-[30rem] items-center gap-12 sm:min-h-[34rem] lg:grid-cols-[minmax(0,.72fr)_minmax(18rem,.28fr)]">
        <div className="max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ember">
            Initial chat
          </p>
          <h2 className="mt-5 max-w-5xl text-[clamp(2.75rem,13vw,4.2rem)] font-black leading-[.9] tracking-[-0.065em] text-white sm:text-[clamp(3.5rem,8vw,9rem)] sm:leading-[.86]">
            Ready to feel stronger, fitter and more confident?
          </h2>
          <p className="mt-7 max-w-3xl text-[clamp(1.05rem,4.4vw,1.2rem)] font-medium leading-[1.55] text-linen/82 sm:text-[clamp(1.15rem,1.55vw,1.65rem)] sm:text-linen/78">
            Book a friendly first conversation with Carol and shape a plan around where you are
            now, what you need, and the results you want to build.
          </p>
          <div className="mt-10 grid gap-3 sm:flex sm:flex-wrap">
            <ButtonLink href={phoneHref} icon={Phone}>
              {phone}
            </ButtonLink>
            <ButtonLink href={mailtoHref('Personal Training Enquiry')} icon={Mail} variant="secondary">
              {email}
            </ButtonLink>
            <ButtonLink
              href={`https://instagram.com/${instagram}`}
              icon={Instagram}
              variant="secondary"
            >
              @{instagram}
            </ButtonLink>
          </div>
        </div>

        <div className="hidden justify-self-end lg:block">
          <div className="rounded-[2rem] border border-linen/14 bg-linen/8 p-8 text-right shadow-[0_18px_48px_rgba(44,33,25,.22)] backdrop-blur-md">
            <p className="text-6xl font-black leading-none tracking-[-0.06em] text-linen">30+</p>
            <p className="mt-3 text-sm font-bold uppercase tracking-[0.22em] text-linen/64">
              Years Experience
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="section-shell border-t border-linen/16 py-8">
      <div className="flex flex-col gap-5 text-sm text-linen/54 sm:flex-row sm:items-center sm:justify-between">
        <p>Carol Meechan PT</p>
        <div className="flex flex-wrap gap-4">
          <a className="transition hover:text-ember" href={phoneHref}>
            Call
          </a>
          <a className="transition hover:text-ember" href={mailtoHref('Personal Training Enquiry')}>
            {email}
          </a>
          <a className="transition hover:text-ember" href={`https://instagram.com/${instagram}`}>
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="relative overflow-x-hidden">
        <Background />
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <CTA />
        <Footer />
      </main>
    </MotionConfig>
  );
}
