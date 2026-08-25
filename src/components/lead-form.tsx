import { useState, type FormEvent } from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { SERVICE_OPTIONS, SITE } from "@/lib/content";
import { saveLead } from "@/lib/leads";
import { submitLead } from "@/lib/whatsapp/leads.server";
import { Button } from "@/components/ui/button";
import { FieldLabel, Input, SelectField, Textarea } from "@/components/ui/input";

export function LeadForm({
  defaultService, defaultMessage, source = "contact", auditScore, recommendedPlan, compact = false,
}: {
  defaultService?: string; defaultMessage?: string; source?: "contact" | "audit";
  auditScore?: number; recommendedPlan?: string; compact?: boolean;
}) {
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);
  const [waStarted, setWaStarted] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const service = String(fd.get("service") ?? "");
    const message = String(fd.get("message") ?? "").trim();
    if (!name || !email || !phone) return;
    setBusy(true);
    const payload = { name, email, phone, service, message, source, auditScore, recommendedPlan };
    saveLead(payload);
    try {
      const result = await submitLead({ data: payload });
      setWaStarted(Boolean(result?.whatsapp && "ok" in result.whatsapp && result.whatsapp.ok));
    } catch { setWaStarted(false); }
    setBusy(false);
    setDone(true);
  }

  if (done) {
    return (
      <div className="flex flex-col items-center px-4 py-10 text-center">
        <span className="mb-4 grid size-14 place-items-center rounded-full bg-accent-soft text-accent">
          <CheckCircle2 className="size-7" strokeWidth={1.8} />
        </span>
        <h3 className="font-display text-2xl">Thank you</h3>
        <p className="mt-2 max-w-sm text-sm text-muted">
          We have your details and will reach out within 24 hours with a free growth plan.
        </p>
        {waStarted && (
          <p className="mt-4 flex max-w-sm items-start gap-2 rounded-xl bg-primary-soft px-4 py-3 text-left text-sm text-fg">
            <MessageCircle className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>Check WhatsApp — we just sent a short message so we can qualify your needs in under a minute.</span>
          </p>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3.5">
      {!compact && (
        <div>
          <h3 className="font-display text-xl tracking-tight">Get your free growth plan</h3>
          <p className="mt-1 text-sm text-muted">
            Fill this in and our team will reach out with a plan tailored to your business.
            We&apos;ll also message you on WhatsApp to qualify your needs.
          </p>
        </div>
      )}
      <div>
        <FieldLabel htmlFor="lf-name">Full name</FieldLabel>
        <Input id="lf-name" name="name" placeholder="Your name" required autoComplete="name" />
      </div>
      <div>
        <FieldLabel htmlFor="lf-email">Email address</FieldLabel>
        <Input id="lf-email" name="email" type="email" placeholder="you@example.com" required autoComplete="email" />
      </div>
      <div>
        <FieldLabel htmlFor="lf-phone">WhatsApp number</FieldLabel>
        <Input id="lf-phone" name="phone" type="tel" placeholder="+91 98765 43210" required autoComplete="tel" />
        <p className="mt-1 text-[11px] text-muted">We&apos;ll send a quick qualification chat on this number.</p>
      </div>
      <div>
        <FieldLabel htmlFor="lf-service">What do you need help with?</FieldLabel>
        <SelectField id="lf-service" name="service" defaultValue={defaultService ?? SERVICE_OPTIONS[0]}>
          {SERVICE_OPTIONS.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
        </SelectField>
      </div>
      <div>
        <FieldLabel htmlFor="lf-msg">Tell us about your business</FieldLabel>
        <Textarea id="lf-msg" name="message" placeholder="A short line about your business and goals" defaultValue={defaultMessage} />
      </div>
      <Button type="submit" size="lg" disabled={busy} className="mt-1 w-full">
        {busy ? "Sending…" : "Send my details"}
      </Button>
      <p className="text-center text-[11px] text-muted">
        We respect your privacy. Prefer email?{" "}
        <a className="font-semibold text-primary underline-offset-2 hover:underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </p>
    </form>
  );
}
