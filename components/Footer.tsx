
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-vrt-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="col-span-1 lg:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-vrt-red flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-xl">trending_up</span>
            </div>
            <span className="font-serif text-xl font-black">VRT</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed uppercase tracking-widest font-bold">
            Architecting predictable growth for USA-based SMBs.
          </p>
        </div>
        
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-vrt-red mb-6">Contact</h4>
          <p className="text-sm font-bold mb-2">203 304 1918</p>
          <p className="text-sm font-bold">coachrajesh@vrt9.com</p>
        </div>
        
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-vrt-red mb-6">Links</h4>
          <ul className="space-y-2 text-[10px] font-black uppercase tracking-widest">
            <li><a href="https://vrt9.net" className="hover:text-vrt-red">vrt9.net</a></li>
            <li><a href="https://vrt9.net/ega" className="hover:text-vrt-red">vrt9.net/ega</a></li>
          </ul>
        </div>
        
        <div className="flex flex-col justify-end">
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10">
        <p className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-600 text-center">
          © 2026 VRT MANAGEMENT GROUP. EMPOWERING LEADERSHIP.
        </p>
      </div>
    </footer>
  );
};
