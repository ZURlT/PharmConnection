import { useState } from 'react';
import { Pill, Search, ChevronDown, Activity, Heart, Brain, Zap, Shield, Wind, Droplets } from 'lucide-react';
import { drugClasses, type DrugClass } from '@/data/mockData';

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Cardiovascular: Heart,
  Antibiotics: Activity,
  CNS: Brain,
  Analgesics: Zap,
  GI: Droplets,
  'Anti-inflammatory': Shield,
  Respiratory: Wind,
  Endocrine: Activity,
};

const categoryColors: Record<string, string> = {
  Cardiovascular: 'bg-red-500/15 text-red-300',
  Antibiotics: 'bg-teal-500/15 text-teal-300',
  CNS: 'bg-primary-500/15 text-primary-300',
  Analgesics: 'bg-amber-500/15 text-amber-300',
  GI: 'bg-rose-500/15 text-rose-300',
  'Anti-inflammatory': 'bg-indigo-500/15 text-indigo-300',
  Respiratory: 'bg-cyan-500/15 text-cyan-300',
  Endocrine: 'bg-emerald-500/15 text-emerald-300',
};

export default function DrugCheatSheet() {
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState<string | null>(null);
  const [category, setCategory] = useState<string>('all');

  const categories = ['all', ...new Set(drugClasses.map((d) => d.category))];

  const filtered = drugClasses.filter((d) => {
    const matchesSearch =
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.examples.some((e) => e.toLowerCase().includes(search.toLowerCase()));
    const matchesCat = category === 'all' || d.category === category;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-teal-500/15 flex items-center justify-center">
          <Pill className="w-5 h-5 text-teal-400" />
        </div>
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-white">Common Drug Classes Cheat Sheet</h1>
          <p className="text-slate-400 text-sm">Quick reference for mechanisms, uses, and side effects</p>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
        <input
          type="text"
          placeholder="Search by drug class or example..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#1e2a45] bg-[#141d30] text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-transparent"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              category === cat
                ? 'bg-primary-500 text-white shadow-sm'
                : 'bg-[#141d30] text-slate-400 border border-[#1e2a45] hover:border-primary-500/50'
            }`}
          >
            {cat === 'all' ? 'All Classes' : cat}
          </button>
        ))}
      </div>

      {/* Drug Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((drug: DrugClass) => {
          const Icon = categoryIcons[drug.category] || Pill;
          const isOpen = expanded === drug.id;
          const colorClass = categoryColors[drug.category] || 'bg-slate-500/15 text-slate-300';
          return (
            <div
              key={drug.id}
              className="bg-[#141d30] rounded-xl border border-[#1e2a45] overflow-hidden hover:shadow-lg hover:border-teal-500/50 transition-all"
            >
              <button
                onClick={() => setExpanded(isOpen ? null : drug.id)}
                className="w-full p-4 text-left"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-lg ${colorClass} flex items-center justify-center shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white text-sm">{drug.name}</h3>
                    <span className={`inline-block mt-1 px-2 py-0.5 rounded text-xs font-medium ${colorClass}`}>
                      {drug.category}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {drug.examples.map((ex) => (
                    <span key={ex} className="px-2 py-0.5 bg-[#1a2540] rounded text-xs text-slate-400">
                      {ex}
                    </span>
                  ))}
                </div>
              </button>

              {isOpen && (
                <div className="px-4 pb-4 space-y-3 text-xs animate-fade-in-up">
                  <div>
                    <p className="font-semibold text-slate-500 uppercase mb-1">Mechanism</p>
                    <p className="text-slate-300">{drug.mechanism}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-500 uppercase mb-1">Uses</p>
                    <p className="text-slate-300">{drug.uses}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-500 uppercase mb-1">Side Effects</p>
                    <p className="text-slate-300">{drug.sideEffects}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-slate-500">
          <Pill className="w-12 h-12 mx-auto mb-3 opacity-40" />
          <p>No drug classes found.</p>
        </div>
      )}
    </div>
  );
}
