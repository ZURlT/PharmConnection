import { useState } from 'react';
import {
  LayoutDashboard,
  CalendarDays,
  GitBranch,
  Users,
  Calculator,
  BookOpen,
  Pill,
  Megaphone,
  Menu,
  X,
  Wallet,
} from 'lucide-react';

export type PageKey =
  | 'dashboard'
  | 'calendar'
  | 'curriculum'
  | 'faculty'
  | 'dosage'
  | 'materials'
  | 'drugs'
  | 'announcements'
  | 'credit';

interface NavItem {
  key: PageKey;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { key: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { key: 'calendar', label: 'Academic Calendar', icon: CalendarDays },
  { key: 'curriculum', label: 'Curriculum Flowchart', icon: GitBranch },
  { key: 'faculty', label: 'Faculty Directory', icon: Users },
  { key: 'dosage', label: 'Dosage Converter', icon: Calculator },
  { key: 'credit', label: 'Credit Calculator', icon: Wallet },
  { key: 'materials', label: 'Study Materials', icon: BookOpen },
  { key: 'drugs', label: 'Drug Cheat Sheet', icon: Pill },
  { key: 'announcements', label: 'Announcements', icon: Megaphone },
];

interface LayoutProps {
  current: PageKey;
  onNavigate: (page: PageKey) => void;
  children: React.ReactNode;
}

export default function Layout({ current, onNavigate, children }: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (page: PageKey) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-slate-100">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed inset-y-0 left-0 w-64 flex-col bg-[#0c1322] border-r border-[#1e2a45] z-40">
        <div className="flex items-center gap-3 px-5 h-16 border-b border-[#1e2a45]">
          <img src="/pic copy.svg" alt="PharmConnect" className="w-9 h-9 shrink-0" />
          <div>
            <h1 className="text-lg font-bold tracking-tight text-white">PharmConnect</h1>
            <p className="text-[11px] text-teal-400 font-medium">Student Portal</p>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = current === item.key;
            return (
              <button
                key={item.key}
                onClick={() => handleNav(item.key)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  active
                    ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/20'
                    : 'text-slate-400 hover:bg-[#1a2540] hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5 shrink-0" />
                {item.label}
              </button>
            );
          })}
        </nav>
        <div className="px-5 py-4 border-t border-[#1e2a45] text-xs">
          <p className="font-semibold text-white">Fall Semester 2026</p>
          <p className="text-slate-500">PharmD Program</p>
        </div>
      </aside>

      {/* Mobile Header */}
      <header
        className="lg:hidden sticky top-0 z-40 bg-[#0c1322] border-b border-[#1e2a45] px-4 flex items-center justify-between"
        style={{ paddingTop: 'var(--safe-top)', height: 'calc(3.5rem + var(--safe-top))' }}
      >
        <div className="flex items-center gap-2.5">
          <img src="/pic copy.svg" alt="PharmConnect" className="w-7 h-7" />
          <span className="font-bold text-base text-white">PharmConnect</span>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-lg hover:bg-[#1a2540] transition-colors text-slate-300"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-30 bg-black/60"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="absolute top-0 left-0 right-0 bg-[#0c1322] px-3 py-4 space-y-1 max-h-[calc(100vh-var(--safe-top))] overflow-y-auto"
            style={{ marginTop: 'calc(3.5rem + var(--safe-top))' }}
            onClick={(e) => e.stopPropagation()}
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = current === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => handleNav(item.key)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? 'bg-teal-500 text-white'
                      : 'text-slate-400 hover:bg-[#1a2540]'
                  }`}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="lg:ml-64 pb-24 lg:pb-8" style={{ paddingBottom: 'calc(6rem + var(--safe-bottom))' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          {children}
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0c1322] border-t border-[#1e2a45] flex items-stretch justify-around shadow-2xl"
        style={{ paddingBottom: 'var(--safe-bottom)', height: 'calc(4rem + var(--safe-bottom))' }}
      >
        {navItems.slice(0, 5).map((item) => {
          const Icon = item.icon;
          const active = current === item.key;
          return (
            <button
              key={item.key}
              onClick={() => handleNav(item.key)}
              className={`flex flex-col items-center justify-center gap-0.5 px-1.5 rounded-lg transition-colors min-w-0 flex-1 ${
                active ? 'text-teal-400' : 'text-slate-500'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium truncate w-full text-center">
                {item.label.split(' ')[0]}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
