import { College, CollegeFilterParams } from "@/types";

export async function getColleges(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  params?: CollegeFilterParams
): Promise<{ colleges: College[]; total: number }> {
  // Service stub for College data layer
  return {
    colleges: [],
    total: 0,
  };
}

export async function getCollegeBySlug(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  slug: string
): Promise<College | null> {
  // Service stub for College profile fetch
  return null;
}
