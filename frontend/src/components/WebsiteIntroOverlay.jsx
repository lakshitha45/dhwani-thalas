import React, { useState } from 'react';
import { Sparkles, ArrowRight, Flame, Info, CheckCircle2, BookOpen } from 'lucide-react';

// The 3 Fundamental Categories from Abhinaya Darpana & Natya Shastra (Unit IV)
const THREE_NATYA_ASPECTS = [
  {
    id: 'nirutham',
    name: 'Nirutham',
    sanskritName: 'नृत्त · Nritta',
    tag: 'Pure Rhythm',
    sutra: 'रसभावविहीनं तु नृत्तमित्यभिधीयते',
    transliteration: 'Rasa bhaavaviheenaantu nrittamityabhidiyate',
    definition: 'Pure dance with rhythmic bodily movements and footwork based strictly on Tala and Laya, without facial expressions or emotional mime.',
    items: [
      { name: 'Alarippu', desc: 'The opening invocatory piece of pure rhythmic footwork seeking divine blessings.' },
      { name: 'Kauthuvam', desc: 'Classical rhythmic hymn praising temple deities with rhythmic bols.' },
      { name: 'Jathiswaram', desc: 'Pure rhythmic nritta dance set to melodic swara passages and intricate jatis.' }
    ]
  },
  {
    id: 'nrithiyam',
    name: 'Nrithiyam',
    sanskritName: 'नृत्य · Nritya',
    tag: 'Rhythm + Abhinaya',
    sutra: 'रसभावव्यञ्जनादियुक्तं नृत्यमितीर्यते',
    transliteration: 'Rasabhaavavyanjanaadiyuktam nrutyamitiryate',
    definition: 'Expressive dance combining footwork and Angika Abhinaya (Hastas, eyes, facial expressions) to convey the emotional meaning and Rasa of the lyrics.',
    items: [
      { name: 'Swarajathi', desc: 'Elaborate composition combining intense rhythmic jathis and expressive abhinaya.' },
      { name: 'Sabdam', desc: 'Narrative song introduced after Jathiswaram interpreting devotional lyrics.' },
      { name: 'Varnam', desc: 'The crowning centerpiece of a Bharatanatyam recital balancing nritta and abhinaya.' }
    ]
  },
  {
    id: 'natyam',
    name: 'Natyam',
    sanskritName: 'नाट्य · Natya',
    tag: 'Drama & Storytelling',
    sutra: 'नाट्यं तन्नाटकं चैव पूज्यं पूर्वकथायुतम्',
    transliteration: 'Natyam tannatakam chaiva poojyam poorvakathayutam',
    definition: 'Dramatic theatrical dance combining Iyal (Literature), Isai (Music), and Natakam (Drama). The full narrative manifestation of Rasa, Bhava, and epic stories.',
    items: [
      { name: 'Padam', desc: 'Slow, soulful lyrical composition devoted to nayaka-nayika bhava.' },
      { name: 'Javali', desc: 'Lively, expressive romantic song rich in subtle human emotions.' },
      { name: 'Kuravanji', desc: 'Traditional Tamil fortune-teller dance drama set to classical ragas.' },
      { name: 'Natakam', desc: 'Full-length classical dance-drama enacting Puranic and epic tales.' }
    ]
  }
];

