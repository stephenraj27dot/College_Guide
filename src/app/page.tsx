"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/config/site";
import { mockColleges, DetailedCollege } from "@/lib/mockData";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { CollegeCard } from "@/components/college/CollegeCard";
import { TrustSection } from "@/components/student/TrustSection";
import { GuidanceModal } from "@/components/guidance/GuidanceModal";
import { WhatsAppButton } from "@/components/guidance/WhatsAppButton";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  GraduationCap,
  MapPin,
  Search,
  CheckCircle2,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  ArrowRight,
  Cpu,
  Activity,
  HeartPulse,
  Scale,
  BookOpen,
  Wand2,
  Sparkles,
} from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [heroSearch, setHeroSearch] = useState("");
  const [selectedCollegeForGuidance, setSelectedCollegeForGuidance] =
    useState<DetailedCollege | null>(null);
  const [isGuidanceModalOpen, setIsGuidanceModalOpen] = useState(false);

  const featuredColleges = mockColleges.filter((c) => c.is_featured).slice(0, 4);

  const categoryIcons: Record<string, React.ReactNode> = {
    engineering: <Cpu className="h-6 w-6" />,
    medical: <Activity className="h-6 w-6" />,
    nursing: <HeartPulse className="h-6 w-6" />,
    law: <Scale className="h-6 w-6" />,
    "arts-science": <BookOpen className="h-6 w-6" />,
  };

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroSearch.trim()) {
      router.push(`/colleges?search=${encodeURIComponent(heroSearch.trim())}`);
    } else {
      router.push("/colleges");
    }
  };

  const handleOpenGuidanceModal = (college?: DetailedCollege) => {
    setSelectedCollegeForGuidance(college || null);
    setIsGuidanceModalOpen(true);
  };

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappDefaultMessage
  )}`;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-slate-950 text-white py-20 lg:py-28">
        <Container size="lg">
          <div className="max-w-3xl space-y-6">
            <Badge variant="success" className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
              Tamil Nadu College Discovery & Admission Guidance
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Discover Suitable Colleges with Expert Guidance
            </h1>

            <p className="text-lg sm:text-xl text-blue-100/90 font-light leading-relaxed">
              Explore engineering, medical, law, nursing, and arts colleges across Tamil Nadu. Receive independent counselling for cutoffs, seats, and course selection.
            </p>

            {/* Hero Search Bar Form */}
            <form onSubmit={handleHeroSearch} className="flex flex-col sm:flex-row gap-3 pt-2 max-w-2xl">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  value={heroSearch}
                  onChange={(e) => setHeroSearch(e.target.value)}
                  placeholder="Search college, course, or city (e.g. SRM, Chennai, B.Tech CSE)..."
                  className="w-full h-12 rounded-xl pl-11 pr-4 text-sm bg-white text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg"
                />
              </div>
              <Button type="submit" variant="primary" size="lg" className="h-12 bg-blue-600 hover:bg-blue-700 font-bold px-6 shrink-0">
                Search Colleges
              </Button>
            </form>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button
                variant="whatsapp"
                size="md"
                className="gap-2"
                onClick={() => window.open(whatsappUrl, "_blank")}
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp Admission Expert</span>
              </Button>

              <Button
                variant="outline"
                size="md"
                className="gap-2 border-slate-700 text-white hover:bg-slate-800"
                onClick={() => handleOpenGuidanceModal()}
              >
                <PhoneCall className="h-4 w-4" />
                <span>Request Callback</span>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 border-t border-blue-800/40 text-xs text-blue-200">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>100% Verified Information</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="h-4 w-4 text-blue-400 shrink-0" />
                <span>Independent Counselling</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-amber-400 shrink-0" />
                <span>All TN Districts Covered</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Category Discovery */}
      <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <Container size="lg" className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <Badge variant="default" className="bg-blue-600 text-white">
                Education Stream
              </Badge>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                Explore Colleges by Category
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Select your stream to find eligible institutions and courses across Tamil Nadu.
              </p>
            </div>
            <Link href="/colleges">
              <Button variant="ghost" className="gap-2 text-blue-600 hover:text-blue-700">
                <span>View All Categories</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.categories.map((cat) => (
              <Link key={cat.id} href={`/colleges?category=${cat.id}`}>
                <Card className="h-full hover:border-blue-500/60 hover:shadow-md transition-all duration-300 cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        {categoryIcons[cat.id] || <GraduationCap className="h-6 w-6" />}
                      </div>
                      <Badge variant="outline">TN Approved</Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                      {cat.title}
                    </CardTitle>
                    <CardDescription className="text-xs leading-relaxed">
                      {cat.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Location Chips Discovery */}
      <section className="py-12 bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <Container size="lg" className="space-y-6">
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-red-500" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Discover Colleges by Location
            </h3>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {siteConfig.featuredLocations.map((loc) => (
              <Link key={loc} href={`/colleges?location=${loc}`}>
                <div className="px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm">
                  Colleges in {loc}
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Find My College CTA Banner */}
      <section className="py-12 bg-gradient-to-r from-purple-950 via-blue-950 to-slate-950 border-b border-slate-800">
        <Container size="lg">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <Badge className="bg-purple-600/30 text-purple-300 border-purple-600/40 gap-1.5">
                <Wand2 className="h-3.5 w-3.5" />
                AI-Guided Discovery
              </Badge>
              <h2 className="text-3xl font-extrabold text-white">
                Not Sure Which College to Choose?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Answer 3 quick questions about your stream, preferred location, and requirements — and we&apos;ll show you your best college matches with a compatibility score.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/find-my-college">
                  <Button variant="primary" size="lg" className="bg-purple-600 hover:bg-purple-700 gap-2 font-bold">
                    <Sparkles className="h-5 w-5" />
                    Find My College
                  </Button>
                </Link>
                <Link href="/colleges">
                  <Button variant="outline" size="lg" className="gap-2 border-slate-600 text-white hover:bg-slate-800">
                    <ArrowRight className="h-4 w-4" />
                    Browse All Colleges
                  </Button>
                </Link>
              </div>
            </div>

            {/* Steps visual */}
            <div className="flex flex-col gap-3 lg:min-w-[300px]">
              {[
                { step: "01", label: "Select your education stream", color: "text-purple-400" },
                { step: "02", label: "Choose your preferred location", color: "text-blue-400" },
                { step: "03", label: "Set hostel & transport needs", color: "text-emerald-400" },
              ].map((item) => (
                <div key={item.step} className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10">
                  <span className={`text-2xl font-extrabold ${item.color}`}>{item.step}</span>
                  <span className="text-sm text-slate-300 font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Colleges Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <Container size="lg" className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <Badge variant="success" className="bg-emerald-600 text-white">
                Featured Institutions
              </Badge>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                Top Rated Colleges in Tamil Nadu
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Explore high-demand institutions with NAAC accreditation and strong placement records.
              </p>
            </div>

            <Link href="/colleges">
              <Button variant="outline" className="gap-2">
                <span>Browse All Colleges</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredColleges.map((college) => (
              <CollegeCard
                key={college.id}
                college={college}
                onOpenGuidanceModal={handleOpenGuidanceModal}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Trust & Awards Section Component */}
      <TrustSection />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton variant="floating" />

      {/* Guidance Modal */}
      <GuidanceModal
        isOpen={isGuidanceModalOpen}
        onClose={() => setIsGuidanceModalOpen(false)}
        targetCollege={selectedCollegeForGuidance}
      />
    </div>
  );
}
