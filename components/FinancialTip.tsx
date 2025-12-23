
import React from 'react';

interface FinancialTipProps {
  tip: string;
  loading: boolean;
}

const FinancialTip: React.FC<FinancialTipProps> = ({ tip, loading }) => {
  if (loading) {
    return (
      <div className="mt-8 p-6 bg-slate-100 rounded-2xl animate-pulse flex items-center space-x-4">
        <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-slate-200 rounded w-1/4"></div>
          <div className="h-3 bg-slate-200 rounded w-3/4"></div>
        </div>
      </div>
    );
  }

  if (!tip) return null;

  return (
    <div className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-100 flex items-start space-x-4 animate-in zoom-in-95 duration-500">
      <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
        <i className="fas fa-lightbulb"></i>
      </div>
      <div>
        <h4 className="text-sm font-bold text-amber-800 uppercase tracking-wide mb-1">Smart Insight</h4>
        <p className="text-slate-700 leading-relaxed italic">
          "{tip}"
        </p>
      </div>
    </div>
  );
};

export default FinancialTip;
