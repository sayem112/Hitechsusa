import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Building2,
  CheckCircle2,
  CircuitBoard,
  Code2,
  Cpu,
  Database,
  Globe2,
  Mail,
  MapPin,
  Menu,
  MonitorSmartphone,
  PhoneCall,
  Plug,
  Server,
  ShieldCheck,
  Smartphone,
  TestTube2,
  X,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#packages", label: "Solutions" },
  { href: "#contact", label: "Contact" },
];

const services = [
  {
    icon: <Code2 className="h-7 w-7" />,
    title: "Custom Software Development",
    text: "Business portals, dashboards, SaaS platforms, internal tools, CRM systems, and workflow applications built around your operation.",
  },
  {
    icon: <Globe2 className="h-7 w-7" />,
    title: "Modern Websites",
    text: "High-converting websites for service businesses, startups, medical offices, real estate, training companies, and local brands.",
  },
  {
    icon: <Smartphone className="h-7 w-7" />,
    title: "Mobile App Development",
    text: "iOS and Android apps for marketplaces, delivery platforms, booking systems, community apps, and internal business tools.",
  },
  {
    icon: <Bot className="h-7 w-7" />,
    title: "AI Agents",
    text: "AI-powered assistants that answer questions, handle support, qualify leads, summarize documents, and interact with customers or internal teams.",
  },
  {
    icon: <Plug className="h-7 w-7" />,
    title: "AI Integration",
    text: "Integrate AI into your existing systems, CRMs, websites, apps, workflows, databases, APIs, customer support tools, and business operations.",
  },
  {
    icon: <Zap className="h-7 w-7" />,
    title: "AI Automation",
    text: "Automate intake forms, emails, CRM updates, invoices, scheduling, reporting, data entry, document processing, and repetitive business workflows.",
  },
  {
    icon: <TestTube2 className="h-7 w-7" />,
    title: "AI QA Automation",
    text: "AI-driven quality assurance automation for web, mobile, API, regression, CI/CD pipelines, flaky test reduction, intelligent test generation, and faster release confidence.",
  },
  {
    icon: <CircuitBoard className="h-7 w-7" />,
    title: "Firmware Applications",
    text: "Embedded and firmware-connected applications for devices, hardware systems, IoT workflows, testing tools, integrations, and product support platforms.",
  },
];

const process = [
  "Discovery & business workflow mapping",
  "UX, architecture, and technical roadmap",
  "Build, test, automate, and integrate",
  "Launch, support, and continuous improvement",
];

const packages = [
  {
    name: "Launch",
    price: "Website + AI Readiness",
    items: [
      "Modern business website",
      "Lead capture setup",
      "Basic automation audit",
      "Google-ready structure",
    ],
  },
  {
    name: "Scale",
    price: "Software + Automation",
    items: [
      "Custom web app or portal",
      "Workflow automation",
      "CRM/API integrations",
      "Admin dashboard",
    ],
  },
  {
    name: "Enterprise AI",
    price: "AI Agents + AI QA Automation",
    items: [
      "Custom AI agents",
      "AI testing strategy",
      "CI/CD test automation",
      "Ongoing optimization",
    ],
  },
];

const clients = ["GM", "Wendy's", "Compuware", "Title Source", "Panasonic"];

const TECH_CONFIGS = {
  mobile: {
    title: "Mobile App Delivery",
    icon: <MonitorSmartphone className="h-8 w-8" />,
    lines: ["iOS + Android", "Secure user flows", "Real-time dashboards"],
  },
  software: {
    title: "Custom Software Systems",
    icon: <Server className="h-8 w-8" />,
    lines: ["Portals", "APIs", "Business workflows"],
  },
  ai: {
    title: "AI Automation Engine",
    icon: <Cpu className="h-8 w-8" />,
    lines: ["Agents", "Document AI", "Workflow automation"],
  },
  firmware: {
    title: "Firmware Applications",
    icon: <CircuitBoard className="h-8 w-8" />,
    lines: ["Embedded systems", "Device integrations", "Hardware test tools"],
  },
  qa: {
    title: "AI QA Command Center",
    icon: <Database className="h-8 w-8" />,
    lines: ["Regression", "API testing", "CI/CD quality gates"],
  },
};

