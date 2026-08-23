import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, LayoutDashboard, ExternalLink } from "lucide-react";

interface AdminHeaderProps {
  currentRole: "admin" | "counsellor";
  onRoleSwitch: (role: "admin" | "counsellor") => void;
}

export function AdminHeader({ currentRole, onRoleSwitch }: AdminHeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950 text-white shadow-md">
      <Container size="lg">
        <div className="flex h-16 items-center justify-between">
          {/* Brand & Portal Badge */}
          <div className="flex items-center space-x-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
              <Shield className="h-5 w-5" />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-base font-bold tracking-tight text-white">
                College Guide CRM
              </span>
              <Badge variant="outline" className="border-blue-500/40 text-blue-400 text-[10px]">
                {currentRole === "admin" ? "Super Admin Portal" : "Counsellor Portal"}
              </Badge>
            </div>
          </div>

          {/* Quick Actions & Role Switcher */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 bg-slate-900 border border-slate-800 p-1 rounded-lg text-xs">
              <button
                onClick={() => onRoleSwitch("admin")}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  currentRole === "admin"
                    ? "bg-blue-600 text-white font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <LayoutDashboard className="h-3.5 w-3.5 inline mr-1" />
                Admin
              </button>
              <button
                onClick={() => onRoleSwitch("counsellor")}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  currentRole === "counsellor"
                    ? "bg-blue-600 text-white font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Users className="h-3.5 w-3.5 inline mr-1" />
                Counsellor
              </button>
            </div>

            <Link href="/" target="_blank">
              <Button variant="outline" size="sm" className="text-xs border-slate-700 text-slate-300 gap-1.5">
                <span>Student Site</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
