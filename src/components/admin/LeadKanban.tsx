import { DetailedLead } from "@/lib/mockData";
import { LeadStatus } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Flame, Clock } from "lucide-react";

interface LeadKanbanProps {
  leads: DetailedLead[];
  onSelectLead: (lead: DetailedLead) => void;
}

const pipelineColumns: { id: LeadStatus; label: string; color: string }[] = [
  { id: "NEW", label: "New Enquiries", color: "border-blue-500 bg-blue-500/10 text-blue-700 dark:text-blue-300" },
  { id: "CONTACTED", label: "Contacted", color: "border-indigo-500 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300" },
  { id: "COUNSELLING", label: "Counselling In Progress", color: "border-purple-500 bg-purple-500/10 text-purple-700 dark:text-purple-300" },
  { id: "COLLEGE_SHORTLISTED", label: "College Shortlisted", color: "border-amber-500 bg-amber-500/10 text-amber-700 dark:text-amber-300" },
  { id: "ADMITTED", label: "Admitted", color: "border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300" },
];

export function LeadKanban({ leads, onSelectLead }: LeadKanbanProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto pb-4">
      {pipelineColumns.map((col) => {
        const columnLeads = leads.filter((l) => l.status === col.id);

        return (
          <div
            key={col.id}
            className="flex flex-col rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 min-h-[500px]"
          >
            {/* Column Header */}
            <div className={`flex items-center justify-between p-2 rounded-lg border-l-4 mb-3 ${col.color}`}>
              <h4 className="text-xs font-bold uppercase tracking-wider">{col.label}</h4>
              <Badge variant="secondary" className="bg-slate-900/10 dark:bg-white/10 text-xs">
                {columnLeads.length}
              </Badge>
            </div>

            {/* Column Cards List */}
            <div className="flex-1 space-y-3 overflow-y-auto pr-1">
              {columnLeads.map((lead) => (
                <Card
                  key={lead.id}
                  onClick={() => onSelectLead(lead)}
                  className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 hover:border-blue-500/50 hover:shadow-md transition-all cursor-pointer group"
                >
                  <CardContent className="p-3.5 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-400">
                        {lead.lead_reference}
                      </span>
                      <div className="flex items-center space-x-1">
                        {lead.score >= 85 && (
                          <Badge variant="warning" className="bg-amber-100 text-amber-800 text-[9px] px-1.5 py-0">
                            <Flame className="h-2.5 w-2.5 mr-0.5" />
                            {lead.score}
                          </Badge>
                        )}
                        <Badge variant="outline" className="text-[9px] px-1.5 py-0">
                          {lead.source}
                        </Badge>
                      </div>
                    </div>

                    <div>
                      <h5 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                        {lead.student_name}
                      </h5>
                      <div className="flex items-center space-x-1 text-xs text-slate-500 mt-0.5">
                        <Phone className="h-3 w-3 text-slate-400" />
                        <span>{lead.student_phone}</span>
                      </div>
                    </div>

                    {lead.interested_college_name && (
                      <div className="text-[11px] font-medium text-blue-600 dark:text-blue-400 line-clamp-1">
                        Target: {lead.interested_college_name}
                      </div>
                    )}

                    <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 pt-2 text-[10px] text-slate-400">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{lead.preferred_callback_time || "Anytime"}</span>
                      </div>
                      <span>{lead.notes_count} Notes</span>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {columnLeads.length === 0 && (
                <div className="py-8 text-center text-xs text-slate-400 border border-dashed border-slate-300 dark:border-slate-800 rounded-lg">
                  No leads in {col.label}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
