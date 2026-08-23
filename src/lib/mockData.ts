import { College, Category, Award, Testimonial, Lead } from "@/types";

export interface CounsellorUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  assignedLeadCount: number;
}

export interface DetailedLead extends Lead {
  lead_reference: string;
  source: string;
  interested_college_name?: string;
  category_name?: string;
  notes_count: number;
}

export interface LeadNoteRecord {
  id: string;
  lead_id: string;
  author_name: string;
  note: string;
  created_at: string;
}

export const mockCategories: Category[] = [
  {
    id: "cat-1",
    name: "Engineering & Technology",
    slug: "engineering",
    description: "B.E / B.Tech courses in CSE, AI&DS, ECE, Mechanical, and Civil Engineering",
    icon_name: "Cpu",
    is_active: true,
    display_order: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "cat-2",
    name: "Medical & Dental",
    slug: "medical",
    description: "MBBS, BDS, Allied Health Sciences & Post Graduate Specializations",
    icon_name: "Activity",
    is_active: true,
    display_order: 2,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "cat-3",
    name: "Nursing & Pharmacy",
    slug: "nursing",
    description: "B.Sc Nursing, B.Pharm, D.Pharm & Paramedical Diploma courses",
    icon_name: "HeartPulse",
    is_active: true,
    display_order: 3,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "cat-4",
    name: "Law",
    slug: "law",
    description: "5-Year Integrated BA LLB / BBA LLB & 3-Year LLB programs",
    icon_name: "Scale",
    is_active: true,
    display_order: 4,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "cat-5",
    name: "Arts & Science",
    slug: "arts-science",
    description: "B.Sc Computer Science, B.Com, BBA, B.A & Master degree programs",
    icon_name: "BookOpen",
    is_active: true,
    display_order: 5,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export interface DetailedCollege extends College {
  category_slug: string;
  city: string;
  district: string;
  departments: {
    id: string;
    name: string;
    code: string;
    duration: string;
    tuitionFeePerYear: string;
    eligibility: string;
  }[];
  facilities: string[];
}

export const mockColleges: DetailedCollege[] = [
  {
    id: "col-1",
    name: "SRM Institute of Science and Technology",
    slug: "srm-ist-ramapuram",
    short_name: "SRM IST Ramapuram",
    location_id: "loc-1",
    city: "Chennai",
    district: "Chennai",
    category_slug: "engineering",
    address: "Bharathi Salai, Ramapuram, Chennai, Tamil Nadu 600089",
    established_year: 2004,
    institution_type: "Deemed University",
    affiliation: "UGC / AICTE Approved",
    accreditation: "NAAC A++ Grade",
    nirf_ranking: 28,
    description:
      "SRM Institute of Science and Technology, Ramapuram Campus, is a premier institution offering high-quality engineering and technological education with world-class laboratory infrastructure, active industry partnerships, and exceptional placement records.",
    logo_url: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=300&q=80",
    banner_url: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80",
    hostel_available: true,
    transport_available: true,
    is_featured: true,
    is_verified: true,
    is_published: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    departments: [
      {
        id: "dep-1",
        name: "Computer Science & Engineering",
        code: "B.Tech CSE",
        duration: "4 Years",
        tuitionFeePerYear: "₹2,50,000 / Year",
        eligibility: "10+2 with Physics, Chemistry & Math (min 60%)",
      },
      {
        id: "dep-2",
        name: "Artificial Intelligence & Data Science",
        code: "B.Tech AI&DS",
        duration: "4 Years",
        tuitionFeePerYear: "₹2,60,000 / Year",
        eligibility: "10+2 with Physics, Chemistry & Math (min 60%)",
      },
      {
        id: "dep-3",
        name: "Electronics & Communication Engineering",
        code: "B.Tech ECE",
        duration: "4 Years",
        tuitionFeePerYear: "₹2,00,000 / Year",
        eligibility: "10+2 with PCM (min 55%)",
      },
    ],
    facilities: [
      "AC Central Library",
      "High-Tech Computing Labs",
      "Separate Hostels for Boys & Girls",
      "Transport Fleet",
    ],
  },
  {
    id: "col-2",
    name: "PSG College of Technology",
    slug: "psg-tech-coimbatore",
    short_name: "PSG Tech",
    location_id: "loc-2",
    city: "Coimbatore",
    district: "Coimbatore",
    category_slug: "engineering",
    address: "Avinashi Road, Peelamedu, Coimbatore, Tamil Nadu 641004",
    established_year: 1951,
    institution_type: "Autonomous Government Aided",
    affiliation: "Anna University",
    accreditation: "NAAC A Grade, NBA Accredited",
    nirf_ranking: 63,
    description:
      "PSG College of Technology is an autonomous, government-aided institution renowned for pioneering engineering education, industry research collaborations, innovation centers, and exceptional student placement figures across India and globally.",
    logo_url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=300&q=80",
    banner_url: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    hostel_available: true,
    transport_available: true,
    is_featured: true,
    is_verified: true,
    is_published: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    departments: [
      {
        id: "dep-5",
        name: "Computer Science & Engineering",
        code: "B.E CSE",
        duration: "4 Years",
        tuitionFeePerYear: "₹1,25,000 / Year",
        eligibility: "TNEA Counseling / 10+2 PCM Cutoff",
      },
    ],
    facilities: ["Advanced Labs", "Hostels", "Sports Ground"],
  },
];

export const mockCounsellors: CounsellorUser[] = [
  { id: "counsellor-1", name: "Anitha Ramesh", email: "anitha@collegeguide.in", phone: "+91 98765 11111", assignedLeadCount: 12 },
  { id: "counsellor-2", name: "Pravin Kumar", email: "pravin@collegeguide.in", phone: "+91 98765 22222", assignedLeadCount: 9 },
  { id: "counsellor-3", name: "Divya Bharathi", email: "divya@collegeguide.in", phone: "+91 98765 33333", assignedLeadCount: 15 },
];

export const mockLeads: DetailedLead[] = [
  {
    id: "lead-1",
    lead_reference: "CG-2026-000101",
    student_id: "stud-1",
    student_name: "Vimal Anand",
    student_phone: "9876543210",
    student_email: "vimal.anand@example.com",
    preferred_category_id: "cat-1",
    preferred_location_id: "loc-1",
    interested_college_id: "col-1",
    interested_college_name: "SRM IST Ramapuram",
    category_name: "Engineering & Technology",
    source: "website_enquiry",
    status: "NEW",
    priority: "HIGH",
    score: 88,
    assigned_counsellor_id: "counsellor-1",
    student_message: "Interested in B.Tech CSE cutoff and fee structure for SRM Ramapuram.",
    preferred_callback_time: "Morning (9 AM - 12 PM)",
    created_at: new Date(Date.now() - 3600000 * 2).toISOString(),
    updated_at: new Date().toISOString(),
    notes_count: 2,
  },
  {
    id: "lead-2",
    lead_reference: "CG-2026-000102",
    student_id: "stud-2",
    student_name: "Kavitha Sundaram",
    student_phone: "9812345678",
    student_email: "kavitha.s@example.com",
    preferred_category_id: "cat-1",
    preferred_location_id: "loc-2",
    interested_college_id: "col-2",
    interested_college_name: "PSG Tech Coimbatore",
    category_name: "Engineering & Technology",
    source: "request_callback",
    status: "CONTACTED",
    priority: "HIGH",
    score: 92,
    assigned_counsellor_id: "counsellor-2",
    student_message: "Parent inquiring about TNEA cutoff for PSG Tech Mech Engineering.",
    preferred_callback_time: "Afternoon (12 PM - 4 PM)",
    created_at: new Date(Date.now() - 3600000 * 18).toISOString(),
    updated_at: new Date().toISOString(),
    notes_count: 3,
  },
  {
    id: "lead-3",
    lead_reference: "CG-2026-000103",
    student_id: null,
    student_name: "Naveen Prakash",
    student_phone: "9765432109",
    student_email: null,
    preferred_category_id: "cat-3",
    preferred_location_id: "loc-1",
    interested_college_id: null,
    interested_college_name: undefined,
    category_name: "Nursing & Pharmacy",
    source: "whatsapp",
    status: "COUNSELLING",
    priority: "MEDIUM",
    score: 75,
    assigned_counsellor_id: "counsellor-3",
    student_message: "Looking for top B.Sc Nursing colleges in Chennai with good hostel facilities.",
    preferred_callback_time: "Evening (4 PM - 8 PM)",
    created_at: new Date(Date.now() - 3600000 * 36).toISOString(),
    updated_at: new Date().toISOString(),
    notes_count: 1,
  },
  {
    id: "lead-4",
    lead_reference: "CG-2026-000104",
    student_id: null,
    student_name: "Deepika R.",
    student_phone: "9654321098",
    student_email: "deepika@example.com",
    preferred_category_id: "cat-4",
    preferred_location_id: "loc-1",
    interested_college_id: null,
    category_name: "Law",
    source: "get_guidance",
    status: "COLLEGE_SHORTLISTED",
    priority: "HIGH",
    score: 95,
    assigned_counsellor_id: "counsellor-1",
    student_message: "Shortlisted Govt Law College & School of Excellence in Law for BA LLB.",
    preferred_callback_time: "Anytime",
    created_at: new Date(Date.now() - 3600000 * 48).toISOString(),
    updated_at: new Date().toISOString(),
    notes_count: 4,
  },
  {
    id: "lead-5",
    lead_reference: "CG-2026-000105",
    student_id: null,
    student_name: "Santhosh Kumar",
    student_phone: "9543210987",
    student_email: "santhosh@example.com",
    preferred_category_id: "cat-1",
    preferred_location_id: "loc-4",
    interested_college_id: null,
    category_name: "Engineering & Technology",
    source: "find_my_college",
    status: "ADMITTED",
    priority: "URGENT",
    score: 98,
    assigned_counsellor_id: "counsellor-2",
    student_message: "Successfully secured admission at NIT Trichy CSE via JoSAA.",
    preferred_callback_time: "Morning",
    created_at: new Date(Date.now() - 3600000 * 120).toISOString(),
    updated_at: new Date().toISOString(),
    notes_count: 5,
  },
];

export const mockLeadNotes: LeadNoteRecord[] = [
  {
    id: "note-1",
    lead_id: "lead-1",
    author_name: "Anitha Ramesh",
    note: "Spoke with student. Verified 10+2 PCM score is 88%. Sent SRM Ramapuram B.Tech CSE fee details on WhatsApp.",
    created_at: new Date(Date.now() - 3600000 * 1.5).toISOString(),
  },
  {
    id: "note-2",
    lead_id: "lead-1",
    author_name: "Anitha Ramesh",
    note: "Student requested callback on Monday morning after consulting parents.",
    created_at: new Date(Date.now() - 3600000 * 1).toISOString(),
  },
  {
    id: "note-3",
    lead_id: "lead-2",
    author_name: "Pravin Kumar",
    note: "Parent inquired regarding TNEA counselling cutoff ranks for PSG Tech Mech Engineering. Explained 2025 cutoff benchmarks.",
    created_at: new Date(Date.now() - 3600000 * 10).toISOString(),
  },
];

export const mockAwards: Award[] = [
  {
    id: "award-1",
    title: "Best Educational Guidance Platform 2025",
    organization: "Tamil Nadu Education Leadership Forum",
    year: 2025,
    description: "Recognized for transparent counselling and helping thousands of students secure college admissions across Tamil Nadu.",
    image_url: null,
    is_published: true,
    display_order: 1,
    created_at: new Date().toISOString(),
  },
];

export const mockTestimonials: Testimonial[] = [
  {
    id: "test-1",
    author_name: "Karthik R.",
    author_role: "Engineering Student",
    quote: "College Guide helped me understand cutoff trends and choose B.Tech CSE in a top Chennai college. Their expert team guided me through every step!",
    college_name: "SRM IST Ramapuram",
    course_name: "B.Tech CSE",
    avatar_url: null,
    is_published: true,
    display_order: 1,
    created_at: new Date().toISOString(),
  },
];
