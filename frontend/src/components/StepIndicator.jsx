import React from 'react';
import { Check, Music, Layers, Sparkles } from 'lucide-react';

export default function StepIndicator({ selectedTala, selectedJati, totalBeats, isPlaying }) {
  const steps = [
    {
      number: 1,
      label: 'Tala',
      value: selectedTala ? `${selectedTala.name} (${selectedTala.symbol})` : 'Select Tala',
      isComplete: !!selectedTala,
      icon: Layers
    },
    {
      number: 2,
      label: 'Jati',
      value: selectedJati ? `${selectedJati.name} (${selectedJati.count})` : 'Choose Jati',
      isComplete: !!selectedJati,
      icon: Sparkles
    },
    {
      number: 3,
      label: 'Practice',
      value: isPlaying ? 'Metronome Active' : `${totalBeats} Beats / Cycle`,
      isComplete: isPlaying,
      icon: Music
    }
  ];

  return (
    <nav aria-label="Configuration Progress" className="w-full mb-6 max-w-2xl mx-auto px-1">
      <div className="bg-[#11121A]/80 border border-zinc-800/80 rounded-2xl p-2 sm:p-2.5 backdrop-blur-md shadow-lg">
        <div className="flex items-center justify-between">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;
            const isActive = idx === 2 ? isPlaying : true;

            return (
              <React.Fragment key={step.number}>
                <div className="flex items-center gap-2 sm:gap-2.5 flex-1 min-w-0 px-1 sm:px-2">
                  {/* Step Number Circle */}
                  <div
                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-mono-numeric font-bold transition-all duration-300 flex-shrink-0 ${
                      step.isComplete
                        ? 'bg-gradient-to-tr from-[#C9A24B] to-[#E5C365] text-[#0C0D12] shadow-[0_0_10px_rgba(201,162,75,0.4)]'
                        : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                    }`}
                  >
                    {step.number}
                  </div>

                  {/* Step Info */}
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] uppercase tracking-wider font-semibold text-zinc-500 font-sans-body">
                      Step {step.number}
                    </div>
                    <div className="text-xs sm:text-sm font-medium font-serif-display text-zinc-200 truncate">
                      <span className={step.isComplete ? 'text-[#E5C365]' : 'text-zinc-300'}>
                        {step.value}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Connecting Line between steps */}
                {!isLast && (
                  <div className="w-4 sm:w-8 h-px bg-gradient-to-r from-[#C9A24B]/40 to-[#C9A24B]/20 flex-shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
