import { LeadGuidanceInput } from "@/lib/validation/schemas";
import { Lead } from "@/types";

export async function createLead(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  input: LeadGuidanceInput
): Promise<{ success: boolean; leadId?: string; error?: string }> {
  // Service stub for lead submission
  return {
    success: true,
    leadId: "stub-lead-id",
  };
}

export async function getLeads(): Promise<Lead[]> {
  // Service stub for admin lead management
  return [];
}
