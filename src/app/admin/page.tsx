import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";

export default function AdminDashboardPage() {
  return (
    <div className="py-16 bg-slate-50 dark:bg-slate-900 min-h-screen">
      <Container size="lg" className="space-y-6">
        <div className="space-y-2">
          <Badge variant="outline">Internal Admin CRM</Badge>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Admin & Lead Management Portal
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Admin dashboard foundation ready for CRM development phase.
          </p>
        </div>
      </Container>
    </div>
  );
}
