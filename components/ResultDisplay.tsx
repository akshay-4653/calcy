
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { CalculationResult } from '../types';

interface ResultDisplayProps {
  result: CalculationResult;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  const data = [
    { name: 'Principal', value: result.principal },
    { name: 'Simple Interest', value: result.interest },
  ];

  const COLORS = ['#6366f1', '#10b981'];

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Calculation Results</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100">
            <p className="text-sm font-medium text-indigo-600 uppercase tracking-wider mb-1">Simple Interest</p>
            <p className="text-3xl font-bold text-slate-900">${result.interest.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
          </div>
          
          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
            <p className="text-sm font-medium text-emerald-600 uppercase tracking-wider mb-1">Total Amount</p>
            <p className="text-3xl font-bold text-slate-900">${result.totalAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
          </div>

          <div className="text-sm text-slate-500 pt-4 border-t border-slate-100">
            <p><span className="font-semibold">Formula:</span> (P × R × T) / 100</p>
            <p className="mt-1">For ${result.principal} at {result.rate}% for {result.time} years.</p>
          </div>
        </div>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value: number) => `$${value.toLocaleString()}`}
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Legend verticalAlign="bottom" height={36}/>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;
