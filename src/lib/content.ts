export const SITE = {
  name: "PRAYAVA",
  tagline: "Build. Grow. Together.",
  description:
    "PRAYAVA is a digital marketing agency that builds smart websites, runs result-driven marketing campaigns, and helps businesses show up on Google.",
  email: "hello@prayava.co",
  city: "Hyderabad, Telangana, India",
  url: "https://prayava.co",
} as const;

export type ServiceIcon =
  | "megaphone"
  | "monitor"
  | "palette"
  | "lineChart"
  | "share"
  | "cpu"
  | "target"
  | "fileText";

export type Service = {
  slug: string;
  number: string;
  name: string;
  lever: string;
  badge: string;
  summary: string;
  description: string;
  features: string[];
  icon: ServiceIcon;
  tone: "default" | "dark" | "teal" | "large";
  image: string;
};

export const SERVICES: Service[] = [
  {
    slug: "digital-marketing",
    number: "01",
    name: "Digital Marketing",
    lever: "Attract",
    badge: "Core Growth",
    summary:
      "Targeted campaigns that bring in more leads, calls, and paying customers — built around your budget.",
    description:
      "We combine channels, messaging and offers into a single strategy so every rupee you spend is working toward a real business goal, not just impressions.",
    features: [
      "Custom growth strategy for your industry",
      "Multi-channel campaign planning",
      "Lead generation focused on calls and enquiries",
      "Monthly reporting in plain language",
      "Budget-friendly plans that scale with you",
      "A dedicated account manager",
    ],
    icon: "megaphone",
    tone: "large",
    image: "/images/services/digital-marketing.jpg",
  },
  {
    slug: "web-development",
    number: "02",
    name: "Web Development",
    lever: "Convert",
    badge: "Build & Convert",
    summary:
      "Fast, mobile-responsive websites designed to convert visitors into customers.",
    description:
      "Whether you need a simple 5-page business site or a custom web application, we design and build it to load quickly, look great on every screen, and make it easy for people to contact you.",
    features: [
      "Mobile-first, responsive design",
      "Fast page-load speed and clean code",
      "SEO-friendly structure from day one",
      "Custom web and app development",
      "Easy-to-update content management",
      "Secure hosting and launch support",
    ],
    icon: "monitor",
    tone: "default",
    image: "/images/services/web-development.jpg",
  },
  {
    slug: "branding-design",
    number: "03",
    name: "Branding & Design",
    lever: "Position",
    badge: "Brand System",
    summary:
      "Logos, visual identity, and design systems that make your business memorable.",
    description:
      "Good branding isn't just a logo — it's how customers recognize and remember you across your website, social media, packaging and print.",
    features: [
      "Logo design and visual identity",
      "Brand colour palette and typography",
      "Design systems for consistency",
      "Marketing collateral and templates",
      "Packaging and print-ready design",
      "Guidelines your team can reuse",
    ],
    icon: "palette",
    tone: "default",
    image: "/images/services/branding-design.jpg",
  },
  {
    slug: "seo-analytics",
    number: "04",
    name: "SEO & Analytics",
    lever: "Get Found",
    badge: "Organic Growth",
    summary:
      "Get found on the first page of Google with on-page, local SEO, and tracking.",
    description:
      "We audit your current site, fix what's holding it back, and build a keyword and content plan aimed at the searches your customers are actually making.",
    features: [
      "Full SEO and technical site audit",
      "Local SEO and Google Business Profile setup",
      "Keyword research and on-page optimization",
      "Analytics and Search Console tracking",
      "Monthly ranking and traffic reports",
      "Ongoing content and link-building support",
    ],
    icon: "lineChart",
    tone: "dark",
    image: "/images/services/seo-analytics.jpg",
  },
  {
    slug: "social-media-marketing",
    number: "05",
    name: "Social Media Marketing",
    lever: "Engage",
    badge: "Audience",
    summary:
      "Content, posting, and engagement strategy for Instagram, Facebook, and beyond.",
    description:
      "We plan a consistent posting calendar, create scroll-stopping content, and manage comments and messages so your page feels active and trustworthy.",
    features: [
      "Content calendar and scheduled posting",
      "Reels, graphics and short-form video",
      "Community management and replies",
      "Hashtag and audience targeting strategy",
      "Influencer and collaboration support",
      "Monthly growth and engagement reports",
    ],
    icon: "share",
    tone: "teal",
    image: "/images/services/social-media.jpg",
  },
  {
    slug: "ai-solutions",
    number: "06",
    name: "AI Solutions",
    lever: "Automate",
    badge: "Automation",
    summary:
      "Chatbots and marketing automation that scale your business without scaling your workload.",
    description:
      "We help you plug AI into the everyday parts of your business — answering common questions, following up on leads, and keeping campaigns moving.",
    features: [
      "AI chatbots for website and WhatsApp",
      "Automated lead follow-up sequences",
      "AI-assisted content and ad creation",
      "Marketing automation workflows",
      "Data-driven decision dashboards",
      "Ongoing tuning as your business grows",
    ],
    icon: "cpu",
    tone: "default",
    image: "/images/services/ai-solutions.jpg",
  },
  {
    slug: "google-paid-ads",
    number: "07",
    name: "Google & Paid Ads",
    lever: "Accelerate",
    badge: "Paid Growth",
    summary:
      "Search, display and social ads that put you in front of ready-to-buy customers.",
    description:
      "We set up, manage and continuously optimize campaigns so your budget goes toward clicks that actually convert — not just impressions.",
    features: [
      "Google Search and Display campaigns",
      "Facebook and Instagram ad management",
      "Conversion tracking and call tracking",
      "Landing pages built to convert",
      "A/B testing of ad creative and copy",
      "Transparent monthly spend reporting",
    ],
    icon: "target",
    tone: "default",
    image: "/images/services/digital-marketing.jpg",
  },
  {
    slug: "content-marketing",
    number: "08",
    name: "Content Marketing",
    lever: "Educate",
    badge: "Authority",
    summary:
      "Blogs, guides, and website copy that build trust and help you rank higher.",
    description:
      "We plan content around the real questions your customers are searching for, so every page earns its place on your site and in search results.",
    features: [
      "Blog writing and content calendars",
      "Website and landing page copywriting",
      "SEO-optimized content briefs",
      "Guides, FAQs and how-to articles",
      "Email newsletter content",
      "Content performance reporting",
    ],
    icon: "fileText",
    tone: "default",
    image: "/images/services/seo-analytics.jpg",
  },
];

