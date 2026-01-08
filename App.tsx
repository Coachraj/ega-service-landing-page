
import React from 'react';
import { StickyAlert } from './components/StickyAlert';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { PositioningHeadline } from './components/PositioningHeadline';
import { TargetAudience } from './components/TargetAudience';
import { ProblemSection } from './components/ProblemSection';
import { TrainingAreas } from './components/TrainingAreas';
import { Assessment } from './components/Assessment';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { AIGrowthAssistant } from './components/AIGrowthAssistant';
import { AboutRajesh } from './components/AboutRajesh';

const MethodologyStrip: React.FC = () => (
  <div className="bg-vrt-black py-16 border-y border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {[
          { icon: 'groups', label: 'People', sub: 'Right seats, Leadership, Accountability' },
          { icon: 'account_tree', label: 'Processes', sub: 'How work gets done consistently' },
          { icon: 'rocket_launch', label: 'Strategy', sub: 'Clear plan, Quarterly execution' }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center group">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-vrt-red transition-colors duration-500">
              <span className="material-symbols-outlined text-vrt-red group-hover:text-white text-3xl">{item.icon}</span>
            </div>
            <h3 className="text-white text-xl font-black uppercase tracking-widest mb-2">{item.label}</h3>
            <p className="text-slate-400 text-sm max-w-[200px]">{item.sub}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen selection:bg-vrt-red selection:text-white">
      <StickyAlert />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features /> {/* What You Get */}
        <PositioningHeadline /> {/* Growth is a process */}
        <MethodologyStrip />
        <AboutRajesh /> {/* Meet the Coach */}
        <ProblemSection /> {/* Real reason businesses stall */}
        <TargetAudience /> {/* Who this is for */}
        <TrainingAreas /> {/* EGA Core Areas */}
        <Assessment /> {/* The EDGE differentiator */}
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <AIGrowthAssistant />
    </div>
  );
};

export default App;
