
import React from 'react';

export const TargetAudience: React.FC = () => {
  return (
    <div className="py-24 bg-slate-50">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="font-serif text-4xl font-black text-vrt-black mb-12 text-center">
          Who This Is For
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {[
            'Growing, but execution can’t keep up',
            'People are busy, but outcomes inconsistent',
            'Profitability isn’t scaling with revenue',
            'Leadership gaps creating bottlenecks',
            'Strategy isn’t translating to execution',
            'CEO is too central to decisions'
          ].map((text, idx) => (
            <div key={idx} className="bg-white p-6 border border-slate-200 flex items-center gap-4">
              <span className="material-symbols-outlined text-vrt-red">warning</span>
              <p className="text-sm font-bold text-vrt-gray uppercase tracking-wide">{text}</p>
            </div>
          ))}
        </div>
        <div className="bg-vrt-black text-white p-8 text-center border-t-4 border-vrt-red">
          <p className="text-lg font-medium">
            If this is you, the <span className="text-vrt-red font-black underline">February 2026 cohort</span> is your next execution window.
          </p>
        </div>
      </div>
    </div>
  );
};
