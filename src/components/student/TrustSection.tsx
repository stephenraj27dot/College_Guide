import { mockAwards, mockTestimonials } from "@/lib/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ShieldCheck, Star, Users, CheckCircle } from "lucide-react";

export function TrustSection() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="success" className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30">
            Trust & Excellence
          </Badge>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Why Students & Parents Trust College Guide
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Providing transparent, ethical, and personalized admission guidance for higher education in Tamil Nadu.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 text-center">
            <div className="h-12 w-12 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 flex items-center justify-center mx-auto">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">
              100% Independent Guidance
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We evaluate colleges objectively based on cutoffs, NAAC accreditation, infrastructure, and actual placement records.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 text-center">
            <div className="h-12 w-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">
              Verified Data Sourcing
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Only authentic, client-approved college details, tuition fees, and TNEA / NEET entrance information are published.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 text-center">
            <div className="h-12 w-12 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 flex items-center justify-center mx-auto">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">
              Dedicated Counsellors
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Our expert counsellors guide you through category selection, district options, application deadlines, and admission procedures.
            </p>
          </div>
        </div>

        {/* Awards & Achievements Placeholder Section */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <Award className="h-5 w-5 text-amber-500" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Awards & Recognition
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockAwards.map((award) => (
              <Card key={award.id} className="border-amber-200/60 dark:border-amber-900/40 bg-gradient-to-br from-amber-50/40 to-white dark:from-slate-900 dark:to-slate-950">
                <CardContent className="p-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                      {award.organization} ({award.year})
                    </span>
                    <Badge variant="warning">{award.year}</Badge>
                  </div>
                  <h4 className="font-bold text-base text-slate-900 dark:text-white">
                    {award.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {award.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials Placeholder Section */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Student & Parent Stories
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockTestimonials.map((t) => (
              <Card key={t.id} className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                <CardContent className="p-6 space-y-4">
                  <p className="text-xs text-slate-600 dark:text-slate-300 italic leading-relaxed">
                    &quot;{t.quote}&quot;
                  </p>
                  <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-3">
                    <div>
                      <h5 className="font-bold text-sm text-slate-900 dark:text-white">
                        {t.author_name}
                      </h5>
                      <span className="text-[11px] text-slate-400">
                        {t.author_role} • {t.course_name}
                      </span>
                    </div>
                    {t.college_name && (
                      <Badge variant="outline" className="text-[10px]">
                        {t.college_name}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
