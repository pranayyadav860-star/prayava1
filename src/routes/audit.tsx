import { createFileRoute } from "@tanstack/react-router";
import {
  BarChart3,
  CheckCircle2,
  Search,
  Target,
  TrendingUp,
} from "lucide-react";

import { AuditWizard } from "@/components/audit-wizard";
import { SiteShell } from "@/components/site-chrome";

export const Route = createFileRoute("/audit")({
  component: AuditPage,

  head: () => ({
    meta: [
      {
        title:
          "Free Website & SEO Growth Audit — PRAYAVA",
      },
      {
        name: "description",
        content:
          "Get a free website and SEO growth audit from PRAYAVA. Find performance, visibility and conversion gaps and discover practical ways to grow online.",
      },
      {
        name: "keywords",
        content:
          "free website audit, SEO audit, digital marketing audit, website performance audit, SEO analysis, conversion audit, online growth audit, PRAYAVA",
      },
      {
        property: "og:title",
        content:
          "Free Website & SEO Growth Audit — PRAYAVA",
      },
      {
        property: "og:description",
        content:
          "Find the gaps affecting your website visibility, performance and conversions with PRAYAVA's free growth audit.",
      },
    ],
  }),
});

function AuditPage() {
  return (
    <SiteShell>
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="hero-wash relative overflow-hidden text-dark-fg">
        <div className="grid-fade pointer-events-none absolute inset-0 opacity-40" />

        <div className="pointer-events-none absolute -top-40 right-[-100px] size-[380px] rounded-full bg-accent/15 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 left-[-100px] size-[320px] rounded-full bg-primary/15 blur-3xl" />

        <div className="page relative grid items-center gap-8 py-14 lg:grid-cols-[1fr_0.65fr] lg:py-16">

          {/* LEFT CONTENT */}

          <div className="relative z-10 max-w-2xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-dark-fg/10 bg-dark-fg/6 px-3 py-1.5 text-[10px] font-extrabold tracking-[0.16em] text-dark-fg uppercase">
              <span className="size-1.5 rounded-full bg-accent" />
              Free website & SEO audit
            </div>

            <h1 className="mt-5 font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.98]">
              Find what's stopping your{" "}
              <span className="text-gradient">
                online growth.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-dark-muted lg:text-base">
              Get a quick website, SEO and digital marketing audit to
              uncover visibility, performance and conversion gaps.
            </p>

            {/* KEYWORDS */}

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Website Performance",
                "SEO Visibility",
                "Conversions",
                "Digital Growth",
              ].map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-dark-fg/10 bg-dark-fg/6 px-2.5 py-1 text-[9px] font-semibold text-dark-fg/75"
                >
                  {keyword}
                </span>
              ))}
            </div>

            {/* BENEFITS */}

            <div className="mt-7 grid max-w-xl grid-cols-2 gap-x-5 gap-y-3">
              <AuditBenefit text="Website performance check" />
              <AuditBenefit text="SEO visibility review" />
              <AuditBenefit text="Conversion opportunities" />
              <AuditBenefit text="Practical growth direction" />
            </div>

          </div>

          {/* RIGHT AUDIT ORBIT */}

          <AuditOrbit />

        </div>
      </section>

      {/* =========================================================
          QUICK VALUE STRIP
      ========================================================= */}

      <section className="relative z-10 -mt-5 pb-5">
        <div className="page">

          <div className="grid overflow-hidden rounded-2xl bg-card shadow-card sm:grid-cols-3">

            <AuditValue
              icon={<Search className="size-4" />}
              title="Check visibility"
              copy="See how easily customers can find your business online."
            />

            <AuditValue
              icon={<BarChart3 className="size-4" />}
              title="Find gaps"
              copy="Identify website, SEO and conversion issues."
            />

            <AuditValue
              icon={<TrendingUp className="size-4" />}
              title="Get direction"
              copy="Turn your audit score into practical next steps."
            />

          </div>

        </div>
      </section>

      {/* =========================================================
          AUDIT WIZARD
      ========================================================= */}

      <section className="py-14 lg:py-16">
        <div className="page max-w-4xl">

          <div className="mb-8 text-center">
            <p className="text-[10px] font-extrabold tracking-[0.18em] text-primary uppercase">
              Start your free audit
            </p>

            <h2 className="mt-3 font-display text-[clamp(1.9rem,4vw,3rem)]">
              Get your{" "}
              <span className="text-gradient-light">
                growth score
              </span>
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted">
              Answer a few simple questions about your website,
              SEO and digital marketing. We'll show you where
              your biggest growth opportunities are.
            </p>
          </div>

          <AuditWizard />

        </div>
      </section>
    </SiteShell>
  );
}

