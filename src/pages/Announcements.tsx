import { useState } from 'react';
import { Megaphone, Search, AlertTriangle, Pin } from 'lucide-react';
import { announcements, type Announcement } from '@/data/mockData';

const tags: (Announcement['tag'] | 'All')[] = [
  'All',
  'Registration',
  'Payment',
  'Events',
  'General',
  'Website',
];

const tagColors: Record<Announcement['tag'], string> = {
  Registration: 'bg-teal-500/15 text-teal-300 border-teal-500/40',
  Payment: 'bg-amber-500/15 text-amber-300 border-amber-500/40',
  Events: 'bg-primary-500/15 text-primary-300 border-primary-500/40',
  General: 'bg-slate-500/15 text-slate-300 border-slate-500/40',
  Website: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/40',
};

export default function Announcements() {
  const [search, setSearch] = useState('');
  const [tag, setTag] = useState<Announcement['tag'] | 'All'>('All');

  const filtered = announcements
    .filter((a) => {
      const matchesSearch =
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.body.toLowerCase().includes(search.toLowerCase());
      const matchesTag = tag === 'All' || a.tag === tag;
      return matchesSearch && matchesTag;
    })
    .sort((a, b) => {
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;
      return b.date.localeCompare(a.date);
    });

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary-500/15 flex items-center justify-center">
          <Megaphone className="w-5 h-5 text-primary-300" />
        </div>
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-white">Announcements & Notice Board</h1>
          <p className="text-slate-400 text-sm">Stay updated on academic news, registration, and campus events</p>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
        <input
          type="text"
          placeholder="Search announcements..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#1e2a45] bg-[#141d30] text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-transparent"
        />
      </div>

      {/* Tag Filters */}
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setTag(t)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              tag === t
                ? 'bg-primary-500 text-white shadow-sm'
                : 'bg-[#141d30] text-slate-400 border border-[#1e2a45] hover:border-primary-500/50'
            }`}
          >
            {t === 'All' ? 'All Tags' : t}
          </button>
        ))}
      </div>

      {/* Feed */}
      <div className="space-y-3">
        {filtered.map((a) => (
          <div
            key={a.id}
            className={`bg-[#141d30] rounded-xl border p-5 hover:shadow-md transition-all ${
              a.urgent ? 'border-l-4 border-l-red-500 border-y border-r border-[#1e2a45]' : 'border-[#1e2a45]'
            }`}
          >
            <div className="flex items-start gap-3">
              {a.urgent && (
                <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className={`px-2 py-0.5 rounded text-xs font-medium border ${tagColors[a.tag]}`}>
                    {a.tag}
                  </span>
                  {a.pinned && (
                    <span className="px-2 py-0.5 rounded text-xs font-bold bg-teal-500/15 text-teal-300 uppercase flex items-center gap-1">
                      <Pin className="w-3 h-3" /> Pinned
                    </span>
                  )}
                  {a.urgent && !a.pinned && (
                    <span className="px-2 py-0.5 rounded text-xs font-bold bg-red-500/15 text-red-300 uppercase">
                      Urgent
                    </span>
                  )}
                  <span className="text-xs text-slate-500">{a.date}</span>
                </div>
                <h3 className="font-semibold text-white text-sm lg:text-base">{a.title}</h3>
                <p className="text-sm text-slate-400 mt-1">{a.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-slate-500">
          <Megaphone className="w-12 h-12 mx-auto mb-3 opacity-40" />
          <p>No announcements match your search.</p>
        </div>
      )}
    </div>
  );
}
