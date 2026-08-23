"use client";

import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { mockColleges } from "@/lib/mockData";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GuidanceModal } from "@/components/guidance/GuidanceModal";
import { useState } from "react";
import type { DetailedCollege } from "@/lib/mockData";
import {
  GitCompareArrows,
  MapPin,
  CheckCircle2,
  XCircle,
  ArrowLeft,
  PhoneCall,
  Building2,
  Award,
  CalendarDays,
  BookOpen,
  Home,
  Bus,
  Trophy,
} from "lucide-react";

function CompareRow({
  label,
  icon,
  values,
}: {
  label: string;
  icon: React.ReactNode;
  values: (string | boolean | number | null | undefined)[];
}) {
  return (
    <tr className="border-b border-slate-800/60 hover:bg-slate-900/40 transition-colors">
      <td className="py-4 px-5 text-xs font-semibold text-slate-400 whitespace-nowrap">
        <div className="flex items-center gap-2">
          <span className="text-slate-500">{icon}</span>
          {label}
        </div>
      </td>
      {values.map((val, i) => (
        <td key={i} className="py-4 px-5 text-sm text-center">
          {typeof val === "boolean" ? (
            val ? (
              <CheckCircle2 className="h-5 w-5 text-emerald-400 mx-auto" />
            ) : (
              <XCircle className="h-5 w-5 text-slate-600 mx-auto" />
            )
          ) : val ? (
            <span className="text-slate-200 font-medium">{val}</span>
          ) : (
            <span className="text-slate-600 text-xs">—</span>
          )}
        </td>
      ))}
      {/* Empty filler cells if less than 3 colleges */}
      {Array.from({ length: 3 - values.length }).map((_, i) => (
        <td key={`empty-${i}`} className="py-4 px-5 text-center">
          <span className="text-slate-800 text-xs">—</span>
        </td>
      ))}
    </tr>
  );
}

