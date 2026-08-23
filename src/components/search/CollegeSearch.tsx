"use client";

import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";

interface CollegeSearchProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}

export function CollegeSearch({
  value,
  onChange,
  placeholder = "Search college by name, department, or location...",
}: CollegeSearchProps) {
  return (
    <div className="relative w-full">
      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="pl-10 pr-10 h-11 bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-sm shadow-sm"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
