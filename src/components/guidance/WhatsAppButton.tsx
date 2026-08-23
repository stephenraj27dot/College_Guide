import { siteConfig } from "@/config/site";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  customMessage?: string;
  className?: string;
  variant?: "floating" | "inline";
}

export function WhatsAppButton({
  customMessage,
  className = "",
  variant = "floating",
}: WhatsAppButtonProps) {
  const message = customMessage || siteConfig.whatsappDefaultMessage;
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  if (variant === "floating") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with College Guide Expert"
        className={`fixed bottom-6 right-6 z-40 flex items-center space-x-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group ${className}`}
      >
        <MessageCircle className="h-6 w-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-xs font-bold pr-1">
          WhatsApp Guidance
        </span>
      </a>
    );
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center space-x-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-2 text-sm shadow transition-all ${className}`}
    >
      <MessageCircle className="h-4 w-4" />
      <span>WhatsApp Admission Expert</span>
    </a>
  );
}
