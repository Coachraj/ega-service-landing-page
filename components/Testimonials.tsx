
import React, { useState, useEffect, useCallback, useRef } from 'react';

const QUOTES = [
  {
    text: "“The ability to ask powerful questions… transformed me as a leader. Rajesh's insights are surgical and effective.”",
    author: "Melissa Uribe Gil",
    role: "EVP, Costex Tractor Parts"
  },
  {
    text: "“Our business grew by 130%… leadership team is aligned… clarity and vision like never before. The EGA process is a game changer.”",
    author: "Francesco Pagano",
    role: "President, Interpreters and Translators, Inc."
  },
  {
    text: "“Raj taught me how to profile the ‘WHY’ behind our actions using data… goes beyond theories into real-world results.”",
    author: "Lara Cattaneo",
    role: "Clinical Psychologist"
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
            <span className="material-symbols-outlined absolute top-8 left-8 text-vrt-red/5 text-[140px] select-none pointer-events-none">format_quote</span>
            
            <div 
              className="flex transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1)" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {QUOTES.map((quote, idx) => (
                <div key={idx} className="w-full flex-shrink-0">
                  <div className="flex flex-col items-center text-center">
                    <p className="text-2xl md:text-4xl font-serif font-medium leading-[1.4] mb-12 text-vrt-black max-w-3xl mx-auto italic">
                      {quote.text}
                    </p>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-1 bg-vrt-red mb-8"></div>
                      <h4 className="font-black uppercase tracking-[0.3em] text-base text-vrt-black mb-2">{quote.author}</h4>
                      <p className="text-[10px] font-bold text-vrt-gray-light uppercase tracking-[0.2em]">{quote.role}</p>
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
            
            <div className="flex items-center gap-12 pt-4">
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-black text-vrt-gray-light tracking-widest uppercase mb-1">Current</span>
                <span className="text-3xl font-serif font-black text-vrt-red">{String(currentIndex + 1).padStart(2, '0')}</span>
              </div>
              <div className="w-px h-12 bg-vrt-black/10"></div>
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-black text-vrt-gray-light tracking-widest uppercase mb-1">Total</span>
                <span className="text-3xl font-serif font-black text-vrt-black">{String(QUOTES.length).padStart(2, '0')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
           <p className="text-vrt-gray-light text-[11px] font-bold uppercase tracking-[0.2em] mb-10">Real Stories. Real Metrics. Real Growth.</p>
           <button className="bg-vrt-black text-white px-12 py-6 text-sm font-black uppercase tracking-[0.2em] hover:bg-vrt-red transition-all btn-hover-effect flex items-center gap-4 mx-auto">
             View Success Case Studies
             <span className="material-symbols-outlined">analytics</span>
           </button>
        </div>
      </div>
    </div>
  );
};
