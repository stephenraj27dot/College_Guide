import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCollegeBySlug } from "@/services/colleges";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MapPin,
  Award,
  Calendar,
  Building,
  Home,
  Bus,
  PhoneCall,
  MessageCircle,
  BookOpen,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const college = await getCollegeBySlug(slug);

  if (!college) {
    return {
      title: "College Not Found | College Guide",
    };
  }

  return {
    title: `${college.name} — Admission Guidance, Courses & Cutoff`,
    description: `Explore ${college.name} (${college.short_name}), ${college.city}. View courses, departments, fee structure, NAAC accreditation, hostel facilities, and get expert admission counselling.`,
  };
}

export default async function CollegeDetailPage({ params }: Props) {
  const { slug } = await params;
  const college = await getCollegeBySlug(slug);

  if (!college) {
    notFound();
  }

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    `Hi College Guide, I need admission guidance for ${college.name} (${college.city}).`
  )}`;

  return (
    <div className="py-8 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <Container size="lg" className="space-y-8">
        {/* Back Link */}
        <Link
          href="/colleges"
          className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to All Colleges</span>
        </Link>

        {/* Hero Header Card */}
        <div className="relative rounded-2xl overflow-hidden bg-slate-900 text-white shadow-xl border border-slate-800">
          {/* Banner background */}
          <div className="relative h-64 sm:h-80 w-full bg-slate-950">
            {college.banner_url ? (
              <Image
                src={college.banner_url}
                alt={college.name}
                fill
                priority
                className="object-cover opacity-40"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-r from-blue-950 to-slate-950" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
          </div>

          {/* Banner Overlay Content */}
          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="success" className="bg-emerald-500 text-slate-950 font-bold border-none">
                {college.institution_type}
              </Badge>
              {college.accreditation && (
                <Badge variant="default" className="bg-blue-600 text-white border-none">
                  <Award className="h-3 w-3 mr-1" />
                  {college.accreditation}
                </Badge>
              )}
              {college.nirf_ranking && (
                <Badge variant="warning" className="bg-amber-400 text-slate-950 font-bold border-none">
                  NIRF Rank #{college.nirf_ranking}
                </Badge>
              )}
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {college.name}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4 text-red-400 shrink-0" />
                <span>{college.address || `${college.city}, Tamil Nadu`}</span>
              </div>
              {college.established_year && (
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4 text-blue-400 shrink-0" />
                  <span>Est. {college.established_year}</span>
                </div>
              )}
              {college.affiliation && (
                <div className="flex items-center space-x-1">
                  <Building className="h-4 w-4 text-indigo-400 shrink-0" />
                  <span>{college.affiliation}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column: Details, Departments & Facilities */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
              <CardHeader>
                <CardTitle className="text-xl">About Institution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>{college.description}</p>
              </CardContent>
            </Card>

            {/* Offered Courses & Departments */}
            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
              <CardHeader className="border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  <CardTitle className="text-xl">Offered Programs & Departments</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 divide-y divide-slate-100 dark:divide-slate-800">
                {college.departments.map((dep) => (
                  <div key={dep.id} className="py-4 first:pt-0 last:pb-0 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="font-bold text-base text-slate-900 dark:text-white">
                        {dep.name} ({dep.code})
                      </h4>
                      <Badge variant="outline" className="w-fit">
                        {dep.duration}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-500 dark:text-slate-400 pt-1">
                      <div>
                        <strong>Tuition Fee:</strong> {dep.tuitionFeePerYear}
                      </div>
                      <div>
                        <strong>Eligibility:</strong> {dep.eligibility}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Campus Facilities */}
            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
              <CardHeader>
                <CardTitle className="text-xl">Campus Facilities & Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {college.hostel_available && (
                    <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 p-3 rounded-lg">
                      <Home className="h-4 w-4" />
                      <span>On-Campus Hostel for Boys & Girls</span>
                    </div>
                  )}
                  {college.transport_available && (
                    <div className="flex items-center space-x-2 text-xs font-semibold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 p-3 rounded-lg">
                      <Bus className="h-4 w-4" />
                      <span>Bus Transport Service Available</span>
                    </div>
                  )}
                  {college.facilities.map((fac, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 p-3 rounded-lg"
                    >
                      <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0" />
                      <span>{fac}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sticky Sidebar: Guidance CTA Widget */}
          <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-24">
            <Card className="border-2 border-blue-500/30 bg-gradient-to-b from-blue-900 to-indigo-950 text-white shadow-xl">
              <CardHeader className="space-y-2">
                <Badge variant="success" className="w-fit bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                  Admission Guidance
                </Badge>
                <CardTitle className="text-xl text-white">
                  Interested in {college.short_name || college.name}?
                </CardTitle>
                <p className="text-xs text-blue-100/90 leading-relaxed">
                  Speak directly with a College Guide admission counsellor to check seat availability, cutoff marks, and application procedures.
                </p>
              </CardHeader>

              <CardContent className="space-y-4 pt-2">
                <Link href={`/guidance?college=${college.slug}`} className="block">
                  <Button variant="primary" size="lg" className="w-full gap-2 bg-blue-500 hover:bg-blue-600 text-white">
                    <PhoneCall className="h-4 w-4" />
                    <span>Request Callback</span>
                  </Button>
                </Link>

                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="whatsapp" size="lg" className="w-full gap-2">
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp Counsellor</span>
                  </Button>
                </a>

                <div className="text-[11px] text-blue-200 text-center pt-2 border-t border-blue-800/60">
                  ✓ Free Ethical Guidance • Confidential
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
