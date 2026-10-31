import { useEffect, useRef, useState } from "react";

/* ==================================================================
   DATA — everything an HR reads first lives at the top.
   Keep this block truthful and up to date.
   ================================================================== */
const profile = {
  name: "Girish Jadav",
  role: "Full-Stack Web Developer",
  tagline:
    "I build fast, responsive web applications with React, Node.js and Python — and ship them to production.",
  summary:
    "BCA graduate with hands-on full-stack development experience across React.js, Node.js and Python. I've built and deployed real-world applications including a streaming platform and an AI-powered voice assistant. Looking for a software engineering role where I can contribute to production code from day one.",
  location: "Anand, Gujarat, India",
  email: "jadavgirish67@gmail.com",
  phone: "+91 6355507458",
  github: "https://github.com/Gmjad27",
  linkedin: "https://www.linkedin.com/in/jadav-girish-57b904381/",
  resumeUrl: "Girish_CV.pdf",
  availability: "Open to full-time roles · Immediate joiner · Willing to relocate",
  stats: [
    { label: "Degree", value: "BCA" },
    { label: "CGPA", value: "7.62 / 10" },
    { label: "Core Stack", value: "React + Node" },
    { label: "Projects Shipped", value: "2+" },
  ],
};

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript (ES6+)", "Java", "C#", "PHP", "C", "SQL (PL/SQL)", "Shell Scripting"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "React Native", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "RESTful APIs", "Python Scripting"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "Oracle"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Claude AI", "Cursor"],
  },
];

const experience = [
  {
    role: "Web Development Intern",
    company: "Venom Technology",
    period: "Nov 2025", // <-- Update this to your actual end date
    location: "Gujarat, India",
    bullets: [
      "Built responsive, interactive user interfaces in React.js used across the company's client web applications.",
      "Contributed to server-side logic, database management and third-party API integrations on the Node.js stack.",
      "Collaborated with senior engineers through code reviews and Git-based workflows to ship features on schedule.",
      "Diagnosed and fixed bugs across the stack, improving application stability and overall user experience.",
    ],
  },
];

const projects = [
  {
    title: "CineFlix",
    subtitle: "Netflix-Inspired Streaming Platform",
    period: "Nov 2025",
    description:
      "Full-stack streaming platform with secure user authentication, personalised dashboards, dynamic movie and TV catalogues, search and filtering, and a fully responsive UI backed by the TMDB API.",
    highlights: [
      "JWT-based authentication with protected routes",
      "Server-side pagination and search across the TMDB API",
      "Deployed and publicly accessible",
    ],
    tech: ["React.js", "Node.js", "MongoDB", "TMDB API"],
    repo: "https://github.com/Gmjad27/cineflix",
    demo: "https://cineflix.jadavgirish67.workers.dev/",
  },
  {
    title: "Desktop Voice Assistant",
    subtitle: "AI / Voice Automation Tool",
    period: "Jan 2025",
    description:
      "Python desktop assistant that handles general Q&A, reminders, voice-activated wake-up and command recognition through a speech-to-text and text-to-speech pipeline.",
    highlights: [
      "Offline speech recognition with SpeechRecognition + pyttsx3",
      "Modular command handler for easy feature extension",
      "Sub-second response on wake-word detection",
    ],
    tech: ["Python", "SpeechRecognition", "pyttsx3", "JavaScript"],
    repo: "https://github.com/Gmjad27/megaProject/tree/main/mega%20project",
    demo: "",
  },
];

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Sardar Patel University",
    period: "Jun 2023 — Jun 2026",
    score: "CGPA 7.62 / 10",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "GSHSEB",
    period: "Completed Mar 2023",
    score: "Science Stream",
  },
];

const keyStrengths = [
  "Self-taught React Native and MongoDB outside coursework — I pick up new stacks quickly and independently.",
  "Comfortable debugging across the full stack, from React state to Node routes to SQL queries.",
  "Have taken projects from idea to deployment, not just to a local build.",
];

/* ==================================================================
   ICONS
   ================================================================== */
const GitHubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.04 11.04 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.67.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
  </svg>
);
const LinkedInIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);
const MailIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
const PhoneIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);
const MapPinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const DownloadIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
    <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 19h16" />
  </svg>
);
const ArrowIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
    <path d="M5 12h14m0 0-6-6m6 6-6 6" />
  </svg>
);
const CheckIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" {...props}>
    <path d="m5 13 4 4L19 7" />
  </svg>
);
const MenuIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);
const CloseIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

/* ==================================================================
   SHARED UI
   ================================================================== */
const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

const container = "mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8";

/* Fade + rise on scroll */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return [ref, visible];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        } ${className}`}
    >
      {children}
    </div>
  );
}

function Section({ id, eyebrow, title, subtitle, tone = "white", children }) {
  const isMuted = tone === "muted";
  return (
    <section
      id={id}
      className={`scroll-mt-20 border-t border-slate-200/70 py-16 sm:py-20 lg:py-24 ${isMuted ? "bg-slate-50" : "bg-white"
        }`}
    >
      <div className={container}>
        <Reveal>
          <div className="mb-10 max-w-2xl sm:mb-14">
            {eyebrow && (
              <p className="mb-3 text-xs font-bold tracking-[0.18em] text-violet-600 uppercase">
                {eyebrow}
              </p>
            )}
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-base leading-relaxed text-slate-600">{subtitle}</p>
            )}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

/* ==================================================================
   NAVBAR
   ================================================================== */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${scrolled
          ? "border-slate-200 bg-white/85 backdrop-blur-xl"
          : "border-transparent bg-white/60 backdrop-blur-sm"
        }`}
    >
      <nav className={`${container} flex h-16 items-center justify-between`}>
        <a
          href="#home"
          className={`rounded text-lg font-bold tracking-tight text-slate-900 transition hover:text-violet-600 ${focusRing}`}
        >
          {profile.name.split(" ")[0]}
          <span className="text-violet-600">.</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition ${focusRing} ${isActive ? "text-violet-700" : "text-slate-600 hover:text-slate-900"
                  }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-violet-600 transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                />
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={profile.resumeUrl}
            download
            className={`rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:text-violet-600 ${focusRing}`}
          >
            Resume
          </a>
          <a
            href={`mailto:${profile.email}?subject=Job%20Opportunity%20—%20Developer%20Role`}
            className={`rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-600 ${focusRing}`}
          >
            Let's talk
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={`-mr-2 rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden ${focusRing}`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-violet-600"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${profile.email}?subject=Job%20Opportunity%20—%20Developer%20Role`}
              onClick={() => setOpen(false)}
              className="mt-3 rounded-lg bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Let's talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ==================================================================
   HERO
   ================================================================== */
function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-20 overflow-hidden border-b border-slate-200/70 bg-white"
    >
      {/* soft background wash */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-32 -right-24 h-80 w-80 rounded-full bg-violet-200/45 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />
      </div>

      <div
        className={`${container} relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24`}
      >
        {/* ---------- Copy ---------- */}
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
            <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Available for full-time roles
          </span>

          <h1 className="mt-6 text-4xl leading-[1.08] font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Hi, I'm {profile.name.split(" ")[0]}.
            <br />
            <span className="bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent">
              {profile.role}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`mailto:${profile.email}?subject=Job%20Opportunity%20—%20Developer%20Role`}
              className={`inline-flex items-center justify-center gap-2 rounded-lg bg-violet-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-600/20 transition hover:bg-violet-700 ${focusRing}`}
            >
              Hire me
              <ArrowIcon className="h-4 w-4" />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className={`inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 ${focusRing}`}
            >
              Download CV
              <DownloadIcon className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2">
              <MapPinIcon className="h-4 w-4 text-slate-400" />
              {profile.location}
            </span>
            <span className="hidden h-4 w-px bg-slate-200 sm:block" />
            <div className="flex items-center gap-2">
              {[
                { href: profile.github, label: "GitHub", Icon: GitHubIcon },
                { href: profile.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
                { href: `mailto:${profile.email}`, label: "Email", Icon: MailIcon },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-violet-300 hover:bg-violet-50 hover:text-violet-600 ${focusRing}`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ---------- Portrait ---------- */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[380px]">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-violet-400/30 via-fuchsia-300/20 to-sky-300/30 blur-2xl" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-2 shadow-xl shadow-slate-900/5">
              <img
                src="girishphoto.jpeg"
                alt={profile.name}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-[1.35rem] object-cover object-top"
              />
            </div>

            <div className="animate-floaty absolute -left-4 top-10 hidden rounded-xl border border-slate-200 bg-white/95 px-3.5 py-2.5 shadow-lg backdrop-blur sm:block">
              <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                Core stack
              </p>
              <p className="text-sm font-bold text-slate-900">React · Node</p>
            </div>

            <div
              className="animate-floaty absolute -right-4 bottom-12 hidden rounded-xl border border-slate-200 bg-white/95 px-3.5 py-2.5 shadow-lg backdrop-blur sm:block"
              style={{ animationDelay: "1.2s" }}
            >
              <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                CGPA
              </p>
              <p className="text-sm font-bold text-slate-900">7.62 / 10</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================================================================
   ABOUT
   ================================================================== */
function About() {
  return (
    <Section
      id="about"
      tone="muted"
      eyebrow="About"
      title="What I bring to a team"
      subtitle="A quick, honest summary of how I work and what I've already shipped."
    >
      <div className="grid gap-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="mb-6 text-lg font-bold text-slate-900">Core strengths</h3>
            <ul className="space-y-5">
              {keyStrengths.map((strength, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100">
                    <CheckIcon className="h-3 w-3 text-violet-600" />
                  </span>
                  <span className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    {strength}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-2 border-t border-slate-100 pt-6">
              {["Immediate joiner", "Willing to relocate", "Open to remote"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 lg:col-span-5">
          {profile.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 70} className="h-full">
              <div className="flex h-full flex-col justify-center rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-md">
                <span className="text-xl font-extrabold text-violet-600 sm:text-2xl">
                  {stat.value}
                </span>
                <span className="mt-1.5 text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ==================================================================
   SKILLS
   ================================================================== */
function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technical toolkit"
      subtitle="The languages, frameworks and tools I use to build and ship applications."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 60} className="h-full">
            <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-md">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50 text-xs font-extrabold text-violet-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-bold text-slate-900">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 transition-colors hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ==================================================================
   EXPERIENCE
   ================================================================== */
function Experience() {
  return (
    <Section
      id="experience"
      tone="muted"
      eyebrow="Experience"
      title="Where I've applied it"
      subtitle="Professional work experience in a real development environment."
    >
      <div className="space-y-6">
        {experience.map((item, i) => (
          <Reveal key={i}>
            <article className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:border-violet-300 hover:shadow-md sm:p-8">
              <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-violet-500 to-sky-400" />

              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                    {item.role}
                  </h3>
                  <p className="mt-1.5 text-sm font-semibold text-violet-600">
                    {item.company}
                    <span className="mx-1.5 font-normal text-slate-300">•</span>
                    <span className="font-medium text-slate-500">{item.location}</span>
                  </p>
                </div>
                <span className="w-fit shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                  {item.period}
                </span>
              </div>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {item.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-sm leading-relaxed text-slate-600"
                  >
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-violet-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ==================================================================
   PROJECTS
   ================================================================== */
function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built end to end"
      subtitle="Full-stack work taken from idea through to deployment — source is public on GitHub."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 90} className="h-full">
            <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-violet-300 hover:shadow-xl sm:p-8">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-violet-600 sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-sm font-medium text-slate-500">
                    {project.subtitle}
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-violet-50 px-3 py-1 text-xs font-bold whitespace-nowrap text-violet-600">
                  {project.period}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                {project.description}
              </p>

              <ul className="mt-6 space-y-2.5">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-violet-500" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3 border-t border-slate-100 pt-6">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-violet-600 ${focusRing}`}
                  >
                    <GitHubIcon className="h-4 w-4" />
                    Source code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:border-violet-500 hover:text-violet-600 ${focusRing}`}
                  >
                    Live demo
                    <ArrowIcon className="h-4 w-4" />
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ==================================================================
   EDUCATION
   ================================================================== */
function Education() {
  return (
    <Section
      id="education"
      tone="muted"
      eyebrow="Education"
      title="Academic background"
      subtitle="Formal education and academic performance."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {education.map((item, i) => (
          <Reveal key={item.degree} delay={i * 80} className="h-full">
            <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-md sm:p-8">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="text-xs font-bold tracking-wider text-violet-600 uppercase">
                  {item.period}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">{item.degree}</h3>
              <p className="mt-2 text-sm text-slate-500">{item.institution}</p>
              <div className="mt-6 inline-block rounded-lg border border-violet-100 bg-violet-50 px-3.5 py-1.5 text-sm font-bold text-violet-700">
                {item.score}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ==================================================================
   CONTACT
   ================================================================== */
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio enquiry from ${form.name || "a recruiter"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const inputClass = `w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:bg-white focus:ring-2 focus:ring-violet-500/20 ${focusRing}`;

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's work together"
      subtitle="I'm actively looking for software development roles. If you have an opening or a question, I usually reply within 24 hours."
    >
      <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
        {/* Details */}
        <div className="space-y-4 lg:col-span-2">
          {[
            {
              Icon: MailIcon,
              label: "Email",
              value: profile.email,
              href: `mailto:${profile.email}`,
            },
            {
              Icon: PhoneIcon,
              label: "Phone",
              value: profile.phone,
              href: `tel:${profile.phone.replace(/\s+/g, "")}`,
            },
          ].map(({ Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className={`group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-violet-300 hover:shadow-md ${focusRing}`}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
                <Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold tracking-wide text-slate-400 uppercase">
                  {label}
                </span>
                <span className="block truncate text-sm font-semibold text-slate-900">
                  {value}
                </span>
              </span>
            </a>
          ))}

          <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
              <MapPinIcon className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs font-semibold tracking-wide text-slate-400 uppercase">
                Location
              </span>
              <span className="block text-sm font-semibold text-slate-900">
                {profile.location}
              </span>
            </span>
          </div>

          <div className="rounded-2xl border border-violet-100 bg-violet-50 p-5">
            <p className="text-sm leading-relaxed font-medium text-violet-900">
              {profile.availability}
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3">
          <h3 className="mb-6 text-lg font-bold text-slate-900">Send a message</h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-semibold tracking-wide text-slate-500 uppercase"
                >
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Jane Doe"
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-semibold tracking-wide text-slate-500 uppercase"
                >
                  Your email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="jane@company.com"
                  required
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-xs font-semibold tracking-wide text-slate-500 uppercase"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                value={form.message}
                onChange={update("message")}
                placeholder="Hi Girish, we have an opening for a React developer…"
                required
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className={`w-full rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-600/20 transition hover:bg-violet-700 ${focusRing}`}
            >
              Send message
            </button>

            <p className="text-center text-xs text-slate-400">
              This opens your email client with the message pre-filled.
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
}

/* ==================================================================
   FOOTER
   ================================================================== */
function Footer() {
  return (
    <footer className="bg-slate-900 py-12">
      <div
        className={`${container} flex flex-col items-center justify-between gap-6 md:flex-row`}
      >
        <div className="text-center md:text-left">
          <p className="text-base font-bold text-white">
            {profile.name}
            <span className="text-violet-400">.</span>
          </p>
          <p className="mt-1 text-sm text-slate-400">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {[
            { href: profile.github, label: "GitHub", Icon: GitHubIcon },
            { href: profile.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
            { href: `mailto:${profile.email}`, label: "Email", Icon: MailIcon },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className={`flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 text-slate-300 transition hover:border-violet-500 hover:bg-violet-600 hover:text-white ${focusRing}`}
            >
              <Icon className="h-4.5 w-4.5" />
            </a>
          ))}
        </div>

        <a
          href="#home"
          className={`rounded-lg text-sm font-semibold text-slate-400 transition hover:text-white ${focusRing}`}
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

/* ==================================================================
   APP
   ================================================================== */
export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-violet-100 selection:text-violet-700">
      <style>{`
        html { scroll-behavior: smooth; }
        body { overflow-x: clip; }
        @keyframes floaty {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-floaty { animation: floaty 6s ease-in-out infinite; }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: .45; transform: scale(1.4); }
        }
        .animate-pulse-dot { animation: pulseDot 1.8s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          .animate-floaty, .animate-pulse-dot { animation: none !important; }
        }
      `}</style>

      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-violet-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}