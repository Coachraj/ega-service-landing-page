
import React from 'react';

export const Stats: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark py-4">
      <div className="mx-auto max-w-lg px-4">
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          <div className="flex min-w-[160px] flex-1 flex-col gap-1 rounded-xl bg-white dark:bg-slate-800 p-5 shadow-sm border border-slate-100 dark:border-slate-700">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Experience</p>
            <p className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">40+ Years</p>
          </div>
          <div className="flex min-w-[160px] flex-1 flex-col gap-1 rounded-xl bg-white dark:bg-slate-800 p-5 shadow-sm border border-slate-100 dark:border-slate-700">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Coached</p>
            <p className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">1,420+ CEOs</p>
          </div>
        </div>
      </div>
    </div>
  );
};
