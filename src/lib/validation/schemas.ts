import { z } from "zod";

// Phone validation for Indian mobile numbers (10 digits, optional +91)
const phoneRegex = /^(?:\+91|0)?[6-9]\d{9}$/;

export const leadGuidanceSchema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters").max(100),
  phone: z.string().regex(phoneRegex, "Please enter a valid 10-digit mobile number"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  preferredCategory: z.string().optional(),
  preferredLocation: z.string().optional(),
  targetCollegeId: z.string().uuid("Invalid college identifier").optional(),
  message: z.string().max(500, "Message cannot exceed 500 characters").optional(),
  preferredCallbackTime: z.enum(["Morning", "Afternoon", "Evening", "Anytime"]).optional(),
});

export const collegeSearchSchema = z.object({
  searchQuery: z.string().trim().max(100).optional(),
  categorySlug: z.string().optional(),
  locationCity: z.string().optional(),
  hostelAvailable: z.boolean().optional(),
  maxFee: z.number().positive().optional(),
  page: z.number().int().positive().default(1),
  limit: z.number().int().positive().max(50).default(12),
});

export type LeadGuidanceInput = z.infer<typeof leadGuidanceSchema>;
export type CollegeSearchInput = z.infer<typeof collegeSearchSchema>;
