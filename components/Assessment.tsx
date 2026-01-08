
import React from 'react';

export const Assessment: React.FC = () => {
  return (
    <div className="py-32 bg-white border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-8">
          <p className="text-vrt-red font-black uppercase tracking-[0.3em] text-[11px]">The Differentiator</p>
          <h2 className="font-serif text-4xl md:text-5xl font-black text-vrt-black">The EDGE: <br/><span className="text-vrt-red italic">Assessment + Execution</span></h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-lg font-black uppercase tracking-widest mb-4">TriMetrix HD® Assessment</h3>
              <p className="text-vrt-gray leading-relaxed italic">
                You can’t fix what you can’t clearly see. TriMetrix HD helps create a clear, shared understanding of communication, decision-making, strengths, and role alignment.
              </p>
            </div>
            <div className="p-8 bg-vrt-black text-white">
              <h3 className="text-lg font-black uppercase tracking-widest mb-4 text-vrt-red">Entrepreneur Excellence / EDGE</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                EDGE translates insight into execution—so improvement becomes outcomes (leadership standards, decision habits, accountability rhythms, execution discipline).
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="h-full bg-slate-100 flex items-center justify-center p-12 border border-slate-200">
             <div className="text-center">
               <span className="material-symbols-outlined text-vrt-red text-8xl mb-6">insights</span>
               <p className="text-[11px] font-black uppercase tracking-[0.4em] text-vrt-gray">Precision Diagnostic Module</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
