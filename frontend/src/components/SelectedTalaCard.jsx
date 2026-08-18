import React, { useRef } from 'react';
import { 
  calculateAksharas, 
  getAngaBreakdown, 
  getAngaBeats, 
  getTraditionalTalaAlias 
} from '../data/talas';
import { 
  Activity, 
  Clock, 
  Layers, 
  Play, 
  Pause, 
  Minus, 
  Plus, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  Gauge 
} from 'lucide-react';

export default function SelectedTalaCard({ 
  tala, 
  jati, 
  currentBeat = 1, 
  totalBeats,
  isPlaying = false,
  onTogglePlay,
  bpm = 80,
  onBpmChange,
  soundEnabled = true,
  onToggleSound,
  onResetBeat
}) {
  const calculatedTotalBeats = totalBeats || calculateAksharas(tala, jati);
  const angaBreakdown = getAngaBreakdown(tala, jati);
  const angaGroups = getAngaBeats(tala, jati);
  const traditionalAlias = getTraditionalTalaAlias(tala, jati);
  const lastTapRef = useRef(0);

  // Tap Tempo calculation
  const handleTapTempo = () => {
    const now = Date.now();
    if (lastTapRef.current) {
      const diff = now - lastTapRef.current;
      if (diff > 250 && diff < 2000) {
        const calculatedBpm = Math.round(60000 / diff);
        const clamped = Math.max(40, Math.min(200, calculatedBpm));
        if (onBpmChange) onBpmChange(clamped);
      }
    }
    lastTapRef.current = now;
  };

  const getLayaCategory = (val) => {
    if (val <= 65) return 'Vilamba Laya (Slow)';
    if (val <= 120) return 'Madhyama Laya (Medium)';
    return 'Druta Laya (Fast)';
  };

  const cycleProgress = calculatedTotalBeats > 0 
    ? Math.round((currentBeat / calculatedTotalBeats) * 100) 
    : 0;

  return (
    <section className="w-full relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#181A28] via-[#12131F] to-[#0D0E16] border border-[#C9A24B]/50 gold-glow p-5 sm:p-7 shadow-2xl mb-8">
      {/* Subtle stage spotlight effect */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#C9A24B]/15 blur-3xl pointer-events-none rounded-full" />

      {/* 1. Top Header Row: Active Configuration */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-zinc-800/80">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="text-[11px] font-mono-numeric font-medium tracking-[0.2em] uppercase text-[#E5C365]">
              Active Configuration
            </span>
            {traditionalAlias && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#C9A24B]/15 text-[#E5C365] border border-[#C9A24B]/30">
                ★ {traditionalAlias}
              </span>
            )}
          </div>
          <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-zinc-100 flex flex-wrap items-baseline gap-2">
            <span>{jati.name} Jati</span>
            <span className="text-[#E5C365]">{tala.name} Tala</span>
          </h3>
        </div>

        {/* Total Akshara Highlight Badge */}
        <div className="flex items-center gap-3 bg-[#0C0D13]/90 border border-[#C9A24B]/40 px-4 py-2.5 rounded-xl shadow-inner self-start sm:self-auto">
          <Clock className="w-5 h-5 text-[#C9A24B]" />
          <div>
            <div className="text-[10px] uppercase font-mono-numeric tracking-wider text-zinc-400">
              Total Aksharas
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold font-mono-numeric text-[#E5C365]">
                {calculatedTotalBeats}
              </span>
              <span className="text-xs text-zinc-400 font-sans-body">Beats / Cycle (Avartanam)</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Anga Formula & Details Strip */}
      <div className="py-4 flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm border-b border-zinc-800/60">
        <span className="text-zinc-400 font-sans-body flex items-center gap-1">
          <Layers className="w-4 h-4 text-[#C9A24B]" />
          <strong className="text-zinc-300">Anga Formula:</strong>
        </span>

        <div className="flex flex-wrap items-center gap-1.5 font-mono-numeric">
          {angaBreakdown.map((item, idx) => (
            <React.Fragment key={idx}>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#131520] border border-zinc-700/60 text-zinc-200">
                <span className="font-bold text-[#E5C365]">{item.symbol}</span>
                <span className="text-zinc-300 text-xs">({item.angaName}: {item.count})</span>
              </span>
              {idx < angaBreakdown.length - 1 && (
                <span className="text-zinc-500 font-bold">+</span>
              )}
            </React.Fragment>
          ))}
          <span className="text-zinc-500 font-bold">=</span>
          <span className="px-2.5 py-1 rounded-md bg-[#C9A24B]/20 border border-[#C9A24B]/40 text-[#E5C365] font-bold">
            {calculatedTotalBeats} Aksharas
          </span>
        </div>
      </div>

      {/* 3. Interactive Beat Cycle Visualizer */}
      <div className="pt-4">
        <div className="flex items-center justify-between text-xs mb-3">
          <span className="text-zinc-300 font-medium uppercase tracking-wider font-sans-body flex items-center gap-1.5">
            <Activity className={`w-3.5 h-3.5 ${isPlaying ? 'text-[#E5C365] animate-pulse' : 'text-zinc-500'}`} />
            Interactive Beat Cycle Visualizer
          </span>
          <span className="text-xs font-mono-numeric text-zinc-300">
            {isPlaying ? (
              <span className="text-[#E5C365] font-bold">
                Beat {currentBeat} of {calculatedTotalBeats}
              </span>
            ) : (
              <span className="text-zinc-400">Paused (Press Play below)</span>
            )}
          </span>
        </div>

        {/* Anga Blocks Row */}
        <div className="flex flex-wrap sm:flex-nowrap gap-3 items-stretch">
          {angaGroups.map((group, gIdx) => (
            <div
              key={gIdx}
              className="flex-1 min-w-[120px] bg-[#0E0F18]/90 rounded-xl p-3 border border-zinc-800/90 flex flex-col justify-between"
            >
              {/* Group Header */}
              <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-zinc-800/60 text-xs">
                <span className="font-semibold text-zinc-200 flex items-center gap-1">
                  <span className="text-[#E5C365] font-mono-numeric font-bold">
                    {group.symbol}
                  </span>
                  <span className="text-zinc-300 text-[11px]">{group.angaName}</span>
                </span>
                <span className="text-[10px] font-mono-numeric text-zinc-300 bg-zinc-800/80 px-1.5 py-0.5 rounded">
                  {group.count} {group.count === 1 ? 'beat' : 'beats'}
                </span>
              </div>

              {/* Beat Bars in this Anga */}
              <div className="grid gap-1.5" style={{ gridTemplateColumns: `repeat(${group.beats.length}, minmax(0, 1fr))` }}>
                {group.beats.map((beat) => {
                  const isActive = isPlaying && currentBeat === beat.beatNumber;
                  const isPast = isPlaying && currentBeat > beat.beatNumber;

                  return (
                    <div
                      key={beat.beatNumber}
                      className="group relative flex flex-col items-center gap-1"
                    >
                      {/* Interactive Beat Bar with High Contrast Live State */}
                      <div
                        className={`w-full h-9 sm:h-11 rounded-lg flex items-center justify-center font-mono-numeric text-xs sm:text-sm font-bold transition-all duration-150 border ${
                          isActive
                            ? 'bg-gradient-to-b from-[#FFF5C0] via-[#E5C365] to-[#C9A24B] text-[#0C0D12] font-black border-[#FFFDF0] shadow-[0_0_22px_rgba(229,195,101,0.95)] scale-[1.08] z-20 ring-2 ring-[#E5C365]'
                            : isPast
                            ? 'bg-[#C9A24B]/20 text-[#E5C365] border-[#C9A24B]/40 font-semibold'
                            : 'bg-[#151726] text-zinc-300 border-zinc-800 hover:border-zinc-700'
                        }`}
                      >
                        {beat.beatNumber}
                      </div>

                      {/* Gesture Label (Clap / Wave / Finger #) with high contrast */}
                      <div className="text-[11px] sm:text-xs font-sans-body text-center truncate max-w-full font-medium">
                        {beat.isAngaStart ? (
                          <span className={isActive ? 'text-[#E5C365] font-bold' : 'text-[#E5C365]'}>
                            Clap
                          </span>
                        ) : beat.kriyaType === 'veechu' ? (
                          <span className={isActive ? 'text-zinc-100 font-bold' : 'text-zinc-200'}>
                            Wave
                          </span>
                        ) : (
                          <span className={isActive ? 'text-zinc-100 font-bold' : 'text-zinc-300'}>
                            #{beat.subIndex}
                          </span>
                        )}
                      </div>

                      {/* Syllable / Solkattu label with high contrast */}
                      {beat.syllable && (
                        <div className={`text-[11px] sm:text-xs font-mono-numeric text-center font-semibold ${
                          isActive ? 'text-[#E5C365]' : 'text-amber-100/85'
                        }`}>
                          {beat.syllable}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Connecting Progress Bar Bridging Visualizer to Player */}
      <div className="my-6 pt-2">
        <div className="flex items-center justify-between text-[11px] font-mono-numeric text-zinc-400 mb-1.5 px-0.5">
          <span className="flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full transition-all ${isPlaying ? 'bg-[#E5C365] shadow-[0_0_8px_#E5C365]' : 'bg-zinc-600'}`} />
            <span className="text-zinc-300 uppercase tracking-wider font-sans-body text-[10px] font-semibold">
              Playback Position
            </span>
          </span>
          <span className="text-[#E5C365] font-semibold">
            {isPlaying 
              ? `Beat ${currentBeat} / ${calculatedTotalBeats} (${cycleProgress}%)` 
              : `${calculatedTotalBeats} Beats / Cycle`}
          </span>
        </div>
        <div className="w-full h-1.5 sm:h-2 bg-[#0C0D13] rounded-full overflow-hidden border border-zinc-800/80 p-[1px]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#C9A24B] via-[#E5C365] to-[#FFF2B2] transition-all duration-150 shadow-[0_0_12px_rgba(229,195,101,0.6)]"
            style={{ width: `${isPlaying ? (currentBeat / calculatedTotalBeats) * 100 : 0}%` }}
          />
        </div>
      </div>

      {/* 5. Unified Player Controls */}
      <div className="pt-2 border-t border-zinc-800/80 flex flex-col items-center">
        {/* Play / Pause Button with Inline Audio Toggle Cluster */}
        <div className="w-full flex flex-col items-center my-2">
          <div className="relative flex items-center justify-center">
            {/* Ambient Ripple when Playing */}
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
            <p className="text-xs font-mono-numeric uppercase tracking-[0.2em] text-zinc-300 font-medium">
              {isPlaying ? (
                <span className="text-[#E5C365]">Cycle Active · Beat {currentBeat}/{calculatedTotalBeats}</span>
              ) : (
                'Click to Start Metronome'
              )}
            </p>
          </div>
        </div>

        {/* Tempo, Laya Presets & Control Cluster */}
        <div className="w-full max-w-lg mt-4 pt-4 border-t border-zinc-800/70">
          {/* BPM Header & Display */}
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

          {/* Stepper + Slider Row */}
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => onBpmChange && onBpmChange(Math.max(40, bpm - 5))}
              disabled={bpm <= 40}
              className="p-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-700/80 border border-zinc-700 text-zinc-200 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
              title="-5 BPM"
            >
              <Minus className="w-4 h-4" />
            </button>

            {/* Slider */}
            <div className="relative flex-1 flex items-center">
              <input
                type="range"
                min="40"
                max="200"
                step="1"
                value={bpm}
                onChange={(e) => onBpmChange && onBpmChange(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#C9A24B] focus:outline-none focus:ring-1 focus:ring-[#C9A24B]/50"
              />
            </div>

            <button
              onClick={() => onBpmChange && onBpmChange(Math.min(200, bpm + 5))}
              disabled={bpm >= 200}
              className="p-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-700/80 border border-zinc-700 text-zinc-200 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
              title="+5 BPM"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Presets, Tap Tempo, Reset & INLINE Audio Toggle */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 pt-1 text-xs">
            {/* Laya Presets */}
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] uppercase font-mono-numeric text-zinc-500 mr-0.5">Presets:</span>
              <button
                onClick={() => onBpmChange && onBpmChange(60)}
                className={`px-2.5 py-1 rounded text-[11px] font-mono-numeric border transition-all cursor-pointer ${
                  bpm === 60 ? 'bg-[#C9A24B]/20 border-[#C9A24B] text-[#E5C365]' : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-zinc-100'
                }`}
              >
                Vilamba (60)
              </button>
              <button
                onClick={() => onBpmChange && onBpmChange(80)}
                className={`px-2.5 py-1 rounded text-[11px] font-mono-numeric border transition-all cursor-pointer ${
                  bpm === 80 ? 'bg-[#C9A24B]/20 border-[#C9A24B] text-[#E5C365]' : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-zinc-100'
                }`}
              >
                Madhyama (80)
              </button>
              <button
                onClick={() => onBpmChange && onBpmChange(140)}
                className={`px-2.5 py-1 rounded text-[11px] font-mono-numeric border transition-all cursor-pointer ${
                  bpm === 140 ? 'bg-[#C9A24B]/20 border-[#C9A24B] text-[#E5C365]' : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-zinc-100'
                }`}
              >
                Druta (140)
              </button>
            </div>

            {/* Tap Tempo, Reset & Inline Audio Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleTapTempo}
                className="px-2.5 py-1 rounded-md bg-zinc-800/80 hover:bg-zinc-700/80 border border-zinc-700/80 text-zinc-200 font-mono-numeric text-[11px] active:scale-95 transition-all cursor-pointer"
                title="Tap rhythmically to calculate BPM"
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
                title="Toggle synthesized Talam audio tick"
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
