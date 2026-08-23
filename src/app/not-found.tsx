import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 flex items-center justify-center">
      <Container size="sm" className="text-center space-y-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 mx-auto">
          <FileQuestion className="h-8 w-8" />
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Page Not Found
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            The page or college resource you are looking for does not exist or has been moved.
          </p>
        </div>
        <div>
          <Link href="/">
            <Button variant="primary">Return to Homepage</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
