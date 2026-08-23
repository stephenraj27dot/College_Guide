import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";

export default function GuidancePage() {
  return (
    <div className="py-16 bg-slate-50 dark:bg-slate-900 min-h-screen">
      <Container size="sm" className="space-y-6">
        <div className="space-y-2 text-center">
          <Badge variant="success">Expert Counselling</Badge>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Request Admission Guidance
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Student enquiry and lead flow foundation ready for implementation phase.
          </p>
        </div>
      </Container>
    </div>
  );
}
