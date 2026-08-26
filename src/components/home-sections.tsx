import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Star } from "lucide-react";
import { Reveal } from "@/components/reveal";
import {
  IndustryGlyph,
  PortfolioGlyph,
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

/* =========================================================
   HOME SERVICES
   ========================================================= */

const HOME_SERVICES = SERVICES.filter(
  (service) =>
    service.name !== "Digital Marketing" &&
    service.name !== "Content Marketing",
);

/* =========================================================
   HERO
   ========================================================= */

export function HomeHero() {
  return (
    <section className="hero-wash relative overflow-hidden text-dark-fg">
      <div className="grid-fade pointer-events-none absolute inset-0 opacity-40" />

      <div className="pointer-events-none absolute -top-32 -right-24 size-[420px] rounded-full bg-accent/15 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-32 size-[420px] rounded-full bg-primary/20 blur-3xl" />

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
              <small className="text-[10px] text-muted">
                From click to customer
              </small>
            </span>
          </div>

          <div className="absolute bottom-8 left-0 hidden items-center gap-2.5 rounded-lg border border-dark-fg/12 bg-card/95 px-3.5 py-2.5 text-fg shadow-card sm:flex">
            <span className="grid size-8 place-items-center rounded-md bg-accent-soft text-accent">
              <Star className="size-4" />
            </span>

            <span>
              <strong className="block text-xs">One growth partner</strong>

              <small className="text-[10px] text-muted">
                Strategy · Design · Marketing
              </small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   IMPRESSIVE SERVICES MARQUEE
   ========================================================= */
export function ServicesScrollBar() {
  const items = [...HOME_SERVICES, ...HOME_SERVICES];

  return (
    <section
      aria-label="PRAYAVA services"
      className="relative overflow-hidden border-y border-line bg-dark py-6 text-dark-fg"
    >
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-dark via-dark/80 to-transparent sm:w-32" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-dark via-dark/80 to-transparent sm:w-32" />

      {/* Heading */}
      <div className="relative z-20 mb-4 flex items-center justify-center gap-3 px-4">
        <span className="h-px w-10 bg-accent/50" />

        <span className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-[10px] font-extrabold tracking-[0.2em] text-accent uppercase">
          Explore our services
        </span>

        <span className="h-px w-10 bg-accent/50" />
      </div>

      {/* Marquee */}
      <div className="overflow-hidden">
        <div className="services-marquee flex w-max gap-3 px-3">
          {items.map((s, i) => (
            <Link
              key={`${s.slug}-${i}`}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="
                group
                relative
                flex
                shrink-0
                items-center
                gap-3
                overflow-hidden
                rounded-xl
                border
                border-dark-fg/10
                bg-dark-fg/6
                px-4
                py-3
                text-dark-fg
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-accent/40
                hover:bg-accent/10
              "
            >
              {/* Cyan accent line */}
              <span className="absolute inset-y-0 left-0 w-0.5 bg-accent opacity-0 transition-opacity group-hover:opacity-100" />

              {/* Service image */}
              <span className="grid size-10 shrink-0 place-items-center overflow-hidden rounded-lg border border-dark-fg/10 bg-dark-fg/8">
                <img
                  src={s.image}
                  alt=""
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </span>

              {/* Service information */}
              <span className="flex flex-col">
                <span className="text-sm font-bold leading-tight">
                  {s.name}
                </span>

                <span className="mt-0.5 text-[10px] font-medium text-dark-muted">
                  Explore service
                </span>
              </span>

              <ArrowUpRight
                className="
                  size-4
                  text-dark-muted
                  transition-all
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                  group-hover:text-accent
                "
              />
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .services-marquee {
          animation: services-scroll 32s linear infinite;
        }

        .services-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes services-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .services-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

/* =========================================================
   PROOF STRIP
   ========================================================= */

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
            <b className="block font-display text-lg text-primary">
              {p.n}
            </b>

            <span className="text-[11px] font-bold tracking-wide text-muted uppercase">
              {p.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   SERVICES PREVIEW
   ========================================================= */

export function ServicesPreview() {
  return (
    <section id="services" className="py-20">
      <div className="page">
        <SectionHead
          kicker="What we do"
          title={
            <>
              Solutions that drive{" "}
              <span className="text-gradient-light">real growth</span>
            </>
          }
          copy="From strategy to execution, connected digital solutions that help your business get found on Google and turn visitors into paying customers."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {HOME_SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group relative flex min-h-[250px] overflow-hidden rounded-2xl bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="relative w-[42%] shrink-0 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/95" />

                  <span className="absolute top-4 left-4 rounded-md border border-white/20 bg-dark/75 px-2.5 py-1 text-[10px] font-extrabold tracking-wide text-white uppercase backdrop-blur-sm">
                    {s.badge}
                  </span>

                  <div className="absolute bottom-4 left-4 grid size-9 place-items-center rounded-lg bg-dark/75 text-accent backdrop-blur-sm">
                    <ArrowUpRight className="size-4" />
                  </div>
                </div>

                <div className="flex min-w-0 flex-1 flex-col justify-center p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl leading-tight">
                      {s.name}
                    </h3>

                    <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {s.summary}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-primary">
                    Explore service

                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
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

/* =========================================================
   GROWTH CTA
   ========================================================= */

export function GrowthCTASection() {
  return (
    <section id="growth-plan" className="bg-primary-soft/30 py-14 sm:py-5">
      <div className="page">
        <div className="rounded-2xl bg-card px-6 py-10 text-center shadow-card sm:px-10">
          <p className="text-[10px] font-extrabold tracking-[0.18em] text-primary uppercase">
            Ready to grow?
          </p>

          <h2 className="mt-2 font-display text-[clamp(1.8rem,4vw,2.8rem)] leading-tight">
            Ready to grow your business{" "}
            <span className="text-gradient-light">online?</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            Budget-friendly plans • Fast turnaround • Transparent reporting •
            Real team support • Data + AI-driven strategy
          </p>

          <p className="mt-3 text-sm font-semibold text-fg">
            No long delays. No hidden costs. No disappearing after launch.
          </p>

          <p className="mt-1 text-sm text-muted">
            Clear strategy and consistent results for small and growing businesses.
          </p>

          <div className="mt-6 flex flex-col items-center gap-2">
            <Button asChild>
              <Link to="/contact">
                Get Your Free Growth Plan
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>

            <span className="text-[11px] text-muted">
              Takes 2 minutes. No obligation.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/*
 * Backward compatibility:
 * Keep these exports so existing imports do not break.
 * The old Why PRAYAVA / How We Work sections are no longer rendered.
 */
export function WhySection() {
  return <GrowthCTASection />;
}

export function ProcessSection() {
  return null;
}

/* =========================================================
   INDUSTRIES
   ========================================================= */

export function IndustriesSection() {
  return (
    <section id="industries" className="py-10">
      <div className="page">
        <SectionHead
          kicker="Who we help"
          title={
            <>
              Built for{" "}
              <span className="text-gradient-light">
                every kind of business
              </span>
            </>
          }
          copy="Whatever you sell, we build a plan that fits your industry and your customers."
        />

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 40}>
              <article className="flex h-full flex-col items-center rounded-xl bg-card px-3 py-6 text-center shadow-card transition-shadow hover:shadow-card-hover">
                <IndustryGlyph name={ind.icon} />

                <h3 className="mt-3 font-display text-sm">
                  {ind.name}
                </h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   REAL CLIENT WORK
   ========================================================= */
export function ResultsSection() {
  return (
    <section
      id="results"
      className="relative overflow-hidden bg-dark py-20 text-dark-fg"
    >
      <div className="grid-fade pointer-events-none absolute inset-0 opacity-30" />

      <div className="pointer-events-none absolute -top-40 right-0 size-[460px] rounded-full bg-accent/15 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-0 size-[420px] rounded-full bg-primary/15 blur-3xl" />

      <div className="page relative">
        <SectionHead
          light
          kicker="Real client work"
          title={
            <>
              Real work.{" "}
              <span className="text-gradient">
                Real impact.
              </span>
            </>
          }
          copy="A few of the businesses we've built websites, e-commerce stores, local SEO and landing pages for — real projects, not just numbers."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PORTFOLIO.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-dark-fg/10 bg-dark-fg/6 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-dark-fg/10"
              >
                <div className="flex items-start justify-between gap-2">
                  <PortfolioGlyph name={p.icon} />

                  <ArrowUpRight className="size-4 text-dark-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>

                <h3 className="mt-4 font-display text-lg text-dark-fg">
                  {p.name}
                </h3>

                <p className="mt-1 text-[11px] font-bold tracking-wide text-accent uppercase">
                  {p.service}
                </p>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-dark-muted">
                  {p.description}
                </p>

                <span className="mt-4 text-xs font-semibold text-dark-fg underline-offset-2 group-hover:text-accent group-hover:underline">
                  Visit site →
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="darkOutline">
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

/* =========================================================
   PRICING
   ========================================================= */
export function PricingSection({
  id = "pricing",
}: {
  id?: string;
}) {
  const HOME_PLANS = [
    {
      id: "starter",
      name: "Starter",
      pages: "Upto 4 pages",
      desc: "A clean, fast website foundation for small businesses.",
      support: "25 days",
      revisions: "1 round",
      delivery: "2 days",
      popular: false,
    },
    {
      id: "growth",
      name: "Growth",
      pages: "Upto 6 pages",
      desc: "A stronger website built for visibility, leads and business growth.",
      support: "45 days",
      revisions: "2 rounds",
      delivery: "6 days",
      popular: true,
    },
    {
      id: "pro",
      name: "Pro",
      pages: "Upto 10 pages",
      desc: "A complete website and SEO foundation for growth-focused businesses.",
      support: "2 months",
      revisions: "4 rounds",
      delivery: "12 days",
      popular: false,
    },
  ];

  return (
    <section id={id} className="py-20">
      <div className="page">

        <SectionHead
          kicker="Website packages"
          title={
            <>
              Choose the right{" "}
              <span className="text-gradient-light">
                growth package
              </span>
            </>
          }
          copy="Flexible website packages designed for businesses at different stages of growth."
        />

        <div className="mt-10 grid items-stretch gap-5 md:grid-cols-3">
          {HOME_PLANS.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 70}>
              <Link
                to="/pricing"
                className="group block h-full"
              >
                <article
                  className={cn(
                    "relative flex h-full min-h-[330px] flex-col rounded-2xl bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover",
                    plan.popular &&
                      "border-2 border-primary/40",
                  )}
                >

                  {/* POPULAR */}

                  {plan.popular && (
                    <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-[10px] font-extrabold tracking-wide text-dark-fg uppercase">
                      ★ Most Popular
                    </span>
                  )}

                  {/* HEADER */}

                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-2xl">
                        {plan.name}
                      </h3>

                      <p className="mt-1 text-xs font-semibold text-primary">
                        {plan.pages}
                      </p>
                    </div>

                    <ArrowRight
                      className="size-4 text-muted transition-transform group-hover:translate-x-1 group-hover:text-primary"
                    />
                  </div>

                  {/* SHORT DESCRIPTION */}

                  <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
                    {plan.desc}
                  </p>

                  {/* PLAN DETAILS */}

                  <div className="mt-auto grid grid-cols-3 gap-2 border-t border-line pt-6 text-center">

                    <div>
                      <strong className="block text-sm">
                        {plan.delivery}
                      </strong>

                      <span className="text-[10px] text-muted">
                        Delivery
                      </span>
                    </div>

                    <div>
                      <strong className="block text-sm">
                        {plan.revisions}
                      </strong>

                      <span className="text-[10px] text-muted">
                        Revisions
                      </span>
                    </div>

                    <div>
                      <strong className="block text-sm">
                        {plan.support}
                      </strong>

                      <span className="text-[10px] text-muted">
                        Support
                      </span>
                    </div>

                  </div>

                  {/* CTA */}

                  <div
                    className={cn(
                      "mt-6 flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all",
                      plan.popular
                        ? "bg-primary text-dark-fg group-hover:bg-accent"
                        : "border border-line bg-bg group-hover:border-primary group-hover:bg-primary group-hover:text-dark-fg",
                    )}
                  >
                    View package details

                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </div>

                </article>
              </Link>
            </Reveal>
          ))}
        </div>

        

      </div>
    </section>
  );
}
/* =========================================================
   TESTIMONIALS
   ========================================================= */
export function TestimonialsSection() {
  const testimonialItems = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      id="testimonials"
      className="overflow-hidden bg-primary-soft/35 py-10"
    >
      <div className="page">
        <SectionHead
          kicker="Client love"
          title={
            <>
              What our clients{" "}
              <span className="text-gradient-light">
                say about us
              </span>
            </>
          }
          copy="A few words from the real businesses featured in our portfolio above."
        />
      </div>

      {/* Auto-scroll testimonials */}
      <div className="relative mt-10 overflow-hidden">
        {/* Left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-primary-soft/35 to-transparent sm:w-32" />

        {/* Right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-primary-soft/35 to-transparent sm:w-32" />

        <div className="testimonial-track flex w-max gap-4 px-4">
          {testimonialItems.map((t, i) => (
            <article
              key={`${t.role}-${i}`}
              className="
                w-[290px]
                shrink-0
                rounded-xl
                bg-dark
                p-6
                shadow-card
                transition-transform
                duration-300
                hover:-translate-y-1
                sm:w-[340px]
              "
            >
              {/* Stars */}
              <div className="mb-3 flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className="size-3.5 fill-current"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm leading-relaxed text-dark-fg">
                {t.quote}
              </p>

              {/* Client */}
              <div className="mt-5 flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-full bg-primary font-display text-xs font-bold text-dark-fg">
                  {t.initial}
                </span>

                <span>
                  <b className="block text-sm text-dark-fg">
                    {t.name}
                  </b>

                  <span className="text-xs text-dark-muted">
                    {t.role}
                  </span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .testimonial-track {
          animation: testimonial-scroll 35s linear infinite;
        }

        .testimonial-track:hover {
          animation-play-state: paused;
        }

        @keyframes testimonial-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonial-track {
            animation: none;
            flex-wrap: wrap;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
/* =========================================================
   FAQ
   ========================================================= */

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20">
      <div className="page">
        <SectionHead
          kicker="Good questions"
          title={
            <>
              Frequently asked{" "}
              <span className="text-gradient-light">
                questions
              </span>
            </>
          }
          copy="Simple answers to the questions we hear most — no confusing jargon."
        />

        <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;

            return (
              <div
                key={f.q}
                className="rounded-xl bg-card shadow-card"
              >
                <button
                  type="button"
                  className="flex min-h-12 w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-semibold"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpen(isOpen ? null : i)
                  }
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
                  style={{
                    gridTemplateRows: isOpen
                      ? "1fr"
                      : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted">
                      {f.a}
                    </p>
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

/* =========================================================
   CONTACT
   ========================================================= */

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
                <span className="text-gradient">
                  together.
                </span>
              </h2>

              <p className="mt-4 max-w-md text-sm leading-relaxed text-dark-muted">
                Tell us what you're building and we'll turn
                your idea into a focused digital growth plan —
                free, no obligation.
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