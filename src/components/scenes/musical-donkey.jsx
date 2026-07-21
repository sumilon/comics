import React from 'react';
import { Birds, Rain, SpeedLines, Sparkle, DarkVignette, FireGlow, SunsetGlow, Fireflies } from '../Characters';
import { Jackal, VillageSilhouette, Moon, Stars2, Donkey, Washerman, Farmer } from '../CharactersNew';

const scenes = {
  'md-village-intro': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Birds count={3} />
        <Sparkle count={4} />
      </svg>
      <VillageSilhouette />
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '30%', zIndex: 4 }}>
        <Washerman size={140} className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '25%', zIndex: 4 }}>
        <Donkey size={130} mood="neutral" className="anim-sway" />
      </div>
    </>
  ),

  'md-donkey-works': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '20%', zIndex: 4 }}>
        <Washerman size={120} className="anim-drift" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Donkey size={150} mood="exhausted" className="anim-wobble" />
      </div>
    </>
  ),

  'md-night-escape': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Moon x={700} y={25} />
        <Stars2 count={18} />
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Donkey size={130} mood="sneaky" className="anim-drift" />
      </div>
      <Fireflies count={10} />
    </>
  ),

  'md-eating-fields': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Moon x={400} y={20} />
        <Stars2 count={12} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="340" width="900" height="80" fill="#2E7D32" />
        <rect x="0" y="350" width="300" height="70" fill="#388E3C" />
        <rect x="400" y="350" width="250" height="70" fill="#43A047" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Donkey size={140} mood="happy" className="anim-breathe" />
      </div>
    </>
  ),

  'md-meets-jackal': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Moon x={450} y={15} />
        <Stars2 count={10} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '25%', zIndex: 4 }}>
        <Donkey size={140} mood="happy" className="anim-sway" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '25%', zIndex: 4 }}>
        <Jackal size={110} mood="neutral" className="anim-entrance-pop" />
      </div>
    </>
  ),

  'md-friends-feast': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Moon x={350} y={20} />
        <Stars2 count={14} />
        <Sparkle count={4} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '30%', zIndex: 4 }}>
        <Donkey size={130} mood="happy" className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '28%', zIndex: 4 }}>
        <Jackal size={100} mood="happy" className="anim-wiggle" />
      </div>
    </>
  ),

  'md-moonlit-night': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Moon x={400} y={10} />
        <Stars2 count={22} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Donkey size={140} mood="happy" className="float-animation" />
      </div>
      <Fireflies count={14} />
    </>
  ),

  'md-donkey-wants-sing': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Moon x={450} y={15} />
        <Stars2 count={16} />
        <Sparkle count={5} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Donkey size={160} mood="dramatic" className="anim-grow" />
      </div>
    </>
  ),

  'md-jackal-warns': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Moon x={700} y={20} />
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '25%', zIndex: 4 }}>
        <Donkey size={140} mood="stubborn" className="anim-sway" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '22%', zIndex: 5 }}>
        <Jackal size={110} mood="scared" className="shake-animation" />
      </div>
      <div className="impact-text">!</div>
    </>
  ),

  'md-donkey-offended': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Moon x={650} y={25} />
        <FireGlow />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Donkey size={160} mood="proud" className="anim-swing" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '10%', zIndex: 3, opacity: 0.7 }}>
        <Jackal size={90} mood="worried" className="anim-wobble" />
      </div>
    </>
  ),

  'md-jackal-tries-again': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Moon x={700} y={20} />
        <Stars2 count={8} />
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '30%', zIndex: 4 }}>
        <Donkey size={140} mood="stubborn" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '25%', zIndex: 5 }}>
        <Jackal size={110} mood="pleading" className="pulse-animation" />
      </div>
    </>
  ),

  'md-jackal-leaves': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Moon x={700} y={25} />
        <Stars2 count={6} />
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '40%', zIndex: 4 }}>
        <Donkey size={140} mood="proud" className="anim-sway" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '5%', zIndex: 3, opacity: 0.5 }}>
        <Jackal size={90} mood="sad" className="anim-drift" />
      </div>
    </>
  ),

  'md-donkey-sings': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Moon x={400} y={15} />
        <Stars2 count={10} />
        <SpeedLines direction="up" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Donkey size={170} mood="singing" className="bounce-animation" />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 5 }}>
        {[0,1,2].map(i => (
          <circle key={i} cx="450" cy="180" r={50 + i * 35} fill="none" stroke="#FDD835" strokeWidth="2" opacity={0.4 - i * 0.1}>
            <animate attributeName="r" values={`${50+i*35};${90+i*35};${50+i*35}`} dur="1.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values={`${0.4-i*0.1};0;${0.4-i*0.1}`} dur="1.5s" repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
      <div className="impact-text large">HEE-HAW!</div>
    </>
  ),

  'md-farmers-wake': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <FireGlow />
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '20%', zIndex: 4 }}>
        <Farmer size={130} mood="angry" className="anim-entrance-pop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '50%', zIndex: 4 }}>
        <Farmer size={120} mood="angry" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '15%', zIndex: 4 }}>
        <Farmer size={125} mood="angry" className="anim-wobble" />
      </div>
    </>
  ),

  'md-farmers-find-donkey': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <FireGlow />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Donkey size={140} mood="scared" className="anim-scared-shiver" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '5%', zIndex: 3 }}>
        <Farmer size={110} mood="angry" className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '5%', zIndex: 3 }}>
        <Farmer size={115} mood="angry" className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '30%', zIndex: 3 }}>
        <Farmer size={105} mood="angry" className="anim-swing" />
      </div>
    </>
  ),

  'md-donkey-beaten': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SpeedLines direction="right" />
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '15%', zIndex: 5 }}>
        <Donkey size={130} mood="terrified" className="run-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '10%', zIndex: 3 }}>
        <Farmer size={110} mood="angry" className="run-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '30%', zIndex: 3 }}>
        <Farmer size={105} mood="angry" className="run-animation" />
      </div>
      <div className="impact-text large">!!!</div>
    </>
  ),

  'md-donkey-tied': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
        <Moon x={700} y={30} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Donkey size={150} mood="dejected" className="anim-sway" />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 5 }}>
        <rect x="400" y="340" width="100" height="18" rx="5" fill="#5D4037" />
        <line x1="450" y1="320" x2="450" y2="340" stroke="#795548" strokeWidth="3" />
      </svg>
    </>
  ),

  'md-donkey-limps-away': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Moon x={650} y={25} />
        <Stars2 count={6} />
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '40%', zIndex: 4 }}>
        <Donkey size={130} mood="hurt" className="anim-wobble" />
      </div>
    </>
  ),

  'md-jackal-finds-him': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Moon x={400} y={20} />
        <Stars2 count={8} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '30%', zIndex: 4 }}>
        <Donkey size={130} mood="hurt" className="anim-wobble" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '25%', zIndex: 5 }}>
        <Jackal size={100} mood="sad" className="anim-breathe" />
      </div>
    </>
  ),

  'md-donkey-regrets': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Rain />
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Donkey size={140} mood="ashamed" className="anim-sway" />
      </div>
    </>
  ),

  'md-jackal-helps': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Moon x={350} y={20} />
        <Stars2 count={10} />
        <Sparkle count={3} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '30%', zIndex: 4 }}>
        <Donkey size={130} mood="grateful" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '28%', zIndex: 5 }}>
        <Jackal size={100} mood="happy" className="anim-hop" />
      </div>
    </>
  ),

  'md-donkey-home': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Birds count={2} />
        <Sparkle count={3} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="550" y="200" width="200" height="180" fill="#5D4037" />
        <path d="M530,200 L650,130 L770,200" fill="#4E342E" />
        <rect x="620" y="260" width="60" height="120" fill="#3E2723" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '35%', zIndex: 4 }}>
        <Donkey size={130} mood="tired" className="anim-drift" />
      </div>
    </>
  ),

  'md-donkey-wiser': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Moon x={450} y={15} />
        <Stars2 count={14} />
        <Sparkle count={4} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Donkey size={140} mood="peaceful" className="anim-breathe" />
      </div>
    </>
  ),

  'md-friends-again': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Moon x={400} y={15} />
        <Stars2 count={18} />
        <Sparkle count={5} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '30%', zIndex: 4 }}>
        <Donkey size={130} mood="happy" className="anim-ripple-scale" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '28%', zIndex: 4 }}>
        <Jackal size={100} mood="happy" className="anim-wiggle" />
      </div>
    </>
  ),

  'md-wisdom': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <Sparkle count={6} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4, opacity: 0.6 }}>
        <Donkey size={150} mood="peaceful" className="float-animation" />
      </div>
    </>
  ),

  'md-moral-scene': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <Sparkle count={8} />
        <Birds count={3} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '30%', zIndex: 4 }}>
        <Donkey size={120} mood="happy" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', right: '25%', zIndex: 4 }}>
        <Jackal size={100} mood="happy" className="anim-sway" />
      </div>
    </>
  ),

};

export default scenes;
