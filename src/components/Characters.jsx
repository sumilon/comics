import React from 'react';

// ============ MONKEY - Raktamukha ============
export const Monkey = ({ size = 150, mood = 'happy', className = '' }) => {
  const mouthPath = {
    happy: 'M85,118 Q100,132 115,118',
    delighted: 'M82,115 Q100,135 118,115',
    scared: 'M90,125 Q100,118 110,125',
    terrified: 'M88,120 A12,14 0 1,0 112,120',
    clever: 'M88,118 Q100,128 112,118',
    wise: 'M88,120 Q100,126 112,120',
    thinking: 'M90,122 L110,122',
    triumphant: 'M80,115 Q100,138 120,115',
    excited: 'M82,115 Q100,135 118,115',
    content: 'M86,118 Q100,130 114,118',
  }[mood] || 'M85,118 Q100,132 115,118';

  const eyeStyle = mood === 'thinking' ? { ry: 7, ey: 92 } : 
                   mood === 'terrified' ? { ry: 12, ey: 90 } :
                   mood === 'clever' ? { ry: 7, ey: 92 } :
                   { ry: 9, ey: 91 };

  return (
    <svg width={size} height={size} viewBox="0 0 200 200" className={className}>
      <defs>
        <radialGradient id="monkeyFur" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#C0834D" />
          <stop offset="70%" stopColor="#8B5E3C" />
          <stop offset="100%" stopColor="#6D4127" />
        </radialGradient>
        <radialGradient id="monkeyBelly" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="100%" stopColor="#FDDCB5" />
        </radialGradient>
        <radialGradient id="monkeyFace" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#FFD9B3" />
          <stop offset="100%" stopColor="#F5C28A" />
        </radialGradient>
        <filter id="softShadow">
          <feDropShadow dx="2" dy="3" stdDeviation="3" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Tail - curly with wag animation */}
      <path d="M45,145 Q15,140 10,110 Q5,80 25,65 Q35,58 40,68 Q30,75 28,95 Q26,115 40,125"
        fill="none" stroke="url(#monkeyFur)" strokeWidth="8" strokeLinecap="round">
        <animate attributeName="d"
          values="M45,145 Q15,140 10,110 Q5,80 25,65 Q35,58 40,68 Q30,75 28,95 Q26,115 40,125;M45,145 Q20,135 18,108 Q15,78 30,62 Q40,55 44,66 Q34,72 32,92 Q30,112 42,125;M45,145 Q15,140 10,110 Q5,80 25,65 Q35,58 40,68 Q30,75 28,95 Q26,115 40,125"
          dur="3s" repeatCount="indefinite" />
      </path>

      {/* Body */}
      <ellipse cx="100" cy="148" rx="38" ry="42" fill="url(#monkeyFur)" filter="url(#softShadow)" />
      <ellipse cx="100" cy="152" rx="26" ry="30" fill="url(#monkeyBelly)" />

      {/* Arms */}
      <path d="M62,135 Q45,145 40,160 Q38,168 45,168 Q50,168 55,158" fill="url(#monkeyFur)" stroke="#6D4127" strokeWidth="1" />
      <path d="M138,135 Q155,145 160,160 Q162,168 155,168 Q150,168 145,158" fill="url(#monkeyFur)" stroke="#6D4127" strokeWidth="1" />
      {/* Hands */}
      <circle cx="44" cy="166" r="7" fill="url(#monkeyFace)" />
      <circle cx="156" cy="166" r="7" fill="url(#monkeyFace)" />

      {/* Legs */}
      <ellipse cx="80" cy="188" rx="14" ry="9" fill="url(#monkeyFur)" />
      <ellipse cx="120" cy="188" rx="14" ry="9" fill="url(#monkeyFur)" />
      <ellipse cx="80" cy="192" rx="10" ry="6" fill="url(#monkeyFace)" />
      <ellipse cx="120" cy="192" rx="10" ry="6" fill="url(#monkeyFace)" />

      {/* Head */}
      <circle cx="100" cy="78" r="42" fill="url(#monkeyFur)" filter="url(#softShadow)" />
      
      {/* Ears */}
      <circle cx="56" cy="72" r="14" fill="url(#monkeyFur)" />
      <circle cx="56" cy="72" r="9" fill="#F5C28A" />
      <circle cx="144" cy="72" r="14" fill="url(#monkeyFur)" />
      <circle cx="144" cy="72" r="9" fill="#F5C28A" />

      {/* Face area */}
      <ellipse cx="100" cy="92" rx="30" ry="32" fill="url(#monkeyFace)" />

      {/* Eyes with blink animation */}
      <ellipse cx="87" cy={eyeStyle.ey} rx="8" ry={eyeStyle.ry} fill="white">
        <animate attributeName="ry" values={`${eyeStyle.ry};1;${eyeStyle.ry}`} dur="4s" begin="2s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
      </ellipse>
      <ellipse cx="113" cy={eyeStyle.ey} rx="8" ry={eyeStyle.ry} fill="white">
        <animate attributeName="ry" values={`${eyeStyle.ry};1;${eyeStyle.ry}`} dur="4s" begin="2s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
      </ellipse>
      <circle cx={mood === 'clever' ? 90 : 88} cy={eyeStyle.ey} r="5" fill="#2C1810">
        <animate attributeName="r" values="5;0.5;5" dur="4s" begin="2s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
      </circle>
      <circle cx={mood === 'clever' ? 116 : 114} cy={eyeStyle.ey} r="5" fill="#2C1810">
        <animate attributeName="r" values="5;0.5;5" dur="4s" begin="2s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
      </circle>
      <circle cx="89" cy={eyeStyle.ey - 2} r="2" fill="white">
        <animate attributeName="r" values="2;0;2" dur="4s" begin="2s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
      </circle>
      <circle cx="115" cy={eyeStyle.ey - 2} r="2" fill="white">
        <animate attributeName="r" values="2;0;2" dur="4s" begin="2s" repeatCount="indefinite" keyTimes="0;0.04;0.08" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
      </circle>

      {/* Eyebrows */}
      {mood === 'terrified' && <>
        <path d="M78,80 Q87,74 96,80" stroke="#5A3A1A" strokeWidth="2.5" fill="none" />
        <path d="M104,80 Q113,74 122,80" stroke="#5A3A1A" strokeWidth="2.5" fill="none" />
      </>}
      {mood === 'clever' && <>
        <path d="M78,84 Q87,78 96,82" stroke="#5A3A1A" strokeWidth="2.5" fill="none" />
        <path d="M104,82 Q113,78 122,84" stroke="#5A3A1A" strokeWidth="2.5" fill="none" />
      </>}
      {mood === 'wise' && <>
        <path d="M78,84 Q87,80 96,84" stroke="#5A3A1A" strokeWidth="2" fill="none" />
        <path d="M104,84 Q113,80 122,84" stroke="#5A3A1A" strokeWidth="2" fill="none" />
      </>}

      {/* Nose */}
      <ellipse cx="100" cy="105" rx="5" ry="4" fill="#A67B5B" />
      <circle cx="97" cy="105" r="1.5" fill="#6D4127" />
      <circle cx="103" cy="105" r="1.5" fill="#6D4127" />

      {/* Mouth */}
      <path d={mouthPath} stroke="#5A3A1A" strokeWidth="2.5" fill={mood === 'terrified' ? '#3a1a0a' : 'none'} strokeLinecap="round" />
      {(mood === 'delighted' || mood === 'triumphant' || mood === 'excited') &&
        <path d={mouthPath} fill="#C0392B" opacity="0.3" />
      }

      {/* Head tuft */}
      <path d="M88,40 Q95,28 100,38 Q105,28 112,40" fill="url(#monkeyFur)" />
      <path d="M92,42 Q98,32 104,42" fill="#A0704A" />

      {/* Blush for happy moods */}
      {['happy', 'delighted', 'content', 'excited'].includes(mood) && <>
        <circle cx="75" cy="102" r="7" fill="#FF9B9B" opacity="0.3" />
        <circle cx="125" cy="102" r="7" fill="#FF9B9B" opacity="0.3" />
      </>}

      {/* Thinking bubble */}
      {mood === 'thinking' && <>
        <circle cx="140" cy="55" r="4" fill="white" opacity="0.7" />
        <circle cx="150" cy="42" r="6" fill="white" opacity="0.7" />
        <circle cx="162" cy="28" r="9" fill="white" opacity="0.7" />
      </>}
    </svg>
  );
};