function CompareContent() {
  const searchParams = useSearchParams();
  const idsParam = searchParams.get("ids") || "";
  const selectedIds = idsParam ? idsParam.split(",").filter(Boolean).slice(0, 3) : [];

  const colleges = selectedIds
    .map((id) => mockColleges.find((c) => c.id === id))
    .filter((c): c is DetailedCollege => !!c);

  const [selectedCollegeForGuidance, setSelectedCollegeForGuidance] = useState<DetailedCollege | null>(null);
  const [isGuidanceModalOpen, setIsGuidanceModalOpen] = useState(false);

  if (colleges.length < 2) {
    return (
      <div className="min-h-screen bg-slate-950 py-24 flex items-center justify-center">
        <div className="text-center space-y-4">
          <GitCompareArrows className="h-12 w-12 text-slate-600 mx-auto" />
          <h2 className="text-xl font-bold text-white">Select at least 2 colleges to compare</h2>
          <p className="text-sm text-slate-400">
            Go back and add colleges to your comparison tray.
          </p>
          <Link href="/colleges">
            <Button variant="primary" className="bg-blue-600 hover:bg-blue-700 gap-2 mt-4">
              <ArrowLeft className="h-4 w-4" />
              Browse Colleges
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12">
      <Container size="lg" className="space-y-8">
        {/* Header */}
        <div className="space-y-3">
          <Link href="/colleges">
            <button className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Colleges
            </button>
          </Link>
          <div className="flex items-center gap-3">
            <Badge className="bg-blue-600 text-white border-none">
              <GitCompareArrows className="h-3 w-3 mr-1.5" />
              Side-by-Side Comparison
            </Badge>
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Compare Colleges
          </h1>
          <p className="text-sm text-slate-400">
            Evaluate {colleges.length} colleges side by side to make a confident decision.
          </p>
        </div>

        {/* Compare Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900 shadow-xl">
          <table className="w-full min-w-[640px]">
            {/* College Header Row */}
            <thead>
              <tr className="border-b border-slate-800">
                <th className="py-6 px-5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider w-40">
                  Feature
                </th>
                {colleges.map((college) => (
                  <th key={college.id} className="py-6 px-5 text-center align-top">
                    <div className="flex flex-col items-center gap-3">
                      {college.logo_url && (
                        <div className="relative h-14 w-14 rounded-xl overflow-hidden bg-slate-800 border border-slate-700">
                          <Image
                            src={college.logo_url}
                            alt={college.name}
                            fill
                            className="object-cover"
                            sizes="56px"
                          />
                        </div>
                      )}
                      <div className="space-y-1">
                        <p className="text-sm font-bold text-white leading-tight line-clamp-2">
                          {college.name}
                        </p>
                        <p className="text-xs text-slate-400 flex items-center justify-center gap-1">
                          <MapPin className="h-3 w-3 text-red-400 shrink-0" />
                          {college.city}
                        </p>
                      </div>
                      <Button
                        variant="primary"
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 gap-1.5 text-xs"
                        onClick={() => {
                          setSelectedCollegeForGuidance(college);
                          setIsGuidanceModalOpen(true);
                        }}
                      >
                        <PhoneCall className="h-3.5 w-3.5" />
                        Get Guidance
                      </Button>
                    </div>
                  </th>
                ))}
                {/* Empty filler columns */}
                {Array.from({ length: 3 - colleges.length }).map((_, i) => (
                  <th key={`empty-col-${i}`} className="py-6 px-5 text-center">
                    <div className="h-14 w-14 mx-auto rounded-xl border border-dashed border-slate-700 flex items-center justify-center">
                      <span className="text-xs text-slate-700">+</span>
                    </div>
                    <p className="text-xs text-slate-700 mt-3">Add College</p>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              <CompareRow
                label="Location"
                icon={<MapPin className="h-3.5 w-3.5" />}
                values={colleges.map((c) => `${c.city}, ${c.district}`)}
              />
              <CompareRow
                label="Institution Type"
                icon={<Building2 className="h-3.5 w-3.5" />}
                values={colleges.map((c) => c.institution_type)}
              />
              <CompareRow
                label="Affiliation"
                icon={<BookOpen className="h-3.5 w-3.5" />}
                values={colleges.map((c) => c.affiliation)}
              />
              <CompareRow
                label="Accreditation"
                icon={<Award className="h-3.5 w-3.5" />}
                values={colleges.map((c) => c.accreditation)}
              />
              <CompareRow
                label="NIRF Ranking"
                icon={<Trophy className="h-3.5 w-3.5" />}
                values={colleges.map((c) => c.nirf_ranking ? `#${c.nirf_ranking}` : null)}
              />
              <CompareRow
                label="Established"
                icon={<CalendarDays className="h-3.5 w-3.5" />}
                values={colleges.map((c) => c.established_year ? `${c.established_year}` : null)}
              />
              <CompareRow
                label="Departments"
                icon={<BookOpen className="h-3.5 w-3.5" />}
                values={colleges.map((c) =>
                  c.departments.slice(0, 3).map((d) => d.code).join(", ") +
                  (c.departments.length > 3 ? ` +${c.departments.length - 3} more` : "")
                )}
              />
              <CompareRow
                label="Hostel"
                icon={<Home className="h-3.5 w-3.5" />}
                values={colleges.map((c) => c.hostel_available)}
              />
              <CompareRow
                label="Transport"
                icon={<Bus className="h-3.5 w-3.5" />}
                values={colleges.map((c) => c.transport_available)}
              />
            </tbody>
          </table>
        </div>

        {/* Bottom CTA */}
        <div className="text-center py-8 space-y-3">
          <p className="text-sm text-slate-400">
            Still unsure? Our admission experts can help you choose the right college.
          </p>
          <Button
            variant="primary"
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 gap-2"
            onClick={() => {
              setSelectedCollegeForGuidance(null);
              setIsGuidanceModalOpen(true);
            }}
          >
            <PhoneCall className="h-5 w-5" />
            Talk to an Admission Expert
          </Button>
        </div>
      </Container>

      <GuidanceModal
        isOpen={isGuidanceModalOpen}
        onClose={() => setIsGuidanceModalOpen(false)}
        targetCollege={selectedCollegeForGuidance}
      />
    </div>
  );
}

export default function ComparePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-950 flex items-center justify-center">
          <div className="animate-spin h-8 w-8 rounded-full border-2 border-blue-600 border-t-transparent" />
        </div>
      }
    >
      <CompareContent />
    </Suspense>
  );
}
