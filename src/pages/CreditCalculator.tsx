import { useState } from 'react';
import { Calculator, BookOpen, X, Check, RotateCcw } from 'lucide-react';
import { courses, CREDIT_RATE_IQD, DISCOUNT_PERCENT, type Course } from '@/data/mockData';

const formatIQD = (n: number) => n.toLocaleString('en-US') + ' IQD';

export default function CreditCalculator() {
  const [creditInput, setCreditInput] = useState('');
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [showPicker, setShowPicker] = useState(false);

  const selectedCourses = courses.filter((c) => selected.has(c.id));
  const basketCredits = selectedCourses.reduce((sum, c) => sum + c.credits, 0);

  const credits = (() => {
    const n = parseInt(creditInput, 10);
    return isNaN(n) || n < 0 ? 0 : n;
  })();

  const total = credits * CREDIT_RATE_IQD;
  const discountAmount = Math.round((total * DISCOUNT_PERCENT) / 100);
  const finalAmount = total - discountAmount;

  const toggleCourse = (course: Course) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(course.id)) {
        next.delete(course.id);
      } else {
        next.add(course.id);
      }
      return next;
    });
  };

  const applyBasket = () => {
    setCreditInput(String(basketCredits));
    setShowPicker(false);
  };

  const clearAll = () => {
    setSelected(new Set());
    setCreditInput('');
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-[#1e2a45] bg-[#0c1322] text-lg font-semibold text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-transparent text-center';

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-teal-500/15 flex items-center justify-center">
          <Calculator className="w-5 h-5 text-teal-400" />
        </div>
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-white">Credit Calculator</h1>
          <p className="text-slate-400 text-sm">Calculate your tuition — just enter your credit amount</p>
        </div>
      </div>

      <div className="bg-[#141d30] rounded-2xl border border-[#1e2a45] p-6 lg:p-8 space-y-6">
        {/* Rate display */}
        <div className="flex items-center justify-between bg-[#0c1322] rounded-xl border border-[#1e2a45] px-5 py-4">
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wide">Rate per Credit</p>
            <p className="text-xl font-bold text-teal-300">{formatIQD(CREDIT_RATE_IQD)}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-500 uppercase tracking-wide">Discount</p>
            <p className="text-xl font-bold text-amber-300">{DISCOUNT_PERCENT}%</p>
          </div>
        </div>

        {/* Credit input */}
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">Credit Amount</label>
          <input
            type="number"
            value={creditInput}
            onChange={(e) => setCreditInput(e.target.value)}
            placeholder="Enter credits..."
            className={inputClass}
          />
        </div>

        {/* Selected basket */}
        {selectedCourses.length > 0 && (
          <div className="bg-[#0c1322] rounded-xl border border-[#1e2a45] p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-300">
                Selected Basket ({basketCredits} Cr)
              </span>
              <div className="flex gap-2">
                <button
                  onClick={applyBasket}
                  className="px-3 py-1.5 rounded-lg bg-teal-500 text-white text-xs font-medium hover:bg-teal-600 transition-colors flex items-center gap-1"
                >
                  <Check className="w-3 h-3" /> Apply Total
                </button>
                <button
                  onClick={clearAll}
                  className="px-3 py-1.5 rounded-lg bg-[#1a2540] text-slate-300 text-xs font-medium hover:bg-[#1e2a45] transition-colors flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" /> Clear
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedCourses.map((c) => (
                <span
                  key={c.id}
                  className="px-2.5 py-1 rounded-lg bg-teal-500/15 text-teal-300 text-xs font-medium border border-teal-500/30 flex items-center gap-1.5"
                >
                  {c.name} ({c.credits} Cr)
                  <button onClick={() => toggleCourse(c)} className="text-teal-400 hover:text-teal-200">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Course picker button */}
        <button
          onClick={() => setShowPicker(true)}
          className="w-full py-3 rounded-xl border border-[#1e2a45] bg-[#0c1322] text-slate-300 text-sm font-medium hover:border-teal-500/50 hover:text-teal-300 transition-all flex items-center justify-center gap-2"
        >
          <BookOpen className="w-4 h-4" />
          {selectedCourses.length > 0 ? 'Edit Selected Courses' : 'Select Courses to Auto-Calculate'}
        </button>

        {/* Results */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-[#0c1322] rounded-xl border border-[#1e2a45] p-5">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Amount</p>
            <p className="text-2xl font-bold text-white">{formatIQD(total)}</p>
          </div>
          <div className="bg-amber-500/10 rounded-xl border border-amber-500/30 p-5">
            <p className="text-xs text-amber-400 uppercase tracking-wide mb-1">
              {DISCOUNT_PERCENT}% Discount
            </p>
            <p className="text-2xl font-bold text-amber-300">−{formatIQD(discountAmount)}</p>
          </div>
        </div>

        <div className="bg-teal-500/10 rounded-xl border border-teal-500/30 p-5 flex items-center justify-between">
          <div>
            <p className="text-xs text-teal-400 uppercase tracking-wide mb-1">Final Amount</p>
            <p className="text-3xl font-bold text-teal-300">{formatIQD(finalAmount)}</p>
          </div>
          <Calculator className="w-10 h-10 text-teal-500/40" />
        </div>
      </div>

      {/* Course Picker Modal */}
      {showPicker && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
          onClick={() => setShowPicker(false)}
        >
          <div
            className="bg-[#141d30] rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl border border-[#1e2a45] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-5 border-b border-[#1e2a45]">
              <h2 className="text-lg font-bold text-white">Select Courses</h2>
              <button
                onClick={() => setShowPicker(false)}
                className="text-slate-500 hover:text-slate-300 text-xl leading-none"
              >
                ✕
              </button>
            </div>
            <div className="overflow-y-auto p-4 space-y-2 flex-1">
              {([1, 2, 3, 4, 5] as const).map((year) => (
                <div key={year}>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wide px-2 py-1.5">
                    Year {year}
                  </p>
                  <div className="space-y-1.5">
                    {courses
                      .filter((c) => c.year === year)
                      .map((course) => {
                        const isSelected = selected.has(course.id);
                        return (
                          <button
                            key={course.id}
                            onClick={() => toggleCourse(course)}
                            className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all text-left ${
                              isSelected
                                ? 'border-teal-500 bg-teal-500/10'
                                : 'border-[#1e2a45] bg-[#0c1322] hover:border-[#283355]'
                            }`}
                          >
                            <div className="flex-1 min-w-0">
                              <span className={`text-sm font-medium ${isSelected ? 'text-teal-300' : 'text-slate-300'}`}>
                                {course.name}
                              </span>
                              <span className="text-xs text-slate-500 ml-2">{course.tier}</span>
                            </div>
                            <span className={`text-sm font-bold shrink-0 ${isSelected ? 'text-teal-400' : 'text-slate-500'}`}>
                              {course.credits} Cr
                            </span>
                          </button>
                        );
                      })}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-[#1e2a45] flex items-center justify-between">
              <span className="text-sm text-slate-400">
                {selectedCourses.length} courses · {basketCredits} credits
              </span>
              <button
                onClick={() => setShowPicker(false)}
                className="px-4 py-2 rounded-lg bg-teal-500 text-white text-sm font-medium hover:bg-teal-600 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
