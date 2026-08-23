"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getColleges } from "@/services/colleges";
import { DetailedCollege } from "@/lib/mockData";
import { Container } from "@/components/layout/Container";
import { CollegeCard } from "@/components/college/CollegeCard";
import { CollegeFilter } from "@/components/search/CollegeFilter";
import { CollegeSearch } from "@/components/search/CollegeSearch";
import { GuidanceModal } from "@/components/guidance/GuidanceModal";
import { Badge } from "@/components/ui/badge";
import { Loader2, SearchX } from "lucide-react";

function CollegesContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "";
  const initialLocation = searchParams.get("location") || "";

  const [category, setCategory] = useState(initialCategory);
  const [location, setLocation] = useState(initialLocation);
  const [searchQuery, setSearchQuery] = useState("");
  const [hostelOnly, setHostelOnly] = useState(false);

  const [colleges, setColleges] = useState<DetailedCollege[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedCollegeForGuidance, setSelectedCollegeForGuidance] =
    useState<DetailedCollege | null>(null);
  const [isGuidanceModalOpen, setIsGuidanceModalOpen] = useState(false);

  useEffect(() => {
    let isMounted = true;

    getColleges({
      categorySlug: category,
      locationCity: location,
      searchQuery: searchQuery,
      hostelAvailable: hostelOnly ? true : undefined,
    }).then((res) => {
      if (isMounted) {
        setColleges(res.colleges);
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [category, location, searchQuery, hostelOnly]);

  const handleResetFilters = () => {
    setCategory("");
    setLocation("");
    setSearchQuery("");
    setHostelOnly(false);
  };

  const handleOpenGuidanceModal = (college?: DetailedCollege) => {
    setSelectedCollegeForGuidance(college || null);
    setIsGuidanceModalOpen(true);
  };

  return (
    <div className="py-12 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <Container size="lg" className="space-y-8">
        {/* Page Header */}
        <div className="space-y-2">
          <Badge variant="default" className="bg-blue-600 text-white">
            Tamil Nadu Institution Discovery
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Browse Colleges & Institutions
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Explore verified colleges across engineering, medical, law, nursing, and arts & science in Tamil Nadu.
          </p>
        </div>

        {/* Search & Filter Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Left Filter Sidebar */}
          <div className="lg:col-span-1">
            <CollegeFilter
              selectedCategory={category}
              selectedLocation={location}
              hostelOnly={hostelOnly}
              onCategoryChange={setCategory}
              onLocationChange={setLocation}
              onHostelToggle={setHostelOnly}
              onReset={handleResetFilters}
            />
          </div>

          {/* Right Main Grid */}
          <div className="lg:col-span-3 space-y-6">
            {/* Top Search Bar */}
            <CollegeSearch value={searchQuery} onChange={setSearchQuery} />

            {/* Results Count Bar */}
            <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-200 dark:border-slate-800 pb-2">
              <span>
                Showing <strong className="text-slate-900 dark:text-white">{colleges.length}</strong> colleges
              </span>
              {(category || location || hostelOnly || searchQuery) && (
                <span className="text-blue-600 font-medium">Filtered Results</span>
              )}
            </div>

            {/* Content States */}
            {loading ? (
              <div className="py-20 flex flex-col items-center justify-center space-y-3">
                <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                <span className="text-xs text-slate-500">Searching colleges...</span>
              </div>
            ) : colleges.length === 0 ? (
              /* Empty State */
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-12 text-center space-y-4">
                <div className="h-14 w-14 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
                  <SearchX className="h-7 w-7" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    No Colleges Found
                  </h3>
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    We couldn&apos;t find any colleges matching your selected filters or search query. Try clearing your filters or changing your location.
                  </p>
                </div>
                <button
                  onClick={handleResetFilters}
                  className="px-4 py-2 text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 dark:bg-blue-950 rounded-lg"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              /* College Grid */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {colleges.map((college) => (
                  <CollegeCard
                    key={college.id}
                    college={college}
                    onOpenGuidanceModal={handleOpenGuidanceModal}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* Guidance Request Modal */}
      <GuidanceModal
        isOpen={isGuidanceModalOpen}
        onClose={() => setIsGuidanceModalOpen(false)}
        targetCollege={selectedCollegeForGuidance}
      />
    </div>
  );
}

export default function CollegesPage() {
  return (
    <Suspense
      fallback={
        <div className="py-24 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        </div>
      }
    >
      <CollegesContent />
    </Suspense>
  );
}
