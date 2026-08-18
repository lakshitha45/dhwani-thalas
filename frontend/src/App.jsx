import React, { useState, useEffect, useMemo, useRef } from 'react';
import { TALAS, JATIS, calculateAksharas, getAngaBeats } from './data/talas';
import NavigationTabs from './components/NavigationTabs';
import AppTitle from './components/AppTitle';
import StepIndicator from './components/StepIndicator';
import TalaSelector from './components/TalaSelector';
import JatiSelector from './components/JatiSelector';
import SelectedTalaCard from './components/SelectedTalaCard';
import RhythmInfo from './components/RhythmInfo';
import HastaVidyaPage from './components/HastaVidyaPage';
import WebsiteIntroOverlay from './components/WebsiteIntroOverlay';
import { playTalamTick } from './utils/audioSynth';
import { fetchRhythms, findRhythm } from './services/api';

export default function App() {
  // Navigation View State: 'hub' | 'thalas' | 'hastavidya'
  const [currentView, setCurrentView] = useState('hub');

  // State for Dhwani Thalas
  const [selectedTalaId, setSelectedTalaId] = useState('triputa');
  const [selectedJatiId, setSelectedJatiId] = useState('chatusra');
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(80);

  // Enhanced interactive states
  const [currentBeat, setCurrentBeat] = useState(1);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Backend API state — rhythms fetched from Spring Boot
  const [rhythms, setRhythms] = useState([]);
  const [apiStatus, setApiStatus] = useState('loading'); // 'loading' | 'connected' | 'offline'

  // ── Fetch all rhythms from Spring Boot backend on mount ──────────────────
  useEffect(() => {
    fetchRhythms()
      .then((data) => {
        setRhythms(data);
        setApiStatus('connected');
      })
      .catch(() => {
        setApiStatus('offline');
      });
  }, []);

  // Memoized current Tala and Jati objects
  const selectedTala = useMemo(
    () => TALAS.find((t) => t.id === selectedTalaId) || TALAS[4],
    [selectedTalaId]
  );

  const selectedJati = useMemo(
    () => JATIS.find((j) => j.id === selectedJatiId) || JATIS[1],
    [selectedJatiId]
  );

  // Total akshara count — prefer backend DB value when available, else static
  const totalBeats = useMemo(() => {
    const backendRhythm = findRhythm(rhythms, selectedTala?.name, selectedJati?.name);
    if (backendRhythm?.counting) return backendRhythm.counting;
    return calculateAksharas(selectedTala, selectedJati);
  }, [selectedTala, selectedJati, rhythms]);

  // Beat structure for knowing which beats are Anga starts (for accent sound)
  const flatBeats = useMemo(() => {
    const groups = getAngaBeats(selectedTala, selectedJati);
    return groups.flatMap((g) => g.beats);
  }, [selectedTala, selectedJati]);

  // Keep ref of latest values for metronome timer
  const currentBeatRef = useRef(currentBeat);
  currentBeatRef.current = currentBeat;

  const totalBeatsRef = useRef(totalBeats);
  totalBeatsRef.current = totalBeats;

  const isPlayingRef = useRef(isPlaying);
  isPlayingRef.current = isPlaying;

  const soundEnabledRef = useRef(soundEnabled);
  soundEnabledRef.current = soundEnabled;

  const flatBeatsRef = useRef(flatBeats);
  flatBeatsRef.current = flatBeats;

  // Handle Tala Selection
  const handleSelectTala = (tala) => {
    setSelectedTalaId(tala.id);
    setCurrentBeat(1);
  };

  // Handle Jati Selection
  const handleSelectJati = (jati) => {
    setSelectedJatiId(jati.id);
    setCurrentBeat(1);
  };

  // Toggle Play / Pause
  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  // Reset to Beat 1
  const handleResetBeat = () => {
    setCurrentBeat(1);
  };

  // Metronome Timer Interval Loop
  useEffect(() => {
    if (!isPlaying) return;

    const intervalMs = (60 / bpm) * 1000;

    const currentBeatObj = flatBeatsRef.current[currentBeatRef.current - 1];
    const isAccent = currentBeatRef.current === 1 || (currentBeatObj && currentBeatObj.isAngaStart);
    if (soundEnabledRef.current) {
      playTalamTick(isAccent);
    }

    const timer = setInterval(() => {
      setCurrentBeat((prevBeat) => {
        const nextBeat = prevBeat >= totalBeatsRef.current ? 1 : prevBeat + 1;
        
        if (soundEnabledRef.current) {
          const beatObj = flatBeatsRef.current[nextBeat - 1];
          const isAccentBeat = nextBeat === 1 || (beatObj && beatObj.isAngaStart);
          playTalamTick(isAccentBeat);
        }

        return nextBeat;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPlaying, bpm, totalBeats]);

  return (
    <div className={`min-h-screen ${currentView === 'thalas' ? 'bg-[#0C0D12] stage-lighting' : 'temple-maroon-stage'} text-zinc-100 relative selection:bg-[#E5A93C]/30 selection:text-amber-200 transition-colors duration-500`}>
      
      {/* Sticky Top View Switcher Navigation */}
      <NavigationTabs 
        currentView={currentView} 
        onViewChange={setCurrentView}
      />

      {/* ── VIEW 0: SHARED LANDING HUB (PERMANENT HERO & SHLOKAS) ── */}
      {currentView === 'hub' && (
        <WebsiteIntroOverlay
          onExplore={(view) => setCurrentView(view)}
        />
      )}

      {/* ── VIEW 1: HASTAVIDYA (MUDRA EXPLORER) ────────────────────── */}
      {currentView === 'hastavidya' && (
        <HastaVidyaPage />
      )}

      {/* ── VIEW 2: DHWANI THALAS (CARNATIC RHYTHM PRACTICE) ──────── */}
      {currentView === 'thalas' && (
        <div className="relative">
          {/* Background Decorative Stage Elements */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#C9A24B]/10 via-[#C9A24B]/0 to-transparent blur-[120px]" />
            <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#141829]/40 blur-[100px] rounded-full" />
          </div>

          <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col items-center">
            {/* 1. Title Header */}
            <AppTitle />

            {/* 2. Step Progress Indicator */}
            <StepIndicator
              selectedTala={selectedTala}
              selectedJati={selectedJati}
              totalBeats={totalBeats}
              isPlaying={isPlaying}
            />

            {/* 3. Sapta Tala Selector (7 Talas) */}
            <TalaSelector
              talas={TALAS}
              selected={selectedTala}
              onSelect={handleSelectTala}
            />

            {/* 4. Jati Selector (5 Jatis) */}
            <JatiSelector
              jatis={JATIS}
              selected={selectedJati}
              onSelect={handleSelectJati}
            />

            {/* 5. Unified Tala Card with Beat Visualizer & Integrated Player Controls */}
            <SelectedTalaCard
              tala={selectedTala}
              jati={selectedJati}
              currentBeat={currentBeat}
              totalBeats={totalBeats}
              isPlaying={isPlaying}
              onTogglePlay={handleTogglePlay}
              bpm={bpm}
              onBpmChange={setBpm}
              soundEnabled={soundEnabled}
              onToggleSound={() => setSoundEnabled((prev) => !prev)}
              onResetBeat={handleResetBeat}
            />

            {/* 6. Rhythm & Classical Context Panel */}
            <RhythmInfo
              tala={selectedTala}
              jati={selectedJati}
            />

            {/* Footer info */}
            <footer className="w-full text-center py-6 border-t border-zinc-900/80 text-xs text-zinc-600 font-sans-body">
              <p className="flex items-center justify-center gap-1.5">
                <span className="text-[#C9A24B]/60 font-serif-display font-semibold">Dhwani Thalas</span>
                <span>·</span>
                <span>Carnatic Music Tala &amp; Jati Rhythm Practice</span>
              </p>
            </footer>
          </main>
        </div>
      )}

    </div>
  );
}
