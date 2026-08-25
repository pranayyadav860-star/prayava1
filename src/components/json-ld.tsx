import { FAQS, SERVICES, SITE } from "@/lib/content";

export function JsonLd() {
  const org = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    email: SITE.email,
    areaServed: "IN",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "PRAYAVA Services",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          url: `${SITE.url}/services/${s.slug}`,
        },
      })),
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(org)}</script>
      <script type="application/ld+json">{JSON.stringify(faq)}</script>
    </>
  );
}
