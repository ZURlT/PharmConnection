import { useState } from 'react';
import { Users, Mail, MapPin, Clock, Search } from 'lucide-react';
import { faculty, type FacultyMember } from '@/data/mockData';

const colorMap: Record<string, string> = {
  teal: 'bg-teal-500',
  blue: 'bg-primary-500',
  slate: 'bg-slate-500',
};

export default function FacultyDirectory() {
  const [search, setSearch] = useState('');
  const [deptFilter, setDeptFilter] = useState<string>('all');

  const departments = ['all', ...new Set(faculty.map((f) => f.department))];

  const filtered = faculty.filter((f) => {
    const matchesSearch =
      f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.role.toLowerCase().includes(search.toLowerCase());
    const matchesDept = deptFilter === 'all' || f.department === deptFilter;
    return matchesSearch && matchesDept;
  });

  const initials = (name: string) =>
    name
      .replace('Dr. ', '')
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary-500/15 flex items-center justify-center">
          <Users className="w-5 h-5 text-primary-300" />
        </div>
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-white">Staff & Faculty Directory</h1>
          <p className="text-slate-400 text-sm">Connect with your professors and department staff</p>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
        <input
          type="text"
          placeholder="Search by name or role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#1e2a45] bg-[#141d30] text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-transparent"
        />
      </div>

      {/* Department Filter */}
      <div className="flex flex-wrap gap-2">
        {departments.map((d) => (
          <button
            key={d}
            onClick={() => setDeptFilter(d)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize transition-all ${
              deptFilter === d
                ? 'bg-primary-500 text-white shadow-sm'
                : 'bg-[#141d30] text-slate-400 border border-[#1e2a45] hover:border-primary-500/50'
            }`}
          >
            {d === 'all' ? 'All Departments' : d}
          </button>
        ))}
      </div>

      {/* Faculty Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((member: FacultyMember) => (
          <div
            key={member.id}
            className="bg-[#141d30] rounded-xl border border-[#1e2a45] p-5 hover:shadow-lg hover:border-teal-500/50 transition-all group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`w-14 h-14 rounded-full ${colorMap[member.avatarColor]} flex items-center justify-center text-white font-bold text-lg shrink-0 group-hover:scale-105 transition-transform`}
              >
                {initials(member.name)}
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-white text-sm leading-tight">{member.name}</h3>
                <p className="text-xs text-slate-400 mt-0.5 line-clamp-2">{member.role}</p>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span className="truncate">{member.office}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span className="truncate">{member.hours}</span>
              </div>
            </div>

            <a
              href={`mailto:${member.email}`}
              className="mt-4 w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-teal-500/15 text-teal-300 text-sm font-medium hover:bg-teal-500/25 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-slate-500">
          <Users className="w-12 h-12 mx-auto mb-3 opacity-40" />
          <p>No faculty members found.</p>
        </div>
      )}
    </div>
  );
}