/* =========================================================
   AUDIT BENEFIT
========================================================= */

function AuditBenefit({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 text-xs font-semibold text-dark-fg/80">
      <span className="grid size-5 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
        <CheckCircle2 className="size-3" />
      </span>

      {text}
    </div>
  );
}

/* =========================================================
   QUICK VALUE ITEM
========================================================= */

function AuditValue({
  icon,
  title,
  copy,
}: {
  icon: React.ReactNode;
  title: string;
  copy: string;
}) {
  return (
    <div className="flex items-center gap-3 border-line px-5 py-5 sm:px-6">
      <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
        {icon}
      </span>

      <div>
        <strong className="block text-sm">
          {title}
        </strong>

        <span className="mt-0.5 block text-[11px] leading-relaxed text-muted">
          {copy}
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   AUDIT ORBIT
========================================================= */

function AuditOrbit() {
  return (
    <div className="relative mx-auto hidden h-[330px] w-full max-w-[360px] lg:block">

      {/* OUTER ORBIT */}

      <div className="absolute left-1/2 top-1/2 size-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dark-fg/10" />

      {/* MIDDLE ORBIT */}

      <div className="absolute left-1/2 top-1/2 size-[205px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dark-fg/10" />

      {/* INNER ORBIT */}

      <div className="absolute left-1/2 top-1/2 size-[125px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20" />

      {/* GLOW */}

      <div className="absolute left-1/2 top-1/2 size-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-2xl" />

      {/* CENTER */}

      <div className="absolute left-1/2 top-1/2 grid size-[92px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl border border-dark-fg/10 bg-card shadow-card">
        <div className="text-center">
          <Target className="mx-auto size-7 text-primary" />

          <span className="mt-1 block text-[9px] font-extrabold tracking-[0.12em] text-muted uppercase">
            Growth
          </span>

          <strong className="block font-display text-sm">
            Audit
          </strong>
        </div>
      </div>

      {/* SEO */}

      <div className="absolute left-0 top-10 rounded-xl border border-dark-fg/10 bg-card/95 px-3.5 py-2.5 shadow-card backdrop-blur">
        <div className="flex items-center gap-2">
          <Search className="size-4 text-accent" />

          <div>
            <strong className="block text-xs">
              SEO
            </strong>

            <span className="text-[9px] text-muted">
              Visibility
            </span>
          </div>
        </div>
      </div>

      {/* PERFORMANCE */}

      <div className="absolute right-0 top-16 rounded-xl border border-dark-fg/10 bg-card/95 px-3.5 py-2.5 shadow-card backdrop-blur">
        <div className="flex items-center gap-2">
          <BarChart3 className="size-4 text-primary" />

          <div>
            <strong className="block text-xs">
              Performance
            </strong>

            <span className="text-[9px] text-muted">
              Website
            </span>
          </div>
        </div>
      </div>

      {/* CONVERSION */}

      <div className="absolute bottom-8 left-3 rounded-xl border border-dark-fg/10 bg-card/95 px-3.5 py-2.5 shadow-card backdrop-blur">
        <div className="flex items-center gap-2">
          <TrendingUp className="size-4 text-accent" />

          <div>
            <strong className="block text-xs">
              Conversion
            </strong>

            <span className="text-[9px] text-muted">
              Leads
            </span>
          </div>
        </div>
      </div>

      {/* SCORE */}

      <div className="absolute bottom-3 right-2 rounded-xl border border-dark-fg/10 bg-dark px-4 py-3 text-dark-fg shadow-dark">
        <span className="block text-[9px] font-extrabold tracking-[0.14em] text-accent uppercase">
          Growth score
        </span>

        <strong className="mt-1 block font-display text-lg">
          0 — 100
        </strong>
      </div>

      {/* ORBIT DOTS */}

      <span className="absolute left-[23%] top-[29%] size-2 rounded-full bg-accent shadow-[0_0_14px_rgba(34,211,238,0.6)]" />

      <span className="absolute right-[20%] top-[42%] size-1.5 rounded-full bg-primary" />

      <span className="absolute bottom-[26%] left-[47%] size-2 rounded-full bg-accent" />

    </div>
  );
}