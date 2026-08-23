"use client";

import { useState } from "react";
import Link from "next/link";
import { mockColleges } from "@/lib/mockData";
import type { DetailedCollege } from "@/lib/mockData";
import { useShortlist } from "@/hooks/useShortlist";
import { useCompare } from "@/hooks/useCompare";
import { Container } from "@/components/layout/Container";
import { CollegeCard } from "@/components/college/CollegeCard";
import { CompareDrawer } from "@/components/college/CompareDrawer";
import { GuidanceModal } from "@/components/guidance/GuidanceModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, SearchX, ArrowLeft, PhoneCall } from "lucide-react";

export default function ShortlistPage() {
  const { shortlistedIds, isShortlisted, toggle: toggleShortlist, clear: clearShortlist, isHydrated } = useShortlist();
  const { compareList, isInCompare, toggleCompare, removeFromCompare, clear: clearCompare, canAdd } = useCompare();

  const [selectedCollegeForGuidance, setSelectedCollegeForGuidance] = useState<DetailedCollege | null>(null);
  const [isGuidanceModalOpen, setIsGuidanceModalOpen] = useState(false);

  // Resolve shortlisted colleges from mock data
  const shortlistedColleges = mockColleges.filter((c) => shortlistedIds.includes(c.id));

  const handleOpenGuidanceModal = (college?: DetailedCollege) => {
    setSelectedCollegeForGuidance(college || null);
    setIsGuidanceModalOpen(true);
  };

  // SSR hydration guard
  if (!isHydrated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="animate-pulse text-slate-400 text-sm">Loading your shortlist...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 pb-36">
      <Container size="lg" className="space-y-8">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Link href="/colleges">
                <button className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-blue-600 transition-colors">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Colleges
                </button>
              </Link>
            </div>
            <Badge variant="default" className="bg-rose-500 text-white border-none">
              <Heart className="h-3 w-3 mr-1 fill-white" />
              My Shortlist
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Shortlisted Colleges
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {shortlistedColleges.length > 0
                ? `${shortlistedColleges.length} college${shortlistedColleges.length > 1 ? "s" : ""} saved to your shortlist. Get guidance for any of these institutions.`
                : "You haven't shortlisted any colleges yet. Browse and save colleges you're interested in."}
            </p>
          </div>

          {shortlistedColleges.length > 0 && (
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={clearShortlist}
                className="text-xs text-slate-500 border-slate-300 hover:border-red-400 hover:text-red-500"
              >
                Clear All
              </Button>
              <Button
                variant="primary"
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 gap-2 text-xs"
                onClick={() => handleOpenGuidanceModal()}
              >
                <PhoneCall className="h-3.5 w-3.5" />
                Get Guidance for All
              </Button>
            </div>
          )}
        </div>

        {/* Shortlisted Colleges Grid or Empty State */}
        {shortlistedColleges.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-16 text-center space-y-6">
            <div className="h-16 w-16 rounded-full bg-rose-50 dark:bg-rose-950/30 flex items-center justify-center mx-auto">
              <Heart className="h-8 w-8 text-rose-300" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                No Colleges Shortlisted
              </h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto">
                Browse colleges and tap the heart icon on any card to save it here for easy access.
              </p>
            </div>
            <Link href="/colleges">
              <Button variant="primary" size="md" className="bg-blue-600 hover:bg-blue-700 gap-2">
                <SearchX className="h-4 w-4" />
                Browse Colleges
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {shortlistedColleges.map((college) => (
              <CollegeCard
                key={college.id}
                college={college}
                onOpenGuidanceModal={handleOpenGuidanceModal}
                isShortlisted={isShortlisted(college.id)}
                onShortlistToggle={(c) => toggleShortlist(c.id)}
                isInCompare={isInCompare(college.id)}
                onCompareToggle={toggleCompare}
                compareDisabled={!canAdd && !isInCompare(college.id)}
              />
            ))}
          </div>
        )}
      </Container>

      <GuidanceModal
        isOpen={isGuidanceModalOpen}
        onClose={() => setIsGuidanceModalOpen(false)}
        targetCollege={selectedCollegeForGuidance}
      />

      <CompareDrawer
        compareList={compareList}
        onRemove={removeFromCompare}
        onClear={clearCompare}
      />
    </div>
  );
}
