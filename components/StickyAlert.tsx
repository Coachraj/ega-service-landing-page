
import React from 'react';

export const StickyAlert: React.FC = () => {
  return (
    <div className="sticky top-0 z-50 bg-vrt-red text-white px-4 py-2 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-6 text-[11px] font-black tracking-[0.2em] uppercase">
        <span className="flex items-center gap-2">
          <span className="material-symbols-outlined text-lg">priority_high</span>
          FEBRUARY 2026 COHORT: 90% CAPACITY REACHED
        </span>
        <button className="bg-white text-vrt-red px-3 py-1 rounded-sm hover:bg-black hover:text-white transition-all">
          RESERVE NOW
        </button>
      </div>
    </div>
  );
};
