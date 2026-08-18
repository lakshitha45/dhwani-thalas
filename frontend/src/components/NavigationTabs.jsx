import React from 'react';
import { Drum, Sparkles, Home } from 'lucide-react';

export default function NavigationTabs({ currentView, onViewChange }) {
  return (
    <header className="w-full sticky top-0 z-50 flex justify-center py-2.5 px-4 bg-[#140307]/95 backdrop-blur-xl border-b border-[#E5A93C]/25 shadow-[0_4px_30px_rgba(0,0,0,0.85)]">
      <nav aria-label="Main Navigation" className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-[#1A040A]/90 border border-[#E5A93C]/40 shadow-inner">
        
        {/* 1. Landing Hub Tab */}
        <button
          onClick={() => onViewChange('hub')}
          className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
            currentView === 'hub'
              ? 'bg-gradient-to-r from-[#BA1C3E] to-[#E5A93C] text-[#FFFDF5] shadow-[0_0_20px_rgba(229,169,60,0.5)] font-marcellus'
              : 'text-zinc-400 hover:text-zinc-200 hover:bg-[#250810]'
          }`}
        >
          <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F7D070]" />
          <span>Landing Hub</span>
        </button>

        {/* 2. Dhwani Thalas Tab */}
        <button
          onClick={() => onViewChange('thalas')}
          className={`flex items-center gap-2 px-3.5 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
            currentView === 'thalas'
              ? 'bg-gradient-to-r from-[#C9A24B] to-[#E5C365] text-[#0C0D12] shadow-[0_0_20px_rgba(201,162,75,0.5)] font-sans-body font-bold'
              : 'text-zinc-400 hover:text-[#F7D070] hover:bg-[#250810]'
          }`}
        >
          <Drum className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300" />
          <span>Dhwani Thalas</span>
          <span className="text-[10px] uppercase font-mono-numeric tracking-wider opacity-80 hidden md:inline">
            (Tala Practice)
          </span>
        </button>

        {/* 3. HastaVidya Tab */}
        <button
          onClick={() => onViewChange('hastavidya')}
          className={`flex items-center gap-2 px-3.5 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
            currentView === 'hastavidya'
              ? 'bg-gradient-to-r from-[#7A1220] via-[#BA1C3E] to-[#0D9488] text-[#FFFDF5] shadow-[0_0_22px_rgba(229,169,60,0.6)] font-marcellus font-bold border border-[#E5A93C]/40'
              : 'text-zinc-400 hover:text-[#F7D070] hover:bg-[#250810]'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F7D070]" />
          <span>HastaVidya</span>
          <span className="text-[10px] uppercase font-mono-numeric tracking-wider opacity-85 hidden md:inline">
            (Mudras &amp; Bhedas)
          </span>
        </button>

      </nav>
    </header>
  );
}
