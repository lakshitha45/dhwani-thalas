import React, { useState, useEffect, useMemo } from 'react';
import {
  Sparkles,
  BookOpen,
  Search,
  ChevronLeft,
  ChevronRight,
  X,
  Layers,
  HelpCircle,
  Maximize2
} from 'lucide-react';
import PatakaLineArt from './PatakaLineArt';
import {
  fetchAsamyuktaHastas,
  fetchSamyuktaHastas,
  fetchShirobhedas,
  fetchDrishtiBhedas,
  fetchGreevaBhedas,
  fetchBhruBhedas,
  fetchPadaBhedas
} from '../services/api';

// Helper to get image path with fallback
function getMudraImage(item, tab) {
  if (item?.imageUrl) return item.imageUrl;
  if (!item?.name) return null;
  const slug = item.name.toLowerCase().replace(/[^a-z0-9]/g, '');

  if (tab === 'asamyukta') {
    return `/images/mudras/asamyukta/${slug}.jpg`;
  }
  if (tab === 'samyukta') {
    const aliasMap = {
      'swastikam': 'savastika',
      'kapotam': 'kapota',
      'karkatam': 'karkata',
      'pushpaputam': 'puspaputa',
      'utsangam': 'utsanga',
      'shivalingam': 'sivalinga',
      'katakavardhanam': 'katakavardhana',
      'kartariswastikam': 'kartarisvastika',
      'shakatam': 'sakata',
      'shankha': 'sankha',
      'chakram': 'chakra',
      'samputam': 'samputa',
      'pasham': 'pasa',
      'matsyam': 'matsya',
      'kurmam': 'kurma',
      'varaham': 'varaha',
      'garudam': 'garuda',
      'nagabandham': 'nagabandha',
      'khatva': 'katva',
      'bherundam': 'perunda',
      'avahittham': 'avahita'
    };
    const fileSlug = aliasMap[slug] || slug;
    return `/images/mudras/samyukta/${fileSlug}.jpg`;
  }
  return null;
}

