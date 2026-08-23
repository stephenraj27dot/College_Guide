import { Container } from "@/components/layout/Container";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="py-24 flex items-center justify-center">
      <Container size="sm" className="text-center space-y-4">
        <Loader2 className="h-10 w-10 animate-spin text-blue-600 mx-auto" />
        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
          Loading College Guide...
        </p>
      </Container>
    </div>
  );
}
