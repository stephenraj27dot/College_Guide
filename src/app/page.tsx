import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  MapPin,
  Search,
  CheckCircle2,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";

export default function Home() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappDefaultMessage
  )}`;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section Foundation */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-950 to-slate-950 text-white py-20 lg:py-28">
        <Container size="lg">
          <div className="max-w-3xl space-y-6">
            <Badge variant="success" className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
              Tamil Nadu Admission Guidance Platform
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Discover Top Colleges across Tamil Nadu with Expert Guidance
            </h1>

            <p className="text-lg sm:text-xl text-blue-100/90 font-light leading-relaxed">
              Explore colleges by category, location, and course. Get personalized admission counselling from experienced experts.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link href="/colleges">
                <Button variant="primary" size="lg" className="gap-2 bg-blue-500 hover:bg-blue-600">
                  <Search className="h-5 w-5" />
                  <span>Explore Colleges</span>
                </Button>
              </Link>

              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="lg" className="gap-2">
                  <MessageCircle className="h-5 w-5" />
                  <span>Talk to Counsellor</span>
                </Button>
              </a>
            </div>

            {/* Quick Trust Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 border-t border-blue-800/40 text-xs text-blue-200">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Verified College Info</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="h-4 w-4 text-blue-400 shrink-0" />
                <span>Independent Counselling</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-amber-400 shrink-0" />
                <span>All Districts Covered</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Education Categories Foundation */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <Container size="lg" className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Explore by Education Category
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Choose your preferred field of study to browse available institutions in Tamil Nadu.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.categories.map((cat) => (
              <Card key={cat.id} className="hover:border-blue-500/50 transition-all cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <Badge variant="outline">Tamil Nadu</Badge>
                  </div>
                  <CardTitle className="text-lg">{cat.title}</CardTitle>
                  <CardDescription>{cat.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Guidance Callout Section Foundation */}
      <section className="py-16 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <Container size="lg">
          <div className="rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-950 p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-4 max-w-xl">
              <Badge variant="success" className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                Confused About Admission?
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold">
                Get Expert Admission Assistance Today
              </h2>
              <p className="text-sm text-blue-100/90 leading-relaxed">
                Connect directly with our experienced admission counsellors to discuss courses, eligibility, cutoffs, and college selection tailored to your goals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
              <Link href="/guidance" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full gap-2 bg-blue-500 hover:bg-blue-600">
                  <PhoneCall className="h-5 w-5" />
                  <span>Request Callback</span>
                </Button>
              </Link>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="whatsapp" size="lg" className="w-full gap-2">
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp Us</span>
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
