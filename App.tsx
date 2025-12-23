
import React, { useState, useCallback } from 'react';
import CalculatorForm from './components/CalculatorForm';
import ResultDisplay from './components/ResultDisplay';
import FinancialTip from './components/FinancialTip';
import { CalculationResult } from './types';
import { getFinancialInsight } from './services/geminiService';

const App: React.FC = () => {
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [insight, setInsight] = useState<string>('');
  const [loadingInsight, setLoadingInsight] = useState<boolean>(false);

  const handleCalculate = useCallback(async (p: number, r: number, t: number) => {
    const interest = (p * r * t) / 100;
    const totalAmount = p + interest;

    const newResult = {
      principal: p,
      interest: interest,
      totalAmount: totalAmount,
      rate: r,
      time: t
    };

    setResult(newResult);
    
    // Fetch AI insight
    setLoadingInsight(true);
    const tip = await getFinancialInsight(p, r, t);
    setInsight(tip);
    setLoadingInsight(false);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-100 text-indigo-600 rounded-2xl mb-4">
            <i className="fas fa-percent text-2xl"></i>
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            InterestWise
          </h1>
          <p className="text-lg text-slate-500">
            Simple interest calculations made smart and clear.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Input Form */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                <i className="fas fa-edit mr-3 text-indigo-500"></i>
                Input Details
              </h2>
              <CalculatorForm onCalculate={handleCalculate} />
            </div>
          </div>

          {/* Right Column - Results */}
          <div className="lg:col-span-7">
            {result ? (
              <>
                <ResultDisplay result={result} />
                <FinancialTip tip={insight} loading={loadingInsight} />
              </>
            ) : (
              <div className="bg-white p-12 rounded-2xl shadow-sm border border-dashed border-slate-300 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-6">
                  <i className="fas fa-chart-pie text-4xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Ready to calculate?</h3>
                <p className="text-slate-500 max-w-xs">
                  Fill in the details on the left to see your interest breakdown and total amount.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} InterestWise Calculator. Built for financial clarity.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="hover:text-indigo-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-indigo-500 transition-colors">Contact Support</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