// ============ CROCODILE - Karalamukha ============
export const Crocodile = ({ size = 180, mood = 'neutral', className = '' }) => {
  const eyeY = mood === 'guilty' || mood === 'ashamed' ? 48 : 45;
  
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 300 140" className={className}>
      <defs>
        <linearGradient id="crocBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4A7A3F" />
          <stop offset="50%" stopColor="#3D6B34" />
          <stop offset="100%" stopColor="#2D5424" />
        </linearGradient>
        <linearGradient id="crocBelly" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C8D89A" />
          <stop offset="100%" stopColor="#A8C87A" />
        </linearGradient>
        <filter id="crocShadow">
          <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Tail */}
      <path d="M230,75 Q260,65 280,80 Q290,88 295,75 Q292,90 275,95 Q255,95 235,85"
        fill="url(#crocBody)" stroke="#2D5424" strokeWidth="1" />
      {/* Tail ridges */}
      <path d="M240,70 L245,62 L250,70" fill="#2D5424" />
      <path d="M255,68 L260,60 L265,68" fill="#2D5424" />
      <path d="M270,72 L274,65 L278,72" fill="#2D5424" />

      {/* Body */}
      <ellipse cx="160" cy="80" rx="80" ry="35" fill="url(#crocBody)" filter="url(#crocShadow)" />
      {/* Belly */}
      <ellipse cx="160" cy="88" rx="60" ry="22" fill="url(#crocBelly)" />
      
      {/* Body ridges/scales */}
      {[120, 140, 160, 180, 200].map((x, i) => (
        <path key={i} d={`M${x-5},50 L${x},40 L${x+5},50`} fill="#2D5424" />
      ))}
      {/* Scale pattern */}
      {[100, 125, 150, 175, 200].map((x, i) => (
        <path key={`s${i}`} d={`M${x},75 Q${x+12},68 ${x+24},75`} stroke="#4A7A3F" strokeWidth="1" fill="none" opacity="0.5" />
      ))}

      {/* Legs */}
      <path d="M110,100 Q105,118 95,125 Q92,128 98,128 Q105,128 110,120 Q112,115 115,108" fill="url(#crocBody)" />
      <path d="M200,100 Q205,118 215,125 Q218,128 212,128 Q205,128 200,120 Q198,115 195,108" fill="url(#crocBody)" />
      {/* Toes */}
      <circle cx="95" cy="127" r="3" fill="#3D6B34" />
      <circle cx="100" cy="128" r="3" fill="#3D6B34" />
      <circle cx="215" cy="127" r="3" fill="#3D6B34" />
      <circle cx="210" cy="128" r="3" fill="#3D6B34" />

      {/* Head */}
      <ellipse cx="70" cy="65" rx="45" ry="30" fill="url(#crocBody)" />
      
      {/* Snout */}
      <path d="M25,55 Q15,62 10,60 Q5,65 15,68 Q20,72 30,73 L60,75 L60,58 Z"
        fill="url(#crocBody)" stroke="#2D5424" strokeWidth="1" />
      {/* Lower jaw */}
      <path d="M10,65 Q15,72 30,78 Q45,82 60,80 L60,75 Q40,77 25,73 Q15,70 10,65"
        fill="#3D6B34" />
      {/* Jaw line */}
      <path d="M15,66 Q30,75 55,77" stroke="#2D5424" strokeWidth="1.5" fill="none" />

      {/* Teeth */}
      {mood !== 'ashamed' && <>
        <polygon points="20,63 22,58 24,63" fill="#FFFFF0" />
        <polygon points="30,62 32,56 34,62" fill="#FFFFF0" />
        <polygon points="40,61 42,55 44,61" fill="#FFFFF0" />
        <polygon points="22,70 24,75 26,70" fill="#FFFFF0" />
        <polygon points="32,71 34,77 36,71" fill="#FFFFF0" />
        <polygon points="42,72 44,78 46,72" fill="#FFFFF0" />
      </>}

      {/* Nostril bumps */}
      <circle cx="14" cy="58" r="4" fill="#4A7A3F" />
      <circle cx="14" cy="68" r="3" fill="#4A7A3F" />
      <circle cx="12" cy="58" r="1.5" fill="#2D5424" />

      {/* Eyes with blink */}
      <ellipse cx="55" cy={eyeY} rx="10" ry="12" fill="#E8E8D0" stroke="#2D5424" strokeWidth="2">
        <animate attributeName="ry" values="12;1;12" dur="5s" begin="1.5s" repeatCount="indefinite" keyTimes="0;0.03;0.06" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
      </ellipse>
      <ellipse cx="75" cy={eyeY - 2} rx="10" ry="12" fill="#E8E8D0" stroke="#2D5424" strokeWidth="2">
        <animate attributeName="ry" values="12;1;12" dur="5s" begin="1.5s" repeatCount="indefinite" keyTimes="0;0.03;0.06" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
      </ellipse>
      
      {mood === 'scheming' || mood === 'deceptive' ? <>
        <ellipse cx="55" cy={eyeY} rx="5" ry="4" fill="#8B0000" />
        <ellipse cx="75" cy={eyeY - 2} rx="5" ry="4" fill="#8B0000" />
      </> : <>
        <circle cx="55" cy={eyeY} r="5" fill={mood === 'ashamed' ? '#5A5A2A' : '#4A6A2A'} />
        <circle cx="75" cy={eyeY - 2} r="5" fill={mood === 'ashamed' ? '#5A5A2A' : '#4A6A2A'} />
      </>}
      <circle cx="56" cy={eyeY - 2} r="2" fill="white" opacity="0.8" />
      <circle cx="76" cy={eyeY - 4} r="2" fill="white" opacity="0.8" />

      {/* Eye ridges */}
      <path d="M44,38 Q55,32 66,38" stroke="#2D5424" strokeWidth="2.5" fill="none" />
      <path d="M64,36 Q75,30 86,36" stroke="#2D5424" strokeWidth="2.5" fill="none" />

      {/* Tears for sad/guilty/ashamed */}
      {(mood === 'guilty' || mood === 'ashamed' || mood === 'sad') && <>
        <ellipse cx="58" cy="58" rx="3" ry="5" fill="#87CEEB" opacity="0.7">
          <animate attributeName="cy" values="58;70;58" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;0;0.7" dur="2s" repeatCount="indefinite" />
        </ellipse>
      </>}
    </svg>
  );
};

