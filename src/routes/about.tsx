import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHead, SiteShell } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import { CAPABILITIES, PROOF } from "@/lib/content";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [{ title: "About PRAYAVA — Build. Grow. Together." }],
  }),
});

function AboutPage() {
  return (
    <SiteShell>
      <section className="hero-wash relative overflow-hidden text-dark-fg">
        <div className="grid-fade pointer-events-none absolute inset-0 opacity-40" />
        <div className="page relative py-16 lg:py-24">
          <p className="text-[11px] font-extrabold tracking-[0.18em] text-accent uppercase">
            About us
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.4rem,5.5vw,4.4rem)] leading-[0.98]">
            A growth partner that speaks{" "}
            <span className="text-gradient">plain language.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-dark-muted">
            PRAYAVA is a Hyderabad-based digital studio. We build websites, run
            marketing that actually brings customers, and stay on the line after
            launch.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="page grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHead
              align="left"
              kicker="The story"
              title="Build. Grow. Together."
              copy="We started PRAYAVA because most small businesses were being sold jargon, retainers, and reports they couldn't read. We wanted the opposite: a team that explains the work, ships on time, and measures what matters — calls, enquiries, customers."
            />
            <p className="max-w-lg text-sm leading-relaxed text-muted">
              Today we work with shops, clinics, restaurants, real estate teams
              and growing brands across India. Same hands-on support whether
              you're around the corner in Hyderabad or working with us remotely.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {CAPABILITIES.map((c) => (
              <div key={c.label} className="rounded-xl bg-card p-6 shadow-card">
                <p className="font-display text-base">{c.label}</p>
                <p className="mt-1 text-xs leading-snug text-muted">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-soft/40 py-20">
        <div className="page">
          <SectionHead
            kicker="How we think"
            title="Four principles, every project"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROOF.map((p, i) => (
              <Reveal key={p.n} delay={i * 50}>
                <article className="rounded-xl bg-card p-6 shadow-card">
                  <p className="font-display text-sm text-primary">{p.n}</p>
                  <h3 className="mt-3 font-display text-xl">{p.label}</h3>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="page overflow-hidden rounded-2xl bg-dark px-8 py-14 text-dark-fg">
          <h2 className="max-w-xl font-display text-[clamp(1.8rem,4vw,2.8rem)]">
            Want a team that picks up the phone?
          </h2>
          <p className="mt-3 max-w-lg text-sm text-dark-muted">
            Book a free growth audit. We'll look at your site, search, and
            marketing — then tell you the fastest wins.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/contact">
                Get free audit
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="darkOutline">
              <Link to="/services">See services</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
