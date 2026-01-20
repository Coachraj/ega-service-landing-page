import React, { useState, useEffect } from "react";
import LeadForm from "./LeadForm";

export const FinalCTA: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  // 👉 REAL cohort start date (local time)
  const COHORT_START_DATE = new Date("2026-03-19T09:00:00");

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = Date.now();
      const diff = COHORT_START_DATE.getTime() - now;

      if (diff <= 0) {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (diff % (1000 * 60 * 60)) / (1000 * 60)
      );

      setTimeRemaining({ days, hours, minutes });
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-32 bg-vrt-red text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-vrt-black opacity-10 pattern-grid-lg" />

      <div className="mx-auto max-w-5xl px-6 text-center relative z-10">
        {/* Header */}
        <p className="text-[11px] font-black uppercase tracking-[0.5em] text-black mb-8">
          Executive Decision Required
        </p>

        <h2 className="font-serif text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-10">
          If you’re serious about scaling,{" "}
          <span className="text-black italic underline decoration-black/20 decoration-8">
            stop guessing.
          </span>
        </h2>

        <p className="text-white text-xl md:text-2xl mb-16 font-medium max-w-3xl mx-auto leading-relaxed">
          The 2026 cohort is strictly limited. Schedule your complimentary
          45-minute strategy call with Rajesh Tedla to secure your execution rhythm.
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center gap-6">
          <button
            onClick={() => setShowForm(true)}
            className="w-full max-w-lg bg-vrt-black text-white text-sm font-black uppercase tracking-[0.4em] h-24 shadow-2xl flex items-center justify-center gap-4 hover:bg-white hover:text-vrt-red transition-all group"
          >
            Book My 45-Min Strategy Call
            <span className="material-symbols-outlined text-3xl group-hover:translate-x-3 transition-transform">
              arrow_right_alt
            </span>
          </button>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-8 items-center text-[10px] font-black uppercase tracking-[0.2em] text-black/80">
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">verified</span>
              No Hype
            </span>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">block</span>
              No Pressure
            </span>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">ads_click</span>
              Just Strategy
            </span>
          </div>
        </div>

        {/* ⏱️ LIVE COUNTDOWN — compact flip style */}
        <div className="mt-20 flex justify-center">
          <div className="bg-white text-black px-8 py-6 rounded-md shadow-xl border border-black/10">
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-center mb-6 text-vrt-red">
              Live Countdown
            </p>

            <div className="flex gap-6">
              <FlipCard value={timeRemaining.days} label="Days" />
              <FlipCard value={timeRemaining.hours} label="Hours" />
              <FlipCard value={timeRemaining.minutes} label="Minutes" />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
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
    </div>
  );
};

/* ===== Flip-style countdown card ===== */
const FlipCard = ({
  value,
  label,
}: {
  value: number;
  label: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24 bg-black rounded-md overflow-hidden shadow-inner">
        {/* top half */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-black/90 border-b border-white/10" />

        {/* bottom half */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black" />

        {/* divider */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-white/20" />

        {/* number */}
        <div className="relative z-10 flex items-center justify-center h-full text-white text-4xl font-black transition-all duration-300">
          {value}
        </div>
      </div>

      <span className="mt-3 text-[10px] font-black uppercase tracking-[0.3em] text-black/70">
        {label}
      </span>
    </div>
  );
};