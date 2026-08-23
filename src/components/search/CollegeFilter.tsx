"use client";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Filter, RotateCcw, Home } from "lucide-react";

interface CollegeFilterProps {
  selectedCategory: string;
  selectedLocation: string;
  hostelOnly: boolean;
  onCategoryChange: (cat: string) => void;
  onLocationChange: (loc: string) => void;
  onHostelToggle: (val: boolean) => void;
  onReset: () => void;
}

export function CollegeFilter({
  selectedCategory,
  selectedLocation,
  hostelOnly,
  onCategoryChange,
  onLocationChange,
  onHostelToggle,
  onReset,
}: CollegeFilterProps) {
  const hasActiveFilters = Boolean(selectedCategory || selectedLocation || hostelOnly);

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 space-y-6 shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
        <div className="flex items-center space-x-2 text-slate-900 dark:text-white font-bold text-base">
          <Filter className="h-4 w-4 text-blue-600" />
          <span>Filter Colleges</span>
        </div>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onReset}
            className="text-xs text-slate-500 hover:text-red-600 gap-1 h-7 px-2"
          >
            <RotateCcw className="h-3 w-3" />
            <span>Reset</span>
          </Button>
        )}
      </div>

      {/* Category Filter */}
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Education Category
        </label>
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full h-10 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          {siteConfig.categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.title}
            </option>
          ))}
        </select>
      </div>

      {/* Location Filter */}
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Location / City
        </label>
        <select
          value={selectedLocation}
          onChange={(e) => onLocationChange(e.target.value)}
          className="w-full h-10 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Locations</option>
          {siteConfig.featuredLocations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      {/* Hostel Facility Toggle */}
      <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
        <label className="flex items-center space-x-3 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={hostelOnly}
            onChange={(e) => onHostelToggle(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
          />
          <div className="flex items-center space-x-1.5 text-sm font-medium text-slate-700 dark:text-slate-300">
            <Home className="h-4 w-4 text-emerald-600" />
            <span>On-Campus Hostel Only</span>
          </div>
        </label>
      </div>
    </div>
  );
}
