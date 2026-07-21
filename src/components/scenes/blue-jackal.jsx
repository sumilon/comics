import React from 'react';
import { Water, Ripples, Splash, Birds, Rain, SpeedLines, Sparkle, Confetti, LightbulbIcon, DarkVignette, FireGlow, SunsetGlow, Fireflies } from '../Characters';
import { Jackal, Lion, Deer, Elephant, Fox, VillageSilhouette, DyeVat, Moon, Stars2 } from '../CharactersNew';

const scenes = {
  'bj-forest-intro': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Birds count={2} />
        {/* Trees */}
        <rect x="50" y="180" width="30" height="200" fill="#4E342E" />
        <ellipse cx="65" cy="170" rx="50" ry="60" fill="#2E7D32" />
        <rect x="750" y="200" width="25" height="180" fill="#4E342E" />
        <ellipse cx="762" cy="190" rx="45" ry="55" fill="#1B5E20" />
        <rect x="400" y="160" width="28" height="220" fill="#4E342E" />
        <ellipse cx="414" cy="150" rx="55" ry="65" fill="#33691E" />
      </svg>
    </>
  ),

  'bj-jackal-hungry': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
        {/* Trees */}
        <rect x="100" y="200" width="25" height="180" fill="#4E342E" />
        <ellipse cx="112" cy="190" rx="40" ry="50" fill="#1B5E20" />
        <rect x="700" y="180" width="25" height="200" fill="#4E342E" />
        <ellipse cx="712" cy="170" rx="45" ry="55" fill="#2E7D32" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Jackal size={150} mood="sad" className="float-animation" />
      </div>
    </>
  ),

  'bj-enters-village': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Moon x={700} y={20} />
        <Stars2 count={15} />
      </svg>
      <VillageSilhouette />
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '20%', zIndex: 4 }}>
        <Jackal size={120} mood="scared" className="run-animation" />
      </div>
      <Fireflies count={10} />
    </>
  ),

  'bj-dogs-chase': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Moon x={700} y={20} />
        <Stars2 count={8} />
        <SpeedLines direction="left" />
      </svg>
      <VillageSilhouette />
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Jackal size={130} mood="terrified" className="run-animation" />
      </div>
    </>
  ),

  'bj-falls-in-vat': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Splash cx={450} cy={250} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <DyeVat className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '48%', zIndex: 4, transform: 'rotate(-30deg)' }}>
        <Jackal size={90} mood="terrified" />
      </div>
      <div className="impact-text large">SPLASH!</div>
    </>
  ),

  'bj-dogs-run': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Moon x={700} y={20} />
        <Stars2 count={8} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Jackal size={150} blue mood="neutral" className="pulse-animation" />
      </div>
    </>
  ),

  'bj-sees-reflection': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <LightbulbIcon x={450} y={50} />
        <Sparkle count={5} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={300} />
        <Ripples cx={450} cy={340} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Jackal size={140} blue mood="scheming" className="pulse-animation" />
      </div>
    </>
  ),

  'bj-returns-forest': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={4} />
        {/* Trees */}
        <rect x="80" y="180" width="25" height="200" fill="#4E342E" />
        <ellipse cx="92" cy="170" rx="45" ry="55" fill="#2E7D32" />
        <rect x="750" y="190" width="25" height="190" fill="#4E342E" />
        <ellipse cx="762" cy="180" rx="40" ry="50" fill="#1B5E20" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Jackal size={150} blue mood="regal" className="pulse-animation" />
      </div>
    </>
  ),

  'bj-animals-bow': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={6} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Jackal size={140} blue mood="regal" className="pulse-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '5%', zIndex: 3 }}>
        <Deer size={80} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '8%', right: '5%', zIndex: 3 }}>
        <Elephant size={100} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '25%', zIndex: 3 }}>
        <Fox size={70} />
      </div>
    </>
  ),

  'bj-declares-king': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={8} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Jackal size={170} blue mood="regal" className="bounce-animation" />
      </div>
    </>
  ),

  'bj-crowned-king': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={8} />
        <Confetti />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Jackal size={160} blue mood="regal" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '8%', left: '5%', zIndex: 3 }}>
        <Lion size={100} mood="neutral" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '8%', right: '5%', zIndex: 3 }}>
        <Elephant size={110} />
      </div>
    </>
  ),

  'bj-living-well': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={6} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Jackal size={160} blue mood="regal" className="float-animation" />
      </div>
    </>
  ),

  'bj-banishes-jackals': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
        <FireGlow />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Jackal size={150} blue mood="regal" className="pulse-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '10%', zIndex: 3, opacity: 0.6 }}>
        <Jackal size={80} mood="sad" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '10%', zIndex: 3, opacity: 0.6 }}>
        <Jackal size={80} mood="sad" />
      </div>
    </>
  ),

  'bj-jackals-leave': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Rain />
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '15%', zIndex: 4 }}>
        <Jackal size={100} mood="sad" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '40%', zIndex: 4, opacity: 0.7 }}>
        <Jackal size={90} mood="sad" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '15%', zIndex: 4, opacity: 0.5 }}>
        <Jackal size={80} mood="sad" />
      </div>
    </>
  ),

  'bj-weeks-pass': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={5} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Jackal size={170} blue mood="regal" className="float-animation" />
      </div>
    </>
  ),

  'bj-moonlit-night': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Moon x={350} y={20} />
        <Stars2 count={20} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 1 }}>
        {/* Trees silhouette */}
        <rect x="50" y="250" width="20" height="150" fill="#0D1642" />
        <ellipse cx="60" cy="240" rx="40" ry="50" fill="#1A237E" opacity="0.5" />
        <rect x="800" y="260" width="20" height="140" fill="#0D1642" />
        <ellipse cx="810" cy="250" rx="35" ry="45" fill="#1A237E" opacity="0.5" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Jackal size={130} blue mood="neutral" className="float-animation" />
      </div>
      <Fireflies count={12} />
    </>
  ),

  'bj-hears-howling': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Moon x={350} y={20} />
        <Stars2 count={15} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Jackal size={140} blue mood="scared" className="anim-scared-shiver" />
      </div>
      {/* Howl sound waves */}
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 5 }}>
        <path d="M100,300 Q80,280 100,260" stroke="#FDD835" strokeWidth="3" fill="none" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M80,310 Q55,280 80,250" stroke="#FDD835" strokeWidth="3" fill="none" opacity="0.4">
          <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
        </path>
      </svg>
      <Fireflies count={8} />
    </>
  ),

  'bj-cannot-resist': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Moon x={350} y={20} />
        <Stars2 count={10} />
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Jackal size={150} blue mood="struggling" className="shake-animation" />
      </div>
      <Fireflies count={8} />
    </>
  ),

  'bj-howls': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Moon x={350} y={20} />
        <Stars2 count={12} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Jackal size={160} blue mood="howling" className="bounce-animation" />
      </div>
      {/* Sound waves */}
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 5 }}>
        {[0,1,2].map(i => (
          <circle key={i} cx="450" cy="200" r={60 + i * 40} fill="none" stroke="#FDD835" strokeWidth="2" opacity={0.4 - i * 0.1}>
            <animate attributeName="r" values={`${60+i*40};${100+i*40};${60+i*40}`} dur="1.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values={`${0.4-i*0.1};0;${0.4-i*0.1}`} dur="1.5s" repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
      <div className="impact-text large">AAOOOOO!</div>
    </>
  ),

  'bj-animals-realize': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <FireGlow />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Jackal size={130} blue mood="terrified" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '5%', zIndex: 3 }}>
        <Lion size={120} mood="enraged" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '5%', zIndex: 3 }}>
        <Deer size={80} />
      </div>
      <div className="impact-text">!</div>
    </>
  ),

  'bj-animals-angry': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <FireGlow />
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Jackal size={120} blue mood="terrified" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '8%', left: '5%', zIndex: 3 }}>
        <Lion size={130} mood="enraged" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '8%', right: '5%', zIndex: 3 }}>
        <Elephant size={120} className="shake-animation" />
      </div>
    </>
  ),

  'bj-chased-out': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SpeedLines direction="right" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '10%', zIndex: 5 }}>
        <Jackal size={120} blue mood="terrified" className="run-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '10%', zIndex: 3 }}>
        <Lion size={110} mood="enraged" className="run-animation" />
      </div>
    </>
  ),

  'bj-alone-again': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Rain />
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Jackal size={140} blue mood="sad" className="float-animation" />
      </div>
    </>
  ),

  'bj-jackals-reject': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Jackal size={120} blue mood="sad" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '10%', zIndex: 3 }}>
        <Jackal size={90} mood="neutral" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '10%', zIndex: 3 }}>
        <Jackal size={90} mood="neutral" />
      </div>
    </>
  ),

  'bj-wisdom': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <Sparkle count={4} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Jackal size={150} mood="neutral" className="float-animation" />
      </div>
    </>
  ),

  'bj-moral-scene': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <Sparkle count={8} />
        <Birds count={3} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '35%', zIndex: 4 }}>
        <Jackal size={120} mood="neutral" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', right: '25%', zIndex: 4, opacity: 0.5 }}>
        <Jackal size={100} blue mood="neutral" />
      </div>
    </>
  ),

};

export default scenes;
