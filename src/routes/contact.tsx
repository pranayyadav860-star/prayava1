import { createFileRoute } from "@tanstack/react-router";
import { LeadForm } from "@/components/lead-form";
import { SiteShell } from "@/components/site-chrome";
import { SITE } from "@/lib/content";

type ContactSearch = {
  plan?: string;
  service?: string;
};

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): ContactSearch => ({
    plan: typeof search.plan === "string" ? search.plan : undefined,
    service: typeof search.service === "string" ? search.service : undefined,
  }),
  component: ContactPage,
  head: () => ({
    meta: [{ title: "Contact PRAYAVA — Free growth audit" }],
  }),
});

function ContactPage() {
  const { plan, service } = Route.useSearch();
  const defaultService = service
    ? matchService(service)
    : plan
      ? "Not sure yet — need advice"
      : undefined;
  const defaultMessage = plan
    ? `I'm interested in the ${plan} plan.`
    : service
      ? `I'd like to talk about ${service}.`
      : undefined;

  return (
    <SiteShell>
      <section className="hero-wash relative overflow-hidden text-dark-fg">
        <div className="grid-fade pointer-events-none absolute inset-0 opacity-40" />
        <div className="page relative py-16 lg:py-20">
          <p className="text-[11px] font-extrabold tracking-[0.18em] text-accent uppercase">
            Free growth audit
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.4rem,5vw,4.2rem)]">
            Tell us what you're building.
          </h1>
          <p className="mt-4 max-w-xl text-dark-muted">
            A 30-minute strategy call. No pressure. We reply within 24 hours.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-display text-3xl">What happens next</h2>
            <ol className="mt-6 space-y-4">
              {[
                "You send a few details about the business.",
                "We review your website, search, and current marketing.",
                "You get a plain-language plan with the fastest wins.",
              ].map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary-soft font-display text-sm text-primary">
                    {i + 1}
                  </span>
                  <p className="pt-1.5 text-sm leading-relaxed text-muted">{step}</p>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-sm text-muted">
              Prefer email?{" "}
              <a className="font-semibold text-primary" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
              <br />
              {SITE.city}
            </p>
          </div>
          <div className="rounded-2xl bg-card p-6 shadow-card sm:p-8">
            <LeadForm defaultService={defaultService} defaultMessage={defaultMessage} />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function matchService(name: string) {
  const map: Record<string, string> = {
    "Digital Marketing": "Not sure yet — need advice",
    "Web Development": "Website Design & Development",
    "Branding & Design": "Branding & Design",
    "SEO & Analytics": "SEO & Google Ranking",
    "Social Media Marketing": "Social Media Marketing",
    "AI Solutions": "AI Solutions",
    "Google & Paid Ads": "Google & Paid Ads",
    "Content Marketing": "SEO & Google Ranking",
  };
  return map[name] ?? "Not sure yet — need advice";
}
