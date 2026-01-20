import { useState } from "react";
import React from 'react';
import type { ChangeEvent, FormEvent } from "react";


export const Footer: React.FC = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  return (
    <footer className="bg-vrt-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="col-span-1 lg:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-20 h-20  flex items-center justify-center text-white">
              {/* <span className="material-symbols-outlined text-xl">trending_up</span> */}
              <img src="/EGA Logo.png" alt="" />
            </div>
            <span className="font-serif text-xl font-black">Entrepreneur Growth Alliance</span>
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
            <button className="hover:text-white"
            onClick={() => setShowPrivacy(true)}>
              Privacy Policy</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10">
        <p className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-600 text-center">
          © 2026 VRT MANAGEMENT GROUP. EMPOWERING LEADERSHIP.
        </p>
      </div>
      {showPrivacy && (
  <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-6">
    <div className="relative bg-white text-black max-w-3xl w-full max-h-[85vh] overflow-y-auto rounded-lg shadow-2xl">

      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-black text-sm font-black border border-black/20 rounded-full px-3 py-1 hover:bg-black hover:text-white transition"
        onClick={() => setShowPrivacy(false)}
        aria-label="Close Privacy Policy"
      >
        ✕
      </button>

      {/* Header */}
      <div className="border-b border-black/10 px-10 py-8">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-vrt-red mb-2">
          Legal
        </p>
        <h2 className="font-serif text-3xl font-black">
          Privacy Policy
        </h2>
      </div>

      {/* Content */}
      <div className="px-10 py-8 space-y-6 text-sm leading-relaxed text-slate-700">
        <p>
          At <strong>VRT Management Group</strong>, your privacy is respected and protected.
          We collect personal information such as your name, email address, phone number,
          or company details solely to deliver the resources and services you request.
        </p>

        <p>
          This may include access to guides, leadership insights, invitations to strategy
          sessions, or executive briefings related to growth and hiring.
        </p>

        <p>
          From time to time, we may send you relevant updates or insights related to leadership,
          operational excellence, and business growth. You may unsubscribe at any time using
          the link provided in our emails.
        </p>

        <p>
          <strong>We do not sell, rent, or share your personal data</strong> with third parties.
          Your information is stored securely and used exclusively for communication directly
          related to VRT Management Group services.
        </p>

        <p>
          If you have any questions regarding data usage or privacy practices,
          please contact us at{" "}
          <a
            href="mailto:coachrajesh@vrt9.com"
            className="text-vrt-red font-bold underline"
          >
            coachrajesh@vrt9.com
          </a>.
        </p>
      </div>

      {/* Footer */}
      <div className="border-t border-black/10 px-10 py-6 bg-slate-50 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          VRT Management Group · USA
        </p>
      </div>
    </div>
  </div>
)}
    </footer>
  );
};
