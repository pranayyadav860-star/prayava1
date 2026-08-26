import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail } from "lucide-react";
import { SERVICE_OPTIONS, SITE } from "@/lib/content";
import { saveLead } from "@/lib/leads";
import { submitLead } from "@/lib/whatsapp/submit-lead";
import { Button } from "@/components/ui/button";
import {
  FieldLabel,
  Input,
  SelectField,
  Textarea,
} from "@/components/ui/input";

export function LeadForm({
  defaultService,
  defaultMessage,
  source = "contact",
  auditScore,
  recommendedPlan,
  compact = false,
}: {
  defaultService?: string;
  defaultMessage?: string;
  source?: "contact" | "audit";
  auditScore?: number;
  recommendedPlan?: string;
  compact?: boolean;
}) {
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (busy) return;

    setError("");
    setBusy(true);

    const form = e.currentTarget;
    const fd = new FormData(form);

    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const service = String(fd.get("service") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    if (!name || !email || !phone) {
      setError("Please fill in all required fields.");
      setBusy(false);
      return;
    }

    const payload = {
      name,
      email,
      phone,
      service,
      message,
      source,
      auditScore,
      recommendedPlan,
    };

    // Save a local copy for the browser.
    try {
      saveLead(payload);
    } catch (err) {
      console.warn("Local lead save failed:", err);
    }

    try {
      const result = await submitLead({
        data: payload,
      });

      if (!result?.ok) {
        throw new Error("Email delivery failed.");
      }

      form.reset();
      setDone(true);
    } catch (err) {
      console.error("Lead submission error:", err);

      setError(
        "We couldn't send your enquiry right now. Please try again or email us directly.",
      );
    } finally {
      setBusy(false);
    }
  }

  if (done) {
    return (
      <div className="flex flex-col items-center px-4 py-10 text-center">
        <span className="mb-4 grid size-14 place-items-center rounded-full bg-accent-soft text-accent">
          <CheckCircle2 className="size-7" strokeWidth={1.8} />
        </span>

        <h3 className="font-display text-2xl">
          Thank you!
        </h3>

        <p className="mt-2 max-w-sm text-sm text-muted">
          We have received your enquiry. Our team will get back to you
          within 24 hours.
        </p>

        <p className="mt-4 flex max-w-sm items-start gap-2 rounded-xl bg-primary-soft px-4 py-3 text-left text-sm text-fg">
          <Mail className="mt-0.5 size-4 shrink-0 text-primary" />

          <span>
            A confirmation email has been sent to{" "}
            <strong>your email address</strong>.
          </span>
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-3.5"
    >
      {!compact && (
        <div>
          <h3 className="font-display text-xl tracking-tight">
            Get your free growth plan
          </h3>

          <p className="mt-1 text-sm text-muted">
            Fill this in and our team will reach out with a plan
            tailored to your business.
          </p>
        </div>
      )}

      <div>
        <FieldLabel htmlFor="lf-name">
          Full name
        </FieldLabel>

        <Input
          id="lf-name"
          name="name"
          placeholder="Your name"
          required
          autoComplete="name"
        />
      </div>

      <div>
        <FieldLabel htmlFor="lf-email">
          Email address
        </FieldLabel>

        <Input
          id="lf-email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          autoComplete="email"
        />
      </div>

      <div>
        <FieldLabel htmlFor="lf-phone">
          Phone number
        </FieldLabel>

        <Input
          id="lf-phone"
          name="phone"
          type="tel"
          placeholder="+91 98765 43210"
          required
          autoComplete="tel"
        />
      </div>

      <div>
        <FieldLabel htmlFor="lf-service">
          What do you need help with?
        </FieldLabel>

        <SelectField
          id="lf-service"
          name="service"
          defaultValue={
            defaultService ?? SERVICE_OPTIONS[0]
          }
        >
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </SelectField>
      </div>

      <div>
        <FieldLabel htmlFor="lf-msg">
          Tell us about your business
        </FieldLabel>

        <Textarea
          id="lf-msg"
          name="message"
          placeholder="A short line about your business and goals"
          defaultValue={defaultMessage}
        />
      </div>

      {error && (
        <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {error}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={busy}
        className="mt-1 w-full"
      >
        {busy ? "Sending…" : "Send my details"}
      </Button>

      <p className="text-center text-[11px] text-muted">
        We respect your privacy. Prefer email?{" "}
        <a
          className="font-semibold text-primary underline-offset-2 hover:underline"
          href={`mailto:${SITE.email}`}
        >
          {SITE.email}
        </a>
      </p>
    </form>
  );
}