export const WHY = [
  {
    title: "Budget-friendly plans",
    body: "Clear, honest pricing with no hidden costs — plans that fit small and growing businesses.",
    icon: "wallet" as const,
  },
  {
    title: "Fast turnaround",
    body: "We move quickly so your website and campaigns go live without long delays.",
    icon: "timer" as const,
  },
  {
    title: "Transparent reporting",
    body: "Simple monthly reports that show exactly where your money and effort are going.",
    icon: "check" as const,
  },
  {
    title: "Dedicated team",
    body: "A real team of designers, marketers and developers who actually answer your calls.",
    icon: "users" as const,
  },
  {
    title: "Ongoing support",
    body: "We don't disappear after launch — we keep improving your results every month.",
    icon: "lifeBuoy" as const,
  },
  {
    title: "Data + AI driven",
    body: "We use data and AI tools to make smarter decisions, faster.",
    icon: "spark" as const,
  },
];

export const STEPS = [
  {
    number: "01",
    title: "Discuss & Plan",
    body: "We understand your business, goals, audience and competitive landscape.",
  },
  {
    number: "02",
    title: "Build & Execute",
    body: "We create, launch and optimize strategies that deliver results.",
  },
  {
    number: "03",
    title: "Measure & Grow",
    body: "We track performance and scale what works best for you.",
  },
];

// Real capability areas, shown in place of generic vanity stats.
// Each one maps to a real, shippable service and doubles as an SEO-friendly
// keyword phrase for the kind of work PRAYAVA actually does.
export const CAPABILITIES = [
  {
    label: "Website design",
    detail: "For uPVC, home improvement, bakery and local service brands",
  },
  {
    label: "Local SEO",
    detail: "Ranking for the searches your customers are already making",
  },
  {
    label: "E-commerce",
    detail: "Online ordering and product catalogs that convert browsers",
  },
  {
    label: "Landing pages",
    detail: "Focused, single-offer pages built for wellness and service brands",
  },
];

export const INDUSTRIES = [
  { name: "Retail & shops", icon: "store" as const },
  { name: "Restaurants", icon: "utensils" as const },
  { name: "Clinics & health", icon: "heart" as const },
  { name: "Real estate", icon: "building" as const },
  { name: "Education", icon: "graduation" as const },
  { name: "E-commerce", icon: "bag" as const },
];

export type PortfolioIcon = "doorOpen" | "cookie" | "globe" | "leaf";

export const PORTFOLIO = [
  {
    slug: "jsk-enterprises",
    name: "JSK Enterprises",
    industry: "uPVC Windows & Doors",
    service: "Website + Local SEO",
    description: "Business website and local SEO for a Hyderabad uPVC windows & doors brand.",
    url: "https://jskupvc.com/",
    keywords: ["uPVC windows website", "local SEO"],
    icon: "doorOpen" as PortfolioIcon,
  },
  {
    slug: "srinika-digital-marketing",
    name: "Srinika Marketing Agency",
    industry: "Digital Marketing",
    service: "Website + Content",
    description: "Agency website refresh with clearer messaging and service pages.",
    url: "https://srinikamarketingagency.com/",
    keywords: ["agency website", "content rewrite"],
    icon: "globe" as PortfolioIcon,
  },
  {
    slug: "pranav-may",
    name: "Pranav May",
    industry: "Personal Brand",
    service: "Portfolio Website",
    description: "Clean personal brand site built for clarity and conversion.",
    url: "https://pranavmay.skilldm.com/",
    keywords: ["personal brand website", "portfolio site"],
    icon: "cookie" as PortfolioIcon,
  },
  {
    slug: "healing-praana",
    name: "Healing Praana",
    industry: "Wellness & Hypnotherapy",
    service: "Landing Pages",
    description: "Conversion-focused landing pages for hypnotherapy and wellness offers.",
    url: "https://healingpraana-hypnotherapy.vercel.app/",
    keywords: ["wellness landing page", "hypnotherapy site"],
    icon: "leaf" as PortfolioIcon,
  },
];

