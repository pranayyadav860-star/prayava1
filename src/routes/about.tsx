import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Globe2,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHead, SiteShell } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import { CAPABILITIES, PROOF } from "@/lib/content";

export const Route = createFileRoute("/about")({
  component: AboutPage,

  head: () => ({
    meta: [
      {
        title:
          "About PRAYAVA — Digital Marketing, SEO & Lead Generation Agency",
      },
      {
        name: "description",
        content:
          "PRAYAVA helps businesses grow online with high-performing websites, SEO, lead generation, digital marketing and conversion-focused strategies.",
      },
      {
        name: "keywords",
        content:
          "digital marketing agency, SEO agency, lead generation agency, web development agency, website development, online marketing, lead generation, digital growth agency, PRAYAVA Hyderabad",
      },
      {
        property: "og:title",
        content:
          "About PRAYAVA — Digital Marketing, SEO & Lead Generation Agency",
      },
      {
        property: "og:description",
        content:
          "Discover how PRAYAVA helps businesses build better websites, improve Google visibility and generate qualified leads through practical digital marketing.",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <SiteShell>
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="hero-wash relative overflow-hidden text-dark-fg">
        <div className="grid-fade pointer-events-none absolute inset-0 opacity-40" />

        <div className="pointer-events-none absolute -top-40 right-[-100px] size-[400px] rounded-full bg-accent/15 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 left-[-100px] size-[330px] rounded-full bg-primary/15 blur-3xl" />

        <div className="page relative grid items-center gap-8 py-14 lg:grid-cols-[1fr_0.62fr] lg:gap-4 lg:py-16">
          {/* LEFT CONTENT */}

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-dark-fg/10 bg-dark-fg/6 px-3 py-1.5 text-[10px] font-extrabold tracking-[0.16em] text-dark-fg uppercase">
              <span className="size-1.5 rounded-full bg-accent" />
              About PRAYAVA
            </div>

            <h1 className="mt-5 max-w-2xl font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.98]">
              A digital growth partner built for{" "}
              <span className="text-gradient">
                real businesses.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-dark-muted lg:text-base">
              PRAYAVA helps businesses build a stronger online presence
              through websites, SEO, lead generation and practical
              digital marketing strategies.
            </p>

            {/* SEO KEYWORDS */}

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Web Development",
                "SEO",
                "Lead Generation",
                "Digital Marketing",
              ].map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-dark-fg/10 bg-dark-fg/6 px-2.5 py-1 text-[9px] font-semibold text-dark-fg/75"
                >
                  {keyword}
                </span>
              ))}
            </div>

            {/* BUTTONS */}

            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/audit">
                  Get free growth audit
                  <ArrowRight className="size-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="darkOutline"
              >
                <Link to="/services">
                  Explore our services
                </Link>
              </Button>
            </div>

            {/* HERO STATS */}

            <div className="mt-7 grid max-w-xl grid-cols-3 gap-4">
              <AboutStat
                icon={<Target className="size-4" />}
                title="Focused"
                copy="Clear goals"
              />

              <AboutStat
                icon={<Users className="size-4" />}
                title="Hands-on"
                copy="Direct support"
              />

              <AboutStat
                icon={<TrendingUp className="size-4" />}
                title="Growth-led"
                copy="Measurable work"
              />
            </div>
          </div>

          {/* RIGHT ORBIT */}

          <AboutOrbit />
        </div>
      </section>

      {/* =========================================================
          STORY
      ========================================================= */}

      <section className="py-20 lg:py-10">
        <div className="page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHead
              align="left"
              kicker="Our approach"
              title={
                <>
                  Digital marketing without the{" "}
                  <span className="text-gradient-light">
                    unnecessary jargon.
                  </span>
                </>
              }
              copy="We believe good digital work should be easy to understand, useful to your customers and connected to a real business goal."
            />
          </div>

          <div className="space-y-5">
            <p className="text-base leading-relaxed text-muted">
              PRAYAVA was built around a simple idea: businesses
              should not need complicated marketing language to
              understand whether their digital strategy is working.
            </p>

            <p className="text-sm leading-relaxed text-muted">
              We combine website development, search engine
              optimization, lead generation, paid advertising and
              conversion-focused design to create digital experiences
              that help businesses get discovered and generate better
              enquiries.
            </p>

            <p className="text-sm leading-relaxed text-muted">
              Whether you are launching a new website, improving
              Google visibility or looking for a reliable way to
              generate qualified leads, we focus on practical
              improvements that support long-term growth.
            </p>

            <div className="grid gap-3 pt-3 sm:grid-cols-2">
              {[
                "Clear communication",
                "Practical strategies",
                "Lead-focused execution",
                "Long-term digital growth",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl bg-card px-4 py-3 text-sm font-semibold shadow-card"
                >
                  <span className="size-1.5 rounded-full bg-accent" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CAPABILITIES / LEAD GENERATION
      ========================================================= */}
<section className="bg-primary-soft/40 py-20 lg:py-10">
  <div className="page">
    <SectionHead
      kicker="What we bring"
      title={
        <>
          Everything you need to{" "}
          <span className="text-gradient-light">
            generate better leads.
          </span>
        </>
      }
      copy="From high-converting websites and SEO to lead generation and digital marketing, PRAYAVA connects your online presence to one goal: bringing in more qualified enquiries."
    />

    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {/* LEAD GENERATION — FEATURED */}

      <Reveal delay={0}>
        <article className="group relative h-full overflow-hidden rounded-2xl border border-accent/25 bg-dark p-6 text-dark-fg shadow-dark transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
          <div className="pointer-events-none absolute right-0 top-0 size-24 rounded-full bg-accent/10 blur-2xl" />

          <div className="relative flex items-start justify-between gap-3">
            <div className="grid size-10 place-items-center rounded-xl bg-primary text-dark-fg">
              <Target className="size-4" />
            </div>

            <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[9px] font-bold tracking-wide text-accent uppercase">
              Core capability
            </span>
          </div>

          <h3 className="mt-5 font-display text-lg text-dark-fg">
            Lead Generation
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-dark-muted">
            Turn website visitors and marketing traffic into qualified
            enquiries using landing pages, lead forms, campaigns and
            conversion-focused experiences.
          </p>

          <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-accent">
            Built for qualified leads
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </div>
        </article>
      </Reveal>

      {/* EXISTING CAPABILITIES */}

      {CAPABILITIES.slice(0, 3).map((c, i) => (
        <Reveal key={c.label} delay={(i + 1) * 50}>
          <article className="group h-full rounded-2xl border border-dark-fg/10 bg-dark p-6 text-dark-fg shadow-dark transition-all duration-300 hover:-translate-y-1 hover:border-accent/30">
            
            <div className="flex items-start justify-between gap-3">
              <div className="grid size-10 place-items-center rounded-xl bg-primary/15 text-accent transition-colors duration-300 group-hover:bg-primary group-hover:text-dark-fg">
                <Sparkles className="size-4" />
              </div>

              <span className="rounded-full bg-dark-fg/6 px-2.5 py-1 text-[9px] font-bold tracking-wide text-accent uppercase">
                Growth focused
              </span>
            </div>

            <h3 className="mt-5 font-display text-lg text-dark-fg">
              {c.label}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-dark-muted">
              {c.detail}
            </p>

            <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-accent">
              Built for growth
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </div>

          </article>
        </Reveal>
      ))}
    </div>
  </div>
</section>

      {/* =========================================================
          LEAD GENERATION SYSTEM
      ========================================================= */}

      <section className="py-20 lg:py-10">
        <div className="page">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-[10px] font-extrabold tracking-[0.18em] text-primary uppercase">
                Lead generation
              </p>

              <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.4rem)] leading-tight">
                Don't just get{" "}
                <span className="text-gradient-light">
                  traffic.
                </span>
                <br />
                Get enquiries.
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted lg:text-base">
                Your website should do more than look good. We connect
                SEO, landing pages, calls-to-action, forms and digital
                campaigns to create a clearer path from visitor to lead.
              </p>

              <Button
                asChild
                className="mt-7"
                size="lg"
              >
                <Link to="/audit">
                  Find your lead opportunities
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  icon: Globe2,
                  title: "High-converting websites",
                  copy: "Clear pages and calls-to-action designed around customer intent.",
                },
                {
                  icon: Search,
                  title: "SEO visibility",
                  copy: "Help potential customers discover your business through search.",
                },
                {
                  icon: Target,
                  title: "Lead capture",
                  copy: "Forms and landing experiences built to capture genuine enquiries.",
                },
                {
                  icon: BarChart3,
                  title: "Performance tracking",
                  copy: "Understand which channels and pages are creating opportunities.",
                },
              ].map((item, i) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.title} delay={i * 50}>
                    <article className="h-full rounded-2xl bg-card p-6 shadow-card">
                      <div className="grid size-9 place-items-center rounded-lg bg-primary-soft text-primary">
                        <Icon className="size-4" />
                      </div>

                      <h3 className="mt-4 font-display text-base">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs leading-relaxed text-muted">
                        {item.copy}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRINCIPLES
      ========================================================= */}

      <section className="bg-primary-soft/40 py-20 lg:py-10">
        <div className="page">
          <SectionHead
            kicker="How we think"
            title={
              <>
                Simple principles.{" "}
                <span className="text-gradient-light">
                  Better digital work.
                </span>
              </>
            }
            copy="Every project starts with the same focus: understand the business, solve the right problem and create something that can grow."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROOF.map((p, i) => (
              <Reveal key={p.n} delay={i * 50}>
                <article className="group h-full rounded-2xl bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <p className="font-display text-sm font-bold text-primary">
                    {p.n}
                  </p>

                  <h3 className="mt-4 font-display text-xl">
                    {p.label}
                  </h3>

                  <div className="mt-5 h-px w-8 bg-accent transition-all duration-300 group-hover:w-14" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="pb-20 lg:pb-24">
        <div className="page">
          <div className="hero-wash relative overflow-hidden rounded-3xl px-7 py-14 text-dark-fg sm:px-10 lg:px-16 lg:py-20">
            <div className="grid-fade pointer-events-none absolute inset-0 opacity-30" />

            <div className="pointer-events-none absolute -bottom-40 right-[-80px] size-[400px] rounded-full bg-accent/15 blur-3xl" />

            <div className="relative max-w-3xl">
              <p className="text-[10px] font-extrabold tracking-[0.2em] text-accent uppercase">
                Ready to grow?
              </p>

              <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-tight">
                Let's build a stronger{" "}
                <span className="text-gradient">
                  lead generation system.
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-dark-muted lg:text-base">
                Find out where your website, SEO and digital marketing
                can generate more qualified enquiries and turn online
                attention into real business opportunities.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/audit">
                    Start free growth audit
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="darkOutline"
                >
                  <Link to="/contact">
                    Talk to PRAYAVA
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

/* =========================================================
   ABOUT STAT
========================================================= */

function AboutStat({
  icon,
  title,
  copy,
}: {
  icon: React.ReactNode;
  title: string;
  copy: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-dark-fg/6 text-accent">
        {icon}
      </span>

      <div>
        <strong className="block text-xs">
          {title}
        </strong>

        <span className="text-[9px] text-dark-muted">
          {copy}
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   ABOUT ORBIT
========================================================= */

function AboutOrbit() {
  return (
    <div className="relative mx-auto hidden h-[330px] w-full max-w-[350px] lg:block">

      {/* Outer orbit */}
      <div className="absolute left-1/2 top-1/2 size-[275px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dark-fg/10" />

      {/* Middle orbit */}
      <div className="absolute left-1/2 top-1/2 size-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dark-fg/10" />

      {/* Inner orbit */}
      <div className="absolute left-1/2 top-1/2 size-[125px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20" />

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 size-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />

      {/* Center */}
      <div className="absolute left-1/2 top-1/2 grid size-[92px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl border border-dark-fg/10 bg-card shadow-card">
        <div className="text-center">
          <Globe2 className="mx-auto size-7 text-primary" />

          <span className="mt-1 block text-[9px] font-extrabold tracking-[0.12em] text-muted uppercase">
            PRAYAVA
          </span>

          <strong className="block font-display text-sm">
            Digital Growth
          </strong>
        </div>
      </div>

      {/* Strategy */}
      <div className="absolute left-0 top-8 rounded-xl border border-dark-fg/10 bg-card/95 px-3.5 py-2.5 shadow-card backdrop-blur">
        <div className="flex items-center gap-2">
          <Target className="size-4 text-accent" />

          <div>
            <strong className="block text-xs">
              Strategy
            </strong>

            <span className="text-[9px] text-muted">
              Clear direction
            </span>
          </div>
        </div>
      </div>

      {/* Web */}
      <div className="absolute right-0 top-14 rounded-xl border border-dark-fg/10 bg-card/95 px-3.5 py-2.5 shadow-card backdrop-blur">
        <div className="flex items-center gap-2">
          <Globe2 className="size-4 text-primary" />

          <div>
            <strong className="block text-xs">
              Web
            </strong>

            <span className="text-[9px] text-muted">
              Better experience
            </span>
          </div>
        </div>
      </div>

      {/* Lead generation */}
      <div className="absolute bottom-8 left-3 rounded-xl border border-dark-fg/10 bg-card/95 px-3.5 py-2.5 shadow-card backdrop-blur">
        <div className="flex items-center gap-2">
          <Target className="size-4 text-accent" />

          <div>
            <strong className="block text-xs">
              Leads
            </strong>

            <span className="text-[9px] text-muted">
              Qualified enquiries
            </span>
          </div>
        </div>
      </div>

      {/* Growth */}
      <div className="absolute bottom-3 right-2 rounded-xl border border-dark-fg/10 bg-dark px-4 py-3 text-dark-fg shadow-dark">
        <span className="block text-[9px] font-extrabold tracking-[0.14em] text-accent uppercase">
          Focus
        </span>

        <strong className="mt-1 block font-display text-lg">
          Real Growth
        </strong>
      </div>

      {/* Orbit dots */}

      <span className="absolute left-[22%] top-[28%] size-2 rounded-full bg-accent" />

      <span className="absolute right-[20%] top-[40%] size-1.5 rounded-full bg-primary" />

      <span className="absolute bottom-[25%] left-[46%] size-2 rounded-full bg-accent" />
    </div>
  );
}