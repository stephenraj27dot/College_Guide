import { CollegeFilterParams, Category } from "@/types";
import { mockColleges, mockCategories, DetailedCollege } from "@/lib/mockData";

export async function getColleges(
  params?: CollegeFilterParams
): Promise<{ colleges: DetailedCollege[]; total: number }> {
  let filtered = [...mockColleges];

  if (params?.categorySlug) {
    filtered = filtered.filter(
      (c) => c.category_slug.toLowerCase() === params.categorySlug?.toLowerCase()
    );
  }

  if (params?.locationCity) {
    filtered = filtered.filter(
      (c) => c.city.toLowerCase() === params.locationCity?.toLowerCase()
    );
  }

  if (params?.searchQuery) {
    const q = params.searchQuery.toLowerCase();
    filtered = filtered.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        (c.short_name && c.short_name.toLowerCase().includes(q)) ||
        c.city.toLowerCase().includes(q) ||
        c.departments.some(
          (d) => d.name.toLowerCase().includes(q) || d.code.toLowerCase().includes(q)
        )
    );
  }

  if (params?.hostelAvailable) {
    filtered = filtered.filter((c) => c.hostel_available);
  }

  return {
    colleges: filtered,
    total: filtered.length,
  };
}

export async function getCollegeBySlug(
  slug: string
): Promise<DetailedCollege | null> {
  const college = mockColleges.find(
    (c) => c.slug.toLowerCase() === slug.toLowerCase()
  );
  return college || null;
}

export async function getCategories(): Promise<Category[]> {
  return mockCategories;
}

export async function getFeaturedColleges(): Promise<DetailedCollege[]> {
  return mockColleges.filter((c) => c.is_featured);
}
