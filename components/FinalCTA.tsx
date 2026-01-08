
import React from 'react';

export const FinalCTA: React.FC = () => {
  return (
    <div className="py-32 bg-vrt-red text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-vrt-black opacity-10 pattern-grid-lg"></div>
      <div className="mx-auto max-w-5xl px-6 text-center relative z-10">
        <p className="text-[11px] font-black uppercase tracking-[0.5em] text-black mb-8">Executive Decision Required</p>
        <h2 className="font-serif text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-10">
          If you’re serious about scaling, <span className="text-black italic underline decoration-black/20 decoration-8">stop guessing.</span>
        </h2>
        <p className="text-white text-xl md:text-2xl mb-16 font-medium max-w-3xl mx-auto leading-relaxed">
          The 2026 cohort is strictly limited. Schedule your complimentary 45-minute strategy call with Rajesh Tedla to secure your execution rhythm.
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <button className="w-full max-w-lg bg-vrt-black text-white text-sm font-black uppercase tracking-[0.4em] h-24 shadow-2xl flex items-center justify-center gap-4 hover:bg-white hover:text-vrt-red transition-all group">
            Book My 45-Min Strategy Call
            <span className="material-symbols-outlined group-hover:translate-x-3 transition-transform text-3xl">arrow_right_alt</span>
          </button>
          <div className="flex flex-wrap justify-center gap-8 items-center text-[10px] font-black uppercase tracking-[0.2em] text-black/80">
            <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">verified</span> No Hype</span>
            <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">block</span> No Pressure</span>
            <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">ads_click</span> Just Strategy</span>
          </div>
        </div>
        
        <div className="mt-20 py-8 px-10 bg-black/20 backdrop-blur-md inline-block border-2 border-black/30">
          <p className="text-sm font-black uppercase tracking-[0.3em] flex items-center gap-4">
             <span className="material-symbols-outlined text-black animate-pulse">timer</span>
             Cohort starts in approx. 40 days.
          </p>
        </div>
      </div>
    </div>
  );
};
