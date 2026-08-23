"use client";

import { mockLeads } from "@/lib/mockData";

/* ─────────────────────────────────────── */
/* Utility: pure CSS bar chart helpers     */
/* ─────────────────────────────────────── */

function BarChart({
  data,
  maxValue,
  colorClass = "bg-blue-500",
}: {
  data: { label: string; value: number }[];
  maxValue: number;
  colorClass?: string;
}) {
  return (
    <div className="space-y-2.5">
      {data.map((item) => (
        <div key={item.label} className="flex items-center gap-3">
          <span className="text-[11px] text-slate-400 w-28 shrink-0 truncate">{item.label}</span>
          <div className="flex-1 bg-slate-800 rounded-full h-2.5 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-700 ${colorClass}`}
              style={{ width: `${maxValue > 0 ? (item.value / maxValue) * 100 : 0}%` }}
            />
          </div>
          <span className="text-xs font-bold text-slate-300 w-8 text-right">{item.value}</span>
        </div>
      ))}
    </div>
  );
}

function MiniVerticalBar({
  data,
  maxValue,
}: {
  data: { label: string; value: number }[];
  maxValue: number;
}) {
  return (
    <div className="flex items-end gap-2 h-24">
      {data.map((item) => (
        <div key={item.label} className="flex-1 flex flex-col items-center gap-1">
          <span className="text-[9px] text-slate-500 font-bold">{item.value}</span>
          <div className="w-full bg-slate-800 rounded-sm relative overflow-hidden" style={{ height: "72px" }}>
            <div
              className="absolute bottom-0 left-0 right-0 bg-blue-500 rounded-sm transition-all duration-700"
              style={{ height: `${maxValue > 0 ? (item.value / maxValue) * 100 : 0}%` }}
            />
          </div>
          <span className="text-[9px] text-slate-500 truncate w-full text-center">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────── */
/* Analytics data from mockLeads           */
/* ─────────────────────────────────────── */

function buildAnalytics() {
  // Conversion funnel
  const funnelStages = [
    { label: "New Enquiries", status: "NEW", color: "bg-blue-500" },
    { label: "Contacted", status: "CONTACTED", color: "bg-indigo-500" },
    { label: "Counselling", status: "COUNSELLING", color: "bg-purple-500" },
    { label: "Shortlisted", status: "COLLEGE_SHORTLISTED", color: "bg-amber-500" },
    { label: "Admitted", status: "ADMITTED", color: "bg-emerald-500" },
  ];
  const funnel = funnelStages.map((stage) => ({
    ...stage,
    count: mockLeads.filter((l) => l.status === stage.status).length,
  }));

  // Source breakdown
  const sources = ["website_enquiry", "request_callback", "whatsapp", "get_guidance", "find_my_college"];
  const sourceData = sources
    .map((src) => ({
      label: src.replace(/_/g, " "),
      value: mockLeads.filter((l) => l.source === src).length,
    }))
    .filter((s) => s.value > 0);

  // Category breakdown
  const categoryData = [
    { label: "Engineering", value: mockLeads.filter((l) => l.category_name?.includes("Engineering")).length },
    { label: "Nursing", value: mockLeads.filter((l) => l.category_name?.includes("Nursing")).length },
    { label: "Law", value: mockLeads.filter((l) => l.category_name?.includes("Law")).length },
    { label: "Medical", value: mockLeads.filter((l) => l.category_name?.includes("Medical")).length },
  ].filter((c) => c.value > 0);

  // Simulated daily enquiries (last 7 days)
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dailyData = days.map((day, i) => ({
    label: day,
    value: [3, 5, 2, 4, 6, 3, 5][i],
  }));

  return { funnel, sourceData, categoryData, dailyData };
}

/* ─────────────────────────────────────── */
/* Analytics Dashboard Component          */
/* ─────────────────────────────────────── */

export function AnalyticsCharts() {
  const { funnel, sourceData, categoryData, dailyData } = buildAnalytics();
  const totalLeads = mockLeads.length;
  const admittedCount = funnel.find((f) => f.status === "ADMITTED")?.count || 0;
  const conversionRate = totalLeads > 0 ? Math.round((admittedCount / totalLeads) * 100) : 0;

  const maxFunnelCount = Math.max(...funnel.map((f) => f.count), 1);
  const maxSourceCount = Math.max(...sourceData.map((s) => s.value), 1);
  const maxCategoryCount = Math.max(...categoryData.map((c) => c.value), 1);
  const maxDailyCount = Math.max(...dailyData.map((d) => d.value), 1);

  return (
    <div className="space-y-6">
      {/* Top-level KPI Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Total Leads", value: totalLeads, color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
          { label: "Conversion Rate", value: `${conversionRate}%`, color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
          { label: "High Intent", value: mockLeads.filter((l) => l.priority === "HIGH" || l.priority === "URGENT").length, color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" },
          { label: "Admitted", value: admittedCount, color: "text-purple-400", bg: "bg-purple-500/10 border-purple-500/20" },
        ].map((kpi) => (
          <div key={kpi.label} className={`rounded-xl border p-4 ${kpi.bg}`}>
            <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">{kpi.label}</p>
            <p className={`text-3xl font-extrabold mt-1 ${kpi.color}`}>{kpi.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Conversion Funnel */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
          <div>
            <h3 className="text-sm font-bold text-white">Lead Conversion Funnel</h3>
            <p className="text-xs text-slate-500">Pipeline stage distribution</p>
          </div>
          <div className="space-y-3">
            {funnel.map((stage) => (
              <div key={stage.status} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">{stage.label}</span>
                  <span className="font-bold text-slate-200">{stage.count}</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${stage.color}`}
                    style={{ width: `${(stage.count / maxFunnelCount) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Enquiries */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
          <div>
            <h3 className="text-sm font-bold text-white">Daily Enquiries</h3>
            <p className="text-xs text-slate-500">Last 7 days activity</p>
          </div>
          <MiniVerticalBar data={dailyData} maxValue={maxDailyCount} />
        </div>

        {/* Source Breakdown */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
          <div>
            <h3 className="text-sm font-bold text-white">Lead Sources</h3>
            <p className="text-xs text-slate-500">Where enquiries are coming from</p>
          </div>
          <BarChart
            data={sourceData}
            maxValue={maxSourceCount}
            colorClass="bg-indigo-500"
          />
        </div>

        {/* Category Breakdown */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
          <div>
            <h3 className="text-sm font-bold text-white">Top Categories</h3>
            <p className="text-xs text-slate-500">Most enquired education streams</p>
          </div>
          <BarChart
            data={categoryData}
            maxValue={maxCategoryCount}
            colorClass="bg-purple-500"
          />
        </div>
      </div>

      {/* Priority Breakdown */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
        <h3 className="text-sm font-bold text-white mb-4">Lead Priority Distribution</h3>
        <div className="flex flex-wrap gap-4">
          {(["URGENT", "HIGH", "MEDIUM", "LOW"] as const).map((priority) => {
            const count = mockLeads.filter((l) => l.priority === priority).length;
            const pct = totalLeads > 0 ? Math.round((count / totalLeads) * 100) : 0;
            const colors: Record<string, string> = {
              URGENT: "bg-red-500/20 border-red-500/40 text-red-300",
              HIGH: "bg-orange-500/20 border-orange-500/40 text-orange-300",
              MEDIUM: "bg-amber-500/20 border-amber-500/40 text-amber-300",
              LOW: "bg-slate-700 border-slate-600 text-slate-400",
            };
            return (
              <div key={priority} className={`flex-1 min-w-[100px] rounded-xl border p-4 text-center ${colors[priority]}`}>
                <p className="text-2xl font-extrabold">{count}</p>
                <p className="text-[11px] font-semibold mt-1 opacity-80">{priority}</p>
                <p className="text-[10px] opacity-60">{pct}%</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
