import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { JsonLd } from "@/components/json-ld";
import appCss from "../styles.css?url";

const APP_NAME = "PRAYAVA";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "PRAYAVA is a digital marketing agency that builds smart websites, runs result-driven campaigns, and helps businesses show up on Google. Book a free growth audit.",
      },
      { name: "theme-color", content: "#171225" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Syne:wght@600;700;800&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: RootDocument,
  notFoundComponent: NotFound,
});

function RootDocument() {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-bg text-fg">
        <PreviewHostBridge />
        <AuthProvider>
          <JsonLd />
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-bg px-6 text-center text-fg">
      <p className="text-[11px] font-extrabold tracking-[0.18em] text-primary uppercase">
        404
      </p>
      <h1 className="font-display text-4xl">This page wandered off</h1>
      <p className="max-w-md text-sm text-muted">
        The link may be outdated. Head home or explore services.
      </p>
      <a
        href="/"
        className="mt-2 inline-flex h-11 items-center rounded-lg bg-primary px-5 text-sm font-semibold text-dark-fg"
      >
        Back to PRAYAVA
      </a>
    </main>
  );
}
