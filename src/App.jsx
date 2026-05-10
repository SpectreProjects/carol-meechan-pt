import { useRef } from 'react';
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
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

const phone = '07976 218413';
const email = 'carolmeechan@aol.com';
const instagram = 'carolmeechanpt';
const mailtoHref = (subject) => `mailto:${email}?subject=${encodeURIComponent(subject)}`;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
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
    'group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full px-6 py-3.5 text-center text-base font-semibold leading-tight transition duration-300 focus:outline-none focus:ring-2 focus:ring-copper/70 focus:ring-offset-2 focus:ring-offset-coal sm:min-h-[4.25rem] sm:w-auto sm:px-10 sm:py-4 sm:text-[1.12rem]';
  const styles =
    variant === 'primary'
      ? 'bg-button-glow text-linen shadow-[0_20px_56px_rgba(44,33,25,.32)] hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-[0_28px_80px_rgba(44,33,25,.4)]'
      : 'border border-linen/24 bg-linen/12 text-linen shadow-glass backdrop-blur-xl hover:-translate-y-0.5 hover:border-linen/42 hover:bg-linen/20 hover:shadow-[0_24px_70px_rgba(44,33,25,.3)]';

  return (
    <a href={href} className={`${base} ${styles}`}>
      {Icon ? <Icon className="h-5 w-5 transition group-hover:scale-110" /> : null}
      <span>{children}</span>
    </a>
  );
}

function Background() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.3 });
  const bandY = useTransform(smooth, [0, 1], [0, 160]);
  const bandRotate = useTransform(smooth, [0, 1], [-10, 8]);

  return (
    <>
      <div className="grain" />
      <motion.div
        aria-hidden="true"
        style={{ y: bandY, rotate: bandRotate }}
        className="fixed left-[-14vw] top-20 z-0 h-40 w-[128vw] bg-[linear-gradient(90deg,transparent,rgba(243,231,217,.18),rgba(95,70,53,.18),transparent)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-0 h-[38rem] bg-[radial-gradient(circle_at_50%_0%,rgba(255,248,238,.18),transparent_54%)]"
      />
    </>
  );
}

