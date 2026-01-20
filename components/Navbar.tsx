import { useState } from "react";
import React from 'react';
import LeadForm from "./LeadForm";
import type { ChangeEvent, FormEvent } from "react";


export const Navbar: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const [showForm, setShowForm] = useState(false);

  return (
    <nav className="bg-white border-b border-slate-100 py-6">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-20 h-20 flex items-center justify-center text-vrt-red">
            {/* <span className="material-symbols-outlined font-black"></span> */}
            <img src="/EGA Logo.png" alt="" />
          </div>
          <span className="font-serif text-xl font-black tracking-tighter">VRT / EGA</span>
        </div>
        
        <div className="flex items-center gap-8">
          <button 
            onClick={() => scrollTo('training-areas')}
            className="hidden sm:block text-[11px] font-black uppercase tracking-[0.2em] text-vrt-gray hover:text-vrt-red transition-colors"
          >
            What’s Included
          </button>
          <button className="bg-vrt-red text-white px-6 py-3 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-vrt-black transition-all"
          onClick={() => setShowForm(true)}>
            Book Strategy Call
          </button>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="relative">
            <button
              className="absolute -top-4 -right-4 bg-white text-black rounded-full px-3 py-1"
              onClick={() => setShowForm(false)}
            >
              ✕
            </button>

            <LeadForm />
          </div>
        </div>
      )}
    </nav>
  );
};
