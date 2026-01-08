
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

export const AIGrowthAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: 'Welcome to VRT Intelligence. I am your Strategic Assistant. How can I help you diagnose your scaling bottlenecks today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg = inputValue;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputValue('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages.map(m => ({
            role: m.role,
            parts: [{ text: m.text }]
        })), { role: 'user', parts: [{ text: userMsg }] }],
        config: {
          systemInstruction: `You are the AI Strategy Module for VRT Management. EGA program.
          Lead Coach: Rajesh Tedla.
          Core Mission: "Growth As A Process".
          Goal: Help CEOs/Owners understand where they are stuck (People/Process/Strategy) and push them toward booking a complimentary 45-min call.
          Tone: Elite, professional, analytical, concise.
          Max 3 sentences per response. Always reference the 2026 cohort if relevant.`,
          temperature: 0.6,
        },
      });

      const aiText = response.text || "I encountered a processing error. Please rephrase your query.";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Strategic module offline. Please check your connection." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-vrt-black text-white shadow-2xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 border-t-2 border-vrt-red group"
      >
        <span className="material-symbols-outlined text-4xl group-hover:text-vrt-red transition-colors">
          {isOpen ? 'close' : 'neurology'}
        </span>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vrt-red opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-vrt-red"></span>
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-28 right-8 z-[60] w-[380px] max-h-[550px] flex flex-col glass-dark shadow-2xl overflow-hidden animate-fade-in-up border-t-4 border-vrt-red">
          <div className="p-5 bg-vrt-black border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 bg-vrt-red flex items-center justify-center">
                 <span className="material-symbols-outlined text-white text-lg">psychology</span>
               </div>
               <div>
                 <p className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Strategic Assistant</p>
                 <p className="text-[8px] text-vrt-red font-black tracking-widest uppercase animate-pulse">Online & Ready</p>
               </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="flex-grow overflow-y-auto p-5 space-y-6 no-scrollbar bg-black/40"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 text-xs font-medium leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-vrt-red text-white' 
                    : 'bg-white/5 text-slate-200 border border-white/10'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-4 flex gap-1.5 items-center">
                  <div className="w-1.5 h-1.5 bg-vrt-red animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-vrt-red animate-bounce [animation-delay:-.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-vrt-red animate-bounce [animation-delay:-.3s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-5 bg-vrt-black border-t border-white/10">
            <div className="relative group">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="DESCRIBE YOUR CURRENT BOTTLENECK..."
                className="w-full bg-white/5 border border-white/10 pl-4 pr-12 py-4 text-[10px] font-black text-white focus:outline-none focus:border-vrt-red transition-all placeholder:text-white/20 tracking-widest uppercase"
              />
              <button 
                onClick={handleSendMessage}
                disabled={isLoading}
                className="absolute right-3 top-3.5 text-vrt-red hover:text-white transition-colors p-1"
              >
                <span className="material-symbols-outlined text-2xl">send</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
