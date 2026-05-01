import { useState } from 'react'

// ─── Types ───────────────────────────────────────────────────────────────────

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

// ─── Data ─────────────────────────────────────────────────────────────────────

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

const automationAreas = [
  'Lead Generation & CRM',
  'Content & Social Media',
  'Financial Reporting',
  'Customer Support',
  'Sales & Outreach',
  'Workflow & Process',
  'Other',
]

const teamSizes = ['1–10', '11–50', '51–200', '200+']

// ─── FAQ Accordion Item ───────────────────────────────────────────────────────

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
        <svg
          className={`w-5 h-5 text-[#f0b429] transition-transform duration-300 flex-shrink-0 ml-4 ${
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
        <div className="px-6 pb-5 text-white/70 leading-relaxed text-sm">{item.answer}</div>
      )}
    </div>
  )
}

// ─── Lead Capture Questionnaire ───────────────────────────────────────────────

function LeadQuestionnaire() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '',
    areas: [] as string[],
    currentTools: '',
    budget: '',
    timeline: '',
    message: '',
  })

  const toggleArea = (area: string) => {
    setForm((f) => ({
      ...f,
      areas: f.areas.includes(area)
        ? f.areas.filter((a) => a !== area)
        : [...f.areas, area],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-16 px-6">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-white mb-3">You're on the list!</h3>
        <p className="text-white/60 max-w-md mx-auto">
          Thanks <span className="text-[#f0b429] font-semibold">{form.name}</span>! We'll review
          your details and reach out within 1 business day to schedule your free discovery call.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      {/* Step indicators */}
      <div className="flex items-center justify-center gap-2 mb-10">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                step >= s
                  ? 'bg-[#f0b429] text-black'
                  : 'bg-white/10 text-white/40'
              }`}
            >
              {s}
            </div>
            {s < 3 && <div className={`w-12 h-0.5 ${step > s ? 'bg-[#f0b429]' : 'bg-white/10'}`} />}
          </div>
        ))}
      </div>

      {/* ── Step 1: About You ── */}
      {step === 1 && (
        <div className="space-y-5">
          <h3 className="text-xl font-bold text-white text-center mb-6">Tell us about yourself</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-white/60 text-sm mb-1.5">Full Name *</label>
              <input
                required
                type="text"
                placeholder="Jane Smith"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#f0b429]/60 transition-colors"
              />
            </div>
            <div>
              <label className="block text-white/60 text-sm mb-1.5">Work Email *</label>
              <input
                required
                type="email"
                placeholder="jane@company.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#f0b429]/60 transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="block text-white/60 text-sm mb-1.5">Company Name *</label>
            <input
              required
              type="text"
              placeholder="Acme Corp"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#f0b429]/60 transition-colors"
            />
          </div>
          <div>
            <label className="block text-white/60 text-sm mb-2">Team Size *</label>
            <div className="flex flex-wrap gap-3">
              {teamSizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setForm({ ...form, teamSize: size })}
                  className={`px-5 py-2 rounded-full border text-sm font-medium transition-colors ${
                    form.teamSize === size
                      ? 'bg-[#f0b429] border-[#f0b429] text-black'
                      : 'border-white/20 text-white/60 hover:border-white/40'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <button
            type="button"
            disabled={!form.name || !form.email || !form.company || !form.teamSize}
            onClick={() => setStep(2)}
            className="w-full mt-2 py-3.5 rounded-full bg-[#f0b429] text-black font-bold text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#d4a800] transition-colors"
          >
            Next Step →
          </button>
        </div>
      )}

      {/* ── Step 2: Automation Needs ── */}
      {step === 2 && (
        <div className="space-y-5">
          <h3 className="text-xl font-bold text-white text-center mb-6">What do you want to automate?</h3>
          <div>
            <label className="block text-white/60 text-sm mb-3">
              Select all areas of interest *
            </label>
            <div className="flex flex-wrap gap-3">
              {automationAreas.map((area) => (
                <button
                  key={area}
                  type="button"
                  onClick={() => toggleArea(area)}
                  className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
                    form.areas.includes(area)
                      ? 'bg-[#f0b429] border-[#f0b429] text-black'
                      : 'border-white/20 text-white/60 hover:border-white/40'
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-white/60 text-sm mb-1.5">
              What tools do you currently use?
            </label>
            <input
              type="text"
              placeholder="e.g. HubSpot, Notion, Slack, Zapier..."
              value={form.currentTools}
              onChange={(e) => setForm({ ...form, currentTools: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#f0b429]/60 transition-colors"
            />
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-1/3 py-3.5 rounded-full border border-white/20 text-white/60 text-sm font-semibold hover:bg-white/5 transition-colors"
            >
              ← Back
            </button>
            <button
              type="button"
              disabled={form.areas.length === 0}
              onClick={() => setStep(3)}
              className="w-2/3 py-3.5 rounded-full bg-[#f0b429] text-black font-bold text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#d4a800] transition-colors"
            >
              Next Step →
            </button>
          </div>
        </div>
      )}

      {/* ── Step 3: Budget & Message ── */}
      {step === 3 && (
        <div className="space-y-5">
          <h3 className="text-xl font-bold text-white text-center mb-6">Almost done!</h3>
          <div>
            <label className="block text-white/60 text-sm mb-2">Monthly budget range</label>
            <div className="flex flex-wrap gap-3">
              {['< $1k', '$1k–$3k', '$3k–$10k', '$10k+', 'Not sure yet'].map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => setForm({ ...form, budget: b })}
                  className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
                    form.budget === b
                      ? 'bg-[#f0b429] border-[#f0b429] text-black'
                      : 'border-white/20 text-white/60 hover:border-white/40'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-white/60 text-sm mb-2">Desired timeline</label>
            <div className="flex flex-wrap gap-3">
              {['ASAP', 'Within 1 month', '1–3 months', 'Just exploring'].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setForm({ ...form, timeline: t })}
                  className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
                    form.timeline === t
                      ? 'bg-[#f0b429] border-[#f0b429] text-black'
                      : 'border-white/20 text-white/60 hover:border-white/40'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-white/60 text-sm mb-1.5">
              Anything else we should know?
            </label>
            <textarea
              rows={4}
              placeholder="Describe your biggest pain point or what you'd like to automate first..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#f0b429]/60 transition-colors resize-none"
            />
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-1/3 py-3.5 rounded-full border border-white/20 text-white/60 text-sm font-semibold hover:bg-white/5 transition-colors"
            >
              ← Back
            </button>
            <button
              type="submit"
              className="w-2/3 py-3.5 rounded-full bg-[#f0b429] text-black font-bold text-sm hover:bg-[#d4a800] transition-colors"
            >
              Book My Free Call 🚀
            </button>
          </div>
        </div>
      )}
    </form>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function AIAutomationPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 py-28 md:py-40 text-center">
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="w-[700px] h-[700px] rounded-full bg-[#f0b429]/10 blur-[120px] opacity-40" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#f0b429]/40 text-[#f0b429] text-sm font-medium tracking-wide">
            AI Automation Services
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Automate. Optimise.{' '}
            <span className="text-[#f0b429]">Scale.</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            We implement intelligent AI workflows that reduce manual effort, cut costs,
            and accelerate growth for SMEs and enterprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#questionnaire"
              className="px-8 py-3.5 rounded-full bg-[#f0b429] text-black font-semibold text-sm hover:bg-[#d4a800] transition-colors"
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

      {/* ── SERVICES GRID ─────────────────────────────────────────────────── */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What We <span className="text-[#f0b429]">Automate</span>
        </h2>
        <p className="text-white/60 text-center mb-14 max-w-xl mx-auto">
          From lead gen to financial reporting — we build custom AI solutions for every
          part of your business.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-[#f0b429]/40 hover:bg-white/[0.07] transition-all"
            >
              <span className="text-3xl mb-4 block">{service.icon}</span>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────────── */}
      <section id="how-it-works" className="px-6 py-20 bg-white/[0.03]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How It <span className="text-[#f0b429]">Works</span>
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
                <span className="inline-block text-4xl font-extrabold text-[#f0b429]/30 mb-4">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────────────────── */}
      <section className="px-6 py-16 border-y border-white/10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl md:text-5xl font-extrabold text-[#f0b429]">{stat.value}</p>
              <p className="text-white/60 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          What Our <span className="text-[#f0b429]">Clients Say</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <span className="text-[#f0b429] text-5xl font-serif leading-none">"</span>
              <p className="text-white/80 text-base leading-relaxed mt-2 mb-6">{t.quote}</p>
              <div>
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-white/50 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="px-6 py-20 bg-white/[0.03]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Frequently Asked <span className="text-[#f0b429]">Questions</span>
          </h2>
          <div className="flex flex-col gap-4">
            {faqs.map((item) => (
              <FAQAccordionItem key={item.question} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── QUESTIONNAIRE ─────────────────────────────────────────────────── */}
      <section id="questionnaire" className="px-6 py-24 relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="w-[600px] h-[600px] rounded-full bg-[#f0b429]/5 blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#f0b429]/40 text-[#f0b429] text-sm font-medium">
              Free Discovery Call
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Tell us about your <span className="text-[#f0b429]">automation needs</span>
            </h2>
            <p className="text-white/60">
              Takes 2 minutes. We'll review your answers and reach out within 1 business day.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
            <LeadQuestionnaire />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="px-6 py-20 text-center border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
          Ready to <span className="text-[#f0b429]">automate</span> your business?
        </h2>
        <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
          Join companies already saving 80% of their manual work with FinanceBeef AI automation.
        </p>
        <a
          href="#questionnaire"
          className="inline-block px-10 py-4 rounded-full bg-[#f0b429] text-black font-bold text-base hover:bg-[#d4a800] transition-colors"
        >
          Book a Free Call
        </a>
      </section>

    </div>
  )
}
