import { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowDown,
  Sun,
  Moon,
  Sparkles,
  Code2,
  Smartphone,
  Monitor,
  Terminal,
  Zap,
} from "lucide-react";
import { useTheme } from "./hooks/use-theme";
import { ProjectCard } from "./components/ProjectCard";
import { projects } from "./data/portfolio";
import {
  GithubIcon,
  FacebookIcon,
  InstagramIcon,
  WhatsappIcon,
  DiscordIcon,
} from "./components/SocialIcons";
import avatar from "./assets/avatar.jpg";


// === EDIT THESE — your real contact links ===
const CONTACT = {
  email: "salmonsadik238@gmail.com",
  phone: "01638951324",
  location: "Bangladesh",
  github: "https://github.com/SafatSadik",
  facebook: "https://www.facebook.com/s.s.sadik.335685/",
  instagram: "https://www.instagram.com/meanest_ending86/",
  whatsapp: "https://wa.link/961fqd",
  discord: "https://discord.com/users/mew03656",
};

const SKILL_GROUPS: { title: string; icon: React.ReactNode; skills: string[] }[] = [
  {
    title: "Frontend",
    icon: <Monitor className="h-4 w-4" />,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (advanced)",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "jQuery",
      "Vite",
      "D3.js",
      "Chart.js",
    ],
  },
  {
    title: "Backend & APIs",
    icon: <Terminal className="h-4 w-4" />,
    skills: [
      "Node.js",
      "Express.js",
      "PHP",
      "REST APIs",
      "API integration",
      "Socket.io",
      "WebSockets",
      "MySQL",
      "SQL",
    ],
  },
  {
    title: "Mobile",
    icon: <Smartphone className="h-4 w-4" />,
    skills: ["React Native", "Expo", "NativeWind"],
  },
  {
    title: "Desktop & Scripting",
    icon: <Code2 className="h-4 w-4" />,
    skills: ["Electron.js", "Python (basics)", "Batch files", ],
  },
  {
    title: "Others",
    icon: <Zap className="h-4 w-4" />,
    skills: ["Git & GitHub","Arduino", "C (basics)"],
  },
];

const ALL_SKILLS = SKILL_GROUPS.flatMap((g) => g.skills);

