import { LeadGuidanceInput } from "@/lib/validation/schemas";
import { LeadStatus, LeadPriority } from "@/types";
import {
  mockLeads,
  mockLeadNotes,
  mockCounsellors,
  DetailedLead,
  LeadNoteRecord,
  CounsellorUser,
} from "@/lib/mockData";

const leadStore: DetailedLead[] = [...mockLeads];
const noteStore: LeadNoteRecord[] = [...mockLeadNotes];
let referenceCounter = 106;

export function calculateLeadScore(
  input: Partial<LeadGuidanceInput> & {
    hasTargetCollege?: boolean;
    hasMessage?: boolean;
    hasEmail?: boolean;
    source?: string;
  }
): number {
  let score = 50; // Base score for any enquiry

  if (input.phone && input.phone.length === 10) score += 15;
  if (input.hasTargetCollege || input.targetCollegeId) score += 15;
  if (input.hasMessage || (input.message && input.message.length > 10)) score += 10;
  if (input.hasEmail || input.email) score += 5;
  if (input.preferredCallbackTime && input.preferredCallbackTime !== "Anytime") score += 5;

  return Math.min(score, 100);
}

export async function createLead(
  input: LeadGuidanceInput & { source?: string }
): Promise<{ success: boolean; leadId?: string; referenceId?: string; error?: string }> {
  const refNumber = referenceCounter++;
  const lead_reference = `CG-2026-${refNumber.toString().padStart(6, "0")}`;

  const score = calculateLeadScore({
    phone: input.phone,
    email: input.email,
    targetCollegeId: input.targetCollegeId,
    message: input.message,
    preferredCallbackTime: input.preferredCallbackTime,
    source: input.source || "website_enquiry",
  });

  const priority: LeadPriority = score >= 85 ? "HIGH" : score >= 65 ? "MEDIUM" : "LOW";

  const newLead: DetailedLead = {
    id: `lead-${refNumber}`,
    lead_reference,
    student_id: null,
    student_name: input.name,
    student_phone: input.phone,
    student_email: input.email || null,
    preferred_category_id: input.preferredCategory || null,
    preferred_location_id: input.preferredLocation || null,
    interested_college_id: input.targetCollegeId || null,
    interested_college_name: input.targetCollegeId ? "Target College" : undefined,
    category_name: input.preferredCategory || "General Guidance",
    source: input.source || "website_enquiry",
    status: "NEW",
    priority,
    score,
    assigned_counsellor_id: "counsellor-1", // Default auto-assigned counsellor
    student_message: input.message || null,
    preferred_callback_time: input.preferredCallbackTime || "Anytime",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    notes_count: 1,
  };

  leadStore.unshift(newLead);

  // Initial auto-note
  noteStore.unshift({
    id: `note-${Date.now()}`,
    lead_id: newLead.id,
    author_name: "System",
    note: `Lead created via ${newLead.source}. Initial interest score: ${score}/100.`,
    created_at: new Date().toISOString(),
  });

  return {
    success: true,
    leadId: newLead.id,
    referenceId: newLead.lead_reference,
  };
}

export async function getLeads(filters?: {
  status?: LeadStatus | "";
  priority?: LeadPriority | "";
  searchQuery?: string;
  counsellorId?: string;
}): Promise<DetailedLead[]> {
  let list = [...leadStore];

  if (filters?.status) {
    list = list.filter((l) => l.status === filters.status);
  }

  if (filters?.priority) {
    list = list.filter((l) => l.priority === filters.priority);
  }

  if (filters?.counsellorId) {
    list = list.filter((l) => l.assigned_counsellor_id === filters.counsellorId);
  }

  if (filters?.searchQuery) {
    const q = filters.searchQuery.toLowerCase();
    list = list.filter(
      (l) =>
        l.student_name.toLowerCase().includes(q) ||
        l.student_phone.includes(q) ||
        l.lead_reference.toLowerCase().includes(q) ||
        (l.interested_college_name && l.interested_college_name.toLowerCase().includes(q))
    );
  }

  return list;
}

export async function getLeadById(
  id: string
): Promise<{ lead: DetailedLead; notes: LeadNoteRecord[] } | null> {
  const lead = leadStore.find((l) => l.id === id);
  if (!lead) return null;

  const notes = noteStore.filter((n) => n.lead_id === id);
  return { lead, notes };
}

export async function updateLeadStatus(
  leadId: string,
  newStatus: LeadStatus,
  authorName: string = "Admin"
): Promise<boolean> {
  const index = leadStore.findIndex((l) => l.id === leadId);
  if (index === -1) return false;

  const oldStatus = leadStore[index].status;
  leadStore[index].status = newStatus;
  leadStore[index].updated_at = new Date().toISOString();

  noteStore.unshift({
    id: `note-${Date.now()}`,
    lead_id: leadId,
    author_name: authorName,
    note: `Status updated from ${oldStatus} to ${newStatus}`,
    created_at: new Date().toISOString(),
  });

  leadStore[index].notes_count = noteStore.filter((n) => n.lead_id === leadId).length;
  return true;
}

export async function assignLeadCounsellor(
  leadId: string,
  counsellorId: string,
  authorName: string = "Admin"
): Promise<boolean> {
  const leadIndex = leadStore.findIndex((l) => l.id === leadId);
  if (leadIndex === -1) return false;

  const counsellor = mockCounsellors.find((c) => c.id === counsellorId);
  leadStore[leadIndex].assigned_counsellor_id = counsellorId;
  leadStore[leadIndex].updated_at = new Date().toISOString();

  noteStore.unshift({
    id: `note-${Date.now()}`,
    lead_id: leadId,
    author_name: authorName,
    note: `Assigned lead to counsellor: ${counsellor?.name || counsellorId}`,
    created_at: new Date().toISOString(),
  });

  return true;
}

export async function addLeadNote(
  leadId: string,
  noteText: string,
  authorName: string = "Counsellor"
): Promise<LeadNoteRecord | null> {
  const leadIndex = leadStore.findIndex((l) => l.id === leadId);
  if (leadIndex === -1) return null;

  const newNote: LeadNoteRecord = {
    id: `note-${Date.now()}`,
    lead_id: leadId,
    author_name: authorName,
    note: noteText,
    created_at: new Date().toISOString(),
  };

  noteStore.unshift(newNote);
  leadStore[leadIndex].notes_count = noteStore.filter((n) => n.lead_id === leadId).length;
  leadStore[leadIndex].updated_at = new Date().toISOString();

  return newNote;
}

export async function getCounsellors(): Promise<CounsellorUser[]> {
  return mockCounsellors;
}

export async function getLeadAnalytics() {
  const totalLeads = leadStore.length;
  const newLeads = leadStore.filter((l) => l.status === "NEW").length;
  const highIntentLeads = leadStore.filter((l) => l.score >= 85).length;
  const admittedLeads = leadStore.filter((l) => l.status === "ADMITTED").length;

  return {
    totalLeads,
    newLeads,
    highIntentLeads,
    admittedLeads,
    conversionRate: totalLeads > 0 ? ((admittedLeads / totalLeads) * 100).toFixed(1) + "%" : "0%",
  };
}
