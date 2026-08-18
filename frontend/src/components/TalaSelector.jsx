import React from 'react';

export default function TalaSelector({ talas, selected, onSelect }) {
  return (
    <section className="w-full mb-6">
      <div className="flex items-center justify-between mb-2.5 px-1">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24B]"></span>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-300 font-sans-body">
            1. Select Sapta Tala
          </h2>
        </div>
        <span className="text-[11px] text-zinc-500 font-mono-numeric">
          7 Primary Talas
        </span>
      </div>

      {/* Tala Cards — Mobile Swipe / Desktop 7-Col Grid */}
      <div className="flex sm:grid overflow-x-auto sm:overflow-visible snap-touch-row scrollbar-thin pb-2 sm:pb-0 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
        {talas.map((tala) => {
          const isSelected = selected?.id === tala.id;
          // Give Eka card equal descriptive balance
          const angaDisplay = tala.id === 'eka'
            ? 'Laghu · Simplest 1-anga cycle'
            : tala.anga.join(' · ');

          return (
            <button
              key={tala.id}
              onClick={() => onSelect(tala)}
              title={`${tala.name} Tala (${tala.sanskrit}) · ${tala.symbol} · ${tala.anga.join(' · ')}`}
              className={`group relative text-left p-3 rounded-xl transition-all duration-200 border cursor-pointer h-full min-h-[128px] flex flex-col justify-between min-w-[135px] sm:min-w-0 snap-start flex-shrink-0 sm:flex-shrink ${
                isSelected
                  ? 'bg-gradient-to-b from-[#1E2032] to-[#131422] border-[#E5C365] selected-card-glow ring-1 ring-[#E5C365]/40 z-10'
                  : 'bg-[#12131C]/90 border-zinc-800/80 hover:border-zinc-600 hover:bg-[#161725] hover:-translate-y-0.5'
              }`}
            >
              {/* Active Corner Indicator */}
              {isSelected && (
                <span className="absolute top-2 right-2 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5C365] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C9A24B]"></span>
                </span>
              )}

              <div>
                <div className="flex items-baseline justify-between mb-1 pr-3">
                  <span
                    className={`font-serif-display text-lg font-bold transition-colors ${
                      isSelected ? 'text-[#E5C365]' : 'text-zinc-200 group-hover:text-zinc-100'
                    }`}
                  >
                    {tala.name}
                  </span>
                  <span className="text-[11px] font-serif-sub italic text-zinc-500">
                    {tala.sanskrit}
                  </span>
                </div>

                {/* Anga Notation tag */}
                <div className="flex items-center gap-1 my-1">
                  <span className="text-[11px] font-mono-numeric tracking-wider font-semibold text-[#E5C365] bg-[#C9A24B]/15 px-1.5 py-0.5 rounded border border-[#C9A24B]/30">
                    {tala.symbol}
                  </span>
                </div>
              </div>

              {/* Anga Structure with balanced visual weight */}
              <div className="mt-2 pt-2 border-t border-zinc-800/60">
                <p className="text-[11px] leading-snug text-zinc-400 group-hover:text-zinc-300 font-sans-body line-clamp-2">
                  {angaDisplay}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
