
import React from 'react';

const VALUE_POINTS = [
  { text: 'Quick diagnosis of where you’re stuck', tag: 'DIAGNOSTIC' },
  { text: 'Identify the #1 constraint slowing growth', tag: 'INSIGHT' },
  { text: 'Clear priority map: What to fix & ignore', tag: 'PLAN' },
  { text: '30–90 Day Practical Execution Path', tag: 'ROADMAP' },
  { text: 'Determine if EGA™ is the right fit', tag: 'OUTCOME' }
];

export const Features: React.FC = () => {
  return (
    <div className="py-24 bg-vrt-black text-white relative overflow-hidden" id="what-you-get">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent opacity-10"></div>
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-5xl font-black mb-8 leading-tight">
              In one focused <span className="text-vrt-red italic">working session</span>, you’ll get:
            </h2>
            <div className="w-24 h-2 bg-vrt-red mb-10"></div>
            <p className="text-slate-400 text-lg mb-12">
              We skip the fluff and dive straight into the mechanics of your business.
            </p>
            <button className="bg-vrt-red text-white px-10 py-5 text-sm font-black uppercase tracking-[0.2em] hover:bg-white hover:text-vrt-black transition-all btn-hover-effect">
              Book Strategy Call
            </button>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {VALUE_POINTS.map((point, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors group">
                <span className="text-vrt-red text-[9px] font-black tracking-[0.3em] mb-4 block group-hover:translate-x-2 transition-transform">{point.tag}</span>
                <p className="text-lg font-bold leading-tight group-hover:text-vrt-red transition-colors">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