function TechVisual({ type }) {
  const item = TECH_CONFIGS[type];

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-2xl">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(59,130,246,0.22),transparent_45%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_35%)]" />
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-blue-400/20" />
      <div className="absolute bottom-0 left-0 h-24 w-full bg-[linear-gradient(90deg,rgba(59,130,246,0.12)_1px,transparent_1px),linear-gradient(rgba(59,130,246,0.12)_1px,transparent_1px)] bg-size-[22px_22px] opacity-40" />
      <div className="relative">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-cyan-200 ring-1 ring-blue-300/20">
          {item.icon}
        </div>
        <h3 className="text-2xl font-black">{item.title}</h3>
        <div className="mt-6 space-y-3">
          {item.lines.map((line) => (
            <div
              key={line}
              className="flex items-center justify-between rounded-2xl bg-white/6 px-4 py-3 text-sm text-slate-200 ring-1 ring-white/10"
            >
              <span>{line}</span>
              <CheckCircle2 className="h-4 w-4 text-emerald-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SiteHeader({ menuOpen, setMenuOpen }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="shrink-0" aria-label="HiTechsUSA home">
          <img
            src="/HitechsUSAlogo.png"
            alt="HiTechsUSA Logo"
            className="h-24 w-auto object-contain drop-shadow-[0_0_12px_rgba(59,130,246,0.35)]"
          />
        </a>

        <nav
          className="hidden items-center gap-8 text-sm text-slate-300 md:flex"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            href="#contact"
            className="hidden rounded-2xl bg-white text-slate-950 hover:bg-slate-200 sm:inline-flex"
          >
            Book a Call
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-white/10 px-6 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-xl px-3 py-2 text-base text-slate-200 hover:bg-white/5 hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button
                href="#contact"
                className="mt-2 w-full rounded-2xl bg-white text-slate-950 hover:bg-slate-200"
                onClick={() => setMenuOpen(false)}
              >
                Book a Call
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7 },
      };

  const fadeScale = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 0.96 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.8, delay: 0.1 },
      };

  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_32%),radial-gradient(circle_at_top_right,rgba(15,23,42,0.9),transparent_30%),linear-gradient(180deg,#020617_0%,#0f172a_38%,#111827_68%,#f8fafc_100%)]" />
      <div className="relative">
        <SiteHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <main>
          <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:pt-16">
            <div className="absolute inset-x-6 top-0 -z-10 h-[520px] overflow-hidden rounded-[3rem] opacity-45">
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.2),rgba(2,6,23,0.95)),url('https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center" />
            </div>

            <motion.div {...fadeUp}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Based in Detroit, Michigan • Serving businesses nationwide since 2007</span>
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-7xl">
                Build mobile apps, AI automation, and smarter software.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                Since 2007, we’ve helped businesses design, build, integrate, test, and automate modern
                digital products — with a strong focus on mobile app development, software development,
                firmware applications, AI automation, AI integration, and AI QA automation.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  href="#contact"
                  className="rounded-2xl bg-blue-500 px-7 py-6 text-base hover:bg-blue-400"
                >
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  href="#services"
                  className="rounded-2xl px-7 py-6 text-base"
                >
                  View Services
                </Button>
              </div>
              <div className="mt-10 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6">
                {[
                  "Websites",
                  "Software Development",
                  "Mobile Apps",
                  "Firmware Apps",
                  "AI Automation",
                  "AI QA Automation",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeScale}>
              <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
                <div className="rounded-[1.5rem] bg-slate-950/80 p-5 ring-1 ring-white/10">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-slate-400">Mobile + AI Delivery Dashboard</p>
                      <p className="text-xl font-bold sm:text-2xl">Apps, Automation &amp; QA</p>
                    </div>
                    <div className="shrink-0 rounded-full bg-emerald-400/15 px-3 py-1 text-sm text-emerald-300">
                      Live
                    </div>
                  </div>
                  <div className="grid gap-4">
                    {[
                      [
                        "Mobile app development",
                        "iOS and Android apps built around your business",
                      ],
                      ["AI QA automation", "Runs regression, API, and release checks"],
                      [
                        "AI business automation",
                        "Automates forms, emails, reports, and workflows",
                      ],
                      ["AI integration", "Connects AI into apps, CRMs, APIs, and dashboards"],
                    ].map(([title, text]) => (
                      <div
                        key={title}
                        className="rounded-2xl border border-white/10 bg-white/6 p-4"
                      >
                        <div className="mb-2 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-300" />
                          <p className="font-semibold">{title}</p>
                        </div>
                        <p className="text-sm text-slate-400">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          <section className="mx-auto max-w-7xl px-6 pb-10">
            <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-2xl backdrop-blur-xl">
              <div className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">
                <Building2 className="h-5 w-5" /> Client experience includes
              </div>
              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {clients.map((client) => (
                  <div
                    key={client}
                    className="rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-5 text-center text-lg font-black text-white shadow-lg sm:text-xl"
                  >
                    {client}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="services" className="mx-auto max-w-7xl px-6 py-20 scroll-mt-24">
            <div className="mb-12 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                What we build
              </p>
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                Modern technology solutions trusted since 2007
              </h2>
              <p className="mt-5 text-lg text-slate-300">
                From idea to launch, we combine software engineering, firmware application experience, AI
                strategy, automation, and QA discipline to help companies move faster with confidence.
              </p>
            </div>
            <div className="mb-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              <TechVisual type="mobile" />
              <TechVisual type="software" />
              <TechVisual type="firmware" />
              <TechVisual type="ai" />
              <TechVisual type="qa" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {services.map((service) => (
                <Card
                  key={service.title}
                  className="rounded-3xl border-white/10 bg-white/6 text-white shadow-xl backdrop-blur"
                >
                  <CardContent className="p-7">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-200">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{service.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="process" className="mx-auto max-w-7xl px-6 py-20 scroll-mt-24">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl md:p-12">
              <div className="mb-10 h-48 rounded-[1.5rem] bg-[linear-gradient(to_bottom,rgba(2,6,23,0.1),rgba(2,6,23,0.7)),url('https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center sm:h-56" />
              <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
                    How we work
                  </p>
                  <h2 className="text-4xl font-black tracking-tight">Simple process. Serious execution.</h2>
                  <p className="mt-5 text-slate-300">
                    We do not just build screens. We understand the operation, map the workflow, design the
                    system, automate the repetitive work, and test it properly before launch.
                  </p>
                </div>
                <div className="grid gap-4">
                  {process.map((step, index) => (
                    <div
                      key={step}
                      className="flex items-center gap-4 rounded-2xl bg-slate-950/60 p-5 ring-1 ring-white/10"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white font-bold text-slate-950">
                        {index + 1}
                      </div>
                      <p className="text-base font-semibold sm:text-lg">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="packages" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20 text-slate-950">
            <div className="mb-12 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Solutions
              </p>
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                Choose the right starting point
              </h2>
              <p className="mt-5 max-w-2xl text-lg text-slate-600">
                Clear packages for websites, software, mobile apps, firmware applications, AI automation,
                and AI QA automation — built for businesses that want speed, structure, and long-term
                support.
              </p>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {packages.map((pkg) => (
                <Card
                  key={pkg.name}
                  className="rounded-3xl border-slate-200 bg-white text-slate-950 shadow-xl"
                >
                  <CardContent className="p-7">
                    <h3 className="text-2xl font-black">{pkg.name}</h3>
                    <p className="mt-2 text-slate-600">{pkg.price}</p>
                    <div className="my-6 h-px bg-slate-200" />
                    <ul className="space-y-4">
                      {pkg.items.map((item) => (
                        <li key={item} className="flex gap-3 text-slate-700">
                          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="contact" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20">
            <div className="rounded-[2rem] bg-white p-8 text-slate-950 md:p-12">
              <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
                <div>
                  <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                    Ready to build your AI-powered business system?
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-slate-600">
                    Tell us what you want to build. We’ll help you turn the idea into a clear roadmap,
                    modern design, working software, and scalable automation.
                  </p>
                </div>
                <div className="rounded-3xl bg-slate-950 p-6 text-white">
                  <p className="mb-5 text-xl font-bold">Contact</p>
                  <div className="space-y-4 text-slate-300">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 shrink-0" /> Detroit, MI
                    </div>
                    <a
                      href="tel:+12482707181"
                      className="flex items-center gap-3 transition-colors hover:text-white"
                    >
                      <PhoneCall className="h-5 w-5 shrink-0" /> (248) 270-7181
                    </a>
                    <a
                      href="mailto:info@hitechsusa.com"
                      className="flex items-center gap-3 transition-colors hover:text-white"
                    >
                      <Mail className="h-5 w-5 shrink-0" /> info@hitechsusa.com
                    </a>
                  </div>
                  <Button
                    href="mailto:info@hitechsusa.com?subject=Free%20Consultation%20Request"
                    className="mt-7 w-full rounded-2xl py-6 text-base"
                  >
                    Request Free Consultation
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 HiTechsUSA. All rights reserved.</p>
          <p>
            Mobile Apps • Firmware Applications • AI Integration • AI Automation • AI QA Automation
          </p>
        </footer>
      </div>
    </div>
  );
}
