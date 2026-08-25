import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Star } from "lucide-react";
import { Reveal } from "@/components/reveal";
import {
  IndustryGlyph,
  PortfolioGlyph,
  ServiceGlyph,
  WhyGlyph,
} from "@/components/service-icon";
import { SectionHead } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/lead-form";
import {
  CAPABILITIES,
  FAQS,
  INDUSTRIES,
  PLANS,
  PORTFOLIO,
  PROOF,
  SERVICES,
  STEPS,
  TESTIMONIALS,
  WHY,
} from "@/lib/content";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function HomeHero() {
  return (
    <section className="hero-wash relative overflow-hidden text-dark-fg">
      <div className="grid-fade pointer-events-none absolute inset-0 opacity-40" />
      <div className="page relative grid items-center gap-12 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-dark-fg/15 bg-dark-fg/8 px-3 py-1.5 text-[11px] font-extrabold tracking-[0.14em] text-dark-muted uppercase">
            <span className="size-1.5 rounded-full bg-accent" />
            Digital growth partner
          </div>
          <h1 className="mt-6 font-display text-[clamp(2.6rem,6vw,4.6rem)] leading-[0.98] text-dark-fg">
            Turn your digital presence into{" "}
            <span className="text-gradient">real growth.</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-dark-muted lg:text-lg">
            PRAYAVA builds websites, SEO systems and performance campaigns that
            help businesses get discovered, trusted and chosen.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/contact">
                Get free growth audit
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="darkOutline">
              <Link to="/services">
                Explore services
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-dark-muted">
            <span>Strategy-led</span>
            <span>Conversion-focused</span>
            <span>Built to scale</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Web", "SEO", "Ads", "AI"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-dark-fg/12 bg-dark-fg/6 px-3 py-1 text-[11px] font-bold tracking-wide text-dark-fg/80"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="relative min-h-[320px]">
          <div className="absolute left-1/2 top-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-dark-fg/10 bg-dark-fg/6 p-2.5 shadow-dark">
            <img
              src="/images/prayava-hero.jpg"
              alt="PRAYAVA digital marketing, web development and SEO growth strategy"
              className="aspect-[5/4] w-full rounded-xl object-cover outline outline-1 -outline-offset-1 outline-dark-fg/10"
            />
          </div>
          <div className="absolute top-6 right-0 hidden items-center gap-2.5 rounded-lg border border-dark-fg/12 bg-card/95 px-3.5 py-2.5 text-fg shadow-card sm:flex">
            <span className="grid size-8 place-items-center rounded-md bg-primary-soft text-primary">
              <ArrowUpRight className="size-4" />
            </span>
            <span>
              <strong className="block text-xs">Growth focused</strong>
              <small className="text-[10px] text-muted">From click to customer</small>
            </span>
          </div>
          <div className="absolute bottom-8 left-0 hidden items-center gap-2.5 rounded-lg border border-dark-fg/12 bg-card/95 px-3.5 py-2.5 text-fg shadow-card sm:flex">
            <span className="grid size-8 place-items-center rounded-md bg-accent-soft text-accent">
              <Star className="size-4" />
            </span>
            <span>
              <strong className="block text-xs">One growth partner</strong>
              <small className="text-[10px] text-muted">Strategy · Design · Marketing</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}


export function ServicesScrollBar() {
  const items = [...SERVICES, ...SERVICES];
  return (
    <div className="relative z-10 border-y border-line/60 bg-card/90 backdrop-blur-md">
      <div className="overflow-hidden py-3">
        <div className="animate-marquee flex w-max gap-3 px-3">
          {items.map((s, i) => (
            <Link
              key={`${s.slug}-${i}`}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-line bg-background px-4 py-2 text-sm font-semibold shadow-sm transition-colors hover:border-primary/40 hover:text-primary"
            >
              <span className="grid size-7 place-items-center overflow-hidden rounded-full bg-primary-soft">
                <img src={s.image} alt="" className="size-7 object-cover" />
              </span>
              {s.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProofStrip() {
  return (
    <div className="page relative z-10 -mt-6">
      <div className="grid grid-cols-2 overflow-hidden rounded-xl bg-card shadow-card sm:grid-cols-4">
        {PROOF.map((p, i) => (
          <div
            key={p.n}
            className={cn(
              "px-4 py-5 text-center",
              i < 3 && "sm:border-r sm:border-line",
              i % 2 === 0 && "border-r border-line sm:border-r-0",
              i < 2 && "border-b border-line sm:border-b-0",
            )}
          >
            <b className="block font-display text-lg text-primary">{p.n}</b>
            <span className="text-[11px] font-bold tracking-wide text-muted uppercase">
              {p.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ServicesPreview() {
  return (
    <section id="services" className="py-20">
      <div className="page">
        <SectionHead
          kicker="What we do"
          title={
            <>
              Solutions that drive <span className="text-gradient-light">real growth</span>
            </>
          }
          copy="From strategy to execution, connected digital solutions that help your business get found on Google and turn visitors into paying customers."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 40}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group relative flex min-h-[280px] flex-col overflow-hidden rounded-2xl bg-card shadow-card transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={s.image} alt={s.name} className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 rounded-md bg-card/90 px-2 py-0.5 text-[10px] font-extrabold tracking-wide text-primary uppercase backdrop-blur-sm">{s.badge}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-[17px]">{s.name}</h3>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted">{s.summary}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary">
                    Learn more
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline">
            <Link to="/services">
              View all services in detail
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function WhySection() {
  return (
    <section id="why" className="bg-primary-soft/40 py-20">
      <div className="page">
        <SectionHead
          kicker="Why PRAYAVA"
          title={
            <>
              Why businesses <span className="text-gradient-light">choose us</span>
            </>
          }
          copy="We keep things simple, honest and focused on one goal: getting you more customers."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={i * 50}>
              <article className="rounded-xl bg-card p-6 shadow-card">
                <WhyGlyph name={w.icon} />
                <h3 className="mt-5 font-display text-[17px]">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{w.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section id="process" className="relative overflow-hidden bg-dark py-20 text-dark-fg">
      <div className="pointer-events-none absolute -top-40 -right-32 size-[480px] rounded-full bg-accent/15 blur-3xl" />
      <div className="page relative">
        <SectionHead
          light
          kicker="How we work"
          title={
            <>
              Simple process. <span className="text-gradient">Powerful results.</span>
            </>
          }
          copy="A clear system from strategy to launch and continuous improvement."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.number} delay={i * 80}>
              <article className="min-h-[220px] rounded-xl border border-dark-fg/10 bg-dark-fg/6 p-7">
                <div className="font-display text-4xl text-dark-fg/15">{s.number}</div>
                <h3 className="mt-4 font-display text-xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-dark-muted">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-2 overflow-hidden rounded-xl border border-dark-fg/10 bg-dark-fg/6 md:grid-cols-4">
          {CAPABILITIES.map((c, i) => (
            <div
              key={c.label}
              className={cn(
                "px-4 py-6 text-center",
                i < 3 && "md:border-r md:border-dark-fg/10",
                i % 2 === 0 && "border-r border-dark-fg/10 md:border-r-0",
                i < 2 && "border-b border-dark-fg/10 md:border-b-0",
              )}
            >
              <strong className="block font-display text-base">{c.label}</strong>
              <small className="mt-1 block text-xs leading-snug text-dark-muted">
                {c.detail}
              </small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IndustriesSection() {
  return (
    <section id="industries" className="py-20">
      <div className="page">
        <SectionHead
          kicker="Who we help"
          title={
            <>
              Built for <span className="text-gradient-light">every kind of business</span>
            </>
          }
          copy="Whatever you sell, we build a plan that fits your industry and your customers."
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 40}>
              <article className="flex flex-col items-center rounded-xl bg-card px-3 py-6 text-center shadow-card">
                <IndustryGlyph name={ind.icon} />
                <h3 className="mt-3 font-display text-sm">{ind.name}</h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ResultsSection() {
  return (
    <section id="results" className="py-20">
      <div className="page">
        <SectionHead
          kicker="Real client work"
          title={
            <>
              Real work. <span className="text-gradient-light">Real impact.</span>
            </>
          }
          copy="A few of the businesses we've built websites, e-commerce stores, local SEO and landing pages for — real projects, not just numbers."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PORTFOLIO.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl bg-card p-6 shadow-card transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="flex items-start justify-between gap-2">
                  <PortfolioGlyph name={p.icon} />
                  <ArrowUpRight className="size-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                </div>
                <h3 className="mt-4 font-display text-lg">{p.name}</h3>
                <p className="mt-1 text-[11px] font-bold tracking-wide text-primary uppercase">{p.service}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
                <span className="mt-4 text-xs font-semibold text-primary underline-offset-2 group-hover:underline">Visit site →</span>
              </a>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline">
            <Link to="/contact">
              Start a project like this
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function PricingSection({ id = "pricing" }: { id?: string }) {
  return (
    <section id={id} className="py-20">
      <div className="page">
        <SectionHead
          kicker="Simple pricing"
          title={
            <>
              Plans that <span className="text-gradient-light">fit your budget</span>
            </>
          }
          copy="Start small and grow — every plan can be customized to what your business actually needs."
        />
        <div className="grid items-stretch gap-5 md:grid-cols-3">
          {PLANS.map((p, i) => (
            <Reveal key={p.id} delay={i * 70}>
              <article
                className={cn(
                  "relative flex h-full min-h-[420px] flex-col rounded-2xl bg-card p-8 shadow-card",
                  p.popular && "border-2 border-primary/40 shadow-card-hover",
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-2xl">{p.name}</h3>
                  {p.popular && (
                    <span className="shrink-0 rounded-full bg-primary px-3 py-1 text-[10px] font-extrabold tracking-wide text-dark-fg uppercase">
                      Most popular
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted">{p.desc}</p>
                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {p.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={p.popular ? "primary" : "outline"}
                  className="mt-8 w-full"
                  size="lg"
                >
                  <Link to="/contact" search={{ plan: p.name }}>
                    Get a free quote
                  </Link>
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-primary-soft/35 py-20">
      <div className="page">
        <SectionHead
          kicker="Client love"
          title={
            <>
              What our clients <span className="text-gradient-light">say about us</span>
            </>
          }
          copy="A few words from the real businesses featured in our portfolio above."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.role} delay={i * 70}>
              <article className="rounded-xl bg-card p-6 shadow-card">
                <div className="mb-3 flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed">{t.quote}</p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-full bg-primary font-display text-xs text-dark-fg">
                    {t.initial}
                  </span>
                  <span>
                    <b className="block text-sm">{t.name}</b>
                    <span className="text-xs text-muted">{t.role}</span>
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20">
      <div className="page">
        <SectionHead
          kicker="Good questions"
          title={
            <>
              Frequently asked <span className="text-gradient-light">questions</span>
            </>
          }
          copy="Simple answers to the questions we hear most — no confusing jargon."
        />
        <div className="mx-auto flex max-w-3xl flex-col gap-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="rounded-xl bg-card shadow-card">
                <button
                  type="button"
                  className="flex min-h-12 w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-semibold"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {f.q}
                  <span
                    className={cn(
                      "grid size-8 shrink-0 place-items-center rounded-md bg-primary-soft text-lg text-primary transition-transform duration-200",
                      isOpen && "rotate-45",
                    )}
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ContactBand() {
  return (
    <section id="contact" className="pb-20">
      <div className="page">
        <div className="hero-wash relative overflow-hidden rounded-2xl px-6 py-12 text-dark-fg sm:px-10 lg:px-14">
          <div className="grid-fade pointer-events-none absolute inset-0 opacity-30" />
          <div className="relative grid items-start gap-10 lg:grid-cols-2">
            <div>
              <p className="text-[11px] font-extrabold tracking-[0.18em] text-accent uppercase">
                Ready to grow?
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.9rem,4vw,3rem)]">
                Let's grow your business{" "}
                <span className="text-gradient">together.</span>
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-dark-muted">
                Tell us what you're building and we'll turn your idea into a
                focused digital growth plan — free, no obligation.
              </p>
              <ul className="mt-6 flex flex-col gap-2 text-sm text-dark-muted">
                <li>Free 30-minute strategy call</li>
                <li>No pressure, no pushy sales</li>
                <li>Reply within 24 hours</li>
              </ul>
            </div>
            <div className="rounded-xl bg-card p-6 text-fg shadow-dark sm:p-8">
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
