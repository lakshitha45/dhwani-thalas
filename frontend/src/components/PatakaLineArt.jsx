import React, { useState, useEffect } from 'react';
import { Sparkles, RefreshCw } from 'lucide-react';

export default function PatakaLineArt({ className = '', onReplay }) {
  const [animKey, setAnimKey] = useState(0);

  const handleReplay = (e) => {
    e.stopPropagation();
    setAnimKey((prev) => prev + 1);
    if (onReplay) onReplay();
  };

  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      {/* Background Sacred Mandala & Temple Light */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-[#E5A93C]/10 via-[#0D9488]/15 to-[#BA1C3E]/20 blur-2xl animate-pulse" />
        <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-full border border-[#E5A93C]/20 border-dashed animate-[spin_60s_linear_infinite]" />
        <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border border-[#0D9488]/25" />
      </div>

      {/* SVG Hand-Drawn Pataka Mudra Line Art */}
      <div className="relative z-10 group" key={animKey}>
        <svg
          viewBox="0 0 400 480"
          className="w-56 h-64 sm:w-64 sm:h-72 md:w-72 md:h-80 drop-shadow-[0_10px_25px_rgba(229,169,60,0.25)] transition-transform duration-500 hover:scale-[1.03]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Turmeric Gold Gradient */}
            <linearGradient id="turmericGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2B2" />
              <stop offset="30%" stopColor="#F6CB6A" />
              <stop offset="70%" stopColor="#E5A93C" />
              <stop offset="100%" stopColor="#B87B15" />
            </linearGradient>

            {/* Kanchipuram Teal Gradient */}
            <linearGradient id="tealGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#044E54" />
              <stop offset="50%" stopColor="#0D9488" />
              <stop offset="100%" stopColor="#14B8A6" />
            </linearGradient>

            {/* Kumkum Alta Red Gradient */}
            <radialGradient id="kumkumAlta" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E63956" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#BA1C3E" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#BA1C3E" stopOpacity="0" />
            </radialGradient>

            {/* Subtle Gold Shadow Filter */}
            <filter id="goldGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* 1. Halo / Background Lotus Petal Outline */}
          <g opacity="0.35" stroke="url(#tealGrad)" strokeWidth="1.2" strokeDasharray="3 3">
            <circle cx="200" cy="240" r="140" />
            <circle cx="200" cy="240" r="160" strokeOpacity="0.5" />
          </g>

          {/* 2. Traditional Red Alta Dye Center Mandala on Palm */}
          <circle
            cx="200"
            cy="275"
            r="28"
            fill="url(#kumkumAlta)"
            className="transition-all duration-700 group-hover:r-[32]"
          />
          <circle
            cx="200"
            cy="275"
            r="28"
            stroke="#E5A93C"
            strokeWidth="1.2"
            strokeDasharray="4 2"
            opacity="0.75"
            className="draw-path-delay-2"
          />
          <circle cx="200" cy="275" r="7" fill="#E63956" opacity="0.9" />

          {/* Red Alta Dye on Fingertips */}
          <g fill="#BA1C3E" opacity="0.4">
            {/* Index tip */}
            <ellipse cx="160" cy="88" rx="8" ry="12" transform="rotate(-3 160 88)" />
            {/* Middle tip */}
            <ellipse cx="188" cy="74" rx="8.5" ry="13" />
            {/* Ring tip */}
            <ellipse cx="216" cy="80" rx="8" ry="12.5" transform="rotate(2 216 80)" />
            {/* Little tip */}
            <ellipse cx="242" cy="108" rx="7.5" ry="11" transform="rotate(5 242 108)" />
            {/* Thumb tip */}
            <ellipse cx="140" cy="248" rx="8" ry="10" transform="rotate(-30 140 248)" />
          </g>

          {/* 3. Outer Hand Silhouette & Fingers (Pataka Mudra) - Animated Stroke */}
          {/* Main Hand Contour: Wrist -> Thumb -> 4 Fingers Pressed Straight -> Outer Palm -> Wrist */}
          <path
            d="
              M 152 420
              C 152 380, 150 345, 146 325
              C 142 305, 126 288, 120 268
              C 114 248, 124 235, 138 238
              C 148 240, 160 252, 166 266
              C 168 252, 166 180, 156 122
              C 152 98, 156 75, 162 76
              C 168 77, 172 95, 174 135
              C 176 115, 180 82, 186 62
              C 189 52, 195 52, 198 62
              C 202 85, 203 125, 203 145
              C 205 125, 208 88, 214 68
              C 217 58, 224 60, 226 70
              C 229 95, 229 135, 228 160
              C 232 140, 237 115, 244 98
              C 248 88, 256 94, 256 106
              C 256 135, 252 185, 250 230
              C 248 275, 252 320, 250 350
              C 248 375, 245 400, 245 420
            "
            stroke="url(#turmericGoldGrad)"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="draw-path-anim drop-shadow-[0_0_8px_rgba(246,203,106,0.6)]"
          />

          {/* 4. Finger Separation Lines (Fingers Pressed Close in Pataka) */}
          {/* Between Index and Middle */}
          <path
            d="M 174 135 L 176 215"
            stroke="url(#turmericGoldGrad)"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.85"
            className="draw-path-delay-1"
          />
          {/* Between Middle and Ring */}
          <path
            d="M 203 145 L 204 220"
            stroke="url(#turmericGoldGrad)"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.85"
            className="draw-path-delay-1"
          />
          {/* Between Ring and Little */}
          <path
            d="M 228 160 L 228 230"
            stroke="url(#turmericGoldGrad)"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.85"
            className="draw-path-delay-1"
          />

          {/* 5. Inner Palm Crease Lines (Classical Hastakriya Lines) */}
          <path
            d="M 160 270 C 175 285, 205 295, 235 280"
            stroke="#F7D070"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.75"
            className="draw-path-delay-2"
          />
          <path
            d="M 164 290 C 185 305, 215 315, 240 305"
            stroke="#F7D070"
            strokeWidth="1.3"
            strokeLinecap="round"
            opacity="0.6"
            className="draw-path-delay-2"
          />
          {/* Life Line around Thumb mound (Shukra Sthana) */}
          <path
            d="M 166 266 C 172 300, 170 335, 160 360"
            stroke="#F7D070"
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.7"
            className="draw-path-delay-2"
          />

          {/* 6. Knuckle & Finger Segment Creases */}
          <g stroke="#E5A93C" strokeWidth="1.2" strokeLinecap="round" opacity="0.6">
            {/* Index creases */}
            <path d="M 158 128 Q 165 129 172 128" />
            <path d="M 156 168 Q 166 170 174 168" />
            {/* Middle creases */}
            <path d="M 186 115 Q 194 116 202 115" />
            <path d="M 186 158 Q 195 160 203 158" />
            {/* Ring creases */}
            <path d="M 214 122 Q 221 123 228 122" />
            <path d="M 213 166 Q 220 168 228 166" />
            {/* Little creases */}
            <path d="M 238 145 Q 244 146 250 145" />
            <path d="M 236 186 Q 242 188 248 186" />
          </g>

          {/* 7. Temple Kangan (Gold & Teal Wrist Bangle / Valaiyal) */}
          <g className="draw-path-delay-1">
            {/* Bangle 1 (Turmeric Gold with Gems) */}
            <path
              d="M 144 380 Q 198 395 252 380"
              stroke="url(#turmericGoldGrad)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Bangle 2 (Kanchipuram Teal) */}
            <path
              d="M 146 392 Q 198 406 250 392"
              stroke="url(#tealGrad)"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            {/* Bangle 3 (Gold with Ghungroo / Bell accents) */}
            <path
              d="M 148 404 Q 198 418 248 404"
              stroke="url(#turmericGoldGrad)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Small Ghungroo bells dangling */}
            <circle cx="170" cy="414" r="3.5" fill="#F6CB6A" />
            <circle cx="198" cy="418" r="4" fill="#F6CB6A" />
            <circle cx="226" cy="414" r="3.5" fill="#F6CB6A" />
          </g>

          {/* 8. Glowing Decorative Star Accents */}
          <g fill="#FFF8DB" opacity="0.85">
            <polygon points="198,35 200,42 207,44 200,46 198,53 196,46 189,44 196,42" />
            <polygon points="135,190 136.5,194 141,195.5 136.5,197 135,201 133.5,197 129,195.5 133.5,194" />
            <polygon points="265,220 266.5,224 271,225.5 266.5,227 265,231 263.5,227 259,225.5 263.5,224" />
          </g>
        </svg>
      </div>

      {/* Caption Tag with Replay Button */}
      <div className="mt-2.5 flex items-center gap-2 px-3 py-1 rounded-full bg-[#2B0810]/90 border border-[#E5A93C]/30 text-[#E5A93C] text-[11px] font-mono-numeric shadow-md backdrop-blur-md">
        <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] animate-pulse"></span>
        <span className="font-semibold tracking-wider uppercase font-sans-body">Pataka Hasta (Flag Mudra)</span>
        <button
          onClick={handleReplay}
          className="ml-1 p-0.5 rounded text-zinc-400 hover:text-[#E5A93C] hover:bg-[#3D0C17] transition-all cursor-pointer"
          title="Re-animate Pataka Mudra Line Art"
        >
          <RefreshCw className="w-3 h-3 hover:rotate-180 transition-transform duration-500" />
        </button>
      </div>
    </div>
  );
}
