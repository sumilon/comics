import React from 'react';

// ============ TORTOISE - Kambugriva ============
export const Tortoise = ({ size = 130, mood = 'happy', className = '' }) => {
  const eyeOpen = !['angry', 'furious', 'falling'].includes(mood);
  return (
    <svg width={size} height={size * 0.75} viewBox="0 0 200 150" className={className}>
      <defs>
        <radialGradient id="shellTop" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#6D9B3A" />
          <stop offset="60%" stopColor="#4A7A2E" />
          <stop offset="100%" stopColor="#33691E" />
        </radialGradient>
        <radialGradient id="shellBelly" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#C8B87A" />
          <stop offset="100%" stopColor="#A89B6A" />
        </radialGradient>
        <radialGradient id="tortSkin" cx="40%" cy="40%">
          <stop offset="0%" stopColor="#7CB342" />
          <stop offset="100%" stopColor="#558B2F" />
        </radialGradient>
        <filter id="tortShadow"><feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.25" /></filter>
      </defs>
      {/* Legs */}
      <ellipse cx="65" cy="120" rx="14" ry="18" fill="url(#tortSkin)" />
      <ellipse cx="135" cy="120" rx="14" ry="18" fill="url(#tortSkin)" />
      <ellipse cx="55" cy="115" rx="12" ry="14" fill="url(#tortSkin)" />
      <ellipse cx="145" cy="115" rx="12" ry="14" fill="url(#tortSkin)" />
      {/* Feet */}
      <ellipse cx="65" cy="135" rx="10" ry="5" fill="#558B2F" />
      <ellipse cx="135" cy="135" rx="10" ry="5" fill="#558B2F" />
      {/* Tail */}
      <path d="M155,105 Q170,108 172,100 Q170,106 160,105" fill="url(#tortSkin)" />
      {/* Shell body */}
      <ellipse cx="100" cy="95" rx="58" ry="30" fill="url(#shellBelly)" filter="url(#tortShadow)" />
      {/* Shell dome */}
      <path d="M42,95 Q42,45 100,40 Q158,45 158,95" fill="url(#shellTop)" />
      {/* Shell pattern - hexagonal plates */}
      <path d="M75,55 L90,48 L110,48 L125,55 L125,72 L110,80 L90,80 L75,72 Z" fill="none" stroke="#33691E" strokeWidth="1.5" opacity="0.5" />
      <path d="M60,70 L75,55 M125,55 L140,70" stroke="#33691E" strokeWidth="1.5" opacity="0.4" />
      <path d="M60,85 L75,72 L90,80 M110,80 L125,72 L140,85" stroke="#33691E" strokeWidth="1.5" opacity="0.4" />
      <line x1="100" y1="48" x2="100" y2="40" stroke="#33691E" strokeWidth="1" opacity="0.3" />
      {/* Shell highlight */}
      <ellipse cx="90" cy="55" rx="15" ry="8" fill="#81C784" opacity="0.25" />
      {/* Head */}
      <ellipse cx="35" cy="85" rx="20" ry="18" fill="url(#tortSkin)" />
      {/* Neck */}
      <rect x="40" y="78" width="15" height="20" fill="url(#tortSkin)" rx="5" />
      {/* Eyes */}
      {eyeOpen ? <>
        <circle cx="28" cy="80" r="5" fill="white">
          <animate attributeName="r" values="5;0.5;5" dur="4s" begin="2s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
        </circle>
        <circle cx="28" cy="80" r="3" fill="#2C1810">
          <animate attributeName="r" values="3;0.3;3" dur="4s" begin="2s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
        </circle>
        <circle cx="27" cy="79" r="1" fill="white">
          <animate attributeName="r" values="1;0.1;1" dur="4s" begin="2s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
        </circle>
      </> : <>
        <path d="M23,80 Q28,76 33,80" stroke="#2C1810" strokeWidth="2" fill="none" />
      </>}
      {/* Mouth */}
      {mood === 'chatty' || mood === 'happy' ?
        <path d="M20,92 Q28,98 36,92" stroke="#33691E" strokeWidth="1.5" fill="none" /> :
        mood === 'panicked' || mood === 'furious' ?
        <ellipse cx="28" cy="93" rx="5" ry="6" fill="#2C1810" /> :
        <path d="M22,93 Q28,95 34,93" stroke="#33691E" strokeWidth="1.5" fill="none" />
      }
      {/* Blush */}
      {['happy', 'chatty'].includes(mood) &&
        <circle cx="20" cy="88" r="4" fill="#FF9B9B" opacity="0.3" />
      }
    </svg>
  );
};

// ============ GOOSE ============
export const Goose = ({ size = 120, side = 'left', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" className={className}
    style={side === 'right' ? { transform: 'scaleX(-1)' } : {}}>
    <defs>
      <radialGradient id="gooseBody" cx="40%" cy="35%">
        <stop offset="0%" stopColor="#FAFAFA" />
        <stop offset="100%" stopColor="#E0E0E0" />
      </radialGradient>
      <filter id="gooseShadow"><feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.2" /></filter>
    </defs>
    {/* Tail feathers */}
    <path d="M135,100 Q155,85 160,70 Q158,88 150,98" fill="#BDBDBD" />
    <path d="M138,105 Q162,92 165,78 Q162,95 152,105" fill="#E0E0E0" />
    {/* Body */}
    <ellipse cx="100" cy="115" rx="48" ry="35" fill="url(#gooseBody)" filter="url(#gooseShadow)" />
    {/* Wing */}
    <path d="M70,95 Q55,85 50,100 Q55,110 70,115 Q90,120 110,112" fill="#BDBDBD" />
    <path d="M75,98 Q62,92 58,103 Q62,110 75,113" fill="#E0E0E0" opacity="0.5" />
    {/* Neck */}
    <path d="M65,100 Q55,70 50,45 Q48,35 55,30" fill="url(#gooseBody)" stroke="#E0E0E0" strokeWidth="1" />
    <path d="M72,100 Q63,72 58,48 Q56,38 60,33" fill="url(#gooseBody)" />
    {/* Head */}
    <circle cx="55" cy="32" r="16" fill="url(#gooseBody)" />
    {/* Eye */}
    <circle cx="48" cy="28" r="4" fill="white" />
    <circle cx="48" cy="28" r="2.5" fill="#1A1A1A" />
    <circle cx="47" cy="27" r="1" fill="white" />
    {/* Beak */}
    <path d="M38,32 L25,35 L38,38" fill="#FF8F00" stroke="#E65100" strokeWidth="0.5" />
    {/* Feet */}
    <path d="M85,148 L78,162 L70,155 L78,162 L88,156 L78,162 L82,148" fill="#FF8F00" />
    <path d="M115,148 L108,162 L100,155 L108,162 L118,156 L108,162 L112,148" fill="#FF8F00" />
  </svg>
);

// ============ JACKAL ============
export const Jackal = ({ size = 140, blue = false, mood = 'neutral', className = '' }) => {
  const bodyColor = blue ? '#2979FF' : '#B0874A';
  const darkColor = blue ? '#1565C0' : '#8D6E3A';
  const lightColor = blue ? '#64B5F6' : '#D4B87A';
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" className={className}>
      <defs>
        <radialGradient id={`jackalFur${blue?'B':''}`} cx="40%" cy="35%">
          <stop offset="0%" stopColor={lightColor} />
          <stop offset="100%" stopColor={bodyColor} />
        </radialGradient>
        <filter id="jackalShadow"><feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.25" /></filter>
      </defs>
      {/* Tail */}
      <path d={`M48,140 Q20,120 15,95 Q12,85 18,90 Q22,100 35,120 Q42,132 48,140`}
        fill={bodyColor} />
      <path d="M15,95 Q14,90 18,88" fill={lightColor} />
      {/* Body */}
      <ellipse cx="100" cy="135" rx="42" ry="38" fill={`url(#jackalFur${blue?'B':''})`} filter="url(#jackalShadow)" />
      <ellipse cx="100" cy="142" rx="28" ry="24" fill={lightColor} opacity="0.6" />
      {/* Legs */}
      <rect x="68" y="160" width="12" height="28" rx="5" fill={bodyColor} />
      <rect x="120" y="160" width="12" height="28" rx="5" fill={bodyColor} />
      <ellipse cx="74" cy="190" rx="8" ry="5" fill={darkColor} />
      <ellipse cx="126" cy="190" rx="8" ry="5" fill={darkColor} />
      {/* Head */}
      <ellipse cx="100" cy="78" rx="32" ry="30" fill={`url(#jackalFur${blue?'B':''})`} />
      {/* Snout */}
      <ellipse cx="100" cy="95" rx="16" ry="12" fill={lightColor} />
      {/* Ears - pointy */}
      <polygon points="72,58 62,22 82,52" fill={bodyColor} />
      <polygon points="128,58 138,22 118,52" fill={bodyColor} />
      <polygon points="74,55 66,30 80,50" fill={lightColor} opacity="0.6" />
      <polygon points="126,55 134,30 120,50" fill={lightColor} opacity="0.6" />
      {/* Eyes */}
      <ellipse cx="88" cy="75" rx="6" ry={mood === 'scheming' ? 4 : 7} fill="white">
        <animate attributeName="ry" values={`${mood === 'scheming' ? 4 : 7};1;${mood === 'scheming' ? 4 : 7}`} dur="4.5s" begin="1.5s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
      </ellipse>
      <ellipse cx="112" cy="75" rx="6" ry={mood === 'scheming' ? 4 : 7} fill="white">
        <animate attributeName="ry" values={`${mood === 'scheming' ? 4 : 7};1;${mood === 'scheming' ? 4 : 7}`} dur="4.5s" begin="1.5s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
      </ellipse>
      <circle cx="88" cy="75" r="3.5" fill={blue ? '#0D47A1' : '#4A3728'}>
        <animate attributeName="r" values="3.5;0.3;3.5" dur="4.5s" begin="1.5s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
      </circle>
      <circle cx="112" cy="75" r="3.5" fill={blue ? '#0D47A1' : '#4A3728'}>
        <animate attributeName="r" values="3.5;0.3;3.5" dur="4.5s" begin="1.5s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
      </circle>
      <circle cx="89" cy="73" r="1.5" fill="white">
        <animate attributeName="r" values="1.5;0.1;1.5" dur="4.5s" begin="1.5s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
      </circle>
      <circle cx="113" cy="73" r="1.5" fill="white">
        <animate attributeName="r" values="1.5;0.1;1.5" dur="4.5s" begin="1.5s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
      </circle>
      {/* Nose */}
      <ellipse cx="100" cy="88" rx="5" ry="4" fill={darkColor} />
      {/* Mouth */}
      {mood === 'howling' ?
        <ellipse cx="100" cy="100" rx="8" ry="10" fill="#3a1a0a" /> :
        mood === 'scared' || mood === 'terrified' ?
        <ellipse cx="100" cy="100" rx="6" ry="7" fill="#3a1a0a" /> :
        mood === 'regal' || mood === 'scheming' ?
        <path d="M90,98 Q100,104 110,98" stroke={darkColor} strokeWidth="2" fill="none" /> :
        <path d="M92,100 Q100,108 108,100" stroke={darkColor} strokeWidth="2" fill="none" />
      }
      {/* Crown for regal mood */}
      {mood === 'regal' && <>
        <polygon points="80,50 85,30 90,45 100,25 110,45 115,30 120,50" fill="#FFD700" stroke="#FFA000" strokeWidth="1" />
        <circle cx="100" cy="30" r="3" fill="#E53935" />
        <circle cx="87" cy="36" r="2" fill="#42A5F5" />
        <circle cx="113" cy="36" r="2" fill="#42A5F5" />
      </>}
      {blue && <ellipse cx="100" cy="135" rx="42" ry="38" fill="rgba(41,121,255,0.15)" />}
    </svg>
  );
};

// ============ LION ============
export const Lion = ({ size = 160, mood = 'neutral', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" className={className}>
    <defs>
      <radialGradient id="lionFur" cx="40%" cy="35%">
        <stop offset="0%" stopColor="#F4A742" />
        <stop offset="100%" stopColor="#D48A2C" />
      </radialGradient>
      <radialGradient id="maneGrad" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#C67A1A" />
        <stop offset="100%" stopColor="#8B5A0A" />
      </radialGradient>
      <filter id="lionShadow"><feDropShadow dx="2" dy="3" stdDeviation="3" floodOpacity="0.3" /></filter>
    </defs>
    {/* Tail */}
    <path d="M45,130 Q20,110 15,90 Q10,80 18,85 Q25,100 40,120" fill="url(#lionFur)" />
    <ellipse cx="13" cy="84" rx="6" ry="8" fill="#8B5A0A" />
    {/* Body */}
    <ellipse cx="105" cy="130" rx="50" ry="42" fill="url(#lionFur)" filter="url(#lionShadow)" />
    <ellipse cx="105" cy="138" rx="32" ry="26" fill="#F5CC84" opacity="0.5" />
    {/* Back legs */}
    <rect x="62" y="158" width="16" height="30" rx="6" fill="url(#lionFur)" />
    <rect x="132" y="158" width="16" height="30" rx="6" fill="url(#lionFur)" />
    <ellipse cx="70" cy="192" rx="10" ry="6" fill="#D48A2C" />
    <ellipse cx="140" cy="192" rx="10" ry="6" fill="#D48A2C" />
    {/* Mane - big fluffy */}
    {[0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350].map((angle, i) => (
      <ellipse key={i}
        cx={105 + 38 * Math.cos(angle * Math.PI / 180)}
        cy={68 + 38 * Math.sin(angle * Math.PI / 180)}
        rx="18" ry="14"
        fill={i % 2 === 0 ? '#A86608' : '#C67A1A'}
        transform={`rotate(${angle}, ${105 + 38 * Math.cos(angle * Math.PI / 180)}, ${68 + 38 * Math.sin(angle * Math.PI / 180)})`}
      />
    ))}
    {/* Head */}
    <circle cx="105" cy="68" r="32" fill="url(#lionFur)" />
    {/* Face interior */}
    <ellipse cx="105" cy="78" rx="20" ry="18" fill="#F5CC84" />
    {/* Eyes */}
    <ellipse cx="93" cy="64" rx="7" ry={mood === 'enraged' || mood === 'fierce' ? 5 : 8} fill="white">
      {mood !== 'enraged' && mood !== 'fierce' && <animate attributeName="ry" values="8;1;8" dur="5s" begin="3s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />}
    </ellipse>
    <ellipse cx="117" cy="64" rx="7" ry={mood === 'enraged' || mood === 'fierce' ? 5 : 8} fill="white">
      {mood !== 'enraged' && mood !== 'fierce' && <animate attributeName="ry" values="8;1;8" dur="5s" begin="3s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />}
    </ellipse>
    <circle cx="93" cy="64" r="4" fill={mood === 'enraged' ? '#B71C1C' : '#8B5A0A'}>
      {mood !== 'enraged' && mood !== 'fierce' && <animate attributeName="r" values="4;0.4;4" dur="5s" begin="3s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />}
    </circle>
    <circle cx="117" cy="64" r="4" fill={mood === 'enraged' ? '#B71C1C' : '#8B5A0A'}>
      {mood !== 'enraged' && mood !== 'fierce' && <animate attributeName="r" values="4;0.4;4" dur="5s" begin="3s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />}
    </circle>
    <circle cx="94" cy="62" r="1.5" fill="white">
      {mood !== 'enraged' && mood !== 'fierce' && <animate attributeName="r" values="1.5;0.1;1.5" dur="5s" begin="3s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />}
    </circle>
    <circle cx="118" cy="62" r="1.5" fill="white">
      {mood !== 'enraged' && mood !== 'fierce' && <animate attributeName="r" values="1.5;0.1;1.5" dur="5s" begin="3s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />}
    </circle>
    {/* Angry eyebrows */}
    {(mood === 'enraged' || mood === 'fierce' || mood === 'menacing') && <>
      <path d="M82,56 Q90,52 100,56" stroke="#5A3A0A" strokeWidth="3" fill="none" />
      <path d="M110,56 Q120,52 128,56" stroke="#5A3A0A" strokeWidth="3" fill="none" />
    </>}
    {/* Nose */}
    <ellipse cx="105" cy="76" rx="6" ry="4" fill="#8B5A0A" />
    {/* Mouth */}
    {mood === 'fierce' || mood === 'enraged' || mood === 'berserk' ? <>
      <path d="M88,84 Q105,98 122,84" stroke="#5A3A0A" strokeWidth="2" fill="#8B2020" />
      {/* Fangs */}
      <polygon points="92,84 95,92 98,84" fill="white" />
      <polygon points="112,84 115,92 118,84" fill="white" />
    </> : mood === 'panicking' ?
      <ellipse cx="105" cy="88" rx="8" ry="10" fill="#5A3A0A" /> :
      <path d="M95,86 Q105,94 115,86" stroke="#5A3A0A" strokeWidth="2" fill="none" />
    }
    {/* Whisker dots */}
    <circle cx="90" cy="80" r="1" fill="#5A3A0A" />
    <circle cx="86" cy="78" r="1" fill="#5A3A0A" />
    <circle cx="120" cy="80" r="1" fill="#5A3A0A" />
    <circle cx="124" cy="78" r="1" fill="#5A3A0A" />
  </svg>
);

// ============ RABBIT ============
export const Rabbit = ({ size = 110, mood = 'happy', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" className={className}>
    <defs>
      <radialGradient id="rabbitFur" cx="40%" cy="35%">
        <stop offset="0%" stopColor="#F5F5F5" />
        <stop offset="100%" stopColor="#D5C8B8" />
      </radialGradient>
      <filter id="rabbitShadow"><feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.2" /></filter>
    </defs>
    {/* Tail puff */}
    <circle cx="140" cy="140" r="10" fill="white" />
    {/* Body */}
    <ellipse cx="100" cy="140" rx="38" ry="35" fill="url(#rabbitFur)" filter="url(#rabbitShadow)" />
    <ellipse cx="100" cy="148" rx="24" ry="22" fill="white" opacity="0.6" />
    {/* Back feet */}
    <ellipse cx="72" cy="175" rx="16" ry="8" fill="url(#rabbitFur)" />
    <ellipse cx="128" cy="175" rx="16" ry="8" fill="url(#rabbitFur)" />
    {/* Head */}
    <circle cx="100" cy="78" r="30" fill="url(#rabbitFur)" />
    {/* Inner face */}
    <ellipse cx="100" cy="88" rx="18" ry="14" fill="white" opacity="0.4" />
    {/* Ears */}
    <ellipse cx="80" cy="30" rx="10" ry="35" fill="url(#rabbitFur)" />
    <ellipse cx="120" cy="30" rx="10" ry="35" fill="url(#rabbitFur)" />
    <ellipse cx="80" cy="30" rx="6" ry="28" fill="#FFB6C1" opacity="0.6" />
    <ellipse cx="120" cy="30" rx="6" ry="28" fill="#FFB6C1" opacity="0.6" />
    {/* Eyes */}
    <circle cx="88" cy="74" r="6" fill="white">
      <animate attributeName="r" values="6;0.5;6" dur="3.5s" begin="2.5s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
    </circle>
    <circle cx="112" cy="74" r="6" fill="white">
      <animate attributeName="r" values="6;0.5;6" dur="3.5s" begin="2.5s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
    </circle>
    <circle cx="88" cy="74" r="3.5" fill={mood === 'clever' ? '#1565C0' : '#E91E63'}>
      <animate attributeName="r" values="3.5;0.3;3.5" dur="3.5s" begin="2.5s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
    </circle>
    <circle cx="112" cy="74" r="3.5" fill={mood === 'clever' ? '#1565C0' : '#E91E63'}>
      <animate attributeName="r" values="3.5;0.3;3.5" dur="3.5s" begin="2.5s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
    </circle>
    <circle cx="89" cy="72" r="1.5" fill="white">
      <animate attributeName="r" values="1.5;0.1;1.5" dur="3.5s" begin="2.5s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
    </circle>
    <circle cx="113" cy="72" r="1.5" fill="white">
      <animate attributeName="r" values="1.5;0.1;1.5" dur="3.5s" begin="2.5s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
    </circle>
    {/* Clever eyebrow */}
    {mood === 'clever' && <>
      <path d="M80,66 Q88,62 96,66" stroke="#8D6E63" strokeWidth="2" fill="none" />
      <path d="M104,66 Q112,62 120,66" stroke="#8D6E63" strokeWidth="2" fill="none" />
    </>}
    {/* Nose */}
    <ellipse cx="100" cy="84" rx="4" ry="3" fill="#FF8A80" />
    {/* Whiskers */}
    <line x1="80" y1="84" x2="58" y2="80" stroke="#BDBDBD" strokeWidth="1" />
    <line x1="80" y1="87" x2="58" y2="90" stroke="#BDBDBD" strokeWidth="1" />
    <line x1="120" y1="84" x2="142" y2="80" stroke="#BDBDBD" strokeWidth="1" />
    <line x1="120" y1="87" x2="142" y2="90" stroke="#BDBDBD" strokeWidth="1" />
    {/* Mouth */}
    {mood === 'triumphant' ?
      <path d="M90,90 Q100,100 110,90" stroke="#8D6E63" strokeWidth="2" fill="none" /> :
      <>
        <path d="M96,90 Q100,94 104,90" stroke="#8D6E63" strokeWidth="1.5" fill="none" />
        <line x1="100" y1="87" x2="100" y2="92" stroke="#8D6E63" strokeWidth="1" />
      </>
    }
    {/* Blush */}
    <circle cx="78" cy="82" r="6" fill="#FF9B9B" opacity="0.25" />
    <circle cx="122" cy="82" r="6" fill="#FF9B9B" opacity="0.25" />
    {/* Front paws */}
    <ellipse cx="78" cy="165" rx="8" ry="10" fill="url(#rabbitFur)" />
    <ellipse cx="122" cy="165" rx="8" ry="10" fill="url(#rabbitFur)" />
  </svg>
);

// ============ GENERIC ANIMALS (for crowd scenes) ============
export const Deer = ({ size = 100, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" className={className}>
    <defs>
      <radialGradient id="deerFur" cx="40%" cy="35%">
        <stop offset="0%" stopColor="#C49A5A" />
        <stop offset="100%" stopColor="#8B6B3A" />
      </radialGradient>
    </defs>
    {/* Body */}
    <ellipse cx="105" cy="125" rx="45" ry="30" fill="url(#deerFur)" />
    <ellipse cx="105" cy="130" rx="30" ry="18" fill="#D4B87A" opacity="0.5" />
    {/* Legs */}
    <rect x="72" y="148" width="8" height="35" rx="3" fill="#8B6B3A" />
    <rect x="130" y="148" width="8" height="35" rx="3" fill="#8B6B3A" />
    {/* Hooves */}
    <rect x="70" y="180" width="12" height="6" rx="2" fill="#4E342E" />
    <rect x="128" y="180" width="12" height="6" rx="2" fill="#4E342E" />
    {/* Neck */}
    <path d="M70,110 Q60,85 65,60" fill="url(#deerFur)" />
    <path d="M80,108 Q72,88 75,65" fill="url(#deerFur)" />
    {/* Head */}
    <ellipse cx="62" cy="55" rx="18" ry="16" fill="url(#deerFur)" />
    {/* Antlers */}
    <path d="M55,42 Q48,25 40,20 M48,30 Q42,22 35,25" stroke="#8B6B3A" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M70,42 Q77,25 85,20 M77,30 Q83,22 90,25" stroke="#8B6B3A" strokeWidth="3" fill="none" strokeLinecap="round" />
    {/* Eye */}
    <circle cx="55" cy="52" r="4" fill="white" />
    <circle cx="55" cy="52" r="2.5" fill="#2C1810" />
    {/* Nose */}
    <ellipse cx="50" cy="60" rx="3" ry="2" fill="#2C1810" />
    {/* Spots */}
    <circle cx="90" cy="118" r="3" fill="white" opacity="0.3" />
    <circle cx="110" cy="115" r="2.5" fill="white" opacity="0.3" />
    <circle cx="125" cy="120" r="3" fill="white" opacity="0.3" />
  </svg>
);

export const Elephant = ({ size = 140, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" className={className}>
    <defs>
      <radialGradient id="elephantSkin" cx="40%" cy="35%">
        <stop offset="0%" stopColor="#9E9E9E" />
        <stop offset="100%" stopColor="#757575" />
      </radialGradient>
    </defs>
    {/* Body */}
    <ellipse cx="110" cy="120" rx="55" ry="45" fill="url(#elephantSkin)" />
    {/* Legs */}
    <rect x="70" y="148" width="18" height="38" rx="8" fill="#757575" />
    <rect x="125" y="148" width="18" height="38" rx="8" fill="#757575" />
    <ellipse cx="79" cy="188" rx="12" ry="6" fill="#616161" />
    <ellipse cx="134" cy="188" rx="12" ry="6" fill="#616161" />
    {/* Head */}
    <circle cx="65" cy="75" r="35" fill="url(#elephantSkin)" />
    {/* Ear */}
    <ellipse cx="40" cy="80" rx="22" ry="28" fill="#9E9E9E" />
    <ellipse cx="42" cy="80" rx="16" ry="22" fill="#BCAAA4" opacity="0.4" />
    {/* Trunk */}
    <path d="M58,95 Q50,115 42,130 Q38,138 44,140 Q48,138 52,130 Q58,118 65,105" fill="url(#elephantSkin)" stroke="#757575" strokeWidth="1" />
    {/* Eye */}
    <circle cx="72" cy="68" r="5" fill="white" />
    <circle cx="72" cy="68" r="3" fill="#2C1810" />
    <circle cx="73" cy="67" r="1" fill="white" />
    {/* Tusk */}
    <path d="M58,100 Q52,112 55,120" stroke="#FFFFF0" strokeWidth="4" fill="none" strokeLinecap="round" />
    {/* Tail */}
    <path d="M162,110 Q175,105 178,100" stroke="#616161" strokeWidth="3" fill="none" />
    <ellipse cx="178" cy="98" rx="3" ry="5" fill="#616161" />
  </svg>
);

export const Fox = ({ size = 100, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" className={className}>
    <defs>
      <radialGradient id="foxFur" cx="40%" cy="35%">
        <stop offset="0%" stopColor="#FF8C42" />
        <stop offset="100%" stopColor="#D46A1A" />
      </radialGradient>
    </defs>
    {/* Tail */}
    <path d="M50,130 Q20,110 15,90 Q12,82 20,88 Q28,100 42,120" fill="url(#foxFur)" />
    <path d="M15,90 Q14,86 19,85" fill="white" />
    {/* Body */}
    <ellipse cx="100" cy="130" rx="38" ry="32" fill="url(#foxFur)" />
    <ellipse cx="100" cy="138" rx="22" ry="18" fill="#FFE0B2" />
    {/* Legs */}
    <rect x="72" y="155" width="10" height="25" rx="4" fill="url(#foxFur)" />
    <rect x="118" y="155" width="10" height="25" rx="4" fill="url(#foxFur)" />
    <ellipse cx="77" cy="182" rx="7" ry="4" fill="#D46A1A" />
    <ellipse cx="123" cy="182" rx="7" ry="4" fill="#D46A1A" />
    {/* Head */}
    <ellipse cx="100" cy="78" rx="28" ry="25" fill="url(#foxFur)" />
    <ellipse cx="100" cy="88" rx="16" ry="12" fill="#FFE0B2" />
    {/* Ears */}
    <polygon points="75,58 65,28 85,52" fill="url(#foxFur)" />
    <polygon points="125,58 135,28 115,52" fill="url(#foxFur)" />
    <polygon points="77,55 69,35 83,50" fill="#FFE0B2" opacity="0.6" />
    <polygon points="123,55 131,35 117,50" fill="#FFE0B2" opacity="0.6" />
    {/* Eyes */}
    <circle cx="90" cy="74" r="4" fill="white" />
    <circle cx="110" cy="74" r="4" fill="white" />
    <circle cx="90" cy="74" r="2.5" fill="#2C1810" />
    <circle cx="110" cy="74" r="2.5" fill="#2C1810" />
    {/* Nose */}
    <ellipse cx="100" cy="84" rx="4" ry="3" fill="#2C1810" />
    <path d="M94,88 Q100,94 106,88" stroke="#2C1810" strokeWidth="1.5" fill="none" />
  </svg>
);

// ============ SCENE ELEMENTS ============
export const Well = ({ size = 150, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" className={className}>
    {/* Stone base */}
    <ellipse cx="100" cy="160" rx="60" ry="20" fill="#757575" />
    <rect x="40" y="80" width="120" height="80" fill="#9E9E9E" rx="5" />
    <ellipse cx="100" cy="80" rx="60" ry="20" fill="#BDBDBD" />
    {/* Inner dark */}
    <ellipse cx="100" cy="80" rx="45" ry="14" fill="#1A237E" />
    {/* Water shimmer */}
    <ellipse cx="100" cy="82" rx="30" ry="8" fill="#1565C0" opacity="0.6">
      <animate attributeName="ry" values="8;10;8" dur="2s" repeatCount="indefinite" />
    </ellipse>
    {/* Stone texture */}
    <path d="M45,100 L155,100" stroke="#757575" strokeWidth="1" opacity="0.5" />
    <path d="M42,120 L158,120" stroke="#757575" strokeWidth="1" opacity="0.5" />
    <path d="M44,140 L156,140" stroke="#757575" strokeWidth="1" opacity="0.5" />
    {/* Roof posts */}
    <rect x="50" y="20" width="6" height="62" fill="#5D4037" />
    <rect x="144" y="20" width="6" height="62" fill="#5D4037" />
    {/* Roof */}
    <polygon points="30,22 100,0 170,22 100,8" fill="#795548" />
    <polygon points="30,22 170,22 165,28 35,28" fill="#6D4C41" />
    {/* Rope + bucket */}
    <line x1="100" y1="12" x2="100" y2="70" stroke="#8D6E63" strokeWidth="2" />
    <rect x="92" y="62" width="16" height="14" fill="#6D4C41" rx="2" />
  </svg>
);

export const Stick = ({ width = 120, className = '' }) => (
  <svg width={width} height="12" viewBox="0 0 120 12" className={className}>
    <rect x="0" y="2" width="120" height="8" fill="#795548" rx="4" />
    <rect x="0" y="2" width="120" height="4" fill="#8D6E63" rx="2" />
  </svg>
);

export const VillageSilhouette = ({ className = '' }) => (
  <svg viewBox="0 0 900 200" className={className} style={{ width: '100%', position: 'absolute', bottom: 0 }}>
    {/* Houses */}
    <rect x="100" y="120" width="60" height="80" fill="#6D4C41" />
    <polygon points="80,120 130,70 180,120" fill="#795548" />
    <rect x="250" y="100" width="80" height="100" fill="#5D4037" />
    <polygon points="230,100 290,50 350,100" fill="#6D4C41" />
    <rect x="450" y="130" width="50" height="70" fill="#6D4C41" />
    <polygon points="435,130 475,85 515,130" fill="#795548" />
    <rect x="600" y="110" width="70" height="90" fill="#5D4037" />
    <polygon points="585,110 635,60 685,110" fill="#6D4C41" />
    <rect x="770" y="125" width="55" height="75" fill="#6D4C41" />
    <polygon points="755,125 797,80 840,125" fill="#795548" />
    {/* Windows */}
    {[[120,145], [275,125], [290,125], [465,148], [625,130], [640,130], [790,148]].map(([x,y], i) => (
      <rect key={i} x={x} y={y} width="10" height="12" fill="#FFF176" rx="1" opacity="0.8" />
    ))}
    {/* Ground */}
    <rect x="0" y="190" width="900" height="20" fill="#4E342E" />
  </svg>
);

export const Villagers = ({ count = 5, className = '' }) => (
  <svg viewBox="0 0 400 120" className={className} style={{ width: '250px' }}>
    {Array.from({ length: count }).map((_, i) => {
      const x = 30 + i * 70;
      const colors = ['#E53935', '#1E88E5', '#43A047', '#FF8F00', '#8E24AA'];
      return (
        <g key={i}>
          {/* Body */}
          <ellipse cx={x} cy={85} rx={14} ry={22} fill={colors[i % colors.length]} />
          {/* Head */}
          <circle cx={x} cy={52} r={12} fill="#FFCC80" />
          {/* Arms pointing up */}
          <line x1={x-12} y1={72} x2={x-22} y2={52} stroke={colors[i % colors.length]} strokeWidth="4" strokeLinecap="round" />
          <line x1={x+12} y1={72} x2={x+22} y2={52} stroke={colors[i % colors.length]} strokeWidth="4" strokeLinecap="round" />
          {/* Eyes */}
          <circle cx={x-4} cy={50} r="1.5" fill="#2C1810" />
          <circle cx={x+4} cy={50} r="1.5" fill="#2C1810" />
          {/* Mouth */}
          <ellipse cx={x} cy={57} rx="3" ry="2" fill="#2C1810" />
        </g>
      );
    })}
  </svg>
);

export const DyeVat = ({ className = '' }) => (
  <svg viewBox="0 0 120 100" width="120" height="100" className={className}>
    <ellipse cx="60" cy="85" rx="50" ry="12" fill="#5D4037" />
    <rect x="10" y="30" width="100" height="55" fill="#6D4C41" rx="5" />
    <ellipse cx="60" cy="30" rx="50" ry="14" fill="#795548" />
    <ellipse cx="60" cy="30" rx="42" ry="10" fill="#2979FF" />
    <ellipse cx="55" cy="28" rx="15" ry="5" fill="#64B5F6" opacity="0.4" />
    {/* Ripple */}
    <ellipse cx="60" cy="30" rx="30" ry="7" fill="none" stroke="#90CAF9" strokeWidth="1" opacity="0.5">
      <animate attributeName="rx" values="20;35;20" dur="2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2s" repeatCount="indefinite" />
    </ellipse>
  </svg>
);

export const Moon = ({ x = 0, y = 0 }) => (
  <g transform={`translate(${x}, ${y})`}>
    <circle cx="40" cy="40" r="25" fill="#FFF9C4" />
    <circle cx="48" cy="36" r="20" fill="transparent" />
    <circle cx="32" cy="32" r="4" fill="#FFF176" opacity="0.3" />
    <circle cx="42" cy="42" r="3" fill="#FFF176" opacity="0.2" />
    <circle cx="48" cy="30" r="2" fill="#FFF176" opacity="0.25" />
    {/* Glow */}
    <circle cx="40" cy="40" r="35" fill="#FFF9C4" opacity="0.1">
      <animate attributeName="r" values="35;42;35" dur="3s" repeatCount="indefinite" />
    </circle>
  </g>
);

export const Stars2 = ({ count = 12 }) => (
  <g>
    {Array.from({ length: count }).map((_, i) => {
      const x = 30 + (i * 73) % 850;
      const y = 15 + (i * 41) % 120;
      const size = 1 + (i % 3);
      return (
        <circle key={i} cx={x} cy={y} r={size} fill="#FFF9C4" opacity="0.7">
          <animate attributeName="opacity" values="0.3;0.9;0.3" dur={`${1.5 + i * 0.2}s`} repeatCount="indefinite" />
        </circle>
      );
    })}
  </g>
);

// ============ MONGOOSE ============
export const Mongoose = ({ size = 120, mood = 'happy', className = '' }) => {
  const isAlert = mood === 'alert';
  const isFighting = mood === 'fighting';
  const isHurt = mood === 'hurt';
  const isSad = mood === 'sad';
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" className={className}>
      <defs>
        <radialGradient id="mongooseFur" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#B8A088" />
          <stop offset="100%" stopColor="#8B7355" />
        </radialGradient>
        <radialGradient id="mongooseBelly" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#D4C4A8" />
          <stop offset="100%" stopColor="#C0AD90" />
        </radialGradient>
        <filter id="mongooseShadow"><feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.25" /></filter>
      </defs>
      {/* Tail - long and curved */}
      <path d="M148,125 Q175,110 185,85 Q188,75 182,80 Q178,92 168,110 Q158,122 148,128" fill="url(#mongooseFur)" />
      <path d="M185,85 Q186,80 182,78" fill="#D4C4A8" />
      {/* Body - slender */}
      <ellipse cx="100" cy="130" rx="42" ry="28" fill="url(#mongooseFur)" filter="url(#mongooseShadow)" />
      <ellipse cx="100" cy="136" rx="26" ry="18" fill="url(#mongooseBelly)" opacity="0.6" />
      {/* Legs - short */}
      <rect x="68" y="152" width="10" height="22" rx="4" fill="#8B7355" />
      <rect x="122" y="152" width="10" height="22" rx="4" fill="#8B7355" />
      <ellipse cx="73" cy="176" rx="7" ry="4" fill="#6D5A3A" />
      <ellipse cx="127" cy="176" rx="7" ry="4" fill="#6D5A3A" />
      {/* Head */}
      <ellipse cx="58" cy="95" rx="24" ry="20" fill="url(#mongooseFur)" />
      {/* Neck */}
      <path d="M72,105 Q80,115 85,125" fill="url(#mongooseFur)" />
      <path d="M62,108 Q68,118 75,128" fill="url(#mongooseFur)" />
      {/* Snout - pointed */}
      <ellipse cx="42" cy="100" rx="14" ry="10" fill="url(#mongooseBelly)" />
      {/* Ears - small rounded */}
      <ellipse cx="50" cy="78" rx="8" ry="10" fill="#8B7355" />
      <ellipse cx="68" cy="78" rx="8" ry="10" fill="#8B7355" />
      <ellipse cx="50" cy="78" rx="5" ry="7" fill="#D4A88C" opacity="0.5" />
      <ellipse cx="68" cy="78" rx="5" ry="7" fill="#D4A88C" opacity="0.5" />
      {/* Eyes - sharp */}
      <ellipse cx="48" cy="90" rx="5" ry={isAlert || isFighting ? 6 : 5} fill="white" />
      <ellipse cx="64" cy="90" rx="5" ry={isAlert || isFighting ? 6 : 5} fill="white" />
      <circle cx="48" cy="90" r="3" fill={isFighting ? '#B71C1C' : '#2C1810'} />
      <circle cx="64" cy="90" r="3" fill={isFighting ? '#B71C1C' : '#2C1810'} />
      <circle cx="49" cy="88" r="1.2" fill="white" />
      <circle cx="65" cy="88" r="1.2" fill="white" />
      {/* Alert eyebrows */}
      {(isAlert || isFighting) && <>
        <path d="M42,84 Q48,80 54,84" stroke="#5A4A30" strokeWidth="2" fill="none" />
        <path d="M58,84 Q64,80 70,84" stroke="#5A4A30" strokeWidth="2" fill="none" />
      </>}
      {/* Hurt marks */}
      {isHurt && <>
        <line x1="30" y1="82" x2="38" y2="88" stroke="#E53935" strokeWidth="2" />
        <line x1="38" y1="82" x2="30" y2="88" stroke="#E53935" strokeWidth="2" />
      </>}
      {/* Nose */}
      <ellipse cx="32" cy="98" rx="4" ry="3" fill="#2C1810" />
      {/* Whiskers */}
      <line x1="34" y1="100" x2="15" y2="96" stroke="#BDBDBD" strokeWidth="0.8" />
      <line x1="34" y1="102" x2="15" y2="105" stroke="#BDBDBD" strokeWidth="0.8" />
      {/* Mouth */}
      {mood === 'happy' || mood === 'proud' ?
        <path d="M36,106 Q42,112 50,106" stroke="#6D5A3A" strokeWidth="1.5" fill="none" /> :
        isFighting ?
        <path d="M36,104 Q42,110 50,104" stroke="#6D5A3A" strokeWidth="2" fill="#8B2020" /> :
        isSad ?
        <path d="M36,108 Q42,104 50,108" stroke="#6D5A3A" strokeWidth="1.5" fill="none" /> :
        <path d="M38,106 Q42,108 48,106" stroke="#6D5A3A" strokeWidth="1.5" fill="none" />
      }
      {/* Blush for happy/proud */}
      {(mood === 'happy' || mood === 'proud') &&
        <circle cx="38" cy="98" r="4" fill="#FF9B9B" opacity="0.25" />
      }
      {/* Blood on mouth when fighting */}
      {isFighting && <>
        <circle cx="38" cy="108" r="2" fill="#E53935" opacity="0.6" />
      </>}
    </svg>
  );
};

// ============ SNAKE / COBRA ============
export const Snake = ({ size = 120, mood = 'neutral', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" className={className}>
    <defs>
      <radialGradient id="cobraHood" cx="50%" cy="40%">
        <stop offset="0%" stopColor="#3E3E3E" />
        <stop offset="100%" stopColor="#1A1A1A" />
      </radialGradient>
      <radialGradient id="cobraHoodInner" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#FFD54F" />
        <stop offset="60%" stopColor="#F9A825" />
        <stop offset="100%" stopColor="#F57F17" />
      </radialGradient>
      <linearGradient id="cobraBody" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#2E2E2E" />
        <stop offset="100%" stopColor="#111111" />
      </linearGradient>
      <filter id="cobraShadow"><feDropShadow dx="1" dy="2" stdDeviation="3" floodOpacity="0.35" /></filter>
    </defs>
    {/* Coiled body base */}
    <path d="M60,180 Q30,170 25,150 Q20,130 40,125 Q60,120 80,130 Q100,140 120,135 Q140,130 150,145 Q160,160 140,170 Q120,180 100,175 Q80,170 60,180" fill="url(#cobraBody)" filter="url(#cobraShadow)" />
    <path d="M65,175 Q40,168 35,152 Q30,138 48,132 Q65,128 82,135 Q98,142 115,138 Q132,134 140,148 Q148,160 132,168 Q115,175 95,172 Q78,168 65,175" fill="#2A2A2A" opacity="0.5" />
    {/* Body rising up */}
    <path d="M85,135 Q78,105 82,75 Q85,55 95,42" fill="url(#cobraBody)" />
    <path d="M105,135 Q112,105 108,75 Q105,55 98,42" fill="url(#cobraBody)" />
    {/* Hood spread */}
    <path d={mood === 'striking' ?
      "M50,65 Q55,20 95,12 Q135,20 140,65 Q135,85 95,90 Q55,85 50,65" :
      "M58,65 Q62,28 95,22 Q128,28 132,65 Q128,82 95,86 Q62,82 58,65"
    } fill="url(#cobraHood)" />
    {/* Hood inner pattern */}
    <path d={mood === 'striking' ?
      "M65,60 Q70,35 95,28 Q120,35 125,60 Q120,75 95,78 Q70,75 65,60" :
      "M70,60 Q74,38 95,32 Q116,38 120,60 Q116,72 95,75 Q74,72 70,60"
    } fill="url(#cobraHoodInner)" opacity="0.6" />
    {/* V-pattern on hood */}
    <path d="M85,40 L95,60 L105,40" stroke="#1A1A1A" strokeWidth="2" fill="none" opacity="0.7" />
    {/* Head on top of hood */}
    <ellipse cx="95" cy="30" rx="16" ry="12" fill="#2E2E2E" />
    {/* Eyes - menacing */}
    {mood === 'defeated' ? <>
      <path d="M85,26 Q88,30 91,26" stroke="#FFD54F" strokeWidth="1.5" fill="none" />
      <path d="M99,26 Q102,30 105,26" stroke="#FFD54F" strokeWidth="1.5" fill="none" />
    </> : <>
      <ellipse cx="88" cy="27" rx="4" ry={mood === 'striking' ? 5 : 4} fill="#FFD54F" />
      <ellipse cx="102" cy="27" rx="4" ry={mood === 'striking' ? 5 : 4} fill="#FFD54F" />
      <ellipse cx="88" cy="27" rx="2" ry="4" fill="#1A1A1A" />
      <ellipse cx="102" cy="27" rx="2" ry="4" fill="#1A1A1A" />
    </>}
    {/* Tongue */}
    {mood === 'striking' ?
      <path d="M95,38 L95,52 L90,56 M95,52 L100,56" stroke="#E53935" strokeWidth="1.5" fill="none" /> :
      <path d="M95,38 L95,46 L92,49 M95,46 L98,49" stroke="#E53935" strokeWidth="1.2" fill="none" />
    }
    {/* Defeated: X eyes and droopy posture are handled above */}
    {mood === 'defeated' && <path d="M85,35 Q95,38 105,35" stroke="#555" strokeWidth="1.5" fill="none" />}
    {/* Scale details */}
    <ellipse cx="90" cy="110" rx="8" ry="4" fill="#333" opacity="0.3" />
    <ellipse cx="100" cy="125" rx="8" ry="4" fill="#333" opacity="0.3" />
  </svg>
);

// ============ BRAHMIN ============
export const Brahmin = ({ size = 130, mood = 'neutral', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 200 220" className={className}>
    <defs>
      <radialGradient id="brahminSkin" cx="50%" cy="40%">
        <stop offset="0%" stopColor="#FFCC80" />
        <stop offset="100%" stopColor="#E8A850" />
      </radialGradient>
      <linearGradient id="brahminDhoti" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF8E1" />
        <stop offset="100%" stopColor="#F5E6C8" />
      </linearGradient>
      <linearGradient id="brahminShawl" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF8F00" />
        <stop offset="100%" stopColor="#E65100" />
      </linearGradient>
      <filter id="brahminShadow"><feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.2" /></filter>
    </defs>
    {/* Legs */}
    <rect x="82" y="170" width="12" height="30" rx="4" fill="url(#brahminSkin)" />
    <rect x="106" y="170" width="12" height="30" rx="4" fill="url(#brahminSkin)" />
    <ellipse cx="88" cy="202" rx="10" ry="5" fill="#8D6E63" />
    <ellipse cx="112" cy="202" rx="10" ry="5" fill="#8D6E63" />
    {/* Dhoti */}
    <path d="M68,120 Q65,170 70,195 L130,195 Q135,170 132,120 Z" fill="url(#brahminDhoti)" filter="url(#brahminShadow)" />
    <path d="M90,120 L88,195" stroke="#E8D5B0" strokeWidth="1" opacity="0.5" />
    <path d="M110,120 L112,195" stroke="#E8D5B0" strokeWidth="1" opacity="0.5" />
    {/* Dhoti border */}
    <path d="M70,190 L130,190" stroke="#FF8F00" strokeWidth="2" opacity="0.6" />
    {/* Torso */}
    <ellipse cx="100" cy="110" rx="30" ry="22" fill="url(#brahminSkin)" />
    {/* Shawl / Uttariya across chest */}
    <path d="M72,100 Q80,95 100,98 Q120,100 128,108 Q120,115 100,112 Q80,110 72,100" fill="url(#brahminShawl)" opacity="0.8" />
    {/* Arms */}
    <rect x="60" y="100" width="12" height="35" rx="5" fill="url(#brahminSkin)" />
    <rect x="128" y="100" width="12" height="35" rx="5" fill="url(#brahminSkin)" />
    {/* Hands */}
    <circle cx="66" cy="138" r="7" fill="url(#brahminSkin)" />
    <circle cx="134" cy="138" r="7" fill="url(#brahminSkin)" />
    {/* Neck */}
    <rect x="92" y="78" width="16" height="15" rx="4" fill="url(#brahminSkin)" />
    {/* Head */}
    <ellipse cx="100" cy="58" rx="26" ry="28" fill="url(#brahminSkin)" />
    {/* Hair */}
    <path d="M74,52 Q74,28 100,24 Q126,28 126,52" fill="#2C1810" />
    {/* Shikha / tuft */}
    <path d="M100,24 Q102,14 108,12 Q104,16 103,24" fill="#2C1810" />
    {/* Tilak on forehead */}
    <path d="M96,38 L100,30 L104,38 Z" fill="#E53935" />
    <circle cx="100" cy="40" r="2" fill="#FFEB3B" />
    {/* Eyes */}
    {mood === 'grieving' ? <>
      <path d="M88,52 Q92,56 96,52" stroke="#2C1810" strokeWidth="2" fill="none" />
      <path d="M104,52 Q108,56 112,52" stroke="#2C1810" strokeWidth="2" fill="none" />
    </> : <>
      <ellipse cx="90" cy="52" rx="5" ry="6" fill="white" />
      <ellipse cx="110" cy="52" rx="5" ry="6" fill="white" />
      <circle cx="90" cy="53" r="3" fill="#2C1810" />
      <circle cx="110" cy="53" r="3" fill="#2C1810" />
      <circle cx="91" cy="51" r="1.2" fill="white" />
      <circle cx="111" cy="51" r="1.2" fill="white" />
    </>}
    {/* Eyebrows */}
    {mood === 'grieving' && <>
      <path d="M84,46 Q90,44 96,46" stroke="#2C1810" strokeWidth="1.5" fill="none" />
      <path d="M104,46 Q110,44 116,46" stroke="#2C1810" strokeWidth="1.5" fill="none" />
    </>}
    {/* Nose */}
    <path d="M100,56 L98,64 Q100,66 102,64 Z" fill="#D4954A" />
    {/* Mouth */}
    {mood === 'happy' ?
      <path d="M92,70 Q100,78 108,70" stroke="#8D6E63" strokeWidth="1.5" fill="none" /> :
      mood === 'grieving' ?
      <path d="M92,74 Q100,68 108,74" stroke="#8D6E63" strokeWidth="2" fill="none" /> :
      <path d="M94,72 Q100,74 106,72" stroke="#8D6E63" strokeWidth="1.5" fill="none" />
    }
    {/* Tears for grieving */}
    {mood === 'grieving' && <>
      <ellipse cx="86" cy="60" rx="2" ry="4" fill="#64B5F6" opacity="0.6" />
      <ellipse cx="114" cy="60" rx="2" ry="4" fill="#64B5F6" opacity="0.6" />
    </>}
    {/* Sacred thread / Janeu */}
    <path d="M82,98 Q100,118 118,98" stroke="#FFF9C4" strokeWidth="1.5" fill="none" opacity="0.7" />
  </svg>
);

// ============ BRAHMIN WIFE ============
export const BrahminWife = ({ size = 120, mood = 'neutral', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 200 220" className={className}>
    <defs>
      <radialGradient id="bwifeSkin" cx="50%" cy="40%">
        <stop offset="0%" stopColor="#FFCC80" />
        <stop offset="100%" stopColor="#E8A850" />
      </radialGradient>
      <linearGradient id="bwifeSari" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E53935" />
        <stop offset="50%" stopColor="#C62828" />
        <stop offset="100%" stopColor="#B71C1C" />
      </linearGradient>
      <linearGradient id="bwifePallu" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#E53935" />
        <stop offset="100%" stopColor="#FF5252" />
      </linearGradient>
      <filter id="bwifeShadow"><feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.2" /></filter>
    </defs>
    {/* Sari body */}
    <path d="M68,95 Q62,145 65,200 L135,200 Q138,145 132,95 Z" fill="url(#bwifeSari)" filter="url(#bwifeShadow)" />
    {/* Sari border */}
    <path d="M65,195 L135,195" stroke="#FFD700" strokeWidth="3" />
    <path d="M66,190 L134,190" stroke="#FFD700" strokeWidth="1" opacity="0.5" />
    {/* Sari pattern */}
    <path d="M75,140 Q100,135 125,140" stroke="#FFD700" strokeWidth="0.8" opacity="0.3" />
    {/* Pallu draped over shoulder */}
    <path d="M72,95 Q60,80 55,60 Q52,50 58,55 Q65,65 72,85" fill="url(#bwifePallu)" opacity="0.8" />
    {/* Arms */}
    <rect x="58" y="98" width="10" height="30" rx="4" fill="url(#bwifeSkin)" />
    <rect x="132" y="98" width="10" height="30" rx="4" fill="url(#bwifeSkin)" />
    {/* Bangles */}
    <circle cx="63" cy="126" r="5" fill="none" stroke="#FFD700" strokeWidth="2" />
    <circle cx="137" cy="126" r="5" fill="none" stroke="#FFD700" strokeWidth="2" />
    {/* Hands */}
    <circle cx="63" cy="132" r="6" fill="url(#bwifeSkin)" />
    <circle cx="137" cy="132" r="6" fill="url(#bwifeSkin)" />
    {/* Neck */}
    <rect x="92" y="75" width="16" height="12" rx="4" fill="url(#bwifeSkin)" />
    {/* Necklace */}
    <path d="M88,82 Q100,92 112,82" stroke="#FFD700" strokeWidth="2" fill="none" />
    <circle cx="100" cy="90" r="3" fill="#E53935" stroke="#FFD700" strokeWidth="1" />
    {/* Head */}
    <ellipse cx="100" cy="52" rx="24" ry="26" fill="url(#bwifeSkin)" />
    {/* Hair */}
    <path d="M76,48 Q76,24 100,20 Q124,24 124,48" fill="#1A1A1A" />
    <path d="M76,48 Q74,55 76,60" fill="#1A1A1A" />
    <path d="M124,48 Q126,55 124,60" fill="#1A1A1A" />
    {/* Hair parting with sindoor */}
    <line x1="100" y1="20" x2="100" y2="32" stroke="#E53935" strokeWidth="2" />
    {/* Bindi */}
    <circle cx="100" cy="38" r="3" fill="#E53935" />
    {/* Eyes */}
    {mood === 'horrified' || mood === 'grief-stricken' ? <>
      <ellipse cx="90" cy="48" rx="6" ry="7" fill="white" />
      <ellipse cx="110" cy="48" rx="6" ry="7" fill="white" />
      <circle cx="90" cy="49" r="3.5" fill="#2C1810" />
      <circle cx="110" cy="49" r="3.5" fill="#2C1810" />
      <circle cx="91" cy="47" r="1.2" fill="white" />
      <circle cx="111" cy="47" r="1.2" fill="white" />
    </> : mood === 'worried' || mood === 'desperate' ? <>
      <ellipse cx="90" cy="48" rx="5" ry="5" fill="white" />
      <ellipse cx="110" cy="48" rx="5" ry="5" fill="white" />
      <circle cx="90" cy="49" r="3" fill="#2C1810" />
      <circle cx="110" cy="49" r="3" fill="#2C1810" />
      <circle cx="91" cy="47" r="1" fill="white" />
      <circle cx="111" cy="47" r="1" fill="white" />
      {/* Worried eyebrows */}
      <path d="M84,42 Q90,40 96,43" stroke="#2C1810" strokeWidth="1.5" fill="none" />
      <path d="M104,43 Q110,40 116,42" stroke="#2C1810" strokeWidth="1.5" fill="none" />
    </> : <>
      <ellipse cx="90" cy="48" rx="5" ry="6" fill="white" />
      <ellipse cx="110" cy="48" rx="5" ry="6" fill="white" />
      <circle cx="90" cy="49" r="3" fill="#2C1810" />
      <circle cx="110" cy="49" r="3" fill="#2C1810" />
      <circle cx="91" cy="47" r="1.2" fill="white" />
      <circle cx="111" cy="47" r="1.2" fill="white" />
    </>}
    {/* Kajal / eyeliner */}
    <path d="M84,48 Q90,46 96,48" stroke="#1A1A1A" strokeWidth="0.8" fill="none" />
    <path d="M104,48 Q110,46 116,48" stroke="#1A1A1A" strokeWidth="0.8" fill="none" />
    {/* Nose */}
    <path d="M100,52 L98,58 Q100,60 102,58 Z" fill="#D4954A" />
    {/* Nose ring */}
    <circle cx="97" cy="59" r="2" fill="none" stroke="#FFD700" strokeWidth="1.2" />
    {/* Mouth */}
    {mood === 'horrified' ?
      <ellipse cx="100" cy="68" rx="6" ry="8" fill="#5A3A0A" /> :
      mood === 'grief-stricken' || mood === 'desperate' ?
      <path d="M92,70 Q100,65 108,70" stroke="#8D6E63" strokeWidth="2" fill="none" /> :
      mood === 'worried' ?
      <path d="M94,68 Q100,66 106,68" stroke="#8D6E63" strokeWidth="1.5" fill="none" /> :
      <path d="M94,66 Q100,70 106,66" stroke="#8D6E63" strokeWidth="1.5" fill="none" />
    }
    {/* Tears for grief */}
    {(mood === 'grief-stricken' || mood === 'desperate') && <>
      <ellipse cx="84" cy="56" rx="2" ry="5" fill="#64B5F6" opacity="0.6" />
      <ellipse cx="116" cy="56" rx="2" ry="5" fill="#64B5F6" opacity="0.6" />
    </>}
    {/* Feet */}
    <ellipse cx="85" cy="205" rx="10" ry="5" fill="url(#bwifeSkin)" />
    <ellipse cx="115" cy="205" rx="10" ry="5" fill="url(#bwifeSkin)" />
    {/* Anklets */}
    <circle cx="85" cy="198" r="6" fill="none" stroke="#C0C0C0" strokeWidth="1.5" />
    <circle cx="115" cy="198" r="6" fill="none" stroke="#C0C0C0" strokeWidth="1.5" />
  </svg>
);

// ============ BABY ============
export const Baby = ({ size = 80, className = '' }) => (
  <svg width={size} height={size * 0.8} viewBox="0 0 120 100" className={className}>
    <defs>
      <radialGradient id="babySkin" cx="50%" cy="40%">
        <stop offset="0%" stopColor="#FFE0B2" />
        <stop offset="100%" stopColor="#FFCC80" />
      </radialGradient>
      <linearGradient id="babyBlanket" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF9C4" />
        <stop offset="50%" stopColor="#FFF59D" />
        <stop offset="100%" stopColor="#FFF176" />
      </linearGradient>
      <filter id="babyShadow"><feDropShadow dx="1" dy="1" stdDeviation="1.5" floodOpacity="0.15" /></filter>
    </defs>
    {/* Blanket wrap */}
    <path d="M20,45 Q15,35 25,28 Q40,20 60,18 Q80,20 95,28 Q105,35 100,45 Q105,65 95,78 Q80,88 60,90 Q40,88 25,78 Q15,65 20,45 Z" fill="url(#babyBlanket)" filter="url(#babyShadow)" />
    {/* Blanket fold pattern */}
    <path d="M30,35 Q60,30 90,35" stroke="#F9A825" strokeWidth="1" fill="none" opacity="0.4" />
    <path d="M25,50 Q60,45 95,50" stroke="#F9A825" strokeWidth="0.8" fill="none" opacity="0.3" />
    {/* Head */}
    <circle cx="60" cy="38" r="18" fill="url(#babySkin)" />
    {/* Tiny hair wisps */}
    <path d="M52,22 Q55,18 58,22" stroke="#2C1810" strokeWidth="1.5" fill="none" />
    <path d="M58,20 Q62,16 65,20" stroke="#2C1810" strokeWidth="1.5" fill="none" />
    {/* Eyes - closed, sleeping */}
    <path d="M52,36 Q55,34 58,36" stroke="#2C1810" strokeWidth="1.5" fill="none" />
    <path d="M62,36 Q65,34 68,36" stroke="#2C1810" strokeWidth="1.5" fill="none" />
    {/* Tiny nose */}
    <circle cx="60" cy="40" r="1.5" fill="#E8A850" />
    {/* Tiny mouth - smile */}
    <path d="M57,44 Q60,47 63,44" stroke="#D4954A" strokeWidth="1" fill="none" />
    {/* Blush */}
    <circle cx="50" cy="40" r="4" fill="#FF9B9B" opacity="0.3" />
    <circle cx="70" cy="40" r="4" fill="#FF9B9B" opacity="0.3" />
    {/* Tiny hand peeking out */}
    <circle cx="82" cy="55" r="5" fill="url(#babySkin)" />
  </svg>
);

// ============ DONKEY ============
export const Donkey = ({ size = 140, mood = 'happy', className = '' }) => {
  const isExhausted = mood === 'exhausted';
  const isSinging = mood === 'singing';
  return (
    <svg width={size} height={size} viewBox="0 0 220 220" className={className}>
      <defs>
        <radialGradient id="donkeyFur" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#A0A0A0" />
          <stop offset="100%" stopColor="#787878" />
        </radialGradient>
        <radialGradient id="donkeyBelly" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#D0D0D0" />
          <stop offset="100%" stopColor="#B8B8B8" />
        </radialGradient>
        <filter id="donkeyShadow"><feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.25" /></filter>
      </defs>
      {/* Tail */}
      <path d="M42,128 Q25,120 18,105 Q15,98 20,100 Q28,108 38,122" fill="#787878" />
      <path d="M18,105 L14,98 L20,96 L16,92" stroke="#555" strokeWidth="2" fill="none" />
      {/* Body */}
      <ellipse cx="110" cy="130" rx="55" ry="40" fill="url(#donkeyFur)" filter="url(#donkeyShadow)" />
      <ellipse cx="110" cy="140" rx="36" ry="26" fill="url(#donkeyBelly)" opacity="0.5" />
      {/* Legs */}
      <rect x="72" y="162" width="14" height="35" rx="5" fill="#787878" />
      <rect x="132" y="162" width="14" height="35" rx="5" fill="#787878" />
      <ellipse cx="79" cy="200" rx="10" ry="5" fill="#555" />
      <ellipse cx="139" cy="200" rx="10" ry="5" fill="#555" />
      {/* Hooves */}
      <rect x="72" y="194" width="14" height="6" rx="2" fill="#3E2723" />
      <rect x="132" y="194" width="14" height="6" rx="2" fill="#3E2723" />
      {/* Neck */}
      <path d="M142,118 Q155,95 158,68" fill="url(#donkeyFur)" />
      <path d="M152,120 Q165,98 165,72" fill="url(#donkeyFur)" />
      {/* Mane - short spiky */}
      <path d="M148,70 L145,58 L152,68 L150,55 L157,65 L155,52 L162,62 L160,50 L167,60" stroke="#555" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Head */}
      <ellipse cx="170" cy="65" rx="28" ry="22" fill="url(#donkeyFur)" />
      {/* Snout / muzzle */}
      <ellipse cx="190" cy="72" rx="16" ry="14" fill="url(#donkeyBelly)" />
      {/* Ears - BIG */}
      <ellipse cx="158" cy="30" rx="8" ry="22" fill="#787878" transform="rotate(-15,158,30)" />
      <ellipse cx="178" cy="28" rx="8" ry="22" fill="#787878" transform="rotate(10,178,28)" />
      <ellipse cx="158" cy="30" rx="5" ry="16" fill="#D4A88C" opacity="0.5" transform="rotate(-15,158,30)" />
      <ellipse cx="178" cy="28" rx="5" ry="16" fill="#D4A88C" opacity="0.5" transform="rotate(10,178,28)" />
      {/* Eyes */}
      {isExhausted ? <>
        <path d="M162,58 Q166,62 170,58" stroke="#2C1810" strokeWidth="2" fill="none" />
        <path d="M176,56 Q180,60 184,56" stroke="#2C1810" strokeWidth="2" fill="none" />
      </> : mood === 'ashamed' ? <>
        <path d="M162,60 Q166,63 170,60" stroke="#2C1810" strokeWidth="2" fill="none" />
        <path d="M176,58 Q180,61 184,58" stroke="#2C1810" strokeWidth="2" fill="none" />
      </> : <>
        <ellipse cx="166" cy="60" rx="5" ry="6" fill="white" />
        <ellipse cx="180" cy="58" rx="5" ry="6" fill="white" />
        <circle cx="166" cy="61" r="3" fill="#2C1810" />
        <circle cx="180" cy="59" r="3" fill="#2C1810" />
        <circle cx="167" cy="59" r="1.2" fill="white" />
        <circle cx="181" cy="57" r="1.2" fill="white" />
      </>}
      {/* Pained eyebrows */}
      {(mood === 'pained' || mood === 'ashamed') && <>
        <path d="M160,52 Q166,50 172,54" stroke="#555" strokeWidth="2" fill="none" />
        <path d="M174,50 Q180,48 186,52" stroke="#555" strokeWidth="2" fill="none" />
      </>}
      {/* Nostrils */}
      <ellipse cx="195" cy="70" rx="3" ry="2.5" fill="#555" />
      <ellipse cx="200" cy="70" rx="3" ry="2.5" fill="#555" />
      {/* Mouth */}
      {isSinging ?
        <ellipse cx="195" cy="80" rx="8" ry="10" fill="#3a1a0a" /> :
        mood === 'pained' ?
        <path d="M188,82 Q195,78 202,82" stroke="#555" strokeWidth="2" fill="none" /> :
        mood === 'happy' || mood === 'wise' ?
        <path d="M188,80 Q195,88 202,80" stroke="#555" strokeWidth="2" fill="none" /> :
        <path d="M190,80 Q195,82 200,80" stroke="#555" strokeWidth="1.5" fill="none" />
      }
      {/* Music notes for singing */}
      {isSinging && <>
        <text x="200" y="55" fontSize="16" fill="#555" opacity="0.7">♪</text>
        <text x="210" y="42" fontSize="12" fill="#555" opacity="0.5">♫</text>
      </>}
      {/* Wise mood: gentle eyes and slight halo */}
      {mood === 'wise' &&
        <ellipse cx="170" cy="50" rx="30" ry="8" fill="#FFF9C4" opacity="0.15" />
      }
      {/* Sweat drops for exhausted */}
      {isExhausted && <>
        <ellipse cx="155" cy="48" rx="2" ry="4" fill="#64B5F6" opacity="0.5" />
        <ellipse cx="185" cy="45" rx="2" ry="4" fill="#64B5F6" opacity="0.5" />
      </>}
    </svg>
  );
};

// ============ WASHERMAN ============
export const Washerman = ({ size = 120, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 200 220" className={className}>
    <defs>
      <radialGradient id="washSkin" cx="50%" cy="40%">
        <stop offset="0%" stopColor="#FFCC80" />
        <stop offset="100%" stopColor="#D4954A" />
      </radialGradient>
      <linearGradient id="washCloth" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ECEFF1" />
        <stop offset="100%" stopColor="#CFD8DC" />
      </linearGradient>
      <filter id="washShadow"><feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.2" /></filter>
    </defs>
    {/* Legs */}
    <rect x="82" y="168" width="12" height="32" rx="4" fill="url(#washSkin)" />
    <rect x="106" y="168" width="12" height="32" rx="4" fill="url(#washSkin)" />
    <ellipse cx="88" cy="202" rx="10" ry="5" fill="#795548" />
    <ellipse cx="112" cy="202" rx="10" ry="5" fill="#795548" />
    {/* Dhoti - simple white */}
    <path d="M70,118 Q67,165 72,195 L128,195 Q133,165 130,118 Z" fill="url(#washCloth)" filter="url(#washShadow)" />
    <path d="M72,190 L128,190" stroke="#90A4AE" strokeWidth="1" opacity="0.5" />
    {/* Torso */}
    <ellipse cx="100" cy="108" rx="28" ry="20" fill="url(#washSkin)" />
    {/* Simple cloth wrap on top */}
    <path d="M74,98 Q100,92 126,98 Q126,115 100,118 Q74,115 74,98" fill="#B0BEC5" opacity="0.7" />
    {/* Arms */}
    <rect x="60" y="98" width="12" height="32" rx="5" fill="url(#washSkin)" />
    <rect x="128" y="98" width="12" height="32" rx="5" fill="url(#washSkin)" />
    {/* Hands */}
    <circle cx="66" cy="134" r="7" fill="url(#washSkin)" />
    <circle cx="134" cy="134" r="7" fill="url(#washSkin)" />
    {/* Neck */}
    <rect x="92" y="76" width="16" height="14" rx="4" fill="url(#washSkin)" />
    {/* Head */}
    <ellipse cx="100" cy="55" rx="24" ry="26" fill="url(#washSkin)" />
    {/* Hair - simple */}
    <path d="M76,50 Q76,28 100,24 Q124,28 124,50" fill="#3E2723" />
    {/* Turban / head cloth */}
    <path d="M76,48 Q76,32 100,28 Q124,32 124,48 Q124,42 100,38 Q76,42 76,48" fill="#ECEFF1" />
    <path d="M78,46 Q100,40 122,46" stroke="#B0BEC5" strokeWidth="1" fill="none" />
    {/* Eyes */}
    <ellipse cx="90" cy="52" rx="4" ry="5" fill="white" />
    <ellipse cx="110" cy="52" rx="4" ry="5" fill="white" />
    <circle cx="90" cy="53" r="2.5" fill="#2C1810" />
    <circle cx="110" cy="53" r="2.5" fill="#2C1810" />
    <circle cx="91" cy="51" r="1" fill="white" />
    <circle cx="111" cy="51" r="1" fill="white" />
    {/* Mustache */}
    <path d="M92,62 Q88,66 82,64" stroke="#3E2723" strokeWidth="2" fill="none" />
    <path d="M108,62 Q112,66 118,64" stroke="#3E2723" strokeWidth="2" fill="none" />
    {/* Nose */}
    <path d="M100,54 L98,60 Q100,62 102,60 Z" fill="#D4954A" />
    {/* Mouth */}
    <path d="M94,68 Q100,72 106,68" stroke="#8D6E63" strokeWidth="1.5" fill="none" />
  </svg>
);

// ============ CROW ============
export const Crow = ({ size = 100, mood = 'neutral', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 160 160" className={className}>
    <defs>
      <radialGradient id="crowBody" cx="40%" cy="35%">
        <stop offset="0%" stopColor="#333333" />
        <stop offset="100%" stopColor="#1A1A1A" />
      </radialGradient>
      <linearGradient id="crowWing" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2C2C2C" />
        <stop offset="100%" stopColor="#0D0D0D" />
      </linearGradient>
      <filter id="crowShadow"><feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.3" /></filter>
    </defs>
    {/* Tail feathers */}
    <path d="M42,95 Q25,88 18,75 Q15,68 22,72 Q30,82 40,90" fill="#111" />
    <path d="M45,98 Q30,94 22,82 Q20,76 26,80 Q32,88 42,95" fill="#222" />
    {/* Body */}
    <ellipse cx="80" cy="90" rx="32" ry="28" fill="url(#crowBody)" filter="url(#crowShadow)" />
    {/* Wing */}
    <path d="M55,78 Q40,68 35,80 Q38,92 55,95 Q70,98 85,92" fill="url(#crowWing)" />
    <path d="M58,82 Q48,75 44,83 Q46,90 58,92" fill="#2A2A2A" opacity="0.4" />
    {/* Iridescent sheen */}
    <ellipse cx="72" cy="85" rx="18" ry="12" fill="#3949AB" opacity="0.08" />
    {/* Neck */}
    <path d="M90,75 Q95,62 98,50" fill="url(#crowBody)" />
    <path d="M100,78 Q104,65 105,52" fill="url(#crowBody)" />
    {/* Head */}
    <circle cx="100" cy="45" r="16" fill="url(#crowBody)" />
    {/* Eye */}
    {mood === 'sad' ? <>
      <path d="M105,41 Q108,44 111,41" stroke="white" strokeWidth="1.5" fill="none" />
    </> : <>
      <circle cx="108" cy="42" r="4" fill="white" />
      <circle cx="108" cy="42" r="2.5" fill="#1A1A1A" />
      <circle cx="109" cy="41" r="1" fill="white" />
    </>}
    {/* Beak */}
    <path d="M114,46 L132,50 L114,52" fill="#555" stroke="#333" strokeWidth="0.5" />
    {/* Legs */}
    <path d="M72,115 L68,135 L62,138 M68,135 L72,138 M68,135 L66,140" stroke="#555" strokeWidth="2" fill="none" />
    <path d="M90,115 L88,135 L82,138 M88,135 L92,138 M88,135 L86,140" stroke="#555" strokeWidth="2" fill="none" />
    {/* Happy beak open */}
    {(mood === 'happy' || mood === 'triumphant') &&
      <path d="M114,48 L130,46 L114,46" fill="#6D4C41" />
    }
    {/* Triumphant: chest puffed, head up */}
    {mood === 'triumphant' && <>
      <ellipse cx="80" cy="88" rx="34" ry="30" fill="none" stroke="#FFD700" strokeWidth="1" opacity="0.2" />
    </>}
    {/* Sad: tear */}
    {mood === 'sad' &&
      <ellipse cx="112" cy="48" rx="1.5" ry="3" fill="#64B5F6" opacity="0.6" />
    }
  </svg>
);

// ============ CROW WIFE ============
export const CrowWife = ({ size = 90, mood = 'neutral', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 150 150" className={className}>
    <defs>
      <radialGradient id="crowWifeBody" cx="40%" cy="35%">
        <stop offset="0%" stopColor="#383838" />
        <stop offset="100%" stopColor="#1E1E1E" />
      </radialGradient>
      <filter id="crowWifeShadow"><feDropShadow dx="1" dy="1" stdDeviation="1.5" floodOpacity="0.3" /></filter>
    </defs>
    {/* Tail feathers - slightly shorter */}
    <path d="M40,88 Q26,82 20,72 Q18,66 24,70 Q30,78 38,85" fill="#151515" />
    {/* Body - slightly smaller */}
    <ellipse cx="75" cy="85" rx="28" ry="24" fill="url(#crowWifeBody)" filter="url(#crowWifeShadow)" />
    {/* Wing */}
    <path d="M52,74 Q40,66 36,76 Q38,86 52,88 Q65,90 78,86" fill="#1A1A1A" />
    {/* Iridescent sheen - slightly purple */}
    <ellipse cx="68" cy="80" rx="15" ry="10" fill="#6A1B9A" opacity="0.08" />
    {/* Neck */}
    <path d="M85,70 Q88,58 90,48" fill="url(#crowWifeBody)" />
    <path d="M94,72 Q96,60 97,50" fill="url(#crowWifeBody)" />
    {/* Head */}
    <circle cx="92" cy="42" r="14" fill="url(#crowWifeBody)" />
    {/* Small crest / tuft on head - distinguishing feature */}
    <path d="M86,30 Q88,22 92,28 Q94,22 96,30" fill="#2A2A2A" />
    {/* Eye */}
    {mood === 'sad' ? <>
      <path d="M97,38 Q100,41 103,38" stroke="white" strokeWidth="1.5" fill="none" />
    </> : <>
      <circle cx="100" cy="39" r="3.5" fill="white" />
      <circle cx="100" cy="39" r="2" fill="#1A1A1A" />
      <circle cx="101" cy="38" r="0.8" fill="white" />
    </>}
    {/* Beak - slightly smaller */}
    <path d="M105,42 L120,45 L105,48" fill="#666" stroke="#444" strokeWidth="0.5" />
    {/* Legs */}
    <path d="M66,106 L63,122 L58,125 M63,122 L67,125 M63,122 L62,127" stroke="#555" strokeWidth="1.8" fill="none" />
    <path d="M84,106 L82,122 L77,125 M82,122 L86,125 M82,122 L81,127" stroke="#555" strokeWidth="1.8" fill="none" />
    {/* Happy */}
    {mood === 'happy' &&
      <path d="M105,44 L118,42 L105,42" fill="#5D4037" />
    }
    {/* Sad tear */}
    {mood === 'sad' &&
      <ellipse cx="103" cy="44" rx="1.5" ry="3" fill="#64B5F6" opacity="0.6" />
    }
    {/* Triumphant glow */}
    {mood === 'triumphant' &&
      <ellipse cx="75" cy="82" rx="30" ry="26" fill="none" stroke="#FFD700" strokeWidth="1" opacity="0.2" />
    }
  </svg>
);

// ============ GUARD ============
export const Guard = ({ size = 130, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 200 230" className={className}>
    <defs>
      <radialGradient id="guardSkin" cx="50%" cy="40%">
        <stop offset="0%" stopColor="#FFCC80" />
        <stop offset="100%" stopColor="#D4954A" />
      </radialGradient>
      <linearGradient id="guardArmor" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#B0BEC5" />
        <stop offset="50%" stopColor="#78909C" />
        <stop offset="100%" stopColor="#546E7A" />
      </linearGradient>
      <linearGradient id="guardHelmet" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#90A4AE" />
        <stop offset="100%" stopColor="#607D8B" />
      </linearGradient>
      <filter id="guardShadow"><feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.25" /></filter>
    </defs>
    {/* Spear */}
    <rect x="150" y="10" width="4" height="180" fill="#6D4C41" rx="2" />
    <polygon points="146,15 152,2 158,15" fill="#90A4AE" stroke="#607D8B" strokeWidth="1" />
    {/* Legs */}
    <rect x="80" y="175" width="14" height="32" rx="5" fill="url(#guardSkin)" />
    <rect x="108" y="175" width="14" height="32" rx="5" fill="url(#guardSkin)" />
    {/* Boots */}
    <rect x="76" y="200" width="22" height="10" rx="4" fill="#4E342E" />
    <rect x="104" y="200" width="22" height="10" rx="4" fill="#4E342E" />
    {/* Lower garment */}
    <path d="M72,140 Q70,170 75,200 L127,200 Q130,170 128,140 Z" fill="#8D6E63" />
    {/* Armor / breastplate */}
    <path d="M68,90 Q68,80 100,76 Q132,80 132,90 Q132,145 100,148 Q68,145 68,90" fill="url(#guardArmor)" filter="url(#guardShadow)" />
    {/* Armor details */}
    <line x1="100" y1="80" x2="100" y2="145" stroke="#546E7A" strokeWidth="1" opacity="0.5" />
    <path d="M72,105 L128,105" stroke="#546E7A" strokeWidth="1" opacity="0.5" />
    <path d="M74,120 L126,120" stroke="#546E7A" strokeWidth="1" opacity="0.5" />
    {/* Arms */}
    <rect x="54" y="90" width="14" height="35" rx="5" fill="url(#guardArmor)" />
    <rect x="132" y="90" width="14" height="35" rx="5" fill="url(#guardArmor)" />
    {/* Hands */}
    <circle cx="61" cy="130" r="7" fill="url(#guardSkin)" />
    <circle cx="139" cy="130" r="7" fill="url(#guardSkin)" />
    {/* Neck */}
    <rect x="92" y="62" width="16" height="16" rx="4" fill="url(#guardSkin)" />
    {/* Head */}
    <ellipse cx="100" cy="46" rx="22" ry="24" fill="url(#guardSkin)" />
    {/* Helmet */}
    <path d="M78,42 Q78,18 100,14 Q122,18 122,42" fill="url(#guardHelmet)" />
    <path d="M76,44 L124,44" stroke="#607D8B" strokeWidth="3" />
    {/* Helmet crest */}
    <path d="M100,14 Q102,6 108,8 Q104,12 102,14" fill="#E53935" />
    {/* Eyes */}
    <ellipse cx="92" cy="44" rx="4" ry="5" fill="white" />
    <ellipse cx="108" cy="44" rx="4" ry="5" fill="white" />
    <circle cx="92" cy="45" r="2.5" fill="#2C1810" />
    <circle cx="108" cy="45" r="2.5" fill="#2C1810" />
    {/* Stern eyebrows */}
    <path d="M86,38 Q92,36 98,39" stroke="#3E2723" strokeWidth="2" fill="none" />
    <path d="M102,39 Q108,36 114,38" stroke="#3E2723" strokeWidth="2" fill="none" />
    {/* Nose */}
    <path d="M100,46 L98,52 Q100,54 102,52 Z" fill="#D4954A" />
    {/* Mouth - stern */}
    <path d="M94,58 L106,58" stroke="#8D6E63" strokeWidth="2" />
  </svg>
);

// ============ FARMER ============
export const Farmer = ({ size = 120, mood = 'neutral', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 200 220" className={className}>
    <defs>
      <radialGradient id="farmerSkin" cx="50%" cy="40%">
        <stop offset="0%" stopColor="#D4954A" />
        <stop offset="100%" stopColor="#B07830" />
      </radialGradient>
      <linearGradient id="farmerCloth" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#A5D6A7" />
        <stop offset="100%" stopColor="#66BB6A" />
      </linearGradient>
      <filter id="farmerShadow"><feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.2" /></filter>
    </defs>
    {/* Stick in hand */}
    <rect x="140" y="55" width="4" height="150" fill="#6D4C41" rx="2" transform="rotate(10,142,130)" />
    {/* Legs */}
    <rect x="82" y="170" width="12" height="30" rx="4" fill="url(#farmerSkin)" />
    <rect x="106" y="170" width="12" height="30" rx="4" fill="url(#farmerSkin)" />
    <ellipse cx="88" cy="202" rx="10" ry="5" fill="#6D4C41" />
    <ellipse cx="112" cy="202" rx="10" ry="5" fill="#6D4C41" />
    {/* Dhoti */}
    <path d="M70,118 Q67,165 72,198 L128,198 Q133,165 130,118 Z" fill="#FFF8E1" filter="url(#farmerShadow)" />
    {/* Torso */}
    <ellipse cx="100" cy="108" rx="28" ry="20" fill="url(#farmerSkin)" />
    {/* Upper cloth */}
    <path d="M74,95 Q100,88 126,95 Q128,112 100,118 Q72,112 74,95" fill="url(#farmerCloth)" />
    {/* Arms */}
    <rect x="58" y="96" width="12" height="35" rx="5" fill="url(#farmerSkin)" />
    <rect x="130" y="96" width="12" height="35" rx="5" fill="url(#farmerSkin)" />
    <circle cx="64" cy="134" r="7" fill="url(#farmerSkin)" />
    <circle cx="136" cy="134" r="7" fill="url(#farmerSkin)" />
    {/* Neck */}
    <rect x="92" y="76" width="16" height="14" rx="4" fill="url(#farmerSkin)" />
    {/* Head */}
    <ellipse cx="100" cy="55" rx="24" ry="26" fill="url(#farmerSkin)" />
    {/* Hair */}
    <path d="M76,50 Q76,28 100,24 Q124,28 124,50" fill="#3E2723" />
    {/* Turban */}
    <path d="M74,50 Q74,28 100,22 Q126,28 126,50 Q126,38 100,34 Q74,38 74,50" fill="#FF8F00" />
    <path d="M76,48 Q100,42 124,48" stroke="#E65100" strokeWidth="1.5" fill="none" />
    {/* Eyes */}
    <ellipse cx="90" cy="52" rx="4" ry="5" fill="white" />
    <ellipse cx="110" cy="52" rx="4" ry="5" fill="white" />
    <circle cx="90" cy="53" r="2.5" fill="#2C1810" />
    <circle cx="110" cy="53" r="2.5" fill="#2C1810" />
    {/* Angry eyebrows */}
    {mood === 'angry' && <>
      <path d="M84,46 Q90,42 96,46" stroke="#3E2723" strokeWidth="2.5" fill="none" />
      <path d="M104,46 Q110,42 116,46" stroke="#3E2723" strokeWidth="2.5" fill="none" />
    </>}
    {/* Nose */}
    <path d="M100,54 L98,60 Q100,62 102,60 Z" fill="#B07830" />
    {/* Mustache */}
    <path d="M92,64 Q86,68 82,66" stroke="#3E2723" strokeWidth="2" fill="none" />
    <path d="M108,64 Q114,68 118,66" stroke="#3E2723" strokeWidth="2" fill="none" />
    {/* Mouth */}
    {mood === 'angry' ?
      <path d="M92,72 Q100,68 108,72" stroke="#5A3A0A" strokeWidth="2" fill="none" /> :
      <path d="M94,70 Q100,74 106,70" stroke="#8D6E63" strokeWidth="1.5" fill="none" />
    }
  </svg>
);

// ============ CRADLE ============
export const Cradle = ({ size = 100, className = '' }) => (
  <svg width={size} height={size * 0.7} viewBox="0 0 160 110" className={className}>
    <defs>
      <linearGradient id="cradleWood" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#8D6E63" />
        <stop offset="100%" stopColor="#5D4037" />
      </linearGradient>
      <linearGradient id="cradleCloth" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF9C4" />
        <stop offset="100%" stopColor="#FFF176" />
      </linearGradient>
      <filter id="cradleShadow"><feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.2" /></filter>
    </defs>
    {/* Rockers */}
    <path d="M20,95 Q80,110 140,95" stroke="url(#cradleWood)" strokeWidth="5" fill="none" strokeLinecap="round" />
    {/* Side posts */}
    <rect x="28" y="30" width="6" height="65" fill="url(#cradleWood)" rx="2" />
    <rect x="126" y="30" width="6" height="65" fill="url(#cradleWood)" rx="2" />
    {/* Top bar */}
    <rect x="28" y="28" width="104" height="6" fill="url(#cradleWood)" rx="2" />
    {/* Cloth/hammock */}
    <path d="M34,36 Q80,75 126,36" fill="url(#cradleCloth)" filter="url(#cradleShadow)" />
    <path d="M34,36 Q80,70 126,36" fill="none" stroke="#F9A825" strokeWidth="1" opacity="0.4" />
    {/* Decorative knobs */}
    <circle cx="31" cy="28" r="4" fill="#6D4C41" />
    <circle cx="129" cy="28" r="4" fill="#6D4C41" />
    {/* Rope for hanging / swinging */}
    <path d="M80,10 L80,28" stroke="#8D6E63" strokeWidth="2" />
    <path d="M60,12 Q80,5 100,12" stroke="#8D6E63" strokeWidth="2" fill="none" />
  </svg>
);

// ============ NECKLACE ============
export const Necklace = ({ size = 60, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
    <defs>
      <linearGradient id="necklaceGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="40%" stopColor="#FFC107" />
        <stop offset="100%" stopColor="#FF8F00" />
      </linearGradient>
      <radialGradient id="necklaceGem" cx="50%" cy="40%">
        <stop offset="0%" stopColor="#E53935" />
        <stop offset="100%" stopColor="#B71C1C" />
      </radialGradient>
      <filter id="necklaceGlow">
        <feGaussianBlur stdDeviation="2" result="glow" />
        <feMerge><feMergeNode in="glow" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>
    {/* Chain */}
    <path d="M20,20 Q15,45 25,60 Q35,75 50,80 Q65,75 75,60 Q85,45 80,20" stroke="url(#necklaceGold)" strokeWidth="3" fill="none" filter="url(#necklaceGlow)" />
    {/* Chain links */}
    {[25, 35, 45, 55, 65, 75].map((pct, i) => {
      const t = pct / 100;
      const cx = 20 + (80 - 20) * t;
      const cy = 20 + Math.sin(t * Math.PI) * 60;
      return <circle key={i} cx={cx} cy={cy} r="3" fill="url(#necklaceGold)" />;
    })}
    {/* Central pendant */}
    <path d="M44,78 L50,90 L56,78 Z" fill="url(#necklaceGold)" />
    <circle cx="50" cy="82" r="5" fill="url(#necklaceGem)" />
    <circle cx="49" cy="80" r="2" fill="white" opacity="0.4" />
    {/* Sparkle */}
    <path d="M50,72 L51,68 L52,72 L56,71 L52,73 L53,76 L51,74 L48,76 L49,73 L46,72 Z" fill="white" opacity="0.6" />
  </svg>
);

// ============ WATER POT ============
export const WaterPot = ({ size = 60, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 110" className={className}>
    <defs>
      <radialGradient id="potClay" cx="40%" cy="35%">
        <stop offset="0%" stopColor="#D4845A" />
        <stop offset="100%" stopColor="#A0522D" />
      </radialGradient>
      <radialGradient id="potHighlight" cx="35%" cy="30%">
        <stop offset="0%" stopColor="#E8A878" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
      <filter id="potShadow"><feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.25" /></filter>
    </defs>
    {/* Base */}
    <ellipse cx="50" cy="100" rx="18" ry="6" fill="#8B4513" />
    {/* Body - rounded pot */}
    <path d="M22,65 Q18,45 30,30 Q38,22 50,20 Q62,22 70,30 Q82,45 78,65 Q80,85 68,95 Q58,100 50,100 Q42,100 32,95 Q20,85 22,65 Z" fill="url(#potClay)" filter="url(#potShadow)" />
    {/* Highlight */}
    <ellipse cx="40" cy="50" rx="15" ry="20" fill="url(#potHighlight)" opacity="0.3" />
    {/* Neck */}
    <path d="M38,22 Q38,14 42,10 Q46,8 50,8 Q54,8 58,10 Q62,14 62,22" fill="url(#potClay)" />
    {/* Rim */}
    <ellipse cx="50" cy="10" rx="14" ry="5" fill="#C97040" />
    <ellipse cx="50" cy="10" rx="10" ry="3" fill="#2C1810" opacity="0.6" />
    {/* Water line visible at top */}
    <ellipse cx="50" cy="12" rx="8" ry="2" fill="#1565C0" opacity="0.4" />
    {/* Decorative band */}
    <path d="M25,60 Q50,55 75,60" stroke="#8B4513" strokeWidth="2" fill="none" opacity="0.5" />
    <path d="M24,65 Q50,60 76,65" stroke="#8B4513" strokeWidth="1.5" fill="none" opacity="0.4" />
  </svg>
);

// ============ POT (Brahmin's Dream Story) ============
export const Pot = ({ size = 80, broken = false, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 120 130" className={className}>
    <defs>
      <radialGradient id="potClayBody" cx="40%" cy="35%">
        <stop offset="0%" stopColor="#D4845A" />
        <stop offset="100%" stopColor="#A0522D" />
      </radialGradient>
      <radialGradient id="potClayHighlight" cx="30%" cy="30%">
        <stop offset="0%" stopColor="#E8A878" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
      <filter id="potBodyShadow"><feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.25" /></filter>
    </defs>
    {broken ? <>
      {/* Broken pot - shattered pieces */}
      <path d="M20,90 Q18,70 30,55 L45,60 L35,80 Q28,88 20,90" fill="url(#potClayBody)" filter="url(#potBodyShadow)" />
      <path d="M48,58 L60,30 L72,58 L60,65 Z" fill="url(#potClayBody)" />
      <path d="M75,55 Q88,70 85,90 L70,85 L68,62 Z" fill="url(#potClayBody)" />
      <path d="M30,95 L50,92 L55,110 L25,108 Z" fill="#A0522D" />
      <path d="M55,90 L75,88 L80,108 L52,110 Z" fill="#A0522D" />
      {/* Scattered grain/rice */}
      {[{x:25,y:105},{x:40,y:112},{x:55,y:108},{x:70,y:115},{x:45,y:118},{x:60,y:120},{x:30,y:118},{x:80,y:110}].map((p,i) => (
        <ellipse key={i} cx={p.x} cy={p.y} rx="3" ry="2" fill="#FFF9C4" opacity="0.8" transform={`rotate(${i*30},${p.x},${p.y})`} />
      ))}
      {/* Crack lines */}
      <line x1="45" y1="60" x2="48" y2="58" stroke="#6D3A1A" strokeWidth="1.5" />
      <line x1="68" y1="62" x2="72" y2="58" stroke="#6D3A1A" strokeWidth="1.5" />
    </> : <>
      {/* Intact pot */}
      {/* Base */}
      <ellipse cx="60" cy="115" rx="20" ry="7" fill="#8B4513" />
      {/* Body */}
      <path d="M28,75 Q22,55 35,38 Q44,28 60,25 Q76,28 85,38 Q98,55 92,75 Q95,95 82,108 Q72,115 60,115 Q48,115 38,108 Q25,95 28,75 Z" fill="url(#potClayBody)" filter="url(#potBodyShadow)" />
      {/* Highlight */}
      <ellipse cx="48" cy="60" rx="16" ry="22" fill="url(#potClayHighlight)" opacity="0.3" />
      {/* Neck */}
      <path d="M45,28 Q45,18 50,12 Q55,8 60,8 Q65,8 70,12 Q75,18 75,28" fill="url(#potClayBody)" />
      {/* Rim */}
      <ellipse cx="60" cy="10" rx="16" ry="6" fill="#C97040" />
      <ellipse cx="60" cy="10" rx="12" ry="4" fill="#2C1810" opacity="0.5" />
      {/* Rice/grain visible at top */}
      <ellipse cx="60" cy="12" rx="10" ry="3" fill="#FFF9C4" opacity="0.5" />
      {/* Decorative bands */}
      <path d="M30,70 Q60,64 90,70" stroke="#8B4513" strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M28,78 Q60,72 92,78" stroke="#8B4513" strokeWidth="1.5" fill="none" opacity="0.4" />
    </>}
  </svg>
);

// ============ GOAT ============
export const Goat = ({ size = 90, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 160 160" className={className}>
    <defs>
      <radialGradient id="goatFur" cx="40%" cy="35%">
        <stop offset="0%" stopColor="#F5F5F5" />
        <stop offset="100%" stopColor="#BDBDBD" />
      </radialGradient>
      <radialGradient id="goatBelly" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#FAFAFA" />
        <stop offset="100%" stopColor="#E0E0E0" />
      </radialGradient>
      <filter id="goatShadow"><feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.2" /></filter>
    </defs>
    {/* Tail - short upward */}
    <path d="M128,82 Q135,72 132,65" stroke="#BDBDBD" strokeWidth="4" fill="none" strokeLinecap="round" />
    {/* Body */}
    <ellipse cx="85" cy="90" rx="40" ry="28" fill="url(#goatFur)" filter="url(#goatShadow)" />
    <ellipse cx="85" cy="96" rx="26" ry="18" fill="url(#goatBelly)" opacity="0.5" />
    {/* Legs - thin */}
    <rect x="55" y="112" width="8" height="30" rx="3" fill="#BDBDBD" />
    <rect x="72" y="114" width="8" height="28" rx="3" fill="#BDBDBD" />
    <rect x="95" y="114" width="8" height="28" rx="3" fill="#BDBDBD" />
    <rect x="110" y="112" width="8" height="30" rx="3" fill="#BDBDBD" />
    {/* Hooves */}
    <rect x="53" y="140" width="12" height="5" rx="2" fill="#4E342E" />
    <rect x="70" y="140" width="12" height="5" rx="2" fill="#4E342E" />
    <rect x="93" y="140" width="12" height="5" rx="2" fill="#4E342E" />
    <rect x="108" y="140" width="12" height="5" rx="2" fill="#4E342E" />
    {/* Neck */}
    <path d="M52,82 Q42,65 40,50" fill="url(#goatFur)" />
    <path d="M60,80 Q52,66 50,52" fill="url(#goatFur)" />
    {/* Head */}
    <ellipse cx="42" cy="42" rx="18" ry="16" fill="url(#goatFur)" />
    {/* Snout */}
    <ellipse cx="30" cy="48" rx="10" ry="8" fill="#E0E0E0" />
    {/* Horns - curved backward */}
    <path d="M38,28 Q32,14 28,12" stroke="#8D6E63" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M48,28 Q44,14 40,12" stroke="#8D6E63" strokeWidth="3" fill="none" strokeLinecap="round" />
    {/* Ears - floppy */}
    <ellipse cx="28" cy="36" rx="8" ry="5" fill="#E0E0E0" transform="rotate(-20,28,36)" />
    <ellipse cx="56" cy="36" rx="8" ry="5" fill="#E0E0E0" transform="rotate(20,56,36)" />
    {/* Beard */}
    <path d="M28,52 Q26,62 24,68" stroke="#BDBDBD" strokeWidth="3" fill="none" strokeLinecap="round" />
    {/* Eyes */}
    <circle cx="36" cy="40" r="3.5" fill="white" />
    <circle cx="48" cy="40" r="3.5" fill="white" />
    <circle cx="36" cy="40" r="2" fill="#2C1810" />
    <circle cx="48" cy="40" r="2" fill="#2C1810" />
    {/* Nose */}
    <ellipse cx="26" cy="46" rx="3" ry="2" fill="#8D6E63" />
    {/* Mouth */}
    <path d="M24,52 Q28,55 32,52" stroke="#8D6E63" strokeWidth="1.5" fill="none" />
  </svg>
);

// ============ COW ============
export const Cow = ({ size = 120, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 200 180" className={className}>
    <defs>
      <radialGradient id="cowHide" cx="40%" cy="35%">
        <stop offset="0%" stopColor="#FAFAFA" />
        <stop offset="100%" stopColor="#E0E0E0" />
      </radialGradient>
      <radialGradient id="cowBelly" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#FFF8E1" />
        <stop offset="100%" stopColor="#F5E6C8" />
      </radialGradient>
      <filter id="cowShadow"><feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.2" /></filter>
    </defs>
    {/* Tail */}
    <path d="M170,80 Q185,65 188,50" stroke="#9E9E9E" strokeWidth="3" fill="none" />
    <ellipse cx="188" cy="48" rx="4" ry="6" fill="#9E9E9E" />
    {/* Body */}
    <ellipse cx="105" cy="95" rx="58" ry="38" fill="url(#cowHide)" filter="url(#cowShadow)" />
    <ellipse cx="105" cy="102" rx="38" ry="24" fill="url(#cowBelly)" opacity="0.5" />
    {/* Spots */}
    <ellipse cx="85" cy="82" rx="14" ry="10" fill="#5D4037" opacity="0.6" transform="rotate(-15,85,82)" />
    <ellipse cx="120" cy="88" rx="12" ry="8" fill="#5D4037" opacity="0.5" transform="rotate(10,120,88)" />
    <ellipse cx="130" cy="105" rx="10" ry="7" fill="#5D4037" opacity="0.4" />
    {/* Legs */}
    <rect x="58" y="126" width="12" height="32" rx="4" fill="#E0E0E0" />
    <rect x="78" y="128" width="12" height="30" rx="4" fill="#E0E0E0" />
    <rect x="118" y="128" width="12" height="30" rx="4" fill="#E0E0E0" />
    <rect x="138" y="126" width="12" height="32" rx="4" fill="#E0E0E0" />
    {/* Hooves */}
    <rect x="56" y="156" width="16" height="6" rx="2" fill="#4E342E" />
    <rect x="76" y="156" width="16" height="6" rx="2" fill="#4E342E" />
    <rect x="116" y="156" width="16" height="6" rx="2" fill="#4E342E" />
    <rect x="136" y="156" width="16" height="6" rx="2" fill="#4E342E" />
    {/* Udder */}
    <ellipse cx="100" cy="128" rx="12" ry="8" fill="#FFB6C1" opacity="0.6" />
    {/* Neck */}
    <path d="M52,82 Q38,65 35,48" fill="url(#cowHide)" />
    <path d="M62,78 Q50,64 48,50" fill="url(#cowHide)" />
    {/* Head */}
    <ellipse cx="38" cy="42" rx="22" ry="20" fill="url(#cowHide)" />
    {/* Snout */}
    <ellipse cx="24" cy="50" rx="14" ry="10" fill="#FFB6C1" opacity="0.5" />
    {/* Horns - small curved */}
    <path d="M30,24 Q24,12 20,10" stroke="#D7CCC8" strokeWidth="4" fill="none" strokeLinecap="round" />
    <path d="M46,24 Q52,12 56,10" stroke="#D7CCC8" strokeWidth="4" fill="none" strokeLinecap="round" />
    {/* Ears */}
    <ellipse cx="22" cy="32" rx="8" ry="5" fill="#E0E0E0" transform="rotate(-30,22,32)" />
    <ellipse cx="54" cy="32" rx="8" ry="5" fill="#E0E0E0" transform="rotate(30,54,32)" />
    {/* Eyes */}
    <circle cx="30" cy="38" r="4" fill="white" />
    <circle cx="46" cy="38" r="4" fill="white" />
    <circle cx="30" cy="39" r="2.5" fill="#2C1810" />
    <circle cx="46" cy="39" r="2.5" fill="#2C1810" />
    <circle cx="31" cy="37" r="1" fill="white" />
    <circle cx="47" cy="37" r="1" fill="white" />
    {/* Nostrils */}
    <ellipse cx="20" cy="50" rx="2.5" ry="2" fill="#8D6E63" />
    <ellipse cx="28" cy="50" rx="2.5" ry="2" fill="#8D6E63" />
    {/* Mouth */}
    <path d="M18,56 Q24,60 30,56" stroke="#8D6E63" strokeWidth="1.5" fill="none" />
    {/* Bell on neck */}
    <path d="M48,62 Q50,58 52,62" stroke="#FFD700" strokeWidth="1.5" fill="none" />
    <circle cx="50" cy="65" r="4" fill="#FFD700" />
    <circle cx="50" cy="65" r="2" fill="#FFA000" />
  </svg>
);

// ============ MOUSE ============
export const Mouse = ({ size = 60, mood = 'neutral', className = '' }) => {
  const isBrave = mood === 'brave';
  const isWorking = mood === 'working';
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <radialGradient id="mouseFur" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#A1887F" />
          <stop offset="100%" stopColor="#795548" />
        </radialGradient>
        <radialGradient id="mouseBelly" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#D7CCC8" />
          <stop offset="100%" stopColor="#BCAAA4" />
        </radialGradient>
        <filter id="mouseShadow"><feDropShadow dx="0.5" dy="1" stdDeviation="1" floodOpacity="0.2" /></filter>
      </defs>
      {/* Tail - long curvy */}
      <path d="M72,62 Q88,55 92,42 Q95,35 90,40 Q86,50 78,58" stroke="#8D6E63" strokeWidth="2" fill="none" />
      {/* Body */}
      <ellipse cx="48" cy="58" rx="22" ry="18" fill="url(#mouseFur)" filter="url(#mouseShadow)" />
      <ellipse cx="48" cy="62" rx="14" ry="12" fill="url(#mouseBelly)" opacity="0.5" />
      {/* Legs - tiny */}
      <ellipse cx="36" cy="75" rx="5" ry="3" fill="#795548" />
      <ellipse cx="58" cy="75" rx="5" ry="3" fill="#795548" />
      {/* Head */}
      <ellipse cx="28" cy="42" rx="16" ry="14" fill="url(#mouseFur)" />
      {/* Ears - big round */}
      <circle cx="18" cy="28" r="10" fill="#A1887F" />
      <circle cx="38" cy="28" r="10" fill="#A1887F" />
      <circle cx="18" cy="28" r="7" fill="#FFAB91" opacity="0.5" />
      <circle cx="38" cy="28" r="7" fill="#FFAB91" opacity="0.5" />
      {/* Eyes */}
      <circle cx="22" cy="40" r="4" fill="white" />
      <circle cx="34" cy="40" r="4" fill="white" />
      <circle cx="22" cy="40" r="2.5" fill={isBrave ? '#1565C0' : '#1A1A1A'} />
      <circle cx="34" cy="40" r="2.5" fill={isBrave ? '#1565C0' : '#1A1A1A'} />
      <circle cx="23" cy="39" r="1" fill="white" />
      <circle cx="35" cy="39" r="1" fill="white" />
      {/* Brave eyebrows */}
      {isBrave && <>
        <path d="M17,34 Q22,32 27,35" stroke="#5D4037" strokeWidth="1.5" fill="none" />
        <path d="M29,35 Q34,32 39,34" stroke="#5D4037" strokeWidth="1.5" fill="none" />
      </>}
      {/* Nose - pointed */}
      <ellipse cx="16" cy="46" rx="3" ry="2.5" fill="#E91E63" opacity="0.7" />
      {/* Whiskers */}
      <line x1="18" y1="46" x2="4" y2="42" stroke="#BDBDBD" strokeWidth="0.8" />
      <line x1="18" y1="48" x2="4" y2="50" stroke="#BDBDBD" strokeWidth="0.8" />
      <line x1="18" y1="47" x2="5" y2="46" stroke="#BDBDBD" strokeWidth="0.8" />
      {/* Mouth */}
      {isBrave ?
        <path d="M18,52 Q22,56 28,52" stroke="#5D4037" strokeWidth="1.5" fill="none" /> :
        <path d="M20,50 Q22,52 26,50" stroke="#5D4037" strokeWidth="1" fill="none" />
      }
      {/* Working: tiny teeth for gnawing */}
      {isWorking && <>
        <rect x="20" y="50" width="2" height="3" fill="white" rx="0.5" />
        <rect x="24" y="50" width="2" height="3" fill="white" rx="0.5" />
      </>}
      {/* Front paws */}
      <ellipse cx="32" cy="68" rx="4" ry="3" fill="#795548" />
      <ellipse cx="42" cy="68" rx="4" ry="3" fill="#795548" />
    </svg>
  );
};

// ============ MOUSE KING ============
export const MouseKing = ({ size = 70, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 110 110" className={className}>
    <defs>
      <radialGradient id="mouseKingFur" cx="40%" cy="35%">
        <stop offset="0%" stopColor="#A1887F" />
        <stop offset="100%" stopColor="#6D4C41" />
      </radialGradient>
      <radialGradient id="mouseKingBelly" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#D7CCC8" />
        <stop offset="100%" stopColor="#BCAAA4" />
      </radialGradient>
      <filter id="mouseKingShadow"><feDropShadow dx="0.5" dy="1" stdDeviation="1.5" floodOpacity="0.2" /></filter>
    </defs>
    {/* Tail */}
    <path d="M82,72 Q98,62 102,48 Q104,40 99,46 Q94,56 86,66" stroke="#8D6E63" strokeWidth="2.5" fill="none" />
    {/* Body - slightly larger */}
    <ellipse cx="55" cy="68" rx="26" ry="20" fill="url(#mouseKingFur)" filter="url(#mouseKingShadow)" />
    <ellipse cx="55" cy="72" rx="16" ry="14" fill="url(#mouseKingBelly)" opacity="0.5" />
    {/* Legs */}
    <ellipse cx="40" cy="86" rx="6" ry="3.5" fill="#6D4C41" />
    <ellipse cx="66" cy="86" rx="6" ry="3.5" fill="#6D4C41" />
    {/* Head */}
    <ellipse cx="34" cy="48" rx="18" ry="16" fill="url(#mouseKingFur)" />
    {/* Ears */}
    <circle cx="22" cy="32" r="11" fill="#A1887F" />
    <circle cx="46" cy="32" r="11" fill="#A1887F" />
    <circle cx="22" cy="32" r="8" fill="#FFAB91" opacity="0.5" />
    <circle cx="46" cy="32" r="8" fill="#FFAB91" opacity="0.5" />
    {/* Crown */}
    <polygon points="18,26 22,10 28,22 34,8 40,22 46,10 50,26" fill="#FFD700" stroke="#FFA000" strokeWidth="1" />
    <circle cx="34" cy="12" r="2.5" fill="#E53935" />
    <circle cx="24" cy="16" r="1.8" fill="#42A5F5" />
    <circle cx="44" cy="16" r="1.8" fill="#42A5F5" />
    {/* Eyes */}
    <circle cx="28" cy="46" r="4.5" fill="white" />
    <circle cx="40" cy="46" r="4.5" fill="white" />
    <circle cx="28" cy="46" r="2.5" fill="#1A1A1A" />
    <circle cx="40" cy="46" r="2.5" fill="#1A1A1A" />
    <circle cx="29" cy="44" r="1" fill="white" />
    <circle cx="41" cy="44" r="1" fill="white" />
    {/* Nose */}
    <ellipse cx="20" cy="52" rx="3.5" ry="2.5" fill="#E91E63" opacity="0.7" />
    {/* Whiskers */}
    <line x1="22" y1="52" x2="6" y2="48" stroke="#BDBDBD" strokeWidth="0.8" />
    <line x1="22" y1="54" x2="6" y2="56" stroke="#BDBDBD" strokeWidth="0.8" />
    {/* Regal mouth */}
    <path d="M24,58 Q30,62 38,58" stroke="#5D4037" strokeWidth="1.5" fill="none" />
    {/* Front paws */}
    <ellipse cx="38" cy="80" rx="5" ry="3.5" fill="#6D4C41" />
    <ellipse cx="50" cy="80" rx="5" ry="3.5" fill="#6D4C41" />
  </svg>
);

// ============ NET (Hunting Net) ============
export const Net = ({ size = 150, className = '' }) => (
  <svg width={size} height={size * 0.6} viewBox="0 0 200 120" className={className}>
    <defs>
      <linearGradient id="netRope" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#8D6E63" />
        <stop offset="100%" stopColor="#6D4C41" />
      </linearGradient>
      <filter id="netShadow"><feDropShadow dx="1" dy="1" stdDeviation="1" floodOpacity="0.15" /></filter>
    </defs>
    {/* Net mesh - diamond pattern */}
    {[0, 20, 40, 60, 80, 100, 120, 140, 160, 180].map((x, i) => (
      <line key={`v${i}`} x1={x + 10} y1="10" x2={x + 10} y2="110" stroke="#A1887F" strokeWidth="1.5" opacity="0.6" />
    ))}
    {[0, 20, 40, 60, 80, 100].map((y, i) => (
      <line key={`h${i}`} x1="10" y1={y + 10} x2="190" y2={y + 10} stroke="#A1887F" strokeWidth="1.5" opacity="0.6" />
    ))}
    {/* Diagonal cross-hatch for net look */}
    {[0, 40, 80, 120, 160].map((x, i) => (
      <g key={`d${i}`}>
        <line x1={x + 10} y1="10" x2={x + 50} y2="50" stroke="#8D6E63" strokeWidth="1" opacity="0.4" />
        <line x1={x + 50} y1="10" x2={x + 10} y2="50" stroke="#8D6E63" strokeWidth="1" opacity="0.4" />
      </g>
    ))}
    {/* Border rope - thick */}
    <rect x="5" y="5" width="190" height="110" rx="4" fill="none" stroke="url(#netRope)" strokeWidth="4" filter="url(#netShadow)" />
    {/* Knots at corners */}
    <circle cx="8" cy="8" r="5" fill="#6D4C41" />
    <circle cx="192" cy="8" r="5" fill="#6D4C41" />
    <circle cx="8" cy="112" r="5" fill="#6D4C41" />
    <circle cx="192" cy="112" r="5" fill="#6D4C41" />
    {/* Rope trailing end */}
    <path d="M192,8 Q205,5 210,12 Q208,18 200,15" stroke="#8D6E63" strokeWidth="2.5" fill="none" />
  </svg>
);

// ============ CAVE ============
export const Cave = ({ size = 160, className = '' }) => (
  <svg width={size} height={size * 0.75} viewBox="0 0 220 165" className={className}>
    <defs>
      <radialGradient id="caveDark" cx="50%" cy="60%">
        <stop offset="0%" stopColor="#1A1A1A" />
        <stop offset="60%" stopColor="#2C2C2C" />
        <stop offset="100%" stopColor="#424242" />
      </radialGradient>
      <radialGradient id="caveRock" cx="40%" cy="30%">
        <stop offset="0%" stopColor="#9E9E9E" />
        <stop offset="100%" stopColor="#616161" />
      </radialGradient>
      <filter id="caveShadow"><feDropShadow dx="2" dy="3" stdDeviation="4" floodOpacity="0.4" /></filter>
    </defs>
    {/* Rock face / mountain */}
    <path d="M0,160 L0,80 Q20,30 60,15 Q110,0 160,15 Q200,30 220,80 L220,160 Z" fill="url(#caveRock)" />
    {/* Rock texture lines */}
    <path d="M30,40 Q50,35 70,42" stroke="#757575" strokeWidth="1.5" fill="none" opacity="0.4" />
    <path d="M140,35 Q165,30 190,45" stroke="#757575" strokeWidth="1.5" fill="none" opacity="0.4" />
    <path d="M15,100 Q25,95 40,102" stroke="#757575" strokeWidth="1" fill="none" opacity="0.3" />
    <path d="M180,95 Q195,90 210,100" stroke="#757575" strokeWidth="1" fill="none" opacity="0.3" />
    {/* Cave entrance - dark arch */}
    <path d="M55,160 L55,90 Q55,50 110,45 Q165,50 165,90 L165,160 Z" fill="url(#caveDark)" filter="url(#caveShadow)" />
    {/* Inner darkness gradient */}
    <path d="M70,160 L70,100 Q70,65 110,60 Q150,65 150,100 L150,160 Z" fill="#111" opacity="0.5" />
    {/* Stalactites */}
    <polygon points="75,55 78,72 72,72" fill="#757575" />
    <polygon points="95,48 98,68 92,68" fill="#616161" />
    <polygon points="125,48 128,65 122,65" fill="#757575" />
    <polygon points="148,55 151,70 145,70" fill="#616161" />
    {/* Small rocks at base */}
    <ellipse cx="60" cy="158" rx="8" ry="5" fill="#757575" />
    <ellipse cx="160" cy="158" rx="10" ry="6" fill="#757575" />
    <ellipse cx="75" cy="160" rx="5" ry="3" fill="#616161" />
    {/* Glowing eyes inside (optional spooky) */}
    <circle cx="100" cy="120" r="2" fill="#FFD54F" opacity="0.4">
      <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" />
    </circle>
    <circle cx="108" cy="120" r="2" fill="#FFD54F" opacity="0.4">
      <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" />
    </circle>
  </svg>
);

// ============ FISH ============
export const Fish = ({ size = 70, color = '#42A5F5', mood = 'neutral', className = '' }) => {
  const isDead = mood === 'dead';
  const isScared = mood === 'scared';
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 120 72" className={className}
      style={isDead ? { transform: 'rotate(180deg)' } : {}}>
      <defs>
        <radialGradient id="fishBody" cx="40%" cy="35%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={color.replace('F5', 'C8').replace('A5', '78')} />
        </radialGradient>
        <radialGradient id="fishBelly" cx="50%" cy="60%">
          <stop offset="0%" stopColor="#E3F2FD" />
          <stop offset="100%" stopColor="#BBDEFB" />
        </radialGradient>
        <filter id="fishShadow"><feDropShadow dx="0.5" dy="1" stdDeviation="1" floodOpacity="0.2" /></filter>
      </defs>
      {/* Tail fin */}
      <polygon points="95,36 115,18 115,54" fill={color} opacity="0.8" />
      {/* Body */}
      <ellipse cx="55" cy="36" rx="38" ry="22" fill="url(#fishBody)" filter="url(#fishShadow)" />
      {/* Belly */}
      <ellipse cx="55" cy="42" rx="28" ry="14" fill="url(#fishBelly)" opacity="0.4" />
      {/* Dorsal fin */}
      <path d="M45,14 Q55,4 65,14" fill={color} opacity="0.7" />
      {/* Pectoral fin */}
      <path d="M42,42 Q35,52 30,55 Q38,50 44,44" fill={color} opacity="0.6" />
      {/* Scales pattern */}
      <path d="M40,30 Q48,28 56,30" stroke={color} strokeWidth="0.8" fill="none" opacity="0.3" />
      <path d="M50,36 Q58,34 66,36" stroke={color} strokeWidth="0.8" fill="none" opacity="0.3" />
      {/* Eye */}
      {isDead ? <>
        <line x1="26" y1="28" x2="34" y2="36" stroke="#1A1A1A" strokeWidth="2" />
        <line x1="34" y1="28" x2="26" y2="36" stroke="#1A1A1A" strokeWidth="2" />
      </> : <>
        <circle cx="30" cy="32" r={isScared ? 5 : 4} fill="white" />
        <circle cx="30" cy="32" r={isScared ? 3 : 2.5} fill="#1A1A1A" />
        <circle cx="29" cy="31" r="1" fill="white" />
      </>}
      {/* Mouth */}
      {isScared ?
        <ellipse cx="18" cy="38" rx="3" ry="4" fill="#1A1A1A" opacity="0.6" /> :
        <path d="M18,38 Q22,40 18,42" stroke="#1565C0" strokeWidth="1.5" fill="none" />
      }
      {/* Bubbles for scared */}
      {isScared && <>
        <circle cx="12" cy="28" r="2" fill="none" stroke="#90CAF9" strokeWidth="0.8" opacity="0.6" />
        <circle cx="8" cy="22" r="1.5" fill="none" stroke="#90CAF9" strokeWidth="0.8" opacity="0.4" />
      </>}
    </svg>
  );
};

// ============ FISHERMAN ============
export const Fisherman = ({ size = 120, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 200 220" className={className}>
    <defs>
      <radialGradient id="fishermanSkin" cx="50%" cy="40%">
        <stop offset="0%" stopColor="#D4954A" />
        <stop offset="100%" stopColor="#B07830" />
      </radialGradient>
      <linearGradient id="fishermanCloth" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#5C6BC0" />
        <stop offset="100%" stopColor="#3949AB" />
      </linearGradient>
      <filter id="fishermanShadow"><feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.2" /></filter>
    </defs>
    {/* Fishing rod */}
    <path d="M145,48 Q170,20 185,10 Q188,8 190,12 Q188,15 172,28" stroke="#6D4C41" strokeWidth="3" fill="none" />
    <line x1="190" y1="12" x2="195" y2="50" stroke="#90A4AE" strokeWidth="1" />
    {/* Hook */}
    <path d="M195,50 Q198,56 194,58 Q190,56 192,52" stroke="#90A4AE" strokeWidth="1.5" fill="none" />
    {/* Legs */}
    <rect x="82" y="170" width="12" height="30" rx="4" fill="url(#fishermanSkin)" />
    <rect x="106" y="170" width="12" height="30" rx="4" fill="url(#fishermanSkin)" />
    <ellipse cx="88" cy="202" rx="10" ry="5" fill="#5D4037" />
    <ellipse cx="112" cy="202" rx="10" ry="5" fill="#5D4037" />
    {/* Lungi/wrap */}
    <path d="M70,120 Q67,165 72,198 L128,198 Q133,165 130,120 Z" fill="url(#fishermanCloth)" filter="url(#fishermanShadow)" />
    <path d="M72,192 L128,192" stroke="#3F51B5" strokeWidth="1.5" opacity="0.5" />
    {/* Torso - bare upper body */}
    <ellipse cx="100" cy="108" rx="28" ry="20" fill="url(#fishermanSkin)" />
    {/* Arms */}
    <rect x="58" y="96" width="12" height="35" rx="5" fill="url(#fishermanSkin)" />
    <rect x="130" y="96" width="12" height="35" rx="5" fill="url(#fishermanSkin)" />
    <circle cx="64" cy="134" r="7" fill="url(#fishermanSkin)" />
    <circle cx="136" cy="134" r="7" fill="url(#fishermanSkin)" />
    {/* Neck */}
    <rect x="92" y="76" width="16" height="14" rx="4" fill="url(#fishermanSkin)" />
    {/* Head */}
    <ellipse cx="100" cy="55" rx="24" ry="26" fill="url(#fishermanSkin)" />
    {/* Hair */}
    <path d="M76,50 Q76,28 100,24 Q124,28 124,50" fill="#2C1810" />
    {/* Headband */}
    <path d="M76,44 Q100,38 124,44" stroke="#E53935" strokeWidth="3" fill="none" />
    {/* Eyes */}
    <ellipse cx="90" cy="52" rx="4" ry="5" fill="white" />
    <ellipse cx="110" cy="52" rx="4" ry="5" fill="white" />
    <circle cx="90" cy="53" r="2.5" fill="#2C1810" />
    <circle cx="110" cy="53" r="2.5" fill="#2C1810" />
    {/* Nose */}
    <path d="M100,54 L98,60 Q100,62 102,60 Z" fill="#B07830" />
    {/* Mouth */}
    <path d="M94,68 Q100,72 106,68" stroke="#8D6E63" strokeWidth="1.5" fill="none" />
  </svg>
);

// ============ TWO-HEADED BIRD ============
export const TwoHeadedBird = ({ size = 140, mood = 'happy', className = '' }) => {
  const isArguing = mood === 'arguing';
  const isSick = mood === 'sick';
  const isSad = mood === 'sad';
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" className={className}>
      <defs>
        <radialGradient id="bhBody" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#E53935" />
          <stop offset="100%" stopColor="#B71C1C" />
        </radialGradient>
        <radialGradient id="bhChest" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#FFCDD2" />
          <stop offset="100%" stopColor="#EF9A9A" />
        </radialGradient>
        <radialGradient id="bhHead" cx="45%" cy="40%">
          <stop offset="0%" stopColor="#1E88E5" />
          <stop offset="100%" stopColor="#1565C0" />
        </radialGradient>
        <filter id="bhShadow"><feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.25" /></filter>
      </defs>
      {/* Tail feathers - colorful fan */}
      <path d="M60,130 Q30,115 15,95" stroke="#FF6F00" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M63,134 Q35,122 20,108" stroke="#FFD600" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M66,138 Q40,130 28,118" stroke="#E53935" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M58,136 Q32,128 18,112" stroke="#7B1FA2" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Body - plump red bird body */}
      <ellipse cx="100" cy="130" rx="40" ry="34" fill="url(#bhBody)" filter="url(#bhShadow)" />
      {/* Chest - lighter belly */}
      <ellipse cx="100" cy="140" rx="26" ry="20" fill="url(#bhChest)" opacity="0.6" />
      {/* Wings - spread, darker red with gold tips */}
      <path d="M62,118 Q44,102 38,114 Q44,130 62,132 Q78,134 92,126" fill="#C62828" />
      <path d="M42,112 Q36,106 34,116" fill="#FF8F00" opacity="0.7" />
      <path d="M138,118 Q156,102 162,114 Q156,130 138,132 Q122,134 108,126" fill="#C62828" />
      <path d="M158,112 Q164,106 166,116" fill="#FF8F00" opacity="0.7" />
      {/* Legs */}
      <path d="M86,162 L82,180 L76,184 M82,180 L86,184 M82,180 L80,186" stroke="#FF8F00" strokeWidth="2.5" fill="none" />
      <path d="M114,162 L118,180 L112,184 M118,180 L122,184 M118,180 L116,186" stroke="#FF8F00" strokeWidth="2.5" fill="none" />
      {/* Left Neck - thick blue neck */}
      <path d="M76,112 Q58,90 52,72 Q48,62 56,64 Q64,66 70,78 Q80,96 86,110" fill="url(#bhHead)" />
      {/* Right Neck - thick blue neck */}
      <path d="M124,112 Q142,90 148,72 Q152,62 144,64 Q136,66 130,78 Q120,96 114,110" fill="url(#bhHead)" />
      {/* Left Head - blue */}
      <circle cx="52" cy="54" r="20" fill="url(#bhHead)" />
      {/* Left crest - tall golden feathers */}
      <path d="M42,36 Q44,18 52,24 Q48,32 46,36" fill="#FFD700" />
      <path d="M48,38 Q52,20 58,28" fill="#FFA000" />
      <path d="M38,40 Q38,26 44,30" fill="#FFCA28" />
      {/* Left Eye */}
      {isSick || isSad ? (
        <path d="M46,52 Q49,56 52,52" stroke="white" strokeWidth="1.5" fill="none" />
      ) : (
        <>
          <circle cx="46" cy="52" r="5" fill="white" />
          <circle cx="46" cy="52" r="3" fill={isArguing ? '#B71C1C' : '#1A1A1A'} />
          <circle cx="47.5" cy="50.5" r="1.5" fill="white" />
        </>
      )}
      {/* Left Beak - large yellow */}
      <path d={isArguing ? "M32,56 L14,50 L32,64" : "M32,57 L16,58 L32,64"} fill="#FFC107" stroke="#FF8F00" strokeWidth="1" />
      {/* Right Head - blue */}
      <circle cx="148" cy="54" r="20" fill="url(#bhHead)" />
      {/* Right crest - tall golden feathers */}
      <path d="M158,36 Q156,18 148,24 Q152,32 154,36" fill="#FFD700" />
      <path d="M152,38 Q148,20 142,28" fill="#FFA000" />
      <path d="M162,40 Q162,26 156,30" fill="#FFCA28" />
      {/* Right Eye */}
      {isSick || isSad ? (
        <path d="M148,52 Q151,56 154,52" stroke="white" strokeWidth="1.5" fill="none" />
      ) : (
        <>
          <circle cx="154" cy="52" r="5" fill="white" />
          <circle cx="154" cy="52" r="3" fill={isArguing ? '#B71C1C' : '#1A1A1A'} />
          <circle cx="152.5" cy="50.5" r="1.5" fill="white" />
        </>
      )}
      {/* Right Beak - large yellow */}
      <path d={isArguing ? "M168,56 L186,50 L168,64" : "M168,57 L184,58 L168,64"} fill="#FFC107" stroke="#FF8F00" strokeWidth="1" />
      {/* Arguing: anger lines */}
      {isArguing && <>
        <path d="M70,48 L76,53" stroke="#E53935" strokeWidth="2.5" />
        <path d="M73,44 L78,50" stroke="#E53935" strokeWidth="2.5" />
        <path d="M130,48 L124,53" stroke="#E53935" strokeWidth="2.5" />
        <path d="M127,44 L122,50" stroke="#E53935" strokeWidth="2.5" />
      </>}
      {/* Sick */}
      {isSick && <>
        <ellipse cx="46" cy="60" rx="4" ry="3" fill="#7CB342" opacity="0.4" />
        <ellipse cx="154" cy="60" rx="4" ry="3" fill="#7CB342" opacity="0.4" />
      </>}
      {/* Sad: tears */}
      {isSad && <>
        <ellipse cx="40" cy="58" rx="1.5" ry="4" fill="#64B5F6" opacity="0.7" />
        <ellipse cx="160" cy="58" rx="1.5" ry="4" fill="#64B5F6" opacity="0.7" />
      </>}
      {/* Happy: blush */}
      {mood === 'happy' && <>
        <circle cx="40" cy="58" r="5" fill="#FF9B9B" opacity="0.2" />
        <circle cx="160" cy="58" r="5" fill="#FF9B9B" opacity="0.2" />
      </>}
    </svg>
  );
};

// ============ STORK / CRANE ============
export const Stork = ({ size = 130, mood = 'neutral', className = '' }) => {
  const isScheming = mood === 'scheming';
  const isStruggling = mood === 'struggling';
  const isDefeated = mood === 'defeated';
  return (
    <svg width={size} height={size} viewBox="0 0 180 220" className={className}>
      <defs>
        <radialGradient id="storkFeather" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#FAFAFA" />
          <stop offset="100%" stopColor="#E0E0E0" />
        </radialGradient>
        <radialGradient id="storkWingTip" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#424242" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </radialGradient>
        <filter id="storkShadow"><feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.2" /></filter>
      </defs>
      {/* Tail */}
      <path d="M52,125 Q35,120 25,108" fill="url(#storkWingTip)" />
      <path d="M55,130 Q38,128 28,118" fill="#333" />
      {/* Body */}
      <ellipse cx="90" cy="120" rx="38" ry="30" fill="url(#storkFeather)" filter="url(#storkShadow)" />
      {/* Wing */}
      <path d="M60,108 Q42,98 38,108 Q40,122 60,125 Q78,128 95,118" fill="#E0E0E0" />
      <path d="M55,118 Q42,122 40,128 Q48,130 55,125" fill="url(#storkWingTip)" />
      {/* Legs - very long and thin */}
      <line x1="80" y1="148" x2="75" y2="195" stroke="#E53935" strokeWidth="3" />
      <line x1="100" y1="148" x2="105" y2="195" stroke="#E53935" strokeWidth="3" />
      {/* Feet */}
      <path d="M75,195 L65,200 M75,195 L75,202 M75,195 L82,200" stroke="#E53935" strokeWidth="2" fill="none" />
      <path d="M105,195 L95,200 M105,195 L105,202 M105,195 L112,200" stroke="#E53935" strokeWidth="2" fill="none" />
      {/* Long neck */}
      <path d="M105,105 Q115,75 118,50 Q120,35 115,22" fill="url(#storkFeather)" />
      <path d="M112,108 Q122,78 124,52 Q126,38 120,25" fill="url(#storkFeather)" />
      {/* Head */}
      <ellipse cx="115" cy="20" rx="16" ry="14" fill="url(#storkFeather)" />
      {/* Red crown patch */}
      <ellipse cx="115" cy="10" rx="6" ry="4" fill="#E53935" />
      {/* Eye */}
      {isDefeated ? <>
        <path d="M120,16 Q123,20 126,16" stroke="#1A1A1A" strokeWidth="1.5" fill="none" />
      </> : <>
        <circle cx="123" cy="18" r="3.5" fill="white" />
        <circle cx="123" cy="18" r="2" fill={isScheming ? '#B71C1C' : '#1A1A1A'} />
        <circle cx="124" cy="17" r="0.8" fill="white" />
      </>}
      {/* Scheming: narrowed eye */}
      {isScheming && <>
        <path d="M118,14 Q123,12 128,15" stroke="#333" strokeWidth="2" fill="none" />
      </>}
      {/* Long beak */}
      <polygon points="130,22 160,24 130,28" fill="#FF8F00" stroke="#E65100" strokeWidth="0.5" />
      {/* Struggling: flapping lines */}
      {isStruggling && <>
        <path d="M48,100 Q38,90 30,95" stroke="#90A4AE" strokeWidth="1.5" fill="none" />
        <path d="M45,95 Q35,85 28,90" stroke="#90A4AE" strokeWidth="1.5" fill="none" />
        <path d="M42,105 Q32,98 26,102" stroke="#90A4AE" strokeWidth="1.5" fill="none" />
      </>}
      {/* Defeated: droopy posture, X eyes handled above */}
      {isDefeated && <>
        <path d="M120,30 Q118,34 122,32" stroke="#999" strokeWidth="1" fill="none" />
      </>}
    </svg>
  );
};

// ============ CRAB ============
export const Crab = ({ size = 80, mood = 'neutral', className = '' }) => {
  const isSuspicious = mood === 'suspicious';
  const isAttacking = mood === 'attacking';
  const isTriumphant = mood === 'triumphant';
  return (
    <svg width={size} height={size * 0.8} viewBox="0 0 140 112" className={className}>
      <defs>
        <radialGradient id="crabShell" cx="45%" cy="35%">
          <stop offset="0%" stopColor="#FF7043" />
          <stop offset="100%" stopColor="#D84315" />
        </radialGradient>
        <radialGradient id="crabBelly" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#FFAB91" />
          <stop offset="100%" stopColor="#FF8A65" />
        </radialGradient>
        <filter id="crabShadow"><feDropShadow dx="1" dy="1" stdDeviation="1.5" floodOpacity="0.25" /></filter>
      </defs>
      {/* Legs - 3 pairs */}
      <path d="M38,65 Q22,72 15,80 Q12,82 16,82 Q20,78 35,70" stroke="#BF360C" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M35,72 Q18,82 10,92 Q8,95 12,94 Q16,88 32,78" stroke="#BF360C" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M35,78 Q20,90 14,100 Q12,104 16,102 Q20,96 34,84" stroke="#BF360C" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M102,65 Q118,72 125,80 Q128,82 124,82 Q120,78 105,70" stroke="#BF360C" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M105,72 Q122,82 130,92 Q132,95 128,94 Q124,88 108,78" stroke="#BF360C" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M105,78 Q120,90 126,100 Q128,104 124,102 Q120,96 106,84" stroke="#BF360C" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Claws */}
      <path d={isAttacking ?
        "M35,52 Q15,30 8,18 Q4,12 10,14 Q14,20 12,28 Q8,22 6,16 Q2,10 6,14 Q12,22 18,32 Q25,42 35,52" :
        "M35,52 Q20,40 15,30 Q12,24 16,26 Q18,30 18,36 Q16,30 14,24 Q12,20 14,22 Q18,28 22,38 Q28,46 35,52"
      } fill="url(#crabShell)" />
      <path d={isAttacking ?
        "M105,52 Q125,30 132,18 Q136,12 130,14 Q126,20 128,28 Q132,22 134,16 Q138,10 134,14 Q128,22 122,32 Q115,42 105,52" :
        "M105,52 Q120,40 125,30 Q128,24 124,26 Q122,30 122,36 Q124,30 126,24 Q128,20 126,22 Q122,28 118,38 Q112,46 105,52"
      } fill="url(#crabShell)" />
      {/* Claw pincers */}
      {isAttacking ? <>
        <path d="M8,18 Q2,10 8,8 Q14,10 10,14" fill="#E64A19" stroke="#BF360C" strokeWidth="1" />
        <path d="M132,18 Q138,10 132,8 Q126,10 130,14" fill="#E64A19" stroke="#BF360C" strokeWidth="1" />
      </> : <>
        <path d="M15,30 Q10,24 14,22 Q18,24 16,26" fill="#E64A19" stroke="#BF360C" strokeWidth="1" />
        <path d="M125,30 Q130,24 126,22 Q122,24 124,26" fill="#E64A19" stroke="#BF360C" strokeWidth="1" />
      </>}
      {/* Shell / body */}
      <ellipse cx="70" cy="62" rx="35" ry="25" fill="url(#crabShell)" filter="url(#crabShadow)" />
      <ellipse cx="70" cy="68" rx="22" ry="15" fill="url(#crabBelly)" opacity="0.4" />
      {/* Shell texture */}
      <path d="M50,55 Q70,48 90,55" stroke="#BF360C" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M48,62 Q70,56 92,62" stroke="#BF360C" strokeWidth="1" fill="none" opacity="0.3" />
      {/* Eye stalks */}
      <line x1="58" y1="42" x2="52" y2="30" stroke="#D84315" strokeWidth="3" />
      <line x1="82" y1="42" x2="88" y2="30" stroke="#D84315" strokeWidth="3" />
      {/* Eyes */}
      <circle cx="52" cy="28" r="5" fill="white" />
      <circle cx="88" cy="28" r="5" fill="white" />
      <circle cx="52" cy="28" r="3" fill={isSuspicious || isAttacking ? '#B71C1C' : '#1A1A1A'} />
      <circle cx="88" cy="28" r="3" fill={isSuspicious || isAttacking ? '#B71C1C' : '#1A1A1A'} />
      <circle cx="53" cy="27" r="1" fill="white" />
      <circle cx="89" cy="27" r="1" fill="white" />
      {/* Suspicious: narrowed eyes */}
      {isSuspicious && <>
        <path d="M47,24 Q52,22 57,25" stroke="#5D4037" strokeWidth="2" fill="none" />
        <path d="M83,25 Q88,22 93,24" stroke="#5D4037" strokeWidth="2" fill="none" />
      </>}
      {/* Mouth */}
      {isTriumphant ?
        <path d="M62,72 Q70,80 78,72" stroke="#BF360C" strokeWidth="2" fill="none" /> :
        isAttacking ?
        <path d="M62,72 Q70,78 78,72" stroke="#BF360C" strokeWidth="2" fill="#5D1A00" /> :
        <path d="M64,72 Q70,74 76,72" stroke="#BF360C" strokeWidth="1.5" fill="none" />
      }
      {/* Triumphant: sparkles */}
      {isTriumphant && <>
        <circle cx="40" cy="20" r="2" fill="#FFD700" opacity="0.6" />
        <circle cx="100" cy="18" r="2" fill="#FFD700" opacity="0.6" />
        <circle cx="70" cy="12" r="1.5" fill="#FFD700" opacity="0.5" />
      </>}
    </svg>
  );
};

// ============ LOG (Split with Wedge) ============
export const Log = ({ size = 120, wedgeIn = true, className = '' }) => (
  <svg width={size} height={size * 0.6} viewBox="0 0 180 108" className={className}>
    <defs>
      <linearGradient id="logBark" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#6D4C41" />
        <stop offset="100%" stopColor="#4E342E" />
      </linearGradient>
      <radialGradient id="logInner" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#D7CCC8" />
        <stop offset="40%" stopColor="#BCAAA4" />
        <stop offset="100%" stopColor="#A1887F" />
      </radialGradient>
      <radialGradient id="logWedgeMetal" cx="40%" cy="30%">
        <stop offset="0%" stopColor="#B0BEC5" />
        <stop offset="100%" stopColor="#607D8B" />
      </radialGradient>
      <filter id="logShadow"><feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.25" /></filter>
    </defs>
    {wedgeIn ? <>
      {/* Log with split and wedge in */}
      {/* Bottom half */}
      <path d="M10,60 L170,60 L170,90 Q170,98 162,98 L18,98 Q10,98 10,90 Z" fill="url(#logBark)" filter="url(#logShadow)" />
      {/* Top half - slightly separated */}
      <path d="M10,18 Q10,10 18,10 L162,10 Q170,10 170,18 L170,50 L10,50 Z" fill="url(#logBark)" />
      {/* Inner wood visible in gap */}
      <rect x="12" y="50" width="156" height="10" fill="url(#logInner)" />
      {/* Split gap */}
      <line x1="10" y1="55" x2="170" y2="55" stroke="#8D6E63" strokeWidth="0.5" opacity="0.4" />
      {/* Wedge */}
      <polygon points="82,38 90,68 98,38" fill="url(#logWedgeMetal)" stroke="#455A64" strokeWidth="1" />
      {/* Wedge shine */}
      <path d="M86,42 L90,62 L88,42" fill="#CFD8DC" opacity="0.4" />
      {/* Tree rings on ends */}
      <ellipse cx="15" cy="55" rx="4" ry="40" fill="url(#logInner)" opacity="0.5" />
      <ellipse cx="165" cy="55" rx="4" ry="40" fill="url(#logInner)" opacity="0.5" />
      {/* Ring details */}
      <ellipse cx="15" cy="55" rx="2" ry="25" fill="none" stroke="#8D6E63" strokeWidth="0.5" opacity="0.3" />
      <ellipse cx="165" cy="55" rx="2" ry="25" fill="none" stroke="#8D6E63" strokeWidth="0.5" opacity="0.3" />
      {/* Bark texture */}
      <path d="M30,15 L30,48" stroke="#5D4037" strokeWidth="1" opacity="0.3" />
      <path d="M70,15 L70,48" stroke="#5D4037" strokeWidth="1" opacity="0.3" />
      <path d="M120,15 L120,48" stroke="#5D4037" strokeWidth="1" opacity="0.3" />
      <path d="M30,62 L30,95" stroke="#5D4037" strokeWidth="1" opacity="0.3" />
      <path d="M120,62 L120,95" stroke="#5D4037" strokeWidth="1" opacity="0.3" />
    </> : <>
      {/* Log snapped shut - no gap */}
      <path d="M10,10 Q10,4 18,4 L162,4 Q170,4 170,10 L170,95 Q170,102 162,102 L18,102 Q10,102 10,95 Z" fill="url(#logBark)" filter="url(#logShadow)" />
      {/* Crack line where it shut */}
      <line x1="10" y1="53" x2="170" y2="53" stroke="#3E2723" strokeWidth="2" />
      {/* Tree rings */}
      <ellipse cx="15" cy="53" rx="4" ry="44" fill="url(#logInner)" opacity="0.5" />
      <ellipse cx="165" cy="53" rx="4" ry="44" fill="url(#logInner)" opacity="0.5" />
      <ellipse cx="15" cy="53" rx="2" ry="30" fill="none" stroke="#8D6E63" strokeWidth="0.5" opacity="0.3" />
      <ellipse cx="165" cy="53" rx="2" ry="30" fill="none" stroke="#8D6E63" strokeWidth="0.5" opacity="0.3" />
      {/* Bark texture */}
      <path d="M30,8 L30,100" stroke="#5D4037" strokeWidth="1" opacity="0.3" />
      <path d="M70,8 L70,100" stroke="#5D4037" strokeWidth="1" opacity="0.3" />
      <path d="M120,8 L120,100" stroke="#5D4037" strokeWidth="1" opacity="0.3" />
      {/* Blood/impact marks */}
      <ellipse cx="90" cy="53" rx="8" ry="3" fill="#B71C1C" opacity="0.4" />
    </>}
  </svg>
);

// ============ DRUM ============
export const Drum = ({ size = 100, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 140 150" className={className}>
    <defs>
      <radialGradient id="drumBody" cx="50%" cy="40%">
        <stop offset="0%" stopColor="#A1887F" />
        <stop offset="100%" stopColor="#6D4C41" />
      </radialGradient>
      <radialGradient id="drumHead" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#FFF8E1" />
        <stop offset="60%" stopColor="#F5E6C8" />
        <stop offset="100%" stopColor="#D7CCC8" />
      </radialGradient>
      <filter id="drumShadow"><feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.25" /></filter>
    </defs>
    {/* Drum sticks */}
    <rect x="95" y="10" width="4" height="55" fill="#8D6E63" rx="2" transform="rotate(25,97,38)" />
    <circle cx="92" cy="8" r="5" fill="#6D4C41" />
    <rect x="105" y="15" width="4" height="55" fill="#8D6E63" rx="2" transform="rotate(35,107,42)" />
    <circle cx="100" cy="12" r="5" fill="#6D4C41" />
    {/* Drum body */}
    <path d="M25,50 L25,110 Q25,125 70,128 Q115,125 115,110 L115,50" fill="url(#drumBody)" filter="url(#drumShadow)" />
    {/* Bottom rim */}
    <ellipse cx="70" cy="118" rx="45" ry="12" fill="#5D4037" />
    {/* Decorative bands */}
    <path d="M25,70 Q70,80 115,70" stroke="#FFD700" strokeWidth="2" fill="none" />
    <path d="M25,90 Q70,100 115,90" stroke="#FFD700" strokeWidth="2" fill="none" />
    {/* Rope lacing pattern */}
    {[30, 50, 70, 90, 110].map((x, i) => (
      <path key={i} d={`M${x},52 L${x-5},118`} stroke="#8D6E63" strokeWidth="1.5" opacity="0.5" />
    ))}
    {/* Drum head (top) */}
    <ellipse cx="70" cy="50" rx="45" ry="14" fill="url(#drumHead)" />
    {/* Rim */}
    <ellipse cx="70" cy="50" rx="45" ry="14" fill="none" stroke="#5D4037" strokeWidth="3" />
    {/* Head highlight */}
    <ellipse cx="62" cy="46" rx="18" ry="6" fill="white" opacity="0.15" />
    {/* Vibration lines */}
    <path d="M55,42 Q60,38 65,42" stroke="#D7CCC8" strokeWidth="0.8" fill="none" opacity="0.4">
      <animate attributeName="opacity" values="0.4;0.1;0.4" dur="0.5s" repeatCount="indefinite" />
    </path>
    <path d="M75,44 Q80,40 85,44" stroke="#D7CCC8" strokeWidth="0.8" fill="none" opacity="0.3">
      <animate attributeName="opacity" values="0.3;0.1;0.3" dur="0.6s" repeatCount="indefinite" />
    </path>
  </svg>
);

// ============ HOUSE (Indian Hut) ============
export const House = ({ size = 120, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 160 160" className={className}>
    <defs>
      <linearGradient id="houseWall" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFCC80" />
        <stop offset="100%" stopColor="#E8A850" />
      </linearGradient>
      <linearGradient id="houseRoof" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#8D6E63" />
        <stop offset="100%" stopColor="#5D4037" />
      </linearGradient>
      <filter id="houseShadow"><feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.2" /></filter>
    </defs>
    {/* Ground */}
    <rect x="0" y="148" width="160" height="12" fill="#8D6E63" rx="2" />
    {/* Wall */}
    <rect x="25" y="80" width="110" height="68" fill="url(#houseWall)" filter="url(#houseShadow)" />
    {/* Wall texture */}
    <path d="M30,100 L130,100" stroke="#D4954A" strokeWidth="0.8" opacity="0.3" />
    <path d="M30,120 L130,120" stroke="#D4954A" strokeWidth="0.8" opacity="0.3" />
    <path d="M30,140 L130,140" stroke="#D4954A" strokeWidth="0.8" opacity="0.3" />
    {/* Roof - thatched */}
    <polygon points="10,82 80,20 150,82" fill="url(#houseRoof)" />
    {/* Thatch texture lines */}
    <path d="M25,75 Q80,30 135,75" stroke="#795548" strokeWidth="1" fill="none" opacity="0.3" />
    <path d="M35,78 Q80,38 125,78" stroke="#795548" strokeWidth="1" fill="none" opacity="0.3" />
    <path d="M18,80 L80,25" stroke="#6D4C41" strokeWidth="0.8" opacity="0.2" />
    <path d="M80,25 L142,80" stroke="#6D4C41" strokeWidth="0.8" opacity="0.2" />
    {/* Door */}
    <rect x="62" y="110" width="36" height="38" fill="#5D4037" rx="3" />
    <rect x="65" y="112" width="30" height="36" fill="#4E342E" rx="2" />
    {/* Door handle */}
    <circle cx="90" cy="130" r="2.5" fill="#FFD700" />
    {/* Window left */}
    <rect x="35" y="95" width="18" height="18" fill="#5D4037" rx="2" />
    <rect x="37" y="97" width="14" height="14" fill="#FFF176" rx="1" opacity="0.8" />
    <line x1="44" y1="97" x2="44" y2="111" stroke="#5D4037" strokeWidth="1.5" />
    <line x1="37" y1="104" x2="51" y2="104" stroke="#5D4037" strokeWidth="1.5" />
    {/* Window right */}
    <rect x="107" y="95" width="18" height="18" fill="#5D4037" rx="2" />
    <rect x="109" y="97" width="14" height="14" fill="#FFF176" rx="1" opacity="0.8" />
    <line x1="116" y1="97" x2="116" y2="111" stroke="#5D4037" strokeWidth="1.5" />
    <line x1="109" y1="104" x2="123" y2="104" stroke="#5D4037" strokeWidth="1.5" />
    {/* Chimney smoke area - small pot outside */}
    <ellipse cx="145" cy="142" rx="8" ry="6" fill="#A0522D" opacity="0.5" />
  </svg>
);

// ============ FISH BONES ============
export const FishBones = ({ size = 80, className = '' }) => (
  <svg width={size} height={size * 0.5} viewBox="0 0 120 60" className={className}>
    <defs>
      <filter id="fishBonesShadow"><feDropShadow dx="0.5" dy="1" stdDeviation="1" floodOpacity="0.15" /></filter>
    </defs>
    {/* Tail bones */}
    <path d="M100,30 L112,18 M100,30 L112,42 M100,30 L115,30" stroke="#E0E0E0" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* Spine */}
    <line x1="15" y1="30" x2="100" y2="30" stroke="#BDBDBD" strokeWidth="3" filter="url(#fishBonesShadow)" />
    {/* Ribs */}
    {[25, 38, 51, 64, 77, 90].map((x, i) => (
      <g key={i}>
        <line x1={x} y1="30" x2={x - 4} y2="14" stroke="#E0E0E0" strokeWidth="2" strokeLinecap="round" />
        <line x1={x} y1="30" x2={x - 4} y2="46" stroke="#E0E0E0" strokeWidth="2" strokeLinecap="round" />
      </g>
    ))}
    {/* Head / skull */}
    <circle cx="15" cy="30" r="10" fill="#BDBDBD" />
    <circle cx="15" cy="30" r="8" fill="#E0E0E0" />
    {/* Eye socket */}
    <circle cx="12" cy="27" r="3" fill="#757575" />
    {/* Jaw */}
    <path d="M8,34 Q12,40 18,36" stroke="#BDBDBD" strokeWidth="2" fill="none" />
  </svg>
);

// ============ KRISHNA ============
export const Krishna = ({ size = 120, mood = 'happy', className = '' }) => {
  const isEating = mood === 'eating';
  const isCrying = mood === 'crying';
  const isMischievous = mood === 'mischievous';
  const isRunning = mood === 'running';
  const isHiding = mood === 'hiding';
  const isDancing = mood === 'dancing';
  const isLifting = mood === 'lifting';
  const isPlayful = mood === 'playful' || mood === 'playing';
  const isCalm = mood === 'calm';
  const isDetermined = mood === 'determined';
  const isCurious = mood === 'curious';
  const isSad = mood === 'sad';
  return (
    <svg width={size} height={size * 1.1} viewBox="0 0 140 154" className={className}>
      <defs>
        <radialGradient id="kr-skin" cx="45%" cy="40%">
          <stop offset="0%" stopColor="#5C9EE0" />
          <stop offset="70%" stopColor="#3B7FCC" />
          <stop offset="100%" stopColor="#3375B8" />
        </radialGradient>
        <radialGradient id="kr-skinCheek" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#6BAFE8" />
          <stop offset="100%" stopColor="#4A8BD4" />
        </radialGradient>
        <linearGradient id="kr-dhoti" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFD54F" />
          <stop offset="50%" stopColor="#FFC107" />
          <stop offset="100%" stopColor="#FFA000" />
        </linearGradient>
        <linearGradient id="kr-dhotiEdge" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FF8F00" />
          <stop offset="50%" stopColor="#FFB300" />
          <stop offset="100%" stopColor="#FF8F00" />
        </linearGradient>
        <linearGradient id="kr-featherGreen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#26A69A" />
          <stop offset="40%" stopColor="#2E7D32" />
          <stop offset="100%" stopColor="#1B5E20" />
        </linearGradient>
        <linearGradient id="kr-featherBlue" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#4FC3F7" />
          <stop offset="100%" stopColor="#0277BD" />
        </linearGradient>
        <radialGradient id="kr-featherEye" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#FFD54F" />
          <stop offset="50%" stopColor="#FF8F00" />
          <stop offset="100%" stopColor="#0277BD" />
        </radialGradient>
        <linearGradient id="kr-crown" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#DAA520" />
        </linearGradient>
        <linearGradient id="kr-flute" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#A1887F" />
          <stop offset="50%" stopColor="#8D6E63" />
          <stop offset="100%" stopColor="#6D4C41" />
        </linearGradient>
        <filter id="kr-shadow"><feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.2" /></filter>
        <filter id="kr-glow"><feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#FFD54F" floodOpacity="0.3" /></filter>
      </defs>

      {/* Body */}
      <ellipse cx="70" cy="110" rx="28" ry="22" fill="url(#kr-skin)" filter="url(#kr-shadow)" />
      {/* Body highlight */}
      <ellipse cx="63" cy="105" rx="10" ry="8" fill="#6BAFE8" opacity="0.25" />

      {/* Dhoti / yellow cloth */}
      <path d="M42,108 Q46,140 70,142 Q94,140 98,108 Q85,118 70,120 Q55,118 42,108Z" fill="url(#kr-dhoti)" />
      {/* Dhoti border */}
      <path d="M44,136 Q70,146 96,136" stroke="url(#kr-dhotiEdge)" strokeWidth="2.5" fill="none" />
      {/* Dhoti fold lines */}
      <path d="M58,120 Q60,132 62,140" stroke="#E6A800" strokeWidth="0.8" fill="none" opacity="0.5" />
      <path d="M78,120 Q80,132 82,140" stroke="#E6A800" strokeWidth="0.8" fill="none" opacity="0.5" />

      {/* Left leg */}
      <ellipse cx="55" cy="142" rx="8" ry="5" fill="url(#kr-skin)" />
      {/* Right leg */}
      <ellipse cx="85" cy="142" rx="8" ry="5" fill="url(#kr-skin)" />
      {/* Anklets */}
      <ellipse cx="55" cy="142" rx="9" ry="2.5" fill="none" stroke="#FFD700" strokeWidth="1.5" />
      <ellipse cx="85" cy="142" rx="9" ry="2.5" fill="none" stroke="#FFD700" strokeWidth="1.5" />

      {/* Left arm */}
      <path d={
        isRunning ? "M44,105 Q30,100 25,90" :
        isLifting ? "M44,105 Q36,85 40,65" :
        isDancing ? "M44,105 Q28,90 32,75" :
        isPlayful ? "M44,105 Q30,98 26,88" :
        isDetermined ? "M44,105 Q34,100 30,95" :
        "M44,105 Q32,112 28,120"
      } stroke="url(#kr-skin)" strokeWidth="8" strokeLinecap="round" fill="none" />
      {/* Right arm */}
      <path d={
        mood === 'happy' || isCalm ? "M96,105 Q110,100 118,92" :
        isRunning ? "M96,105 Q110,100 115,90" :
        isLifting ? "M96,105 Q104,85 100,65" :
        isDancing ? "M96,105 Q112,90 108,75" :
        isPlayful ? "M96,105 Q112,98 116,88" :
        isDetermined ? "M96,105 Q108,95 112,88" :
        isCurious ? "M96,105 Q108,98 114,95" :
        "M96,105 Q108,112 112,120"
      } stroke="url(#kr-skin)" strokeWidth="8" strokeLinecap="round" fill="none" />
      {/* Hands */}
      <circle cx={isRunning ? 25 : isLifting ? 40 : isDancing ? 32 : isPlayful ? 26 : isDetermined ? 30 : 28} cy={isRunning ? 90 : isLifting ? 65 : isDancing ? 75 : isPlayful ? 88 : isDetermined ? 95 : 120} r="5" fill="url(#kr-skinCheek)" />
      <circle cx={mood === 'happy' || isCalm ? 118 : isRunning ? 115 : isLifting ? 100 : isDancing ? 108 : isPlayful ? 116 : isDetermined ? 112 : isCurious ? 114 : 112} cy={mood === 'happy' || isCalm ? 92 : isRunning ? 90 : isLifting ? 65 : isDancing ? 75 : isPlayful ? 88 : isDetermined ? 88 : isCurious ? 95 : 120} r="5" fill="url(#kr-skinCheek)" />
      {/* Bracelets */}
      <circle cx={isRunning ? 25 : isLifting ? 40 : isDancing ? 32 : isPlayful ? 26 : isDetermined ? 30 : 28} cy={isRunning ? 93 : isLifting ? 68 : isDancing ? 78 : isPlayful ? 91 : isDetermined ? 98 : 117} r="6" fill="none" stroke="#FFD700" strokeWidth="1.2" />
      <circle cx={mood === 'happy' || isCalm ? 118 : isRunning ? 115 : isLifting ? 100 : isDancing ? 108 : isPlayful ? 116 : isDetermined ? 112 : isCurious ? 114 : 112} cy={mood === 'happy' || isCalm ? 95 : isRunning ? 93 : isLifting ? 68 : isDancing ? 78 : isPlayful ? 91 : isDetermined ? 91 : isCurious ? 98 : 117} r="6" fill="none" stroke="#FFD700" strokeWidth="1.2" />

      {/* Flute (when happy or calm) */}
      {(mood === 'happy' || isCalm) && <>
        <rect x="108" y="88" width="28" height="5" rx="2.5" fill="url(#kr-flute)" transform="rotate(-30, 118, 90)" />
        {[0, 5, 10, 15, 20].map((dx, i) => (
          <circle key={i} cx={111 + dx * 0.9} cy={90 - dx * 0.5} r="1" fill="#5D4037" transform="rotate(-30, 118, 90)" />
        ))}
      </>}

      {/* Neck */}
      <rect x="62" y="82" width="16" height="10" rx="4" fill="url(#kr-skin)" />

      {/* Head */}
      <circle cx="70" cy="62" r="26" fill="url(#kr-skin)" filter="url(#kr-glow)" />
      {/* Face highlight */}
      <circle cx="63" cy="55" r="10" fill="#6BAFE8" opacity="0.15" />

      {/* Hair */}
      <path d="M44,58 Q44,32 70,28 Q96,32 96,58" fill="#1A1A2E" />
      <path d="M46,58 Q48,38 70,34 Q92,38 94,58" fill="#2D2D44" />
      {/* Hair curls */}
      <circle cx="48" cy="56" r="4" fill="#1A1A2E" />
      <circle cx="92" cy="56" r="4" fill="#1A1A2E" />
      <path d="M54,34 Q58,26 66,30" stroke="#1A1A2E" strokeWidth="3" fill="none" />
      <path d="M74,30 Q82,26 86,34" stroke="#1A1A2E" strokeWidth="3" fill="none" />

      {/* Crown / tiara */}
      <path d="M52,42 L56,30 L62,38 L68,26 L74,38 L80,30 L84,42" fill="url(#kr-crown)" stroke="#B8860B" strokeWidth="0.8" />
      {/* Crown jewels */}
      <circle cx="68" cy="32" r="2.5" fill="#E53935" />
      <circle cx="58" cy="36" r="1.8" fill="#43A047" />
      <circle cx="78" cy="36" r="1.8" fill="#1E88E5" />

      {/* Peacock feather */}
      <g transform="translate(78, 18) rotate(15)">
        {/* Feather shaft */}
        <line x1="0" y1="0" x2="2" y2="-30" stroke="#4E7A3E" strokeWidth="1.2" />
        {/* Feather barbs */}
        <path d="M2,-30 Q-6,-22 -3,-12 Q0,-6 2,-8 Q4,-6 7,-12 Q10,-22 2,-30Z" fill="url(#kr-featherGreen)" />
        <path d="M2,-26 Q-3,-20 -1,-14 Q1,-10 2,-12 Q3,-10 5,-14 Q7,-20 2,-26Z" fill="url(#kr-featherBlue)" opacity="0.7" />
        {/* Feather eye */}
        <ellipse cx="2" cy="-18" rx="3" ry="4" fill="url(#kr-featherEye)" />
        <ellipse cx="2" cy="-18" rx="1.5" ry="2.5" fill="#0D47A1" />
        <circle cx="2" cy="-18" r="0.8" fill="#FFD54F" />
        {/* Feather wisps at top */}
        <path d="M2,-30 Q0,-34 -2,-36" stroke="#26A69A" strokeWidth="0.5" fill="none" />
        <path d="M2,-30 Q4,-34 6,-36" stroke="#26A69A" strokeWidth="0.5" fill="none" />
        <path d="M2,-30 Q2,-35 2,-37" stroke="#2E7D32" strokeWidth="0.5" fill="none" />
      </g>

      {/* Eyes */}
      {isCrying ? <>
        {/* Skin-colored backdrop so hair doesn't make eye area look black */}
        <ellipse cx="60" cy="60" rx="10" ry="7" fill="url(#kr-skin)" />
        <ellipse cx="80" cy="60" rx="10" ry="7" fill="url(#kr-skin)" />
        <path d="M54,62 Q60,56 66,62" stroke="#1A1A2E" strokeWidth="2.2" fill="none" />
        <path d="M74,62 Q80,56 86,62" stroke="#1A1A2E" strokeWidth="2.2" fill="none" />
        {/* Tears */}
        <path d="M58,64 Q56,72 54,78" stroke="#4FC3F7" strokeWidth="1.5" fill="none" opacity="0.7" />
        <path d="M82,64 Q84,72 86,78" stroke="#4FC3F7" strokeWidth="1.5" fill="none" opacity="0.7" />
        <circle cx="54" cy="78" r="2" fill="#4FC3F7" opacity="0.5" />
        <circle cx="86" cy="78" r="2" fill="#4FC3F7" opacity="0.5" />
      </> : <>
        {/* Big adorable eyes */}
        <ellipse cx="60" cy="62" rx="8" ry="9" fill="white">
          <animate attributeName="ry" values="9;1;9" dur="4s" begin="1.8s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
        </ellipse>
        <ellipse cx="80" cy="62" rx="8" ry="9" fill="white">
          <animate attributeName="ry" values="9;1;9" dur="4s" begin="1.8s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
        </ellipse>
        <circle cx={isMischievous ? 63 : 60} cy="63" r="5" fill="#2C1810">
          <animate attributeName="r" values="5;0.5;5" dur="4s" begin="1.8s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
        </circle>
        <circle cx={isMischievous ? 83 : 80} cy="63" r="5" fill="#2C1810">
          <animate attributeName="r" values="5;0.5;5" dur="4s" begin="1.8s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
        </circle>
        <circle cx={isMischievous ? 64 : 61} cy="61" r="2" fill="white">
          <animate attributeName="r" values="2;0.2;2" dur="4s" begin="1.8s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
        </circle>
        <circle cx={isMischievous ? 84 : 81} cy="61" r="2" fill="white">
          <animate attributeName="r" values="2;0.2;2" dur="4s" begin="1.8s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
        </circle>
        {/* Lower lashes */}
        <path d="M53,66 Q60,70 67,66" stroke="#1A1A2E" strokeWidth="0.8" fill="none" opacity="0.4" />
        <path d="M73,66 Q80,70 87,66" stroke="#1A1A2E" strokeWidth="0.8" fill="none" opacity="0.4" />
      </>}

      {/* Eyebrows */}
      {isMischievous || isPlayful ? <>
        <path d="M52,53 Q60,48 68,53" stroke="#1A1A2E" strokeWidth="2" fill="none" />
        <path d="M72,50 Q80,46 88,53" stroke="#1A1A2E" strokeWidth="2" fill="none" />
      </> : isDetermined ? <>
        <path d="M52,52 Q60,48 68,52" stroke="#1A1A2E" strokeWidth="2.2" fill="none" />
        <path d="M72,52 Q80,48 88,52" stroke="#1A1A2E" strokeWidth="2.2" fill="none" />
      </> : isCurious ? <>
        <path d="M52,50 Q60,46 68,52" stroke="#1A1A2E" strokeWidth="1.8" fill="none" />
        <path d="M72,50 Q80,46 88,50" stroke="#1A1A2E" strokeWidth="1.8" fill="none" />
      </> : isSad ? <>
        <path d="M52,52 Q60,55 68,52" stroke="#1A1A2E" strokeWidth="1.8" fill="none" />
        <path d="M72,52 Q80,55 88,52" stroke="#1A1A2E" strokeWidth="1.8" fill="none" />
      </> : <>
        <path d="M52,53 Q60,49 68,53" stroke="#1A1A2E" strokeWidth="1.8" fill="none" />
        <path d="M72,53 Q80,49 88,53" stroke="#1A1A2E" strokeWidth="1.8" fill="none" />
      </>}

      {/* Nose */}
      <path d="M68,68 Q70,72 72,68" stroke="#2B6CA3" strokeWidth="1.5" fill="none" />

      {/* Mouth */}
      {isCrying || isSad ?
        <path d="M62,78 Q70,72 78,78" stroke="#2B6CA3" strokeWidth="1.5" fill="none" /> :
        isMischievous || isPlayful ?
        <path d="M60,76 Q70,84 80,76" stroke="#2B6CA3" strokeWidth="1.5" fill="#2B6CA3" opacity="0.3" /> :
        isDancing ?
        <path d="M58,76 Q70,86 82,76" stroke="#2B6CA3" strokeWidth="1.8" fill="#2B6CA3" opacity="0.3" /> :
        isDetermined ?
        <path d="M62,78 Q70,78 78,78" stroke="#2B6CA3" strokeWidth="1.8" fill="none" /> :
        isEating ?
        <ellipse cx="70" cy="78" rx="6" ry="5" fill="#2B6CA3" /> :
        <path d="M62,76 Q70,82 78,76" stroke="#2B6CA3" strokeWidth="1.5" fill="none" />
      }

      {/* Cheek blush */}
      <circle cx="50" cy="70" r="5" fill="#FF8A80" opacity="0.2" />
      <circle cx="90" cy="70" r="5" fill="#FF8A80" opacity="0.2" />

      {/* Butter smears when eating */}
      {isEating && <>
        <ellipse cx="64" cy="74" rx="4" ry="2" fill="#FFD54F" opacity="0.6" transform="rotate(-15, 64, 74)" />
        <ellipse cx="78" cy="72" rx="3" ry="2" fill="#FFD54F" opacity="0.5" transform="rotate(10, 78, 72)" />
        <circle cx="72" cy="80" r="2" fill="#FFD54F" opacity="0.4" />
      </>}

      {/* Necklace */}
      <path d="M56,86 Q70,94 84,86" stroke="#FFD700" strokeWidth="1.5" fill="none" />
      {/* Necklace gem */}
      <circle cx="70" cy="92" r="3" fill="#E53935" stroke="#FFD700" strokeWidth="0.8" />

      {/* Hiding effect - semi-transparent overlay */}
      {isHiding && <>
        <rect x="20" y="100" width="100" height="54" rx="5" fill="#8D6E63" opacity="0.6" />
        <text x="70" y="130" textAnchor="middle" fontSize="8" fill="#5D4037" opacity="0.5">~pot~</text>
      </>}

      {/* Divine glow when lifting */}
      {isLifting && <>
        <circle cx="70" cy="60" r="35" fill="none" stroke="#FFD700" strokeWidth="1.5" opacity="0.4">
          <animate attributeName="r" values="35;40;35" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.2;0.4" dur="2s" repeatCount="indefinite" />
        </circle>
      </>}

      {/* Dancing foot raise */}
      {isDancing && <>
        <ellipse cx="85" cy="138" rx="8" ry="3" fill="url(#kr-skin)" />
        <path d="M80,142 Q85,132 90,138" stroke="url(#kr-skin)" strokeWidth="3" fill="none" />
      </>}
    </svg>
  );
};

// ============ YASHODA ============
export const Yashoda = ({ size = 130, mood = 'happy', className = '' }) => {
  const isChasing = mood === 'chasing';
  const isAngry = mood === 'angry';
  const isBusy = mood === 'busy';
  const isLoving = mood === 'loving';
  const isMelting = mood === 'melting';
  return (
    <svg width={size} height={size * 1.15} viewBox="0 0 160 184" className={className}>
      <defs>
        <radialGradient id="kr-ySkin" cx="45%" cy="40%">
          <stop offset="0%" stopColor="#C68642" />
          <stop offset="70%" stopColor="#B5723C" />
          <stop offset="100%" stopColor="#A0522D" />
        </radialGradient>
        <radialGradient id="kr-ySkinHL" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#D4965A" />
          <stop offset="100%" stopColor="#C68642" />
        </radialGradient>
        <linearGradient id="kr-sari" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E53935" />
          <stop offset="50%" stopColor="#C62828" />
          <stop offset="100%" stopColor="#B71C1C" />
        </linearGradient>
        <linearGradient id="kr-sariPallu" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EF5350" />
          <stop offset="100%" stopColor="#C62828" />
        </linearGradient>
        <linearGradient id="kr-sariBorder" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#FFC107" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
        <linearGradient id="kr-blouse" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF7043" />
          <stop offset="100%" stopColor="#E64A19" />
        </linearGradient>
        <radialGradient id="kr-hair" cx="50%" cy="30%">
          <stop offset="0%" stopColor="#2C2C2C" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </radialGradient>
        <filter id="kr-yShadow"><feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.2" /></filter>
      </defs>

      {/* Sari body / lower garment */}
      <path d="M48,110 Q44,155 50,174 Q80,180 110,174 Q116,155 112,110 Q95,120 80,122 Q65,120 48,110Z" fill="url(#kr-sari)" filter="url(#kr-yShadow)" />
      {/* Sari border bottom */}
      <path d="M50,172 Q80,180 110,172" stroke="url(#kr-sariBorder)" strokeWidth="3" fill="none" />
      {/* Sari fold lines */}
      <path d="M65,125 Q67,148 68,170" stroke="#A51C1C" strokeWidth="0.7" fill="none" opacity="0.4" />
      <path d="M85,125 Q87,148 90,170" stroke="#A51C1C" strokeWidth="0.7" fill="none" opacity="0.4" />
      <path d="M75,126 Q76,150 78,172" stroke="#A51C1C" strokeWidth="0.7" fill="none" opacity="0.4" />

      {/* Feet */}
      <ellipse cx="62" cy="178" rx="10" ry="4" fill="url(#kr-ySkin)" />
      <ellipse cx="98" cy="178" rx="10" ry="4" fill="url(#kr-ySkin)" />
      {/* Anklets */}
      <ellipse cx="62" cy="176" rx="8" ry="2" fill="none" stroke="#C0C0C0" strokeWidth="1.2" />
      <ellipse cx="98" cy="176" rx="8" ry="2" fill="none" stroke="#C0C0C0" strokeWidth="1.2" />

      {/* Upper body / blouse area */}
      <ellipse cx="80" cy="108" rx="32" ry="20" fill="url(#kr-blouse)" />
      {/* Blouse highlight */}
      <ellipse cx="72" cy="103" rx="12" ry="7" fill="#FF8A65" opacity="0.3" />

      {/* Sari pallu (drape over shoulder) */}
      <path d="M50,98 Q45,92 42,80 Q44,70 50,68 Q52,80 56,95 Q60,108 55,120" fill="url(#kr-sariPallu)" opacity="0.85" />
      <path d="M50,98 Q52,80 50,68" stroke="url(#kr-sariBorder)" strokeWidth="2" fill="none" />

      {/* Left arm */}
      <path d={isChasing ? "M50,105 Q32,95 24,82" : isBusy ? "M50,105 Q35,100 28,88" : isLoving ? "M50,105 Q35,100 30,90" : "M50,105 Q38,115 34,128"} stroke="url(#kr-ySkin)" strokeWidth="9" strokeLinecap="round" fill="none" />
      {/* Right arm */}
      <path d={isChasing ? "M110,105 Q128,95 136,82" : isBusy ? "M110,105 Q125,95 130,80" : isLoving ? "M110,105 Q125,100 130,90" : "M110,105 Q122,115 126,128"} stroke="url(#kr-ySkin)" strokeWidth="9" strokeLinecap="round" fill="none" />
      {/* Hands */}
      <circle cx={isChasing ? 24 : isBusy ? 28 : isLoving ? 30 : 34} cy={isChasing ? 82 : isBusy ? 88 : isLoving ? 90 : 128} r="6" fill="url(#kr-ySkinHL)" />
      <circle cx={isChasing ? 136 : isBusy ? 130 : isLoving ? 130 : 126} cy={isChasing ? 82 : isBusy ? 80 : isLoving ? 90 : 128} r="6" fill="url(#kr-ySkinHL)" />
      {/* Bangles */}
      <circle cx={isChasing ? 24 : isBusy ? 28 : isLoving ? 30 : 34} cy={isChasing ? 86 : isBusy ? 92 : isLoving ? 94 : 124} r="7" fill="none" stroke="#FFD700" strokeWidth="1.5" />
      <circle cx={isChasing ? 24 : isBusy ? 28 : isLoving ? 30 : 34} cy={isChasing ? 89 : isBusy ? 95 : isLoving ? 97 : 121} r="7" fill="none" stroke="#E53935" strokeWidth="1.2" />
      <circle cx={isChasing ? 136 : isBusy ? 130 : isLoving ? 130 : 126} cy={isChasing ? 86 : isBusy ? 84 : isLoving ? 94 : 124} r="7" fill="none" stroke="#FFD700" strokeWidth="1.5" />
      <circle cx={isChasing ? 136 : isBusy ? 130 : isLoving ? 130 : 126} cy={isChasing ? 89 : isBusy ? 87 : isLoving ? 97 : 121} r="7" fill="none" stroke="#43A047" strokeWidth="1.2" />

      {/* Churning stick when busy */}
      {isBusy && <>
        <rect x="126" y="50" width="5" height="40" rx="2" fill="#8D6E63" transform="rotate(10, 128, 70)" />
        <path d="M124,52 Q128,46 132,52" stroke="#A1887F" strokeWidth="2" fill="none" transform="rotate(10, 128, 70)" />
      </>}

      {/* Neck */}
      <rect x="72" y="82" width="16" height="10" rx="4" fill="url(#kr-ySkin)" />
      {/* Necklace */}
      <path d="M64,88 Q80,98 96,88" stroke="#FFD700" strokeWidth="2" fill="none" />
      <circle cx="80" cy="96" r="3.5" fill="#E53935" stroke="#FFD700" strokeWidth="1" />
      {/* Mangalsutra */}
      <path d="M68,90 Q80,100 92,90" stroke="#1A1A1A" strokeWidth="0.8" fill="none" />
      <circle cx="80" cy="98" r="1.5" fill="#1A1A1A" />

      {/* Head */}
      <ellipse cx="80" cy="62" rx="24" ry="26" fill="url(#kr-ySkin)" />
      {/* Face highlight */}
      <ellipse cx="74" cy="56" rx="10" ry="8" fill="#D4965A" opacity="0.2" />

      {/* Hair */}
      <path d="M56,58 Q56,30 80,24 Q104,30 104,58" fill="url(#kr-hair)" />
      <path d="M58,56 Q60,34 80,30 Q100,34 102,56" fill="#2C2C2C" />
      {/* Hair bun */}
      <circle cx="80" cy="24" r="12" fill="url(#kr-hair)" />
      <circle cx="80" cy="24" r="10" fill="#2C2C2C" />
      {/* Bun detail / coil */}
      <path d="M74,20 Q80,16 86,20 Q84,24 80,26 Q76,24 74,20Z" stroke="#1A1A1A" strokeWidth="0.5" fill="none" opacity="0.5" />
      {/* Flowers in hair */}
      {[0, 1, 2, 3, 4].map(i => (
        <circle key={i} cx={70 + i * 5} cy={16 + (i % 2) * 3} r="2.5" fill={i % 2 === 0 ? '#FFFFFF' : '#FFF9C4'} stroke="#E0E0E0" strokeWidth="0.5" />
      ))}
      {/* Maang tikka (forehead jewelry) */}
      <line x1="80" y1="34" x2="80" y2="42" stroke="#FFD700" strokeWidth="1" />
      <circle cx="80" cy="43" r="2.5" fill="#E53935" stroke="#FFD700" strokeWidth="0.8" />

      {/* Sindoor in hair parting */}
      <line x1="80" y1="24" x2="80" y2="34" stroke="#E53935" strokeWidth="2" />

      {/* Earrings */}
      <circle cx="56" cy="66" r="3.5" fill="#FFD700" />
      <circle cx="56" cy="70" r="2" fill="#E53935" />
      <circle cx="104" cy="66" r="3.5" fill="#FFD700" />
      <circle cx="104" cy="70" r="2" fill="#E53935" />

      {/* Nose ring */}
      <circle cx="76" cy="68" r="2" fill="none" stroke="#FFD700" strokeWidth="1.2" />
      <circle cx="75" cy="69" r="1" fill="#FFD700" />

      {/* Eyes */}
      {isAngry ? <>
        {/* Skin-colored backdrop so hair doesn't make eye area look black */}
        <ellipse cx="72" cy="58" rx="8" ry="6" fill="url(#kr-ySkin)" />
        <ellipse cx="88" cy="58" rx="8" ry="6" fill="url(#kr-ySkin)" />
        {/* Narrowed angry eyes with white slivers */}
        <path d="M65,60 Q72,54 79,60" fill="white" stroke="#1A1A1A" strokeWidth="1.5" />
        <path d="M81,60 Q88,54 95,60" fill="white" stroke="#1A1A1A" strokeWidth="1.5" />
        <circle cx="72" cy="58" r="2.5" fill="#2C1810" />
        <circle cx="88" cy="58" r="2.5" fill="#2C1810" />
      </> : isMelting ? <>
        {/* Skin-colored backdrop so hair doesn't make eye area look black */}
        <ellipse cx="72" cy="58" rx="8" ry="6" fill="url(#kr-ySkin)" />
        <ellipse cx="88" cy="58" rx="8" ry="6" fill="url(#kr-ySkin)" />
        {/* Soft happy closed eyes */}
        <path d="M65,60 Q72,55 79,60" stroke="#1A1A1A" strokeWidth="2" fill="none" />
        <path d="M81,60 Q88,55 95,60" stroke="#1A1A1A" strokeWidth="2" fill="none" />
      </> : <>
        <ellipse cx="72" cy="58" rx="6" ry="7" fill="white" />
        <ellipse cx="88" cy="58" rx="6" ry="7" fill="white" />
        <circle cx="72" cy="59" r="4" fill="#2C1810" />
        <circle cx="88" cy="59" r="4" fill="#2C1810" />
        <circle cx="73" cy="57" r="1.5" fill="white" />
        <circle cx="89" cy="57" r="1.5" fill="white" />
        {/* Kajal / eyeliner */}
        <path d="M65,56 Q72,52 79,56" stroke="#1A1A1A" strokeWidth="1.2" fill="none" />
        <path d="M81,56 Q88,52 95,56" stroke="#1A1A1A" strokeWidth="1.2" fill="none" />
        <path d="M66,62 Q72,65 78,62" stroke="#1A1A1A" strokeWidth="0.8" fill="none" />
        <path d="M82,62 Q88,65 94,62" stroke="#1A1A1A" strokeWidth="0.8" fill="none" />
      </>}

      {/* Bindi */}
      <circle cx="80" cy="48" r="2.5" fill="#E53935" />

      {/* Eyebrows */}
      {isAngry ? <>
        <path d="M64,50 Q72,44 80,50" stroke="#1A1A1A" strokeWidth="2" fill="none" />
        <path d="M80,50 Q88,44 96,50" stroke="#1A1A1A" strokeWidth="2" fill="none" />
      </> : <>
        <path d="M64,52 Q72,48 80,52" stroke="#1A1A1A" strokeWidth="1.5" fill="none" />
        <path d="M80,52 Q88,48 96,52" stroke="#1A1A1A" strokeWidth="1.5" fill="none" />
      </>}

      {/* Nose */}
      <path d="M78,64 Q80,68 82,64" stroke="#8B5A3C" strokeWidth="1.5" fill="none" />

      {/* Mouth */}
      {isAngry ?
        <path d="M72,74 Q80,70 88,74" stroke="#8B3A2A" strokeWidth="2" fill="none" /> :
        isChasing ?
        <ellipse cx="80" cy="74" rx="5" ry="4" fill="#8B3A2A" /> :
        isMelting || isLoving ?
        <path d="M72,72 Q80,80 88,72" stroke="#C0392B" strokeWidth="1.5" fill="#C0392B" opacity="0.3" /> :
        <path d="M72,72 Q80,78 88,72" stroke="#8B5A3C" strokeWidth="1.5" fill="none" />
      }

      {/* Cheek blush */}
      {(isLoving || isMelting) && <>
        <circle cx="64" cy="68" r="5" fill="#FF8A80" opacity="0.25" />
        <circle cx="96" cy="68" r="5" fill="#FF8A80" opacity="0.25" />
      </>}
    </svg>
  );
};

// ============ BUTTER POT ============
export const ButterPot = ({ size = 80, broken = false, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
    <defs>
      <radialGradient id="kr-clay" cx="45%" cy="35%">
        <stop offset="0%" stopColor="#D4845A" />
        <stop offset="60%" stopColor="#B5654A" />
        <stop offset="100%" stopColor="#8B4513" />
      </radialGradient>
      <radialGradient id="kr-clayInner" cx="50%" cy="30%">
        <stop offset="0%" stopColor="#6D3A1F" />
        <stop offset="100%" stopColor="#4A2510" />
      </radialGradient>
      <radialGradient id="kr-butter" cx="45%" cy="40%">
        <stop offset="0%" stopColor="#FFF9C4" />
        <stop offset="50%" stopColor="#FFD54F" />
        <stop offset="100%" stopColor="#FFC107" />
      </radialGradient>
      <filter id="kr-potShadow"><feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.25" /></filter>
    </defs>

    {broken ? <>
      {/* Broken pot - left shard */}
      <path d="M15,85 Q10,60 18,42 Q22,35 30,32 L35,38 Q28,50 25,70 Q24,78 20,85Z" fill="url(#kr-clay)" filter="url(#kr-potShadow)" />
      <path d="M15,85 Q12,82 14,78" stroke="#A0522D" strokeWidth="1" fill="none" opacity="0.5" />
      {/* Broken pot - right shard */}
      <path d="M85,85 Q90,60 82,42 Q78,35 70,32 L65,38 Q72,50 75,70 Q76,78 80,85Z" fill="url(#kr-clay)" filter="url(#kr-potShadow)" />
      {/* Broken pot - bottom piece */}
      <path d="M25,85 Q30,92 50,94 Q70,92 75,85 Q65,80 50,78 Q35,80 25,85Z" fill="url(#kr-clay)" />
      {/* Crack lines */}
      <path d="M35,38 L40,55 L38,70" stroke="#6D3A1F" strokeWidth="1.5" fill="none" />
      <path d="M65,38 L60,55 L62,70" stroke="#6D3A1F" strokeWidth="1.5" fill="none" />
      {/* Spilled butter */}
      <ellipse cx="50" cy="80" rx="20" ry="6" fill="url(#kr-butter)" opacity="0.8" />
      <path d="M35,78 Q30,82 25,88" stroke="#FFD54F" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M65,78 Q72,84 78,88" stroke="#FFD54F" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.5" />
      <circle cx="22" cy="90" r="4" fill="#FFD54F" opacity="0.5" />
      <circle cx="80" cy="90" r="3" fill="#FFD54F" opacity="0.4" />
    </> : <>
      {/* Intact pot body */}
      <path d="M25,85 Q18,65 22,45 Q26,32 50,28 Q74,32 78,45 Q82,65 75,85 Q65,92 50,94 Q35,92 25,85Z" fill="url(#kr-clay)" filter="url(#kr-potShadow)" />
      {/* Pot highlight */}
      <ellipse cx="38" cy="55" rx="8" ry="15" fill="#D4965A" opacity="0.3" transform="rotate(-10, 38, 55)" />
      {/* Pot rim */}
      <ellipse cx="50" cy="30" rx="22" ry="6" fill="#A0522D" />
      <ellipse cx="50" cy="30" rx="20" ry="5" fill="#8B4513" />
      {/* Pot mouth opening */}
      <ellipse cx="50" cy="30" rx="16" ry="4" fill="url(#kr-clayInner)" />
      {/* Butter visible on top */}
      <ellipse cx="50" cy="30" rx="13" ry="3" fill="url(#kr-butter)" />
      <ellipse cx="48" cy="29" rx="5" ry="1.5" fill="#FFF9C4" opacity="0.5" />
      {/* Pot texture lines */}
      <path d="M30,50 Q50,54 70,50" stroke="#A0522D" strokeWidth="0.8" fill="none" opacity="0.3" />
      <path d="M28,62 Q50,66 72,62" stroke="#A0522D" strokeWidth="0.8" fill="none" opacity="0.3" />
      <path d="M30,74 Q50,78 70,74" stroke="#A0522D" strokeWidth="0.8" fill="none" opacity="0.3" />
    </>}
  </svg>
);

// ============ MORTAR ============
export const Mortar = ({ size = 70, className = '' }) => (
  <svg width={size} height={size * 1.1} viewBox="0 0 80 88" className={className}>
    <defs>
      <linearGradient id="kr-wood" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#A1887F" />
        <stop offset="30%" stopColor="#8D6E63" />
        <stop offset="70%" stopColor="#795548" />
        <stop offset="100%" stopColor="#6D4C41" />
      </linearGradient>
      <linearGradient id="kr-woodTop" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#8D6E63" />
        <stop offset="100%" stopColor="#6D4C41" />
      </linearGradient>
      <radialGradient id="kr-woodInner" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#5D4037" />
        <stop offset="100%" stopColor="#3E2723" />
      </radialGradient>
      <filter id="kr-mortarShadow"><feDropShadow dx="1" dy="2" stdDeviation="1.5" floodOpacity="0.25" /></filter>
    </defs>

    {/* Mortar body - wooden cylinder */}
    <path d="M15,80 Q12,50 16,25 Q20,18 40,15 Q60,18 64,25 Q68,50 65,80 Q55,86 40,88 Q25,86 15,80Z" fill="url(#kr-wood)" filter="url(#kr-mortarShadow)" />
    {/* Wood grain lines */}
    <path d="M22,30 Q22,55 20,78" stroke="#6D4C41" strokeWidth="0.8" fill="none" opacity="0.4" />
    <path d="M32,20 Q31,50 30,82" stroke="#6D4C41" strokeWidth="0.6" fill="none" opacity="0.3" />
    <path d="M50,18 Q50,50 52,84" stroke="#6D4C41" strokeWidth="0.6" fill="none" opacity="0.3" />
    <path d="M58,25 Q59,50 60,80" stroke="#6D4C41" strokeWidth="0.8" fill="none" opacity="0.4" />
    {/* Highlight */}
    <ellipse cx="30" cy="50" rx="5" ry="20" fill="#A1887F" opacity="0.25" />
    {/* Top rim */}
    <ellipse cx="40" cy="17" rx="24" ry="7" fill="url(#kr-woodTop)" />
    <ellipse cx="40" cy="17" rx="22" ry="6" fill="#795548" />
    {/* Inner hollow */}
    <ellipse cx="40" cy="17" rx="18" ry="4.5" fill="url(#kr-woodInner)" />
    {/* Rope detail around middle */}
    <path d="M16,50 Q28,54 40,52 Q52,50 64,54" stroke="#BCAAA4" strokeWidth="2.5" fill="none" />
    <path d="M16,50 Q28,54 40,52 Q52,50 64,54" stroke="#A1887F" strokeWidth="1" fill="none" opacity="0.5" />
    {/* Rope knot */}
    <circle cx="16" cy="50" r="3" fill="#BCAAA4" />
    <circle cx="16" cy="50" r="2" fill="#A1887F" />
    {/* Bottom ring */}
    <path d="M18,78 Q40,86 62,78" stroke="#5D4037" strokeWidth="1.5" fill="none" opacity="0.5" />
  </svg>
);

// ============ CHURNING ROD ============
export const ChurningRod = ({ size = 60, className = '' }) => (
  <svg width={size} height={size * 2} viewBox="0 0 50 100" className={className}>
    <defs>
      <linearGradient id="kr-rod" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#A1887F" />
        <stop offset="40%" stopColor="#8D6E63" />
        <stop offset="100%" stopColor="#6D4C41" />
      </linearGradient>
      <linearGradient id="kr-rope" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#D7CCC8" />
        <stop offset="50%" stopColor="#BCAAA4" />
        <stop offset="100%" stopColor="#A1887F" />
      </linearGradient>
      <filter id="kr-rodShadow"><feDropShadow dx="0.5" dy="1" stdDeviation="1" floodOpacity="0.2" /></filter>
    </defs>

    {/* Main rod */}
    <rect x="22" y="5" width="6" height="85" rx="3" fill="url(#kr-rod)" filter="url(#kr-rodShadow)" />
    {/* Rod wood grain */}
    <line x1="24" y1="8" x2="24" y2="88" stroke="#795548" strokeWidth="0.5" opacity="0.4" />
    <line x1="26" y1="8" x2="26" y2="88" stroke="#6D4C41" strokeWidth="0.4" opacity="0.3" />
    {/* Rod top knob */}
    <ellipse cx="25" cy="6" rx="5" ry="3" fill="#8D6E63" />
    <ellipse cx="25" cy="6" rx="4" ry="2" fill="#A1887F" />
    {/* Rod bottom */}
    <ellipse cx="25" cy="90" rx="4" ry="2" fill="#6D4C41" />
    {/* Cross handle at top */}
    <rect x="10" y="10" width="30" height="4" rx="2" fill="url(#kr-rod)" />
    <ellipse cx="10" cy="12" rx="2.5" ry="2.5" fill="#8D6E63" />
    <ellipse cx="40" cy="12" rx="2.5" ry="2.5" fill="#8D6E63" />
    {/* Rope wound around rod */}
    {[30, 38, 46, 54, 62, 70].map((y, i) => (
      <path key={i} d={`M22,${y} Q18,${y + 2} 22,${y + 4} Q28,${y + 2} 22,${y}`} stroke="url(#kr-rope)" strokeWidth="2" fill="none" />
    ))}
    {/* Rope hanging ends */}
    <path d="M18,32 Q12,36 10,42" stroke="#BCAAA4" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M18,70 Q12,74 8,80" stroke="#BCAAA4" strokeWidth="2" strokeLinecap="round" fill="none" />
    {/* Rod highlight */}
    <line x1="23" y1="15" x2="23" y2="85" stroke="#BCAAA4" strokeWidth="0.8" opacity="0.3" />
  </svg>
);

// ============ CHHOTA BHEEM CHARACTERS ============

// ============ BHEEM ============
export const Bheem = ({ size = 120, mood = 'happy', className = '' }) => {
  const w = size;
  const h = size * 1.4;
  return (
    <svg width={w} height={h} viewBox="0 0 120 168" className={className}>
      <defs>
        <radialGradient id="cb-bheemSkin" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#D2956A" />
          <stop offset="100%" stopColor="#B07040" />
        </radialGradient>
        <radialGradient id="cb-bheemSkinDark" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#C08050" />
          <stop offset="100%" stopColor="#9A6030" />
        </radialGradient>
        <linearGradient id="cb-bheemDhoti" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD54F" />
          <stop offset="50%" stopColor="#FFB300" />
          <stop offset="100%" stopColor="#FF8F00" />
        </linearGradient>
        <linearGradient id="cb-bheemCrown" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A1887F" />
          <stop offset="50%" stopColor="#8D6E63" />
          <stop offset="100%" stopColor="#6D4C41" />
        </linearGradient>
        <filter id="cb-bheemShadow"><feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.2" /></filter>
      </defs>
      {/* Legs */}
      <rect x="38" y="130" width="14" height="24" rx="5" fill="url(#cb-bheemSkin)" />
      <rect x="68" y="130" width="14" height="24" rx="5" fill="url(#cb-bheemSkin)" />
      <ellipse cx="45" cy="156" rx="10" ry="5" fill="#8D6E63" />
      <ellipse cx="75" cy="156" rx="10" ry="5" fill="#8D6E63" />
      {/* Dhoti */}
      <path d="M30,100 Q28,128 32,150 L88,150 Q92,128 90,100 Z" fill="url(#cb-bheemDhoti)" filter="url(#cb-bheemShadow)" />
      <path d="M32,145 L88,145" stroke="#E65100" strokeWidth="2" opacity="0.6" />
      <path d="M55,100 Q56,130 58,150" stroke="#FFA000" strokeWidth="1" opacity="0.3" />
      {/* Torso */}
      <ellipse cx="60" cy="92" rx="28" ry="18" fill="url(#cb-bheemSkin)" />
      {/* Arms */}
      {mood === 'strong' ? <>
        {/* Flexing arms */}
        <path d="M32,88 Q20,78 22,68 Q24,62 30,68 Q28,74 32,82" fill="url(#cb-bheemSkin)" />
        <ellipse cx="24" cy="66" rx="8" ry="6" fill="url(#cb-bheemSkinDark)" />
        <path d="M88,88 Q100,78 98,68 Q96,62 90,68 Q92,74 88,82" fill="url(#cb-bheemSkin)" />
        <ellipse cx="96" cy="66" rx="8" ry="6" fill="url(#cb-bheemSkinDark)" />
      </> : mood === 'heroic' ? <>
        {/* Right fist up */}
        <rect x="22" y="82" width="12" height="28" rx="5" fill="url(#cb-bheemSkin)" />
        <circle cx="28" cy="114" r="6" fill="url(#cb-bheemSkin)" />
        <path d="M88,82 Q100,68 96,52" fill="url(#cb-bheemSkin)" />
        <circle cx="96" cy="50" r="7" fill="url(#cb-bheemSkin)" />
      </> : <>
        <rect x="22" y="82" width="12" height="28" rx="5" fill="url(#cb-bheemSkin)" />
        <circle cx="28" cy="114" r="6" fill="url(#cb-bheemSkin)" />
        <rect x="86" y="82" width="12" height="28" rx="5" fill="url(#cb-bheemSkin)" />
        <circle cx="92" cy="114" r="6" fill="url(#cb-bheemSkin)" />
      </>}
      {/* Neck */}
      <rect x="52" y="62" width="16" height="12" rx="4" fill="url(#cb-bheemSkin)" />
      {/* Head - big round */}
      <circle cx="60" cy="38" r="28" fill="url(#cb-bheemSkin)" />
      {/* Hair - black spiky */}
      <path d="M32,34 Q32,14 60,8 Q88,14 88,34" fill="#1A1A1A" />
      <path d="M38,18 L34,6 L42,14" fill="#1A1A1A" />
      <path d="M50,12 L48,2 L56,10" fill="#1A1A1A" />
      <path d="M62,10 L64,0 L68,10" fill="#1A1A1A" />
      <path d="M74,12 L78,4 L80,14" fill="#1A1A1A" />
      {/* Crown/tiara headband */}
      <path d="M34,30 Q34,24 60,20 Q86,24 86,30" fill="url(#cb-bheemCrown)" />
      <path d="M34,30 L86,30" stroke="#A1887F" strokeWidth="3" />
      <circle cx="60" cy="28" r="3" fill="#FFD700" />
      <circle cx="48" cy="29" r="2" fill="#FFD700" opacity="0.7" />
      <circle cx="72" cy="29" r="2" fill="#FFD700" opacity="0.7" />
      {/* Eyes */}
      {mood === 'thinking' ? <>
        <ellipse cx="48" cy="38" rx="7" ry="5" fill="white" />
        <ellipse cx="72" cy="38" rx="7" ry="5" fill="white" />
        <circle cx="50" cy="37" r="3.5" fill="#5D4037" />
        <circle cx="74" cy="37" r="3.5" fill="#5D4037" />
        <circle cx="51" cy="36" r="1.2" fill="white" />
        <circle cx="75" cy="36" r="1.2" fill="white" />
      </> : mood === 'eating' ? <>
        {/* Happy squinting eyes */}
        <ellipse cx="48" cy="38" rx="7" ry="4" fill="white" />
        <ellipse cx="72" cy="38" rx="7" ry="4" fill="white" />
        <circle cx="48" cy="38" r="3" fill="#5D4037" />
        <circle cx="72" cy="38" r="3" fill="#5D4037" />
        <circle cx="49" cy="37" r="1" fill="white" />
        <circle cx="73" cy="37" r="1" fill="white" />
      </> : mood === 'determined' ? <>
        <ellipse cx="48" cy="38" rx="7" ry="6" fill="white" />
        <ellipse cx="72" cy="38" rx="7" ry="6" fill="white" />
        <circle cx="48" cy="38" r="4" fill="#5D4037" />
        <circle cx="72" cy="38" r="4" fill="#5D4037" />
        <circle cx="49" cy="36" r="1.5" fill="white" />
        <circle cx="73" cy="36" r="1.5" fill="white" />
        {/* Determined eyebrows */}
        <path d="M40,32 Q48,28 56,32" stroke="#1A1A1A" strokeWidth="2.5" fill="none" />
        <path d="M64,32 Q72,28 80,32" stroke="#1A1A1A" strokeWidth="2.5" fill="none" />
      </> : <>
        {/* Default big expressive eyes */}
        <ellipse cx="48" cy="38" rx="8" ry="8" fill="white">
          <animate attributeName="ry" values="8;1;8" dur="4.5s" begin="2.2s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
        </ellipse>
        <ellipse cx="72" cy="38" rx="8" ry="8" fill="white">
          <animate attributeName="ry" values="8;1;8" dur="4.5s" begin="2.2s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
        </ellipse>
        <circle cx="48" cy="39" r="4.5" fill="#5D4037">
          <animate attributeName="r" values="4.5;0.4;4.5" dur="4.5s" begin="2.2s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
        </circle>
        <circle cx="72" cy="39" r="4.5" fill="#5D4037">
          <animate attributeName="r" values="4.5;0.4;4.5" dur="4.5s" begin="2.2s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
        </circle>
        <circle cx="49" cy="37" r="1.8" fill="white">
          <animate attributeName="r" values="1.8;0.2;1.8" dur="4.5s" begin="2.2s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
        </circle>
        <circle cx="73" cy="37" r="1.8" fill="white">
          <animate attributeName="r" values="1.8;0.2;1.8" dur="4.5s" begin="2.2s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
        </circle>
      </>}
      {/* Nose */}
      <path d="M60,42 L58,48 Q60,50 62,48 Z" fill="#9A6030" />
      {/* Mouth */}
      {mood === 'happy' ?
        <path d="M48,54 Q60,64 72,54" stroke="#6D4C41" strokeWidth="2" fill="none" /> :
        mood === 'strong' || mood === 'heroic' ?
        <path d="M50,54 Q60,60 70,54" stroke="#6D4C41" strokeWidth="2" fill="none" /> :
        mood === 'eating' ?
        <ellipse cx="60" cy="56" rx="8" ry="6" fill="#5D3A1A" /> :
        mood === 'determined' ?
        <path d="M52,56 L68,56" stroke="#6D4C41" strokeWidth="2.5" /> :
        mood === 'thinking' ?
        <path d="M54,56 Q60,54 66,56" stroke="#6D4C41" strokeWidth="1.5" fill="none" /> :
        <path d="M50,54 Q60,60 70,54" stroke="#6D4C41" strokeWidth="2" fill="none" />
      }
      {/* Blush */}
      {['happy', 'eating'].includes(mood) && <>
        <circle cx="38" cy="48" r="5" fill="#FF9B9B" opacity="0.3" />
        <circle cx="82" cy="48" r="5" fill="#FF9B9B" opacity="0.3" />
      </>}
      {/* Thinking bubble */}
      {mood === 'thinking' && <>
        <circle cx="92" cy="20" r="3" fill="#E0E0E0" opacity="0.5" />
        <circle cx="98" cy="12" r="4" fill="#E0E0E0" opacity="0.4" />
        <circle cx="106" cy="5" r="6" fill="#E0E0E0" opacity="0.3" />
      </>}
    </svg>
  );
};

// ============ CHUTKI ============
export const Chutki = ({ size = 100, mood = 'happy', className = '' }) => {
  const w = size;
  const h = size * 1.5;
  return (
    <svg width={w} height={h} viewBox="0 0 100 150" className={className}>
      <defs>
        <radialGradient id="cb-chutkiSkin" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#D2956A" />
          <stop offset="100%" stopColor="#B87848" />
        </radialGradient>
        <linearGradient id="cb-chutkiOutfit" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF7043" />
          <stop offset="50%" stopColor="#F4511E" />
          <stop offset="100%" stopColor="#E64A19" />
        </linearGradient>
        <linearGradient id="cb-chutkiDupatta" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFAB91" />
          <stop offset="100%" stopColor="#FF8A65" />
        </linearGradient>
        <filter id="cb-chutkiShadow"><feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.2" /></filter>
      </defs>
      {/* Legs */}
      <rect x="32" y="118" width="10" height="20" rx="4" fill="url(#cb-chutkiSkin)" />
      <rect x="58" y="118" width="10" height="20" rx="4" fill="url(#cb-chutkiSkin)" />
      <ellipse cx="37" cy="140" rx="8" ry="4" fill="#E64A19" />
      <ellipse cx="63" cy="140" rx="8" ry="4" fill="#E64A19" />
      {/* Salwar outfit */}
      <path d="M25,82 Q22,110 26,135 L74,135 Q78,110 75,82 Z" fill="url(#cb-chutkiOutfit)" filter="url(#cb-chutkiShadow)" />
      <path d="M26,130 L74,130" stroke="#FFD700" strokeWidth="2" />
      <path d="M27,126 L73,126" stroke="#FFD700" strokeWidth="1" opacity="0.5" />
      {/* Dupatta */}
      <path d="M28,78 Q18,68 14,55 Q12,48 18,52 Q24,60 28,72" fill="url(#cb-chutkiDupatta)" opacity="0.8" />
      {/* Torso */}
      <ellipse cx="50" cy="76" rx="22" ry="14" fill="url(#cb-chutkiOutfit)" />
      {/* Arms */}
      <rect x="18" y="72" width="10" height="24" rx="4" fill="url(#cb-chutkiSkin)" />
      <rect x="72" y="72" width="10" height="24" rx="4" fill="url(#cb-chutkiSkin)" />
      <circle cx="23" cy="99" r="5" fill="url(#cb-chutkiSkin)" />
      <circle cx="77" cy="99" r="5" fill="url(#cb-chutkiSkin)" />
      {/* Bangles */}
      <circle cx="23" cy="94" r="4" fill="none" stroke="#FFD700" strokeWidth="1.5" />
      <circle cx="77" cy="94" r="4" fill="none" stroke="#FFD700" strokeWidth="1.5" />
      {/* Neck */}
      <rect x="43" y="52" width="14" height="10" rx="4" fill="url(#cb-chutkiSkin)" />
      {/* Head */}
      <circle cx="50" cy="32" r="24" fill="url(#cb-chutkiSkin)" />
      {/* Hair - black with pigtails */}
      <path d="M26,28 Q26,10 50,6 Q74,10 74,28" fill="#1A1A1A" />
      {/* Hair parting */}
      <line x1="50" y1="6" x2="50" y2="16" stroke="#333" strokeWidth="1" />
      {/* Pigtails */}
      <path d="M26,28 Q16,32 12,42 Q10,50 14,48 Q18,44 20,38 Q22,32 26,28" fill="#1A1A1A" />
      <path d="M74,28 Q84,32 88,42 Q90,50 86,48 Q82,44 80,38 Q78,32 74,28" fill="#1A1A1A" />
      {/* Red ribbons on pigtails */}
      <circle cx="13" cy="44" r="4" fill="#E53935" />
      <path d="M10,42 L6,38 M10,46 L6,50" stroke="#E53935" strokeWidth="2" />
      <circle cx="87" cy="44" r="4" fill="#E53935" />
      <path d="M90,42 L94,38 M90,46 L94,50" stroke="#E53935" strokeWidth="2" />
      {/* Bindi */}
      <circle cx="50" cy="20" r="2.5" fill="#E53935" />
      {/* Eyes */}
      {mood === 'surprised' ? <>
        <ellipse cx="40" cy="32" rx="7" ry="8" fill="white" />
        <ellipse cx="60" cy="32" rx="7" ry="8" fill="white" />
        <circle cx="40" cy="33" r="4" fill="#5D4037" />
        <circle cx="60" cy="33" r="4" fill="#5D4037" />
        <circle cx="41" cy="31" r="1.5" fill="white" />
        <circle cx="61" cy="31" r="1.5" fill="white" />
      </> : mood === 'worried' ? <>
        <ellipse cx="40" cy="32" rx="6" ry="6" fill="white" />
        <ellipse cx="60" cy="32" rx="6" ry="6" fill="white" />
        <circle cx="40" cy="33" r="3.5" fill="#5D4037" />
        <circle cx="60" cy="33" r="3.5" fill="#5D4037" />
        <circle cx="41" cy="31" r="1.2" fill="white" />
        <circle cx="61" cy="31" r="1.2" fill="white" />
        <path d="M33,26 Q40,24 47,27" stroke="#1A1A1A" strokeWidth="1.5" fill="none" />
        <path d="M53,27 Q60,24 67,26" stroke="#1A1A1A" strokeWidth="1.5" fill="none" />
      </> : mood === 'determined' ? <>
        <ellipse cx="40" cy="32" rx="6" ry="6" fill="white" />
        <ellipse cx="60" cy="32" rx="6" ry="6" fill="white" />
        <circle cx="40" cy="32" r="3.5" fill="#5D4037" />
        <circle cx="60" cy="32" r="3.5" fill="#5D4037" />
        <circle cx="41" cy="30" r="1.2" fill="white" />
        <circle cx="61" cy="30" r="1.2" fill="white" />
        <path d="M33,26 Q40,22 47,26" stroke="#1A1A1A" strokeWidth="2" fill="none" />
        <path d="M53,26 Q60,22 67,26" stroke="#1A1A1A" strokeWidth="2" fill="none" />
      </> : <>
        <ellipse cx="40" cy="32" rx="7" ry="7" fill="white" />
        <ellipse cx="60" cy="32" rx="7" ry="7" fill="white" />
        <circle cx="40" cy="33" r="4" fill="#5D4037" />
        <circle cx="60" cy="33" r="4" fill="#5D4037" />
        <circle cx="41" cy="31" r="1.5" fill="white" />
        <circle cx="61" cy="31" r="1.5" fill="white" />
      </>}
      {/* Eyelashes */}
      <path d="M33,28 Q36,26 39,28" stroke="#1A1A1A" strokeWidth="0.8" fill="none" />
      <path d="M61,28 Q64,26 67,28" stroke="#1A1A1A" strokeWidth="0.8" fill="none" />
      {/* Nose */}
      <path d="M50,36 L48,40 Q50,42 52,40 Z" fill="#9A6030" />
      {/* Mouth */}
      {mood === 'happy' ?
        <path d="M42,46 Q50,54 58,46" stroke="#6D4C41" strokeWidth="1.5" fill="none" /> :
        mood === 'surprised' ?
        <ellipse cx="50" cy="48" rx="5" ry="6" fill="#5D3A1A" /> :
        mood === 'worried' ?
        <path d="M42,50 Q50,46 58,50" stroke="#6D4C41" strokeWidth="1.5" fill="none" /> :
        <path d="M44,48 Q50,52 56,48" stroke="#6D4C41" strokeWidth="1.5" fill="none" />
      }
      {/* Blush */}
      {mood === 'happy' && <>
        <circle cx="32" cy="40" r="4" fill="#FF9B9B" opacity="0.3" />
        <circle cx="68" cy="40" r="4" fill="#FF9B9B" opacity="0.3" />
      </>}
    </svg>
  );
};

// ============ RAJU ============
export const Raju = ({ size = 90, mood = 'happy', className = '' }) => {
  const w = size;
  const h = size * 1.4;
  return (
    <svg width={w} height={h} viewBox="0 0 90 126" className={className}>
      <defs>
        <radialGradient id="cb-rajuSkin" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#D2956A" />
          <stop offset="100%" stopColor="#B87848" />
        </radialGradient>
        <linearGradient id="cb-rajuVest" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#66BB6A" />
          <stop offset="100%" stopColor="#43A047" />
        </linearGradient>
        <linearGradient id="cb-rajuShorts" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4CAF50" />
          <stop offset="100%" stopColor="#2E7D32" />
        </linearGradient>
        <filter id="cb-rajuShadow"><feDropShadow dx="1" dy="1.5" stdDeviation="1.5" floodOpacity="0.2" /></filter>
      </defs>
      {/* Legs */}
      <rect x="28" y="98" width="10" height="18" rx="4" fill="url(#cb-rajuSkin)" />
      <rect x="52" y="98" width="10" height="18" rx="4" fill="url(#cb-rajuSkin)" />
      <ellipse cx="33" cy="118" rx="7" ry="4" fill="#6D4C41" />
      <ellipse cx="57" cy="118" rx="7" ry="4" fill="#6D4C41" />
      {/* Shorts */}
      <path d="M22,76 Q20,92 24,105 L66,105 Q70,92 68,76 Z" fill="url(#cb-rajuShorts)" filter="url(#cb-rajuShadow)" />
      {/* Torso / Vest */}
      <ellipse cx="45" cy="68" rx="20" ry="14" fill="url(#cb-rajuVest)" />
      <path d="M35,56 Q45,52 55,56 Q58,72 45,76 Q32,72 35,56" fill="url(#cb-rajuVest)" />
      {/* Arms */}
      <rect x="16" y="60" width="9" height="22" rx="4" fill="url(#cb-rajuSkin)" />
      <rect x="65" y="60" width="9" height="22" rx="4" fill="url(#cb-rajuSkin)" />
      <circle cx="20" cy="85" r="5" fill="url(#cb-rajuSkin)" />
      <circle cx="70" cy="85" r="5" fill="url(#cb-rajuSkin)" />
      {/* Neck */}
      <rect x="39" y="44" width="12" height="10" rx="3" fill="url(#cb-rajuSkin)" />
      {/* Head - big round */}
      <circle cx="45" cy="26" r="22" fill="url(#cb-rajuSkin)" />
      {/* Bald head with small tuft */}
      <path d="M45,4 Q47,0 49,4 Q48,6 46,6 Z" fill="#1A1A1A" />
      <circle cx="47" cy="3" r="3" fill="#1A1A1A" />
      {/* Eyes */}
      {mood === 'scared' ? <>
        <ellipse cx="36" cy="26" rx="7" ry="8" fill="white" />
        <ellipse cx="54" cy="26" rx="7" ry="8" fill="white" />
        <circle cx="36" cy="27" r="4" fill="#2C1810" />
        <circle cx="54" cy="27" r="4" fill="#2C1810" />
        <circle cx="37" cy="25" r="1.5" fill="white" />
        <circle cx="55" cy="25" r="1.5" fill="white" />
      </> : mood === 'excited' ? <>
        <ellipse cx="36" cy="26" rx="7" ry="7" fill="white" />
        <ellipse cx="54" cy="26" rx="7" ry="7" fill="white" />
        <circle cx="36" cy="26" r="4" fill="#2C1810" />
        <circle cx="54" cy="26" r="4" fill="#2C1810" />
        <circle cx="37" cy="24" r="1.5" fill="white" />
        <circle cx="55" cy="24" r="1.5" fill="white" />
      </> : mood === 'brave' ? <>
        <ellipse cx="36" cy="26" rx="6" ry="6" fill="white" />
        <ellipse cx="54" cy="26" rx="6" ry="6" fill="white" />
        <circle cx="36" cy="26" r="3.5" fill="#2C1810" />
        <circle cx="54" cy="26" r="3.5" fill="#2C1810" />
        <circle cx="37" cy="24" r="1.2" fill="white" />
        <circle cx="55" cy="24" r="1.2" fill="white" />
        <path d="M29,20 Q36,17 43,21" stroke="#1A1A1A" strokeWidth="2" fill="none" />
        <path d="M47,21 Q54,17 61,20" stroke="#1A1A1A" strokeWidth="2" fill="none" />
      </> : <>
        <ellipse cx="36" cy="26" rx="7" ry="7" fill="white" />
        <ellipse cx="54" cy="26" rx="7" ry="7" fill="white" />
        <circle cx="36" cy="27" r="4" fill="#2C1810" />
        <circle cx="54" cy="27" r="4" fill="#2C1810" />
        <circle cx="37" cy="25" r="1.5" fill="white" />
        <circle cx="55" cy="25" r="1.5" fill="white" />
      </>}
      {/* Nose */}
      <ellipse cx="45" cy="32" rx="3" ry="2.5" fill="#9A6030" />
      {/* Mouth */}
      {mood === 'happy' || mood === 'excited' ?
        <path d="M38,38 Q45,46 52,38" stroke="#6D4C41" strokeWidth="1.5" fill="none" /> :
        mood === 'scared' ?
        <ellipse cx="45" cy="40" rx="5" ry="6" fill="#5D3A1A" /> :
        mood === 'brave' ?
        <path d="M40,40 Q45,43 50,40" stroke="#6D4C41" strokeWidth="1.5" fill="none" /> :
        <path d="M40,38 Q45,42 50,38" stroke="#6D4C41" strokeWidth="1.5" fill="none" />
      }
      {/* Blush */}
      {['happy', 'excited'].includes(mood) && <>
        <circle cx="28" cy="32" r="4" fill="#FF9B9B" opacity="0.3" />
        <circle cx="62" cy="32" r="4" fill="#FF9B9B" opacity="0.3" />
      </>}
      {/* Sweat for scared */}
      {mood === 'scared' && <>
        <ellipse cx="26" cy="18" rx="2" ry="3" fill="#64B5F6" opacity="0.5" />
      </>}
    </svg>
  );
};

// ============ JAGGU (Monkey) ============
export const Jaggu = ({ size = 80, mood = 'happy', className = '' }) => {
  const w = size;
  const h = size * 1.3;
  return (
    <svg width={w} height={h} viewBox="0 0 80 104" className={className}>
      <defs>
        <radialGradient id="cb-jagguFur" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#A1887F" />
          <stop offset="100%" stopColor="#795548" />
        </radialGradient>
        <radialGradient id="cb-jagguFace" cx="50%" cy="45%">
          <stop offset="0%" stopColor="#FFCC80" />
          <stop offset="100%" stopColor="#E8A850" />
        </radialGradient>
        <radialGradient id="cb-jagguBelly" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#D7CCC8" />
          <stop offset="100%" stopColor="#BCAAA4" />
        </radialGradient>
        <filter id="cb-jagguShadow"><feDropShadow dx="0.5" dy="1" stdDeviation="1.5" floodOpacity="0.2" /></filter>
      </defs>
      {/* Tail - long curled */}
      <path d="M62,65 Q78,55 80,40 Q82,30 76,35 Q72,45 68,55 Q65,62 62,65" fill="url(#cb-jagguFur)" />
      <path d="M80,40 Q82,34 78,30 Q76,32 78,38" fill="#795548" />
      {/* Body */}
      <ellipse cx="40" cy="62" rx="18" ry="16" fill="url(#cb-jagguFur)" filter="url(#cb-jagguShadow)" />
      <ellipse cx="40" cy="66" rx="12" ry="10" fill="url(#cb-jagguBelly)" opacity="0.5" />
      {/* Legs */}
      <rect x="26" y="74" width="8" height="16" rx="3" fill="#795548" />
      <rect x="46" y="74" width="8" height="16" rx="3" fill="#795548" />
      <ellipse cx="30" cy="92" rx="6" ry="3" fill="#5D4037" />
      <ellipse cx="50" cy="92" rx="6" ry="3" fill="#5D4037" />
      {/* Arms */}
      <rect x="14" y="56" width="8" height="18" rx="3" fill="#795548" />
      <rect x="58" y="56" width="8" height="18" rx="3" fill="#795548" />
      <circle cx="18" cy="76" r="4" fill="#795548" />
      <circle cx="62" cy="76" r="4" fill="#795548" />
      {/* Neck */}
      <rect x="35" y="38" width="10" height="8" rx="3" fill="url(#cb-jagguFur)" />
      {/* Head */}
      <circle cx="40" cy="24" r="18" fill="url(#cb-jagguFur)" />
      {/* Face area - lighter */}
      <ellipse cx="40" cy="28" rx="13" ry="11" fill="url(#cb-jagguFace)" />
      {/* Ears */}
      <circle cx="22" cy="18" r="6" fill="#795548" />
      <circle cx="58" cy="18" r="6" fill="#795548" />
      <circle cx="22" cy="18" r="4" fill="url(#cb-jagguFace)" />
      <circle cx="58" cy="18" r="4" fill="url(#cb-jagguFace)" />
      {/* Red cap */}
      <path d="M26,14 Q26,4 40,2 Q54,4 54,14" fill="#E53935" />
      <path d="M24,16 L56,16" stroke="#C62828" strokeWidth="2.5" />
      <circle cx="40" cy="3" r="3" fill="#C62828" />
      {/* Eyes */}
      {mood === 'scared' ? <>
        <ellipse cx="34" cy="24" rx="5" ry="6" fill="white" />
        <ellipse cx="46" cy="24" rx="5" ry="6" fill="white" />
        <circle cx="34" cy="25" r="3" fill="#2C1810" />
        <circle cx="46" cy="25" r="3" fill="#2C1810" />
        <circle cx="35" cy="23" r="1" fill="white" />
        <circle cx="47" cy="23" r="1" fill="white" />
      </> : mood === 'playful' ? <>
        <ellipse cx="34" cy="24" rx="5" ry="4" fill="white" />
        <ellipse cx="46" cy="24" rx="5" ry="4" fill="white" />
        <circle cx="34" cy="24" r="3" fill="#2C1810" />
        <circle cx="46" cy="24" r="3" fill="#2C1810" />
        <circle cx="35" cy="23" r="1" fill="white" />
        <circle cx="47" cy="23" r="1" fill="white" />
      </> : <>
        <ellipse cx="34" cy="24" rx="5" ry="5" fill="white" />
        <ellipse cx="46" cy="24" rx="5" ry="5" fill="white" />
        <circle cx="34" cy="24" r="3" fill="#2C1810" />
        <circle cx="46" cy="24" r="3" fill="#2C1810" />
        <circle cx="35" cy="22" r="1.2" fill="white" />
        <circle cx="47" cy="22" r="1.2" fill="white" />
      </>}
      {/* Nose */}
      <ellipse cx="40" cy="30" rx="3" ry="2" fill="#8D6E63" />
      {/* Mouth */}
      {mood === 'happy' || mood === 'excited' ?
        <path d="M34,34 Q40,40 46,34" stroke="#6D4C41" strokeWidth="1.5" fill="none" /> :
        mood === 'scared' ?
        <ellipse cx="40" cy="36" rx="4" ry="5" fill="#5D3A1A" /> :
        mood === 'playful' ?
        <path d="M35,34 Q40,38 45,34" stroke="#6D4C41" strokeWidth="1.5" fill="none" /> :
        <path d="M36,34 Q40,37 44,34" stroke="#6D4C41" strokeWidth="1.5" fill="none" />
      }
      {/* Blush */}
      {['happy', 'playful', 'excited'].includes(mood) && <>
        <circle cx="28" cy="30" r="3" fill="#FF9B9B" opacity="0.3" />
        <circle cx="52" cy="30" r="3" fill="#FF9B9B" opacity="0.3" />
      </>}
    </svg>
  );
};

// ============ KALIA ============
export const Kalia = ({ size = 110, mood = 'neutral', className = '' }) => {
  const w = size;
  const h = size * 1.45;
  return (
    <svg width={w} height={h} viewBox="0 0 110 160" className={className}>
      <defs>
        <radialGradient id="cb-kaliaSkin" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#C08050" />
          <stop offset="100%" stopColor="#9A6030" />
        </radialGradient>
        <linearGradient id="cb-kaliaOutfit" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7B1FA2" />
          <stop offset="100%" stopColor="#4A148C" />
        </linearGradient>
        <filter id="cb-kaliaShadow"><feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.2" /></filter>
      </defs>
      {/* Legs */}
      <rect x="34" y="126" width="13" height="22" rx="5" fill="url(#cb-kaliaSkin)" />
      <rect x="63" y="126" width="13" height="22" rx="5" fill="url(#cb-kaliaSkin)" />
      <ellipse cx="40" cy="150" rx="9" ry="5" fill="#4A148C" />
      <ellipse cx="70" cy="150" rx="9" ry="5" fill="#4A148C" />
      {/* Outfit */}
      <path d="M26,90 Q23,118 28,145 L82,145 Q87,118 84,90 Z" fill="url(#cb-kaliaOutfit)" filter="url(#cb-kaliaShadow)" />
      <path d="M28,140 L82,140" stroke="#CE93D8" strokeWidth="1.5" opacity="0.5" />
      {/* Torso - slightly chubby */}
      <ellipse cx="55" cy="84" rx="26" ry="18" fill="url(#cb-kaliaOutfit)" />
      {/* Arms */}
      <rect x="18" y="78" width="12" height="28" rx="5" fill="url(#cb-kaliaSkin)" />
      <rect x="80" y="78" width="12" height="28" rx="5" fill="url(#cb-kaliaSkin)" />
      <circle cx="24" cy="110" r="6" fill="url(#cb-kaliaSkin)" />
      <circle cx="86" cy="110" r="6" fill="url(#cb-kaliaSkin)" />
      {/* Neck */}
      <rect x="47" y="56" width="16" height="12" rx="4" fill="url(#cb-kaliaSkin)" />
      {/* Head - slightly bigger/rounder, chubby */}
      <circle cx="55" cy="34" r="26" fill="url(#cb-kaliaSkin)" />
      {/* Double chin hint */}
      <ellipse cx="55" cy="56" rx="14" ry="4" fill="url(#cb-kaliaSkin)" />
      {/* Hair */}
      <path d="M29,30 Q29,12 55,6 Q81,12 81,30" fill="#1A1A1A" />
      <path d="M32,28 Q34,20 42,16" fill="#1A1A1A" />
      <path d="M78,28 Q76,20 68,16" fill="#1A1A1A" />
      {/* Eyes */}
      {mood === 'angry' ? <>
        <ellipse cx="44" cy="34" rx="6" ry="5" fill="white" />
        <ellipse cx="66" cy="34" rx="6" ry="5" fill="white" />
        <circle cx="44" cy="35" r="3.5" fill="#2C1810" />
        <circle cx="66" cy="35" r="3.5" fill="#2C1810" />
        <circle cx="45" cy="33" r="1.2" fill="white" />
        <circle cx="67" cy="33" r="1.2" fill="white" />
        {/* Angry eyebrows */}
        <path d="M36,26 Q44,22 52,28" stroke="#1A1A1A" strokeWidth="3" fill="none" />
        <path d="M58,28 Q66,22 74,26" stroke="#1A1A1A" strokeWidth="3" fill="none" />
      </> : mood === 'mischievous' ? <>
        <ellipse cx="44" cy="34" rx="6" ry="5" fill="white" />
        <ellipse cx="66" cy="34" rx="6" ry="5" fill="white" />
        <circle cx="46" cy="34" r="3.5" fill="#2C1810" />
        <circle cx="68" cy="34" r="3.5" fill="#2C1810" />
        <circle cx="47" cy="32" r="1.2" fill="white" />
        <circle cx="69" cy="32" r="1.2" fill="white" />
        {/* Scheming eyebrows */}
        <path d="M36,28 Q44,26 52,30" stroke="#1A1A1A" strokeWidth="2" fill="none" />
        <path d="M58,30 Q66,26 74,28" stroke="#1A1A1A" strokeWidth="2" fill="none" />
      </> : mood === 'scared' ? <>
        <ellipse cx="44" cy="34" rx="7" ry="8" fill="white" />
        <ellipse cx="66" cy="34" rx="7" ry="8" fill="white" />
        <circle cx="44" cy="35" r="4" fill="#2C1810" />
        <circle cx="66" cy="35" r="4" fill="#2C1810" />
        <circle cx="45" cy="33" r="1.5" fill="white" />
        <circle cx="67" cy="33" r="1.5" fill="white" />
      </> : mood === 'sorry' ? <>
        {/* Sad droopy eyes */}
        <ellipse cx="44" cy="34" rx="6" ry="5" fill="white" />
        <ellipse cx="66" cy="34" rx="6" ry="5" fill="white" />
        <circle cx="44" cy="35" r="3" fill="#2C1810" />
        <circle cx="66" cy="35" r="3" fill="#2C1810" />
        <circle cx="45" cy="33" r="1" fill="white" />
        <circle cx="67" cy="33" r="1" fill="white" />
        <path d="M37,28 Q44,30 51,28" stroke="#1A1A1A" strokeWidth="1.5" fill="none" />
        <path d="M59,28 Q66,30 73,28" stroke="#1A1A1A" strokeWidth="1.5" fill="none" />
      </> : <>
        <ellipse cx="44" cy="34" rx="6" ry="6" fill="white" />
        <ellipse cx="66" cy="34" rx="6" ry="6" fill="white" />
        <circle cx="44" cy="35" r="3.5" fill="#2C1810" />
        <circle cx="66" cy="35" r="3.5" fill="#2C1810" />
        <circle cx="45" cy="33" r="1.2" fill="white" />
        <circle cx="67" cy="33" r="1.2" fill="white" />
      </>}
      {/* Nose - bigger */}
      <path d="M55,38 L52,44 Q55,47 58,44 Z" fill="#7A5030" />
      {/* Mouth */}
      {mood === 'angry' ?
        <path d="M45,50 Q55,46 65,50" stroke="#5D3A1A" strokeWidth="2.5" fill="none" /> :
        mood === 'mischievous' ?
        <path d="M44,50 Q55,56 66,50" stroke="#5D3A1A" strokeWidth="2" fill="none" /> :
        mood === 'scared' ?
        <ellipse cx="55" cy="52" rx="6" ry="7" fill="#5D3A1A" /> :
        mood === 'sorry' ?
        <path d="M45,54 Q55,50 65,54" stroke="#6D4C41" strokeWidth="1.5" fill="none" /> :
        <path d="M46,50 Q55,54 64,50" stroke="#6D4C41" strokeWidth="1.5" fill="none" />
      }
      {/* Sweat for scared */}
      {mood === 'scared' && <>
        <ellipse cx="30" cy="22" rx="2" ry="4" fill="#64B5F6" opacity="0.5" />
        <ellipse cx="78" cy="24" rx="2" ry="3" fill="#64B5F6" opacity="0.4" />
      </>}
    </svg>
  );
};

// ============ DHOLU & BHOLU (Twin Sidekicks) ============
export const DholuBholu = ({ size = 120, mood = 'happy', className = '' }) => {
  const w = size;
  const h = size * 0.85;
  return (
    <svg width={w} height={h} viewBox="0 0 160 136" className={className}>
      <defs>
        <radialGradient id="cb-twinSkin" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#D2956A" />
          <stop offset="100%" stopColor="#B87848" />
        </radialGradient>
        <linearGradient id="cb-dholuOutfit" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#42A5F5" />
          <stop offset="100%" stopColor="#1E88E5" />
        </linearGradient>
        <linearGradient id="cb-bholuOutfit" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#66BB6A" />
          <stop offset="100%" stopColor="#43A047" />
        </linearGradient>
        <filter id="cb-twinShadow"><feDropShadow dx="0.5" dy="1" stdDeviation="1.5" floodOpacity="0.2" /></filter>
      </defs>
      {/* === DHOLU (left, blue) === */}
      <g>
        {/* Legs */}
        <rect x="18" y="106" width="9" height="16" rx="3" fill="url(#cb-twinSkin)" />
        <rect x="38" y="106" width="9" height="16" rx="3" fill="url(#cb-twinSkin)" />
        <ellipse cx="22" cy="124" rx="6" ry="3" fill="#1E88E5" />
        <ellipse cx="42" cy="124" rx="6" ry="3" fill="#1E88E5" />
        {/* Outfit */}
        <path d="M12,70 Q10,94 14,112 L52,112 Q56,94 54,70 Z" fill="url(#cb-dholuOutfit)" filter="url(#cb-twinShadow)" />
        {/* Torso */}
        <ellipse cx="33" cy="64" rx="18" ry="12" fill="url(#cb-dholuOutfit)" />
        {/* Arms */}
        <rect x="6" y="58" width="8" height="20" rx="3" fill="url(#cb-twinSkin)" />
        <rect x="52" y="58" width="8" height="20" rx="3" fill="url(#cb-twinSkin)" />
        <circle cx="10" cy="80" r="4" fill="url(#cb-twinSkin)" />
        <circle cx="56" cy="80" r="4" fill="url(#cb-twinSkin)" />
        {/* Neck */}
        <rect x="28" y="40" width="10" height="8" rx="3" fill="url(#cb-twinSkin)" />
        {/* Head */}
        <circle cx="33" cy="24" r="18" fill="url(#cb-twinSkin)" />
        {/* Hair */}
        <path d="M15,20 Q15,8 33,4 Q51,8 51,20" fill="#1A1A1A" />
        {/* Eyes */}
        {mood === 'confused' ? <>
          <ellipse cx="26" cy="24" rx="5" ry="5" fill="white" />
          <ellipse cx="40" cy="24" rx="5" ry="5" fill="white" />
          <circle cx="28" cy="24" r="3" fill="#2C1810" />
          <circle cx="42" cy="24" r="3" fill="#2C1810" />
          <circle cx="29" cy="22" r="1" fill="white" />
          <circle cx="43" cy="22" r="1" fill="white" />
        </> : mood === 'scared' ? <>
          <ellipse cx="26" cy="24" rx="6" ry="7" fill="white" />
          <ellipse cx="40" cy="24" rx="6" ry="7" fill="white" />
          <circle cx="26" cy="25" r="3.5" fill="#2C1810" />
          <circle cx="40" cy="25" r="3.5" fill="#2C1810" />
          <circle cx="27" cy="23" r="1.2" fill="white" />
          <circle cx="41" cy="23" r="1.2" fill="white" />
        </> : <>
          <ellipse cx="26" cy="24" rx="5" ry="5" fill="white" />
          <ellipse cx="40" cy="24" rx="5" ry="5" fill="white" />
          <circle cx="26" cy="25" r="3" fill="#2C1810" />
          <circle cx="40" cy="25" r="3" fill="#2C1810" />
          <circle cx="27" cy="23" r="1.2" fill="white" />
          <circle cx="41" cy="23" r="1.2" fill="white" />
        </>}
        {/* Nose */}
        <ellipse cx="33" cy="30" rx="2.5" ry="2" fill="#9A6030" />
        {/* Mouth */}
        {mood === 'happy' ?
          <path d="M27,34 Q33,40 39,34" stroke="#6D4C41" strokeWidth="1.5" fill="none" /> :
          mood === 'confused' ?
          <path d="M28,36 Q33,34 38,36 Q36,38 30,38 Z" fill="#5D3A1A" /> :
          mood === 'scared' ?
          <ellipse cx="33" cy="36" rx="4" ry="5" fill="#5D3A1A" /> :
          <path d="M29,34 Q33,37 37,34" stroke="#6D4C41" strokeWidth="1.5" fill="none" />
        }
      </g>
      {/* === BHOLU (right, green) === */}
      <g>
        {/* Legs */}
        <rect x="113" y="106" width="9" height="16" rx="3" fill="url(#cb-twinSkin)" />
        <rect x="133" y="106" width="9" height="16" rx="3" fill="url(#cb-twinSkin)" />
        <ellipse cx="117" cy="124" rx="6" ry="3" fill="#43A047" />
        <ellipse cx="137" cy="124" rx="6" ry="3" fill="#43A047" />
        {/* Outfit */}
        <path d="M107,70 Q105,94 109,112 L147,112 Q151,94 149,70 Z" fill="url(#cb-bholuOutfit)" filter="url(#cb-twinShadow)" />
        {/* Torso */}
        <ellipse cx="128" cy="64" rx="18" ry="12" fill="url(#cb-bholuOutfit)" />
        {/* Arms */}
        <rect x="101" y="58" width="8" height="20" rx="3" fill="url(#cb-twinSkin)" />
        <rect x="147" y="58" width="8" height="20" rx="3" fill="url(#cb-twinSkin)" />
        <circle cx="105" cy="80" r="4" fill="url(#cb-twinSkin)" />
        <circle cx="151" cy="80" r="4" fill="url(#cb-twinSkin)" />
        {/* Neck */}
        <rect x="123" y="40" width="10" height="8" rx="3" fill="url(#cb-twinSkin)" />
        {/* Head */}
        <circle cx="128" cy="24" r="18" fill="url(#cb-twinSkin)" />
        {/* Hair */}
        <path d="M110,20 Q110,8 128,4 Q146,8 146,20" fill="#1A1A1A" />
        {/* Eyes */}
        {mood === 'confused' ? <>
          <ellipse cx="121" cy="24" rx="5" ry="5" fill="white" />
          <ellipse cx="135" cy="24" rx="5" ry="5" fill="white" />
          <circle cx="119" cy="24" r="3" fill="#2C1810" />
          <circle cx="133" cy="24" r="3" fill="#2C1810" />
          <circle cx="118" cy="22" r="1" fill="white" />
          <circle cx="132" cy="22" r="1" fill="white" />
        </> : mood === 'scared' ? <>
          <ellipse cx="121" cy="24" rx="6" ry="7" fill="white" />
          <ellipse cx="135" cy="24" rx="6" ry="7" fill="white" />
          <circle cx="121" cy="25" r="3.5" fill="#2C1810" />
          <circle cx="135" cy="25" r="3.5" fill="#2C1810" />
          <circle cx="122" cy="23" r="1.2" fill="white" />
          <circle cx="136" cy="23" r="1.2" fill="white" />
        </> : <>
          <ellipse cx="121" cy="24" rx="5" ry="5" fill="white" />
          <ellipse cx="135" cy="24" rx="5" ry="5" fill="white" />
          <circle cx="121" cy="25" r="3" fill="#2C1810" />
          <circle cx="135" cy="25" r="3" fill="#2C1810" />
          <circle cx="122" cy="23" r="1.2" fill="white" />
          <circle cx="136" cy="23" r="1.2" fill="white" />
        </>}
        {/* Nose */}
        <ellipse cx="128" cy="30" rx="2.5" ry="2" fill="#9A6030" />
        {/* Mouth */}
        {mood === 'happy' ?
          <path d="M122,34 Q128,40 134,34" stroke="#6D4C41" strokeWidth="1.5" fill="none" /> :
          mood === 'confused' ?
          <path d="M123,36 Q128,34 133,36 Q131,38 125,38 Z" fill="#5D3A1A" /> :
          mood === 'scared' ?
          <ellipse cx="128" cy="36" rx="4" ry="5" fill="#5D3A1A" /> :
          <path d="M124,34 Q128,37 132,34" stroke="#6D4C41" strokeWidth="1.5" fill="none" />
        }
      </g>
      {/* Confused: question marks */}
      {mood === 'confused' && <>
        <text x="20" y="6" fontSize="10" fill="#888" fontWeight="bold">?</text>
        <text x="138" y="6" fontSize="10" fill="#888" fontWeight="bold">?</text>
      </>}
      {/* Scared: sweat */}
      {mood === 'scared' && <>
        <ellipse cx="14" cy="14" rx="2" ry="3" fill="#64B5F6" opacity="0.5" />
        <ellipse cx="146" cy="14" rx="2" ry="3" fill="#64B5F6" opacity="0.5" />
      </>}
    </svg>
  );
};

// ============ MAGIC LADOO ============
export const MagicLadoo = ({ size = 60, glowing = true, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" className={className}>
    <defs>
      <radialGradient id="cb-ladooBody" cx="40%" cy="35%">
        <stop offset="0%" stopColor="#FFD54F" />
        <stop offset="50%" stopColor="#FFB300" />
        <stop offset="100%" stopColor="#FF8F00" />
      </radialGradient>
      <radialGradient id="cb-ladooGlow" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#FFD54F" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#FFD54F" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="cb-ladooHighlight" cx="35%" cy="30%">
        <stop offset="0%" stopColor="#FFF9C4" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
      <filter id="cb-ladooShadow"><feDropShadow dx="0.5" dy="1" stdDeviation="1.5" floodOpacity="0.25" /></filter>
    </defs>
    {/* Glow aura */}
    {glowing && <>
      <circle cx="30" cy="30" r="28" fill="url(#cb-ladooGlow)">
        <animate attributeName="r" values="26;30;26" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2s" repeatCount="indefinite" />
      </circle>
    </>}
    {/* Main ladoo sphere */}
    <circle cx="30" cy="30" r="18" fill="url(#cb-ladooBody)" filter="url(#cb-ladooShadow)" />
    {/* Highlight */}
    <ellipse cx="24" cy="24" rx="8" ry="6" fill="url(#cb-ladooHighlight)" opacity="0.5" />
    {/* Texture bumps */}
    <circle cx="24" cy="22" r="2" fill="#FFA000" opacity="0.4" />
    <circle cx="32" cy="20" r="1.5" fill="#FFA000" opacity="0.3" />
    <circle cx="20" cy="28" r="1.5" fill="#FFA000" opacity="0.35" />
    <circle cx="36" cy="26" r="2" fill="#FFA000" opacity="0.3" />
    <circle cx="28" cy="34" r="1.5" fill="#FFA000" opacity="0.35" />
    <circle cx="22" cy="36" r="1.8" fill="#FFA000" opacity="0.3" />
    <circle cx="34" cy="34" r="1.5" fill="#FFA000" opacity="0.25" />
    <circle cx="38" cy="32" r="1.2" fill="#FFA000" opacity="0.3" />
    <circle cx="26" cy="40" r="1.5" fill="#FFA000" opacity="0.25" />
    <circle cx="36" cy="38" r="1.2" fill="#FFA000" opacity="0.2" />
    {/* Sparkle effects when glowing */}
    {glowing && <>
      <path d="M10,10 L11,7 L12,10 L15,11 L12,12 L11,15 L10,12 L7,11 Z" fill="white" opacity="0.7">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.5s" repeatCount="indefinite" />
      </path>
      <path d="M46,8 L47,5 L48,8 L51,9 L48,10 L47,13 L46,10 L43,9 Z" fill="white" opacity="0.6">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="1.8s" repeatCount="indefinite" />
      </path>
      <path d="M50,40 L51,37 L52,40 L55,41 L52,42 L51,45 L50,42 L47,41 Z" fill="white" opacity="0.5">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="1.3s" repeatCount="indefinite" />
      </path>
      <path d="M8,44 L9,42 L10,44 L12,45 L10,46 L9,48 L8,46 L6,45 Z" fill="#FFF9C4" opacity="0.6">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
      </path>
    </>}
  </svg>
);

// ============ SPIDERMAN CHARACTERS ============

// ============ TROY / ODYSSEY CHARACTERS ============

export const Odysseus = ({ size = 120, mood = 'happy', className = '' }) => {
  const w = 130, h = 160;
  const isThinking = mood === 'thinking';
  const isHeroic = mood === 'heroic' || mood === 'proud';
  const isDetermined = mood === 'determined';
  const isBrave = mood === 'brave';
  const skinColor = '#E8BA8B';

  return (
    <svg width={size} height={size * (h / w)} viewBox={`0 0 ${w} ${h}`} className={className}>
      <defs>
        <radialGradient id="tr-odySkin" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#F0CDA0" />
          <stop offset="100%" stopColor={skinColor} />
        </radialGradient>
        <linearGradient id="tr-odyArmor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C9B037" />
          <stop offset="50%" stopColor="#A08520" />
          <stop offset="100%" stopColor="#7A6518" />
        </linearGradient>
        <linearGradient id="tr-odyTunic" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3949AB" />
          <stop offset="100%" stopColor="#283593" />
        </linearGradient>
        <linearGradient id="tr-odyHelmet" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4A843" />
          <stop offset="40%" stopColor="#B8922E" />
          <stop offset="100%" stopColor="#8B7320" />
        </linearGradient>
        <filter id="tr-odyShadow"><feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.25" /></filter>
      </defs>

      {/* Legs */}
      <rect x="48" y="115" width="13" height="30" rx="5" fill={skinColor} />
      <rect x="69" y="115" width="13" height="30" rx="5" fill={skinColor} />
      {/* Sandals */}
      <rect x="46" y="140" width="17" height="10" rx="4" fill="#8D6E63" />
      <rect x="67" y="140" width="17" height="10" rx="4" fill="#8D6E63" />
      <path d="M48,142 L55,138 L55,142" stroke="#6D4C41" strokeWidth="1" fill="none" />
      <path d="M69,142 L76,138 L76,142" stroke="#6D4C41" strokeWidth="1" fill="none" />

      {/* Tunic skirt */}
      <path d="M42,105 L38,125 Q50,130 65,130 Q80,130 92,125 L88,105 Z" fill="url(#tr-odyTunic)" />
      <path d="M42,120 L45,125" stroke="#1A237E" strokeWidth="0.8" opacity="0.4" />
      <path d="M55,120 L55,128" stroke="#1A237E" strokeWidth="0.8" opacity="0.4" />
      <path d="M70,120 L70,128" stroke="#1A237E" strokeWidth="0.8" opacity="0.4" />
      <path d="M85,120 L82,125" stroke="#1A237E" strokeWidth="0.8" opacity="0.4" />

      {/* Body - armor breastplate */}
      <rect x="42" y="72" width="46" height="38" rx="8" fill="url(#tr-odyArmor)" filter="url(#tr-odyShadow)" />
      {/* Armor detail lines */}
      <path d="M52,78 Q65,85 78,78" stroke="#7A6518" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M48,90 L82,90" stroke="#7A6518" strokeWidth="0.8" opacity="0.4" />
      {/* Chest emblem - owl of Athena */}
      <circle cx="65" cy="86" r="5" fill="#8B7320" opacity="0.6" />
      <path d="M63,85 L65,83 L67,85" stroke="#F0E68C" strokeWidth="0.8" fill="none" />
      <circle cx="63.5" cy="86" r="1" fill="#F0E68C" />
      <circle cx="66.5" cy="86" r="1" fill="#F0E68C" />

      {/* Arms */}
      {isThinking ? <>
        <path d="M88,80 Q100,72 95,58" stroke={skinColor} strokeWidth="10" strokeLinecap="round" fill="none" />
        <circle cx="94" cy="56" r="5" fill={skinColor} />
        <path d="M42,80 Q28,90 30,105" stroke={skinColor} strokeWidth="10" strokeLinecap="round" fill="none" />
        <circle cx="30" cy="107" r="5" fill={skinColor} />
      </> : isHeroic ? <>
        <path d="M42,80 Q28,85 30,100" stroke={skinColor} strokeWidth="10" strokeLinecap="round" fill="none" />
        <circle cx="30" cy="102" r="5" fill={skinColor} />
        <path d="M88,80 Q102,85 100,100" stroke={skinColor} strokeWidth="10" strokeLinecap="round" fill="none" />
        <circle cx="100" cy="102" r="5" fill={skinColor} />
      </> : isBrave || isDetermined ? <>
        <path d="M88,78 Q108,62 112,48" stroke={skinColor} strokeWidth="10" strokeLinecap="round" fill="none" />
        <circle cx="112" cy="46" r="5" fill={skinColor} />
        {/* Sword in hand */}
        <line x1="112" y1="44" x2="118" y2="22" stroke="#B0BEC5" strokeWidth="2.5" />
        <line x1="108" y1="44" x2="116" y2="44" stroke="#8D6E63" strokeWidth="3" />
        <path d="M42,80 Q28,90 30,105" stroke={skinColor} strokeWidth="10" strokeLinecap="round" fill="none" />
        <circle cx="30" cy="107" r="5" fill={skinColor} />
      </> : <>
        <path d="M42,80 Q28,95 30,110" stroke={skinColor} strokeWidth="10" strokeLinecap="round" fill="none" />
        <circle cx="30" cy="112" r="5" fill={skinColor} />
        <path d="M88,80 Q102,95 100,110" stroke={skinColor} strokeWidth="10" strokeLinecap="round" fill="none" />
        <circle cx="100" cy="112" r="5" fill={skinColor} />
      </>}

      {/* Neck */}
      <rect x="57" y="55" width="16" height="10" rx="3" fill={skinColor} />

      {/* Head */}
      <ellipse cx="65" cy="38" rx="22" ry="24" fill="url(#tr-odySkin)" filter="url(#tr-odyShadow)" />

      {/* Helmet */}
      <path d="M43,35 Q42,15 55,8 Q65,4 75,8 Q88,15 87,35 Q85,22 75,14 Q65,10 55,14 Q45,22 44,35 Z" fill="url(#tr-odyHelmet)" />
      {/* Helmet crest / plume */}
      <path d="M65,5 Q68,0 72,2 Q75,5 78,3 Q80,6 82,5" stroke="#C62828" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M65,5 Q62,0 58,2 Q55,5 52,3" stroke="#C62828" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Helmet band */}
      <path d="M44,34 Q54,38 65,38 Q76,38 86,34" stroke="#8B7320" strokeWidth="2.5" fill="none" />

      {/* Beard - short curly */}
      <path d="M48,50 Q50,58 55,60 Q60,62 65,62 Q70,62 75,60 Q80,58 82,50" fill="#5D4037" />
      <path d="M50,52 Q55,55 60,53" stroke="#4E342E" strokeWidth="0.8" fill="none" opacity="0.5" />
      <path d="M65,54 Q70,56 75,53" stroke="#4E342E" strokeWidth="0.8" fill="none" opacity="0.5" />

      {/* Skin backdrop for eyes */}
      <ellipse cx="55" cy="38" rx="7" ry="5" fill={skinColor} />
      <ellipse cx="75" cy="38" rx="7" ry="5" fill={skinColor} />

      {/* Eyes */}
      <ellipse cx="55" cy="38" rx="5" ry="4.5" fill="white" stroke="#333" strokeWidth="1">
        <animate attributeName="ry" values="4.5;0.5;4.5" dur="5s" begin="3.2s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
      </ellipse>
      <circle cx={isThinking ? 56 : 55} cy="38" r="2.5" fill="#3E2723">
        <animate attributeName="r" values="2.5;0.3;2.5" dur="5s" begin="3.2s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
      </circle>
      <circle cx={isThinking ? 56.5 : 55.5} cy="37" r="1" fill="white">
        <animate attributeName="r" values="1;0;1" dur="5s" begin="3.2s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
      </circle>
      <ellipse cx="75" cy="38" rx="5" ry="4.5" fill="white" stroke="#333" strokeWidth="1">
        <animate attributeName="ry" values="4.5;0.5;4.5" dur="5s" begin="3.2s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
      </ellipse>
      <circle cx={isThinking ? 76 : 75} cy="38" r="2.5" fill="#3E2723">
        <animate attributeName="r" values="2.5;0.3;2.5" dur="5s" begin="3.2s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
      </circle>
      <circle cx={isThinking ? 76.5 : 75.5} cy="37" r="1" fill="white">
        <animate attributeName="r" values="1;0;1" dur="5s" begin="3.2s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
      </circle>

      {/* Eyebrows */}
      {isDetermined || isBrave ? <>
        <line x1="49" y1="31" x2="60" y2="33" stroke="#5D4037" strokeWidth="2" />
        <line x1="70" y1="33" x2="81" y2="31" stroke="#5D4037" strokeWidth="2" />
      </> : <>
        <path d="M49,32 Q55,30 61,32" stroke="#5D4037" strokeWidth="1.5" fill="none" />
        <path d="M69,32 Q75,30 81,32" stroke="#5D4037" strokeWidth="1.5" fill="none" />
      </>}

      {/* Nose */}
      <path d="M63,40 Q65,46 67,40" stroke="#C9A06C" strokeWidth="1.5" fill="none" />

      {/* Mouth */}
      {mood === 'happy' || isHeroic ? (
        <path d="M57,52 Q65,56 73,52" stroke="#A0522D" strokeWidth="1.5" fill="none" />
      ) : isThinking ? (
        <line x1="58" y1="53" x2="72" y2="53" stroke="#A0522D" strokeWidth="1.5" />
      ) : (
        <path d="M58,53 Q65,55 72,53" stroke="#A0522D" strokeWidth="1.5" fill="none" />
      )}

      {/* Ears */}
      <ellipse cx="43" cy="40" rx="3.5" ry="5" fill={skinColor} />
      <ellipse cx="87" cy="40" rx="3.5" ry="5" fill={skinColor} />
    </svg>
  );
};

export const WoodenHorse = ({ size = 140, className = '' }) => {
  const w = 160, h = 180;

  return (
    <svg width={size} height={size * (h / w)} viewBox={`0 0 ${w} ${h}`} className={className}>
      <defs>
        <linearGradient id="tr-woodGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D7A86E" />
          <stop offset="40%" stopColor="#B8873A" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
        <linearGradient id="tr-woodDark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A07030" />
          <stop offset="100%" stopColor="#7A5420" />
        </linearGradient>
        <filter id="tr-woodShadow"><feDropShadow dx="2" dy="3" stdDeviation="3" floodOpacity="0.3" /></filter>
      </defs>

      {/* Wheels */}
      <circle cx="50" cy="165" r="12" fill="#6D4C41" stroke="#5D4037" strokeWidth="2" />
      <circle cx="50" cy="165" r="3" fill="#8D6E63" />
      <circle cx="110" cy="165" r="12" fill="#6D4C41" stroke="#5D4037" strokeWidth="2" />
      <circle cx="110" cy="165" r="3" fill="#8D6E63" />
      {/* Wheel spokes */}
      <line x1="50" y1="155" x2="50" y2="175" stroke="#5D4037" strokeWidth="1.5" />
      <line x1="40" y1="165" x2="60" y2="165" stroke="#5D4037" strokeWidth="1.5" />
      <line x1="110" y1="155" x2="110" y2="175" stroke="#5D4037" strokeWidth="1.5" />
      <line x1="100" y1="165" x2="120" y2="165" stroke="#5D4037" strokeWidth="1.5" />

      {/* Platform */}
      <rect x="30" y="148" width="100" height="10" rx="3" fill="url(#tr-woodDark)" />

      {/* Legs */}
      <rect x="45" y="120" width="12" height="30" rx="3" fill="url(#tr-woodGrad)" />
      <rect x="62" y="120" width="12" height="30" rx="3" fill="url(#tr-woodGrad)" />
      <rect x="95" y="120" width="12" height="30" rx="3" fill="url(#tr-woodGrad)" />
      <rect x="112" y="120" width="12" height="30" rx="3" fill="url(#tr-woodGrad)" />

      {/* Body */}
      <ellipse cx="80" cy="90" rx="45" ry="35" fill="url(#tr-woodGrad)" filter="url(#tr-woodShadow)" />
      {/* Wood grain lines */}
      <path d="M40,80 Q60,75 80,80 Q100,85 120,80" stroke="#8B6914" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M42,90 Q60,85 80,90 Q100,95 118,90" stroke="#8B6914" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M44,100 Q60,95 80,100 Q100,105 116,100" stroke="#8B6914" strokeWidth="0.8" fill="none" opacity="0.4" />
      {/* Plank lines */}
      <line x1="60" y1="58" x2="58" y2="122" stroke="#8B6914" strokeWidth="0.6" opacity="0.3" />
      <line x1="80" y1="55" x2="80" y2="125" stroke="#8B6914" strokeWidth="0.6" opacity="0.3" />
      <line x1="100" y1="58" x2="102" y2="122" stroke="#8B6914" strokeWidth="0.6" opacity="0.3" />

      {/* Neck */}
      <path d="M42,75 Q35,55 30,35 Q28,25 35,20" fill="url(#tr-woodGrad)" stroke="#8B6914" strokeWidth="1" />
      <path d="M50,70 Q45,52 40,35 Q38,28 42,22" fill="url(#tr-woodGrad)" />

      {/* Head */}
      <ellipse cx="32" cy="18" rx="18" ry="14" fill="url(#tr-woodGrad)" filter="url(#tr-woodShadow)" />
      {/* Ear */}
      <path d="M22,8 Q18,0 22,3 Q20,0 24,5" fill="url(#tr-woodDark)" />
      <path d="M38,6 Q42,0 40,3 Q43,0 39,5" fill="url(#tr-woodDark)" />
      {/* Eye */}
      <circle cx="26" cy="16" r="3" fill="#5D4037" />
      <circle cx="26" cy="15.5" r="1" fill="#8D6E63" />
      {/* Nostril */}
      <circle cx="17" cy="20" r="1.5" fill="#6D4C41" />
      {/* Mane */}
      <path d="M38,10 Q42,15 40,22 Q44,18 42,25 Q46,22 44,30 Q48,26 46,35" stroke="#8B6914" strokeWidth="2" fill="none" opacity="0.6" />

      {/* Tail */}
      <path d="M125,80 Q135,75 140,65 Q145,72 142,80 Q148,75 145,85" stroke="url(#tr-woodDark)" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Secret door (subtle) */}
      <rect x="70" y="85" width="18" height="22" rx="2" fill="none" stroke="#7A5420" strokeWidth="0.8" strokeDasharray="3,2" opacity="0.35" />
      <circle cx="86" cy="96" r="1.5" fill="#7A5420" opacity="0.3" />
    </svg>
  );
};

export const Athena = ({ size = 120, mood: _mood = 'wise', className = '' }) => {
  const w = 130, h = 160;
  const skinColor = '#F5DEB3';

  return (
    <svg width={size} height={size * (h / w)} viewBox={`0 0 ${w} ${h}`} className={className}>
      <defs>
        <radialGradient id="tr-athenaSkin" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#FFF8E7" />
          <stop offset="100%" stopColor={skinColor} />
        </radialGradient>
        <linearGradient id="tr-athenaRobe" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8EAF6" />
          <stop offset="50%" stopColor="#C5CAE9" />
          <stop offset="100%" stopColor="#9FA8DA" />
        </linearGradient>
        <linearGradient id="tr-athenaGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFD54F" />
          <stop offset="100%" stopColor="#F9A825" />
        </linearGradient>
        <filter id="tr-athenaGlow">
          <feGaussianBlur stdDeviation="3" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="tr-athenaShadow"><feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.2" /></filter>
      </defs>

      {/* Divine glow aura */}
      <ellipse cx="65" cy="80" rx="55" ry="70" fill="url(#tr-athenaGold)" opacity="0.08" filter="url(#tr-athenaGlow)" />

      {/* Robe - long flowing */}
      <path d="M40,75 L32,148 Q50,155 65,155 Q80,155 98,148 L90,75 Z" fill="url(#tr-athenaRobe)" filter="url(#tr-athenaShadow)" />
      {/* Robe folds */}
      <path d="M45,90 L38,145" stroke="#7986CB" strokeWidth="0.8" opacity="0.4" />
      <path d="M60,88 L56,150" stroke="#7986CB" strokeWidth="0.8" opacity="0.4" />
      <path d="M75,88 L78,150" stroke="#7986CB" strokeWidth="0.8" opacity="0.4" />
      <path d="M85,90 L92,145" stroke="#7986CB" strokeWidth="0.8" opacity="0.4" />

      {/* Golden belt */}
      <path d="M42,82 Q55,86 65,86 Q75,86 88,82" stroke="url(#tr-athenaGold)" strokeWidth="3" fill="none" />
      <circle cx="65" cy="84" r="3" fill="url(#tr-athenaGold)" />

      {/* Arms */}
      <path d="M40,80 Q25,92 22,108" stroke="url(#tr-athenaRobe)" strokeWidth="10" strokeLinecap="round" fill="none" />
      <circle cx="22" cy="110" r="5" fill={skinColor} />
      <path d="M90,80 Q105,92 108,108" stroke="url(#tr-athenaRobe)" strokeWidth="10" strokeLinecap="round" fill="none" />
      <circle cx="108" cy="110" r="5" fill={skinColor} />

      {/* Neck */}
      <rect x="57" y="52" width="16" height="10" rx="3" fill={skinColor} />

      {/* Head */}
      <ellipse cx="65" cy="35" rx="22" ry="24" fill="url(#tr-athenaSkin)" filter="url(#tr-athenaShadow)" />

      {/* Helmet - Athena style */}
      <path d="M43,32 Q42,12 55,6 Q65,2 75,6 Q88,12 87,32" fill="url(#tr-athenaGold)" />
      {/* Helmet crest - tall plume */}
      <path d="M65,3 Q65,-8 60,-12 Q58,-8 56,-5 Q55,-8 52,-10" fill="#C62828" />
      <path d="M65,3 Q65,-8 70,-12 Q72,-8 74,-5 Q75,-8 78,-10" fill="#B71C1C" />
      {/* Helmet visor */}
      <path d="M44,32 Q55,36 65,36 Q75,36 86,32" stroke="#F9A825" strokeWidth="2" fill="none" />
      {/* Helmet cheek guards */}
      <path d="M44,32 L42,42 Q44,44 46,42" fill="url(#tr-athenaGold)" opacity="0.7" />
      <path d="M86,32 L88,42 Q86,44 84,42" fill="url(#tr-athenaGold)" opacity="0.7" />

      {/* Hair - flowing from under helmet */}
      <path d="M44,35 Q40,45 38,60 Q36,70 40,78" stroke="#5D4037" strokeWidth="3" fill="none" />
      <path d="M86,35 Q90,45 92,60 Q94,70 90,78" stroke="#5D4037" strokeWidth="3" fill="none" />
      <path d="M46,38 Q42,50 42,65" stroke="#6D4C41" strokeWidth="2" fill="none" opacity="0.6" />
      <path d="M84,38 Q88,50 88,65" stroke="#6D4C41" strokeWidth="2" fill="none" opacity="0.6" />

      {/* Skin backdrop for eyes */}
      <ellipse cx="55" cy="36" rx="7" ry="5" fill={skinColor} />
      <ellipse cx="75" cy="36" rx="7" ry="5" fill={skinColor} />

      {/* Eyes - wise and serene */}
      <ellipse cx="55" cy="36" rx="5" ry="4" fill="white" stroke="#555" strokeWidth="1" />
      <circle cx="55" cy="36" r="2.5" fill="#5C6BC0" />
      <circle cx="55.5" cy="35" r="1" fill="white" />
      <ellipse cx="75" cy="36" rx="5" ry="4" fill="white" stroke="#555" strokeWidth="1" />
      <circle cx="75" cy="36" r="2.5" fill="#5C6BC0" />
      <circle cx="75.5" cy="35" r="1" fill="white" />

      {/* Eyebrows */}
      <path d="M49,30 Q55,28 61,30" stroke="#5D4037" strokeWidth="1.5" fill="none" />
      <path d="M69,30 Q75,28 81,30" stroke="#5D4037" strokeWidth="1.5" fill="none" />

      {/* Nose */}
      <path d="M63,38 Q65,43 67,38" stroke="#D4B896" strokeWidth="1.2" fill="none" />

      {/* Mouth - serene smile */}
      <path d="M57,47 Q65,52 73,47" stroke="#C0846A" strokeWidth="1.5" fill="none" />

      {/* Ears */}
      <ellipse cx="43" cy="38" rx="3" ry="5" fill={skinColor} />
      <ellipse cx="87" cy="38" rx="3" ry="5" fill={skinColor} />

      {/* Owl on shoulder (Athena symbol) */}
      <g transform="translate(105,95) scale(0.6)">
        <ellipse cx="0" cy="0" rx="10" ry="12" fill="#8D6E63" />
        <ellipse cx="0" cy="-8" rx="8" ry="7" fill="#A1887F" />
        <circle cx="-3" cy="-9" r="3" fill="white" stroke="#555" strokeWidth="0.5" />
        <circle cx="3" cy="-9" r="3" fill="white" stroke="#555" strokeWidth="0.5" />
        <circle cx="-3" cy="-9" r="1.5" fill="#333" />
        <circle cx="3" cy="-9" r="1.5" fill="#333" />
        <path d="M-2,-5 L0,-3 L2,-5" fill="#FF8F00" />
        <path d="M-5,-14 L-3,-10" stroke="#A1887F" strokeWidth="1.5" />
        <path d="M5,-14 L3,-10" stroke="#A1887F" strokeWidth="1.5" />
      </g>
    </svg>
  );
};

export const Penelope = ({ size = 110, mood = 'hopeful', className = '' }) => {
  const w = 120, h = 150;
  const skinColor = '#F5DEB3';

  return (
    <svg width={size} height={size * (h / w)} viewBox={`0 0 ${w} ${h}`} className={className}>
      <defs>
        <radialGradient id="tr-penSkin" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#FFF8E7" />
          <stop offset="100%" stopColor={skinColor} />
        </radialGradient>
        <linearGradient id="tr-penDress" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7B1FA2" />
          <stop offset="100%" stopColor="#4A148C" />
        </linearGradient>
        <filter id="tr-penShadow"><feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.2" /></filter>
      </defs>

      {/* Dress - long flowing */}
      <path d="M38,70 L30,140 Q45,148 60,148 Q75,148 90,140 L82,70 Z" fill="url(#tr-penDress)" filter="url(#tr-penShadow)" />
      <path d="M42,85 L34,138" stroke="#6A1B9A" strokeWidth="0.8" opacity="0.4" />
      <path d="M60,82 L58,145" stroke="#6A1B9A" strokeWidth="0.8" opacity="0.4" />
      <path d="M78,85 L86,138" stroke="#6A1B9A" strokeWidth="0.8" opacity="0.4" />

      {/* Golden sash */}
      <path d="M40,76 Q50,80 60,80 Q70,80 80,76" stroke="#FFD54F" strokeWidth="2.5" fill="none" />

      {/* Arms */}
      <path d="M38,76 Q24,88 26,105" stroke="url(#tr-penDress)" strokeWidth="10" strokeLinecap="round" fill="none" />
      <circle cx="26" cy="107" r="5" fill={skinColor} />
      <path d="M82,76 Q96,88 94,105" stroke="url(#tr-penDress)" strokeWidth="10" strokeLinecap="round" fill="none" />
      <circle cx="94" cy="107" r="5" fill={skinColor} />

      {/* Neck */}
      <rect x="53" y="50" width="14" height="10" rx="3" fill={skinColor} />

      {/* Head */}
      <ellipse cx="60" cy="32" rx="21" ry="23" fill="url(#tr-penSkin)" filter="url(#tr-penShadow)" />

      {/* Hair - dark flowing */}
      <path d="M39,28 Q38,10 50,6 Q58,3 68,5 Q80,8 82,25 Q80,15 72,10 Q62,6 52,10 Q42,14 41,25 Z" fill="#3E2723" />
      <path d="M39,30 Q36,42 34,58 Q32,68 36,75" stroke="#3E2723" strokeWidth="4" fill="none" />
      <path d="M81,30 Q84,42 86,58 Q88,68 84,75" stroke="#3E2723" strokeWidth="4" fill="none" />
      <path d="M41,34 Q38,48 38,62" stroke="#4E342E" strokeWidth="2.5" fill="none" opacity="0.6" />
      <path d="M79,34 Q82,48 82,62" stroke="#4E342E" strokeWidth="2.5" fill="none" opacity="0.6" />

      {/* Hair ornament */}
      <circle cx="45" cy="12" r="3" fill="#FFD54F" />
      <circle cx="45" cy="12" r="1.5" fill="#F9A825" />

      {/* Skin backdrop for eyes */}
      <ellipse cx="52" cy="34" rx="6" ry="5" fill={skinColor} />
      <ellipse cx="68" cy="34" rx="6" ry="5" fill={skinColor} />

      {/* Eyes */}
      <ellipse cx="52" cy="34" rx="4.5" ry="4" fill="white" stroke="#555" strokeWidth="1" />
      <circle cx="52" cy="34" r="2.2" fill="#4E342E" />
      <circle cx="52.5" cy="33" r="0.9" fill="white" />
      <ellipse cx="68" cy="34" rx="4.5" ry="4" fill="white" stroke="#555" strokeWidth="1" />
      <circle cx="68" cy="34" r="2.2" fill="#4E342E" />
      <circle cx="68.5" cy="33" r="0.9" fill="white" />

      {/* Eyebrows */}
      <path d="M47,29 Q52,27 57,29" stroke="#3E2723" strokeWidth="1.2" fill="none" />
      <path d="M63,29 Q68,27 73,29" stroke="#3E2723" strokeWidth="1.2" fill="none" />

      {/* Nose */}
      <ellipse cx="60" cy="40" rx="1.8" ry="2" fill="#E8CDA0" />

      {/* Mouth */}
      {mood === 'hopeful' ? (
        <path d="M54,46 Q60,50 66,46" stroke="#C0846A" strokeWidth="1.5" fill="none" />
      ) : (
        <path d="M54,47 Q60,50 66,47" stroke="#C0846A" strokeWidth="1.5" fill="none" />
      )}

      {/* Cheek blush */}
      <circle cx="44" cy="40" r="4" fill="#F8BBD0" opacity="0.25" />
      <circle cx="76" cy="40" r="4" fill="#F8BBD0" opacity="0.25" />

      {/* Ears */}
      <ellipse cx="39" cy="34" rx="3" ry="5" fill={skinColor} />
      <ellipse cx="81" cy="34" rx="3" ry="5" fill={skinColor} />
      {/* Earrings */}
      <circle cx="39" cy="40" r="2" fill="#FFD54F" />
      <circle cx="81" cy="40" r="2" fill="#FFD54F" />
    </svg>
  );
};

export const Telemachus = ({ size = 90, mood: _mood = 'happy', className = '' }) => {
  const w = 100, h = 130;
  const skinColor = '#EDBD8B';

  return (
    <svg width={size} height={size * (h / w)} viewBox={`0 0 ${w} ${h}`} className={className}>
      <defs>
        <radialGradient id="tr-telSkin" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#F5D0A0" />
          <stop offset="100%" stopColor={skinColor} />
        </radialGradient>
        <linearGradient id="tr-telTunic" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#66BB6A" />
          <stop offset="100%" stopColor="#43A047" />
        </linearGradient>
        <filter id="tr-telShadow"><feDropShadow dx="0.5" dy="1" stdDeviation="1.5" floodOpacity="0.2" /></filter>
      </defs>

      {/* Legs */}
      <rect x="35" y="88" width="11" height="25" rx="4" fill={skinColor} />
      <rect x="54" y="88" width="11" height="25" rx="4" fill={skinColor} />
      {/* Sandals */}
      <rect x="33" y="108" width="15" height="8" rx="3" fill="#8D6E63" />
      <rect x="52" y="108" width="15" height="8" rx="3" fill="#8D6E63" />

      {/* Tunic */}
      <path d="M30,60 L26,95 Q38,100 50,100 Q62,100 74,95 L70,60 Z" fill="url(#tr-telTunic)" filter="url(#tr-telShadow)" />

      {/* Belt */}
      <path d="M32,68 Q42,71 50,71 Q58,71 68,68" stroke="#795548" strokeWidth="2" fill="none" />

      {/* Arms */}
      <path d="M30,64 Q18,76 20,88" stroke="url(#tr-telTunic)" strokeWidth="8" strokeLinecap="round" fill="none" />
      <circle cx="20" cy="90" r="4" fill={skinColor} />
      <path d="M70,64 Q82,76 80,88" stroke="url(#tr-telTunic)" strokeWidth="8" strokeLinecap="round" fill="none" />
      <circle cx="80" cy="90" r="4" fill={skinColor} />

      {/* Neck */}
      <rect x="43" y="42" width="14" height="8" rx="3" fill={skinColor} />

      {/* Head */}
      <ellipse cx="50" cy="28" rx="18" ry="20" fill="url(#tr-telSkin)" filter="url(#tr-telShadow)" />

      {/* Hair - curly brown like Odysseus */}
      <path d="M32,25 Q30,10 42,5 Q48,2 56,4 Q66,7 68,20 Q66,12 58,8 Q50,5 42,8 Q34,12 34,22 Z" fill="#5D4037" />
      <path d="M38,7 Q35,2 40,4" fill="#5D4037" />
      <path d="M52,4 Q55,0 58,3" fill="#5D4037" />
      <path d="M62,8 Q66,4 64,9" fill="#5D4037" />

      {/* Skin backdrop for eyes */}
      <ellipse cx="43" cy="28" rx="6" ry="4.5" fill={skinColor} />
      <ellipse cx="57" cy="28" rx="6" ry="4.5" fill={skinColor} />

      {/* Eyes - big excited kid eyes */}
      <ellipse cx="43" cy="28" rx="4.5" ry="4.5" fill="white" stroke="#333" strokeWidth="0.8" />
      <circle cx="44" cy="27" r="2.2" fill="#3E2723" />
      <circle cx="44.5" cy="26" r="0.9" fill="white" />
      <ellipse cx="57" cy="28" rx="4.5" ry="4.5" fill="white" stroke="#333" strokeWidth="0.8" />
      <circle cx="58" cy="27" r="2.2" fill="#3E2723" />
      <circle cx="58.5" cy="26" r="0.9" fill="white" />

      {/* Eyebrows */}
      <path d="M38,22 Q43,20 48,22" stroke="#5D4037" strokeWidth="1.2" fill="none" />
      <path d="M52,22 Q57,20 62,22" stroke="#5D4037" strokeWidth="1.2" fill="none" />

      {/* Nose */}
      <circle cx="50" cy="33" r="1.5" fill="#D4A86C" />

      {/* Mouth - happy smile */}
      <path d="M43,38 Q50,43 57,38" stroke="#A0522D" strokeWidth="1.2" fill="none" />

      {/* Cheeks */}
      <circle cx="36" cy="33" r="3" fill="#F8BBD0" opacity="0.3" />
      <circle cx="64" cy="33" r="3" fill="#F8BBD0" opacity="0.3" />

      {/* Ears */}
      <ellipse cx="32" cy="28" rx="3" ry="4.5" fill={skinColor} />
      <ellipse cx="68" cy="28" rx="3" ry="4.5" fill={skinColor} />
    </svg>
  );
};

export const GreekShip = ({ size = 140, className = '' }) => {
  const w = 160, h = 100;

  return (
    <svg width={size} height={size * (h / w)} viewBox={`0 0 ${w} ${h}`} className={className}>
      <defs>
        <linearGradient id="tr-shipHull" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8D6E63" />
          <stop offset="100%" stopColor="#5D4037" />
        </linearGradient>
        <linearGradient id="tr-sail" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FAFAFA" />
          <stop offset="100%" stopColor="#E0E0E0" />
        </linearGradient>
      </defs>

      {/* Hull */}
      <path d="M15,65 Q20,55 40,50 L120,50 Q140,55 145,65 L150,75 Q130,82 80,82 Q30,82 10,75 Z" fill="url(#tr-shipHull)" />
      {/* Hull stripe */}
      <path d="M20,62 Q50,56 80,56 Q110,56 140,62" stroke="#4E342E" strokeWidth="1.5" fill="none" />
      {/* Ram at front */}
      <path d="M145,68 L155,65 L148,72" fill="#795548" />

      {/* Mast */}
      <line x1="80" y1="50" x2="80" y2="8" stroke="#6D4C41" strokeWidth="3" />

      {/* Sail */}
      <path d="M50,12 Q65,8 80,10 Q80,30 80,48 Q65,50 50,48 Q50,30 50,12 Z" fill="url(#tr-sail)" stroke="#BDBDBD" strokeWidth="0.8" />
      {/* Sail curve */}
      <path d="M52,20 Q65,16 78,20" stroke="#BDBDBD" strokeWidth="0.6" fill="none" />
      <path d="M51,30 Q65,26 79,30" stroke="#BDBDBD" strokeWidth="0.6" fill="none" />
      <path d="M51,40 Q65,36 79,40" stroke="#BDBDBD" strokeWidth="0.6" fill="none" />

      {/* Oars */}
      <line x1="35" y1="62" x2="28" y2="78" stroke="#8D6E63" strokeWidth="1.5" />
      <line x1="55" y1="62" x2="48" y2="78" stroke="#8D6E63" strokeWidth="1.5" />
      <line x1="95" y1="62" x2="88" y2="78" stroke="#8D6E63" strokeWidth="1.5" />
      <line x1="115" y1="62" x2="108" y2="78" stroke="#8D6E63" strokeWidth="1.5" />

      {/* Shield on side */}
      <circle cx="45" cy="56" r="5" fill="#1565C0" stroke="#FFD54F" strokeWidth="1" />
      <circle cx="70" cy="56" r="5" fill="#C62828" stroke="#FFD54F" strokeWidth="1" />
      <circle cx="95" cy="56" r="5" fill="#1565C0" stroke="#FFD54F" strokeWidth="1" />
      <circle cx="120" cy="56" r="5" fill="#C62828" stroke="#FFD54F" strokeWidth="1" />

      {/* Flag */}
      <path d="M80,8 L80,4 L95,6 L80,8" fill="#1565C0" />

      {/* Water line */}
      <path d="M5,80 Q20,76 40,80 Q60,84 80,80 Q100,76 120,80 Q140,84 155,80" stroke="#42A5F5" strokeWidth="1.5" fill="none" opacity="0.5" />
    </svg>
  );
};

export const TrojanGuard = ({ size = 100, mood: _mood = 'alert', className = '' }) => {
  const w = 100, h = 130;
  const skinColor = '#DEB887';

  return (
    <svg width={size} height={size * (h / w)} viewBox={`0 0 ${w} ${h}`} className={className}>
      <defs>
        <radialGradient id="tr-tgSkin" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#F0D5A8" />
          <stop offset="100%" stopColor={skinColor} />
        </radialGradient>
        <linearGradient id="tr-tgArmor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#B71C1C" />
          <stop offset="100%" stopColor="#8B0000" />
        </linearGradient>
        <linearGradient id="tr-tgHelmet" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C9B037" />
          <stop offset="100%" stopColor="#8B7320" />
        </linearGradient>
        <filter id="tr-tgShadow"><feDropShadow dx="0.5" dy="1" stdDeviation="1.5" floodOpacity="0.2" /></filter>
      </defs>

      {/* Legs */}
      <rect x="35" y="90" width="11" height="25" rx="4" fill={skinColor} />
      <rect x="54" y="90" width="11" height="25" rx="4" fill={skinColor} />
      <rect x="33" y="110" width="15" height="9" rx="3" fill="#8D6E63" />
      <rect x="52" y="110" width="15" height="9" rx="3" fill="#8D6E63" />

      {/* Tunic */}
      <path d="M30,58 L26,95 Q38,100 50,100 Q62,100 74,95 L70,58 Z" fill="url(#tr-tgArmor)" filter="url(#tr-tgShadow)" />
      <path d="M32,65 Q50,68 68,65" stroke="#7B0000" strokeWidth="0.8" opacity="0.5" />

      {/* Arms */}
      <path d="M30,62 Q18,74 20,88" stroke="url(#tr-tgArmor)" strokeWidth="8" strokeLinecap="round" fill="none" />
      <circle cx="20" cy="90" r="4" fill={skinColor} />
      <path d="M70,62 Q82,74 80,88" stroke="url(#tr-tgArmor)" strokeWidth="8" strokeLinecap="round" fill="none" />
      <circle cx="80" cy="90" r="4" fill={skinColor} />

      {/* Spear */}
      <line x1="82" y1="10" x2="82" y2="100" stroke="#6D4C41" strokeWidth="2" />
      <path d="M82,10 L78,18 L82,8 L86,18 Z" fill="#B0BEC5" />

      {/* Neck */}
      <rect x="43" y="38" width="14" height="8" rx="3" fill={skinColor} />

      {/* Head */}
      <ellipse cx="50" cy="24" rx="17" ry="19" fill="url(#tr-tgSkin)" filter="url(#tr-tgShadow)" />

      {/* Helmet */}
      <path d="M33,22 Q32,6 42,2 Q50,0 58,2 Q68,6 67,22" fill="url(#tr-tgHelmet)" />
      <path d="M50,0 Q52,-4 55,-2 Q58,0 60,-2" stroke="#C62828" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M34,22 Q42,25 50,25 Q58,25 66,22" stroke="#8B7320" strokeWidth="2" fill="none" />

      {/* Skin backdrop for eyes */}
      <ellipse cx="43" cy="24" rx="6" ry="4" fill={skinColor} />
      <ellipse cx="57" cy="24" rx="6" ry="4" fill={skinColor} />

      {/* Eyes */}
      <ellipse cx="43" cy="24" rx="4" ry="3.5" fill="white" stroke="#333" strokeWidth="0.8">
        <animate attributeName="ry" values="3.5;0.4;3.5" dur="4s" begin="1.6s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
      </ellipse>
      <circle cx="43" cy="24" r="2" fill="#4E342E">
        <animate attributeName="r" values="2;0.2;2" dur="4s" begin="1.6s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
      </circle>
      <circle cx="43.5" cy="23" r="0.8" fill="white">
        <animate attributeName="r" values="0.8;0;0.8" dur="4s" begin="1.6s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
      </circle>
      <ellipse cx="57" cy="24" rx="4" ry="3.5" fill="white" stroke="#333" strokeWidth="0.8">
        <animate attributeName="ry" values="3.5;0.4;3.5" dur="4s" begin="1.6s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
      </ellipse>
      <circle cx="57" cy="24" r="2" fill="#4E342E">
        <animate attributeName="r" values="2;0.2;2" dur="4s" begin="1.6s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
      </circle>
      <circle cx="57.5" cy="23" r="0.8" fill="white">
        <animate attributeName="r" values="0.8;0;0.8" dur="4s" begin="1.6s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
      </circle>

      {/* Nose */}
      <ellipse cx="50" cy="30" rx="1.5" ry="2" fill="#C9A06C" />

      {/* Mouth */}
      <path d="M44,35 Q50,38 56,35" stroke="#A0522D" strokeWidth="1.2" fill="none" />

      {/* Ears */}
      <ellipse cx="33" cy="26" rx="3" ry="4" fill={skinColor} />
      <ellipse cx="67" cy="26" rx="3" ry="4" fill={skinColor} />
    </svg>
  );
};

export const TrojanWall = ({ size = 200, className = '' }) => (
  <svg width={size} height={size * 0.5} viewBox="0 0 200 100" className={className}>
    <defs>
      <linearGradient id="tr-wallGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#BCAAA4" />
        <stop offset="60%" stopColor="#A1887F" />
        <stop offset="100%" stopColor="#8D6E63" />
      </linearGradient>
    </defs>

    {/* Main wall */}
    <rect x="0" y="20" width="200" height="80" fill="url(#tr-wallGrad)" />

    {/* Battlements */}
    <rect x="0" y="12" width="18" height="16" fill="#A1887F" />
    <rect x="26" y="12" width="18" height="16" fill="#A1887F" />
    <rect x="52" y="12" width="18" height="16" fill="#A1887F" />
    <rect x="78" y="12" width="18" height="16" fill="#A1887F" />
    <rect x="104" y="12" width="18" height="16" fill="#A1887F" />
    <rect x="130" y="12" width="18" height="16" fill="#A1887F" />
    <rect x="156" y="12" width="18" height="16" fill="#A1887F" />
    <rect x="182" y="12" width="18" height="16" fill="#A1887F" />

    {/* Gate */}
    <path d="M85,100 L85,50 Q100,40 115,50 L115,100" fill="#5D4037" stroke="#4E342E" strokeWidth="1.5" />
    <circle cx="108" cy="75" r="2.5" fill="#FFD54F" />

    {/* Stone lines */}
    <line x1="0" y1="40" x2="200" y2="40" stroke="#8D6E63" strokeWidth="0.5" opacity="0.4" />
    <line x1="0" y1="60" x2="200" y2="60" stroke="#8D6E63" strokeWidth="0.5" opacity="0.4" />
    <line x1="0" y1="80" x2="200" y2="80" stroke="#8D6E63" strokeWidth="0.5" opacity="0.4" />
    {/* Vertical stone joints */}
    <line x1="30" y1="20" x2="30" y2="40" stroke="#8D6E63" strokeWidth="0.5" opacity="0.3" />
    <line x1="70" y1="20" x2="70" y2="40" stroke="#8D6E63" strokeWidth="0.5" opacity="0.3" />
    <line x1="130" y1="20" x2="130" y2="40" stroke="#8D6E63" strokeWidth="0.5" opacity="0.3" />
    <line x1="170" y1="20" x2="170" y2="40" stroke="#8D6E63" strokeWidth="0.5" opacity="0.3" />
    <line x1="50" y1="40" x2="50" y2="60" stroke="#8D6E63" strokeWidth="0.5" opacity="0.3" />
    <line x1="150" y1="40" x2="150" y2="60" stroke="#8D6E63" strokeWidth="0.5" opacity="0.3" />
  </svg>
);

// ===== MOTU AND PATLU CHARACTERS =====

export const Motu = ({ size = 130, mood = 'happy', className = '' }) => {
  // Motu: round/fat, dark skin, bald head, big belly, loves samosas
  const eyeVariants = {
    happy: { leftEye: 'open', rightEye: 'open', mouth: 'grin' },
    excited: { leftEye: 'wide', rightEye: 'wide', mouth: 'open' },
    eating: { leftEye: 'closed', rightEye: 'closed', mouth: 'open-wide' },
    scared: { leftEye: 'wide', rightEye: 'wide', mouth: 'O' },
    thinking: { leftEye: 'squint', rightEye: 'open', mouth: 'flat' },
    proud: { leftEye: 'open', rightEye: 'open', mouth: 'smirk' },
    sad: { leftEye: 'droopy', rightEye: 'droopy', mouth: 'frown' },
  };
  const v = eyeVariants[mood] || eyeVariants.happy;

  return (
    <svg width={size} height={size * 1.25} viewBox="0 0 130 165" className={className}>
      <defs>
        <radialGradient id="mp-motuSkin" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#D2A06F" />
          <stop offset="100%" stopColor="#B8864E" />
        </radialGradient>
        <linearGradient id="mp-motuShirt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E53935" />
          <stop offset="100%" stopColor="#C62828" />
        </linearGradient>
        <linearGradient id="mp-motuPants" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1565C0" />
          <stop offset="100%" stopColor="#0D47A1" />
        </linearGradient>
      </defs>

      {/* Legs */}
      <rect x="42" y="132" width="16" height="28" rx="6" fill="url(#mp-motuPants)" />
      <rect x="72" y="132" width="16" height="28" rx="6" fill="url(#mp-motuPants)" />
      {/* Shoes */}
      <ellipse cx="50" cy="162" rx="12" ry="5" fill="#5D4037" />
      <ellipse cx="80" cy="162" rx="12" ry="5" fill="#5D4037" />

      {/* Big round body/belly */}
      <ellipse cx="65" cy="110" rx="38" ry="32" fill="url(#mp-motuShirt)" />
      {/* Belly bulge line */}
      <path d="M40,115 Q65,130 90,115" fill="none" stroke="#B71C1C" strokeWidth="1" opacity="0.3" />

      {/* Arms */}
      <rect x="20" y="92" width="14" height="30" rx="7" fill="url(#mp-motuSkin)" />
      <circle cx="27" cy="124" r="6" fill="url(#mp-motuSkin)" />
      <rect x="96" y="92" width="14" height="30" rx="7" fill="url(#mp-motuSkin)" />
      <circle cx="103" cy="124" r="6" fill="url(#mp-motuSkin)" />

      {/* Head - big round */}
      <circle cx="65" cy="48" r="35" fill="url(#mp-motuSkin)" />

      {/* Bald head shine */}
      <ellipse cx="55" cy="25" rx="14" ry="7" fill="rgba(255,255,255,0.15)" />

      {/* Ears */}
      <ellipse cx="30" cy="50" rx="7" ry="9" fill="url(#mp-motuSkin)" />
      <ellipse cx="30" cy="50" rx="4" ry="5" fill="#C49660" />
      <ellipse cx="100" cy="50" rx="7" ry="9" fill="url(#mp-motuSkin)" />
      <ellipse cx="100" cy="50" rx="4" ry="5" fill="#C49660" />

      {/* Eyes - white bg */}
      <ellipse cx="52" cy="46" rx="8" ry="9" fill="white" />
      <ellipse cx="78" cy="46" rx="8" ry="9" fill="white" />

      {/* Pupils */}
      {v.leftEye === 'closed' || v.leftEye === 'squint' ? (
        <>
          <ellipse cx="52" cy="46" rx="8" ry="9" fill="url(#mp-motuSkin)" />
          <path d="M44,46 Q52,50 60,46" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" />
        </>
      ) : (
        <circle cx={v.leftEye === 'wide' ? 53 : 52} cy="46" r={v.leftEye === 'wide' ? 5 : 4} fill="#1A1A1A" />
      )}
      {v.rightEye === 'closed' || v.rightEye === 'droopy' ? (
        <>
          <ellipse cx="78" cy="46" rx="8" ry="9" fill="url(#mp-motuSkin)" />
          <path d="M70,46 Q78,50 86,46" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" />
        </>
      ) : (
        <circle cx={v.rightEye === 'wide' ? 79 : 78} cy="46" r={v.rightEye === 'wide' ? 5 : 4} fill="#1A1A1A" />
      )}

      {/* Eye shine */}
      {v.leftEye !== 'closed' && v.leftEye !== 'squint' && <circle cx="54" cy="44" r="1.5" fill="white" />}
      {v.rightEye !== 'closed' && v.rightEye !== 'droopy' && <circle cx="80" cy="44" r="1.5" fill="white" />}

      {/* Eyebrows */}
      <path d="M43,36 Q52,32 60,36" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M70,36 Q78,32 87,36" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round" />

      {/* Nose */}
      <ellipse cx="65" cy="56" rx="5" ry="4" fill="#C49660" />

      {/* Mouth */}
      {v.mouth === 'grin' && <path d="M50,65 Q65,78 80,65" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" />}
      {v.mouth === 'open' && <ellipse cx="65" cy="68" rx="8" ry="6" fill="#333" />}
      {v.mouth === 'open-wide' && <ellipse cx="65" cy="70" rx="12" ry="8" fill="#333" />}
      {v.mouth === 'O' && <circle cx="65" cy="68" r="6" fill="#333" />}
      {v.mouth === 'flat' && <line x1="55" y1="67" x2="75" y2="67" stroke="#333" strokeWidth="2" strokeLinecap="round" />}
      {v.mouth === 'smirk' && <path d="M55,65 Q65,72 75,63" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" />}
      {v.mouth === 'frown' && <path d="M52,70 Q65,62 78,70" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" />}

      {/* Mustache */}
      <path d="M48,60 Q55,65 65,60 Q75,65 82,60" fill="none" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
};

export const Patlu = ({ size = 120, mood = 'happy', className = '' }) => {
  // Patlu: thin/tall, lighter skin, black hair, glasses, intelligent
  const eyeVariants = {
    happy: { leftEye: 'open', rightEye: 'open', mouth: 'smile' },
    smart: { leftEye: 'open', rightEye: 'open', mouth: 'smirk' },
    scared: { leftEye: 'wide', rightEye: 'wide', mouth: 'O' },
    thinking: { leftEye: 'squint', rightEye: 'open', mouth: 'flat' },
    excited: { leftEye: 'wide', rightEye: 'wide', mouth: 'grin' },
    proud: { leftEye: 'open', rightEye: 'open', mouth: 'grin' },
    worried: { leftEye: 'droopy', rightEye: 'droopy', mouth: 'frown' },
  };
  const v = eyeVariants[mood] || eyeVariants.happy;

  return (
    <svg width={size} height={size * 1.4} viewBox="0 0 110 155" className={className}>
      <defs>
        <radialGradient id="mp-patluSkin" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#FDDCB5" />
          <stop offset="100%" stopColor="#E8C49A" />
        </radialGradient>
        <linearGradient id="mp-patluShirt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FDD835" />
          <stop offset="100%" stopColor="#F9A825" />
        </linearGradient>
        <linearGradient id="mp-patluPants" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#43A047" />
          <stop offset="100%" stopColor="#2E7D32" />
        </linearGradient>
      </defs>

      {/* Legs - thin */}
      <rect x="38" y="122" width="12" height="28" rx="5" fill="url(#mp-patluPants)" />
      <rect x="60" y="122" width="12" height="28" rx="5" fill="url(#mp-patluPants)" />
      {/* Shoes */}
      <ellipse cx="44" cy="152" rx="10" ry="4" fill="#4E342E" />
      <ellipse cx="66" cy="152" rx="10" ry="4" fill="#4E342E" />

      {/* Slim body */}
      <ellipse cx="55" cy="105" rx="24" ry="25" fill="url(#mp-patluShirt)" />

      {/* Arms - thin */}
      <rect x="22" y="88" width="10" height="28" rx="5" fill="url(#mp-patluSkin)" />
      <circle cx="27" cy="118" r="5" fill="url(#mp-patluSkin)" />
      <rect x="78" y="88" width="10" height="28" rx="5" fill="url(#mp-patluSkin)" />
      <circle cx="83" cy="118" r="5" fill="url(#mp-patluSkin)" />

      {/* Head - slightly oval */}
      <ellipse cx="55" cy="42" rx="28" ry="32" fill="url(#mp-patluSkin)" />

      {/* Hair - black, on top */}
      <path d="M27,35 Q30,8 55,5 Q80,8 83,35" fill="#1A1A1A" />
      <path d="M35,12 Q55,2 75,12" fill="#1A1A1A" />

      {/* Ears */}
      <ellipse cx="27" cy="44" rx="5" ry="7" fill="url(#mp-patluSkin)" />
      <ellipse cx="27" cy="44" rx="3" ry="4" fill="#E0B080" />
      <ellipse cx="83" cy="44" rx="5" ry="7" fill="url(#mp-patluSkin)" />
      <ellipse cx="83" cy="44" rx="3" ry="4" fill="#E0B080" />

      {/* Glasses frames */}
      <circle cx="44" cy="42" r="11" fill="none" stroke="#333" strokeWidth="2.5" />
      <circle cx="66" cy="42" r="11" fill="none" stroke="#333" strokeWidth="2.5" />
      <line x1="55" y1="42" x2="55" y2="42" stroke="#333" strokeWidth="2.5" />
      <path d="M55,40 L55,42" stroke="#333" strokeWidth="2.5" />
      <line x1="33" y1="42" x2="27" y2="42" stroke="#333" strokeWidth="2" />
      <line x1="77" y1="42" x2="83" y2="42" stroke="#333" strokeWidth="2" />

      {/* Eyes behind glasses - white bg */}
      <ellipse cx="44" cy="42" rx="7" ry="7.5" fill="white" />
      <ellipse cx="66" cy="42" rx="7" ry="7.5" fill="white" />

      {/* Pupils */}
      {v.leftEye === 'closed' || v.leftEye === 'squint' ? (
        <>
          <ellipse cx="44" cy="42" rx="7" ry="7.5" fill="url(#mp-patluSkin)" />
          <path d="M37,42 Q44,46 51,42" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
        </>
      ) : v.leftEye === 'droopy' ? (
        <>
          <circle cx="44" cy="43" r="3.5" fill="#1A1A1A" />
          <path d="M37,38 Q44,41 51,38" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
        </>
      ) : (
        <circle cx="44" cy="42" r={v.leftEye === 'wide' ? 4.5 : 3.5} fill="#1A1A1A" />
      )}
      {v.rightEye === 'closed' || v.rightEye === 'droopy' ? (
        <>
          <ellipse cx="66" cy="42" rx="7" ry="7.5" fill="url(#mp-patluSkin)" />
          <path d="M59,42 Q66,46 73,42" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
        </>
      ) : (
        <circle cx="66" cy="42" r={v.rightEye === 'wide' ? 4.5 : 3.5} fill="#1A1A1A" />
      )}

      {/* Eye shine */}
      {v.leftEye !== 'closed' && v.leftEye !== 'squint' && <circle cx="46" cy="40" r="1.2" fill="white" />}
      {v.rightEye !== 'closed' && v.rightEye !== 'droopy' && <circle cx="68" cy="40" r="1.2" fill="white" />}

      {/* Nose */}
      <ellipse cx="55" cy="52" rx="3.5" ry="3" fill="#E0B080" />

      {/* Mouth */}
      {v.mouth === 'smile' && <path d="M45,60 Q55,68 65,60" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />}
      {v.mouth === 'grin' && <path d="M42,60 Q55,72 68,60" fill="none" stroke="#333" strokeWidth="1.8" strokeLinecap="round" />}
      {v.mouth === 'O' && <circle cx="55" cy="62" r="5" fill="#333" />}
      {v.mouth === 'flat' && <line x1="47" y1="62" x2="63" y2="62" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />}
      {v.mouth === 'smirk' && <path d="M47,60 Q55,65 63,58" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />}
      {v.mouth === 'frown' && <path d="M45,64 Q55,58 65,64" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />}
    </svg>
  );
};

export const Samosa = ({ size = 60, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" className={className}>
    <defs>
      <linearGradient id="mp-samosaGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFB74D" />
        <stop offset="100%" stopColor="#E68A00" />
      </linearGradient>
    </defs>
    <path d="M30,8 L52,48 L8,48 Z" fill="url(#mp-samosaGrad)" stroke="#D47A00" strokeWidth="1.5" />
    <path d="M22,30 Q30,25 38,30" fill="none" stroke="#D47A00" strokeWidth="1" opacity="0.5" />
    <path d="M18,38 Q30,33 42,38" fill="none" stroke="#D47A00" strokeWidth="1" opacity="0.4" />
    {/* Crispy texture dots */}
    <circle cx="28" cy="22" r="1" fill="#D47A00" opacity="0.4" />
    <circle cx="34" cy="28" r="1" fill="#D47A00" opacity="0.3" />
    <circle cx="24" cy="36" r="1" fill="#D47A00" opacity="0.35" />
    <circle cx="38" cy="38" r="1" fill="#D47A00" opacity="0.3" />
  </svg>
);

export const ChingumInspector = ({ size = 120, mood = 'alert', className = '' }) => {
  // Inspector Chingum - police inspector, khaki uniform, cap, mustache
  return (
    <svg width={size} height={size * 1.35} viewBox="0 0 120 162" className={className}>
      <defs>
        <linearGradient id="mp-khaki" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C8B560" />
          <stop offset="100%" stopColor="#A69540" />
        </linearGradient>
        <radialGradient id="mp-chingSkin" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#D2A06F" />
          <stop offset="100%" stopColor="#C49050" />
        </radialGradient>
      </defs>

      {/* Legs */}
      <rect x="40" y="128" width="13" height="28" rx="5" fill="url(#mp-khaki)" />
      <rect x="67" y="128" width="13" height="28" rx="5" fill="url(#mp-khaki)" />
      <ellipse cx="47" cy="158" rx="10" ry="4" fill="#333" />
      <ellipse cx="73" cy="158" rx="10" ry="4" fill="#333" />

      {/* Body - khaki uniform */}
      <ellipse cx="60" cy="108" rx="28" ry="28" fill="url(#mp-khaki)" />
      {/* Belt */}
      <rect x="32" y="118" width="56" height="5" rx="2" fill="#5D4037" />
      <rect x="56" y="117" width="8" height="7" rx="1" fill="#FFD54F" />

      {/* Arms */}
      <rect x="24" y="90" width="11" height="28" rx="5" fill="url(#mp-khaki)" />
      <circle cx="30" cy="120" r="5" fill="url(#mp-chingSkin)" />
      <rect x="85" y="90" width="11" height="28" rx="5" fill="url(#mp-khaki)" />
      <circle cx="90" cy="120" r="5" fill="url(#mp-chingSkin)" />

      {/* Head */}
      <ellipse cx="60" cy="48" rx="26" ry="30" fill="url(#mp-chingSkin)" />

      {/* Police cap */}
      <path d="M34,35 Q60,18 86,35" fill="#333" />
      <rect x="34" y="32" width="52" height="8" rx="3" fill="#333" />
      <rect x="50" y="28" width="20" height="6" rx="2" fill="#FFD54F" />

      {/* Eyes */}
      <ellipse cx="48" cy="48" rx="6" ry="6.5" fill="white">
        <animate attributeName="ry" values="6.5;0.5;6.5" dur="4.5s" begin="2.8s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
      </ellipse>
      <ellipse cx="72" cy="48" rx="6" ry="6.5" fill="white">
        <animate attributeName="ry" values="6.5;0.5;6.5" dur="4.5s" begin="2.8s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
      </ellipse>
      <circle cx="48" cy="48" r={mood === 'alert' ? 3.5 : 3} fill="#1A1A1A">
        <animate attributeName="r" values="3;0.3;3" dur="4.5s" begin="2.8s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
      </circle>
      <circle cx="72" cy="48" r={mood === 'alert' ? 3.5 : 3} fill="#1A1A1A">
        <animate attributeName="r" values="3;0.3;3" dur="4.5s" begin="2.8s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
      </circle>
      <circle cx="50" cy="46" r="1" fill="white">
        <animate attributeName="r" values="1;0;1" dur="4.5s" begin="2.8s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
      </circle>
      <circle cx="74" cy="46" r="1" fill="white">
        <animate attributeName="r" values="1;0;1" dur="4.5s" begin="2.8s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
      </circle>

      {/* Eyebrows - stern */}
      <path d="M40,40 L56,38" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M64,38 L80,40" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round" />

      {/* Nose */}
      <ellipse cx="60" cy="55" rx="4" ry="3" fill="#C49050" />

      {/* Big mustache */}
      <path d="M42,62 Q48,58 60,62 Q72,58 78,62" fill="none" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" />
      <path d="M40,63 Q42,68 46,64" fill="#1A1A1A" />
      <path d="M80,63 Q78,68 74,64" fill="#1A1A1A" />

      {/* Mouth */}
      {mood === 'alert' ? (
        <path d="M50,68 Q60,72 70,68" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
      ) : (
        <line x1="50" y1="68" x2="70" y2="68" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
      )}
    </svg>
  );
};

export const SamosaShop = ({ size = 180, className = '' }) => (
  <svg width={size} height={size * 0.65} viewBox="0 0 180 118" className={className}>
    <defs>
      <linearGradient id="mp-shopFront" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFCC80" />
        <stop offset="100%" stopColor="#FFB74D" />
      </linearGradient>
    </defs>
    {/* Shop building */}
    <rect x="10" y="30" width="160" height="85" rx="4" fill="url(#mp-shopFront)" />
    {/* Roof */}
    <path d="M5,30 L90,5 L175,30" fill="#E65100" stroke="#BF360C" strokeWidth="1" />
    {/* Sign board */}
    <rect x="40" y="12" width="100" height="20" rx="4" fill="#FFF3E0" stroke="#E65100" strokeWidth="1" />
    <text x="90" y="27" textAnchor="middle" fontSize="10" fill="#E65100" fontWeight="bold">SAMOSA SHOP</text>
    {/* Counter */}
    <rect x="25" y="70" width="130" height="8" rx="2" fill="#8D6E63" />
    {/* Samosas on display */}
    <polygon points="45,68 55,52 65,68" fill="#FFB74D" stroke="#E68A00" strokeWidth="1" />
    <polygon points="70,68 80,52 90,68" fill="#FFB74D" stroke="#E68A00" strokeWidth="1" />
    <polygon points="95,68 105,52 115,68" fill="#FFB74D" stroke="#E68A00" strokeWidth="1" />
    <polygon points="120,68 130,52 140,68" fill="#FFB74D" stroke="#E68A00" strokeWidth="1" />
    {/* Door */}
    <rect x="75" y="85" width="30" height="30" rx="2" fill="#5D4037" />
    <circle cx="100" cy="100" r="2" fill="#FFD54F" />
    {/* Window */}
    <rect x="30" y="40" width="25" height="20" rx="2" fill="#81D4FA" stroke="#5D4037" strokeWidth="1" />
    <line x1="42" y1="40" x2="42" y2="60" stroke="#5D4037" strokeWidth="0.5" />
    <rect x="125" y="40" width="25" height="20" rx="2" fill="#81D4FA" stroke="#5D4037" strokeWidth="1" />
    <line x1="137" y1="40" x2="137" y2="60" stroke="#5D4037" strokeWidth="0.5" />
  </svg>
);

// ============ HANUMAN - Monkey God ============
export const Hanuman = ({ size = 130, mood = 'determined', className = '' }) => {
  const moodFace = {
    baby: { eyes: 'round-big', mouth: 'smile-small' },
    flying: { eyes: 'focused', mouth: 'grin' },
    determined: { eyes: 'fierce', mouth: 'firm' },
    blessed: { eyes: 'closed', mouth: 'serene' },
    healed: { eyes: 'gentle', mouth: 'smile' },
  }[mood] || { eyes: 'fierce', mouth: 'firm' };
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={className}>
      {/* Body */}
      <ellipse cx="60" cy="85" rx="22" ry="25" fill="#FF8F00" />
      {/* Arms - muscular */}
      <rect x="30" y="70" width="12" height="30" rx="6" fill="#FF8F00" />
      <rect x="78" y="70" width="12" height="30" rx="6" fill="#FF8F00" />
      {/* Gada/Mace in right hand */}
      <rect x="82" y="55" width="5" height="40" rx="2" fill="#8D6E63" />
      <circle cx="84" cy="52" r="8" fill="#FFD54F" stroke="#FFA000" strokeWidth="1.5" />
      {/* Head */}
      <circle cx="60" cy="40" r="22" fill="#FF8F00" />
      {/* Face - lighter */}
      <ellipse cx="60" cy="44" rx="15" ry="14" fill="#FFCC80" />
      {/* Crown */}
      <path d="M45,28 L50,18 L55,25 L60,14 L65,25 L70,18 L75,28" fill="#FFD700" stroke="#FFA000" strokeWidth="1" />
      {/* Eyes */}
      {moodFace.eyes === 'round-big' ? (
        <><circle cx="53" cy="40" r="4" fill="#1A1A1A" /><circle cx="67" cy="40" r="4" fill="#1A1A1A" /></>
      ) : moodFace.eyes === 'closed' ? (
        <><path d="M49,40 Q53,43 57,40" fill="none" stroke="#333" strokeWidth="1.5" /><path d="M63,40 Q67,43 71,40" fill="none" stroke="#333" strokeWidth="1.5" /></>
      ) : (
        <><ellipse cx="53" cy="40" rx="3" ry="3.5" fill="#1A1A1A" /><ellipse cx="67" cy="40" rx="3" ry="3.5" fill="#1A1A1A" /></>
      )}
      {/* Mouth */}
      {moodFace.mouth === 'smile-small' ? (
        <path d="M55,50 Q60,54 65,50" fill="none" stroke="#333" strokeWidth="1.2" />
      ) : moodFace.mouth === 'grin' ? (
        <path d="M52,49 Q60,56 68,49" fill="none" stroke="#333" strokeWidth="1.5" />
      ) : moodFace.mouth === 'serene' ? (
        <path d="M54,50 Q60,52 66,50" fill="none" stroke="#333" strokeWidth="1.2" />
      ) : (
        <line x1="54" y1="51" x2="66" y2="51" stroke="#333" strokeWidth="1.5" />
      )}
      {/* Tail */}
      <path d="M40,95 Q20,80 25,60 Q28,50 35,55" fill="none" stroke="#FF8F00" strokeWidth="5" strokeLinecap="round" />
      {/* Legs */}
      <rect x="50" y="105" width="8" height="12" rx="4" fill="#FF8F00" />
      <rect x="62" y="105" width="8" height="12" rx="4" fill="#FF8F00" />
      {mood === 'flying' && <path d="M30,90 Q60,110 90,90" fill="none" stroke="#FFE082" strokeWidth="2" strokeDasharray="3,3" />}
    </svg>
  );
};

// ============ SURYA - Sun God ============
export const Surya = ({ size = 130, mood = 'calm', className = '' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={className}>
      {/* Rays */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
        <line key={angle} x1="60" y1="60" x2={60 + 50 * Math.cos(angle * Math.PI / 180)} y2={60 + 50 * Math.sin(angle * Math.PI / 180)} stroke="#FFD54F" strokeWidth="3" strokeLinecap="round" />
      ))}
      {/* Outer glow */}
      <circle cx="60" cy="60" r="35" fill="#FFC107" />
      {/* Face circle */}
      <circle cx="60" cy="60" r="28" fill="#FFD54F" />
      {/* Eyes */}
      {mood === 'surprised' ? (
        <><circle cx="52" cy="55" r="4" fill="#1A1A1A" /><circle cx="68" cy="55" r="4" fill="#1A1A1A" /></>
      ) : (
        <><ellipse cx="52" cy="56" rx="3" ry="2.5" fill="#1A1A1A" /><ellipse cx="68" cy="56" rx="3" ry="2.5" fill="#1A1A1A" /></>
      )}
      {/* Mouth */}
      {mood === 'surprised' ? (
        <circle cx="60" cy="68" r="4" fill="#E65100" />
      ) : (
        <path d="M52,67 Q60,73 68,67" fill="none" stroke="#E65100" strokeWidth="1.5" />
      )}
      {/* Warm blush */}
      <circle cx="45" cy="62" r="4" fill="#FFAB91" opacity="0.4" />
      <circle cx="75" cy="62" r="4" fill="#FFAB91" opacity="0.4" />
    </svg>
  );
};

// ============ INDRA - Thunder God ============
export const Indra = ({ size = 130, mood = 'worried', className = '' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={className}>
      {/* Body */}
      <rect x="42" y="55" width="36" height="40" rx="8" fill="#1565C0" />
      {/* Arms */}
      <rect x="28" y="58" width="14" height="8" rx="4" fill="#1976D2" />
      <rect x="78" y="58" width="14" height="8" rx="4" fill="#1976D2" />
      {/* Vajra (thunderbolt) in hand */}
      <polygon points="90,45 95,55 92,55 96,65 88,65 92,55 89,55" fill="#FFD700" stroke="#FFA000" strokeWidth="0.5" />
      {/* Head */}
      <circle cx="60" cy="35" r="20" fill="#1976D2" />
      {/* Crown */}
      <rect x="45" y="16" width="30" height="8" rx="2" fill="#FFD700" />
      <circle cx="60" cy="16" r="4" fill="#FF5722" />
      {/* Eyes */}
      {mood === 'angry' ? (
        <><path d="M50,32 L56,34" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" /><path d="M64,34 L70,32" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" /></>
      ) : (
        <><circle cx="53" cy="34" r="2.5" fill="#FFF" /><circle cx="67" cy="34" r="2.5" fill="#FFF" /></>
      )}
      {/* Mouth */}
      {mood === 'angry' ? (
        <path d="M54,42 Q60,39 66,42" fill="none" stroke="#FFF" strokeWidth="1.2" />
      ) : (
        <path d="M54,42 Q60,45 66,42" fill="none" stroke="#FFF" strokeWidth="1.2" />
      )}
      {/* Legs */}
      <rect x="48" y="93" width="8" height="14" rx="4" fill="#1976D2" />
      <rect x="64" y="93" width="8" height="14" rx="4" fill="#1976D2" />
    </svg>
  );
};

// ============ VAYU - Wind God ============
export const Vayu = ({ size = 130, mood = 'angry', className = '' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={className}>
      {/* Flowing robes */}
      <path d="M40,50 Q60,45 80,50 L85,100 Q60,105 35,100 Z" fill="#B0BEC5" opacity="0.8" />
      <path d="M35,60 Q25,70 30,90" fill="none" stroke="#78909C" strokeWidth="3" strokeLinecap="round" />
      <path d="M85,60 Q95,70 90,90" fill="none" stroke="#78909C" strokeWidth="3" strokeLinecap="round" />
      {/* Wind swirls */}
      <path d="M10,40 Q20,35 30,40 Q40,45 50,38" fill="none" stroke="#90CAF9" strokeWidth="2" opacity="0.6" />
      <path d="M70,30 Q80,25 90,30 Q100,35 110,28" fill="none" stroke="#90CAF9" strokeWidth="2" opacity="0.6" />
      {/* Head */}
      <circle cx="60" cy="32" r="18" fill="#B0BEC5" />
      {/* Face */}
      <circle cx="60" cy="34" r="14" fill="#E0E0E0" />
      {/* Eyes */}
      {mood === 'angry' ? (
        <><path d="M52,30 L57,33" stroke="#333" strokeWidth="2" /><path d="M68,30 L63,33" stroke="#333" strokeWidth="2" /></>
      ) : (
        <><circle cx="54" cy="32" r="2" fill="#333" /><circle cx="66" cy="32" r="2" fill="#333" /></>
      )}
      {/* Mouth */}
      {mood === 'angry' ? (
        <path d="M54,40 Q60,37 66,40" fill="none" stroke="#333" strokeWidth="1.5" />
      ) : (
        <path d="M54,40 Q60,43 66,40" fill="none" stroke="#333" strokeWidth="1.2" />
      )}
      {/* Legs */}
      <rect x="50" y="98" width="7" height="14" rx="3" fill="#78909C" />
      <rect x="63" y="98" width="7" height="14" rx="3" fill="#78909C" />
    </svg>
  );
};

// ============ ANJANA - Hanuman's Mother ============
export const Anjana = ({ size = 130, mood = 'loving', className = '' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={className}>
      {/* Body */}
      <ellipse cx="60" cy="80" rx="20" ry="24" fill="#F57C00" />
      {/* Sari drape */}
      <path d="M42,65 Q60,60 78,65 L75,100 Q60,103 45,100 Z" fill="#E91E63" opacity="0.7" />
      {/* Head */}
      <circle cx="60" cy="38" r="20" fill="#FFB74D" />
      {/* Ears */}
      <ellipse cx="40" cy="35" rx="6" ry="8" fill="#FFB74D" />
      <ellipse cx="80" cy="35" rx="6" ry="8" fill="#FFB74D" />
      {/* Face */}
      <ellipse cx="60" cy="42" rx="14" ry="13" fill="#FFCC80" />
      {/* Eyes */}
      <ellipse cx="54" cy="39" rx="2.5" ry="3" fill="#1A1A1A" />
      <ellipse cx="66" cy="39" rx="2.5" ry="3" fill="#1A1A1A" />
      {/* Bindi */}
      <circle cx="60" cy="32" r="2" fill="#E91E63" />
      {/* Mouth */}
      {mood === 'loving' ? (
        <path d="M54,48 Q60,53 66,48" fill="none" stroke="#333" strokeWidth="1.2" />
      ) : (
        <path d="M54,48 Q60,45 66,48" fill="none" stroke="#333" strokeWidth="1.2" />
      )}
      {/* Tail */}
      <path d="M42,95 Q30,85 32,70" fill="none" stroke="#F57C00" strokeWidth="4" strokeLinecap="round" />
      {/* Legs */}
      <rect x="50" y="100" width="7" height="12" rx="3" fill="#FFB74D" />
      <rect x="63" y="100" width="7" height="12" rx="3" fill="#FFB74D" />
    </svg>
  );
};

// ============ GANESHA - Elephant God ============
export const Ganesha = ({ size = 130, mood = 'happy', className = '' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={className}>
      {/* Chubby body */}
      <ellipse cx="60" cy="78" rx="28" ry="30" fill="#FF7043" />
      {/* Belly */}
      <ellipse cx="60" cy="82" rx="18" ry="18" fill="#FFAB91" />
      {/* Arms */}
      <rect x="28" y="65" width="10" height="22" rx="5" fill="#FF7043" />
      <rect x="82" y="65" width="10" height="22" rx="5" fill="#FF7043" />
      {/* Modak in left hand */}
      <circle cx="32" cy="90" r="5" fill="#FFE0B2" stroke="#FF8F00" strokeWidth="1" />
      {/* Head */}
      <circle cx="60" cy="35" r="24" fill="#FF7043" />
      {/* Trunk */}
      <path d="M60,45 Q55,55 50,60 Q47,63 50,65" fill="none" stroke="#FF7043" strokeWidth="8" strokeLinecap="round" />
      {/* Ears */}
      <ellipse cx="36" cy="35" rx="12" ry="15" fill="#FF8A65" />
      <ellipse cx="84" cy="35" rx="12" ry="15" fill="#FF8A65" />
      {/* Eyes */}
      {mood === 'wise' ? (
        <><path d="M50,30 Q53,33 56,30" fill="none" stroke="#1A1A1A" strokeWidth="1.5" /><path d="M64,30 Q67,33 70,30" fill="none" stroke="#1A1A1A" strokeWidth="1.5" /></>
      ) : (
        <><circle cx="52" cy="30" r="3" fill="#1A1A1A" /><circle cx="68" cy="30" r="3" fill="#1A1A1A" /></>
      )}
      {/* Crown */}
      <path d="M45,14 L50,6 L55,12 L60,4 L65,12 L70,6 L75,14" fill="#FFD700" />
      {/* Tusk */}
      <path d="M65,42 L68,50" stroke="#FFFDE7" strokeWidth="3" strokeLinecap="round" />
      {/* Mouth/smile */}
      {mood === 'sad' ? (
        <path d="M50,52 Q55,49 60,52" fill="none" stroke="#333" strokeWidth="1" />
      ) : mood === 'playful' ? (
        <path d="M48,50 Q55,56 62,50" fill="none" stroke="#333" strokeWidth="1.5" />
      ) : (
        <path d="M50,50 Q55,54 60,50" fill="none" stroke="#333" strokeWidth="1.2" />
      )}
      {/* Legs */}
      <rect x="47" y="104" width="10" height="12" rx="5" fill="#FF7043" />
      <rect x="63" y="104" width="10" height="12" rx="5" fill="#FF7043" />
    </svg>
  );
};

// ============ MOONGOD - Moon God ============
export const MoonGod = ({ size = 130, mood = 'calm', className = '' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={className}>
      {/* Glow */}
      <circle cx="60" cy="55" r="42" fill="#E3F2FD" opacity="0.4" />
      {/* Crescent shape */}
      <path d="M35,55 A30,30 0 1,1 85,55 A22,22 0 1,0 35,55" fill="#F5F5F5" stroke="#BDBDBD" strokeWidth="1" />
      {/* Face on crescent */}
      <circle cx="55" cy="48" r="3" fill="#333" />
      <circle cx="70" cy="48" r="3" fill="#333" />
      {/* Mouth */}
      {mood === 'embarrassed' ? (
        <><path d="M56,60 Q62,63 68,60" fill="none" stroke="#333" strokeWidth="1" /><circle cx="48" cy="55" r="4" fill="#FFCDD2" opacity="0.6" /><circle cx="76" cy="55" r="4" fill="#FFCDD2" opacity="0.6" /></>
      ) : mood === 'angry' ? (
        <path d="M56,62 Q62,59 68,62" fill="none" stroke="#333" strokeWidth="1.5" />
      ) : (
        <path d="M56,60 Q62,64 68,60" fill="none" stroke="#333" strokeWidth="1.2" />
      )}
      {/* Stars around */}
      <circle cx="20" cy="25" r="2" fill="#FFD54F" />
      <circle cx="95" cy="30" r="1.5" fill="#FFD54F" />
      <circle cx="100" cy="80" r="2" fill="#FFD54F" />
      <circle cx="15" cy="85" r="1.5" fill="#FFD54F" />
    </svg>
  );
};

// ============ SHIVA - The Destroyer ============
export const Shiva = ({ size = 130, mood = 'meditating', className = '' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={className}>
      {/* Body */}
      <rect x="44" y="55" width="32" height="38" rx="8" fill="#1E88E5" />
      {/* Tiger skin wrap */}
      <rect x="44" y="80" width="32" height="13" rx="3" fill="#FF8F00" />
      <line x1="50" y1="83" x2="50" y2="93" stroke="#5D4037" strokeWidth="1" />
      <line x1="60" y1="83" x2="60" y2="93" stroke="#5D4037" strokeWidth="1" />
      <line x1="70" y1="83" x2="70" y2="93" stroke="#5D4037" strokeWidth="1" />
      {/* Arms */}
      <rect x="30" y="58" width="14" height="7" rx="3" fill="#1E88E5" />
      <rect x="76" y="58" width="14" height="7" rx="3" fill="#1E88E5" />
      {/* Trident */}
      <line x1="92" y1="20" x2="92" y2="95" stroke="#8D6E63" strokeWidth="2.5" />
      <path d="M85,22 L92,10 L99,22 M88,22 L92,14 L96,22" fill="none" stroke="#9E9E9E" strokeWidth="2" />
      {/* Head */}
      <circle cx="60" cy="35" r="18" fill="#1E88E5" />
      {/* Matted hair */}
      <path d="M42,28 Q50,15 60,18 Q70,15 78,28" fill="#5D4037" />
      {/* Crescent on head */}
      <path d="M50,18 A6,6 0 0,1 62,18" fill="none" stroke="#F5F5F5" strokeWidth="2" />
      {/* Third eye */}
      <ellipse cx="60" cy="27" rx="2.5" ry="1.5" fill="#FF5722" />
      {/* Eyes */}
      {mood === 'meditating' ? (
        <><path d="M52,35 Q55,37 58,35" fill="none" stroke="#FFF" strokeWidth="1.2" /><path d="M62,35 Q65,37 68,35" fill="none" stroke="#FFF" strokeWidth="1.2" /></>
      ) : mood === 'angry' ? (
        <><circle cx="54" cy="35" r="2.5" fill="#FF1744" /><circle cx="66" cy="35" r="2.5" fill="#FF1744" /></>
      ) : (
        <><circle cx="54" cy="35" r="2" fill="#FFF" /><circle cx="66" cy="35" r="2" fill="#FFF" /></>
      )}
      {/* Mouth */}
      {mood === 'pleased' ? (
        <path d="M54,42 Q60,46 66,42" fill="none" stroke="#FFF" strokeWidth="1" />
      ) : (
        <line x1="55" y1="43" x2="65" y2="43" stroke="#FFF" strokeWidth="1" />
      )}
      {/* Legs - crossed if meditating */}
      {mood === 'meditating' ? (
        <path d="M44,93 Q50,100 60,98 Q70,100 76,93" fill="#1E88E5" />
      ) : (
        <><rect x="48" y="93" width="8" height="14" rx="4" fill="#1E88E5" /><rect x="64" y="93" width="8" height="14" rx="4" fill="#1E88E5" /></>
      )}
    </svg>
  );
};

// ============ PRAHLAD - Devotee Boy ============
export const Prahlad = ({ size = 130, mood = 'praying', className = '' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={className}>
      {/* Body */}
      <rect x="44" y="55" width="32" height="35" rx="6" fill="#FFF176" />
      {/* Dhoti */}
      <rect x="44" y="80" width="32" height="15" rx="3" fill="#FFFFFF" stroke="#FDD835" strokeWidth="1" />
      {/* Arms - prayer position */}
      {mood === 'praying' ? (
        <path d="M44,62 L38,70 L44,70 M76,62 L82,70 L76,70" fill="#8D6E63" />
      ) : (
        <><rect x="32" y="58" width="12" height="7" rx="3" fill="#8D6E63" /><rect x="76" y="58" width="12" height="7" rx="3" fill="#8D6E63" /></>
      )}
      {/* Hands together if praying */}
      {mood === 'praying' && <ellipse cx="60" cy="62" rx="4" ry="6" fill="#8D6E63" />}
      {/* Prayer beads */}
      <circle cx="60" cy="56" r="12" fill="none" stroke="#FF8F00" strokeWidth="1.5" strokeDasharray="2,2" />
      {/* Head */}
      <circle cx="60" cy="35" r="17" fill="#8D6E63" />
      {/* Hair */}
      <path d="M43,30 Q50,20 60,22 Q70,20 77,30" fill="#1A1A1A" />
      {/* Tilak */}
      <rect x="58" y="24" width="4" height="8" rx="2" fill="#FFD54F" />
      {/* Eyes */}
      {mood === 'praying' ? (
        <><path d="M52,35 Q55,37 58,35" fill="none" stroke="#1A1A1A" strokeWidth="1.2" /><path d="M62,35 Q65,37 68,35" fill="none" stroke="#1A1A1A" strokeWidth="1.2" /></>
      ) : (
        <><circle cx="54" cy="35" r="2.5" fill="#1A1A1A" /><circle cx="66" cy="35" r="2.5" fill="#1A1A1A" /></>
      )}
      {/* Mouth */}
      {mood === 'happy' ? (
        <path d="M54,43 Q60,47 66,43" fill="none" stroke="#333" strokeWidth="1.2" />
      ) : mood === 'brave' ? (
        <line x1="55" y1="44" x2="65" y2="44" stroke="#333" strokeWidth="1.5" />
      ) : (
        <path d="M56,43 Q60,45 64,43" fill="none" stroke="#333" strokeWidth="1" />
      )}
      {/* Legs */}
      <rect x="48" y="93" width="8" height="14" rx="4" fill="#8D6E63" />
      <rect x="64" y="93" width="8" height="14" rx="4" fill="#8D6E63" />
    </svg>
  );
};

// ============ HOLIKA - Demoness ============
export const Holika = ({ size = 130, mood = 'evil', className = '' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={className}>
      {/* Fire background if burning */}
      {mood === 'burning' && (
        <><path d="M30,100 Q40,60 50,80 Q55,50 60,70 Q65,40 70,75 Q80,55 90,100 Z" fill="#FF5722" opacity="0.5" />
        <path d="M40,100 Q50,70 55,85 Q60,60 65,80 Q70,65 80,100 Z" fill="#FF9800" opacity="0.4" /></>
      )}
      {/* Body */}
      <path d="M42,55 L78,55 L82,105 L38,105 Z" fill="#D32F2F" />
      {/* Fire pattern on dress */}
      <path d="M38,90 Q48,82 55,90 Q62,82 70,90 Q78,82 82,90" fill="none" stroke="#FF9800" strokeWidth="2" />
      {/* Arms */}
      <rect x="30" y="58" width="12" height="7" rx="3" fill="#5D4037" />
      <rect x="78" y="58" width="12" height="7" rx="3" fill="#5D4037" />
      {/* Head */}
      <circle cx="60" cy="35" r="18" fill="#5D4037" />
      {/* Wild hair */}
      <path d="M42,28 Q45,15 52,20 Q55,10 60,18 Q65,10 68,20 Q75,15 78,28" fill="#1A1A1A" />
      {/* Eyes - evil */}
      <ellipse cx="53" cy="34" rx="3" ry="2.5" fill="#FF1744" />
      <ellipse cx="67" cy="34" rx="3" ry="2.5" fill="#FF1744" />
      {/* Evil grin */}
      {mood === 'evil' ? (
        <path d="M50,43 Q55,48 60,43 Q65,48 70,43" fill="none" stroke="#FF1744" strokeWidth="1.5" />
      ) : (
        <circle cx="60" cy="44" r="4" fill="#1A1A1A" />
      )}
      {/* Legs */}
      <rect x="48" y="103" width="8" height="10" rx="4" fill="#5D4037" />
      <rect x="64" y="103" width="8" height="10" rx="4" fill="#5D4037" />
    </svg>
  );
};

// ============ HIRANYAKASHIPU - Demon King ============
export const Hiranyakashipu = ({ size = 130, mood = 'angry', className = '' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={className}>
      {/* Muscular body */}
      <rect x="38" y="50" width="44" height="42" rx="8" fill="#FFD700" />
      {/* Gold armor chest plate */}
      <path d="M42,50 L78,50 L75,70 L45,70 Z" fill="#FFC107" stroke="#FF8F00" strokeWidth="1.5" />
      {/* Arms - big */}
      <rect x="24" y="52" width="14" height="10" rx="5" fill="#6D4C41" />
      <rect x="82" y="52" width="14" height="10" rx="5" fill="#6D4C41" />
      {/* Head */}
      <circle cx="60" cy="30" r="20" fill="#6D4C41" />
      {/* Crown */}
      <path d="M42,18 L48,8 L54,15 L60,5 L66,15 L72,8 L78,18" fill="#FFD700" stroke="#FF8F00" strokeWidth="1" />
      {/* Fierce eyes */}
      {mood === 'terrified' ? (
        <><circle cx="52" cy="28" r="4" fill="#FFF" /><circle cx="52" cy="28" r="2" fill="#1A1A1A" /><circle cx="68" cy="28" r="4" fill="#FFF" /><circle cx="68" cy="28" r="2" fill="#1A1A1A" /></>
      ) : (
        <><path d="M48,26 L56,28" stroke="#FF1744" strokeWidth="2.5" strokeLinecap="round" /><path d="M64,28 L72,26" stroke="#FF1744" strokeWidth="2.5" strokeLinecap="round" /></>
      )}
      {/* Fangs/mouth */}
      {mood === 'terrified' ? (
        <ellipse cx="60" cy="38" rx="5" ry="4" fill="#1A1A1A" />
      ) : (
        <><path d="M50,37 Q60,42 70,37" fill="#1A1A1A" /><line x1="55" y1="37" x2="55" y2="40" stroke="#FFF" strokeWidth="1.5" /><line x1="65" y1="37" x2="65" y2="40" stroke="#FFF" strokeWidth="1.5" /></>
      )}
      {/* Legs */}
      <rect x="46" y="90" width="10" height="16" rx="5" fill="#6D4C41" />
      <rect x="64" y="90" width="10" height="16" rx="5" fill="#6D4C41" />
    </svg>
  );
};

// ============ NARASIMHA - Lion-Man Avatar ============
export const Narasimha = ({ size = 130, mood = 'fierce', className = '' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={className}>
      {/* Muscular body */}
      <rect x="38" y="52" width="44" height="40" rx="8" fill="#1E88E5" />
      {/* Arms - powerful */}
      <rect x="22" y="54" width="16" height="10" rx="5" fill="#1565C0" />
      <rect x="82" y="54" width="16" height="10" rx="5" fill="#1565C0" />
      {/* Claws */}
      <path d="M22,60 L16,56 M22,62 L16,62 M22,64 L16,68" stroke="#FFD54F" strokeWidth="1.5" />
      <path d="M98,60 L104,56 M98,62 L104,62 M98,64 L104,68" stroke="#FFD54F" strokeWidth="1.5" />
      {/* Lion mane */}
      <circle cx="60" cy="32" r="28" fill="#FF8F00" />
      {/* Head */}
      <circle cx="60" cy="34" r="18" fill="#FFB74D" />
      {/* Fierce eyes */}
      <ellipse cx="52" cy="30" rx="3.5" ry="3" fill="#FF1744" />
      <ellipse cx="68" cy="30" rx="3.5" ry="3" fill="#FF1744" />
      <circle cx="52" cy="30" r="1.5" fill="#1A1A1A" />
      <circle cx="68" cy="30" r="1.5" fill="#1A1A1A" />
      {/* Nose */}
      <ellipse cx="60" cy="36" rx="4" ry="3" fill="#8D6E63" />
      {/* Open mouth with fangs */}
      {mood === 'fierce' ? (
        <><path d="M48,42 Q60,52 72,42" fill="#D32F2F" /><line x1="54" y1="42" x2="54" y2="46" stroke="#FFF" strokeWidth="2" /><line x1="66" y1="42" x2="66" y2="46" stroke="#FFF" strokeWidth="2" /></>
      ) : (
        <path d="M52,42 Q60,46 68,42" fill="none" stroke="#333" strokeWidth="1.5" />
      )}
      {/* Legs */}
      <rect x="46" y="90" width="10" height="16" rx="5" fill="#1565C0" />
      <rect x="64" y="90" width="10" height="16" rx="5" fill="#1565C0" />
    </svg>
  );
};

// ============ BATMAN ============
// ============ CAPTAIN AMERICA ============
// ============ SUPERMAN ============
// ============ SHINCHAN ============
export const Shinchan = ({ size = 130, mood = 'lazy', className = '' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={className}>
      {/* Body - red shirt */}
      <rect x="42" y="55" width="36" height="30" rx="6" fill="#F44336" />
      {/* Shorts */}
      <rect x="44" y="82" width="32" height="12" rx="4" fill="#FDD835" />
      {/* Arms */}
      <rect x="32" y="58" width="10" height="6" rx="3" fill="#FFCC80" />
      <rect x="78" y="58" width="10" height="6" rx="3" fill="#FFCC80" />
      {/* Head - round */}
      <circle cx="60" cy="35" r="22" fill="#FFCC80" />
      {/* Hair - black bowl cut */}
      <path d="M38,28 Q45,15 60,17 Q75,15 82,28 L80,32 Q60,28 40,32 Z" fill="#1A1A1A" />
      {/* THICK eyebrows - signature */}
      <rect x="47" y="30" width="10" height="4" rx="2" fill="#1A1A1A" />
      <rect x="63" y="30" width="10" height="4" rx="2" fill="#1A1A1A" />
      {/* Eyes */}
      {mood === 'scared' ? (
        <><circle cx="52" cy="38" r="4" fill="#FFF" /><circle cx="52" cy="38" r="2" fill="#1A1A1A" /><circle cx="68" cy="38" r="4" fill="#FFF" /><circle cx="68" cy="38" r="2" fill="#1A1A1A" /></>
      ) : mood === 'lazy' ? (
        <><path d="M48,38 L56,38" stroke="#1A1A1A" strokeWidth="2" /><path d="M64,38 L72,38" stroke="#1A1A1A" strokeWidth="2" /></>
      ) : (
        <><circle cx="52" cy="38" r="3" fill="#1A1A1A" /><circle cx="68" cy="38" r="3" fill="#1A1A1A" /></>
      )}
      {/* Mouth */}
      {mood === 'proud' ? (
        <path d="M52,48 Q60,54 68,48" fill="none" stroke="#333" strokeWidth="1.5" />
      ) : mood === 'scared' ? (
        <ellipse cx="60" cy="50" rx="4" ry="5" fill="#1A1A1A" />
      ) : (
        <path d="M54,48 Q60,51 66,48" fill="none" stroke="#333" strokeWidth="1.2" />
      )}
      {/* Legs */}
      <rect x="48" y="93" width="8" height="14" rx="4" fill="#FFCC80" />
      <rect x="64" y="93" width="8" height="14" rx="4" fill="#FFCC80" />
    </svg>
  );
};

// ============ HOMEWORK MONSTER ============
export const HomeworkMonster = ({ size = 130, mood = 'scary', className = '' }) => {
  const scale = mood === 'shrinking' ? 0.7 : mood === 'defeated' ? 0.5 : 1;
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={className}>
      <g transform={`translate(${60 - 60 * scale},${60 - 60 * scale}) scale(${scale})`}>
        {/* Blob body */}
        <path d="M30,90 Q20,60 35,40 Q50,20 70,25 Q95,30 100,60 Q105,85 85,95 Q60,105 30,90" fill="#7B1FA2" />
        {/* Paper bits sticking out */}
        <rect x="35" y="35" width="12" height="16" rx="1" fill="#FFF" transform="rotate(-15,41,43)" />
        <rect x="70" y="30" width="12" height="16" rx="1" fill="#FFF" transform="rotate(10,76,38)" />
        <rect x="80" y="60" width="10" height="14" rx="1" fill="#FFF" transform="rotate(20,85,67)" />
        {/* Lines on papers */}
        <line x1="37" y1="40" x2="45" y2="39" stroke="#90CAF9" strokeWidth="1" />
        <line x1="37" y1="43" x2="44" y2="42" stroke="#90CAF9" strokeWidth="1" />
        {/* Eyes */}
        <circle cx="50" cy="55" r="6" fill="#76FF03" />
        <circle cx="72" cy="52" r="5" fill="#76FF03" />
        <circle cx="50" cy="55" r="3" fill="#1A1A1A" />
        <circle cx="72" cy="52" r="2.5" fill="#1A1A1A" />
        {/* Mouth */}
        {mood === 'defeated' ? (
          <path d="M48,72 Q58,68 68,72" fill="none" stroke="#4A148C" strokeWidth="2" />
        ) : (
          <path d="M45,70 Q55,80 70,72" fill="#4A148C" stroke="#311B92" strokeWidth="1" />
        )}
        {/* Drool/slime */}
        <path d="M50,80 Q48,88 50,95" fill="none" stroke="#69F0AE" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
};

// ============ DORAEMON - Robotic Cat ============
export const Doraemon = ({ size = 130, mood = 'happy', className = '' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={className}>
      {/* Body */}
      <ellipse cx="60" cy="80" rx="25" ry="28" fill="#039BE5" />
      {/* White belly */}
      <ellipse cx="60" cy="83" rx="17" ry="20" fill="#FFF" />
      {/* Pocket */}
      <path d="M47,80 A13,10 0 0,0 73,80" fill="#FFF" stroke="#039BE5" strokeWidth="1" />
      {/* Arms */}
      <circle cx="32" cy="75" r="8" fill="#FFF" />
      <circle cx="88" cy="75" r="8" fill="#FFF" />
      {/* Head */}
      <circle cx="60" cy="38" r="26" fill="#039BE5" />
      {/* White face */}
      <ellipse cx="60" cy="42" rx="20" ry="19" fill="#FFF" />
      {/* Eyes */}
      {mood === 'worried' ? (
        <><ellipse cx="55" cy="34" rx="5" ry="6" fill="#FFF" stroke="#1A1A1A" strokeWidth="1" /><circle cx="57" cy="34" r="2" fill="#1A1A1A" /><ellipse cx="65" cy="34" rx="5" ry="6" fill="#FFF" stroke="#1A1A1A" strokeWidth="1" /><circle cx="63" cy="34" r="2" fill="#1A1A1A" /></>
      ) : mood === 'thinking' ? (
        <><ellipse cx="55" cy="34" rx="5" ry="6" fill="#FFF" stroke="#1A1A1A" strokeWidth="1" /><circle cx="56" cy="35" r="2" fill="#1A1A1A" /><ellipse cx="65" cy="34" rx="5" ry="6" fill="#FFF" stroke="#1A1A1A" strokeWidth="1" /><circle cx="66" cy="35" r="2" fill="#1A1A1A" /></>
      ) : (
        <><ellipse cx="55" cy="34" rx="5" ry="6" fill="#FFF" stroke="#1A1A1A" strokeWidth="1" /><circle cx="56" cy="36" r="2" fill="#1A1A1A" /><ellipse cx="65" cy="34" rx="5" ry="6" fill="#FFF" stroke="#1A1A1A" strokeWidth="1" /><circle cx="64" cy="36" r="2" fill="#1A1A1A" /></>
      )}
      {/* Red nose */}
      <circle cx="60" cy="42" r="4" fill="#D32F2F" />
      {/* Line from nose */}
      <line x1="60" y1="46" x2="60" y2="54" stroke="#1A1A1A" strokeWidth="1" />
      {/* Whiskers */}
      <line x1="35" y1="40" x2="48" y2="42" stroke="#1A1A1A" strokeWidth="0.8" />
      <line x1="35" y1="46" x2="48" y2="46" stroke="#1A1A1A" strokeWidth="0.8" />
      <line x1="72" y1="42" x2="85" y2="40" stroke="#1A1A1A" strokeWidth="0.8" />
      <line x1="72" y1="46" x2="85" y2="46" stroke="#1A1A1A" strokeWidth="0.8" />
      {/* Mouth */}
      {mood === 'happy' ? (
        <path d="M48,50 Q60,60 72,50" fill="none" stroke="#1A1A1A" strokeWidth="1.5" />
      ) : (
        <path d="M50,52 Q60,56 70,52" fill="none" stroke="#1A1A1A" strokeWidth="1.2" />
      )}
      {/* Bell */}
      <circle cx="60" cy="60" r="4" fill="#FFD54F" stroke="#FF8F00" strokeWidth="1" />
      {/* Legs */}
      <ellipse cx="50" cy="108" rx="8" ry="5" fill="#FFF" />
      <ellipse cx="70" cy="108" rx="8" ry="5" fill="#FFF" />
    </svg>
  );
};

// ============ NOBITA ============
export const Nobita = ({ size = 130, mood = 'lazy', className = '' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={className}>
      {/* Body - yellow shirt */}
      <rect x="42" y="52" width="36" height="32" rx="6" fill="#FDD835" />
      {/* Shorts */}
      <rect x="44" y="82" width="32" height="12" rx="4" fill="#1565C0" />
      {/* Arms */}
      <rect x="32" y="55" width="10" height="6" rx="3" fill="#FFCC80" />
      <rect x="78" y="55" width="10" height="6" rx="3" fill="#FFCC80" />
      {/* Head */}
      <circle cx="60" cy="32" r="20" fill="#FFCC80" />
      {/* Hair */}
      <path d="M40,25 Q48,15 60,17 Q72,15 80,25" fill="#1A1A1A" />
      {/* Glasses - big round */}
      <circle cx="52" cy="32" r="8" fill="none" stroke="#1A1A1A" strokeWidth="2" />
      <circle cx="68" cy="32" r="8" fill="none" stroke="#1A1A1A" strokeWidth="2" />
      <line x1="60" y1="32" x2="60" y2="32" stroke="#1A1A1A" strokeWidth="2" />
      {/* Eyes inside glasses */}
      {mood === 'lazy' ? (
        <><path d="M48,32 L56,32" stroke="#1A1A1A" strokeWidth="1.5" /><path d="M64,32 L72,32" stroke="#1A1A1A" strokeWidth="1.5" /></>
      ) : mood === 'amazed' ? (
        <><circle cx="52" cy="32" r="3" fill="#1A1A1A" /><circle cx="68" cy="32" r="3" fill="#1A1A1A" /></>
      ) : (
        <><circle cx="52" cy="32" r="2" fill="#1A1A1A" /><circle cx="68" cy="32" r="2" fill="#1A1A1A" /></>
      )}
      {/* Mouth */}
      {mood === 'proud' ? (
        <path d="M54,42 Q60,46 66,42" fill="none" stroke="#333" strokeWidth="1.2" />
      ) : mood === 'amazed' ? (
        <circle cx="60" cy="43" r="3" fill="#1A1A1A" />
      ) : (
        <path d="M55,42 Q60,44 65,42" fill="none" stroke="#333" strokeWidth="1" />
      )}
      {/* Legs */}
      <rect x="48" y="93" width="8" height="14" rx="4" fill="#FFCC80" />
      <rect x="64" y="93" width="8" height="14" rx="4" fill="#FFCC80" />
    </svg>
  );
};

// ============ HERCULES - Greek Hero ============
export const Hercules = ({ size = 130, mood = 'determined', className = '' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={className}>
      {/* Muscular body */}
      <rect x="38" y="48" width="44" height="40" rx="8" fill="#FFCC80" />
      {/* Lion skin draped */}
      <path d="M38,48 L50,48 L45,70 L35,65 Z" fill="#FF8F00" />
      <path d="M70,48 L82,48 L85,65 L75,70 Z" fill="#FF8F00" />
      {/* Belt */}
      <rect x="38" y="75" width="44" height="5" rx="2" fill="#8D6E63" />
      {/* Arms */}
      <rect x="24" y="50" width="14" height="10" rx="5" fill="#FFCC80" />
      <rect x="82" y="50" width="14" height="10" rx="5" fill="#FFCC80" />
      {/* Head */}
      <circle cx="60" cy="28" r="18" fill="#FFCC80" />
      {/* Curly hair */}
      <path d="M42,22 Q45,12 52,15 Q56,10 60,14 Q64,10 68,15 Q75,12 78,22" fill="#8D6E63" />
      {/* Headband */}
      <rect x="42" y="20" width="36" height="4" rx="2" fill="#FFD54F" />
      {/* Eyes */}
      {mood === 'thinking' ? (
        <><circle cx="53" cy="28" r="2" fill="#1A1A1A" /><circle cx="67" cy="26" r="2" fill="#1A1A1A" /></>
      ) : (
        <><circle cx="53" cy="28" r="2.5" fill="#1A1A1A" /><circle cx="67" cy="28" r="2.5" fill="#1A1A1A" /></>
      )}
      {/* Mouth */}
      {mood === 'triumphant' ? (
        <path d="M52,36 Q60,42 68,36" fill="none" stroke="#333" strokeWidth="1.5" />
      ) : mood === 'clever' ? (
        <path d="M54,36 Q60,39 66,36" fill="none" stroke="#333" strokeWidth="1.2" />
      ) : (
        <line x1="54" y1="36" x2="66" y2="36" stroke="#333" strokeWidth="1.5" />
      )}
      {/* Skirt/tunic bottom */}
      <path d="M40,86 L48,105 L60,100 L72,105 L80,86 Z" fill="#8D6E63" />
      {/* Legs with sandals */}
      <rect x="48" y="100" width="8" height="12" rx="3" fill="#FFCC80" />
      <rect x="64" y="100" width="8" height="12" rx="3" fill="#FFCC80" />
      <rect x="46" y="110" width="12" height="4" rx="2" fill="#5D4037" />
      <rect x="62" y="110" width="12" height="4" rx="2" fill="#5D4037" />
    </svg>
  );
};

// ============ ATLAS - Titan ============
export const Atlas = ({ size = 130, mood = 'tired', className = '' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={className}>
      {/* Celestial sphere on shoulders */}
      <circle cx="60" cy="22" r="18" fill="#1A237E" opacity="0.8" />
      <circle cx="55" cy="18" r="2" fill="#FFD54F" opacity="0.7" />
      <circle cx="65" cy="25" r="1.5" fill="#FFD54F" opacity="0.7" />
      <circle cx="60" cy="15" r="1" fill="#FFD54F" opacity="0.7" />
      <path d="M42,22 A18,18 0 0,1 78,22" fill="none" stroke="#5C6BC0" strokeWidth="1" />
      <path d="M48,15 Q60,30 72,15" fill="none" stroke="#5C6BC0" strokeWidth="0.8" />
      {/* Big muscular body */}
      <rect x="36" y="50" width="48" height="40" rx="8" fill="#8D6E63" />
      {/* Arms raised holding sphere */}
      <rect x="38" y="32" width="10" height="20" rx="5" fill="#8D6E63" />
      <rect x="72" y="32" width="10" height="20" rx="5" fill="#8D6E63" />
      {/* Head (between arms) */}
      <circle cx="60" cy="48" r="12" fill="#A1887F" />
      {/* Eyes */}
      {mood === 'tired' ? (
        <><path d="M55,47 L59,47" stroke="#1A1A1A" strokeWidth="1.5" /><path d="M61,47 L65,47" stroke="#1A1A1A" strokeWidth="1.5" /></>
      ) : mood === 'angry' ? (
        <><path d="M54,45 L58,47" stroke="#1A1A1A" strokeWidth="2" /><path d="M66,45 L62,47" stroke="#1A1A1A" strokeWidth="2" /></>
      ) : (
        <><circle cx="56" cy="47" r="2" fill="#1A1A1A" /><circle cx="64" cy="47" r="2" fill="#1A1A1A" /></>
      )}
      {/* Mouth */}
      {mood === 'tired' ? (
        <path d="M56,54 Q60,52 64,54" fill="none" stroke="#333" strokeWidth="1" />
      ) : (
        <line x1="56" y1="54" x2="64" y2="54" stroke="#333" strokeWidth="1.2" />
      )}
      {/* Legs */}
      <rect x="44" y="88" width="12" height="18" rx="5" fill="#8D6E63" />
      <rect x="64" y="88" width="12" height="18" rx="5" fill="#8D6E63" />
    </svg>
  );
};

// ============ ICARUS - Boy with Wings ============
export const Icarus = ({ size = 130, mood = 'excited', className = '' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={className}>
      {/* Wings */}
      {mood === 'falling' ? (
        <><path d="M35,55 Q15,70 20,90" fill="none" stroke="#FFE082" strokeWidth="3" /><path d="M85,55 Q105,70 100,90" fill="none" stroke="#FFE082" strokeWidth="3" />
        <path d="M30,60 Q12,75 18,92" fill="none" stroke="#FFCC80" strokeWidth="2" /><path d="M90,60 Q108,75 102,92" fill="none" stroke="#FFCC80" strokeWidth="2" /></>
      ) : (
        <><path d="M35,50 Q10,35 15,20 Q20,30 30,25 Q22,40 35,45" fill="#FFE082" /><path d="M85,50 Q110,35 105,20 Q100,30 90,25 Q98,40 85,45" fill="#FFE082" />
        <path d="M35,55 Q8,45 12,28" fill="none" stroke="#FFD54F" strokeWidth="1.5" /><path d="M85,55 Q112,45 108,28" fill="none" stroke="#FFD54F" strokeWidth="1.5" /></>
      )}
      {/* Body - white tunic */}
      <rect x="45" y="52" width="30" height="30" rx="6" fill="#FAFAFA" stroke="#E0E0E0" strokeWidth="1" />
      {/* Arms */}
      <rect x="34" y="54" width="11" height="6" rx="3" fill="#FFCC80" />
      <rect x="75" y="54" width="11" height="6" rx="3" fill="#FFCC80" />
      {/* Head */}
      <circle cx="60" cy="35" r="16" fill="#FFCC80" />
      {/* Curly hair */}
      <path d="M44,30 Q48,20 55,23 Q58,18 63,22 Q68,18 72,24 Q76,20 76,30" fill="#FFB74D" />
      {/* Eyes */}
      {mood === 'falling' ? (
        <><circle cx="54" cy="34" r="3.5" fill="#FFF" /><circle cx="54" cy="35" r="2" fill="#1A1A1A" /><circle cx="66" cy="34" r="3.5" fill="#FFF" /><circle cx="66" cy="35" r="2" fill="#1A1A1A" /></>
      ) : (
        <><circle cx="54" cy="34" r="2.5" fill="#1A1A1A" /><circle cx="66" cy="34" r="2.5" fill="#1A1A1A" /></>
      )}
      {/* Mouth */}
      {mood === 'excited' || mood === 'flying' ? (
        <path d="M54,42 Q60,46 66,42" fill="none" stroke="#333" strokeWidth="1.2" />
      ) : mood === 'falling' ? (
        <ellipse cx="60" cy="43" rx="3" ry="4" fill="#1A1A1A" />
      ) : (
        <path d="M56,42 Q60,44 64,42" fill="none" stroke="#333" strokeWidth="1" />
      )}
      {/* Legs */}
      <rect x="49" y="80" width="7" height="14" rx="3" fill="#FFCC80" />
      <rect x="64" y="80" width="7" height="14" rx="3" fill="#FFCC80" />
      {/* Sandals */}
      <rect x="48" y="92" width="9" height="4" rx="2" fill="#8D6E63" />
      <rect x="63" y="92" width="9" height="4" rx="2" fill="#8D6E63" />
    </svg>
  );
};

// ============ DAEDALUS - Inventor ============
export const Daedalus = ({ size = 130, mood = 'warning', className = '' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={className}>
      {/* Body - tunic */}
      <rect x="42" y="52" width="36" height="35" rx="6" fill="#78909C" />
      {/* Belt with tools */}
      <rect x="42" y="75" width="36" height="5" rx="2" fill="#5D4037" />
      <rect x="50" y="73" width="3" height="9" rx="1" fill="#9E9E9E" />
      <rect x="60" y="73" width="3" height="9" rx="1" fill="#9E9E9E" />
      {/* Arms */}
      <rect x="32" y="55" width="10" height="7" rx="3" fill="#FFCC80" />
      <rect x="78" y="55" width="10" height="7" rx="3" fill="#FFCC80" />
      {/* Head */}
      <circle cx="60" cy="32" r="18" fill="#FFCC80" />
      {/* Gray beard */}
      <path d="M48,38 Q52,48 60,50 Q68,48 72,38" fill="#BDBDBD" />
      {/* Gray hair */}
      <path d="M42,26 Q48,18 60,20 Q72,18 78,26" fill="#9E9E9E" />
      {/* Eyes */}
      {mood === 'worried' ? (
        <><circle cx="54" cy="30" r="2" fill="#1A1A1A" /><path d="M50,26 L58,28" stroke="#1A1A1A" strokeWidth="1" /></>
      ) : (
        <><circle cx="54" cy="30" r="2.5" fill="#1A1A1A" /><circle cx="66" cy="30" r="2.5" fill="#1A1A1A" /></>
      )}
      {mood === 'warning' && <path d="M52,26 L56,28 M64,28 L68,26" stroke="#1A1A1A" strokeWidth="1.2" />}
      {/* Mouth */}
      {mood === 'relieved' ? (
        <path d="M55,40 Q60,43 65,40" fill="none" stroke="#333" strokeWidth="1" />
      ) : mood === 'worried' ? (
        <path d="M55,42 Q60,40 65,42" fill="none" stroke="#333" strokeWidth="1" />
      ) : (
        <line x1="55" y1="41" x2="65" y2="41" stroke="#333" strokeWidth="1.2" />
      )}
      {/* Legs */}
      <rect x="48" y="86" width="8" height="14" rx="4" fill="#FFCC80" />
      <rect x="64" y="86" width="8" height="14" rx="4" fill="#FFCC80" />
      {/* Sandals */}
      <rect x="46" y="98" width="12" height="4" rx="2" fill="#5D4037" />
      <rect x="62" y="98" width="12" height="4" rx="2" fill="#5D4037" />
    </svg>
  );
};

// ===== NEW CHARACTERS: Indian Mythology & Indian Animation =====

export const Draupadi = ({ size = 130, mood = 'fierce', className = '' }) => {
  const scale = size / 120;
  return (
    <svg width={120 * scale} height={120 * scale} viewBox="0 0 120 120" className={className}>
      {/* Hair - long black flowing */}
      <ellipse cx="60" cy="35" rx="22" ry="20" fill="#1A1A2E" />
      <path d="M38 35 Q38 90, 45 95" stroke="#1A1A2E" strokeWidth="8" fill="none" />
      <path d="M82 35 Q82 90, 75 95" stroke="#1A1A2E" strokeWidth="8" fill="none" />
      {/* Face */}
      <ellipse cx="60" cy="38" rx="17" ry="19" fill="#D4A574" />
      {/* Bindi */}
      <circle cx="60" cy="30" r="2.5" fill="#E53935" />
      {/* Eyes */}
      {mood === 'fierce' ? (
        <>
          <ellipse cx="53" cy="38" rx="3.5" ry="2.5" fill="white" />
          <ellipse cx="67" cy="38" rx="3.5" ry="2.5" fill="white" />
          <circle cx="53" cy="38" r="2" fill="#1A1A2E" />
          <circle cx="67" cy="38" r="2" fill="#1A1A2E" />
          <line x1="47" y1="34" x2="53" y2="35" stroke="#333" strokeWidth="1.5" />
          <line x1="73" y1="34" x2="67" y2="35" stroke="#333" strokeWidth="1.5" />
        </>
      ) : (
        <>
          <ellipse cx="53" cy="38" rx="3" ry="3" fill="white" />
          <ellipse cx="67" cy="38" rx="3" ry="3" fill="white" />
          <circle cx="53" cy="38" r="2" fill="#333" />
          <circle cx="67" cy="38" r="2" fill="#333" />
        </>
      )}
      {/* Nose & mouth */}
      <path d="M60 41 L58 45 L60 44" stroke="#B8896A" strokeWidth="0.8" fill="none" />
      {mood === 'fierce' ? (
        <path d="M54 49 Q60 47, 66 49" stroke="#C62828" strokeWidth="1.2" fill="none" />
      ) : (
        <path d="M55 49 Q60 51, 65 49" stroke="#C0625A" strokeWidth="1" fill="none" />
      )}
      {/* Crown / tiara */}
      <path d="M43 28 L48 18 L53 25 L58 15 L63 25 L68 18 L73 28" fill="#FFD600" stroke="#FF8F00" strokeWidth="1" />
      <circle cx="58" cy="20" r="2" fill="#E53935" />
      {/* Earrings */}
      <circle cx="40" cy="42" r="3" fill="#FFD600" />
      <circle cx="80" cy="42" r="3" fill="#FFD600" />
      {/* Sari body - royal purple */}
      <path d="M42 55 Q60 50, 78 55 L80 95 Q60 100, 40 95 Z" fill="#7B1FA2" />
      <path d="M42 55 Q60 50, 78 55 L76 65 Q60 60, 44 65 Z" fill="#9C27B0" />
      {/* Sari pallu drape */}
      <path d="M72 58 Q85 70, 80 90" stroke="#E1BEE7" strokeWidth="3" fill="none" opacity="0.6" />
      {/* Necklace */}
      <path d="M48 55 Q60 62, 72 55" stroke="#FFD600" strokeWidth="2" fill="none" />
      <circle cx="60" cy="60" r="3" fill="#E53935" />
      {/* Arms */}
      <rect x="36" y="58" width="8" height="25" rx="4" fill="#D4A574" />
      <rect x="76" y="58" width="8" height="25" rx="4" fill="#D4A574" />
      {/* Bangles */}
      <rect x="36" y="72" width="8" height="3" rx="1" fill="#FFD600" />
      <rect x="76" y="72" width="8" height="3" rx="1" fill="#FFD600" />
      {/* Feet */}
      <ellipse cx="50" cy="100" rx="7" ry="3" fill="#D4A574" />
      <ellipse cx="70" cy="100" rx="7" ry="3" fill="#D4A574" />
      {/* Fire aura for fierce mood */}
      {mood === 'fierce' && (
        <g opacity="0.3">
          <ellipse cx="60" cy="60" rx="40" ry="50" fill="url(#draupadiFire)" />
          <defs>
            <radialGradient id="draupadiFire">
              <stop offset="0%" stopColor="#FF6F00" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FF6F00" stopOpacity="0" />
            </radialGradient>
          </defs>
        </g>
      )}
    </svg>
  );
};

export const Rama = ({ size = 130, mood = 'heroic', className = '' }) => {
  const scale = size / 120;
  return (
    <svg width={120 * scale} height={120 * scale} viewBox="0 0 120 120" className={className}>
      {/* Crown - mukut */}
      <path d="M45 22 L50 8 L55 18 L60 5 L65 18 L70 8 L75 22" fill="#FFD600" stroke="#FF8F00" strokeWidth="1" />
      <circle cx="60" cy="12" r="3" fill="#E53935" />
      <rect x="45" y="22" width="30" height="6" rx="2" fill="#FFD600" />
      {/* Hair */}
      <ellipse cx="60" cy="32" rx="20" ry="12" fill="#1A1A2E" />
      {/* Face - blue tint for Rama */}
      <ellipse cx="60" cy="38" rx="16" ry="18" fill="#5C9DC4" />
      {/* Eyes */}
      <ellipse cx="53" cy="37" rx="3.5" ry="2.5" fill="white" />
      <ellipse cx="67" cy="37" rx="3.5" ry="2.5" fill="white" />
      <circle cx="54" cy="37" r="2" fill="#1A1A2E" />
      <circle cx="68" cy="37" r="2" fill="#1A1A2E" />
      {/* Tilak */}
      <path d="M57 30 L60 26 L63 30" fill="#FFD600" />
      <circle cx="60" cy="31" r="1.5" fill="#E53935" />
      {/* Nose & smile */}
      <path d="M60 40 L58 44 L60 43" stroke="#4A8AAF" strokeWidth="0.8" fill="none" />
      <path d="M55 48 Q60 51, 65 48" stroke="#3A7A9F" strokeWidth="1" fill="none" />
      {/* Earrings */}
      <circle cx="42" cy="40" r="3" fill="#FFD600" />
      <circle cx="78" cy="40" r="3" fill="#FFD600" />
      {/* Body - yellow dhoti and green upper */}
      <path d="M44 54 Q60 48, 76 54 L78 95 Q60 100, 42 95 Z" fill="#2E7D32" />
      <path d="M44 54 Q60 48, 76 54 L74 68 Q60 62, 46 68 Z" fill="#388E3C" />
      {/* Dhoti lower */}
      <path d="M42 80 L42 98 Q60 102, 78 98 L78 80" fill="#FFF9C4" />
      {/* Bow on back */}
      <path d="M30 40 Q20 60, 30 85" stroke="#8D6E63" strokeWidth="3" fill="none" />
      <line x1="30" y1="40" x2="30" y2="85" stroke="#A1887F" strokeWidth="1.5" />
      {/* Arrow in hand */}
      {mood === 'heroic' && (
        <g>
          <line x1="82" y1="55" x2="100" y2="35" stroke="#8D6E63" strokeWidth="2" />
          <polygon points="100,32 103,37 97,37" fill="#B0BEC5" />
        </g>
      )}
      {/* Arms */}
      <rect x="36" y="56" width="8" height="24" rx="4" fill="#5C9DC4" />
      <rect x="76" y="56" width="8" height="24" rx="4" fill="#5C9DC4" />
      {/* Armlets */}
      <rect x="36" y="58" width="8" height="3" rx="1" fill="#FFD600" />
      <rect x="76" y="58" width="8" height="3" rx="1" fill="#FFD600" />
      {/* Feet */}
      <ellipse cx="50" cy="100" rx="7" ry="3" fill="#5C9DC4" />
      <ellipse cx="70" cy="100" rx="7" ry="3" fill="#5C9DC4" />
      {/* Divine glow */}
      <circle cx="60" cy="55" r="45" fill="url(#ramaGlow)" opacity="0.15" />
      <defs>
        <radialGradient id="ramaGlow">
          <stop offset="0%" stopColor="#FFD600" />
          <stop offset="100%" stopColor="#FFD600" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export const Sita = ({ size = 130, mood = 'hopeful', className = '' }) => {
  const scale = size / 120;
  return (
    <svg width={120 * scale} height={120 * scale} viewBox="0 0 120 120" className={className}>
      {/* Hair */}
      <ellipse cx="60" cy="33" rx="20" ry="18" fill="#1A1A2E" />
      <path d="M40 33 Q38 75, 44 85" stroke="#1A1A2E" strokeWidth="7" fill="none" />
      <path d="M80 33 Q82 75, 76 85" stroke="#1A1A2E" strokeWidth="7" fill="none" />
      {/* Face */}
      <ellipse cx="60" cy="38" rx="16" ry="18" fill="#DEAB7A" />
      {/* Bindi */}
      <circle cx="60" cy="29" r="2.5" fill="#E53935" />
      {/* Eyes */}
      {mood === 'overjoyed' ? (
        <>
          <path d="M49 37 Q53 34, 57 37" stroke="#333" strokeWidth="1.5" fill="none" />
          <path d="M63 37 Q67 34, 71 37" stroke="#333" strokeWidth="1.5" fill="none" />
        </>
      ) : (
        <>
          <ellipse cx="53" cy="37" rx="3" ry="3" fill="white" />
          <ellipse cx="67" cy="37" rx="3" ry="3" fill="white" />
          <circle cx="53" cy="37" r="2" fill="#333" />
          <circle cx="67" cy="37" r="2" fill="#333" />
          <circle cx="54" cy="36" r="0.7" fill="white" />
          <circle cx="68" cy="36" r="0.7" fill="white" />
        </>
      )}
      {/* Nose */}
      <path d="M60 40 L58 44 L60 43" stroke="#C9976A" strokeWidth="0.8" fill="none" />
      <circle cx="57" cy="43" r="1" fill="#FFD600" /> {/* nose ring */}
      {/* Mouth */}
      <path d="M55 48 Q60 51, 65 48" stroke="#C0625A" strokeWidth="1" fill="none" />
      {/* Maang tikka */}
      <line x1="60" y1="20" x2="60" y2="29" stroke="#FFD600" strokeWidth="1.5" />
      <circle cx="60" cy="20" r="3" fill="#FFD600" />
      <circle cx="60" cy="20" r="1.5" fill="#E53935" />
      {/* Earrings */}
      <path d="M40 40 L37 48 L43 48 Z" fill="#FFD600" />
      <path d="M80 40 L77 48 L83 48 Z" fill="#FFD600" />
      {/* Sari - orange/saffron */}
      <path d="M44 54 Q60 48, 76 54 L78 98 Q60 102, 42 98 Z" fill="#FF6F00" />
      <path d="M44 54 Q60 48, 76 54 L74 66 Q60 60, 46 66 Z" fill="#FF8F00" />
      {/* Sari border */}
      <path d="M42 95 Q60 99, 78 95" stroke="#FFD600" strokeWidth="2" fill="none" />
      {/* Pallu */}
      <path d="M70 56 Q88 68, 82 90" stroke="#FFCC80" strokeWidth="4" fill="none" opacity="0.5" />
      {/* Necklace */}
      <path d="M48 54 Q60 60, 72 54" stroke="#FFD600" strokeWidth="2" fill="none" />
      {/* Arms */}
      <rect x="36" y="56" width="8" height="24" rx="4" fill="#DEAB7A" />
      <rect x="76" y="56" width="8" height="24" rx="4" fill="#DEAB7A" />
      {/* Bangles */}
      <rect x="36" y="70" width="8" height="2" rx="1" fill="#FFD600" />
      <rect x="36" y="73" width="8" height="2" rx="1" fill="#E53935" />
      <rect x="76" y="70" width="8" height="2" rx="1" fill="#FFD600" />
      <rect x="76" y="73" width="8" height="2" rx="1" fill="#E53935" />
      {/* Feet */}
      <ellipse cx="50" cy="100" rx="7" ry="3" fill="#DEAB7A" />
      <ellipse cx="70" cy="100" rx="7" ry="3" fill="#DEAB7A" />
    </svg>
  );
};

export const OggyCharacter = ({ size = 130, mood = 'happy', className = '' }) => {
  const scale = size / 120;
  return (
    <svg width={120 * scale} height={120 * scale} viewBox="0 0 120 120" className={className}>
      {/* Body - blue cat */}
      <ellipse cx="60" cy="70" rx="28" ry="32" fill="#42A5F5" />
      {/* Belly */}
      <ellipse cx="60" cy="75" rx="18" ry="20" fill="#BBDEFB" />
      {/* Head */}
      <ellipse cx="60" cy="38" rx="24" ry="22" fill="#42A5F5" />
      {/* Ears */}
      <path d="M38 22 L32 8 L46 20" fill="#42A5F5" />
      <path d="M82 22 L88 8 L74 20" fill="#42A5F5" />
      <path d="M40 22 L35 12 L46 21" fill="#F48FB1" />
      <path d="M80 22 L85 12 L74 21" fill="#F48FB1" />
      {/* Eyes - big round */}
      <ellipse cx="50" cy="35" rx="10" ry="11" fill="white" />
      <ellipse cx="70" cy="35" rx="10" ry="11" fill="white" />
      {mood === 'happy' ? (
        <>
          <circle cx="52" cy="36" r="5" fill="#1A1A2E" />
          <circle cx="72" cy="36" r="5" fill="#1A1A2E" />
          <circle cx="54" cy="34" r="2" fill="white" />
          <circle cx="74" cy="34" r="2" fill="white" />
        </>
      ) : (
        <>
          <circle cx="52" cy="38" r="6" fill="#1A1A2E" />
          <circle cx="72" cy="38" r="6" fill="#1A1A2E" />
          <circle cx="50" cy="36" r="2" fill="white" />
          <circle cx="70" cy="36" r="2" fill="white" />
        </>
      )}
      {/* Nose */}
      <ellipse cx="60" cy="44" rx="4" ry="3" fill="#E91E63" />
      <circle cx="59" cy="43" r="1" fill="#F48FB1" />
      {/* Mouth */}
      {mood === 'happy' ? (
        <path d="M50 49 Q60 56, 70 49" stroke="#333" strokeWidth="1.5" fill="none" />
      ) : (
        <ellipse cx="60" cy="52" rx="8" ry="5" fill="#C62828" />
      )}
      {/* Whiskers */}
      <line x1="25" y1="40" x2="45" y2="42" stroke="#333" strokeWidth="0.8" />
      <line x1="25" y1="45" x2="45" y2="45" stroke="#333" strokeWidth="0.8" />
      <line x1="75" y1="42" x2="95" y2="40" stroke="#333" strokeWidth="0.8" />
      <line x1="75" y1="45" x2="95" y2="45" stroke="#333" strokeWidth="0.8" />
      {/* Arms */}
      <rect x="30" y="60" width="8" height="20" rx="4" fill="#42A5F5" />
      <rect x="82" y="60" width="8" height="20" rx="4" fill="#42A5F5" />
      {/* Legs */}
      <rect x="44" y="95" width="10" height="12" rx="5" fill="#42A5F5" />
      <rect x="66" y="95" width="10" height="12" rx="5" fill="#42A5F5" />
      {/* Feet */}
      <ellipse cx="49" cy="108" rx="8" ry="4" fill="#42A5F5" />
      <ellipse cx="71" cy="108" rx="8" ry="4" fill="#42A5F5" />
      {/* Tail */}
      <path d="M85 80 Q100 75, 95 60 Q90 50, 98 45" stroke="#42A5F5" strokeWidth="5" fill="none" strokeLinecap="round" />
    </svg>
  );
};

export const CockroachTrio = ({ size = 80, className = '' }) => {
  const scale = size / 80;
  const Roach = ({ x, color, legColor }) => (
    <g transform={`translate(${x}, 15)`}>
      {/* Body */}
      <ellipse cx="12" cy="30" rx="8" ry="14" fill={color} />
      {/* Head */}
      <circle cx="12" cy="14" r="7" fill={color} />
      {/* Eyes */}
      <circle cx="9" cy="12" r="3" fill="white" />
      <circle cx="15" cy="12" r="3" fill="white" />
      <circle cx="9" cy="12" r="1.5" fill="#1A1A2E" />
      <circle cx="15" cy="12" r="1.5" fill="#1A1A2E" />
      {/* Antennae */}
      <path d="M9 8 Q5 0, 2 2" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M15 8 Q19 0, 22 2" stroke={color} strokeWidth="1.5" fill="none" />
      {/* Legs */}
      <line x1="5" y1="25" x2="0" y2="30" stroke={legColor} strokeWidth="1.5" />
      <line x1="5" y1="30" x2="0" y2="36" stroke={legColor} strokeWidth="1.5" />
      <line x1="19" y1="25" x2="24" y2="30" stroke={legColor} strokeWidth="1.5" />
      <line x1="19" y1="30" x2="24" y2="36" stroke={legColor} strokeWidth="1.5" />
      {/* Grin */}
      <path d="M8 18 Q12 22, 16 18" stroke="#333" strokeWidth="1" fill="none" />
    </g>
  );
  return (
    <svg width={80 * scale} height={65 * scale} viewBox="0 0 80 65" className={className}>
      <Roach x={0} color="#8D6E63" legColor="#5D4037" />
      <Roach x={25} color="#D4E157" legColor="#9E9D24" />
      <Roach x={50} color="#EC407A" legColor="#AD1457" />
    </svg>
  );
};

export const BheemWarrior = ({ size = 130, mood = 'fierce', className = '' }) => {
  const scale = size / 120;
  return (
    <svg width={120 * scale} height={120 * scale} viewBox="0 0 120 120" className={className}>
      {/* Hair - spiky */}
      <ellipse cx="60" cy="28" rx="18" ry="14" fill="#1A1A2E" />
      <path d="M45 20 L48 10 L52 18 L56 8 L60 16 L64 8 L68 18 L72 10 L75 20" fill="#1A1A2E" />
      {/* Face - brown skin */}
      <ellipse cx="60" cy="36" rx="16" ry="17" fill="#C68642" />
      {/* Eyes */}
      {mood === 'fierce' ? (
        <>
          <ellipse cx="53" cy="35" rx="3.5" ry="2.5" fill="white" />
          <ellipse cx="67" cy="35" rx="3.5" ry="2.5" fill="white" />
          <circle cx="53" cy="35" r="2" fill="#1A1A2E" />
          <circle cx="67" cy="35" r="2" fill="#1A1A2E" />
          <line x1="47" y1="31" x2="55" y2="33" stroke="#333" strokeWidth="2" />
          <line x1="73" y1="31" x2="65" y2="33" stroke="#333" strokeWidth="2" />
        </>
      ) : (
        <>
          <ellipse cx="53" cy="35" rx="4" ry="4" fill="white" />
          <ellipse cx="67" cy="35" rx="4" ry="4" fill="white" />
          <circle cx="53" cy="35" r="2.5" fill="#333" />
          <circle cx="67" cy="35" r="2.5" fill="#333" />
        </>
      )}
      {/* Nose & mouth */}
      <path d="M60 38 L58 42 L61 41" stroke="#A0673A" strokeWidth="0.8" fill="none" />
      {mood === 'fierce' ? (
        <path d="M53 47 Q60 44, 67 47" stroke="#333" strokeWidth="1.5" fill="none" />
      ) : (
        <path d="M54 46 Q60 50, 66 46" stroke="#333" strokeWidth="1.2" fill="none" />
      )}
      {/* Headband - red */}
      <rect x="42" y="24" width="36" height="5" rx="2" fill="#F44336" />
      {/* Body - muscular, orange dhoti */}
      <path d="M44 52 Q60 46, 76 52 L78 95 Q60 100, 42 95 Z" fill="#FF8F00" />
      {/* Chest - bare muscular */}
      <path d="M44 52 Q60 46, 76 52 L74 64 Q60 58, 46 64 Z" fill="#C68642" />
      {/* Chest muscles */}
      <path d="M52 56 Q56 54, 58 58" stroke="#B5753A" strokeWidth="0.8" fill="none" />
      <path d="M62 58 Q64 54, 68 56" stroke="#B5753A" strokeWidth="0.8" fill="none" />
      {/* Belt */}
      <rect x="42" y="72" width="36" height="4" rx="2" fill="#FFD600" />
      {/* Strong arms */}
      <rect x="32" y="54" width="12" height="28" rx="6" fill="#C68642" />
      <rect x="76" y="54" width="12" height="28" rx="6" fill="#C68642" />
      {/* Fists */}
      <circle cx="38" cy="84" r="6" fill="#C68642" />
      <circle cx="82" cy="84" r="6" fill="#C68642" />
      {/* Legs */}
      <rect x="46" y="92" width="10" height="16" rx="5" fill="#C68642" />
      <rect x="64" y="92" width="10" height="16" rx="5" fill="#C68642" />
      {/* Power aura */}
      {mood === 'fierce' && (
        <circle cx="60" cy="60" r="50" fill="url(#bheemPower)" opacity="0.1" />
      )}
      <defs>
        <radialGradient id="bheemPower">
          <stop offset="0%" stopColor="#FF6F00" />
          <stop offset="100%" stopColor="#FF6F00" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export const Kirmada = ({ size = 130, mood: _mood = 'menacing', className = '' }) => {
  const scale = size / 120;
  return (
    <svg width={120 * scale} height={120 * scale} viewBox="0 0 120 120" className={className}>
      {/* Horns */}
      <path d="M40 22 L30 2 L45 18" fill="#5D4037" />
      <path d="M80 22 L90 2 L75 18" fill="#5D4037" />
      {/* Head */}
      <ellipse cx="60" cy="32" rx="22" ry="20" fill="#4E342E" />
      {/* Wild hair */}
      <path d="M38 25 Q35 15, 42 12 Q48 8, 55 15" fill="#1A1A2E" />
      <path d="M82 25 Q85 15, 78 12 Q72 8, 65 15" fill="#1A1A2E" />
      {/* Eyes - red glowing */}
      <ellipse cx="50" cy="32" rx="6" ry="5" fill="#FFEB3B" />
      <ellipse cx="70" cy="32" rx="6" ry="5" fill="#FFEB3B" />
      <circle cx="50" cy="32" r="3" fill="#F44336" />
      <circle cx="70" cy="32" r="3" fill="#F44336" />
      <circle cx="50" cy="32" r="1.5" fill="#1A1A2E" />
      <circle cx="70" cy="32" r="1.5" fill="#1A1A2E" />
      {/* Angry brows */}
      <line x1="42" y1="24" x2="52" y2="27" stroke="#1A1A2E" strokeWidth="3" />
      <line x1="78" y1="24" x2="68" y2="27" stroke="#1A1A2E" strokeWidth="3" />
      {/* Nose - big */}
      <path d="M56 36 Q60 42, 64 36" fill="#3E2723" />
      {/* Mouth with fangs */}
      <path d="M44 44 Q60 55, 76 44" fill="#B71C1C" />
      <polygon points="50,44 53,52 47,52" fill="white" />
      <polygon points="70,44 73,52 67,52" fill="white" />
      {/* Massive body */}
      <path d="M32 52 Q60 44, 88 52 L92 100 Q60 108, 28 100 Z" fill="#5D4037" />
      {/* Armor pieces */}
      <rect x="40" y="55" width="40" height="8" rx="3" fill="#37474F" />
      <circle cx="60" cy="59" r="3" fill="#F44336" />
      {/* Huge arms */}
      <rect x="18" y="54" width="16" height="35" rx="8" fill="#4E342E" />
      <rect x="86" y="54" width="16" height="35" rx="8" fill="#4E342E" />
      {/* Clawed hands */}
      <path d="M18 88 L12 95 M22 88 L18 96 M26 88 L24 95" stroke="#3E2723" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M94 88 L96 95 M98 88 L102 96 M102 88 L108 95" stroke="#3E2723" strokeWidth="2.5" strokeLinecap="round" />
      {/* Legs */}
      <rect x="40" y="95" width="14" height="18" rx="7" fill="#4E342E" />
      <rect x="66" y="95" width="14" height="18" rx="7" fill="#4E342E" />
      {/* Dark aura */}
      <circle cx="60" cy="60" r="55" fill="url(#kirmadaDark)" opacity="0.15" />
      <defs>
        <radialGradient id="kirmadaDark">
          <stop offset="0%" stopColor="#B71C1C" />
          <stop offset="100%" stopColor="#1A1A2E" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

// Multi-headed serpent Kaliya for Krishna and the Serpent Kaliya story
export const KaliyaSerpent = ({ size = 140, mood = 'menacing', className = '' }) => {
  const moodColors = {
    menacing: { body: '#1B5E20', hood: '#2E7D32', eyes: '#F44336', belly: '#4CAF50' },
    angry: { body: '#004D40', hood: '#00695C', eyes: '#FF1744', belly: '#26A69A' },
    defeated: { body: '#37474F', hood: '#546E7A', eyes: '#FFB74D', belly: '#78909C' },
    humbled: { body: '#455A64', hood: '#607D8B', eyes: '#81C784', belly: '#90A4AE' },
  };
  const c = moodColors[mood] || moodColors.menacing;
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={className}>
      {/* Coiled body */}
      <ellipse cx="60" cy="85" rx="35" ry="20" fill={c.body} />
      <ellipse cx="60" cy="85" rx="28" ry="14" fill={c.belly} opacity="0.4" />
      {/* Main neck rising */}
      <path d="M60 75 Q60 40, 60 25" stroke={c.body} strokeWidth="12" fill="none" strokeLinecap="round" />
      <path d="M60 75 Q60 40, 60 25" stroke={c.belly} strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.3" />
      {/* Central hood */}
      <ellipse cx="60" cy="22" rx="16" ry="20" fill={c.hood} />
      <ellipse cx="60" cy="24" rx="10" ry="12" fill={c.belly} opacity="0.3" />
      {/* Left hood */}
      <path d="M38 70 Q30 45, 38 25" stroke={c.body} strokeWidth="8" fill="none" strokeLinecap="round" />
      <ellipse cx="38" cy="22" rx="12" ry="15" fill={c.hood} />
      {/* Right hood */}
      <path d="M82 70 Q90 45, 82 25" stroke={c.body} strokeWidth="8" fill="none" strokeLinecap="round" />
      <ellipse cx="82" cy="22" rx="12" ry="15" fill={c.hood} />
      {/* Eyes on central hood */}
      <circle cx="55" cy="20" r="3" fill={c.eyes} />
      <circle cx="65" cy="20" r="3" fill={c.eyes} />
      <circle cx="55" cy="20" r="1.5" fill="#000" />
      <circle cx="65" cy="20" r="1.5" fill="#000" />
      {/* Forked tongues */}
      <path d="M58 30 L56 36 M62 30 L64 36" stroke="#F44336" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M36 30 L34 35" stroke="#F44336" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M84 30 L86 35" stroke="#F44336" strokeWidth="1.2" strokeLinecap="round" />
      {/* Hood markings */}
      <circle cx="60" cy="14" r="3" fill="#FFD600" opacity="0.7" />
      <circle cx="38" cy="16" r="2" fill="#FFD600" opacity="0.7" />
      <circle cx="82" cy="16" r="2" fill="#FFD600" opacity="0.7" />
      {/* Scale pattern */}
      {[0, 8, 16, 24].map((i) => (
        <circle key={i} cx={45 + i} cy="85" r="2.5" fill={c.body} stroke={c.belly} strokeWidth="0.5" opacity="0.5" />
      ))}
      {/* Venom drips for menacing/angry */}
      {(mood === 'menacing' || mood === 'angry') && (
        <>
          <circle cx="56" cy="34" r="1.5" fill="#76FF03" opacity="0.8" />
          <circle cx="64" cy="36" r="1" fill="#76FF03" opacity="0.6" />
        </>
      )}
    </svg>
  );
};

// Fruit Seller old woman for Krishna and the Fruit Seller story
export const FruitSeller = ({ size = 120, mood = 'kind', className = '' }) => {
  const moodFaces = {
    kind: { mouth: 'M50 62 Q60 68, 70 62', eyes: '😊' },
    surprised: { mouth: 'M55 62 Q60 67, 65 62', eyes: '😲' },
    laughing: { mouth: 'M48 60 Q60 72, 72 60', eyes: '😄' },
    crying: { mouth: 'M52 65 Q60 60, 68 65', eyes: '😢' },
    overwhelmed: { mouth: 'M50 60 Q60 70, 70 60', eyes: '😮' },
  };
  const face = moodFaces[mood] || moodFaces.kind;
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={className}>
      {/* Sari (draped cloth) */}
      <path d="M35 50 Q60 45, 85 50 L88 105 Q60 110, 32 105 Z" fill="#FF7043" />
      <path d="M35 50 Q60 45, 85 50 L88 105 Q60 110, 32 105 Z" fill="url(#sariPattern)" opacity="0.3" />
      {/* Sari pallu (draped over head) */}
      <path d="M40 35 Q60 30, 75 35 L78 50 Q60 48, 38 50 Z" fill="#FF5722" />
      {/* Face */}
      <circle cx="60" cy="38" r="14" fill="#D7A97C" />
      {/* Wrinkles (she's old) */}
      <path d="M52 35 Q54 33, 56 35" stroke="#C49A6C" strokeWidth="0.8" fill="none" />
      <path d="M64 35 Q66 33, 68 35" stroke="#C49A6C" strokeWidth="0.8" fill="none" />
      {/* Eyes */}
      <circle cx="55" cy="37" r="2" fill="#3E2723" />
      <circle cx="65" cy="37" r="2" fill="#3E2723" />
      <circle cx="55.5" cy="36.5" r="0.8" fill="white" />
      <circle cx="65.5" cy="36.5" r="0.8" fill="white" />
      {/* Bindi */}
      <circle cx="60" cy="32" r="1.5" fill="#F44336" />
      {/* Nose */}
      <path d="M60 38 Q61 41, 60 42" stroke="#C49A6C" strokeWidth="1" fill="none" />
      {/* Nose ring */}
      <circle cx="58" cy="42" r="1.2" fill="#FFD600" />
      {/* Mouth */}
      <path d={face.mouth} stroke="#5D4037" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Arms */}
      <rect x="28" y="55" width="10" height="30" rx="5" fill="#D7A97C" />
      <rect x="82" y="55" width="10" height="30" rx="5" fill="#D7A97C" />
      {/* Fruit basket on head */}
      <ellipse cx="60" cy="22" rx="18" ry="8" fill="#8D6E63" />
      <ellipse cx="60" cy="20" rx="16" ry="7" fill="#A1887F" />
      {/* Fruits in basket */}
      <circle cx="53" cy="17" r="4" fill="#FF9800" /> {/* mango */}
      <circle cx="63" cy="16" r="4" fill="#E53935" /> {/* pomegranate */}
      <circle cx="70" cy="18" r="3" fill="#FFEB3B" /> {/* banana */}
      <circle cx="48" cy="18" r="3" fill="#4CAF50" /> {/* guava */}
      {/* Feet */}
      <ellipse cx="50" cy="108" rx="6" ry="3" fill="#D7A97C" />
      <ellipse cx="70" cy="108" rx="6" ry="3" fill="#D7A97C" />
      {/* Jewels mood - basket glows */}
      {(mood === 'overwhelmed' || mood === 'surprised') && (
        <ellipse cx="60" cy="19" rx="17" ry="8" fill="#FFD600" opacity="0.4" />
      )}
      <defs>
        <pattern id="sariPattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="5" cy="5" r="1" fill="#FFE082" opacity="0.5" />
        </pattern>
      </defs>
    </svg>
  );
};

// Govardhan Hill - mountain prop for Krishna Lifts Govardhan story
export const GovardhanHill = ({ size = 160, lifted = false, className = '' }) => (
  <svg width={size} height={size * 0.7} viewBox="0 0 160 112" className={className}>
    {/* Mountain body */}
    <path d="M10 100 L40 30 L70 55 L100 20 L130 45 L150 100 Z" fill="#4CAF50" />
    <path d="M10 100 L40 30 L70 55 L100 20 L130 45 L150 100 Z" fill="url(#hillGrad)" />
    {/* Rocky details */}
    <path d="M30 80 Q45 70, 55 80" fill="#388E3C" opacity="0.6" />
    <path d="M80 75 Q95 65, 110 75" fill="#388E3C" opacity="0.6" />
    {/* Trees on hill */}
    <circle cx="50" cy="45" r="8" fill="#2E7D32" />
    <circle cx="75" cy="52" r="6" fill="#1B5E20" />
    <circle cx="110" cy="42" r="7" fill="#2E7D32" />
    <rect x="49" y="48" width="2" height="8" fill="#5D4037" />
    <rect x="74" y="55" width="2" height="6" fill="#5D4037" />
    <rect x="109" y="45" width="2" height="7" fill="#5D4037" />
    {/* Flowers */}
    <circle cx="35" cy="65" r="2" fill="#FF7043" />
    <circle cx="90" cy="60" r="2" fill="#FFD54F" />
    <circle cx="120" cy="70" r="2" fill="#E91E63" />
    {/* Waterfall */}
    <path d="M100 50 Q102 70, 100 95" stroke="#81D4FA" strokeWidth="3" fill="none" opacity="0.7" />
    {/* Golden glow if lifted */}
    {lifted && (
      <ellipse cx="80" cy="100" rx="70" ry="15" fill="#FFD600" opacity="0.3" />
    )}
    <defs>
      <linearGradient id="hillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#66BB6A" />
        <stop offset="100%" stopColor="#2E7D32" />
      </linearGradient>
    </defs>
  </svg>
);

// Nagapatni (Kaliya's wife) for mercy scene
export const Nagapatni = ({ size = 100, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
    {/* Snake-woman upper body */}
    <ellipse cx="50" cy="75" rx="20" ry="15" fill="#26A69A" />
    {/* Human torso */}
    <path d="M40 45 Q50 40, 60 45 L62 65 Q50 68, 38 65 Z" fill="#80CBC4" />
    {/* Face */}
    <circle cx="50" cy="35" r="10" fill="#A5D6A7" />
    {/* Small hood behind head */}
    <ellipse cx="50" cy="28" rx="12" ry="10" fill="#00897B" />
    {/* Eyes */}
    <circle cx="46" cy="34" r="1.5" fill="#004D40" />
    <circle cx="54" cy="34" r="1.5" fill="#004D40" />
    {/* Tears */}
    <path d="M46 37 L45 41" stroke="#81D4FA" strokeWidth="1" strokeLinecap="round" />
    <path d="M54 37 L55 41" stroke="#81D4FA" strokeWidth="1" strokeLinecap="round" />
    {/* Crown/jewelry */}
    <circle cx="50" cy="26" r="2" fill="#FFD600" />
    {/* Folded hands */}
    <path d="M46 55 Q50 50, 54 55" fill="#A5D6A7" />
  </svg>
);
