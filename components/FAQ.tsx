
import React from 'react';

const FAQS = [
  {
    q: 'Is the strategy call really complementary?',
    a: 'Yes. It’s a working session designed to deliver clarity and next steps.'
  },
  {
    q: 'What if I’m not sure what the real problem is?',
    a: 'That’s exactly what we diagnose—then we prioritize what matters most.'
  },
  {
    q: 'Do you work with any industry?',
    a: 'VRT is focused on USA-based SMBs and entrepreneurs. If you’re scaling complexity—people, operations, execution—this applies.'
  },
  {
    q: 'Will you give me a plan even if I don’t join EGA™?',
    a: 'You’ll leave the call with clearer priorities and next actions either way.'
  }
];

export const FAQ: React.FC = () => {
  return (
    <div className="py-32 bg-white">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-serif text-4xl font-black text-vrt-black mb-16 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {FAQS.map((faq, idx) => (
            <details key={idx} className="group border-b border-slate-100 pb-6 cursor-pointer">
              <summary className="flex justify-between items-center list-none outline-none">
                <span className="text-lg font-black uppercase tracking-tight text-vrt-black">{faq.q}</span>
                <span className="material-symbols-outlined text-vrt-red transition group-open:rotate-180">expand_more</span>
              </summary>
              <p className="mt-6 text-vrt-gray leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};
