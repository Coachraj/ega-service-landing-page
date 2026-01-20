
import React, { useState, useEffect, useCallback, useRef } from 'react';

const QUOTES = [
  {
    highlight: "Culture-first operational excellence that actually works",
    text: "I had the opportunity to work with Raj when he consulted Universal Hospital Services (UHS) on operational excellence. Raj helped us focus on the right things—culture and strategic alignment—beyond Lean Six Sigma tools. His ability to connect with executives and field workers alike makes him an exceptional coach. The impact of his help was invaluable.",
    author: "Mersea Kidan",
    role: "Healthcare Operations Leader"
  },
  {
    highlight: "Leadership transformation through precision questioning",
    text: "The ability to ask powerful questions transformed me as a leader. Rajesh's insights are surgical and effective.",
    author: "Melissa Uribe Gil",
    role: "EVP, Costex Tractor Parts"
  },
  {
    highlight: "Where people, process, and execution align",
    text: "Raj is an outstanding executive coach, mentor, and strategic partner. His Lean Six Sigma Master Black Belt expertise combined with organizational effectiveness training creates the perfect link between people and processes. He is results-oriented with a laser focus on execution, builds trust quickly, and delivers insight that is spot on. It has been a pleasure working with him.",
    author: "Laura Brown",
    role: "Senior Business Leader"
  },
  {
    highlight: "Turning data into purpose-driven action",
    text: "Raj taught me how to profile the ‘WHY’ behind our actions using data. His approach goes beyond theories into real-world results.",
    author: "Lara Cattaneo",
    role: "Clinical Psychologist"
  },
  {
    highlight: "Practical Lean leadership with measurable impact",
    text: "Raj is a tremendous asset and contributor to any company that taps into his experience with human capital and Lean Six Sigma principles. I worked closely with him during my first value stream mapping event and learned tremendously from his experience and practical application of his knowledge. An invaluable experience for me and our OpEx team.",
    author: "Gary J. Kopczyk",
    role: "Operational Excellence Leader"
  },
  {
    highlight: "Enterprise-wide transformation at scale",
    text: "From organizational analysis to transformation implementation, Raj provides a significant advantage in successfully meeting business objectives. As a CLSSMBB, he mentored Black Belts and led a companywide Lean Six Sigma transformation across 83 sites nationwide. The project exceeded expectations, creating a clear shift in culture and buy-in. I highly recommend Raj as a go-to business partner and mentor.",
    author: "Oscar Martinez",
    role: "Lean Six Sigma Executive"
  },
  {
    highlight: "130% growth driven by leadership alignment",
    text: "Our business grew by 130%. The leadership team is aligned with clarity and vision like never before. The EGA process is a game changer.",
    author: "Francesco Pagano",
    role: "President, Interpreters and Translators, Inc."
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === QUOTES.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? QUOTES.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
      setIsAutoPlaying(false);
    }
    touchStartX.current = null;
  };

  return (
    <div className="py-32 bg-[#F9F9F9] relative overflow-hidden" id="testimonials">
      {/* Dynamic Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-vrt-red opacity-[0.02] -skew-x-12 translate-x-1/2"></div>
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block py-1.5 px-4 bg-vrt-black text-white mb-6">
            <p className="text-[9px] font-black uppercase tracking-[0.4em]">Verified Results</p>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-black text-vrt-black tracking-tight leading-tight">
            Built on <span className="text-vrt-red italic">Proven Authority</span>
          </h2>
        </div>

        <div 
          className="relative max-w-5xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Carousel Viewport */}
          <div className="overflow-hidden bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border-t-[12px] border-vrt-red p-12 md:p-24 relative">
             {/* Big Quote Icon Decor */}
            <span className="material-symbols-outlined absolute top-8 left-8 text-vrt-red/5 text-[100px] select-none pointer-events-none">format_quote</span>
            
            <div 
              className="flex transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1)" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {QUOTES.map((quote, idx) => (
                <div
                  key={idx}
                  className={`w-full flex-shrink-0 transition-all duration-700 ${
                    idx === currentIndex ? 'opacity-100 scale-100' : 'opacity-60 scale-[0.98]'
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    
                    {/* Highlight */}
                    <p className="text-vrt-red uppercase tracking-[0.3em] text-[11px] font-black mb-6">
                      {quote.highlight}
                    </p>

                    {/* Main Quote */}
                    <p className="text-2xl md:text-3xl font-serif font-semibold leading-[1.45] mb-8 text-vrt-black max-w-3xl">
                      “{quote.text}”
                    </p>

                    {/* Divider */}
                    <div className="w-12 h-[2px] bg-vrt-red mb-8"></div>

                    {/* Attribution */}
                    <div className="flex flex-col items-center">
                      <h4 className="font-black uppercase tracking-[0.3em] text-sm text-vrt-black mb-1">
                        {quote.author}
                      </h4>
                      <p className="text-[11px] font-bold text-vrt-gray-light uppercase tracking-[0.2em]">
                        {quote.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center md:justify-between items-center mt-12 md:mt-0 md:absolute md:top-1/2 md:-translate-y-1/2 md:-left-12 md:-right-12 pointer-events-none gap-6">
            <button 
              onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
              className="w-16 h-16 rounded-full bg-vrt-black text-white shadow-2xl flex items-center justify-center hover:bg-vrt-red transition-all duration-300 pointer-events-auto active:scale-95 group"
              aria-label="Previous testimonial"
            >
              <span className="material-symbols-outlined text-3xl group-hover:-translate-x-1 transition-transform">west</span>
            </button>
            <button 
              onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
              className="w-16 h-16 rounded-full bg-vrt-black text-white shadow-2xl flex items-center justify-center hover:bg-vrt-red transition-all duration-300 pointer-events-auto active:scale-95 group"
              aria-label="Next testimonial"
            >
              <span className="material-symbols-outlined text-3xl group-hover:translate-x-1 transition-transform">east</span>
            </button>
          </div>
        </div>

        {/* Premium Progress Indicators & Counter */}
        <div className="mt-20 max-w-xs mx-auto">
          <div className="flex flex-col items-center gap-8">
            <div className="w-full h-px bg-vrt-black/10 relative">
              <div 
                className="absolute top-0 h-1 bg-vrt-red transition-all duration-700 -translate-y-1/2" 
                style={{ 
                  left: `${(currentIndex / (QUOTES.length - 1)) * 100}%`,
                  width: `${100 / QUOTES.length}%`,
                  transform: `translateX(-${currentIndex === 0 ? 0 : 50}%) translateY(-50%)`
                }}
              ></div>
              <div className="flex justify-between absolute w-full top-0 -translate-y-1/2">
                {QUOTES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setIsAutoPlaying(false);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-500 border-2 ${
                      currentIndex === idx ? 'bg-vrt-red border-vrt-red scale-125' : 'bg-white border-vrt-black/20 hover:border-vrt-red'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* <div className="flex items-center gap-12 pt-4">
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-black text-vrt-gray-light tracking-widest uppercase mb-1">Current</span>
                <span className="text-3xl font-serif font-black text-vrt-red">{String(currentIndex + 1).padStart(2, '0')}</span>
              </div>
              <div className="w-px h-12 bg-vrt-black/10"></div>
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-black text-vrt-gray-light tracking-widest uppercase mb-1">Total</span>
                <span className="text-3xl font-serif font-black text-vrt-black">{String(QUOTES.length).padStart(2, '0')}</span>
              </div>
            </div> */}
          </div>
        </div>
{/* 
        <div className="mt-24 text-center">
           <p className="text-vrt-gray-light text-[11px] font-bold uppercase tracking-[0.2em] mb-10">Real Stories. Real Metrics. Real Growth.</p>
           <button className="bg-vrt-black text-white px-12 py-6 text-sm font-black uppercase tracking-[0.2em] hover:bg-vrt-red transition-all btn-hover-effect flex items-center gap-4 mx-auto">
             View Success Case Studies
             <span className="material-symbols-outlined">analytics</span>
           </button>
        </div> */}
      </div>
    </div>
  );
};
