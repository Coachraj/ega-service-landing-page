import { useState } from "react";
import LeadForm from "./LeadForm";
import type { ChangeEvent, FormEvent } from "react";

export const StickyAlert = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-50 bg-vrt-red text-white px-4 py-2 border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] tracking-[0.2em] uppercase">
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">
              priority_high
            </span>
            March 19th, 2026 Cohort: Limited Capacity
          </span>

          <button
            className="bg-white text-vrt-red px-3 py-1 rounded-sm hover:bg-black hover:text-white transition-all"
            onClick={() => setShowForm(true)}
          >
            Reserve Now
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
    </>
  );
};