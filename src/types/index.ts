export * from "./database";

export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface CollegeFilterParams {
  categorySlug?: string;
  locationCity?: string;
  searchQuery?: string;
  hostelAvailable?: boolean;
  maxFee?: number;
  sortBy?: "ranking" | "name" | "fee";
  page?: number;
  limit?: number;
}

export interface LeadGuidanceFormData {
  name: string;
  phone: string;
  email?: string;
  preferredCategory?: string;
  preferredLocation?: string;
  targetCollegeId?: string;
  message?: string;
  preferredCallbackTime?: string;
}
