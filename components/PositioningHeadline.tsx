
import React from 'react';

export const PositioningHeadline: React.FC = () => {
  return (
    <div className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="font-serif text-5xl md:text-6xl text-vrt-black font-black leading-none mb-8">
            Growth isn’t a <br/><span className="text-vrt-red italic">Personality Trait.</span><br/>It’s a Process.
          </h2>
          <div className="w-20 h-1 bg-vrt-red mb-8"></div>
          <p className="text-vrt-gray text-xl leading-relaxed mb-10">
            Growth As A Process is the core of EGA™: when you install the right process, growth becomes repeatable—not dependent on heroic effort, luck, or the CEO doing everything.
          </p>
        </div>
        <div className="bg-slate-50 p-10 border-l-4 border-vrt-black space-y-6">
          {[
            { title: 'Clear priorities', text: 'Know exactly what matters now.' },
            { title: 'Aligned execution', text: 'Total clarity on who owns what.' },
            { title: 'Consistent operating rhythms', text: 'How results happen every week.' },
            { title: 'Measurable progress', text: 'Scorecards, accountability, and follow-through.' }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <span className="material-symbols-outlined text-vrt-red">bolt</span>
              <div>
                <span className="font-black uppercase tracking-widest text-[11px] text-vrt-black block">{item.title}</span>
                <p className="text-vrt-gray text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
