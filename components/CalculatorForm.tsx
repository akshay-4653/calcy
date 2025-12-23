
import React, { useState } from 'react';

interface CalculatorFormProps {
  onCalculate: (p: number, r: number, t: number) => void;
}

const CalculatorForm: React.FC<CalculatorFormProps> = ({ onCalculate }) => {
  const [principal, setPrincipal] = useState<string>('');
  const [rate, setRate] = useState<string>('');
  const [time, setTime] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const t = parseFloat(time);

    if (isNaN(p) || isNaN(r) || isNaN(t) || p < 0 || r < 0 || t < 0) {
      alert("Please enter valid positive numbers.");
      return;
    }

    onCalculate(p, r, t);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Principal Amount ($)
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-slate-500 sm:text-sm">$</span>
          </div>
          <input
            type="number"
            step="any"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            placeholder="e.g. 5000"
            className="block w-full pl-7 pr-12 py-3 border border-slate-200 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 text-slate-900 transition-all bg-white hover:bg-slate-50"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Rate of Interest (%)
          </label>
          <input
            type="number"
            step="any"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="e.g. 5.5"
            className="block w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 text-slate-900 transition-all bg-white hover:bg-slate-50"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Time (Years)
          </label>
          <input
            type="number"
            step="any"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="e.g. 3"
            className="block w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 text-slate-900 transition-all bg-white hover:bg-slate-50"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-indigo-200 transition-all active:scale-[0.98] flex items-center justify-center space-x-2"
      >
        <i className="fas fa-calculator"></i>
        <span>Calculate Interest</span>
      </button>
    </form>
  );
};

export default CalculatorForm;
