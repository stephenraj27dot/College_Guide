"use client";

import Link from "next/link";
import Image from "next/image";
import { DetailedCollege } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { X, GitCompareArrows, ArrowRight, ChevronRight } from "lucide-react";

interface CompareDrawerProps {
  compareList: DetailedCollege[];
  onRemove: (collegeId: string) => void;
  onClear: () => void;
}

export function CompareDrawer({ compareList, onRemove, onClear }: CompareDrawerProps) {
  if (compareList.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
      <div className="pointer-events-auto mx-auto max-w-4xl px-4 pb-4">
        <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header Bar */}
          <div className="flex items-center justify-between px-5 py-3 bg-blue-600/10 border-b border-slate-700">
            <div className="flex items-center gap-2">
              <GitCompareArrows className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-bold text-white">
                Compare Colleges
              </span>
              <span className="text-xs text-slate-400">
                ({compareList.length}/3 selected)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={onClear}
                className="text-xs text-slate-400 hover:text-white underline transition-colors"
              >
                Clear All
              </button>
            </div>
          </div>

          {/* College Chips */}
          <div className="flex items-center gap-3 px-5 py-4 flex-wrap sm:flex-nowrap">
            {compareList.map((college) => (
              <div
                key={college.id}
                className="flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 flex-1 min-w-[180px]"
              >
                {college.logo_url && (
                  <div className="relative h-8 w-8 rounded-lg overflow-hidden bg-slate-700 shrink-0">
                    <Image
                      src={college.logo_url}
                      alt={college.short_name || college.name}
                      fill
                      className="object-cover"
                      sizes="32px"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-white line-clamp-1">
                    {college.short_name || college.name}
                  </p>
                  <p className="text-[10px] text-slate-400 truncate">{college.city}</p>
                </div>
                <button
                  onClick={() => onRemove(college.id)}
                  aria-label={`Remove ${college.name} from compare`}
                  className="shrink-0 h-5 w-5 rounded-full bg-slate-700 hover:bg-red-500/80 flex items-center justify-center transition-colors"
                >
                  <X className="h-3 w-3 text-slate-300" />
                </button>
              </div>
            ))}

            {/* Empty slots */}
            {Array.from({ length: 3 - compareList.length }).map((_, i) => (
              <div
                key={`empty-${i}`}
                className="flex-1 min-w-[180px] h-[56px] rounded-xl border border-dashed border-slate-700 flex items-center justify-center"
              >
                <span className="text-xs text-slate-600">+ Add college</span>
              </div>
            ))}

            {/* Compare CTA */}
            <div className="shrink-0">
              {compareList.length >= 2 ? (
                <Link href={`/compare?ids=${compareList.map((c) => c.id).join(",")}`}>
                  <Button
                    variant="primary"
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 gap-1.5 text-xs whitespace-nowrap"
                  >
                    <span>Compare Now</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Button>
                </Link>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  disabled
                  className="gap-1.5 text-xs border-slate-700 text-slate-500 whitespace-nowrap"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                  <span>Need 2 min.</span>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
