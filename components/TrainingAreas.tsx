
import React from 'react';

const AREAS = [
  'Change or Die', 'The Speed of Trust', 'Dynamic Communication (DISC)', 'GRPI Team Effectiveness',
  'Stages of Growth (SOG)', '1-Year & 3-Year Strategy Plan', 'SWOT for Strategic Planning', 'Project Charters',
  'Five Levels of Leadership', 'Vision, Purpose, Values', 'Power of Reflection', 'Discipline of Execution'
];

export const TrainingAreas: React.FC = () => {
  return (
    <div className="py-32 bg-vrt-black text-white relative" id="training-areas">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-vrt-red/5 skew-x-12 pointer-events-none"></div>
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="mb-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-vrt-red font-black uppercase tracking-[0.4em] text-[10px] mb-6">Program Curriculum</p>
              <h2 className="font-serif text-5xl md:text-6xl font-black mb-8 leading-tight">
                EGA™ <span className="text-vrt-red italic">12 Core Training</span> Areas
              </h2>
              <p className="text-slate-400 text-lg">
                We prioritize depth over breadth. These twelve modules represent the fundamental infrastructure required to sustain $10M+ operations.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 max-w-xs">
              <p className="text-[10px] font-black text-vrt-red uppercase tracking-widest mb-2">Notice</p>
              <p className="text-[11px] text-slate-300 font-bold uppercase tracking-wide">
                Cohort capacity: 12 participants per group. Enrollment is high-touch.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {AREAS.map((area, idx) => (
            <div key={idx} className="group relative bg-white/5 border border-white/10 p-10 hover:bg-vrt-red transition-all duration-500 hover:-translate-y-2">
              <span className="text-white/20 text-4xl font-black absolute top-4 right-6 group-hover:text-white/40 transition-colors">{(idx + 1).toString().padStart(2, '0')}</span>
              <p className="text-sm font-black uppercase tracking-widest leading-snug pt-6 group-hover:text-black transition-colors">{area}</p>
              <div className="w-0 h-1 bg-black absolute bottom-0 left-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        <div className="mt-24 border-t border-white/10 pt-16 text-center">
           <button className="bg-vrt-red text-white px-12 py-6 text-sm font-black uppercase tracking-[0.3em] hover:bg-white hover:text-vrt-black transition-all btn-hover-effect">
             Download Detailed Curriculum
           </button>
        </div>
      </div>
    </div>
  );
};
