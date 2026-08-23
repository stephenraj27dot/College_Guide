"use client";

import { useState } from "react";
import { mockColleges, DetailedCollege } from "@/lib/mockData";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/Container";
import { CollegeCard } from "@/components/college/CollegeCard";
import { GuidanceModal } from "@/components/guidance/GuidanceModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useShortlist } from "@/hooks/useShortlist";
import { useCompare } from "@/hooks/useCompare";
import { CompareDrawer } from "@/components/college/CompareDrawer";
import {
  Wand2,
  MapPin,
  GraduationCap,
  Home,
  Bus,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  RotateCcw,
  Cpu,
  Activity,
  HeartPulse,
  Scale,
  BookOpen,
  Sparkles,
} from "lucide-react";

/* ────────────────────────────────────────── */
/* Wizard Configuration                       */
/* ────────────────────────────────────────── */

const STEPS = [
  { id: 1, label: "Stream", question: "What do you want to study?" },
  { id: 2, label: "Location", question: "Which city do you prefer?" },
  { id: 3, label: "Preferences", question: "Any special requirements?" },
  { id: 4, label: "Results", question: "Your Best Matches" },
];

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  engineering: <Cpu className="h-7 w-7" />,
  medical: <Activity className="h-7 w-7" />,
  nursing: <HeartPulse className="h-7 w-7" />,
  law: <Scale className="h-7 w-7" />,
  "arts-science": <BookOpen className="h-7 w-7" />,
};

interface WizardAnswers {
  category: string;
  location: string;
  hostelRequired: boolean;
  transportRequired: boolean;
}

/* ────────────────────────────────────────── */
/* Scoring: Match % calculation               */
/* ────────────────────────────────────────── */

function calculateMatchScore(college: DetailedCollege, answers: WizardAnswers): number {
  let score = 0;
  const max = 4;

  if (college.category_slug === answers.category) score += 2;
  if (college.city === answers.location) score += 1;
  if (!answers.hostelRequired || college.hostel_available) score += 0.5;
  if (!answers.transportRequired || college.transport_available) score += 0.5;

  return Math.round((score / max) * 100);
}

/* ────────────────────────────────────────── */
/* Step Progress Bar                          */
/* ────────────────────────────────────────── */

