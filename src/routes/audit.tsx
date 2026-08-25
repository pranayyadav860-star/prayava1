import { createFileRoute } from "@tanstack/react-router";
import { AuditWizard } from "@/components/audit-wizard";
import { SiteShell } from "@/components/site-chrome";

export const Route = createFileRoute("/audit")({
  component: AuditPage,
  head: () => ({
    meta: [{ title: "Free Growth Audit — PRAYAVA" }],
  }),
});

function AuditPage() {
  return (
    <SiteShell>
      <section className="hero-wash relative overflow-hidden text-dark-fg">
        <div className="grid-fade pointer-events-none absolute inset-0 opacity-40" />
        <div className="page relative py-16 lg:py-20">
          <p className="text-[11px] font-extrabold tracking-[0.18em] text-accent uppercase">
            2-minute growth audit
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.4rem,5vw,4.2rem)]">
            See where growth is leaking —{" "}
            <span className="text-gradient">then plug it.</span>
          </h1>
          <p className="mt-4 max-w-xl text-dark-muted">
            Six questions. A score out of 100. A recommended plan. No email
            required to see your result.
          </p>
        </div>
      </section>
      <section className="py-14">
        <div className="page max-w-4xl">
          <AuditWizard />
        </div>
      </section>
    </SiteShell>
  );
}
