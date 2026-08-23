"use client";

import { useState } from "react";
import { DetailedCollege } from "@/lib/mockData";
import { siteConfig } from "@/config/site";
import { leadGuidanceSchema, LeadGuidanceInput } from "@/lib/validation/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { X, CheckCircle2, PhoneCall, MessageCircle, ShieldCheck } from "lucide-react";

interface GuidanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetCollege?: DetailedCollege | null;
}

export function GuidanceModal({ isOpen, onClose, targetCollege }: GuidanceModalProps) {
  const [formData, setFormData] = useState<LeadGuidanceInput>({
    name: "",
    phone: "",
    email: "",
    preferredCategory: targetCollege?.category_slug || "",
    preferredLocation: targetCollege?.city || "",
    message: "",
    preferredCallbackTime: "Anytime",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = leadGuidanceSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0].toString()] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate lead generation dispatch to College Guide counsellors
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    `Hi College Guide, I am ${formData.name || "a student"}. I need admission guidance${
      targetCollege ? ` for ${targetCollege.name}` : ""
    }.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-5">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-blue-600 text-white">
              <PhoneCall className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">
                Get Admission Guidance
              </h3>
              <p className="text-xs text-slate-500">
                Direct College Guide Counsellor Support
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full p-1 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="h-14 w-14 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                  Guidance Request Received!
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Our official admission expert will call you shortly on{" "}
                  <strong className="text-slate-900 dark:text-white">{formData.phone}</strong>.
                </p>
              </div>

              <div className="pt-4 flex flex-col gap-2">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="whatsapp" className="w-full gap-2">
                    <MessageCircle className="h-4 w-4" />
                    <span>Connect Immediately on WhatsApp</span>
                  </Button>
                </a>
                <Button variant="outline" size="sm" onClick={onClose} className="w-full">
                  Close Window
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {targetCollege && (
                <div className="rounded-lg bg-blue-50 dark:bg-blue-950/50 p-3 border border-blue-100 dark:border-blue-900 flex items-center justify-between text-xs">
                  <span className="font-semibold text-blue-900 dark:text-blue-200 line-clamp-1">
                    Target: {targetCollege.name}
                  </span>
                  <Badge variant="default" className="shrink-0">
                    {targetCollege.city}
                  </Badge>
                </div>
              )}

              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  placeholder="e.g. Stephen Raj"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  error={errors.name}
                />
              </div>

              {/* Mobile Number */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <Input
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  error={errors.phone}
                />
              </div>

              {/* Category Preference */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Category
                  </label>
                  <select
                    value={formData.preferredCategory}
                    onChange={(e) => setFormData({ ...formData, preferredCategory: e.target.value })}
                    className="w-full h-10 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 text-xs text-slate-900 dark:text-slate-100"
                  >
                    <option value="">Select Category</option>
                    {siteConfig.categories.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Callback Preference
                  </label>
                  <select
                    value={formData.preferredCallbackTime}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        preferredCallbackTime: e.target.value as LeadGuidanceInput["preferredCallbackTime"],
                      })
                    }
                    className="w-full h-10 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 text-xs text-slate-900 dark:text-slate-100"
                  >
                    <option value="Anytime">Anytime</option>
                    <option value="Morning">Morning (9 AM - 12 PM)</option>
                    <option value="Afternoon">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening">Evening (4 PM - 8 PM)</option>
                  </select>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full bg-blue-600 hover:bg-blue-700 font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Guidance Request"}
                </Button>
              </div>

              {/* Trust Footer */}
              <div className="flex items-center justify-center space-x-1 text-[11px] text-slate-400 pt-2">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                <span>Your information is safely handled by College Guide experts only.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