// ============ CROCODILE'S WIFE ============
export const CrocodileWife = ({ size = 160, mood = 'neutral', className = '' }) => (
  <svg width={size} height={size * 0.6} viewBox="0 0 280 130" className={className}>
    <defs>
      <linearGradient id="wifeBody" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#5A8A4F" />
        <stop offset="100%" stopColor="#3D6B34" />
      </linearGradient>
    </defs>

    {/* Tail */}
    <path d="M210,70 Q240,60 260,75 Q265,80 268,72 Q265,85 250,88 Q235,88 215,80" fill="url(#wifeBody)" />
    
    {/* Body */}
    <ellipse cx="145" cy="75" rx="70" ry="30" fill="url(#wifeBody)" />
    <ellipse cx="145" cy="82" rx="50" ry="18" fill="#B8D88A" />

    {/* Body ridges */}
    {[110, 130, 150, 170, 190].map((x, i) => (
      <path key={i} d={`M${x-4},48 L${x},40 L${x+4},48`} fill="#3D6B34" />
    ))}

    {/* Head */}
    <ellipse cx="65" cy="60" rx="40" ry="26" fill="url(#wifeBody)" />
    
    {/* Snout */}
    <path d="M25,52 Q15,58 12,56 Q8,60 15,63 Q22,67 55,70 L55,55 Z" fill="url(#wifeBody)" />
    <path d="M12,60 Q20,67 50,72 L50,70 Q22,65 14,60" fill="#4A7A3F" />

    {/* Eyes with eyelashes */}
    <ellipse cx="52" cy="48" rx="9" ry="10" fill="#E8E8D0" stroke="#2D5424" strokeWidth="1.5" />
    <ellipse cx="70" cy="46" rx="9" ry="10" fill="#E8E8D0" stroke="#2D5424" strokeWidth="1.5" />
    
    {mood === 'scheming' || mood === 'angry' || mood === 'demanding' ? <>
      <ellipse cx="52" cy="48" rx="4" ry="3" fill="#8B0000" />
      <ellipse cx="70" cy="46" rx="4" ry="3" fill="#8B0000" />
    </> : <>
      <circle cx="52" cy="48" r="4" fill="#4A6A2A" />
      <circle cx="70" cy="46" r="4" fill="#4A6A2A" />
    </>}

    {/* Eyelashes */}
    <path d="M44,40 L41,35" stroke="#2D5424" strokeWidth="1.5" />
    <path d="M48,38 L46,33" stroke="#2D5424" strokeWidth="1.5" />
    <path d="M52,37 L52,32" stroke="#2D5424" strokeWidth="1.5" />
    <path d="M62,36 L60,31" stroke="#2D5424" strokeWidth="1.5" />
    <path d="M66,35 L65,30" stroke="#2D5424" strokeWidth="1.5" />
    <path d="M70,34 L70,29" stroke="#2D5424" strokeWidth="1.5" />

    {/* Evil smirk for scheming */}
    {(mood === 'scheming' || mood === 'angry' || mood === 'demanding') &&
      <path d="M20,62 Q35,70 50,64" stroke="#1a3a0a" strokeWidth="2" fill="none" />
    }

    {/* Legs */}
    <path d="M100,95 Q98,110 92,115 Q90,117 95,117 L102,108" fill="url(#wifeBody)" />
    <path d="M185,95 Q188,110 194,115 Q196,117 191,117 L184,108" fill="url(#wifeBody)" />
  </svg>
);