function StepProgress({ currentStep }: { currentStep: number }) {
  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="flex items-center justify-between mb-2">
        {STEPS.slice(0, 3).map((step, idx) => {
          const stepNum = idx + 1;
          const isComplete = currentStep > stepNum;
          const isActive = currentStep === stepNum;
          return (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center gap-1">
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    isComplete
                      ? "bg-emerald-500 text-white"
                      : isActive
                      ? "bg-blue-600 text-white ring-4 ring-blue-600/30"
                      : "bg-slate-800 text-slate-500"
                  }`}
                >
                  {isComplete ? <CheckCircle2 className="h-4 w-4" /> : stepNum}
                </div>
                <span className={`text-[10px] font-semibold ${isActive ? "text-blue-400" : isComplete ? "text-emerald-400" : "text-slate-600"}`}>
                  {step.label}
                </span>
              </div>
              {idx < 2 && (
                <div className={`flex-1 h-0.5 mx-2 mb-5 rounded-full transition-all duration-500 ${isComplete ? "bg-emerald-500" : "bg-slate-800"}`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────── */
/* Step 1 — Category                          */
/* ────────────────────────────────────────── */

function Step1Category({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {siteConfig.categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`group flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all duration-200 text-center ${
            selected === cat.id
              ? "border-blue-500 bg-blue-600/10 ring-2 ring-blue-500/30"
              : "border-slate-800 bg-slate-900 hover:border-blue-500/60 hover:bg-slate-800"
          }`}
        >
          <div
            className={`p-4 rounded-2xl transition-colors ${
              selected === cat.id
                ? "bg-blue-600 text-white"
                : "bg-slate-800 text-slate-400 group-hover:bg-blue-600/20 group-hover:text-blue-400"
            }`}
          >
            {CATEGORY_ICONS[cat.id] || <GraduationCap className="h-7 w-7" />}
          </div>
          <div>
            <p className={`font-bold text-sm ${selected === cat.id ? "text-blue-400" : "text-white"}`}>
              {cat.title}
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{cat.description}</p>
          </div>
          {selected === cat.id && (
            <CheckCircle2 className="h-5 w-5 text-blue-400 mt-auto" />
          )}
        </button>
      ))}
    </div>
  );
}

/* ────────────────────────────────────────── */
/* Step 2 — Location                          */
/* ────────────────────────────────────────── */

function Step2Location({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (loc: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3 mt-6 justify-center">
      {siteConfig.featuredLocations.map((loc) => (
        <button
          key={loc}
          onClick={() => onSelect(loc)}
          className={`flex items-center gap-2 px-5 py-3 rounded-full border-2 font-semibold text-sm transition-all duration-200 ${
            selected === loc
              ? "border-blue-500 bg-blue-600 text-white shadow-lg shadow-blue-600/30"
              : "border-slate-700 bg-slate-900 text-slate-300 hover:border-blue-500/60 hover:text-white"
          }`}
        >
          <MapPin className={`h-4 w-4 ${selected === loc ? "text-white" : "text-red-400"}`} />
          {loc}
          {selected === loc && <CheckCircle2 className="h-4 w-4" />}
        </button>
      ))}
    </div>
  );
}

/* ────────────────────────────────────────── */
/* Reusable Preference Toggle Button          */
/* ────────────────────────────────────────── */

interface PreferenceToggleProps {
  label: string;
  description: string;
  icon: React.ReactNode;
  checked: boolean;
  onChange: (v: boolean) => void;
}

function PreferenceToggle({
  label,
  description,
  icon,
  checked,
  onChange,
}: PreferenceToggleProps) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`flex items-center gap-4 p-5 rounded-2xl border-2 transition-all duration-200 w-full text-left ${
        checked
          ? "border-blue-500 bg-blue-600/10 ring-2 ring-blue-500/30"
          : "border-slate-800 bg-slate-900 hover:border-blue-500/40"
      }`}
    >
      <div
        className={`p-3 rounded-xl shrink-0 transition-colors ${
          checked ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-400"
        }`}
      >
        {icon}
      </div>
      <div className="flex-1">
        <p className={`font-bold text-sm ${checked ? "text-blue-300" : "text-white"}`}>{label}</p>
        <p className="text-xs text-slate-500 mt-0.5">{description}</p>
      </div>
      <div
        className={`h-6 w-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
          checked ? "border-blue-500 bg-blue-600" : "border-slate-700"
        }`}
      >
        {checked && <CheckCircle2 className="h-4 w-4 text-white" />}
      </div>
    </button>
  );
}

/* ────────────────────────────────────────── */
/* Step 3 — Preferences                       */
/* ────────────────────────────────────────── */

function Step3Preferences({
  hostelRequired,
  transportRequired,
  onHostelChange,
  onTransportChange,
}: {
  hostelRequired: boolean;
  transportRequired: boolean;
  onHostelChange: (v: boolean) => void;
  onTransportChange: (v: boolean) => void;
}) {
  return (
    <div className="flex flex-col gap-4 mt-6 max-w-xl mx-auto">
      <PreferenceToggle
        label="Hostel Facility Required"
        description="I need on-campus accommodation"
        icon={<Home className="h-5 w-5" />}
        checked={hostelRequired}
        onChange={onHostelChange}
      />
      <PreferenceToggle
        label="Transport Facility Required"
        description="I need college bus service"
        icon={<Bus className="h-5 w-5" />}
        checked={transportRequired}
        onChange={onTransportChange}
      />
    </div>
  );
}

/* ────────────────────────────────────────── */
/* Main Wizard Component                      */
/* ────────────────────────────────────────── */

export default function FindMyCollegePage() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<WizardAnswers>({
    category: "",
    location: "",
    hostelRequired: false,
    transportRequired: false,
  });

  const [selectedCollegeForGuidance, setSelectedCollegeForGuidance] = useState<DetailedCollege | null>(null);
  const [isGuidanceModalOpen, setIsGuidanceModalOpen] = useState(false);

  const { isShortlisted, toggle: toggleShortlist } = useShortlist();
  const { compareList, isInCompare, toggleCompare, removeFromCompare, clear: clearCompare, canAdd } = useCompare();

  const canProceed = () => {
    if (step === 1) return !!answers.category;
    if (step === 2) return !!answers.location;
    return true;
  };

  const handleNext = () => {
    if (step < 4) setStep((s) => s + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const handleReset = () => {
    setStep(1);
    setAnswers({ category: "", location: "", hostelRequired: false, transportRequired: false });
  };

  // Compute matches for step 4
  const matches = mockColleges
    .map((college) => ({ college, score: calculateMatchScore(college, answers) }))
    .filter((m) => m.score > 0)
    .sort((a, b) => b.score - a.score);

  const currentStepConfig = STEPS.find((s) => s.id === step)!;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 pb-36">
      <Container size="md" className="space-y-8">
        {/* Page Header */}
        <div className="text-center space-y-3">
          <Badge className="bg-purple-600 text-white border-none gap-1.5">
            <Wand2 className="h-3.5 w-3.5" />
            AI-Guided Discovery
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Find My College
          </h1>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            Answer a few quick questions and we&apos;ll match you with the best colleges in Tamil Nadu.
          </p>
        </div>

        {/* Step Progress */}
        {step < 4 && <StepProgress currentStep={step} />}

        {/* Wizard Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
          {/* Step Question */}
          <div className="text-center mb-2">
            {step < 4 && (
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Step {step} of 3
              </p>
            )}
            <h2 className="text-2xl font-extrabold text-white mt-1">
              {currentStepConfig.question}
            </h2>
          </div>

          {/* Step Content */}
          {step === 1 && (
            <Step1Category
              selected={answers.category}
              onSelect={(cat) => setAnswers((a) => ({ ...a, category: cat }))}
            />
          )}
          {step === 2 && (
            <Step2Location
              selected={answers.location}
              onSelect={(loc) => setAnswers((a) => ({ ...a, location: loc }))}
            />
          )}
          {step === 3 && (
            <Step3Preferences
              hostelRequired={answers.hostelRequired}
              transportRequired={answers.transportRequired}
              onHostelChange={(v) => setAnswers((a) => ({ ...a, hostelRequired: v }))}
              onTransportChange={(v) => setAnswers((a) => ({ ...a, transportRequired: v }))}
            />
          )}

          {/* Step 4: Matched Results */}
          {step === 4 && (
            <div className="mt-6 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm font-bold text-white">
                    {matches.length} Colleges Matched
                  </span>
                </div>
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Start Over
                </button>
              </div>

              {/* Summary of answers */}
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-blue-600/20 text-blue-300 border-blue-700">
                  {siteConfig.categories.find((c) => c.id === answers.category)?.title || answers.category}
                </Badge>
                <Badge className="bg-slate-800 text-slate-300 border-slate-700">
                  <MapPin className="h-3 w-3 mr-1 text-red-400" />
                  {answers.location}
                </Badge>
                {answers.hostelRequired && (
                  <Badge className="bg-emerald-800/30 text-emerald-300 border-emerald-800">
                    <Home className="h-3 w-3 mr-1" />
                    Hostel
                  </Badge>
                )}
                {answers.transportRequired && (
                  <Badge className="bg-amber-800/30 text-amber-300 border-amber-800">
                    <Bus className="h-3 w-3 mr-1" />
                    Transport
                  </Badge>
                )}
              </div>

              {matches.length === 0 ? (
                <div className="text-center py-12 space-y-4">
                  <GraduationCap className="h-12 w-12 text-slate-700 mx-auto" />
                  <p className="text-slate-400 text-sm">
                    No exact matches found. Try adjusting your preferences.
                  </p>
                  <Button variant="outline" size="sm" onClick={handleReset} className="border-slate-700">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Restart Wizard
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {matches.map(({ college, score }) => (
                    <div key={college.id} className="relative">
                      {/* Match % badge overlay */}
                      <div className="absolute -top-3 left-4 z-10">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold shadow-lg border ${
                            score >= 80
                              ? "bg-emerald-500 text-white border-emerald-400"
                              : score >= 50
                              ? "bg-blue-600 text-white border-blue-500"
                              : "bg-slate-700 text-slate-300 border-slate-600"
                          }`}
                        >
                          <Sparkles className="h-3 w-3" />
                          {score}% Match
                        </span>
                      </div>
                      <div className="pt-3">
                        <CollegeCard
                          college={college}
                          onOpenGuidanceModal={(c) => {
                            setSelectedCollegeForGuidance(c);
                            setIsGuidanceModalOpen(true);
                          }}
                          isShortlisted={isShortlisted(college.id)}
                          onShortlistToggle={(c) => toggleShortlist(c.id)}
                          isInCompare={isInCompare(college.id)}
                          onCompareToggle={toggleCompare}
                          compareDisabled={!canAdd && !isInCompare(college.id)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        {step < 4 && (
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="md"
              onClick={handleBack}
              disabled={step === 1}
              className="gap-2 border-slate-700 text-slate-300 hover:bg-slate-800 disabled:opacity-30"
            >
              <ChevronLeft className="h-4 w-4" />
              Back
            </Button>

            <Button
              variant="primary"
              size="md"
              onClick={handleNext}
              disabled={!canProceed()}
              className="gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-40"
            >
              {step === 3 ? (
                <>
                  <Sparkles className="h-4 w-4" />
                  Find My Matches
                </>
              ) : (
                <>
                  Next Step
                  <ChevronRight className="h-4 w-4" />
                </>
              )}
            </Button>
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
