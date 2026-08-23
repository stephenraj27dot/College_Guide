import { Card, CardContent } from "@/components/ui/card";
import { Users, UserPlus, Flame, CheckCircle, TrendingUp } from "lucide-react";

interface LeadMetricsProps {
  metrics: {
    totalLeads: number;
    newLeads: number;
    highIntentLeads: number;
    admittedLeads: number;
    conversionRate: string;
  };
}

export function LeadMetrics({ metrics }: LeadMetricsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {/* Total Leads */}
      <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
        <CardContent className="p-5 flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Total Enquiries
            </span>
            <div className="text-2xl font-black text-slate-900 dark:text-white">
              {metrics.totalLeads}
            </div>
          </div>
          <div className="h-10 w-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 flex items-center justify-center">
            <Users className="h-5 w-5" />
          </div>
        </CardContent>
      </Card>

      {/* New Enquiries */}
      <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
        <CardContent className="p-5 flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              New Leads
            </span>
            <div className="text-2xl font-black text-blue-600 dark:text-blue-400">
              {metrics.newLeads}
            </div>
          </div>
          <div className="h-10 w-10 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 flex items-center justify-center">
            <UserPlus className="h-5 w-5" />
          </div>
        </CardContent>
      </Card>

      {/* High-Intent Leads */}
      <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
        <CardContent className="p-5 flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              High Intent
            </span>
            <div className="text-2xl font-black text-amber-500">
              {metrics.highIntentLeads}
            </div>
          </div>
          <div className="h-10 w-10 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 flex items-center justify-center">
            <Flame className="h-5 w-5" />
          </div>
        </CardContent>
      </Card>

      {/* Admitted / Conversion */}
      <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
        <CardContent className="p-5 flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Admissions
            </span>
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                {metrics.admittedLeads}
              </span>
              <span className="text-xs font-medium text-emerald-600 flex items-center">
                <TrendingUp className="h-3 w-3 mr-0.5" />
                {metrics.conversionRate}
              </span>
            </div>
          </div>
          <div className="h-10 w-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center">
            <CheckCircle className="h-5 w-5" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