// ============ ROSE-APPLE TREE ============
export const RoseAppleTree = ({ size = 200, withFruits = true, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 200 220" className={className}>
    <defs>
      <radialGradient id="foliage1" cx="50%" cy="40%">
        <stop offset="0%" stopColor="#4CAF50" />
        <stop offset="100%" stopColor="#2E7D32" />
      </radialGradient>
      <radialGradient id="foliage2" cx="40%" cy="50%">
        <stop offset="0%" stopColor="#66BB6A" />
        <stop offset="100%" stopColor="#388E3C" />
      </radialGradient>
      <linearGradient id="trunk" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#5D4037" />
        <stop offset="40%" stopColor="#795548" />
        <stop offset="100%" stopColor="#4E342E" />
      </linearGradient>
      <radialGradient id="fruitGrad" cx="35%" cy="30%">
        <stop offset="0%" stopColor="#FF6B8A" />
        <stop offset="100%" stopColor="#E91E63" />
      </radialGradient>
    </defs>

    {/* Trunk */}
    <path d="M90,120 Q85,150 82,180 Q80,200 78,215 L122,215 Q120,200 118,180 Q115,150 110,120"
      fill="url(#trunk)" />
    {/* Trunk texture */}
    <path d="M92,140 Q100,138 108,140" stroke="#4E342E" strokeWidth="1" fill="none" opacity="0.5" />
    <path d="M90,160 Q100,157 110,160" stroke="#4E342E" strokeWidth="1" fill="none" opacity="0.5" />
    <path d="M88,180 Q100,177 112,180" stroke="#4E342E" strokeWidth="1" fill="none" opacity="0.5" />

    {/* Branches */}
    <path d="M92,130 Q60,120 40,100" stroke="url(#trunk)" strokeWidth="8" fill="none" strokeLinecap="round" />
    <path d="M108,130 Q140,120 160,100" stroke="url(#trunk)" strokeWidth="8" fill="none" strokeLinecap="round" />
    <path d="M95,115 Q70,95 55,75" stroke="url(#trunk)" strokeWidth="6" fill="none" strokeLinecap="round" />
    <path d="M105,115 Q130,95 145,75" stroke="url(#trunk)" strokeWidth="6" fill="none" strokeLinecap="round" />

    {/* Foliage layers (back to front) */}
    <ellipse cx="50" cy="80" rx="35" ry="30" fill="url(#foliage2)" opacity="0.9" />
    <ellipse cx="150" cy="80" rx="35" ry="30" fill="url(#foliage2)" opacity="0.9" />
    <ellipse cx="100" cy="55" rx="50" ry="40" fill="url(#foliage1)" />
    <ellipse cx="70" cy="65" rx="35" ry="28" fill="url(#foliage2)" />
    <ellipse cx="130" cy="65" rx="35" ry="28" fill="url(#foliage2)" />
    <ellipse cx="100" cy="40" rx="40" ry="30" fill="url(#foliage1)" opacity="0.8" />
    
    {/* Highlight on foliage */}
    <ellipse cx="90" cy="38" rx="20" ry="12" fill="#81C784" opacity="0.4" />
    <ellipse cx="65" cy="58" rx="12" ry="8" fill="#81C784" opacity="0.3" />

    {/* Rose-apple fruits */}
    {withFruits && <>
      <circle cx="60" cy="72" r="7" fill="url(#fruitGrad)" />
      <circle cx="80" cy="50" r="6" fill="url(#fruitGrad)" />
      <circle cx="120" cy="48" r="7" fill="url(#fruitGrad)" />
      <circle cx="140" cy="70" r="6" fill="url(#fruitGrad)" />
      <circle cx="95" cy="35" r="5" fill="url(#fruitGrad)" />
      <circle cx="110" cy="65" r="6" fill="url(#fruitGrad)" />
      <circle cx="50" cy="88" r="5" fill="url(#fruitGrad)" />
      <circle cx="150" cy="88" r="5" fill="url(#fruitGrad)" />
      {/* Fruit shine */}
      {[
        [58,69],[78,47],[118,45],[138,67],[93,32],[108,62],[48,85],[148,85]
      ].map(([x,y], i) => (
        <circle key={i} cx={x} cy={y} r="1.5" fill="white" opacity="0.6" />
      ))}
    </>}

    {/* Roots */}
    <path d="M78,215 Q70,218 60,215" stroke="#5D4037" strokeWidth="4" fill="none" strokeLinecap="round" />
    <path d="M122,215 Q130,218 140,215" stroke="#5D4037" strokeWidth="4" fill="none" strokeLinecap="round" />
  </svg>
);

// ============ FALLING FRUIT ============
export const FallingFruit = ({ x = 0, y = 0, delay = 0 }) => (
  <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
    <g transform={`translate(${x}, ${y})`}>
      <circle cx="0" cy="0" r="8" fill="#E91E63">
        <animate attributeName="cy" values="0;120" dur="1.5s" begin={`${delay}s`} repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0.3" dur="1.5s" begin={`${delay}s`} repeatCount="indefinite" />
      </circle>
      <circle cx="-2" cy="-3" r="2" fill="white" opacity="0.5">
        <animate attributeName="cy" values="-3;117" dur="1.5s" begin={`${delay}s`} repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0" dur="1.5s" begin={`${delay}s`} repeatCount="indefinite" />
      </circle>
    </g>
  </svg>
);

// ============ SCENE ELEMENTS ============
export const Water = ({ y = 0, dark = false }) => (
  <g>
    <defs>
      <linearGradient id={dark ? 'waterGradDark' : 'waterGradLight'} x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor={dark ? '#1565C0' : '#42A5F5'} stopOpacity="0.7" />
        <stop offset="40%" stopColor={dark ? '#0D47A1' : '#2196F3'} stopOpacity="0.75" />
        <stop offset="100%" stopColor={dark ? '#0A2E6B' : '#1976D2'} stopOpacity="0.85" />
      </linearGradient>
    </defs>
    {/* Main water body with gradient */}
    <rect x="0" y={y} width="1000" height="250" fill={`url(#${dark ? 'waterGradDark' : 'waterGradLight'})`} />
    {/* Surface highlight band */}
    <rect x="0" y={y} width="1000" height="8" fill={dark ? '#1E88E5' : '#90CAF9'} opacity="0.3">
      <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite" />
    </rect>
    {/* Primary wave lines - larger, slower */}
    {Array.from({ length: 12 }).map((_, i) => (
      <path
        key={`w1-${i}`}
        d={`M${i * 80},${y + 15 + (i % 3) * 20} Q${i * 80 + 20},${y + 5 + (i % 3) * 20} ${i * 80 + 40},${y + 15 + (i % 3) * 20}`}
        stroke={dark ? '#1565C0' : '#64B5F6'}
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      >
        <animate attributeName="d"
          values={`M${i*80},${y+15+(i%3)*20} Q${i*80+20},${y+5+(i%3)*20} ${i*80+40},${y+15+(i%3)*20};M${i*80},${y+20+(i%3)*20} Q${i*80+20},${y+10+(i%3)*20} ${i*80+40},${y+20+(i%3)*20};M${i*80},${y+15+(i%3)*20} Q${i*80+20},${y+5+(i%3)*20} ${i*80+40},${y+15+(i%3)*20}`}
          dur={`${2 + (i % 3)}s`} repeatCount="indefinite" />
      </path>
    ))}
    {/* Secondary wave lines - smaller, faster, offset */}
    {Array.from({ length: 8 }).map((_, i) => (
      <path
        key={`w2-${i}`}
        d={`M${i * 110 + 30},${y + 35 + (i % 2) * 25} Q${i * 110 + 55},${y + 28 + (i % 2) * 25} ${i * 110 + 80},${y + 35 + (i % 2) * 25}`}
        stroke={dark ? '#42A5F5' : '#BBDEFB'}
        strokeWidth="1.2"
        fill="none"
        opacity="0.35"
      >
        <animate attributeName="d"
          values={`M${i*110+30},${y+35+(i%2)*25} Q${i*110+55},${y+28+(i%2)*25} ${i*110+80},${y+35+(i%2)*25};M${i*110+30},${y+40+(i%2)*25} Q${i*110+55},${y+32+(i%2)*25} ${i*110+80},${y+40+(i%2)*25};M${i*110+30},${y+35+(i%2)*25} Q${i*110+55},${y+28+(i%2)*25} ${i*110+80},${y+35+(i%2)*25}`}
          dur={`${1.5 + (i % 3) * 0.4}s`} repeatCount="indefinite" />
      </path>
    ))}
    {/* Foam/sparkle dots on surface */}
    {Array.from({ length: 6 }).map((_, i) => (
      <circle key={`foam-${i}`} cx={80 + i * 140} cy={y + 4 + (i % 3) * 3} r="2"
        fill="white" opacity="0.4">
        <animate attributeName="opacity" values="0.1;0.5;0.1" dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
        <animate attributeName="cx" values={`${80+i*140};${95+i*140};${80+i*140}`} dur={`${3+i*0.3}s`} repeatCount="indefinite" />
      </circle>
    ))}
    {/* Deep shimmer */}
    {Array.from({ length: 4 }).map((_, i) => (
      <ellipse key={`shimmer-${i}`} cx={150 + i * 200} cy={y + 80 + (i % 2) * 40}
        rx="30" ry="4" fill={dark ? '#1E88E5' : '#90CAF9'} opacity="0.12">
        <animate attributeName="opacity" values="0.05;0.18;0.05" dur={`${4 + i}s`} repeatCount="indefinite" />
        <animate attributeName="rx" values="30;40;30" dur={`${4 + i}s`} repeatCount="indefinite" />
      </ellipse>
    ))}
  </g>
);

export const Ripples = ({ cx = 100, cy = 100 }) => (
  <g>
    {[0, 1, 2, 3, 4].map(i => (
      <ellipse key={i} cx={cx} cy={cy} rx="10" ry="3" fill="none"
        stroke={i % 2 === 0 ? '#90CAF9' : '#BBDEFB'} strokeWidth={1.5 - i * 0.2} opacity="0.6">
        <animate attributeName="rx" values="10;70" dur="3s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
        <animate attributeName="ry" values="3;22" dur="3s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0" dur="3s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
      </ellipse>
    ))}
  </g>
);

export const Splash = ({ cx = 100, cy = 100 }) => (
  <g>
    {/* Radial splash lines */}
    {[0, 30, 60, 90, 120, 150].map((angle, i) => (
      <line key={`l-${i}`}
        x1={cx} y1={cy}
        x2={cx + 20 * Math.cos(angle * Math.PI / 180)}
        y2={cy - 20 * Math.sin(angle * Math.PI / 180)}
        stroke="#90CAF9" strokeWidth="2" strokeLinecap="round"
      >
        <animate attributeName="x2" values={`${cx + 10*Math.cos(angle*Math.PI/180)};${cx + 35*Math.cos(angle*Math.PI/180)}`} dur="0.8s" repeatCount="indefinite" />
        <animate attributeName="y2" values={`${cy - 10*Math.sin(angle*Math.PI/180)};${cy - 35*Math.sin(angle*Math.PI/180)}`} dur="0.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0" dur="0.8s" repeatCount="indefinite" />
      </line>
    ))}
    {/* Water droplets flying outward */}
    {[15, 75, 105, 165].map((angle, i) => (
      <circle key={`d-${i}`} cx={cx} cy={cy} r={2 + i % 2}
        fill="#BBDEFB" opacity="0.8">
        <animate attributeName="cx" values={`${cx};${cx + 30*Math.cos(angle*Math.PI/180)}`} dur="0.9s" begin={`${i*0.15}s`} repeatCount="indefinite" />
        <animate attributeName="cy" values={`${cy};${cy - 25*Math.sin(angle*Math.PI/180) + 10}`} dur="0.9s" begin={`${i*0.15}s`} repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0" dur="0.9s" begin={`${i*0.15}s`} repeatCount="indefinite" />
      </circle>
    ))}
  </g>
);

export const Birds = ({ count = 3 }) => (
  <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
    {Array.from({ length: count }).map((_, i) => (
      <g key={i} transform={`translate(${100 + i * 120}, ${30 + i * 15})`}>
        {/* Bird body dot */}
        <circle cx="8" cy="0" r="1.5" fill="#444">
          <animate attributeName="r" values="1.5;2;1.5" dur={`${0.8 + i * 0.2}s`} repeatCount="indefinite" />
        </circle>
        {/* Left wing */}
        <path d="M8,0 Q4,-6 0,0" stroke="#333" strokeWidth="2" fill="none">
          <animate attributeName="d" values="M8,0 Q4,-8 0,0;M8,0 Q4,-2 0,2;M8,0 Q4,-8 0,0" dur={`${0.8 + i * 0.2}s`} repeatCount="indefinite" />
        </path>
        {/* Right wing */}
        <path d="M8,0 Q12,-6 16,0" stroke="#333" strokeWidth="2" fill="none">
          <animate attributeName="d" values="M8,0 Q12,-8 16,0;M8,0 Q12,-2 16,2;M8,0 Q12,-8 16,0" dur={`${0.8 + i * 0.2}s`} repeatCount="indefinite" />
        </path>
        <animateTransform attributeName="transform" type="translate"
          values={`${100 + i*120},${30 + i*15};${150 + i*120},${25 + i*15};${100 + i*120},${30 + i*15}`}
          dur={`${4 + i}s`} repeatCount="indefinite" />
      </g>
    ))}
  </svg>
);

export const Leaves = ({ count = 6 }) => (
  <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
    {Array.from({ length: count }).map((_, i) => {
      const cx = 50 + i * 140;
      const color = ['#4CAF50', '#66BB6A', '#81C784', '#A5D6A7', '#43A047', '#2E7D32'][i % 6];
      return (
        <g key={i}>
          {/* Leaf shape with vein */}
          <path d={`M${cx},-10 Q${cx+6},-18 ${cx},-26 Q${cx-6},-18 ${cx},-10`}
            fill={color} opacity="0.8">
            <animate attributeName="d"
              values={`M${cx},-10 Q${cx+6},-18 ${cx},-26 Q${cx-6},-18 ${cx},-10;M${cx},410 Q${cx+6},402 ${cx},394 Q${cx-6},402 ${cx},410`}
              dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0.5;0.8;0.4" dur={`${3+i*0.5}s`} repeatCount="indefinite" />
          </path>
          {/* Leaf vein */}
          <line x1={cx} y1={-10} x2={cx} y2={-26} stroke={color} strokeWidth="0.8" opacity="0.5">
            <animate attributeName="y1" values="-10;410" dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
            <animate attributeName="y2" values="-26;394" dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
          </line>
          {/* Horizontal drift */}
          <animateTransform attributeName="transform" type="translate"
            values={`0,0;${20+i*5},0;${-15-i*3},0;${10+i*4},0;0,0`}
            dur={`${3+i*0.5}s`} repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate"
            values={`0 ${cx} -18;180 ${cx} 200;360 ${cx} 400`}
            dur={`${3+i*0.5}s`} repeatCount="indefinite" additive="sum" />
        </g>
      );
    })}
  </svg>
);

export const Rain = ({ heavy = false }) => (
  <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
    {Array.from({ length: heavy ? 40 : 20 }).map((_, i) => {
      const x = 20 + (i * 31) % 900;
      const startY = (i * 47) % 50;
      const len = 10 + (i % 4) * 5;
      const windOffset = heavy ? 8 : 3;
      return (
        <line key={i}
          x1={x} y1={startY}
          x2={x - windOffset} y2={startY + len}
          stroke={i % 3 === 0 ? '#B3E5FC' : '#90CAF9'}
          strokeWidth={heavy ? (1.5 + (i % 3) * 0.5) : (1 + (i % 2) * 0.5)}
          opacity={0.3 + (i % 3) * 0.15}
          strokeLinecap="round"
        >
          <animate attributeName="y1" values={`${startY};${startY + 420}`} dur={`${0.35 + (i%5)*0.08}s`} repeatCount="indefinite" />
          <animate attributeName="y2" values={`${startY+len};${startY+len+420}`} dur={`${0.35 + (i%5)*0.08}s`} repeatCount="indefinite" />
        </line>
      );
    })}
    {/* Ground splash dots for heavy rain */}
    {heavy && Array.from({ length: 8 }).map((_, i) => (
      <circle key={`sp-${i}`} cx={50 + i * 110} cy={395} r="2" fill="#90CAF9" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur={`${0.6 + (i%3)*0.2}s`} begin={`${i*0.15}s`} repeatCount="indefinite" />
        <animate attributeName="r" values="1;5;1" dur={`${0.6 + (i%3)*0.2}s`} begin={`${i*0.15}s`} repeatCount="indefinite" />
      </circle>
    ))}
  </svg>
);

export const SpeedLines = ({ direction = 'right' }) => (
  <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
    {Array.from({ length: 8 }).map((_, i) => (
      <line key={i}
        x1={direction === 'right' ? 0 : 900}
        y1={50 + i * 45}
        x2={direction === 'right' ? 200 : 700}
        y2={50 + i * 45}
        stroke="#FFF"
        strokeWidth="2"
        opacity="0.4"
        strokeDasharray="20 30"
      >
        <animate attributeName="opacity" values="0;0.5;0" dur="0.6s" begin={`${i * 0.08}s`} repeatCount="indefinite" />
      </line>
    ))}
  </svg>
);

export const Sparkle = ({ count = 5 }) => (
  <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
    {Array.from({ length: count }).map((_, i) => {
      const x = 60 + (i * 170) % 800;
      const y = 30 + (i * 80) % 200;
      const scale = 0.7 + (i % 3) * 0.3;
      return (
        <g key={i} transform={`translate(${x}, ${y}) scale(${scale})`}>
          {/* Soft glow behind sparkle */}
          <circle cx="0" cy="0" r="10" fill="#FFD700" opacity="0.12">
            <animate attributeName="r" values="8;14;8" dur={`${1.2 + i * 0.3}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.05;0.2;0.05" dur={`${1.2 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
          {/* Cross lines */}
          <line x1="0" y1="-7" x2="0" y2="7" stroke="#FFD700" strokeWidth="2" strokeLinecap="round">
            <animate attributeName="opacity" values="0.2;1;0.2" dur={`${1 + i * 0.3}s`} repeatCount="indefinite" />
          </line>
          <line x1="-7" y1="0" x2="7" y2="0" stroke="#FFD700" strokeWidth="2" strokeLinecap="round">
            <animate attributeName="opacity" values="0.2;1;0.2" dur={`${1 + i * 0.3}s`} repeatCount="indefinite" />
          </line>
          {/* Diagonal lines */}
          <line x1="-4" y1="-4" x2="4" y2="4" stroke="#FFF176" strokeWidth="1.5" strokeLinecap="round">
            <animate attributeName="opacity" values="0.1;0.7;0.1" dur={`${1 + i * 0.3}s`} repeatCount="indefinite" />
          </line>
          <line x1="4" y1="-4" x2="-4" y2="4" stroke="#FFF176" strokeWidth="1.5" strokeLinecap="round">
            <animate attributeName="opacity" values="0.1;0.7;0.1" dur={`${1 + i * 0.3}s`} repeatCount="indefinite" />
          </line>
          {/* Scale pulse */}
          <animateTransform attributeName="transform" type="scale"
            values={`${scale};${scale*1.3};${scale}`} dur={`${1.5 + i * 0.2}s`} repeatCount="indefinite" additive="sum" />
        </g>
      );
    })}
  </svg>
);

export const Confetti = () => (
  <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
    {Array.from({ length: 30 }).map((_, i) => {
      const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#A8E6CF', '#FF8B94', '#DDA0DD', '#87CEEB', '#FF7043', '#FFD54F', '#CE93D8', '#80DEEA'];
      const x = 20 + (i * 37) % 860;
      const shape = i % 3;
      const dur = 1.5 + (i % 5) * 0.3;
      const sway = (i % 2 === 0 ? 1 : -1) * (15 + (i % 4) * 8);
      return shape === 0 ? (
        <rect key={i} x={x} y={-20} width={6 + i%3} height={4 + i%2} rx="1"
          fill={colors[i % colors.length]}
        >
          <animate attributeName="y" values="-20;430" dur={`${dur}s`} repeatCount="indefinite" />
          <animate attributeName="x" values={`${x};${x + sway};${x - sway/2};${x + sway/3}`} dur={`${dur}s`} repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" values={`0 ${x} 0;${360 * (i%2===0?1:-1)} ${x} 400`} dur={`${dur}s`} repeatCount="indefinite" />
        </rect>
      ) : shape === 1 ? (
        <circle key={i} cx={x} cy={-20} r={2 + i%3} fill={colors[i % colors.length]}>
          <animate attributeName="cy" values="-20;430" dur={`${dur + 0.3}s`} repeatCount="indefinite" />
          <animate attributeName="cx" values={`${x};${x + sway/2};${x}`} dur={`${dur + 0.3}s`} repeatCount="indefinite" />
        </circle>
      ) : (
        <polygon key={i} points={`${x},${-20} ${x-4},${-12} ${x+4},${-12}`}
          fill={colors[i % colors.length]}>
          <animate attributeName="points" values={`${x},-20 ${x-4},-12 ${x+4},-12;${x},430 ${x-4},438 ${x+4},438`} dur={`${dur + 0.2}s`} repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" values={`0 ${x} 0;${540 * (i%2===0?1:-1)} ${x} 400`} dur={`${dur+0.2}s`} repeatCount="indefinite" />
        </polygon>
      );
    })}
  </svg>
);

export const ThinkingBubbles = ({ x = 0, y = 0 }) => (
  <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
    <g transform={`translate(${x || 200}, ${y || 150})`}>
      <circle cx="0" cy="0" r="5" fill="white" opacity="0.6">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="15" cy="-15" r="8" fill="white" opacity="0.6">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
      </circle>
      <circle cx="32" cy="-32" r="12" fill="white" opacity="0.6">
        <animate attributeName="opacity" values="0.5;0.9;0.5" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
      </circle>
    </g>
  </svg>
);

export const LightbulbIcon = ({ x = 0, y = 0 }) => (
  <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
    <g transform={`translate(${x || 450}, ${y || 50})`}>
      <circle cx="0" cy="0" r="22" fill="#FFD700" opacity="0.3">
        <animate attributeName="r" values="22;30;22" dur="1s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.1;0.4;0.1" dur="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="0" cy="0" r="14" fill="#FFD700" opacity="0.7">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="0.8s" repeatCount="indefinite" />
      </circle>
      <rect x="-4" y="14" width="8" height="6" fill="#FFB300" rx="1" />
      {[-30, 0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300].map((angle, i) => (
        <line key={i}
          x1={18 * Math.cos(angle * Math.PI / 180)}
          y1={18 * Math.sin(angle * Math.PI / 180)}
          x2={26 * Math.cos(angle * Math.PI / 180)}
          y2={26 * Math.sin(angle * Math.PI / 180)}
          stroke="#FFD700" strokeWidth="2" strokeLinecap="round"
        >
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" begin={`${i * 0.08}s`} repeatCount="indefinite" />
        </line>
      ))}
    </g>
  </svg>
);

export const DarkVignette = () => (
  <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
    <defs>
      <radialGradient id="vignetteGrad" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="transparent" />
        <stop offset="100%" stopColor="rgba(0,0,0,0.4)" />
      </radialGradient>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#vignetteGrad)" />
  </svg>
);

export const FireGlow = () => (
  <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
    {[0, 1, 2].map(i => (
      <circle key={i} cx={400 + i * 50} cy={350} r="30" fill="#FF5722" opacity="0.15">
        <animate attributeName="r" values="30;45;30" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.1;0.25;0.1" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" />
      </circle>
    ))}
  </svg>
);

export const SunsetGlow = () => (
  <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
    <circle cx="450" cy="380" r="120" fill="#FF9800" opacity="0.15">
      <animate attributeName="r" values="120;140;120" dur="4s" repeatCount="indefinite" />
    </circle>
    <circle cx="450" cy="380" r="80" fill="#FF5722" opacity="0.1">
      <animate attributeName="r" values="80;95;80" dur="3s" repeatCount="indefinite" />
    </circle>
  </svg>
);

// ============ AMBIENT EFFECTS ============
export const Fireflies = ({ count = 8 }) => (
  <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
    {Array.from({ length: count }).map((_, i) => {
      const cx = 50 + (i * 113) % 800;
      const cy = 60 + (i * 67) % 300;
      return (
        <g key={i}>
          {/* Glow halo */}
          <circle cx={cx} cy={cy} r="8" fill="#FFEB3B" opacity="0">
            <animate attributeName="opacity" values="0;0.25;0" dur={`${2 + (i%3)*0.7}s`} begin={`${i*0.4}s`} repeatCount="indefinite" />
            <animate attributeName="r" values="6;12;6" dur={`${2 + (i%3)*0.7}s`} begin={`${i*0.4}s`} repeatCount="indefinite" />
          </circle>
          {/* Core dot */}
          <circle cx={cx} cy={cy} r="2" fill="#FFF9C4" opacity="0">
            <animate attributeName="opacity" values="0;0.9;0" dur={`${2 + (i%3)*0.7}s`} begin={`${i*0.4}s`} repeatCount="indefinite" />
          </circle>
          {/* Drift motion */}
          <animateTransform attributeName="transform" type="translate"
            values={`0,0;${8+i%5},-${6+i%4};${-5-i%3},${4+i%5};0,0`}
            dur={`${4 + i*0.5}s`} repeatCount="indefinite" />
        </g>
      );
    })}
  </svg>
);

export const DustMotes = ({ count = 10 }) => (
  <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
    {Array.from({ length: count }).map((_, i) => {
      const cx = 30 + (i * 89) % 850;
      const cy = 20 + (i * 43) % 380;
      const size = 1 + (i % 3) * 0.5;
      return (
        <circle key={i} cx={cx} cy={cy} r={size}
          fill={i % 2 === 0 ? '#FFFFFF' : '#FFE082'} opacity="0">
          <animate attributeName="opacity" values="0;0.35;0" dur={`${3 + (i%4)*0.8}s`} begin={`${i*0.6}s`} repeatCount="indefinite" />
          <animate attributeName="cy" values={`${cy};${cy - 15 - i%8}`} dur={`${5 + i*0.3}s`} repeatCount="indefinite" />
          <animate attributeName="cx" values={`${cx};${cx + 8 - (i%3)*5};${cx}`} dur={`${6 + i*0.4}s`} repeatCount="indefinite" />
        </circle>
      );
    })}
  </svg>
);

export const FloatingBubbles = ({ count = 6 }) => (
  <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
    {Array.from({ length: count }).map((_, i) => {
      const cx = 80 + (i * 130) % 750;
      const r = 4 + (i % 4) * 3;
      return (
        <g key={i}>
          {/* Bubble */}
          <circle cx={cx} cy={420} r={r}
            fill="none" stroke="#B3E5FC" strokeWidth="1" opacity="0.5">
            <animate attributeName="cy" values="420;-20" dur={`${5 + i*0.8}s`} begin={`${i*0.7}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.5;0.3;0" dur={`${5 + i*0.8}s`} begin={`${i*0.7}s`} repeatCount="indefinite" />
            <animate attributeName="cx" values={`${cx};${cx+10};${cx-8};${cx+5}`} dur={`${5 + i*0.8}s`} begin={`${i*0.7}s`} repeatCount="indefinite" />
          </circle>
          {/* Highlight */}
          <circle cx={cx - r*0.3} cy={420} r={r*0.25}
            fill="white" opacity="0">
            <animate attributeName="cy" values="420;-20" dur={`${5 + i*0.8}s`} begin={`${i*0.7}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.4;0.2;0" dur={`${5 + i*0.8}s`} begin={`${i*0.7}s`} repeatCount="indefinite" />
          </circle>
        </g>
      );
    })}
  </svg>
);
