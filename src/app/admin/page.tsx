"use client";

import { useState, useEffect, useCallback } from "react";
import { DetailedLead } from "@/lib/mockData";
import { LeadStatus, LeadPriority } from "@/types";
import { getLeads, getLeadAnalytics } from "@/services/leads";
import { Container } from "@/components/layout/Container";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { LeadMetrics } from "@/components/admin/LeadMetrics";
import { LeadKanban } from "@/components/admin/LeadKanban";
import { LeadTable } from "@/components/admin/LeadTable";
import { LeadDetailDrawer } from "@/components/admin/LeadDetailDrawer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, LayoutGrid, List, RefreshCw } from "lucide-react";

export default function AdminDashboardPage() {
  const [role, setRole] = useState<"admin" | "counsellor">("admin");
  const [viewMode, setViewMode] = useState<"kanban" | "table">("kanban");

  const [leads, setLeads] = useState<DetailedLead[]>([]);
  const [metrics, setMetrics] = useState({
    totalLeads: 0,
    newLeads: 0,
    highIntentLeads: 0,
    admittedLeads: 0,
    conversionRate: "0%",
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<LeadStatus | "">("");
  const [priorityFilter, setPriorityFilter] = useState<LeadPriority | "">("");

  const [selectedLeadId, setSelectedLeadId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchDashboardData = useCallback(() => {
    Promise.all([
      getLeads({
        searchQuery,
        status: statusFilter,
        priority: priorityFilter,
      }),
      getLeadAnalytics(),
    ]).then(([leadsData, metricsData]) => {
      setLeads(leadsData);
      setMetrics(metricsData);
      setLoading(false);
    });
  }, [searchQuery, statusFilter, priorityFilter]);

  useEffect(() => {
    let isMounted = true;
    Promise.all([
      getLeads({
        searchQuery,
        status: statusFilter,
        priority: priorityFilter,
      }),
      getLeadAnalytics(),
    ]).then(([leadsData, metricsData]) => {
      if (isMounted) {
        setLeads(leadsData);
        setMetrics(metricsData);
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [searchQuery, statusFilter, priorityFilter]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Top Header & Role Selector */}
      <AdminHeader currentRole={role} onRoleSwitch={setRole} />

      {/* Main Admin Content */}
      <main className="flex-1 py-8">
        <Container size="lg" className="space-y-8">
          {/* Dashboard Title Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <Badge variant="success" className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                  Lead Management CRM
                </Badge>
                <span className="text-xs text-slate-400">Phase 2 Pipeline Active</span>
              </div>
              <h1 className="text-3xl font-extrabold text-white tracking-tight mt-1">
                Student Enquiry & Admission Pipeline
              </h1>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setLoading(true);
                  fetchDashboardData();
                }}
                className="border-slate-800 text-slate-300 hover:bg-slate-900 gap-1.5 h-9"
              >
                <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
                <span>Refresh</span>
              </Button>
            </div>
          </div>

          {/* KPI Analytics Metric Cards */}
          <LeadMetrics metrics={metrics} />

          {/* Controls: Search, Filters & View Toggle */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-4 rounded-xl">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Search lead ref, student name, or phone..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 bg-slate-950 border-slate-800 text-xs h-9"
              />
            </div>

            {/* Filter Selects */}
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as LeadStatus | "")}
                className="h-9 rounded-lg border border-slate-800 bg-slate-950 px-3 text-xs text-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="">All Statuses</option>
                <option value="NEW">New</option>
                <option value="CONTACTED">Contacted</option>
                <option value="COUNSELLING">Counselling</option>
                <option value="COLLEGE_SHORTLISTED">Shortlisted</option>
                <option value="ADMITTED">Admitted</option>
              </select>

              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value as LeadPriority | "")}
                className="h-9 rounded-lg border border-slate-800 bg-slate-950 px-3 text-xs text-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="">All Priorities</option>
                <option value="HIGH">High Intent</option>
                <option value="MEDIUM">Medium Intent</option>
                <option value="LOW">Low Intent</option>
              </select>

              {/* View Toggle */}
              <div className="flex items-center bg-slate-950 p-1 rounded-lg border border-slate-800">
                <button
                  onClick={() => setViewMode("kanban")}
                  className={`p-1.5 rounded transition-colors ${
                    viewMode === "kanban"
                      ? "bg-blue-600 text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                  title="Kanban Board View"
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("table")}
                  className={`p-1.5 rounded transition-colors ${
                    viewMode === "table"
                      ? "bg-blue-600 text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                  title="Table View"
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Main Pipeline Display */}
          {viewMode === "kanban" ? (
            <LeadKanban
              leads={leads}
              onSelectLead={(lead) => setSelectedLeadId(lead.id)}
            />
          ) : (
            <LeadTable
              leads={leads}
              onSelectLead={(lead) => setSelectedLeadId(lead.id)}
            />
          )}
        </Container>
      </main>

      {/* Lead Detail & Actions Drawer */}
      <LeadDetailDrawer
        leadId={selectedLeadId}
        onClose={() => setSelectedLeadId(null)}
        onLeadUpdated={fetchDashboardData}
      />
    </div>
  );
}
