"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    // Log error securely to monitoring without exposing to student UI
    console.error("Unhandled Application Error:", error);
  }, [error]);

  return (
    <div className="py-24 flex items-center justify-center">
      <Container size="sm" className="text-center space-y-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-950 text-red-600 mx-auto">
          <AlertCircle className="h-8 w-8" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Something went wrong
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            We encountered an unexpected issue while loading this page. Please try again or contact our guidance team for support.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Button variant="primary" onClick={() => reset()}>
            Try Again
          </Button>
          <Button variant="outline" onClick={() => router.push("/")}>
            Return Home
          </Button>
        </div>
      </Container>
    </div>
  );
}
