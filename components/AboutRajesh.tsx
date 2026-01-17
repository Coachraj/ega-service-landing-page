
import React from 'react';

export const AboutRajesh: React.FC = () => {
  return (
    <div className="bg-vrt-black py-24 lg:py-32 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-vrt-red to-transparent opacity-50"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl border-l-4 border-vrt-red bg-vrt-gray/20">
              <img 
                src="\NP__0341.jpg" 
                alt="Rajesh Tedla" 
                className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-700"
                // onError={(e) => {
                //   // Fallback to high quality placeholder if the specific link isn't active in this environment
                //   e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop";
                // }}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-vrt-red p-6 text-white z-20 hidden md:block">
              <p className="text-4xl font-black font-serif italic leading-none">39+</p>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] mt-2">Years of Impact</p>
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-serif text-5xl md:text-6xl text-white font-black leading-tight">
              Meet <span className="text-vrt-red italic">Rajesh Tedla.</span>
            </h2>
            <p className="text-vrt-red font-black uppercase tracking-[0.4em] text-[14px]">Founder & CEO, VRT Management Group LLC</p>
            <p className="text-vrt-red font-black uppercase tracking-[0.4em] text-[11px]">A Trusted Expert with Proven Success</p>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed max-w-2xl">
            <span className="text-white font-bold">chaotic activity</span>
              <p>
              With over 39 years of experience in business transformation, Rajesh Tedla is a globally recognized leader in coaching entrepreneurs to 
              achieve exponential growth. Rajesh has helped over <span className="text-white font-bold">1420+ entrepreneurs</span> scale their businesses, transform their leadership skills, and
              increase their revenues.
              </p>
              <p>
                He is the creator of the <span className="text-vrt-red font-bold">Entrepreneur Growth Alliance™ (EGA™)</span>, a framework that has been the catalyst for over 1,420 leaders scaling their enterprises with precision and predictability.
              </p>
             
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-vrt-red">verified</span>
                <div>
                  <h4 className="text-white font-black text-xs uppercase tracking-widest mb-1">Global Reach</h4>
                  <p className="text-slate-400 text-xs uppercase tracking-wide">Advising CEOs across the US and International markets.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-vrt-red">database</span>
                <div>
                  <h4 className="text-white font-black text-xs uppercase tracking-widest mb-1">Data-Driven</h4>
                  <p className="text-slate-400 text-xs uppercase tracking-wide">Pioneer in using TriMetrix HD® for executive alignment.</p>
                </div>
              </div>
            </div>
            
            <div className="pt-10">
              <button className="bg-white text-vrt-black px-10 py-5 text-sm font-black uppercase tracking-[0.2em] hover:bg-vrt-red hover:text-white transition-all btn-hover-effect">
                Read The VRT Mission
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
