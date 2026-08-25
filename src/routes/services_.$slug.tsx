import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { ServiceGlyph } from "@/components/service-icon";
import { SiteShell } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import { getService, SERVICES } from "@/lib/content";

export const Route = createFileRoute("/services_/$slug")({
  component: ServiceDetailPage,
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.service.name ?? "Service"} — PRAYAVA`,
      },
    ],
  }),
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();
  const idx = SERVICES.findIndex((s) => s.slug === service.slug);
  const prev = idx > 0 ? SERVICES[idx - 1] : SERVICES[SERVICES.length - 1];
  const next = idx < SERVICES.length - 1 ? SERVICES[idx + 1] : SERVICES[0];

  return (
    <SiteShell>
      <section className="hero-wash relative overflow-hidden text-dark-fg">
        <div className="grid-fade pointer-events-none absolute inset-0 opacity-40" />
        <div className="page relative py-16 lg:py-20">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-dark-muted hover:text-dark-fg"
          >
            <ArrowLeft className="size-4" />
            All services
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ServiceGlyph name={service.icon} tone="dark" />
            <p className="text-[11px] font-extrabold tracking-[0.16em] text-accent uppercase">
              {service.number} · {service.badge}
            </p>
          </div>
          <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.4rem,5vw,4.2rem)]">
            {service.name}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-dark-muted">
            {service.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/contact" search={{ service: service.name }}>
                Get a free quote
              </Link>
            </Button>
            <Button asChild size="lg" variant="darkOutline">
              <Link to="/audit">Take the growth audit</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="page grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h2 className="font-display text-3xl">What's included</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.features.map((f) => (
                <li
                  key={f}
                  className="flex gap-3 rounded-xl bg-card px-4 py-4 text-sm shadow-card"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <aside className="h-fit rounded-2xl bg-primary-soft p-7">
            <p className="text-[11px] font-extrabold tracking-[0.16em] text-primary uppercase">
              {service.lever}
            </p>
            <h3 className="mt-3 font-display text-2xl">{service.summary}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Pair this with other levers in the growth stack, or start here and
              expand as results come in.
            </p>
            <Button asChild className="mt-6 w-full" size="lg">
              <Link to="/contact" search={{ service: service.name }}>
                Talk to PRAYAVA
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="pb-20">
        <div className="page flex flex-col gap-3 sm:flex-row">
          {prev && (
            <Link
              to="/services/$slug"
              params={{ slug: prev.slug }}
              className="flex flex-1 items-center justify-between rounded-xl bg-card px-5 py-5 shadow-card"
            >
              <span>
                <span className="block text-[11px] font-bold tracking-wide text-muted uppercase">
                  Previous
                </span>
                <span className="font-display text-lg">{prev.name}</span>
              </span>
              <ArrowLeft className="size-4 text-muted" />
            </Link>
          )}
          {next && (
            <Link
              to="/services/$slug"
              params={{ slug: next.slug }}
              className="flex flex-1 items-center justify-between rounded-xl bg-card px-5 py-5 shadow-card"
            >
              <span>
                <span className="block text-[11px] font-bold tracking-wide text-muted uppercase">
                  Next
                </span>
                <span className="font-display text-lg">{next.name}</span>
              </span>
              <ArrowRight className="size-4 text-muted" />
            </Link>
          )}
        </div>
      </section>
    </SiteShell>
  );
}
