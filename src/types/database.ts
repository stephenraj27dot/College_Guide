export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type UserRole = "student" | "counsellor" | "admin" | "super_admin";

export type LeadStatus =
  | "NEW"
  | "CONTACTED"
  | "COUNSELLING"
  | "COLLEGE_SHORTLISTED"
  | "APPLICATION"
  | "ADMISSION_IN_PROGRESS"
  | "ADMITTED"
  | "NOT_INTERESTED"
  | "CLOSED";

export type LeadPriority = "LOW" | "MEDIUM" | "HIGH" | "URGENT";

export interface Profile {
  id: string;
  email: string | null;
  full_name: string | null;
  phone_number: string | null;
  role: UserRole;
  avatar_url?: string | null;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  icon_name: string | null;
  is_active: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface Course {
  id: string;
  category_id: string;
  name: string;
  code: string | null;
  duration_years: number;
  degree_level: string; // e.g. UG, PG, Diploma
  description: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Department {
  id: string;
  course_id: string;
  name: string;
  slug: string;
  code: string | null;
  description: string | null;
  created_at: string;
  updated_at: string;
}

export interface Location {
  id: string;
  state: string;
  district: string;
  city: string;
  pincode: string | null;
  latitude: number | null;
  longitude: number | null;
  created_at: string;
}

export interface College {
  id: string;
  name: string;
  slug: string;
  short_name: string | null;
  location_id: string | null;
  address: string | null;
  established_year: number | null;
  institution_type: string | null; // e.g. Autonomous, Deemed, Government, Private
  affiliation: string | null;
  accreditation: string | null; // e.g. NAAC A++, NBA
  nirf_ranking: number | null;
  description: string | null;
  logo_url: string | null;
  banner_url: string | null;
  hostel_available: boolean;
  transport_available: boolean;
  is_featured: boolean;
  is_verified: boolean;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface CollegeDepartment {
  id: string;
  college_id: string;
  department_id: string;
  intake_capacity: number | null;
  tuition_fee_per_year: number | null;
  cutoff_marks_avg: number | null;
  placement_rate_pct: number | null;
  created_at: string;
}

export interface Student {
  id: string; // References Profile ID
  current_education_level: string | null;
  preferred_category_id: string | null;
  preferred_location_id: string | null;
  budget_max_per_year: number | null;
  needs_hostel: boolean | null;
  created_at: string;
  updated_at: string;
}

export interface Lead {
  id: string;
  student_id: string | null;
  student_name: string;
  student_phone: string;
  student_email: string | null;
  preferred_category_id: string | null;
  preferred_location_id: string | null;
  interested_college_id: string | null;
  status: LeadStatus;
  priority: LeadPriority;
  score: number;
  assigned_counsellor_id: string | null;
  student_message: string | null;
  preferred_callback_time: string | null;
  created_at: string;
  updated_at: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: number;
  description: string | null;
  image_url: string | null;
  is_published: boolean;
  display_order: number;
  created_at: string;
}

export interface Testimonial {
  id: string;
  author_name: string;
  author_role: string; // e.g. Parent, Student, Alumnus
  quote: string;
  college_name: string | null;
  course_name: string | null;
  avatar_url: string | null;
  is_published: boolean;
  display_order: number;
  created_at: string;
}

export interface Database {
  public: {
    Tables: {
      profiles: { Row: Profile };
      categories: { Row: Category };
      courses: { Row: Course };
      departments: { Row: Department };
      locations: { Row: Location };
      colleges: { Row: College };
      college_departments: { Row: CollegeDepartment };
      students: { Row: Student };
      leads: { Row: Lead };
      awards: { Row: Award };
      testimonials: { Row: Testimonial };
    };
  };
}
