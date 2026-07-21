import React from 'react';
import { Ripples, Birds, Rain, SpeedLines, Sparkle, Confetti, ThinkingBubbles, LightbulbIcon, DarkVignette, FireGlow, SunsetGlow } from '../Characters';
import { Jackal, Lion, Rabbit, Deer, Elephant, Fox, Well } from '../CharactersNew';

const scenes = {
  'lr-forest-intro': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Birds count={4} />
        <Sparkle count={3} />
        {/* Trees */}
        <rect x="60" y="180" width="28" height="200" fill="#4E342E" />
        <ellipse cx="74" cy="165" rx="50" ry="60" fill="#2E7D32" />
        <rect x="780" y="190" width="25" height="190" fill="#4E342E" />
        <ellipse cx="792" cy="180" rx="45" ry="55" fill="#388E3C" />
        <rect x="400" y="170" width="30" height="210" fill="#4E342E" />
        <ellipse cx="415" cy="155" rx="55" ry="65" fill="#43A047" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '15%', zIndex: 3 }}>
        <Deer size={70} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '8%', right: '15%', zIndex: 3 }}>
        <Rabbit size={50} mood="happy" />
      </div>
    </>
  ),

  'lr-lion-intro': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <FireGlow />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Lion size={200} mood="fierce" className="shake-animation" />
      </div>
    </>
  ),

  'lr-animals-suffer': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Rain />
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '15%', zIndex: 4 }}>
        <Deer size={80} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '15%', zIndex: 4 }}>
        <Rabbit size={60} mood="scared" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '50%', transform: 'translateX(-50%)', zIndex: 3, opacity: 0.7 }}>
        <Elephant size={100} />
      </div>
    </>
  ),

  'lr-meeting': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={3} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '5%', zIndex: 3 }}>
        <Elephant size={120} className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '35%', zIndex: 4 }}>
        <Deer size={80} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '30%', zIndex: 4 }}>
        <Fox size={70} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '10%', zIndex: 4 }}>
        <Rabbit size={60} mood="happy" />
      </div>
    </>
  ),

  'lr-proposal': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <LightbulbIcon x={450} y={50} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Fox size={120} className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '10%', zIndex: 3, opacity: 0.6 }}>
        <Deer size={70} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '10%', zIndex: 3, opacity: 0.6 }}>
        <Elephant size={90} />
      </div>
    </>
  ),

  'lr-lion-agrees': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <FireGlow />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Lion size={190} mood="menacing" className="pulse-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '10%', zIndex: 3, opacity: 0.5 }}>
        <Fox size={60} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '10%', zIndex: 3, opacity: 0.5 }}>
        <Deer size={60} />
      </div>
    </>
  ),

  'lr-sad-routine': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Rain />
        <DarkVignette />
      </svg>
      {/* Path leading to cave */}
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <path d="M200,420 Q450,350 700,300 Q750,290 780,300 Q820,320 800,350 Q780,380 750,380 L700,380" fill="#455A64" />
        {/* Cave entrance */}
        <path d="M700,250 Q750,200 800,250 Q820,280 800,350 Q780,380 750,380 L700,380 Q680,350 700,300 Q710,270 700,250" fill="#37474F" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '25%', zIndex: 4, opacity: 0.7 }}>
        <Deer size={80} className="float-animation" />
      </div>
    </>
  ),

  'lr-rabbits-turn': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={5} />
        <LightbulbIcon x={500} y={40} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Rabbit size={140} mood="clever" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '10%', zIndex: 3, opacity: 0.5 }}>
        <Rabbit size={60} mood="happy" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '10%', zIndex: 3, opacity: 0.5 }}>
        <Rabbit size={60} mood="happy" />
      </div>
    </>
  ),

  'lr-rabbit-walks-slow': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        {/* Path */}
        <path d="M100,380 Q300,350 500,360 Q700,370 900,340" stroke="#8D6E63" strokeWidth="15" fill="none" opacity="0.4" />
        {/* Grass */}
        <rect x="0" y="370" width="900" height="50" fill="#388E3C" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '35%', zIndex: 4 }}>
        <Rabbit size={100} mood="clever" className="float-animation" />
      </div>
    </>
  ),

  'lr-lion-angry': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <FireGlow />
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '30%', zIndex: 4 }}>
        <Lion size={200} mood="enraged" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', right: '20%', zIndex: 5 }}>
        <Rabbit size={80} mood="scared" className="anim-scared-shiver" />
      </div>
    </>
  ),

  'lr-rabbit-acts-scared': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '25%', zIndex: 4 }}>
        <Lion size={180} mood="enraged" className="pulse-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '25%', zIndex: 5 }}>
        <Rabbit size={90} mood="scared" className="anim-scared-shiver" />
      </div>
    </>
  ),

  'lr-rabbit-tells-story': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <ThinkingBubbles x={550} y={80} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '20%', zIndex: 4 }}>
        <Lion size={170} mood="fierce" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '20%', zIndex: 5 }}>
        <Rabbit size={100} mood="clever" className="bounce-animation" />
      </div>
    </>
  ),

  'lr-lion-jealous': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <FireGlow />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Lion size={200} mood="enraged" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '10%', zIndex: 5 }}>
        <Rabbit size={70} mood="clever" />
      </div>
      <div className="impact-text">!!!</div>
    </>
  ),

  'lr-rabbit-leads': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        {/* Forest path */}
        <rect x="60" y="180" width="22" height="200" fill="#4E342E" />
        <ellipse cx="71" cy="170" rx="40" ry="50" fill="#2E7D32" />
        <rect x="800" y="190" width="22" height="190" fill="#4E342E" />
        <ellipse cx="811" cy="180" rx="38" ry="48" fill="#388E3C" />
        <SpeedLines direction="right" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', right: '25%', zIndex: 5 }}>
        <Rabbit size={90} mood="clever" className="run-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '15%', zIndex: 4 }}>
        <Lion size={160} mood="enraged" className="run-animation" />
      </div>
    </>
  ),

  'lr-at-the-well': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={3} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <Well size={180} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', right: '10%', zIndex: 5 }}>
        <Rabbit size={80} mood="clever" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '10%', zIndex: 4 }}>
        <Lion size={150} mood="enraged" />
      </div>
    </>
  ),

  'lr-lion-looks-in': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <Well size={200} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '32%', left: '45%', zIndex: 4, transform: 'rotate(20deg)' }}>
        <Lion size={140} mood="fierce" className="pulse-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '8%', zIndex: 5 }}>
        <Rabbit size={70} mood="clever" />
      </div>
    </>
  ),

  'lr-lion-roars': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <FireGlow />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <Well size={190} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '35%', left: '43%', zIndex: 4 }}>
        <Lion size={150} mood="berserk" className="shake-animation" />
      </div>
      {/* Echo waves */}
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 5 }}>
        {[0,1,2].map(i => (
          <circle key={i} cx="450" cy="250" r={40 + i * 30} fill="none" stroke="#FF6F00" strokeWidth="2" opacity={0.3 - i * 0.08}>
            <animate attributeName="r" values={`${40+i*30};${70+i*30};${40+i*30}`} dur="1s" repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
      <div className="impact-text large">ROARRR!</div>
    </>
  ),

  'lr-lion-jumps': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SpeedLines direction="down" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <Well size={200} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '46%', zIndex: 5, transform: 'rotate(90deg)' }}>
        <Lion size={120} mood="berserk" className="shake-animation" />
      </div>
      <div className="impact-text large">SPLASH!</div>
    </>
  ),

  'lr-lion-trapped': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <Well size={200} />
      </div>
      {/* Lion inside well - just eyes visible */}
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 4 }}>
        <circle cx="430" cy="280" r="5" fill="#FF6F00">
          <animate attributeName="r" values="5;3;5" dur="1s" repeatCount="indefinite" />
        </circle>
        <circle cx="470" cy="280" r="5" fill="#FF6F00">
          <animate attributeName="r" values="5;3;5" dur="1s" repeatCount="indefinite" />
        </circle>
        <Ripples cx={450} cy={270} />
      </svg>
    </>
  ),

  'lr-rabbit-celebrates': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={6} />
        <Confetti />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '30%', zIndex: 3, opacity: 0.5 }}>
        <Well size={130} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', right: '25%', zIndex: 5 }}>
        <Rabbit size={140} mood="triumphant" className="anim-celebrate" />
      </div>
    </>
  ),

  'lr-returns-hero': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={8} />
        <Confetti />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Rabbit size={130} mood="triumphant" className="anim-celebrate" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '5%', zIndex: 3 }}>
        <Elephant size={110} className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '5%', zIndex: 3 }}>
        <Deer size={80} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '30%', zIndex: 3 }}>
        <Fox size={70} />
      </div>
    </>
  ),

  'lr-celebration': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={10} />
        <Confetti />
        <Birds count={4} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Rabbit size={110} mood="triumphant" className="anim-celebrate" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '8%', left: '5%', zIndex: 3 }}>
        <Elephant size={100} className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '30%', zIndex: 3 }}>
        <Deer size={70} className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '25%', zIndex: 3 }}>
        <Fox size={65} className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '5%', zIndex: 3 }}>
        <Jackal size={70} mood="neutral" className="bounce-animation" />
      </div>
    </>
  ),

  'lr-rabbit-humble': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={5} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Rabbit size={130} mood="happy" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '10%', zIndex: 3 }}>
        <Elephant size={100} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '10%', zIndex: 3 }}>
        <Deer size={70} />
      </div>
    </>
  ),

  'lr-peaceful-forest': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Birds count={4} />
        <Sparkle count={5} />
        {/* Trees */}
        <rect x="60" y="180" width="28" height="200" fill="#4E342E" />
        <ellipse cx="74" cy="165" rx="50" ry="60" fill="#66BB6A" />
        <rect x="780" y="190" width="25" height="190" fill="#4E342E" />
        <ellipse cx="792" cy="180" rx="45" ry="55" fill="#81C784" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '15%', zIndex: 3 }}>
        <Deer size={65} className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '35%', zIndex: 3 }}>
        <Rabbit size={50} mood="happy" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '8%', right: '25%', zIndex: 3 }}>
        <Fox size={55} className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '5%', right: '5%', zIndex: 3 }}>
        <Elephant size={80} className="float-animation" />
      </div>
    </>
  ),

  'lr-wisdom': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <Sparkle count={6} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Rabbit size={140} mood="clever" className="float-animation" />
      </div>
    </>
  ),

  'lr-moral-scene': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <Sparkle count={8} />
        <Birds count={3} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Rabbit size={130} mood="clever" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '10%', zIndex: 3, opacity: 0.4 }}>
        <Lion size={100} mood="neutral" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '10%', zIndex: 3, opacity: 0.4 }}>
        <Well size={80} />
      </div>
    </>
  ),

};

export default scenes;
