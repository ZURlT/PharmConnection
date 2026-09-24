import { useState } from 'react';
import { CalendarDays, FileText, PartyPopper, GraduationCap, AlertCircle, ClipboardCheck } from 'lucide-react';
import { calendarEvents, type CalendarEvent } from '@/data/mockData';

const categoryConfig: Record<
  CalendarEvent['category'],
  { icon: React.ComponentType<{ className?: string }>; color: string; bg: string; border: string; label: string }
> = {
  exam: { icon: GraduationCap, color: 'text-red-400', bg: 'bg-red-500/15', border: 'border-red-500', label: 'Exam' },
  holiday: { icon: PartyPopper, color: 'text-teal-400', bg: 'bg-teal-500/15', border: 'border-teal-500', label: 'Holiday' },
  deadline: { icon: AlertCircle, color: 'text-amber-400', bg: 'bg-amber-500/15', border: 'border-amber-500', label: 'Deadline' },
  event: { icon: FileText, color: 'text-primary-300', bg: 'bg-primary-500/15', border: 'border-primary-500', label: 'Event' },
  registration: { icon: ClipboardCheck, color: 'text-teal-300', bg: 'bg-teal-500/15', border: 'border-teal-500', label: 'Registration' },
};

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function AcademicCalendar() {
  const [selectedCategory, setSelectedCategory] = useState<CalendarEvent['category'] | 'all'>('all');

  const sorted = [...calendarEvents].sort((a, b) => a.date.localeCompare(b.date));
  const filtered = selectedCategory === 'all' ? sorted : sorted.filter((e) => e.category === selectedCategory);

  const grouped = filtered.reduce<Record<string, CalendarEvent[]>>((acc, ev) => {
    const d = new Date(ev.date);
    const key = `${d.getFullYear()}-${d.getMonth()}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(ev);
    return acc;
  }, {});

  const monthKeys = Object.keys(grouped).sort();
  const categories: (CalendarEvent['category'] | 'all')[] = ['all', 'exam', 'holiday', 'deadline', 'event', 'registration'];

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-teal-500/15 flex items-center justify-center">
          <CalendarDays className="w-5 h-5 text-teal-400" />
        </div>
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-white">Academic Calendar</h1>
          <p className="text-slate-400 text-sm">Exam dates, holidays, and deadlines at a glance</p>
        </div>
      </div>

      {/* Filter Pills */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize transition-all ${
              selectedCategory === cat
                ? 'bg-primary-500 text-white shadow-sm'
                : 'bg-[#141d30] text-slate-400 border border-[#1e2a45] hover:border-primary-500/50'
            }`}
          >
            {cat === 'all' ? 'All Events' : categoryConfig[cat].label + 's'}
          </button>
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 text-xs text-slate-400">
        {Object.entries(categoryConfig).map(([key, cfg]) => {
          const Icon = cfg.icon;
          return (
            <div key={key} className="flex items-center gap-1.5">
              <Icon className={`w-4 h-4 ${cfg.color}`} />
              <span>{cfg.label}</span>
            </div>
          );
        })}
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-4 lg:left-5 top-0 bottom-0 w-0.5 bg-[#1e2a45]" />

        <div className="space-y-8">
          {monthKeys.map((key) => {
            const [yearStr, monthStr] = key.split('-');
            const year = parseInt(yearStr);
            const month = parseInt(monthStr);
            const events = grouped[key];
            return (
              <div key={key} className="relative">
                <div className="flex items-center gap-3 mb-4 ml-12 lg:ml-16">
                  <div className="w-3 h-3 rounded-full bg-primary-500 ring-4 ring-primary-500/20 absolute left-2.5 lg:left-3.5" />
                  <h2 className="text-lg font-bold text-slate-200">
                    {monthNames[month]} {year}
                  </h2>
                </div>

                <div className="space-y-3 ml-12 lg:ml-16">
                  {events.map((ev) => {
                    const cfg = categoryConfig[ev.category];
                    const Icon = cfg.icon;
                    const d = new Date(ev.date);
                    return (
                      <div
                        key={ev.id}
                        className={`relative bg-[#141d30] rounded-xl border-l-4 ${cfg.border} border-y border-r border-[#1e2a45] p-4 hover:shadow-md transition-all`}
                      >
                        <div className={`absolute -left-[2.1rem] lg:-left-[2.6rem] top-4 w-3 h-3 rounded-full ${cfg.bg} border-2 ${cfg.border}`} />
                        <div className="flex items-start gap-3">
                          <div className={`shrink-0 w-12 h-12 rounded-lg ${cfg.bg} flex flex-col items-center justify-center`}>
                            <span className="text-xs font-bold text-slate-400">{monthShort[d.getMonth()]}</span>
                            <span className="text-lg font-bold text-white leading-none">{d.getDate()}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <Icon className={`w-4 h-4 ${cfg.color}`} />
                              <span className={`text-xs font-bold uppercase tracking-wide ${cfg.color}`}>
                                {cfg.label}
                              </span>
                            </div>
                            <h3 className="font-semibold text-white text-sm lg:text-base">
                              {ev.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-slate-500">
          <CalendarDays className="w-12 h-12 mx-auto mb-3 opacity-40" />
          <p>No events match this filter.</p>
        </div>
      )}
    </div>
  );
}
