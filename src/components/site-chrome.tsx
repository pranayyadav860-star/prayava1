import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { BrandLockup } from "@/components/brand-mark";
import { Button } from "@/components/ui/button";
import { NAV, SITE } from "@/lib/content";
import { cn } from "@/lib/utils";

function NavLinks({ onClick }: { onClick?: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <>
      {NAV.map((item) => {
        const active =
          !item.hash &&
          (item.to === "/"
            ? pathname === "/"
            : pathname === item.to || pathname.startsWith(`${item.to}/`));
        return (
          <Link
            key={`${item.to}-${item.hash ?? ""}`}
            to={item.to}
            hash={item.hash}
            onClick={onClick}
            className={cn(
              "relative py-2 text-sm font-semibold transition-colors duration-150",
              active ? "text-primary" : "text-fg/80 hover:text-fg",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-200",
        scrolled
          ? "border-line/80 bg-card/80 shadow-card backdrop-blur-xl"
          : "border-transparent bg-card/55 backdrop-blur-md",
      )}
    >
      <div className="page flex h-[72px] items-center gap-6">
        <Link to="/" className="shrink-0" aria-label="PRAYAVA home">
          <BrandLockup />
        </Link>
        <nav className="ml-auto hidden items-center gap-7 lg:flex">
          <NavLinks />
        </nav>
        <div className="ml-auto hidden sm:block lg:ml-2">
          <Button asChild size="sm">
            <Link to="/contact">
              Get free audit
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
        <button
          type="button"
          className="ml-auto grid size-11 place-items-center rounded-lg text-fg sm:ml-0 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-line bg-card px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-1">
            <NavLinks onClick={() => setOpen(false)} />
            <Button asChild className="mt-3 w-full" size="lg">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Get free audit
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-dark text-dark-fg">
      <div className="page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <BrandLockup inverted />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-dark-muted">
            Building digital experiences that drive real growth for modern
            businesses.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-display text-sm tracking-wide text-dark-fg">
            Services
          </h4>
          <div className="flex flex-col gap-2">
            <Link to="/services/$slug" params={{ slug: "digital-marketing" }} className="text-sm text-dark-muted transition-colors hover:text-dark-fg">
              Digital Marketing
            </Link>
            <Link to="/services/$slug" params={{ slug: "web-development" }} className="text-sm text-dark-muted transition-colors hover:text-dark-fg">
              Web Development
            </Link>
            <Link to="/services/$slug" params={{ slug: "seo-analytics" }} className="text-sm text-dark-muted transition-colors hover:text-dark-fg">
              SEO & Analytics
            </Link>
            <Link to="/services/$slug" params={{ slug: "google-paid-ads" }} className="text-sm text-dark-muted transition-colors hover:text-dark-fg">
              Google & Paid Ads
            </Link>
          </div>
        </div>
        <div>
          <h4 className="mb-3 font-display text-sm tracking-wide text-dark-fg">
            Company
          </h4>
          <div className="flex flex-col gap-2">
            <Link to="/about" className="text-sm text-dark-muted transition-colors hover:text-dark-fg">
              About
            </Link>
            
            <Link to="/pricing" className="text-sm text-dark-muted transition-colors hover:text-dark-fg">
              Pricing
            </Link>
            <Link to="/audit" className="text-sm text-dark-muted transition-colors hover:text-dark-fg">
              Growth audit
            </Link>
            <Link to="/" hash="faq" className="text-sm text-dark-muted transition-colors hover:text-dark-fg">
              FAQ
            </Link>
          </div>
        </div>
        <div>
          <h4 className="mb-3 font-display text-sm tracking-wide text-dark-fg">
            Contact
          </h4>
          <a
            href={`mailto:${SITE.email}`}
            className="block text-sm text-dark-muted transition-colors hover:text-dark-fg"
          >
            {SITE.email}
          </a>
          <p className="mt-2 text-sm text-dark-muted">{SITE.city}</p>
          <Link
            to="/contact"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent"
          >
            Start a project
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </div>
      <div className="page border-t border-dark-fg/10 py-5 text-xs text-dark-muted">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved. ·{" "}
        {SITE.tagline.toUpperCase()}
      </div>
    </footer>
  );
}

export function FloatCta() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname === "/contact" || pathname === "/audit") return null;
  return (
    <Link
      to="/contact"
      className="fixed right-5 bottom-5 z-40 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-dark-fg shadow-card-hover transition-transform duration-150 hover:-translate-y-0.5 active:scale-[0.96]"
    >
      Free quote
    </Link>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const hash = useRouterState({ select: (s) => s.location.hash });

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace(/^#/, "");
    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() =>
        el.scrollIntoView({ behavior: "smooth", block: "start" }),
      );
    }
  }, [hash]);

  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <FloatCta />
    </div>
  );
}

export function SectionHead({
  kicker,
  title,
  copy,
  light = false,
  align = "center",
}: {
  kicker: string;
  title: ReactNode;
  copy?: string;
  light?: boolean;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "mb-12 max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      <p
        className={cn(
          "text-[11px] font-extrabold tracking-[0.18em] uppercase",
          light ? "text-accent" : "text-primary",
        )}
      >
        {kicker}
      </p>
      <h2
        className={cn(
          "mt-3 font-display text-[clamp(1.9rem,4vw,3.1rem)]",
          light ? "text-dark-fg" : "text-fg",
        )}
      >
        {title}
      </h2>
      {copy && (
        <p
          className={cn(
            "mt-3 text-[15px] leading-relaxed",
            light ? "text-dark-muted" : "text-muted",
          )}
        >
          {copy}
        </p>
      )}
    </div>
  );
}
