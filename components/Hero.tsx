
import React from 'react';

export const Hero: React.FC = () => {
  const rajeshImg = "/NP__0163.jpg";

  return (
    <div className="relative w-full bg-white pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-pattern pointer-events-none"></div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 bg-vrt-red text-white px-4 py-1.5 mb-10 text-[10px] font-black uppercase tracking-[0.3em]">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              The February 2026 cohort begins soon
            </div>
            
            <h1 className="font-serif text-vrt-black text-5xl md:text-7xl font-black leading-[1] tracking-tighter mb-10">
              Scale your business <span className="text-vrt-red italic">faster</span>—by fixing the systems holding you back.
            </h1>
            
            <p className="text-vrt-gray text-lg md:text-xl leading-relaxed mb-12 max-w-2xl font-medium">
              VRT Management Group helps USA-focused SMB owners turn “stuck” into clear priorities, strong execution, and predictable profit without guessing what to do next.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <button className="bg-vrt-red hover:bg-vrt-black transition-all text-white px-10 py-5 text-sm font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 group btn-hover-effect">
                Book My 45-Min Strategy Call
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
              <div className="text-left">
                 <p className="text-[11px] text-vrt-gray-light uppercase tracking-[0.1em] font-black">No hype. No pressure. Just clarity.</p>
                 <div className="flex items-center gap-1 text-vrt-red mt-1">
                   {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-sm fill-current">star</span>)}
                   <span className="text-[9px] font-bold text-vrt-black ml-1">TOP RATED COACHING</span>
                 </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative lg:mt-12">
            <div className="bg-vrt-black p-8 text-white relative z-10 shadow-2xl border-t-4 border-vrt-red">
               <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 bg-vrt-red flex items-center justify-center overflow-hidden">
                    <img 
                      src={rajeshImg} 
                      alt="Rajesh Tedla" 
                      className="w-full h-full object-cover grayscale"
                    />
                 </div>
                 <div>
                   <h3 className="font-black uppercase tracking-widest text-sm">Strategic Zoom Session</h3>
                   <p className="text-[10px] text-slate-400 tracking-widest uppercase">Direct with Rajesh Tedla</p>
                 </div>
               </div>
               <div className="space-y-6 mb-8">
                 <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-xs font-bold text-slate-400">DURATION</span>
                    <span className="text-sm font-black">45 MINUTES</span>
                 </div>
                 <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-xs font-bold text-slate-400">AVAILABILITY</span>
                    <span className="text-sm font-black text-vrt-red">3 SLOTS LEFT THIS WEEK</span>
                 </div>
               </div>
               <p className="text-xs text-slate-300 italic mb-8 leading-relaxed">
                 "Book your call this week to be considered for the 2026 cohort. We prioritize fit over enrollment."
               </p>
               <div className="flex items-center gap-4 py-4 bg-white/5 px-4 rounded-sm">
                  <div className="w-10 h-10 rounded-full border-2 border-vrt-red bg-vrt-gray overflow-hidden">
                    <img 
                      src={rajeshImg} 
                      alt="Rajesh Tedla" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest">Rajesh Tedla</p>
                    <p className="text-[9px] font-medium text-slate-400">Lead Strategic Coach</p>
                  </div>
               </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-slate-100 -z-10 translate-x-2 translate-y-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
