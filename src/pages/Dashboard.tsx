import {
  Megaphone,
  CalendarDays,
  GitBranch,
  Users,
  Calculator,
  BookOpen,
  Pill,
  Clock,
  MapPin,
  AlertTriangle,
  ChevronRight,
  Wallet,
} from 'lucide-react';
import { announcements, schedule, type ScheduleItem } from '@/data/mockData';
import type { PageKey } from '@/components/Layout';

interface DashboardProps {
  onNavigate: (page: PageKey) => void;
}

const quickLinks: { key: PageKey; label: string; desc: string; icon: React.ComponentType<{ className?: string }>; color: string }[] = [
  { key: 'calendar', label: 'Timetable', desc: 'View academic calendar', icon: CalendarDays, color: 'bg-teal-500' },
  { key: 'curriculum', label: 'Syllabus', desc: 'Degree flowchart & courses', icon: GitBranch, color: 'bg-primary-500' },
  { key: 'faculty', label: 'Faculty', desc: 'Staff directory', icon: Users, color: 'bg-primary-600' },
  { key: 'credit', label: 'Tuition', desc: 'Credit cost calculator', icon: Calculator, color: 'bg-teal-600' },
];

const typeStyles: Record<ScheduleItem['type'], { bg: string; text: string; label: string }> = {
  class: { bg: 'bg-teal-500/15', text: 'text-teal-300', label: 'Class' },
  lab: { bg: 'bg-primary-500/15', text: 'text-primary-300', label: 'Lab' },
  exam: { bg: 'bg-red-500/15', text: 'text-red-300', label: 'Exam' },
  deadline: { bg: 'bg-amber-500/15', text: 'text-amber-300', label: 'Deadline' },
};

export default function Dashboard({ onNavigate }: DashboardProps) {
  const urgent = announcements.filter((a) => a.urgent);
  const upcoming = schedule.slice(0, 5);

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-white">
          Welcome back, Student
        </h1>
        <p className="text-slate-400 mt-1">
          Here's what's happening in your pharmacy program today.
        </p>
      </div>

      {/* Urgent Banner */}
      {urgent.length > 0 && (
        <div className="space-y-3">
          {urgent.map((a) => (
            <div
              key={a.id}
              className="bg-gradient-to-r from-red-500/10 to-amber-500/10 border-l-4 border-red-500 rounded-xl p-4 flex items-start gap-3 animate-pulse-glow"
            >
              <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-red-400 uppercase tracking-wide">
                    Urgent
                  </span>
                  <span className="text-xs text-slate-500">{a.date}</span>
                </div>
                <h3 className="font-semibold text-white text-sm lg:text-base">
                  {a.title}
                </h3>
                <p className="text-sm text-slate-400 mt-1 line-clamp-2">{a.body}</p>
              </div>
              <button
                onClick={() => onNavigate('announcements')}
                className="shrink-0 text-red-400 hover:text-red-300 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Quick Links */}
      <div>
        <h2 className="text-lg font-semibold text-slate-200 mb-3">Quick Links</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <button
                key={link.key}
                onClick={() => onNavigate(link.key)}
                className="group bg-[#141d30] rounded-xl p-4 lg:p-5 border border-[#1e2a45] hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-500/10 transition-all text-left"
              >
                <div
                  className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl ${link.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white text-sm lg:text-base">
                  {link.label}
                </h3>
                <p className="text-xs lg:text-sm text-slate-400 mt-0.5">
                  {link.desc}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Next Up + Quick Tools */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Next Up */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-slate-200">Next Up on Schedule</h2>
            <button
              onClick={() => onNavigate('calendar')}
              className="text-sm text-teal-400 hover:text-teal-300 font-medium flex items-center gap-1"
            >
              View all <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="bg-[#141d30] rounded-xl border border-[#1e2a45] divide-y divide-[#1e2a45] overflow-hidden">
            {upcoming.map((item) => {
              const style = typeStyles[item.type];
              return (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-4 hover:bg-[#1a2540] transition-colors"
                >
                  <div
                    className={`shrink-0 px-2.5 py-1 rounded-lg text-xs font-bold ${style.bg} ${style.text}`}
                  >
                    {style.label}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-white text-sm truncate">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 mt-1 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {item.day} · {item.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {item.location}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Tools */}
        <div>
          <h2 className="text-lg font-semibold text-slate-200 mb-3">Quick Tools</h2>
          <div className="space-y-3">
            <button
              onClick={() => onNavigate('dosage')}
              className="w-full bg-[#141d30] rounded-xl border border-[#1e2a45] p-4 hover:border-teal-500/50 hover:shadow-md transition-all text-left flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-teal-500/15 flex items-center justify-center">
                <Calculator className="w-5 h-5 text-teal-400" />
              </div>
              <div>
                <h3 className="font-medium text-white text-sm">Dosage Converter</h3>
                <p className="text-xs text-slate-400">mg/kg, mg/mL, drops/min</p>
              </div>
            </button>
            <button
              onClick={() => onNavigate('credit')}
              className="w-full bg-[#141d30] rounded-xl border border-[#1e2a45] p-4 hover:border-teal-500/50 hover:shadow-md transition-all text-left flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-amber-500/15 flex items-center justify-center">
                <Wallet className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="font-medium text-white text-sm">Credit Calculator</h3>
                <p className="text-xs text-slate-400">Tuition at 230,422 IQD/credit</p>
              </div>
            </button>
            <button
              onClick={() => onNavigate('materials')}
              className="w-full bg-[#141d30] rounded-xl border border-[#1e2a45] p-4 hover:border-teal-500/50 hover:shadow-md transition-all text-left flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-500/15 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-300" />
              </div>
              <div>
                <h3 className="font-medium text-white text-sm">Study Materials</h3>
                <p className="text-xs text-slate-400">Lectures, labs, PDFs</p>
              </div>
            </button>
            <button
              onClick={() => onNavigate('drugs')}
              className="w-full bg-[#141d30] rounded-xl border border-[#1e2a45] p-4 hover:border-teal-500/50 hover:shadow-md transition-all text-left flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-teal-500/15 flex items-center justify-center">
                <Pill className="w-5 h-5 text-teal-400" />
              </div>
              <div>
                <h3 className="font-medium text-white text-sm">Drug Cheat Sheet</h3>
                <p className="text-xs text-slate-400">Quick drug class reference</p>
              </div>
            </button>
            <button
              onClick={() => onNavigate('announcements')}
              className="w-full bg-[#141d30] rounded-xl border border-[#1e2a45] p-4 hover:border-teal-500/50 hover:shadow-md transition-all text-left flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-500/15 flex items-center justify-center">
                <Megaphone className="w-5 h-5 text-primary-300" />
              </div>
              <div>
                <h3 className="font-medium text-white text-sm">Announcements</h3>
                <p className="text-xs text-slate-400">{announcements.length} updates</p>
              </div>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
