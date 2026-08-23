import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/Container";
import { GraduationCap, ShieldCheck, HeartHandshake, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400">
      <Container size="lg" className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold text-slate-900 dark:text-white">
                College Guide
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex items-center space-x-2 text-xs text-blue-600 dark:text-blue-400">
              <MapPin className="h-4 w-4" />
              <span>Serving all districts across Tamil Nadu</span>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
              Popular Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {siteConfig.categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/colleges?category=${cat.id}`}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
              Platform Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/colleges" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Search Colleges
                </Link>
              </li>
              <li>
                <Link href="/guidance" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Request Admission Guidance
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">
                  About College Guide
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust & Disclaimer */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-slate-900 dark:text-white text-sm font-semibold">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>Independent Guidance</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              College Guide is an independent student discovery & counselling platform. All student guidance and admission support requests are routed directly to qualified admission counsellors.
            </p>
            <div className="flex items-center space-x-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              <HeartHandshake className="h-4 w-4" />
              <span>Verified Information Only</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400">
          <p>© {new Date().getFullYear()} College Guide. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Built for Tamil Nadu Higher Education Discovery.</p>
        </div>
      </Container>
    </footer>
  );
}