function Nav() {
  const { theme, toggle } = useTheme();
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full glass px-5 py-2.5">
        <a href="#top" className="flex items-center gap-2 font-display font-bold tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-primary to-[var(--neon)] text-primary-foreground">
            S
          </span>
          <span className="hidden sm:inline">Sadik Shafat</span>
        </a>
          <nav className="flex items-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-muted-foreground">
          <a href="#about" className="transition-colors hover:text-foreground">About</a>
          <a href="#skills" className="transition-colors hover:text-foreground">Skills</a>
          <a href="#projects" className="transition-colors hover:text-foreground">Projects</a>
          <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
        </nav>
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="grid h-9 w-9 place-items-center rounded-full border border-border bg-secondary/60 transition-colors hover:bg-accent"
        >
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-hero pt-24"
    >
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div
        className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-[var(--neon)] opacity-20 blur-3xl animate-blob"
      />
      <div
        className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[var(--neon-2)] opacity-20 blur-3xl animate-blob"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-12 md:grid-cols-[1.1fr_1fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-mono text-muted-foreground">
            <Sparkles className="h-3 w-3 text-[var(--neon)]" />
            Available for hire
          </span>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Hi, I'm <span className="text-gradient">Sadik Shafat</span>
          </h1>
          <p className="mt-3 font-mono text-sm tracking-wide text-[var(--neon)] sm:text-base">
            Web · Mobile · Desktop developer
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I’m a developer who builds full-stack applications across web, mobile, and desktop using technologies like React, Next.js, Node.js, PHP, and Python. I also work with React Native and Electron to create cross-platform apps, and I enjoy building real-time systems, APIs, and interactive UIs with tools like Socket.io, WebSockets, and D3.js.

          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-neon transition-transform hover:-translate-y-0.5"
            >
              View projects <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-6 py-3 text-sm font-semibold transition-colors hover:bg-accent"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 text-muted-foreground">
            <SocialLinks size="md" />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-md">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/40 via-[var(--neon)]/30 to-[var(--neon-2)]/40 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] neon-border shadow-neon animate-float">
            <img
              src={avatar}
              alt="Sadik Shafat"
              width={768}
              height={768}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl glass px-3 py-2 text-xs">
              <span className="font-mono">@SafatSadik</span>
              <span className="flex items-center gap-1.5 text-[var(--neon)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon)] shadow-[0_0_8px_var(--neon)]" />
                online
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsCloud() {
  return (
    <div className="relative border-y border-border bg-secondary/20 py-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap justify-center gap-2">
          {ALL_SKILLS.map((s, i) => (
            <span
              key={s}
              style={{ animationDelay: `${(i % 8) * 0.08}s` }}
              className="group  cursor-pointer relative rounded-full border border-border bg-card/80 px-3.5 py-1.5 text-xs font-mono text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-[var(--neon)]/60 hover:text-foreground hover:shadow-[0_0_12px_var(--neon)]"
            >
              <span className="mr-1.5 text-[var(--neon)]">/</span>
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle eyebrow="01 — About" title="Fast learner. Full-stack mindset." />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          {
            icon: <Monitor className="h-5 w-5" />,
            title: "Websites",
            text: "Modern, responsive sites with React, Next.js, Tailwind & shadcn/ui.",
          },
          {
            icon: <Smartphone className="h-5 w-5" />,
            title: "Mobile apps",
            text: "Cross-platform apps with React Native, Expo & NativeWind.",
          },
          {
            icon: <Monitor className="h-5 w-5" />,
            title: "Desktop apps",
            text: "Electron.js apps that feel native on Windows, macOS & Linux.",
          },
          {
            icon: <Terminal className="h-5 w-5" />,
            title: "Backends & APIs",
            text: "Node.js, Express, PHP, MySQL, REST, WebSockets & Socket.io.",
          },
          {
            icon: <Code2 className="h-5 w-5" />,
            title: "Scripts & tools",
            text: "Python automation, batch files, Arduino projects, C basics.",
          },
          {
            icon: <Zap className="h-5 w-5" />,
            title: "Learning speed",
            text: "I pick up new languages and frameworks in days, not months.",
          },
        ].map((c) => (
          <div
            key={c.title}
            className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40"
          >
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-primary/20 to-[var(--neon)]/20 text-primary">
              {c.icon}
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 ">
      <SectionTitle eyebrow="02 — Stack" title="Tech I build with" />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((g) => (
          <div
            key={g.title}
            className="rounded-2xl border border-border bg-card p-6 shadow-card transition-colors hover:border-primary/40"
          >
            <div className="flex items-center gap-2 text-[var(--neon)]">
              {g.icon}
              <h3 className="font-display text-base font-semibold text-foreground">{g.title}</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {g.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-secondary/70 px-2.5 py-1 text-xs font-mono text-secondary-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle eyebrow="03 — Work" title="Selected projects" />
      <p className="mt-3 max-w-xl text-sm text-muted-foreground">
        Hover a card to pause its slideshow. Click an image to open the live link.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionTitle eyebrow="04 — Contact" title="Let's build something." />
      <div className="mt-10 grid gap-6 md:grid-cols-[1fr_1.2fr]">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
          <h3 className="font-display text-xl font-semibold">Direct contact</h3>
          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-secondary/70 text-[var(--neon)]">
                  <Mail className="h-4 w-4" />
                </span>
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-secondary/70 text-[var(--neon)]">
                  <Phone className="h-4 w-4" />
                </span>
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex items-center gap-3 text-muted-foreground">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-secondary/70 text-[var(--neon)]">
                <MapPin className="h-4 w-4" />
              </span>
              {CONTACT.location}
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
          <h3 className="font-display text-xl font-semibold">Find me online</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            DM me on any platform — I usually reply fast.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <SocialTile href={CONTACT.github} label="GitHub" icon={<GithubIcon className="h-5 w-5" />} />
            <SocialTile href={CONTACT.facebook} label="Facebook" icon={<FacebookIcon className="h-5 w-5" />} />
            <SocialTile href={CONTACT.instagram} label="Instagram" icon={<InstagramIcon className="h-5 w-5" />} />
            <SocialTile href={CONTACT.whatsapp} label="WhatsApp" icon={<WhatsappIcon className="h-5 w-5" />} />
            <SocialTile href={CONTACT.discord} label="Discord" icon={<DiscordIcon className="h-5 w-5" />} />
            <SocialTile href={`mailto:${CONTACT.email}`} label="Email" icon={<Mail className="h-5 w-5" />} />
          </div>
        </div>
      </div>

      <div className="mt-16 rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-transparent to-[var(--neon)]/10 p-10 text-center">
        <h3 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to <span className="text-gradient">ship something great?</span>
        </h3>
        <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
          Whether it's a website, a mobile app, a desktop tool, or a Python script — let's talk.
        </p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-neon transition-transform hover:-translate-y-0.5"
        >
          <Mail className="h-4 w-4" /> Send an email
        </a>
      </div>
    </section>
  );
}

function SocialTile({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-xl border border-border bg-secondary/40 p-3 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-secondary"
    >
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-card text-foreground transition-colors group-hover:text-[var(--neon)]">
        {icon}
      </span>
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
}

function SocialLinks({ size = "md" }: { size?: "sm" | "md" }) {
  const cls =
    size === "md"
      ? "h-10 w-10"
      : "h-8 w-8";
  const items = [
    { href: CONTACT.github, label: "GitHub", icon: <GithubIcon className="h-4 w-4" /> },
    { href: CONTACT.facebook, label: "Facebook", icon: <FacebookIcon className="h-4 w-4" /> },
    { href: CONTACT.instagram, label: "Instagram", icon: <InstagramIcon className="h-4 w-4" /> },
    { href: CONTACT.whatsapp, label: "WhatsApp", icon: <WhatsappIcon className="h-4 w-4" /> },
    { href: CONTACT.discord, label: "Discord", icon: <DiscordIcon className="h-4 w-4" /> },
  ];
  return (
    <>
      {items.map((it) => (
        <a
          key={it.label}
          href={it.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={it.label}
          className={`${cls} grid place-items-center rounded-full border border-border bg-secondary/60 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-[var(--neon)]`}
        >
          {it.icon}
        </a>
      ))}
    </>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--neon)]">{eyebrow}</p>
      <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </div>
  );
}

function Footer() {
  const [year, setYear] = useState<number | string>("");
  useEffect(() => setYear(new Date().getFullYear()), []);
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-muted-foreground sm:flex-row">
        <p>© {year} Sadik Shafat. Built with React + TanStack Start.</p>
        <div className="flex items-center gap-3">
          <SocialLinks size="sm" />
        </div>
      </div>
    </footer>
  );
}

export default function Index() {
  return (
    <>
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <Nav />
      <main>
        <Hero />
        <SkillsCloud />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
