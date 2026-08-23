import { DetailedLead } from "@/lib/mockData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, Eye, Flame } from "lucide-react";

interface LeadTableProps {
  leads: DetailedLead[];
  onSelectLead: (lead: DetailedLead) => void;
}

export function LeadTable({ leads, onSelectLead }: LeadTableProps) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 dark:bg-slate-950 text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-200 dark:border-slate-800">
            <tr>
              <th className="px-4 py-3">Ref ID</th>
              <th className="px-4 py-3">Student Name</th>
              <th className="px-4 py-3">Contact</th>
              <th className="px-4 py-3">Category / College</th>
              <th className="px-4 py-3">Intent Score</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
            {leads.map((lead) => (
              <tr
                key={lead.id}
                className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <td className="px-4 py-3 font-mono font-bold text-slate-900 dark:text-white">
                  {lead.lead_reference}
                </td>
                <td className="px-4 py-3 font-bold text-slate-900 dark:text-white">
                  {lead.student_name}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center space-x-1">
                    <Phone className="h-3 w-3 text-slate-400" />
                    <span>{lead.student_phone}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="font-semibold text-slate-800 dark:text-slate-200">
                    {lead.category_name || "General Guidance"}
                  </div>
                  {lead.interested_college_name && (
                    <div className="text-[11px] text-blue-600 dark:text-blue-400">
                      {lead.interested_college_name}
                    </div>
                  )}
                </td>
                <td className="px-4 py-3">
                  <Badge
                    variant={lead.score >= 85 ? "warning" : "secondary"}
                    className="font-bold gap-1"
                  >
                    {lead.score >= 85 && <Flame className="h-3 w-3 text-amber-500" />}
                    <span>{lead.score} / 100</span>
                  </Badge>
                </td>
                <td className="px-4 py-3">
                  <Badge variant="outline" className="font-bold text-[10px]">
                    {lead.status}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-right">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 gap-1 text-blue-600 hover:text-blue-700"
                    onClick={() => onSelectLead(lead)}
                  >
                    <Eye className="h-3.5 w-3.5" />
                    <span>Manage</span>
                  </Button>
                </td>
              </tr>
            ))}

            {leads.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-slate-400">
                  No lead records found matching criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
