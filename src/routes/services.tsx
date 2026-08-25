import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { Reveal } from "@/components/reveal";
import { ServiceGlyph } from "@/components/service-icon";
import { SectionHead, SiteShell } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      {
        title: "Services — Digital Marketing, Web, SEO & More | PRAYAVA",
      },
    ],
  }),
});

export function ServicesPage() {
  return (
    <SiteShell>
      <section className="hero-wash relative overflow-hidden text-dark-fg">
        <div className="grid-fade pointer-events-none absolute inset-0 opacity-40" />
        <div className="page relative grid items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div>
            <p className="text-[11px] font-extrabold tracking-[0.18em] text-accent uppercase">
              What we do
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.4rem,5.5vw,4.4rem)] leading-[0.98]">
              Everything your business needs to{" "}
              <span className="text-gradient">grow online</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-dark-muted">
              From your first website to full-scale SEO, paid ads and AI
              automation — pick one lever or combine them into a single growth
              system.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link to="/audit">
                  Take the growth audit
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
          <GrowthOrbit />
        </div>
      </section>

      <section className="py-20">
        <div className="page">
          <SectionHead
            align="left"
            kicker="The PRAYAVA growth stack"
            title={
              <>
                One connected system,{" "}
                <span className="text-gradient-light">eight growth levers.</span>
              </>
            }
            copy="Choose one service or combine multiple capabilities — strategy, visibility, conversion and automation working together."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 30}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="flex items-center gap-3 rounded-xl bg-card px-4 py-4 shadow-card transition-transform duration-150 hover:-translate-y-0.5"
                >
                  <b className="font-display text-sm text-primary">{s.number}</b>
                  <span>
                    <span className="block text-[11px] font-bold tracking-wide text-muted uppercase">
                      {s.lever}
                    </span>
                    <span className="text-sm font-semibold">{s.name}</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="page">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 40}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-2xl bg-card shadow-card transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={s.image} alt={s.name} className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 rounded-md bg-card/90 px-2.5 py-1 text-[10px] font-extrabold tracking-wide text-primary uppercase backdrop-blur-sm">
                      {s.number} · {s.badge}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-xl">{s.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Explore
                      <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="page space-y-0">
          {SERVICES.map((s) => (
            <article
              key={s.slug}
              id={s.slug}
              className="grid gap-4 border-t border-line py-10 md:grid-cols-[140px_1fr]"
            >
              <p className="font-display text-sm font-extrabold text-primary">
                {s.number} · {s.lever}
              </p>
              <div>
                <h3 className="font-display text-3xl">{s.name}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  {s.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.features.map((f) => (
                    <span
                      key={f}
                      className="rounded-full bg-primary-soft px-3 py-1.5 text-xs font-semibold text-violet"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary"
                >
                  Full service page
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="page">
          <div className="hero-wash relative overflow-hidden rounded-2xl px-8 py-14 text-dark-fg">
            <div className="grid-fade pointer-events-none absolute inset-0 opacity-30" />
            <div className="relative max-w-2xl">
              <p className="text-[11px] font-extrabold tracking-[0.18em] text-accent uppercase">
                Not sure where to start?
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,3rem)]">
                Let's build the right mix of services{" "}
                <span className="text-gradient">for your business.</span>
              </h2>
              <p className="mt-4 text-sm text-dark-muted">
                Tell us what you're building and we'll recommend the exact
                services that will move the needle — free, no obligation.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/contact">Get free growth audit</Link>
                </Button>
                <Button asChild size="lg" variant="darkOutline">
                  <Link to="/audit">Take the 2-minute audit</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function GrowthOrbit() {
  const chips = [
    { label: "Attract", sub: "Marketing", pos: "top-2 left-2" },
    { label: "Convert", sub: "Web", pos: "top-10 right-0" },
    { label: "Get found", sub: "SEO", pos: "bottom-8 left-0" },
    { label: "Automate", sub: "AI", pos: "bottom-2 right-4" },
  ];
  return (
    <div className="relative mx-auto hidden min-h-[380px] w-full max-w-md lg:block">
      <div className="absolute top-1/2 left-1/2 size-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dark-fg/12" />
      <div className="absolute top-1/2 left-1/2 size-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dark-fg/8" />
      <div className="absolute top-1/2 left-1/2 size-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dark-fg/8" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-dark">
        <BrandMark className="size-[118px]" />
      </div>
      {chips.map((c) => (
        <div
          key={c.label}
          className={cn(
            "absolute min-w-[130px] rounded-lg border border-dark-fg/12 bg-dark-fg/8 px-3.5 py-2.5 backdrop-blur-md",
            c.pos,
          )}
        >
          <strong className="block text-xs">{c.label}</strong>
          <small className="text-[10px] text-dark-muted">{c.sub}</small>
        </div>
      ))}
    </div>
  );
}
