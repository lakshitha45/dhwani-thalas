import React from 'react';
import { BookOpen, Music2 } from 'lucide-react';
import { calculateAksharas, getAngaBreakdown } from '../data/talas';

export default function RhythmInfo({ tala, jati }) {
  const totalAksharas = calculateAksharas(tala, jati);
  const angaBreakdown = getAngaBreakdown(tala, jati);

  return (
    <section className="w-full rounded-2xl bg-[#12131D]/90 border border-zinc-800/80 p-5 sm:p-6 mb-8 text-zinc-300 shadow-xl">
      <div className="flex items-center gap-2 mb-4 pb-2.5 border-b border-zinc-800/80">
        <BookOpen className="w-4 h-4 text-[#C9A24B]" />
        <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E5C365] font-sans-body">
          Rhythm & Classical Context
        </h4>
      </div>

      {/* 2-Column Desktop Grid / Clean Vertical Stack on Mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Left Column: Tala Meaning & Performance Context */}
        <div className="lg:col-span-2 space-y-3.5">
          <p className="text-sm leading-relaxed text-zinc-200 font-sans-body">
            <span className="text-[#E5C365] font-semibold">{tala.name} Tala</span>{' '}
            <span className="text-zinc-400 font-serif-sub italic font-normal">({tala.sanskrit})</span>: {tala.description}
          </p>
          <p className="text-xs leading-relaxed text-zinc-300 font-sans-body flex items-start gap-2">
            <span className="text-[#E5C365] mt-0.5 font-bold flex-shrink-0">✦</span>
            <span>{tala.classicalNote}</span>
          </p>

          {tala.popularKritis && tala.popularKritis.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 pt-1.5">
              <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-medium font-sans-body flex items-center gap-1">
                <Music2 className="w-3.5 h-3.5 text-[#C9A24B]" />
                Representative Compositions:
              </span>
              {tala.popularKritis.map((kriti, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-full text-[11px] bg-[#171926] text-zinc-200 border border-zinc-700/60 font-sans-body shadow-sm"
                >
                  {kriti}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Right Column / Sidebar: Anga Gesture Breakdown */}
        <div className="bg-[#0C0D14]/90 rounded-xl p-4 border border-zinc-800/80 flex flex-col justify-between text-xs shadow-inner">
          <div>
            <div className="text-[10px] uppercase font-mono-numeric tracking-wider text-zinc-400 mb-2.5 font-semibold">
              Anga Gesture Breakdown
            </div>
            <div className="space-y-2">
              {angaBreakdown.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between text-[11px] pb-1 border-b border-zinc-850/50 last:border-0">
                  <span className="text-zinc-200 font-medium">
                    <span className="text-[#E5C365] font-mono-numeric font-bold mr-1">{item.symbol}</span>
                    {item.angaName}
                  </span>
                  <span className="font-mono-numeric text-[#E5C365] font-semibold">
                    {item.count} {item.count === 1 ? 'akshara' : 'aksharas'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs">
            <span className="text-zinc-400 font-sans-body">Total per Avartanam</span>
            <span className="font-mono-numeric font-bold text-[#E5C365] text-sm">
              {totalAksharas} Aksharas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
