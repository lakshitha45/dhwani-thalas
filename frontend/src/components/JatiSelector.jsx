import React from 'react';

export default function JatiSelector({ jatis, selected, onSelect }) {
  return (
    <section className="w-full mb-6">
      <div className="flex items-center justify-between mb-2.5 px-1">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24B]/90"></span>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-300 font-sans-body">
            2. Choose Laghu Jati
          </h2>
          <span className="text-[10px] text-zinc-500 italic hidden sm:inline">
            (Determines beat count of Laghu)
          </span>
        </div>
        <span className="text-[11px] text-zinc-500 font-mono-numeric">
          5 Traditional Jatis
        </span>
      </div>

      {/* Jati Cards — Mobile Swipe / Desktop 5-Col Grid */}
      <div className="flex sm:grid overflow-x-auto sm:overflow-visible snap-touch-row scrollbar-thin pb-2 sm:pb-0 gap-2.5 sm:grid-cols-5">
        {jatis.map((jati) => {
          const isSelected = selected?.id === jati.id;
          return (
            <button
              key={jati.id}
              onClick={() => onSelect(jati)}
              title={`${jati.name} Jati (${jati.count} Aksharas) · ${jati.syllables}`}
              className={`group relative text-left p-3 rounded-xl transition-all duration-200 border cursor-pointer h-full min-h-[96px] flex flex-col justify-between min-w-[140px] sm:min-w-0 snap-start flex-shrink-0 sm:flex-shrink ${
                isSelected
                  ? 'bg-gradient-to-b from-[#1D1F2F] to-[#131420] border-[#E5C365] selected-card-glow ring-1 ring-[#E5C365]/40 z-10'
                  : 'bg-[#11121A]/85 border-zinc-800/80 hover:border-zinc-600 hover:bg-[#151624] hover:-translate-y-0.5'
              }`}
            >
              {/* Active Pip Indicator */}
              {isSelected && (
                <span className="absolute top-2 right-2 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5C365] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C9A24B]"></span>
                </span>
              )}

              <div>
                <div className="flex items-center justify-between pr-3">
                  <span
                    className={`font-serif-display text-base font-semibold transition-colors ${
                      isSelected ? 'text-[#E5C365]' : 'text-zinc-200 group-hover:text-zinc-100'
                    }`}
                  >
                    {jati.name}
                  </span>
                  <span
                    className={`inline-flex items-center justify-center text-xs font-mono-numeric font-bold px-2 py-0.5 rounded-full transition-colors ${
                      isSelected
                        ? 'bg-[#E5C365] text-[#0C0D12]'
                        : 'bg-zinc-800 text-zinc-400 group-hover:text-zinc-200'
                    }`}
                  >
                    {jati.count}
                  </span>
                </div>
              </div>

              {/* Syllable string single line with truncation and tooltip */}
              <div className="mt-2 pt-1.5 border-t border-zinc-800/60 w-full overflow-hidden">
                <span
                  className="block text-[11px] font-mono-numeric text-zinc-400 group-hover:text-zinc-300 truncate w-full"
                  title={jati.syllables}
                >
                  {jati.syllables}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
