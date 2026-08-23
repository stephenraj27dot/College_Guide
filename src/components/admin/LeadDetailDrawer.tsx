"use client";

import { useState, useEffect } from "react";
import { DetailedLead, LeadNoteRecord, CounsellorUser } from "@/lib/mockData";
import { LeadStatus } from "@/types";
import {
  getLeadById,
  updateLeadStatus,
  assignLeadCounsellor,
  addLeadNote,
  getCounsellors,
} from "@/services/leads";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  X,
  Phone,
  Mail,
  UserCheck,
  Flame,
  Clock,
  ShieldCheck,
  Send,
} from "lucide-react";

interface LeadDetailDrawerProps {
  leadId: string | null;
  onClose: () => void;
  onLeadUpdated: () => void;
}

export function LeadDetailDrawer({
  leadId,
  onClose,
  onLeadUpdated,
}: LeadDetailDrawerProps) {
  const [lead, setLead] = useState<DetailedLead | null>(null);
  const [notes, setNotes] = useState<LeadNoteRecord[]>([]);
  const [counsellors, setCounsellors] = useState<CounsellorUser[]>([]);
  const [newNoteText, setNewNoteText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    if (leadId) {
      getLeadById(leadId).then((res) => {
        if (res) {
          setLead(res.lead);
          setNotes(res.notes);
        }
      });

      getCounsellors().then(setCounsellors);
    }
  }, [leadId]);

  if (!leadId || !lead) return null;

  const handleStatusChange = async (newStatus: LeadStatus) => {
    setIsUpdating(true);
    await updateLeadStatus(lead.id, newStatus, "Counsellor");
    const updated = await getLeadById(lead.id);
    if (updated) {
      setLead(updated.lead);
      setNotes(updated.notes);
    }
    setIsUpdating(false);
    onLeadUpdated();
  };

  const handleCounsellorChange = async (counsellorId: string) => {
    setIsUpdating(true);
    await assignLeadCounsellor(lead.id, counsellorId, "Admin");
    const updated = await getLeadById(lead.id);
    if (updated) {
      setLead(updated.lead);
      setNotes(updated.notes);
    }
    setIsUpdating(false);
    onLeadUpdated();
  };

  const handleAddNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteText.trim()) return;

    setIsUpdating(true);
    await addLeadNote(lead.id, newNoteText.trim(), "Counsellor");
    setNewNoteText("");
    const updated = await getLeadById(lead.id);
    if (updated) {
      setLead(updated.lead);
      setNotes(updated.notes);
    }
    setIsUpdating(false);
    onLeadUpdated();
  };

  const statusOptions: { id: LeadStatus; label: string }[] = [
    { id: "NEW", label: "New Enquiry" },
    { id: "CONTACTED", label: "Contacted" },
    { id: "COUNSELLING", label: "Counselling" },
    { id: "COLLEGE_SHORTLISTED", label: "College Shortlisted" },
    { id: "APPLICATION", label: "Application Submitted" },
    { id: "ADMISSION_IN_PROGRESS", label: "Admission in Progress" },
    { id: "ADMITTED", label: "Admitted" },
    { id: "NOT_INTERESTED", label: "Not Interested" },
    { id: "CLOSED", label: "Closed" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white dark:bg-slate-900 h-full shadow-2xl border-l border-slate-200 dark:border-slate-800 flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950">
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">
                {lead.lead_reference}
              </span>
              <Badge
                variant={lead.score >= 85 ? "warning" : "secondary"}
                className="font-bold gap-1 text-[10px]"
              >
                {lead.score >= 85 && <Flame className="h-3 w-3 text-amber-500" />}
                <span>Intent Score: {lead.score}/100</span>
              </Badge>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">
              {lead.student_name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Quick Actions Bar */}
          <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
            {/* Status Selector */}
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                Pipeline Status
              </label>
              <select
                value={lead.status}
                disabled={isUpdating}
                onChange={(e) => handleStatusChange(e.target.value as LeadStatus)}
                className="w-full h-9 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-2.5 text-xs font-semibold text-slate-900 dark:text-slate-100"
              >
                {statusOptions.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Counsellor Selector */}
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                Assigned Counsellor
              </label>
              <select
                value={lead.assigned_counsellor_id || ""}
                disabled={isUpdating}
                onChange={(e) => handleCounsellorChange(e.target.value)}
                className="w-full h-9 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-2.5 text-xs font-semibold text-slate-900 dark:text-slate-100"
              >
                <option value="">Unassigned</option>
                {counsellors.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Student Profile Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Student Contact & Details
            </h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 space-y-1">
                <span className="text-slate-400">Mobile Phone:</span>
                <div className="font-bold text-slate-900 dark:text-white flex items-center space-x-1.5">
                  <Phone className="h-3.5 w-3.5 text-emerald-500" />
                  <a href={`tel:${lead.student_phone}`} className="hover:underline">
                    {lead.student_phone}
                  </a>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 space-y-1">
                <span className="text-slate-400">Email Address:</span>
                <div className="font-bold text-slate-900 dark:text-white flex items-center space-x-1.5 truncate">
                  <Mail className="h-3.5 w-3.5 text-blue-500" />
                  <span>{lead.student_email || "Not Provided"}</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 space-y-1">
                <span className="text-slate-400">Preferred Callback:</span>
                <div className="font-semibold text-slate-900 dark:text-white flex items-center space-x-1">
                  <Clock className="h-3.5 w-3.5 text-amber-500" />
                  <span>{lead.preferred_callback_time || "Anytime"}</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 space-y-1">
                <span className="text-slate-400">Enquiry Source:</span>
                <div className="font-semibold text-slate-900 dark:text-white flex items-center space-x-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-indigo-500" />
                  <span>{lead.source}</span>
                </div>
              </div>
            </div>

            {lead.student_message && (
              <div className="p-3 rounded-lg bg-blue-50/50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 text-xs space-y-1">
                <span className="font-bold text-blue-900 dark:text-blue-300">
                  Student Note / Enquiry Message:
                </span>
                <p className="text-slate-700 dark:text-slate-300 italic">
                  &quot;{lead.student_message}&quot;
                </p>
              </div>
            )}
          </div>

          {/* Follow-up Notes History */}
          <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
              <span>Counsellor Follow-up Notes</span>
              <Badge variant="outline" className="text-[10px]">
                {notes.length} Notes
              </Badge>
            </h4>

            {/* Add Note Form */}
            <form onSubmit={handleAddNote} className="flex gap-2">
              <Input
                type="text"
                placeholder="Add follow-up call note or student update..."
                value={newNoteText}
                onChange={(e) => setNewNoteText(e.target.value)}
                className="h-10 text-xs flex-1"
              />
              <Button
                type="submit"
                variant="primary"
                size="sm"
                className="h-10 px-4 gap-1.5 bg-blue-600 hover:bg-blue-700"
                disabled={isUpdating || !newNoteText.trim()}
              >
                <Send className="h-3.5 w-3.5" />
                <span>Save</span>
              </Button>
            </form>

            {/* Notes Timeline */}
            <div className="space-y-3 pt-2">
              {notes.map((note) => (
                <div
                  key={note.id}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs space-y-1"
                >
                  <div className="flex items-center justify-between text-slate-400 text-[10px]">
                    <span className="font-bold text-slate-700 dark:text-slate-300 flex items-center">
                      <UserCheck className="h-3 w-3 mr-1 text-blue-500" />
                      {note.author_name}
                    </span>
                    <span>{new Date(note.created_at).toLocaleString()}</span>
                  </div>
                  <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                    {note.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
