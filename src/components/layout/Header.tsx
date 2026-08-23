import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { MessageCircle, PhoneCall } from "lucide-react";

export function Header() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappDefaultMessage
  )}`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur support-[backdrop-filter]:bg-white/70">
      <Container size="lg">
        <div className="flex h-16 items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-md overflow-hidden p-0.5 border border-slate-100 dark:border-slate-800">
              <img src="/favicon.ico" alt="College Guide Logo" className="h-full w-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                College Guide
              </span>
              <span className="text-[10px] font-bold text-amber-500 dark:text-amber-400 tracking-wide uppercase">
                Your Path • Our Guide
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center space-x-3">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="sm" className="hidden sm:inline-flex gap-1.5">
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp Expert</span>
              </Button>
            </a>
            <Link href="/guidance">
              <Button variant="primary" size="sm" className="gap-1.5">
                <PhoneCall className="h-4 w-4" />
                <span>Get Guidance</span>
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