export default function WebsiteIntroOverlay({ onExplore }) {
  const [activeAspect, setActiveAspect] = useState('nirutham');
  const [selectedItemDetail, setSelectedItemDetail] = useState(null);

  return (
    <div className="w-full min-h-screen temple-maroon-stage text-zinc-100 font-sans-body relative pb-20 selection:bg-[#E5A93C]/30 selection:text-amber-200">
      
      {/* Background Deep Kumkum Maroon Texture & Silk Lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[950px] h-[580px] bg-gradient-to-b from-[#E5A93C]/14 via-[#BA1C3E]/10 to-transparent blur-[140px]" />
        <div className="absolute top-[35%] right-[-10%] w-[550px] h-[480px] bg-[#0D9488]/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[650px] h-[520px] bg-[#BA1C3E]/18 blur-[140px] rounded-full" />
      </div>

      {/* Main Landing Hub Container */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex flex-col items-center text-center">
        
        {/* ── 1 & 2. PERMANENT FRAMED HERO ILLUSTRATION (85-90% Frame Fill + Subtle Ambient Glow) ── */}
        <section aria-label="Classical Bharatanatyam Illustration" className="relative w-full max-w-3xl aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden border-2 border-[#E5A93C]/65 shadow-[0_0_60px_rgba(229,169,60,0.3)] bg-[#150307] flex items-center justify-center mb-6 p-2 sm:p-3 group">
          
          {/* Subtle Ambient Radial Gold Glow Behind Illustration */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E5A93C]/25 via-[#BA1C3E]/12 to-transparent blur-2xl rounded-3xl pointer-events-none" />

          {/* High-Fill Sacred Natya Line Art Illustration (fills ~88% of inner frame) */}
          <img
            src="/hastavidya_sketch.png"
            alt="Hand-drawn Classical Bharatanatyam Natya Line Art"
            className="w-full h-full object-contain scale-[1.04] sm:scale-[1.08] drop-shadow-[0_0_30px_rgba(229,169,60,0.45)] transition-transform duration-700 group-hover:scale-[1.10] relative z-10"
          />

          {/* Temple Arch Golden Border Overlays with Kanchipuram Teal Accents */}
          <div className="absolute inset-0 border-[3px] border-[#E5A93C]/40 rounded-3xl pointer-events-none z-20">
            <div className="absolute top-2.5 left-2.5 w-8 h-8 border-t-2 border-l-2 border-[#14B8A6]" />
            <div className="absolute top-2.5 right-2.5 w-8 h-8 border-t-2 border-r-2 border-[#14B8A6]" />
            <div className="absolute bottom-2.5 left-2.5 w-8 h-8 border-b-2 border-l-2 border-[#14B8A6]" />
            <div className="absolute bottom-2.5 right-2.5 w-8 h-8 border-b-2 border-r-2 border-[#14B8A6]" />
          </div>
        </section>

        {/* ── HEADER TITLE ──────────────────────────────────────────────── */}
        <header className="w-full max-w-3xl mb-4">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2B0810]/95 border border-[#E5A93C]/40 text-[#F7D070] text-xs font-marcellus tracking-[0.2em] uppercase mb-2.5 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#14B8A6]" />
            <span>Classical Carnatic Shastra &amp; Mudra Tradition</span>
          </div>

          {/* Grand Marcellus Title */}
          <h1 className="font-marcellus text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-amber-50 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
            <span className="turmeric-shimmer">Dhwani Thalas</span>
            <span className="text-[#0D9488] font-normal mx-2 sm:mx-3">·</span>
            <span className="text-zinc-100 font-cormorant italic font-light">HastaVidya</span>
          </h1>
          <p className="mt-2 text-xs sm:text-sm font-cormorant italic text-amber-200/75 max-w-2xl mx-auto">
            A unified digital sanctuary for Carnatic rhythm calculations, Tala shastra, and Bharatanatyam mudra mastery.
          </p>
        </header>

        {/* ── 3 & 4. LABELED SANSKRIT SHLOKAS WITH ENHANCED HIERARCHY & BREATHING ROOM ── */}
        <section aria-label="Classical Shlokas" className="w-full max-w-3xl space-y-4 my-2">
          
          {/* ── SHLOKA 1: On the Origin of Dance ── */}
          <article className="p-4 sm:p-5 rounded-2xl bg-[#23070E]/85 border border-[#E5A93C]/35 shadow-xl text-center backdrop-blur-md transition-all hover:border-[#E5A93C]/55">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#350A14] border border-[#E5A93C]/30 text-[#E5A93C] text-[10px] sm:text-[11px] font-mono-numeric font-semibold uppercase tracking-[0.2em] mb-3">
              <span>✦ On the Origin of Dance ✦</span>
            </div>

            {/* Layer 1: Devanagari (Primary) */}
            <p className="font-marcellus text-base sm:text-lg md:text-xl text-[#F7D070] font-bold tracking-wide leading-relaxed">
              आङ्गिकं भुवनं यस्य वाचिकं सर्ववाङ्ग्मयम् ।<br className="hidden sm:inline" />
              {' '}आहार्यं चन्द्रतारादि तं नुमः सात्त्विकं शिवम् ॥
            </p>

            {/* Layer 2: Transliteration (Secondary - all-caps, lighter weight & opacity) */}
            <p className="mt-2.5 text-[11px] sm:text-xs font-mono-numeric text-[#14B8A6]/90 font-medium tracking-widest uppercase">
              Āṅgikaṁ Bhuvanaṁ Yasya Vācikaṁ Sarva-Vāṅmayam · Āhāryaṁ Candra-Tārādi Taṁ Numaḥ Sāttvikaṁ Śivam
            </p>

            {/* Layer 3: Translation (Tertiary - Cormorant Garamond italic) */}
            <p className="mt-2.5 text-xs sm:text-sm font-cormorant italic text-amber-100/80 leading-relaxed max-w-2xl mx-auto">
              "Whose bodily movement is the entire universe, whose speech is all language, whose ornaments are the moon and stars — to that pure, divine Shiva, we bow in reverence."
            </p>
          </article>

          {/* ── SHLOKA 2: On the Chain of Rasa ── */}
          <article className="p-4 sm:p-5 rounded-2xl bg-[#23070E]/85 border border-[#E5A93C]/35 shadow-xl text-center backdrop-blur-md transition-all hover:border-[#E5A93C]/55">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#0D3833] border border-[#14B8A6]/30 text-[#14B8A6] text-[10px] sm:text-[11px] font-mono-numeric font-semibold uppercase tracking-[0.2em] mb-3">
              <span>✦ On the Chain of Rasa ✦</span>
            </div>

            {/* Layer 1: Devanagari (Primary) */}
            <p className="font-marcellus text-base sm:text-lg md:text-xl text-[#F7D070] font-bold tracking-wide leading-relaxed">
              यतो हस्तस्ततो दृष्टिर्यतो दृष्टिस्ततो मनः ।<br className="hidden sm:inline" />
              {' '}यतो मनस्ततो भावो यतो भावस्ततो रसः ॥
            </p>

            {/* Layer 2: Transliteration (Secondary - all-caps, lighter weight & opacity) */}
            <p className="mt-2.5 text-[11px] sm:text-xs font-mono-numeric text-[#14B8A6]/90 font-medium tracking-widest uppercase">
              Yato Hastas Tato Drishti · Yato Drishtis Tato Manah · Yato Manas Tato Bhavo · Yato Bhavas Tato Rasah
            </p>

            {/* Layer 3: Translation (Tertiary - Cormorant Garamond italic) */}
            <p className="mt-2.5 text-xs sm:text-sm font-cormorant italic text-amber-100/80 leading-relaxed max-w-2xl mx-auto">
              "Where the hand goes, the eyes follow; where the eyes go, the mind follows; where the mind goes, emotion awakens; where emotion awakens, aesthetic relish (Rasa) is born."
            </p>
          </article>

        </section>

        {/* ── 5. TAILORED CTA BUTTONS (Consistent Sub-App Color Palettes) ── */}
        <section aria-label="Explore Sub-Apps" className="mt-6 mb-8 flex flex-wrap items-center justify-center gap-4">
          
          {/* Button 1: Explore HastaVidya Mudras (HastaVidya Maroon/Gold/Teal Theme - NO PINK) */}
          <button
            onClick={() => onExplore('hastavidya')}
            className="group flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-2xl bg-[#7A1220] border-2 border-[#E5A93C] text-[#FFFDF5] font-marcellus font-bold text-sm sm:text-base shadow-[0_0_25px_rgba(122,18,32,0.7)] hover:bg-[#8E1627] hover:border-[#F7D070] hover:scale-105 active:scale-98 transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#F7D070] group-hover:rotate-12 transition-transform" />
            <span>Explore HastaVidya Mudras</span>
            <ArrowRight className="w-4 h-4 text-[#F7D070] group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Button 2: Practice Dhwani Thalas (Dhwani Thalas Gold on Dark Theme) */}
          <button
            onClick={() => onExplore('thalas')}
            className="group flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-2xl bg-[#171408] border-2 border-[#D4A017] text-[#F7D070] font-sans-body font-bold text-sm sm:text-base shadow-[0_0_20px_rgba(212,160,23,0.3)] hover:bg-[#251F0D] hover:border-[#F7D070] hover:text-[#FFFDF5] hover:scale-105 active:scale-98 transition-all cursor-pointer"
          >
            <span className="font-serif-display text-base">🥁</span>
            <span>Practice Dhwani Thalas</span>
            <ArrowRight className="w-4 h-4 text-[#D4A017] group-hover:translate-x-1 transition-transform" />
          </button>

        </section>

        {/* ── 6. NATYAM, NIRUTHAM, NRITHIYAM CARDS WITH INTERACTIVE REPERTOIRE CHIPS ── */}
        <section aria-label="The Three Pillars of Natya" className="w-full max-w-4xl p-4 sm:p-6 rounded-3xl bg-[#1C050B]/90 border border-[#E5A93C]/40 shadow-2xl text-left backdrop-blur-md">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4 border-b border-[#3D0C18] pb-3">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-[#E5A93C]" />
              <h2 className="font-marcellus text-lg sm:text-xl font-bold text-[#F7D070]">
                Natyam · Nirutham · Nrithiyam
              </h2>
            </div>
            <span className="text-[10px] sm:text-xs font-mono-numeric uppercase tracking-wider text-[#14B8A6] font-semibold bg-[#0D3833]/70 px-2.5 py-1 rounded-full border border-[#14B8A6]/30">
              Abhinaya Darpana · Unit IV
            </span>
          </div>

          {/* 3 Pillar Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {THREE_NATYA_ASPECTS.map((aspect) => {
              const isSelected = activeAspect === aspect.id;
              return (
                <div
                  key={aspect.id}
                  onClick={() => setActiveAspect(aspect.id)}
                  className={`p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-gradient-to-b from-[#2E0912] to-[#1E050B] border-[#E5A93C] shadow-[0_0_20px_rgba(229,169,60,0.25)] scale-[1.01]'
                      : 'bg-[#150308]/80 border-[#4A121E] hover:border-[#E5A93C]/50 hover:bg-[#20060C]'
                  }`}
                >
                  <div>
                    {/* Header with Title & Eyebrow Tag */}
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="font-marcellus text-base font-bold text-amber-50">
                        {aspect.name}
                      </h3>
                      <span className="text-[9px] font-mono-numeric font-bold px-2 py-0.5 rounded-full bg-[#350A14] text-[#F7D070] border border-[#E5A93C]/30 uppercase tracking-wider">
                        {aspect.tag}
                      </span>
                    </div>

                    <div className="text-xs font-marcellus text-[#E5A93C] mb-1.5">
                      {aspect.sanskritName}
                    </div>

                    {/* Sanskrit Sutra */}
                    <p className="text-[11px] font-mono-numeric text-[#14B8A6] italic mb-2 line-clamp-1" title={aspect.transliteration}>
                      "{aspect.sutra}"
                    </p>

                    {/* Definition */}
                    <p className="text-xs leading-relaxed text-zinc-300 font-sans-body mb-3">
                      {aspect.definition}
                    </p>
                  </div>

                  {/* Interactive Repertoire Chips (Requirement 6) */}
                  <div className="pt-3 border-t border-[#350A14]/90">
                    <span className="text-[10px] font-mono-numeric uppercase tracking-wider text-[#E5A93C] font-semibold block mb-1.5">
                      Key Repertoire Items:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {aspect.items.map((item) => (
                        <button
                          key={item.name}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedItemDetail(item);
                          }}
                          className="px-2.5 py-1 rounded-lg bg-[#23070E] border border-[#4A121E] text-amber-200/90 hover:border-[#E5A93C] hover:text-[#F7D070] hover:bg-[#380C17] hover:scale-105 active:scale-95 text-[10px] sm:text-[11px] font-mono-numeric font-medium transition-all shadow-sm cursor-pointer flex items-center gap-1"
                          title="Click to view item details"
                        >
                          <span>{item.name}</span>
                          <Info className="w-2.5 h-2.5 text-[#14B8A6] opacity-70" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Repertoire Detail Drawer/Toast (when a chip is clicked) */}
          {selectedItemDetail && (
            <div className="mt-4 p-3.5 rounded-2xl bg-[#2D0A14] border border-[#E5A93C]/50 text-amber-100 flex items-start justify-between gap-3 shadow-lg animate-fadeIn">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#14B8A6] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-marcellus text-sm font-bold text-[#F7D070]">
                    {selectedItemDetail.name}
                  </h4>
                  <p className="text-xs font-sans-body text-zinc-300 mt-0.5">
                    {selectedItemDetail.desc}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedItemDetail(null)}
                className="text-xs text-zinc-400 hover:text-zinc-100 font-mono-numeric px-2 py-0.5 rounded bg-[#1C050B] border border-[#4A121E] cursor-pointer"
              >
                Dismiss
              </button>
            </div>
          )}
        </section>

      </main>
    </div>
  );
}
