import Image from "next/image";
import Link from "next/link";
import { DetailedCollege } from "@/lib/mockData";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Award,
  Home,
  ArrowRight,
  PhoneCall,
  Heart,
  GitCompareArrows,
} from "lucide-react";

interface CollegeCardProps {
  college: DetailedCollege;
  onOpenGuidanceModal?: (college: DetailedCollege) => void;
  isShortlisted?: boolean;
  onShortlistToggle?: (college: DetailedCollege) => void;
  isInCompare?: boolean;
  onCompareToggle?: (college: DetailedCollege) => void;
  compareDisabled?: boolean; // true when compare list is full and this college isn't in it
}

export function CollegeCard({
  college,
  onOpenGuidanceModal,
  isShortlisted = false,
  onShortlistToggle,
  isInCompare = false,
  onCompareToggle,
  compareDisabled = false,
}: CollegeCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden border-slate-200 dark:border-slate-800 hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 group">
      {/* Banner / Image Container */}
      <div className="relative h-44 w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
        {college.banner_url ? (
          <Image
            src={college.banner_url}
            alt={college.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-950 text-white font-bold">
            {college.short_name || college.name}
          </div>
        )}

        {/* Overlay Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          {college.accreditation && (
            <Badge variant="success" className="bg-emerald-600 text-white border-none shadow-sm">
              <Award className="h-3 w-3 mr-1" />
              {college.accreditation}
            </Badge>
          )}
          {college.nirf_ranking && (
            <Badge variant="warning" className="bg-amber-500 text-slate-950 font-bold border-none shadow-sm">
              NIRF #{college.nirf_ranking}
            </Badge>
          )}
        </div>

        {/* Top-right action cluster: Hostel + Shortlist */}
        <div className="absolute top-3 right-3 z-10 flex flex-col items-end gap-1.5">
          {college.hostel_available && (
            <Badge variant="secondary" className="bg-slate-900/80 text-white backdrop-blur border-none text-[10px]">
              <Home className="h-3 w-3 mr-1 text-emerald-400" />
              Hostel
            </Badge>
          )}
          {/* Shortlist toggle button */}
          {onShortlistToggle && (
            <button
              onClick={(e) => {
                e.preventDefault();
                onShortlistToggle(college);
              }}
              aria-label={isShortlisted ? "Remove from shortlist" : "Add to shortlist"}
              title={isShortlisted ? "Remove from shortlist" : "Add to shortlist"}
              className={`h-8 w-8 rounded-full flex items-center justify-center backdrop-blur shadow-md transition-all duration-200 ${
                isShortlisted
                  ? "bg-rose-500 text-white scale-110"
                  : "bg-slate-900/70 text-white hover:bg-rose-500"
              }`}
            >
              <Heart className={`h-4 w-4 ${isShortlisted ? "fill-white" : ""}`} />
            </button>
          )}
        </div>
      </div>

      <CardHeader className="p-5 pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {college.institution_type}
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-1 group-hover:text-blue-600 transition-colors">
              {college.name}
            </h3>
          </div>
        </div>

        <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 mt-1">
          <MapPin className="h-3.5 w-3.5 text-red-500 shrink-0 mr-1" />
          <span>
            {college.city}, {college.district} District
          </span>
        </div>
      </CardHeader>

      <CardContent className="p-5 pt-0 flex-1 space-y-4">
        {/* Popular Courses / Departments Chip List */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            Popular Programs
          </span>
          <div className="flex flex-wrap gap-1.5">
            {college.departments.slice(0, 3).map((dep) => (
              <span
                key={dep.id}
                className="inline-block rounded bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-xs text-slate-700 dark:text-slate-300 font-medium"
              >
                {dep.code}
              </span>
            ))}
            {college.departments.length > 3 && (
              <span className="inline-block rounded bg-blue-50 dark:bg-blue-950 px-2 py-0.5 text-xs text-blue-600 dark:text-blue-400 font-semibold">
                +{college.departments.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Compare toggle */}
        {onCompareToggle && (
          <button
            onClick={(e) => {
              e.preventDefault();
              if (!compareDisabled) onCompareToggle(college);
            }}
            disabled={compareDisabled}
            aria-label={isInCompare ? "Remove from compare" : "Add to compare"}
            className={`flex items-center gap-1.5 text-[11px] font-semibold rounded-md px-2.5 py-1 transition-all duration-200 border ${
              isInCompare
                ? "bg-blue-600 text-white border-blue-600"
                : compareDisabled
                ? "border-slate-200 dark:border-slate-700 text-slate-400 cursor-not-allowed"
                : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-blue-500 hover:text-blue-600"
            }`}
          >
            <GitCompareArrows className="h-3.5 w-3.5" />
            {isInCompare ? "In Compare" : compareDisabled ? "Compare Full" : "Add to Compare"}
          </button>
        )}
      </CardContent>

      <CardFooter className="p-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 mt-auto flex items-center justify-between gap-2">
        <Link href={`/colleges/${college.slug}`} className="flex-1">
          <Button variant="outline" size="sm" className="w-full text-xs gap-1">
            <span>View Profile</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </Link>
        <Button
          variant="primary"
          size="sm"
          className="flex-1 text-xs gap-1 bg-blue-600 hover:bg-blue-700"
          onClick={() => onOpenGuidanceModal?.(college)}
        >
          <PhoneCall className="h-3.5 w-3.5" />
          <span>Get Guidance</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
