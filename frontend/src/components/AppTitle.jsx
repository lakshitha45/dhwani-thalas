import React from 'react';
import { Sparkles, Music } from 'lucide-react';

export default function AppTitle() {
  return (
    <header className="pt-8 pb-6 text-center relative z-10">
      {/* Decorative Top Accent Tag */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181926]/90 border border-[#C9A24B]/30 text-[#C9A24B] text-[11px] font-semibold tracking-[0.22em] uppercase mb-3 shadow-[0_0_15px_rgba(201,162,75,0.12)]">
        <Sparkles className="w-3 h-3 text-[#E5C365]" />
        <span>Sapta Tala Explorer</span>
      </div>

      {/* Main Serif Display Title */}
      <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-100 flex items-center justify-center gap-3">
        <span className="gold-shimmer">Dhwani</span>
        <span className="text-zinc-100 font-light italic font-serif-sub">Thalas</span>
      </h1>

      {/* Subtitle / Eyebrow */}
      <p className="mt-2 text-xs sm:text-sm font-medium tracking-[0.25em] uppercase text-zinc-400 font-sans-body flex items-center justify-center gap-2">
        <span className="inline-block w-6 h-px bg-gradient-to-r from-transparent to-[#C9A24B]/50"></span>
        Carnatic Rhythm, Explored
        <span className="inline-block w-6 h-px bg-gradient-to-l from-transparent to-[#C9A24B]/50"></span>
      </p>
    </header>
  );
}