export const PLANS = [
  {
    id: "starter" as const,
    name: "Starter",
    desc: "For new businesses getting online for the first time.",
    popular: false,
    items: [
      "5-page business website",
      "Basic on-page SEO setup",
      "Google Business Profile setup",
      "1 social media platform",
      "Monthly performance report",
    ],
  },
  {
    id: "growth" as const,
    name: "Growth",
    desc: "For businesses ready to actively bring in new leads.",
    popular: true,
    items: [
      "Everything in Starter",
      "Full SEO and content strategy",
      "Google and social media ads",
      "3 social media platforms",
      "Lead tracking and reporting dashboard",
    ],
  },
  {
    id: "enterprise" as const,
    name: "Enterprise",
    desc: "For established brands that want full-scale growth.",
    popular: false,
    items: [
      "Everything in Growth",
      "Custom web and app development",
      "AI-powered marketing automation",
      "Dedicated account manager",
      "Advanced analytics and strategy calls",
    ],
  },
];

export const TESTIMONIALS = [
  {
    quote: "PRAYAVA built our website and got us ranking for uPVC windows searches in Hyderabad. Enquiry calls have been steady every week since launch.",
    name: "Owner",
    role: "JSK Enterprises · uPVC Windows & Doors",
    initial: "J",
    rating: 5,
  },
  {
    quote: "As a marketing agency ourselves, we're picky. PRAYAVA refreshed our site and content — it finally sounds like us and converts better.",
    name: "Founder",
    role: "Srinika Marketing Agency",
    initial: "S",
    rating: 5,
  },
  {
    quote: "Clean, fast personal brand site. Visitors understand what I do in seconds and reach out. Exactly what I needed.",
    name: "Pranav May",
    role: "Personal Brand · Portfolio",
    initial: "P",
    rating: 5,
  },
  {
    quote: "The landing pages made booking sessions effortless. Simple design, clear CTAs, and people actually convert.",
    name: "Team",
    role: "Healing Praana · Hypnotherapy",
    initial: "H",
    rating: 5,
  },
];

export const FAQS = [
  {
    q: "What is digital marketing?",
    a: "Digital marketing means using the internet — like Google, Instagram and Facebook — to tell people about your business so more customers can find you.",
  },
  {
    q: "Why does my business need a website?",
    a: "A website works like an online shop that never closes. People can find you, learn what you offer, and contact you anytime, even at night.",
  },
  {
    q: "What is SEO and why is it important?",
    a: "SEO stands for Search Engine Optimization. It helps your website appear on the first page of Google when people search for things you sell.",
  },
  {
    q: "How long does it take to see results?",
    a: "Every business is different, but most clients start seeing steady growth within 60 to 90 days of launching a campaign.",
  },
  {
    q: "Do I need social media if I already have a website?",
    a: "Yes. Your website is your home on the internet, and social media is where you meet new people and invite them home.",
  },
  {
    q: "How much does digital marketing cost?",
    a: "It depends on your goals. We offer simple starter plans and bigger growth plans, and we help you choose what fits your budget.",
  },
  {
    q: "Do you work with businesses outside Hyderabad?",
    a: "Yes. While we're based in Hyderabad, we work with businesses across India and remotely, with the same hands-on support and reporting.",
  },
  {
    q: "What's included in the free growth audit?",
    a: "We review your website, SEO, and current marketing, then show you exactly what's holding back growth and the fastest wins available — no obligation.",
  },
];

export const SERVICE_OPTIONS = [
  "Website Design & Development",
  "SEO & Google Ranking",
  "Social Media Marketing",
  "Google & Paid Ads",
  "Branding & Design",
  "AI Solutions",
  "Not sure yet — need advice",
] as const;

export const NAV = [
  { label: "Home", to: "/" as const, hash: undefined as string | undefined },
  { label: "Services", to: "/services" as const, hash: undefined as string | undefined },
  { label: "How it works", to: "/" as const, hash: "process" },
  { label: "Pricing", to: "/pricing" as const, hash: undefined as string | undefined },
  { label: "Audit", to: "/audit" as const, hash: undefined as string | undefined },
  { label: "About", to: "/about" as const, hash: undefined as string | undefined },
];

export const PROOF = [
  { n: "01", label: "Strategy first" },
  { n: "02", label: "Design led" },
  { n: "03", label: "Technology powered" },
  { n: "04", label: "Growth focused" },
] as const;

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