function ECGWaveform() {
  const rhythmPath =
    'M0 150 H58 C68 150 71 132 82 132 C93 132 93 150 105 150 H128 C142 150 146 92 164 92 C185 92 175 236 198 236 C221 236 212 150 236 150 H270 C286 150 290 118 306 118 C328 118 324 184 346 184 C363 184 365 150 383 150 H438 C452 150 456 135 470 135 C484 135 484 150 500 150 H524 C543 150 548 76 570 76 C596 76 583 252 612 252 C640 252 628 150 658 150 H692 C709 150 713 116 731 116 C755 116 752 190 776 190 C794 190 796 150 817 150 H873 C889 150 894 130 910 130 C927 130 928 150 950 150';

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute right-[-48vw] top-[47%] z-[1] h-[30rem] w-[190vw] -translate-y-1/2 opacity-[0.05] sm:right-[-16vw] sm:h-[42rem] sm:w-[100vw] sm:opacity-[0.115] lg:right-[-12vw] lg:h-[48rem] lg:w-[78vw] lg:opacity-[0.155]"
      animate={{ y: [0, -7, 0, 5, 0] }}
      transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg viewBox="0 0 950 300" preserveAspectRatio="none" className="h-full w-full overflow-visible">
        <defs>
          <filter id="ecg-soft-glow" x="-20%" y="-80%" width="140%" height="260%">
            <feGaussianBlur stdDeviation="5.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="ecg-fade" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#f7efe4" stopOpacity="0" />
            <stop offset="18%" stopColor="#f7efe4" stopOpacity="0.75" />
            <stop offset="72%" stopColor="#f7efe4" stopOpacity="0.9" />
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
          strokeWidth="2.55"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.5"
        />
        <motion.path
          d={rhythmPath}
          fill="none"
          stroke="url(#ecg-fade)"
          strokeWidth="3.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="165 790"
          filter="url(#ecg-soft-glow)"
          initial={{ strokeDashoffset: 880 }}
          animate={{ strokeDashoffset: -880 }}
          transition={{ duration: 4.8, repeat: Infinity, ease: 'linear' }}
        />
      </svg>
    </motion.div>
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
            <div className="hidden items-center gap-[clamp(2rem,3vw,4rem)] text-[clamp(1rem,1.05vw,1.15rem)] font-semibold text-linen/76 sm:flex">
              <a href="#about" className="transition hover:text-white">About</a>
              <a href="#services" className="transition hover:text-white">Services</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
            </div>
          </motion.div>

          <div className="grid flex-1 items-center py-[clamp(3rem,7vh,6rem)] lg:grid-cols-[minmax(0,1fr)_minmax(10vw,.18fr)]">
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
                className="max-w-none font-black uppercase leading-[.78] tracking-[-0.075em] text-white"
              >
                <span className="block text-[clamp(4.3rem,20vw,6.4rem)] sm:text-[clamp(5rem,18.5vw,15.5rem)]">
                  Carol
                </span>
                <span className="block text-[clamp(2.85rem,13.2vw,4.65rem)] sm:text-[clamp(4rem,11.6vw,10.8rem)]">
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
                <ButtonLink href={`tel:${phone.replace(/\s/g, '')}`} icon={Phone}>
                  Call Carol
                </ButtonLink>
                <ButtonLink href={mailtoHref('Personal Training Enquiry')} icon={Mail} variant="secondary">
                  Email Carol
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
  const cardRef = useRef(null);
  const Icon = service.icon;
  const serviceEmailHref = `mailto:${email}?subject=${encodeURIComponent(
    `Enquiry about ${service.title}`,
  )}`;
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start 86%', 'end 18%'],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 58,
    damping: 27,
    mass: 0.55,
  });
  const y = useTransform(smoothProgress, [0, 0.18, 0.5, 0.82, 1], [112, 20, 0, -22, -86]);
  const x = useTransform(smoothProgress, [0, 0.22, 0.74, 1], [-26, 0, 0, 28]);
  const scale = useTransform(smoothProgress, [0, 0.22, 0.72, 1], [0.94, 1, 1, 0.935]);
  const rotateZ = useTransform(smoothProgress, [0, 0.24, 0.72, 1], [-2.2, 0, 0, 2.35]);
  const rotateX = useTransform(smoothProgress, [0, 0.24, 0.72, 1], [3.8, 0, 0, -4.2]);
  const opacity = useTransform(smoothProgress, [0, 0.12, 0.86, 1], [0.58, 1, 0.98, 0.62]);
  const glowOpacity = useTransform(smoothProgress, [0, 0.22, 0.78, 1], [0.08, 0.18, 0.14, 0.06]);

  return (
    <div
      ref={cardRef}
      className={`relative ${index === 0 ? 'h-[146svh]' : index === total - 1 ? 'h-[102svh]' : 'h-[124svh]'}`}
      style={{ zIndex: 20 + index }}
    >
      <div className="sticky top-[6svh] flex h-[88svh] min-h-[38rem] items-center [perspective:1400px]">
        <motion.article
          style={{ opacity, scale, x, y, rotateZ, rotateX, transformStyle: 'preserve-3d' }}
          className="relative mx-auto w-full"
        >
          {nextService ? (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-10 -bottom-8 h-24 rounded-[1.85rem] border border-linen/12 bg-[linear-gradient(145deg,rgba(180,151,124,.3),rgba(69,52,40,.72))] shadow-[0_30px_80px_rgba(44,33,25,.22)]"
            />
          ) : null}

          <div className="relative min-h-[38rem] overflow-hidden rounded-[2rem] border border-linen/20 bg-[linear-gradient(145deg,rgba(139,118,99,.95),rgba(91,72,57,.98)_48%,rgba(48,36,28,.98))] px-8 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,.14),0_42px_120px_rgba(44,33,25,.38)] backdrop-blur-2xl lg:min-h-[42rem] lg:px-14 lg:py-12 xl:min-h-[44rem] xl:px-[4.5rem]">
            <div className={`absolute inset-x-8 top-0 h-1 rounded-full bg-gradient-to-r ${service.accent} opacity-80`} />
            <motion.div
              aria-hidden="true"
              style={{ opacity: glowOpacity }}
              className={`absolute -right-20 -top-24 h-80 w-80 rounded-full ${service.glow} blur-3xl`}
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(255,248,238,.14),transparent_28rem),radial-gradient(circle_at_10%_88%,rgba(44,33,25,.32),transparent_25rem),linear-gradient(180deg,rgba(255,255,255,.08),transparent_34%,rgba(44,33,25,.2))]" />

            <div className="relative z-10 flex min-h-[inherit] flex-col">
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl border border-linen/18 bg-linen/12 text-linen shadow-[0_18px_54px_rgba(44,33,25,.25)]">
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
                <a
                  href={serviceEmailHref}
                  className="relative z-20 inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-linen/20 bg-button-glow px-7 py-4 text-base font-bold text-linen shadow-[0_18px_54px_rgba(44,33,25,.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_26px_74px_rgba(44,33,25,.36)] focus:outline-none focus:ring-2 focus:ring-copper/70 focus:ring-offset-2 focus:ring-offset-coal lg:text-lg"
                >
                  <Mail className="h-5 w-5" />
                  Enquire about {service.title}
                </a>
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
  const serviceEmailHref = `mailto:${email}?subject=${encodeURIComponent(
    `Enquiry about ${service.title}`,
  )}`;

  return (
    <Reveal>
      <article className="relative overflow-hidden rounded-[1.65rem] border border-linen/20 bg-[linear-gradient(145deg,rgba(139,118,99,.96),rgba(88,69,55,.98)_52%,rgba(48,36,28,.98))] p-5 shadow-[0_28px_80px_rgba(44,33,25,.34)]">
        <div className={`absolute inset-x-5 top-0 h-1 rounded-full bg-gradient-to-r ${service.accent} opacity-80`} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(255,248,238,.14),transparent_18rem),linear-gradient(180deg,rgba(255,255,255,.08),transparent_36%,rgba(44,33,25,.22))]" />
        <div className="relative z-10">
          <div className="flex items-center justify-between gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-2xl border border-linen/18 bg-linen/12 text-linen shadow-[0_16px_46px_rgba(44,33,25,.28)]">
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

          <a
            href={serviceEmailHref}
            className="relative z-20 mt-6 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full border border-linen/20 bg-button-glow px-5 py-3 text-sm font-bold text-linen shadow-[0_18px_60px_rgba(44,33,25,.32)] transition duration-300 focus:outline-none focus:ring-2 focus:ring-copper/70 focus:ring-offset-2 focus:ring-offset-coal"
          >
            <Mail className="h-5 w-5" />
            Enquire about {service.title}
          </a>

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
  const servicesRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: servicesRef,
    offset: ['start 75%', 'end 25%'],
  });
  const wordY = useTransform(scrollYProgress, [0, 1], [40, -64]);

  return (
    <section
      ref={servicesRef}
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
        <motion.div
          aria-hidden="true"
          style={{ y: wordY }}
          className="pointer-events-none sticky top-8 z-0 mx-auto -mb-28 text-center text-[10rem] font-extrabold leading-none text-linen/[.055] lg:text-[14rem]"
        >
          SERVICES
        </motion.div>
        <div className="pointer-events-none absolute -right-28 top-52 h-80 w-80 rounded-full bg-ember/14 blur-3xl" />
        <div className="pointer-events-none absolute -left-28 bottom-40 h-80 w-80 rounded-full bg-ink/16 blur-3xl" />

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
          className="mx-auto mt-5 max-w-7xl text-[clamp(2.45rem,11.5vw,3.6rem)] font-black leading-[.92] tracking-[-0.065em] text-linen sm:text-[clamp(3.2rem,7.4vw,8.5rem)] sm:leading-[.88] sm:tracking-[-0.07em]"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block">Personal training built</span>
          <span className="block">around your goals,</span>
          <span className="block">your body and your confidence.</span>
        </motion.h2>
      </Reveal>
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-6">
        {stats.map(([value, label, copy], index) => (
          <Reveal key={label} delay={index * 0.05}>
            <div className="h-full min-h-[18rem] rounded-[2rem] border border-linen/20 bg-[linear-gradient(145deg,rgba(103,82,66,.92),rgba(58,43,34,.9))] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,.12),0_30px_90px_rgba(44,33,25,.28)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-linen/34 hover:shadow-[0_38px_110px_rgba(44,33,25,.36)] sm:min-h-[21rem] sm:p-8 lg:p-9">
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
      <div className="pointer-events-none absolute -right-32 top-8 h-[34rem] w-[34rem] rounded-full bg-ember/14 blur-3xl" />
      <div className="pointer-events-none absolute left-[-10vw] bottom-[-12rem] h-[28rem] w-[48rem] rounded-full bg-ink/22 blur-3xl" />
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
            <ButtonLink href={`tel:${phone.replace(/\s/g, '')}`} icon={Phone}>
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
          <div className="rounded-[2rem] border border-linen/14 bg-linen/8 p-8 text-right shadow-glass backdrop-blur-xl">
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
          <a className="transition hover:text-ember" href={`tel:${phone.replace(/\s/g, '')}`}>
            Call
          </a>
          <a className="transition hover:text-ember" href={mailtoHref('Personal Training Enquiry')}>
            Email
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
