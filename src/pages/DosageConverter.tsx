import { useState } from 'react';
import { Calculator, Droplet, Scale, Syringe } from 'lucide-react';

type Mode = 'mgkg' | 'mgml' | 'dpm';

const modes: { key: Mode; label: string; icon: React.ComponentType<{ className?: string }>; desc: string }[] = [
  { key: 'mgkg', label: 'mg/kg Dose', icon: Scale, desc: 'Calculate dose by body weight' },
  { key: 'mgml', label: 'mg/mL Concentration', icon: Syringe, desc: 'Convert dose to volume' },
  { key: 'dpm', label: 'Drops/min', icon: Droplet, desc: 'IV infusion drip rate' },
];

export default function DosageConverter() {
  const [mode, setMode] = useState<Mode>('mgkg');

  const [weight, setWeight] = useState('');
  const [dosePerKg, setDosePerKg] = useState('');
  const [weightUnit, setWeightUnit] = useState<'kg' | 'lb'>('kg');

  const [doseMg, setDoseMg] = useState('');
  const [concentration, setConcentration] = useState('');

  const [volumeMl, setVolumeMl] = useState('');
  const [timeMin, setTimeMin] = useState('');
  const [dropFactor, setDropFactor] = useState('20');

  const mgkgResult = () => {
    const w = parseFloat(weight);
    const d = parseFloat(dosePerKg);
    if (isNaN(w) || isNaN(d) || w <= 0) return null;
    const weightKg = weightUnit === 'lb' ? w / 2.2046 : w;
    return (weightKg * d).toFixed(2);
  };

  const mgmlResult = () => {
    const d = parseFloat(doseMg);
    const c = parseFloat(concentration);
    if (isNaN(d) || isNaN(c) || c <= 0) return null;
    return (d / c).toFixed(2);
  };

  const dpmResult = () => {
    const v = parseFloat(volumeMl);
    const t = parseFloat(timeMin);
    const df = parseFloat(dropFactor);
    if (isNaN(v) || isNaN(t) || isNaN(df) || t <= 0 || df <= 0) return null;
    return ((v * df) / t).toFixed(1);
  };

  const inputClass =
    'w-full px-3 py-2.5 rounded-lg border border-[#1e2a45] bg-[#0c1322] text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-transparent';

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-teal-500/15 flex items-center justify-center">
          <Calculator className="w-5 h-5 text-teal-400" />
        </div>
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-white">Drug Dosage & Unit Converter</h1>
          <p className="text-slate-400 text-sm">Calculate dosage conversions for clinical practice</p>
        </div>
      </div>

      {/* Mode Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {modes.map((m) => {
          const Icon = m.icon;
          const active = mode === m.key;
          return (
            <button
              key={m.key}
              onClick={() => setMode(m.key)}
              className={`p-4 rounded-xl border text-left transition-all ${
                active
                  ? 'border-teal-500 bg-teal-500/10 shadow-lg shadow-teal-500/10'
                  : 'border-[#1e2a45] bg-[#141d30] hover:border-[#283355]'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2 ${active ? 'bg-teal-500' : 'bg-[#1a2540]'}`}>
                <Icon className={`w-5 h-5 ${active ? 'text-white' : 'text-slate-400'}`} />
              </div>
              <h3 className={`font-semibold text-sm ${active ? 'text-teal-300' : 'text-slate-300'}`}>{m.label}</h3>
              <p className="text-xs text-slate-500 mt-0.5">{m.desc}</p>
            </button>
          );
        })}
      </div>

      {/* Calculator Panel */}
      <div className="bg-[#141d30] rounded-2xl border border-[#1e2a45] p-6 lg:p-8">
        {mode === 'mgkg' && (
          <div className="space-y-5">
            <h2 className="text-lg font-semibold text-slate-200 flex items-center gap-2">
              <Scale className="w-5 h-5 text-teal-400" />
              Weight-Based Dose Calculator
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1.5">Patient Weight</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="e.g. 70"
                    className={inputClass}
                  />
                  <select
                    value={weightUnit}
                    onChange={(e) => setWeightUnit(e.target.value as 'kg' | 'lb')}
                    className="px-3 rounded-lg border border-[#1e2a45] bg-[#0c1322] text-sm font-medium text-white"
                  >
                    <option value="kg">kg</option>
                    <option value="lb">lb</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1.5">Dose (mg/kg)</label>
                <input
                  type="number"
                  value={dosePerKg}
                  onChange={(e) => setDosePerKg(e.target.value)}
                  placeholder="e.g. 5"
                  className={inputClass}
                />
              </div>
            </div>
            {mgkgResult() !== null && (
              <div className="bg-teal-500/10 border border-teal-500/30 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-teal-400 font-medium uppercase">Total Dose</p>
                  <p className="text-2xl font-bold text-teal-300">{mgkgResult()} <span className="text-lg">mg</span></p>
                </div>
                <Scale className="w-8 h-8 text-teal-500/50" />
              </div>
            )}
          </div>
        )}

        {mode === 'mgml' && (
          <div className="space-y-5">
            <h2 className="text-lg font-semibold text-slate-200 flex items-center gap-2">
              <Syringe className="w-5 h-5 text-teal-400" />
              Concentration to Volume Converter
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1.5">Required Dose (mg)</label>
                <input
                  type="number"
                  value={doseMg}
                  onChange={(e) => setDoseMg(e.target.value)}
                  placeholder="e.g. 250"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1.5">Concentration (mg/mL)</label>
                <input
                  type="number"
                  value={concentration}
                  onChange={(e) => setConcentration(e.target.value)}
                  placeholder="e.g. 50"
                  className={inputClass}
                />
              </div>
            </div>
            {mgmlResult() !== null && (
              <div className="bg-teal-500/10 border border-teal-500/30 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-teal-400 font-medium uppercase">Volume to Administer</p>
                  <p className="text-2xl font-bold text-teal-300">{mgmlResult()} <span className="text-lg">mL</span></p>
                </div>
                <Syringe className="w-8 h-8 text-teal-500/50" />
              </div>
            )}
          </div>
        )}

        {mode === 'dpm' && (
          <div className="space-y-5">
            <h2 className="text-lg font-semibold text-slate-200 flex items-center gap-2">
              <Droplet className="w-5 h-5 text-teal-400" />
              IV Drip Rate Calculator (drops/min)
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1.5">Volume (mL)</label>
                <input
                  type="number"
                  value={volumeMl}
                  onChange={(e) => setVolumeMl(e.target.value)}
                  placeholder="e.g. 1000"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1.5">Time (minutes)</label>
                <input
                  type="number"
                  value={timeMin}
                  onChange={(e) => setTimeMin(e.target.value)}
                  placeholder="e.g. 120"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1.5">Drop Factor (gtt/mL)</label>
                <input
                  type="number"
                  value={dropFactor}
                  onChange={(e) => setDropFactor(e.target.value)}
                  placeholder="e.g. 20"
                  className={inputClass}
                />
              </div>
            </div>
            {dpmResult() !== null && (
              <div className="bg-teal-500/10 border border-teal-500/30 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-teal-400 font-medium uppercase">Drip Rate</p>
                  <p className="text-2xl font-bold text-teal-300">{dpmResult()} <span className="text-lg">drops/min</span></p>
                </div>
                <Droplet className="w-8 h-8 text-teal-500/50" />
              </div>
            )}
          </div>
        )}

        <div className="mt-6 p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg">
          <p className="text-xs text-amber-300">
            <strong>Disclaimer:</strong> This tool is for educational purposes only. Always verify calculations and consult clinical guidelines before administering medication.
          </p>
        </div>
      </div>
    </div>
  );
}
