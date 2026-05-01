import { useState } from 'react'

// ─── Types ──────────────────────────────────────────────────────────────────

interface ServiceCard {
  icon: string
  title: string
  description: string
}

interface Step {
  number: string
  title: string
  description: string
}

interface Stat {
  value: string
  label: string
}

interface Testimonial {
  quote: string
  name: string
  role: string
}

interface FAQItem {
  question: string
  answer: string
}

// ─── Data ────────────────────────────────────────────────────────────────────

const services: ServiceCard[] = [
  {
    icon: '🎯',
    title: 'Lead Generation & CRM Automation',
    description:
      'AI-powered pipelines that qualify, nurture and convert leads automatically — so your sales team focuses on closing, not chasing.',
  },
  {
    icon: '📣',
    title: 'Content & Social Media Automation',
    description:
      'Generate, schedule and publish branded content across channels with zero manual input. Stay consistent without hiring a full content team.',
  },
  {
    icon: '📊',
    title: 'Financial Reporting & Analysis',
    description:
      'Automated dashboards, anomaly detection and investor-ready reports in real time. Cut reporting cycles from days to minutes.',
  },
  {
    icon: '💬',
    title: 'Customer Support Automation',
    description:
      'Deploy AI chatbots and intelligent ticket routing that resolve 80% of queries without human intervention — 24/7.',
  },
  {
    icon: '📧',
    title: 'Sales & Outreach Sequences',
    description:
      'Hyper-personalised cold email and LinkedIn outreach at scale, powered by AI. More replies, fewer hours spent.',
  },
  {
    icon: '⚙️',
    title: 'Workflow & Process Automation',
    description:
      'Connect your tools — CRM, ERP, spreadsheets — into seamless automated workflows. Eliminate repetitive tasks for good.',
  },
]

const steps: Step[] = [
  {
    number: '01',
    title: 'Discovery Call',
    description:
      'We audit your current processes and identify the highest-ROI automation opportunities specific to your business.',
  },
  {
    number: '02',
    title: 'Build & Integrate',
    description:
      'Our team builds custom AI workflows and integrates them with your existing tools — no disruption to your operations.',
  },
  {
    number: '03',
    title: 'Launch & Optimise',
    description:
      'We deploy, monitor and continuously improve your automations for maximum impact and measurable results.',
  },
]

const stats: Stat[] = [
  { value: '80%', label: 'Reduction in manual tasks' },
  { value: '3×', label: 'Faster lead response time' },
  { value: '60%', label: 'Cost savings on operations' },
  { value: '2 weeks', label: 'Average implementation time' },
]

const testimonials: Testimonial[] = [
  {
    quote:
      'FinanceBeef automated our entire investor reporting pipeline. What took 3 days now happens overnight — flawlessly.',
    name: 'James T.',
    role: 'CFO, FinTech Scale-up',
  },
  {
    quote:
      'The AI outreach sequences tripled our qualified demo bookings within the first month. Genuinely game-changing.',
    name: 'Sofia R.',
    role: 'Head of Growth, SaaS Startup',
  },
]

const faqs: FAQItem[] = [
  {
    question: 'What tools do you integrate with?',
    answer:
      'We integrate with virtually any modern tool — HubSpot, Salesforce, Notion, Airtable, Slack, Google Workspace, Zapier, Make, and more. If it has an API, we can automate it.',
  },
  {
    question: 'Do I need a technical team to manage the automations?',
    answer:
      'No. We build everything to run with minimal oversight and provide full documentation plus training for your team. Most clients manage their automations with zero technical background.',
  },
  {
    question: 'How long does implementation take?',
    answer:
      'Most projects go live within 2 weeks. Complex enterprise workflows may take 4–6 weeks, but we always deliver a working MVP first so you see results fast.',
  },
  {
    question: 'Is this suitable for small businesses?',
    answer:
      'Absolutely. We work with SMEs through to enterprises. Small businesses often see the biggest gains because they have the most to gain from removing repetitive manual work.',
  },
  {
    question: 'How do you measure ROI?',
    answer:
      'We define KPIs during the discovery phase — typically hours saved, cost per lead, response time, or revenue impact. We report on these monthly so you always know the value delivered.',
  },
]

// ─── Sub-components ──────────────────────────────────────────────────────────

/** Single FAQ accordion item */
function FAQAccordionItem({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left text-white font-semibold hover:bg-white/5 transition-colors"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span>{item.question}</span>
        {/* Chevron icon */}
        <svg
          className={`w-5 h-5 text-gold transition-transform duration-300 flex-shrink-0 ml-4 ${
            open ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-5 text-white/70 leading-relaxed text-sm">
          {item.answer}
        </div>
      )}
    </div>
  )
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function AIAutomationPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 py-28 md:py-40 text-center">
        {/* Decorative radial glow */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="w-[700px] h-[700px] rounded-full bg-gold/10 blur-[120px] opacity-40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Tag */}
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full border border-gold/40 text-gold text-sm font-medium tracking-wide">
            AI Automation Services
          </span>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Automate. Optimise.{' '}
            <span className="text-gold">Scale.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            We implement intelligent AI workflows that reduce manual effort, cut costs,
            and accelerate growth for SMEs and enterprises.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full bg-gold text-black font-semibold text-sm hover:bg-gold-dark transition-colors"
            >
              Get Started
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-3.5 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────────────────────────── */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What We <span className="text-gold">Automate</span>
        </h2>
        <p className="text-white/60 text-center mb-14 max-w-xl mx-auto">
          From lead gen to financial reporting — we build custom AI solutions for every
          part of your business.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-gold/40 hover:bg-white/[0.07] transition-all"
            >
              <span className="text-3xl mb-4 block">{service.icon}</span>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section id="how-it-works" className="px-6 py-20 bg-white/[0.03]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How It <span className="text-gold">Works</span>
          </h2>
          <p className="text-white/60 text-center mb-14 max-w-xl mx-auto">
            A simple, proven three-step process from discovery to live automation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
              >
                <span className="inline-block text-4xl font-extrabold text-gold/30 mb-4">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────── */}
      <section className="px-6 py-16 border-y border-white/10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl md:text-5xl font-extrabold text-gold">{stat.value}</p>
              <p className="text-white/60 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          What Our <span className="text-gold">Clients Say</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              {/* Quote mark */}
              <span className="text-gold text-5xl font-serif leading-none">"</span>
              <p className="text-white/80 text-base leading-relaxed mt-2 mb-6">
                {t.quote}
              </p>
              <div>
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-white/50 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ────────────────────��─────────────────────────────────────── */}
      <section className="px-6 py-20 bg-white/[0.03]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Frequently Asked <span className="text-gold">Questions</span>
          </h2>

          <div className="flex flex-col gap-4">
            {faqs.map((item) => (
              <FAQAccordionItem key={item.question} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section id="contact" className="px-6 py-28 text-center relative overflow-hidden">
        {/* Decorative glow */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="w-[500px] h-[500px] rounded-full bg-gold/10 blur-[100px] opacity-30" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Ready to{' '}
            <span className="text-gold">automate</span> your business?
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Book a free discovery call and find out how much time and money you could save.
          </p>
          <a
            href="mailto:hello@financebeef.com"
            className="inline-block px-10 py-4 rounded-full bg-gold text-black font-bold text-base hover:bg-gold-dark transition-colors"
          >
            Book a Free Call
          </a>
        </div>
      </section>

    </div>
  )
}
