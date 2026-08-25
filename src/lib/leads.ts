const LEADS_KEY = "prayava-leads";
const AUDIT_KEY = "prayava-audit";

export type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  source: "contact" | "audit";
  createdAt: string;
  auditScore?: number;
  recommendedPlan?: string;
};

export type AuditResult = {
  score: number;
  plan: "Starter" | "Growth" | "Enterprise";
  answers: Record<string, string>;
  recommendedServices: string[];
  completedAt: string;
};

function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function saveLead(lead: Omit<Lead, "id" | "createdAt">): Lead {
  const full: Lead = {
    ...lead,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  const existing = readJson<Lead[]>(LEADS_KEY, []);
  existing.unshift(full);
  window.localStorage.setItem(LEADS_KEY, JSON.stringify(existing.slice(0, 50)));
  return full;
}

export function saveAudit(result: AuditResult) {
  window.localStorage.setItem(AUDIT_KEY, JSON.stringify(result));
}

export function getAudit(): AuditResult | null {
  return readJson<AuditResult | null>(AUDIT_KEY, null);
}