export default function HastaVidyaPage() {
  // Navigation Tabs: 'asamyukta' | 'samyukta' | 'shirobheda' | 'drishti' | 'greeva' | 'bhru' | 'pada'
  const [activeTab, setActiveTab] = useState('asamyukta');

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');

  // Selected Mudra for Detailed Spotlight Modal
  const [selectedMudra, setSelectedMudra] = useState(null);

  // Backend Data States
  const [asamyuktaList, setAsamyuktaList] = useState([]);
  const [samyuktaList, setSamyuktaList] = useState([]);
  const [shirobhedaList, setShirobhedaList] = useState([]);
  const [drishtiList, setDrishtiList] = useState([]);
  const [greevaList, setGreevaList] = useState([]);
  const [bhruList, setBhruList] = useState([]);
  const [padaList, setPadaList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(false);

  // Image load state tracking for skeleton shimmer
  const [imagesLoaded, setImagesLoaded] = useState({});

  // ── FETCH LIVE DATA FROM SPRING BOOT BACKEND ───────────────────────────
  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        setLoading(true);
        const [asamyukta, samyukta, shiro, drishti, greeva, bhru, pada] = await Promise.all([
          fetchAsamyuktaHastas().catch(() => []),
          fetchSamyuktaHastas().catch(() => []),
          fetchShirobhedas().catch(() => []),
          fetchDrishtiBhedas().catch(() => []),
          fetchGreevaBhedas().catch(() => []),
          fetchBhruBhedas().catch(() => []),
          fetchPadaBhedas().catch(() => [])
        ]);

        if (isMounted) {
          setAsamyuktaList(asamyukta || []);
          setSamyuktaList(samyukta || []);
          setShirobhedaList(shiro || []);
          setDrishtiList(drishti || []);
          setGreevaList(greeva || []);
          setBhruList(bhru || []);
          setPadaList(pada || []);
          setLoading(false);
        }
      } catch (err) {
        console.warn('Backend fetch failed, using fallback:', err);
        if (isMounted) {
          setApiError(true);
          setLoading(false);
        }
      }
    }

    loadData();
    return () => { isMounted = false; };
  }, []);

  // Determine current active list
  const currentList = useMemo(() => {
    switch (activeTab) {
      case 'asamyukta':
        return asamyuktaList;
      case 'samyukta':
        return samyuktaList;
      case 'shirobheda':
        return shirobhedaList;
      case 'drishti':
        return drishtiList;
      case 'greeva':
        return greevaList;
      case 'bhru':
        return bhruList;
      case 'pada':
        return padaList;
      default:
        return asamyuktaList;
    }
  }, [activeTab, asamyuktaList, samyuktaList, shirobhedaList, drishtiList, greevaList, bhruList, padaList]);

  // Filtered List based on Search Query
  const filteredList = useMemo(() => {
    if (!searchQuery.trim()) return currentList;
    const q = searchQuery.toLowerCase();
    return currentList.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        (item.description && item.description.toLowerCase().includes(q)) ||
        (item.usage && item.usage.toLowerCase().includes(q))
    );
  }, [currentList, searchQuery]);

  // Navigation within Modal
  const handleNextMudra = () => {
    if (!selectedMudra) return;
    const currentIndex = currentList.findIndex((m) => m.name === selectedMudra.name);
    const nextIndex = (currentIndex + 1) % currentList.length;
    setSelectedMudra(currentList[nextIndex]);
  };

  const handlePrevMudra = () => {
    if (!selectedMudra) return;
    const currentIndex = currentList.findIndex((m) => m.name === selectedMudra.name);
    const prevIndex = (currentIndex - 1 + currentList.length) % currentList.length;
    setSelectedMudra(currentList[prevIndex]);
  };

  const isTextOnlyTab = ['shirobheda', 'drishti', 'greeva', 'bhru', 'pada'].includes(activeTab);

  return (
    <div className="w-full min-h-screen temple-maroon-stage text-zinc-100 font-sans-body relative pb-20 selection:bg-[#E5A93C]/30 selection:text-amber-200">
      {/* Background Silk Sheen Spotlight Overlays */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#E5A93C]/12 via-[#BA1C3E]/10 to-transparent blur-[140px]" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[500px] bg-[#0D9488]/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-10 left-[-10%] w-[600px] h-[500px] bg-[#BA1C3E]/15 blur-[140px] rounded-full" />
      </div>

      {/* Main Container with generous top spacing so content is never obscured by sticky nav */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col items-center">

        {/* ── HERO HEADER SECTION ───────────────────────────────────────── */}
        <header className="w-full max-w-4xl text-center mb-8">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#2E0710]/90 border border-[#E5A93C]/40 text-[#F7D070] text-xs font-marcellus tracking-[0.2em] uppercase mb-3 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#14B8A6]" />
            <span>Abhinaya Darpana · Canonical Bharatanatyam Shastra</span>
          </div>

          {/* Main Title */}
          <h1 className="font-marcellus text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-amber-50 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
            <span className="turmeric-shimmer">HastaVidya</span>
            <span className="text-[#0D9488] font-normal mx-2 sm:mx-3">·</span>
            <span className="text-zinc-100 font-cormorant italic font-light">हस्तविद्या</span>
          </h1>

          <p className="mt-2 text-xs sm:text-sm font-cormorant italic text-amber-200/80 max-w-3xl mx-auto leading-relaxed">
            The complete classical compendium of Hastas (Single &amp; Double Hand Mudras), Shirobhedas (Head), Drishti Bhedas (Eyes), Greeva Bhedas (Neck), Bhru Bhedas (Eyebrows), and Pada Bhedas (Feet &amp; Postures) according to Nandikeshvara's Abhinaya Darpana.
          </p>

          {/* Signature Animated Hand-Drawn Pataka Line-Art Hero */}
          <div className="my-6">
            <PatakaLineArt />
          </div>

          {/* Classical Invocatory Shlokas Card */}
          <div className="max-w-3xl w-full mx-auto p-4 sm:p-5 rounded-2xl bg-[#23070E]/80 border border-[#E5A93C]/30 shadow-xl backdrop-blur-md text-center space-y-3">
            <div>
              <p className="font-marcellus text-sm sm:text-base md:text-lg text-[#F7D070] tracking-wide leading-relaxed">
                " आङ्गिकं भुवनं यस्य वाचिकं सर्ववाङ्ग्मयम् । आहार्यं चन्द्रतारादि तं नुमः सात्त्विकं शिवम् ॥ "
              </p>
              <p className="mt-1 text-xs sm:text-sm font-cormorant italic text-amber-100/75">
                — Whose bodily movement is the entire universe, whose speech is all language, whose ornaments are the moon and stars — to that pure, divine Shiva, we bow in reverence.
              </p>
            </div>

            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#E5A93C]/40 to-transparent mx-auto" />

            <div>
              <p className="font-marcellus text-sm sm:text-base md:text-lg text-[#F7D070] tracking-wide leading-relaxed">
                " यतो हस्तस्ततो दृष्टिर्यतो दृष्टिस्ततो मनः । यतो मनस्ततो भावो यतो भावस्ततो रसः ॥ "
              </p>
              <p className="mt-1 text-xs sm:text-sm font-cormorant italic text-amber-100/75">
                — Where the hand goes, the eyes follow; where the eyes go, the mind follows; where the mind goes, emotion awakens; where emotion awakens, aesthetic relish (Rasa) is born.
              </p>
            </div>
          </div>
        </header>

        {/* ── CATEGORY TABS NAVIGATION (7 Complete Shastra Categories) ── */}
        <section className="w-full mb-6">
          <div className="flex overflow-x-auto snap-touch-row scrollbar-thin pb-2 gap-2.5 sm:justify-center">
            {/* 1. Asamyukta Hastas */}
            <button
              onClick={() => { setActiveTab('asamyukta'); setSearchQuery(''); }}
              className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl border text-xs font-marcellus font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer snap-start flex-shrink-0 ${activeTab === 'asamyukta'
                ? 'bg-gradient-to-b from-[#350A14] to-[#20060C] border-[#E5A93C] turmeric-glow text-[#F7D070] shadow-lg scale-[1.02]'
                : 'bg-[#1C050B]/85 border-[#4A121E]/80 text-zinc-300 hover:border-[#E5A93C]/50 hover:bg-[#250810]'
                }`}
            >
              <span>✋ Asamyukta</span>
              <span className="px-1.5 py-0.5 rounded-full text-[10px] font-mono-numeric font-bold bg-[#E5A93C]/20 border border-[#E5A93C]/40 text-[#F7D070]">
                {asamyuktaList.length || 28}
              </span>
            </button>

            {/* 2. Samyukta Hastas */}
            <button
              onClick={() => { setActiveTab('samyukta'); setSearchQuery(''); }}
              className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl border text-xs font-marcellus font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer snap-start flex-shrink-0 ${activeTab === 'samyukta'
                ? 'bg-gradient-to-b from-[#350A14] to-[#20060C] border-[#E5A93C] turmeric-glow text-[#F7D070] shadow-lg scale-[1.02]'
                : 'bg-[#1C050B]/85 border-[#4A121E]/80 text-zinc-300 hover:border-[#E5A93C]/50 hover:bg-[#250810]'
                }`}
            >
              <span>👐 Samyukta</span>
              <span className="px-1.5 py-0.5 rounded-full text-[10px] font-mono-numeric font-bold bg-[#E5A93C]/20 border border-[#E5A93C]/40 text-[#F7D070]">
                {samyuktaList.length || 24}
              </span>
            </button>

            {/* 3. Shirobhedas */}
            <button
              onClick={() => { setActiveTab('shirobheda'); setSearchQuery(''); }}
              className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl border text-xs font-marcellus font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer snap-start flex-shrink-0 ${activeTab === 'shirobheda'
                ? 'bg-gradient-to-b from-[#350A14] to-[#20060C] border-[#E5A93C] turmeric-glow text-[#F7D070] shadow-lg scale-[1.02]'
                : 'bg-[#1C050B]/85 border-[#4A121E]/80 text-zinc-300 hover:border-[#E5A93C]/50 hover:bg-[#250810]'
                }`}
            >
              <span>👤 Shirobheda</span>
              <span className="px-1.5 py-0.5 rounded-full text-[10px] font-mono-numeric font-bold bg-[#0D9488]/20 border border-[#0D9488]/40 text-[#14B8A6]">
                {shirobhedaList.length || 9}
              </span>
            </button>

            {/* 4. Drishti Bhedas */}
            <button
              onClick={() => { setActiveTab('drishti'); setSearchQuery(''); }}
              className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl border text-xs font-marcellus font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer snap-start flex-shrink-0 ${activeTab === 'drishti'
                ? 'bg-gradient-to-b from-[#350A14] to-[#20060C] border-[#E5A93C] turmeric-glow text-[#F7D070] shadow-lg scale-[1.02]'
                : 'bg-[#1C050B]/85 border-[#4A121E]/80 text-zinc-300 hover:border-[#E5A93C]/50 hover:bg-[#250810]'
                }`}
            >
              <span>👁️ Drishti</span>
              <span className="px-1.5 py-0.5 rounded-full text-[10px] font-mono-numeric font-bold bg-[#0D9488]/20 border border-[#0D9488]/40 text-[#14B8A6]">
                {drishtiList.length || 9}
              </span>
            </button>

            {/* 5. Greeva Bhedas */}
            <button
              onClick={() => { setActiveTab('greeva'); setSearchQuery(''); }}
              className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl border text-xs font-marcellus font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer snap-start flex-shrink-0 ${activeTab === 'greeva'
                ? 'bg-gradient-to-b from-[#350A14] to-[#20060C] border-[#E5A93C] turmeric-glow text-[#F7D070] shadow-lg scale-[1.02]'
                : 'bg-[#1C050B]/85 border-[#4A121E]/80 text-zinc-300 hover:border-[#E5A93C]/50 hover:bg-[#250810]'
                }`}
            >
              <span>🧣 Greeva Bheda</span>
              <span className="px-1.5 py-0.5 rounded-full text-[10px] font-mono-numeric font-bold bg-[#0D9488]/20 border border-[#0D9488]/40 text-[#14B8A6]">
                {greevaList.length || 9}
              </span>
            </button>

            {/* 6. Bhru Bhedas */}
            <button
              onClick={() => { setActiveTab('bhru'); setSearchQuery(''); }}
              className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl border text-xs font-marcellus font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer snap-start flex-shrink-0 ${activeTab === 'bhru'
                ? 'bg-gradient-to-b from-[#350A14] to-[#20060C] border-[#E5A93C] turmeric-glow text-[#F7D070] shadow-lg scale-[1.02]'
                : 'bg-[#1C050B]/85 border-[#4A121E]/80 text-zinc-300 hover:border-[#E5A93C]/50 hover:bg-[#250810]'
                }`}
            >
              <span>🤨 Bhru Bheda</span>
              <span className="px-1.5 py-0.5 rounded-full text-[10px] font-mono-numeric font-bold bg-[#0D9488]/20 border border-[#0D9488]/40 text-[#14B8A6]">
                {bhruList.length || 9}
              </span>
            </button>

            {/* 7. Pada Bhedas */}
            <button
              onClick={() => { setActiveTab('pada'); setSearchQuery(''); }}
              className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl border text-xs font-marcellus font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer snap-start flex-shrink-0 ${activeTab === 'pada'
                ? 'bg-gradient-to-b from-[#350A14] to-[#20060C] border-[#E5A93C] turmeric-glow text-[#F7D070] shadow-lg scale-[1.02]'
                : 'bg-[#1C050B]/85 border-[#4A121E]/80 text-zinc-300 hover:border-[#E5A93C]/50 hover:bg-[#250810]'
                }`}
            >
              <span>🦶 Pada Bheda</span>
              <span className="px-1.5 py-0.5 rounded-full text-[10px] font-mono-numeric font-bold bg-[#0D9488]/20 border border-[#0D9488]/40 text-[#14B8A6]">
                {padaList.length || 9}
              </span>
            </button>
          </div>
        </section>

        {/* ── SEARCH & FILTER BAR ─────────────────────────────────────── */}
        <section className="w-full mb-8">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#E5A93C]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${currentList.length} items in ${activeTab.toUpperCase()} (e.g., Utksipta, Recita, Sundari, Mandala)...`}
              className="w-full pl-10 pr-10 py-3 rounded-xl bg-[#20060D]/90 border border-[#4A121E] text-zinc-100 placeholder-amber-200/40 text-xs sm:text-sm focus:outline-none focus:border-[#E5A93C] focus:ring-1 focus:ring-[#E5A93C]/50 shadow-inner font-sans-body"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-zinc-400 hover:text-zinc-200 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          {searchQuery && (
            <div className="text-center mt-2 text-xs font-mono-numeric text-amber-200/70">
              Found {filteredList.length} matching items
            </div>
          )}
        </section>

        {/* ── SHIROBHEDA SINGLE COMMON REFERENCE CHART IMAGE (TOP CENTERED) ── */}
        {activeTab === 'shirobheda' && (
          <section className="w-full max-w-4xl mx-auto mb-10 flex flex-col items-center animate-in fade-in duration-300">
            <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#14B8A6]/60 shadow-[0_10px_50px_rgba(20,184,166,0.25)] bg-[#100306]">
              <img
                src="/images/mudras/shirobheda/shirobheda-chart.png"
                alt="Shiro Bheda: Nine Head Movements in Bharatanatyam Reference Chart"
                className="w-full h-auto object-contain block"
              />
            </div>
            <div className="inline-flex items-center gap-2 mt-3 px-4 py-1 rounded-full bg-[#0D3833]/80 border border-[#14B8A6]/40 text-[#14B8A6] text-xs font-mono-numeric uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Canonical 9-in-1 Head Movements Chart</span>
            </div>
          </section>
        )}

        {/* ── DRISHTI BHEDA SINGLE COMMON REFERENCE CHART IMAGE (TOP CENTERED) ── */}
        {activeTab === 'drishti' && (
          <section className="w-full max-w-4xl mx-auto mb-10 flex flex-col items-center animate-in fade-in duration-300">
            <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#14B8A6]/60 shadow-[0_10px_50px_rgba(20,184,166,0.25)] bg-[#100306]">
              <img
                src="/images/mudras/drishti/drishti-chart.png"
                alt="Dhristi Bheda: Nine Eye Movements in Bharatanatyam Reference Chart"
                className="w-full h-auto object-contain block"
              />
            </div>
            <div className="inline-flex items-center gap-2 mt-3 px-4 py-1 rounded-full bg-[#0D3833]/80 border border-[#14B8A6]/40 text-[#14B8A6] text-xs font-mono-numeric uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Canonical 9-in-1 Eye Movements Chart</span>
            </div>
          </section>
        )}

        {/* ── GREEVA BHEDA SINGLE COMMON REFERENCE CHART IMAGE (TOP CENTERED) ── */}
        {activeTab === 'greeva' && (
          <section className="w-full max-w-4xl mx-auto mb-10 flex flex-col items-center animate-in fade-in duration-300">
            <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#14B8A6]/60 shadow-[0_10px_50px_rgba(20,184,166,0.25)] bg-[#100306]">
              <img
                src="/images/mudras/greeva/greeva-chart.jpg"
                alt="Greeva Bheda: Neck Movements in Bharatanatyam Reference Chart"
                className="w-full h-auto object-contain block"
              />
            </div>
            <div className="inline-flex items-center gap-2 mt-3 px-4 py-1 rounded-full bg-[#0D3833]/80 border border-[#14B8A6]/40 text-[#14B8A6] text-xs font-mono-numeric uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Canonical 9-in-1 Neck Movements Chart</span>
            </div>
          </section>
        )}

        {/* ── BHRU BHEDA SINGLE COMMON REFERENCE CHART IMAGE (TOP CENTERED) ── */}
        {activeTab === 'bhru' && (
          <section className="w-full max-w-4xl mx-auto mb-10 flex flex-col items-center animate-in fade-in duration-300">
            <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#14B8A6]/60 shadow-[0_10px_50px_rgba(20,184,166,0.25)] bg-[#100306]">
              <img
                src="/images/mudras/bhru/bhru-chart.jpg"
                alt="Bhru Bheda: Eyebrow Movements in Bharatanatyam Reference Chart"
                className="w-full h-auto object-contain block"
              />
            </div>
            <div className="inline-flex items-center gap-2 mt-3 px-4 py-1 rounded-full bg-[#0D3833]/80 border border-[#14B8A6]/40 text-[#14B8A6] text-xs font-mono-numeric uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Canonical 9-in-1 Eyebrow Movements Chart</span>
            </div>
          </section>
        )}

        {/* ── PADA BHEDA SINGLE COMMON REFERENCE CHART IMAGE (TOP CENTERED) ── */}
        {activeTab === 'pada' && (
          <section className="w-full max-w-4xl mx-auto mb-10 flex flex-col items-center animate-in fade-in duration-300">
            <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#14B8A6]/60 shadow-[0_10px_50px_rgba(20,184,166,0.25)] bg-[#100306]">
              <img
                src="/images/mudras/pada/pada-chart.jpg"
                alt="Pada Bheda: Nine Foot Movements in Bharatanatyam Reference Chart"
                className="w-full h-auto object-contain block"
              />
            </div>
            <div className="inline-flex items-center gap-2 mt-3 px-4 py-1 rounded-full bg-[#0D3833]/80 border border-[#14B8A6]/40 text-[#14B8A6] text-xs font-mono-numeric uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Canonical 9-in-1 Foot Movements Chart</span>
            </div>
          </section>
        )}

        {/* ── GRID OF CARDS ────────────────────────────────────────────── */}
        <section className="w-full mb-16">
          {filteredList.length === 0 ? (
            <div className="w-full p-12 text-center rounded-2xl bg-[#23070E]/60 border border-[#4A121E]">
              <HelpCircle className="w-10 h-10 text-[#E5A93C] mx-auto mb-3 opacity-60" />
              <p className="font-marcellus text-lg text-zinc-300">No items found for "{searchQuery}"</p>
              <p className="text-xs text-zinc-500 font-sans-body mt-1">Try searching for keywords like "utksipta", "recita", "sundari", or "mandala".</p>
            </div>
          ) : isTextOnlyTab ? (
            /* ── TEXT-ONLY CARDS FOR SHIROBHEDA, DRISHTI, GREEVA, BHRU, PADA ── */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {filteredList.map((item, index) => {
                const displayIndex = index + 1;
                const categoryLabel =
                  activeTab === 'shirobheda' ? 'Head Movement' :
                    activeTab === 'drishti' ? 'Eye Movement' :
                      activeTab === 'greeva' ? 'Neck Movement' :
                        activeTab === 'bhru' ? 'Eyebrow Movement' : 'Foot Movement';

                return (
                  <article
                    key={item.id || item.name}
                    onClick={() => setSelectedMudra(item)}
                    className="group relative rounded-2xl bg-gradient-to-b from-[#26070F] to-[#1A040A] border border-[#4A121E] hover:border-[#14B8A6] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(20,184,166,0.25)] cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Header: Inline Number Badge & Category Pill */}
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-[10px] font-mono-numeric font-bold px-2.5 py-0.5 rounded-full bg-[#140307] border border-[#14B8A6]/40 text-[#14B8A6]">
                          #{displayIndex}
                        </span>
                        <span className="text-[9px] font-mono-numeric uppercase tracking-wider text-teal-400/80 font-semibold">
                          {categoryLabel}
                        </span>
                      </div>

                      {/* Sanskrit Name Heading */}
                      <h3 className="font-marcellus text-2xl font-bold text-amber-50 group-hover:text-[#F7D070] transition-colors mb-2">
                        {item.name}
                      </h3>

                      {/* Short Posture Description */}
                      <p className="text-xs leading-relaxed text-zinc-300 font-sans-body mb-4">
                        {item.description}
                      </p>
                    </div>

                    {/* Key Usages (Viniyoga) */}
                    <div className="pt-3 border-t border-[#3D0C17]/80 mt-auto">
                      <div className="text-[10px] uppercase font-mono-numeric tracking-wider text-[#14B8A6] mb-1 font-semibold flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-[#14B8A6]" />
                        Key Usages (Viniyoga):
                      </div>
                      <p className="text-[11px] font-cormorant italic text-amber-100/80 leading-snug">
                        {item.usage}
                      </p>
                    </div>

                    {/* Subtle Click Indicator on Hover */}
                    <div className="mt-3 pt-2 flex items-center justify-end text-[10px] font-mono-numeric text-teal-400/70 group-hover:text-[#14B8A6] opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="flex items-center gap-1">
                        <Maximize2 className="w-3 h-3" /> Click to view full Shastra
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            /* ── ASAMYUKTA & SAMYUKTA HASTAS: PER-CARD IMAGE GRID ── */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
              {filteredList.map((item, index) => {
                const displayIndex = index + 1;
                const imgSrc = getMudraImage(item, activeTab);

                return (
                  <article
                    key={item.id || item.name}
                    onClick={() => setSelectedMudra(item)}
                    className="group relative rounded-2xl bg-gradient-to-b from-[#26070F] to-[#1A040A] border border-[#4A121E] hover:border-[#E5A93C] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(229,169,60,0.25)] cursor-pointer flex flex-col justify-between"
                  >
                    {/* Top Fixed Aspect Ratio Frame with Overlay Badges */}
                    <div className="relative w-full aspect-[4/3] bg-[#120306] overflow-hidden border-b border-[#3D0C18]">
                      {imgSrc ? (
                        <>
                          {/* Skeleton Shimmer Background while loading */}
                          <div className="absolute inset-0 bg-[#25070E] animate-pulse pointer-events-none" />
                          <img
                            src={imgSrc}
                            alt={`${item.name} Illustrated Posture`}
                            loading="lazy"
                            onLoad={() => setImagesLoaded((prev) => ({ ...prev, [item.name]: true }))}
                            className={`w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-108 relative z-10 ${imagesLoaded[item.name] ? 'opacity-100' : 'opacity-0'
                              }`}
                          />
                        </>
                      ) : (
                        /* Category-Specific Elegant Fallback State */
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#240810] to-[#140307] text-amber-200/60 p-4">
                          <span className="text-3xl mb-1.5 opacity-80">
                            {activeTab === 'samyukta' ? '👐' : '✋'}
                          </span>
                          <span className="text-xs font-marcellus font-bold text-[#F7D070]">
                            {item.name}
                          </span>
                          <span className="text-[9px] font-mono-numeric uppercase tracking-wider text-teal-400/75 mt-0.5">
                            Mudra Gesture
                          </span>
                        </div>
                      )}

                      {/* Top-Left: Number Badge Overlay */}
                      <div className="absolute top-2.5 left-2.5 z-20">
                        <span className="text-[10px] font-mono-numeric font-bold px-2 py-0.5 rounded-full bg-[#18040A]/90 border border-[#E5A93C]/50 text-[#F7D070] shadow-md backdrop-blur-sm">
                          #{displayIndex}
                        </span>
                      </div>

                      {/* Top-Right: Category Tag Overlay */}
                      <div className="absolute top-2.5 right-2.5 z-20">
                        <span className="text-[9px] font-mono-numeric uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-[#0D3833]/90 border border-[#14B8A6]/40 text-[#14B8A6] shadow-md backdrop-blur-sm">
                          {activeTab === 'asamyukta' ? 'Single Hand' : 'Double Hand'}
                        </span>
                      </div>

                      {/* Hover Quick-Inspect Prompt */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20 pointer-events-none">
                        <span className="flex items-center gap-1.5 text-xs font-marcellus font-bold text-[#F7D070] bg-[#1C050B]/90 px-3 py-1.5 rounded-full border border-[#E5A93C] shadow-lg">
                          <Maximize2 className="w-3.5 h-3.5" />
                          View Full Shastra
                        </span>
                      </div>
                    </div>

                    {/* Card Body (Name, Description, Viniyoga) */}
                    <div className="p-4 flex flex-col justify-between flex-grow">
                      <div>
                        {/* Sanskrit Name */}
                        <h3 className="font-marcellus text-xl font-bold text-amber-50 group-hover:text-[#F7D070] transition-colors mb-1.5">
                          {item.name}
                        </h3>

                        {/* Posture Description */}
                        <p className="text-xs leading-relaxed text-zinc-300 font-sans-body line-clamp-2 mb-3">
                          {item.description}
                        </p>
                      </div>

                      {/* Key Usages (Viniyoga) */}
                      <div className="pt-2.5 border-t border-[#3D0C17]/80 mt-auto">
                        <div className="text-[10px] uppercase font-mono-numeric tracking-wider text-[#E5A93C]/80 mb-1 font-semibold flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-[#E5A93C]" />
                          Key Usages (Viniyoga):
                        </div>
                        <p className="text-[11px] font-cormorant italic text-amber-100/80 leading-snug line-clamp-2">
                          {item.usage}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        {/* ── DETAIL MODAL (FULL SHASTRA + PREV/NEXT) ── */}
        {selectedMudra && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-lg animate-in fade-in duration-200"
            onClick={() => setSelectedMudra(null)}
          >
            <div
              className={`relative w-full ${isTextOnlyTab ? 'max-w-2xl' : 'max-w-3xl'
                } max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-b from-[#2B0812] via-[#1F050C] to-[#120206] border-2 border-[#E5A93C]/70 shadow-[0_0_60px_rgba(229,169,60,0.4)] text-zinc-100 p-6 sm:p-8`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMudra(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#18040A] text-zinc-400 hover:text-zinc-100 hover:bg-[#3D0C18] border border-[#4A121E] transition-all cursor-pointer z-30 shadow-md"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content */}
              {isTextOnlyTab ? (
                /* ── SINGLE-COLUMN FOCUSED TEXT-ONLY SHASTRA DETAIL (NO IMAGE CARD) ── */
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#0D9488]/20 border border-[#0D9488]/40 text-[#14B8A6] text-[10px] font-mono-numeric uppercase tracking-wider mb-2">
                      <Sparkles className="w-3 h-3" />
                      <span>
                        {activeTab === 'shirobheda' ? 'Head Movement (Shirobheda)' :
                          activeTab === 'drishti' ? 'Eye Movement (Drishti Bheda)' :
                            activeTab === 'greeva' ? 'Neck Movement (Greeva Bheda)' :
                              activeTab === 'bhru' ? 'Eyebrow Movement (Bhru Bheda)' : 'Foot Movement (Pada Bheda)'}
                      </span>
                    </div>

                    <h3 className="font-marcellus text-3xl sm:text-4xl font-bold text-[#F7D070] mb-4">
                      {selectedMudra.name}
                    </h3>

                    {/* Posture Execution Box */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#1B050B]/90 border border-[#4A121E] mb-3.5 shadow-inner">
                      <h4 className="text-xs uppercase font-mono-numeric tracking-wider text-[#E5A93C] font-semibold mb-2 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" />
                        Posture &amp; Execution:
                      </h4>
                      <p className="text-xs sm:text-sm leading-relaxed text-zinc-200 font-sans-body">
                        {selectedMudra.description}
                      </p>
                    </div>

                    {/* Viniyoga Usages List Box */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#1B050B]/90 border border-[#0D9488]/40 mb-4 shadow-inner">
                      <h4 className="text-xs uppercase font-mono-numeric tracking-wider text-[#14B8A6] font-semibold mb-2 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#14B8A6]" />
                        Classical Usages (Viniyoga):
                      </h4>
                      <p className="text-xs sm:text-sm leading-relaxed font-cormorant italic text-amber-100">
                        {selectedMudra.usage}
                      </p>
                    </div>
                  </div>

                  {/* Modal Bottom Controls */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#3D0C18]">
                    <button
                      onClick={handlePrevMudra}
                      className="flex items-center gap-1 px-4 py-2 rounded-xl bg-[#1D060D] border border-[#4A121E] text-xs font-mono-numeric text-zinc-300 hover:border-[#14B8A6] hover:text-[#14B8A6] transition-all cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" /> Prev Movement
                    </button>
                    <span className="text-xs font-mono-numeric text-[#F7D070] font-bold">
                      {selectedMudra.name}
                    </span>
                    <button
                      onClick={handleNextMudra}
                      className="flex items-center gap-1 px-4 py-2 rounded-xl bg-[#1D060D] border border-[#4A121E] text-xs font-mono-numeric text-zinc-300 hover:border-[#14B8A6] hover:text-[#14B8A6] transition-all cursor-pointer"
                    >
                      Next Movement <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                /* ── 2-COLUMN MODAL CONTENT FOR ASAMYUKTA & SAMYUKTA HASTAS (FRAMED PHOTO ON LEFT) ── */
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">

                  {/* Left Column: Framed Gesture Photo */}
                  <div className="md:col-span-5 w-full flex flex-col items-center">
                    <div className="relative w-full aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden border-2 border-[#E5A93C]/60 shadow-xl bg-[#140307]">
                      {getMudraImage(selectedMudra, activeTab) ? (
                        <img
                          src={getMudraImage(selectedMudra, activeTab)}
                          alt={selectedMudra.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-4xl bg-[#1A040A]">
                          {activeTab === 'samyukta' ? '👐' : '✋'}
                        </div>
                      )}
                      {/* Golden corner brackets */}
                      <div className="absolute inset-0 border border-[#E5A93C]/30 rounded-2xl pointer-events-none">
                        <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#14B8A6]" />
                        <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#14B8A6]" />
                        <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-[#14B8A6]" />
                        <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#14B8A6]" />
                      </div>
                    </div>
                    <span className="text-[10px] font-mono-numeric uppercase tracking-wider text-[#14B8A6] font-semibold mt-2.5">
                      Abhinaya Darpana Canonical
                    </span>
                  </div>

                  {/* Right Column: Full Shastra Description & Viniyoga */}
                  <div className="md:col-span-7 flex flex-col justify-between h-full">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#0D9488]/20 border border-[#0D9488]/40 text-[#14B8A6] text-[10px] font-mono-numeric uppercase tracking-wider mb-2">
                        <span>{activeTab === 'asamyukta' ? 'Single Hand Mudra' : 'Double Hand Mudra'}</span>
                      </div>

                      <h3 className="font-marcellus text-3xl sm:text-4xl font-bold text-[#F7D070] mb-3">
                        {selectedMudra.name}
                      </h3>

                      {/* Posture Execution Box */}
                      <div className="p-4 rounded-2xl bg-[#1B050B]/90 border border-[#4A121E] mb-3 shadow-inner">
                        <h4 className="text-xs uppercase font-mono-numeric tracking-wider text-[#E5A93C] font-semibold mb-1.5 flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5" />
                          Posture &amp; Execution:
                        </h4>
                        <p className="text-xs sm:text-sm leading-relaxed text-zinc-200 font-sans-body">
                          {selectedMudra.description}
                        </p>
                      </div>

                      {/* Viniyoga Usages List Box */}
                      <div className="p-4 rounded-2xl bg-[#1B050B]/90 border border-[#0D9488]/40 mb-4 shadow-inner">
                        <h4 className="text-xs uppercase font-mono-numeric tracking-wider text-[#14B8A6] font-semibold mb-1.5 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#14B8A6]" />
                          Classical Usages (Viniyoga):
                        </h4>
                        <p className="text-xs sm:text-sm leading-relaxed font-cormorant italic text-amber-100">
                          {selectedMudra.usage}
                        </p>
                      </div>
                    </div>

                    {/* Modal Bottom Controls */}
                    <div className="flex items-center justify-between pt-3 border-t border-[#3D0C18]">
                      <button
                        onClick={handlePrevMudra}
                        className="flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-[#1D060D] border border-[#4A121E] text-xs font-mono-numeric text-zinc-300 hover:border-[#E5A93C] hover:text-[#F7D070] transition-all cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" /> Prev Item
                      </button>
                      <span className="text-xs font-mono-numeric text-[#F7D070] font-bold">
                        {selectedMudra.name}
                      </span>
                      <button
                        onClick={handleNextMudra}
                        className="flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-[#1D060D] border border-[#4A121E] text-xs font-mono-numeric text-zinc-300 hover:border-[#E5A93C] hover:text-[#F7D070] transition-all cursor-pointer"
                      >
                        Next Item <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
