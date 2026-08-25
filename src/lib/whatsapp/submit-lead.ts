import { createServerFn } from "@tanstack/react-start";

export type LeadInput = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  source: "contact" | "audit";
  auditScore?: number;
  recommendedPlan?: string;
};

export const submitLead = createServerFn({ method: "POST" })
  .validator((data: LeadInput) => data)
  .handler(async ({ data }) => {
    const { submitLeadServer } = await import("./leads.server");
    return submitLeadServer(data);
  });