import { useEffect, useState } from "react";
import { ArrowUpRight, MessageCircle, X, Zap } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function HomeLeadPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show after 6 seconds
    const timer = window.setTimeout(() => {
      setOpen(true);
    }, 6000);

    return () => window.clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-dark/50 px-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="home-popup-title"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          setOpen(false);
        }
      }}
    >
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-card shadow-2xl">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-accent/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 size-64 rounded-full bg-primary/10 blur-3xl" />

        {/* Close */}
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close popup"
          className="absolute top-4 right-4 z-10 grid size-10 place-items-center rounded-full bg-bg/80 text-muted transition-colors hover:bg-primary-soft hover:text-fg"
        >
          <X className="size-5" />
        </button>

        <div className="relative p-7 sm:p-9">
          {/* Label */}
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1.5 text-[10px] font-extrabold tracking-[0.16em] text-primary uppercase">
            <Zap className="size-3.5" />
            Free growth consultation
          </div>

          {/* Heading */}
          <h2
            id="home-popup-title"
            className="mt-5 max-w-md font-display text-[clamp(2rem,5vw,3rem)] leading-[1.02]"
          >
            Ready to turn{" "}
            <span className="text-gradient">visitors into leads?</span>
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            Tell us what you're building. We'll suggest the right website,
            SEO, digital marketing and lead generation strategy for your
            business.
          </p>

          {/* Benefits */}
          <div className="mt-6 grid gap-2">
            {[
              "Identify your biggest growth opportunity",
              "Get practical digital marketing recommendations",
              "No pressure. No unnecessary packages.",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 text-sm text-fg"
              >
                <span className="grid size-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <a
              href="https://wa.me/919963154209"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-accent px-5 text-sm font-bold text-dark transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <MessageCircle className="size-4" />
              Connect on WhatsApp
            </a>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-line bg-bg px-5 text-sm font-bold text-fg transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary-soft"
            >
              Get a free quote
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <p className="mt-5 text-center text-[11px] text-muted">
            Usually takes less than 2 minutes
          </p>
        </div>
      </div>
    </div>
  );
}