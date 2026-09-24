import { useState } from 'react';
import { GitBranch, ArrowRight, Lock, BookOpen } from 'lucide-react';
import { curriculum, type SemesterCourse } from '@/data/mockData';

const yearColors: Record<number, { bg: string; text: string; accent: string; dot: string }> = {
  1: { bg: 'bg-teal-500/15', text: 'text-teal-300', accent: 'border-teal-500/50', dot: 'bg-teal-500' },
  2: { bg: 'bg-primary-500/15', text: 'text-primary-300', accent: 'border-primary-500/50', dot: 'bg-primary-500' },
  3: { bg: 'bg-amber-500/15', text: 'text-amber-300', accent: 'border-amber-500/50', dot: 'bg-amber-500' },
  4: { bg: 'bg-rose-500/15', text: 'text-rose-300', accent: 'border-rose-500/50', dot: 'bg-rose-500' },
  5: { bg: 'bg-indigo-500/15', text: 'text-indigo-300', accent: 'border-indigo-500/50', dot: 'bg-indigo-500' },
};

export default function CurriculumFlowchart() {
  const [selectedCourse, setSelectedCourse] = useState<SemesterCourse | null>(null);
  const years = [1, 2, 3, 4, 5];

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary-500/15 flex items-center justify-center">
          <GitBranch className="w-5 h-5 text-primary-300" />
        </div>
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-white">Curriculum Flowchart</h1>
          <p className="text-slate-400 text-sm">PharmD degree map with prerequisites and semester breakdowns</p>
        </div>
      </div>

      {/* Year tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {years.map((y) => {
          const cfg = yearColors[y];
          return (
            <div
              key={y}
              className={`shrink-0 px-4 py-2 rounded-lg text-sm font-bold ${cfg.bg} ${cfg.text}`}
            >
              Year {y}
            </div>
          );
        })}
      </div>

      {/* Flowchart */}
      <div className="space-y-8">
        {years.map((year) => {
          const cfg = yearColors[year];
          const yearCourses = curriculum.filter((c) => c.year === year);
          const semesters = [...new Set(yearCourses.map((c) => c.semester))];

          return (
            <div key={year}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-8 h-8 rounded-full ${cfg.dot} flex items-center justify-center text-white font-bold text-sm`}>
                  {year}
                </div>
                <h2 className="text-xl font-bold text-slate-200">Year {year}</h2>
                <div className="flex-1 h-px bg-[#1e2a45]" />
              </div>

              <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                {semesters.map((sem) => {
                  const courses = yearCourses.filter((c) => c.semester === sem);
                  return (
                    <div key={sem} className={`bg-[#141d30] rounded-xl border ${cfg.accent} overflow-hidden`}>
                      <div className={`${cfg.bg} ${cfg.text} px-4 py-2.5 font-semibold text-sm flex items-center justify-between`}>
                        <span>Semester {sem}</span>
                        <span className="text-xs">
                          {courses.reduce((sum, c) => sum + c.credits, 0)} credits
                        </span>
                      </div>
                      <div className="p-3 space-y-2">
                        {courses.map((course) => (
                          <button
                            key={course.id}
                            onClick={() => setSelectedCourse(course)}
                            className={`w-full text-left p-3 rounded-lg border transition-all ${
                              selectedCourse?.id === course.id
                                ? `${cfg.bg} ${cfg.accent} border-2`
                                : 'border-[#1e2a45] hover:border-[#283355] hover:bg-[#1a2540]'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className={`text-xs font-bold ${cfg.text}`}>{course.code}</span>
                                  {course.prerequisites.length > 0 && (
                                    <Lock className="w-3 h-3 text-slate-500" />
                                  )}
                                </div>
                                <h3 className="font-medium text-white text-sm mt-0.5">
                                  {course.name}
                                </h3>
                              </div>
                              <span className="shrink-0 text-xs text-slate-500 mt-1">
                                {course.credits}cr
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {year < 5 && (
                <div className="flex justify-center py-3">
                  <ArrowRight className="w-5 h-5 text-slate-600 rotate-90" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
          onClick={() => setSelectedCourse(null)}
        >
          <div
            className="bg-[#141d30] rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#1e2a45] animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-xs font-bold text-teal-400">{selectedCourse.code}</span>
                <h2 className="text-xl font-bold text-white mt-1">{selectedCourse.name}</h2>
              </div>
              <button
                onClick={() => setSelectedCourse(null)}
                className="text-slate-500 hover:text-slate-300 text-xl leading-none"
              >
                ✕
              </button>
            </div>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-500/15 flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5 text-primary-300" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Credits</p>
                  <p className="font-medium text-white">{selectedCourse.credits} credit hours</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-500/15 flex items-center justify-center shrink-0">
                  <GitBranch className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Prerequisites</p>
                  {selectedCourse.prerequisites.length > 0 ? (
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {selectedCourse.prerequisites.map((p) => (
                        <span key={p} className="px-2 py-0.5 bg-[#1a2540] rounded text-xs font-medium text-slate-300">
                          {p}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="font-medium text-white">None — open entry</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
