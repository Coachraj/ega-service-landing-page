
import React from 'react';

const SYMPTOMS = [
  'Unclear roles + weak accountability',
  'Inconsistent processes',
  'Priorities that change too often',
  'Meetings without decisions',
  'Execution without measurement',
  'Culture that can’t scale'
];

export const ProblemSection: React.FC = () => {
  return (
    <div className="py-32 bg-white relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <h2 className="font-serif text-5xl font-black text-vrt-black leading-tight mb-8">
              The real reason most <br/><span className="text-vrt-red italic">businesses stall.</span>
            </h2>
            <p className="text-vrt-gray text-xl leading-relaxed mb-10">
              Most businesses don’t get stuck because the owner lacks ambition. They stall because growth increases complexity and the business lacks a process to handle it.
            </p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-1 gap-4">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-vrt-red mb-2">Common Symptoms</p>
            {SYMPTOMS.map((symptom, idx) => (
              <div key={idx} className="flex items-center gap-4 py-3 border-b border-slate-100">
                <span className="w-1.5 h-1.5 bg-vrt-red"></span>
                <span className="text-vrt-black font-bold text-sm uppercase tracking-wider">{symptom}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
