import { useState } from 'react';
import { BookOpen, Search, Download, FileText, Beaker, FileQuestion, FileType } from 'lucide-react';
import { studyMaterials, type StudyMaterial } from '@/data/mockData';

const categories: (StudyMaterial['category'] | 'All')[] = [
  'All',
  'Anatomy',
  'Pharmacology',
  'Medicinal Chemistry',
  'Pharmaceutics',
];

const typeIcons: Record<StudyMaterial['type'], React.ComponentType<{ className?: string }>> = {
  'Lecture Slides': FileText,
  'Lab Manual': Beaker,
  PDF: FileType,
  'Practice Questions': FileQuestion,
};

const categoryColors: Record<StudyMaterial['category'], string> = {
  Anatomy: 'bg-teal-500/15 text-teal-300',
  Pharmacology: 'bg-primary-500/15 text-primary-300',
  'Medicinal Chemistry': 'bg-amber-500/15 text-amber-300',
  Pharmaceutics: 'bg-rose-500/15 text-rose-300',
};

export default function StudyMaterialHub() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<StudyMaterial['category'] | 'All'>('All');

  const filtered = studyMaterials.filter((m) => {
    const matchesSearch = m.title.toLowerCase().includes(search.toLowerCase());
    const matchesCat = category === 'All' || m.category === category;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary-500/15 flex items-center justify-center">
          <BookOpen className="w-5 h-5 text-primary-300" />
        </div>
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-white">Study Material Hub</h1>
          <p className="text-slate-400 text-sm">Download lecture slides, lab manuals, and reference PDFs</p>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
        <input
          type="text"
          placeholder="Search materials..."
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
            {cat}
          </button>
        ))}
      </div>

      {/* Materials Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((mat) => {
          const Icon = typeIcons[mat.type];
          return (
            <div
              key={mat.id}
              className="bg-[#141d30] rounded-xl border border-[#1e2a45] p-5 hover:shadow-lg hover:border-teal-500/50 transition-all group"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-11 h-11 rounded-lg bg-[#1a2540] flex items-center justify-center shrink-0 group-hover:bg-teal-500/15 transition-colors">
                  <Icon className="w-5 h-5 text-slate-400 group-hover:text-teal-400 transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white text-sm leading-tight">{mat.title}</h3>
                  <span className={`inline-block mt-1.5 px-2 py-0.5 rounded text-xs font-medium ${categoryColors[mat.category]}`}>
                    {mat.category}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                <span>{mat.type}</span>
                <span>{mat.size}</span>
              </div>

              <button
                onClick={() => alert(`Downloading "${mat.title}"...`)}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-teal-500/15 text-teal-300 text-sm font-medium hover:bg-teal-500/25 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-slate-500">
          <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-40" />
          <p>No materials found.</p>
        </div>
      )}
    </div>
  );
}
