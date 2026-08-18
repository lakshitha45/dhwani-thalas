import React, { useRef } from 'react';
import { 
  Play, 
  Pause, 
  Minus, 
  Plus, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  Gauge 
} from 'lucide-react';

export default function PlayerControls({
  isPlaying,
  onTogglePlay,
  bpm,
  onBpmChange,
  currentBeat,
  totalBeats,
  soundEnabled,
  onToggleSound,
  onResetBeat
}) {
  const lastTapRef = useRef(0);

  // Tap Tempo calculation
  const handleTapTempo = () => {
    const now = Date.now();
    if (lastTapRef.current) {
      const diff = now - lastTapRef.current;
      if (diff > 250 && diff < 2000) {
        const calculatedBpm = Math.round(60000 / diff);
        const clamped = Math.max(40, Math.min(200, calculatedBpm));
        onBpmChange(clamped);
      }
    }
    lastTapRef.current = now;
  };

  const getLayaCategory = (val) => {
    if (val <= 65) return 'Vilamba Laya (Slow)';
    if (val <= 120) return 'Madhyama Laya (Medium)';
    return 'Druta Laya (Fast)';
  };

  return (
    <section className="w-full relative rounded-2xl bg-gradient-to-b from-[#161724] to-[#0E0F17] border border-zinc-800/90 p-6 sm:p-7 shadow-2xl mb-8">
      <div className="flex flex-col items-center">
        {/* Metronome Beat Pulse Status Bar */}
        <div className="w-full flex items-center justify-between mb-4 pb-3 border-b border-zinc-800/60 text-xs">
          <div className="flex items-center gap-2.5">
            <div className="relative flex items-center justify-center">
              <span
                className={`w-3 h-3 rounded-full transition-all duration-100 ${
                  isPlaying
                    ? 'bg-[#E5C365] shadow-[0_0_12px_#E5C365]'
                    : 'bg-zinc-700'
                }`}
              />
              {isPlaying && (
                <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-[#E5C365] opacity-50"></span>
              )}
            </div>
            <span className="font-mono-numeric text-zinc-300 text-[11px] uppercase tracking-wider">
              {isPlaying ? (
                <span className="text-[#E5C365] font-semibold">
                  Metronome Active · Beat {currentBeat}/{totalBeats}
                </span>
              ) : (
                'Metronome Idle'
              )}
            </span>
          </div>
        </div>

        {/* Primary Circular Gold Play / Pause Button */}
        <div className="relative my-2 flex items-center justify-center">
          {isPlaying && (
            <div className="absolute w-36 h-36 rounded-full bg-[#C9A24B]/20 blur-xl animate-pulse pointer-events-none" />
          )}

          <button
            onClick={onTogglePlay}
            aria-label={isPlaying ? 'Pause rhythm cycle' : 'Play rhythm cycle'}
            className={`relative group w-20 h-20 sm:w-22 sm:h-22 rounded-full flex items-center justify-center transition-all duration-300 transform active:scale-95 cursor-pointer ${
              isPlaying
                ? 'bg-gradient-to-tr from-[#C9A24B] via-[#E5C365] to-[#FFF2B2] text-[#0C0D12] shadow-[0_0_35px_rgba(201,162,75,0.6)] animate-gold-pulse'
                : 'bg-gradient-to-tr from-[#8F6F26] via-[#C9A24B] to-[#E5C365] text-[#0C0D12] shadow-[0_0_20px_rgba(201,162,75,0.35)] hover:shadow-[0_0_30px_rgba(201,162,75,0.55)] hover:scale-105'
            }`}
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 sm:w-9 sm:h-9 fill-current" />
            ) : (
              <Play className="w-8 h-8 sm:w-9 sm:h-9 fill-current ml-1" />
            )}
          </button>
        </div>

        <div className="mt-3 text-center">
          <p className="text-xs font-mono-numeric uppercase tracking-[0.2em] text-zinc-400">
            {isPlaying ? 'Cycle Running' : 'Click to Start Cycle'}
          </p>
        </div>

        {/* Tempo & BPM Controls Container */}
        <div className="w-full max-w-lg mt-6 pt-5 border-t border-zinc-800/80">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1.5 text-xs text-zinc-300">
              <Gauge className="w-4 h-4 text-[#C9A24B]" />
              <span className="uppercase tracking-wider font-semibold font-sans-body">Tempo Control</span>
            </div>

            <div className="flex items-baseline gap-1.5">
              <span className="font-mono-numeric text-2xl sm:text-3xl font-bold text-[#E5C365]">
                {bpm}
              </span>
              <span className="text-xs font-mono-numeric text-zinc-400 uppercase">BPM</span>
              <span className="text-[11px] text-zinc-400 font-sans-body ml-2 hidden sm:inline">
                ({getLayaCategory(bpm)})
              </span>
            </div>
          </div>

          {/* Stepper + Slider */}
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => onBpmChange(Math.max(40, bpm - 5))}
              disabled={bpm <= 40}
              className="p-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-700/80 border border-zinc-700 text-zinc-200 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
              title="-5 BPM"
            >
              <Minus className="w-4 h-4" />
            </button>

            <div className="relative flex-1 flex items-center">
              <input
                type="range"
                min="40"
                max="200"
                step="1"
                value={bpm}
                onChange={(e) => onBpmChange(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#C9A24B] focus:outline-none focus:ring-1 focus:ring-[#C9A24B]/50"
              />
            </div>

            <button
              onClick={() => onBpmChange(Math.min(200, bpm + 5))}
              disabled={bpm >= 200}
              className="p-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-700/80 border border-zinc-700 text-zinc-200 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
              title="+5 BPM"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Laya Presets & INLINE Audio Toggle */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] uppercase font-mono-numeric text-zinc-500 mr-0.5">Presets:</span>
              <button
                onClick={() => onBpmChange(60)}
                className={`px-2.5 py-1 rounded text-[11px] font-mono-numeric border transition-all cursor-pointer ${
                  bpm === 60 ? 'bg-[#C9A24B]/20 border-[#C9A24B] text-[#E5C365]' : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-zinc-100'
                }`}
              >
                Vilamba (60)
              </button>
              <button
                onClick={() => onBpmChange(80)}
                className={`px-2.5 py-1 rounded text-[11px] font-mono-numeric border transition-all cursor-pointer ${
                  bpm === 80 ? 'bg-[#C9A24B]/20 border-[#C9A24B] text-[#E5C365]' : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-zinc-100'
                }`}
              >
                Madhyama (80)
              </button>
              <button
                onClick={() => onBpmChange(140)}
                className={`px-2.5 py-1 rounded text-[11px] font-mono-numeric border transition-all cursor-pointer ${
                  bpm === 140 ? 'bg-[#C9A24B]/20 border-[#C9A24B] text-[#E5C365]' : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-zinc-100'
                }`}
              >
                Druta (140)
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleTapTempo}
                className="px-2.5 py-1 rounded-md bg-zinc-800/80 hover:bg-zinc-700/80 border border-zinc-700/80 text-zinc-200 font-mono-numeric text-[11px] active:scale-95 transition-all cursor-pointer"
                title="Tap rhythmically to set BPM"
              >
                Tap Tempo
              </button>

              <button
                onClick={onResetBeat}
                className="p-1.5 rounded-md bg-zinc-800/60 hover:bg-zinc-700/60 border border-zinc-700 text-zinc-300 hover:text-zinc-100 transition-all cursor-pointer"
                title="Reset to Beat 1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              {/* Inline Audio Toggle */}
              <button
                onClick={onToggleSound}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11px] font-sans-body font-medium transition-all cursor-pointer ${
                  soundEnabled
                    ? 'bg-[#C9A24B]/20 border-[#C9A24B]/50 text-[#E5C365]'
                    : 'bg-zinc-800/80 border-zinc-700/70 text-zinc-400 hover:text-zinc-200'
                }`}
                title="Toggle synthesized Talam click sound"
              >
                {soundEnabled ? (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-[#E5C365]" />
                    <span>Audio On</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Muted</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
