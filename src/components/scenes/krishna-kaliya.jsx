import React from 'react';
import { Water, Birds, SpeedLines, Sparkle, Confetti, DarkVignette, FireGlow, SunsetGlow } from '../Characters';
import { Villagers, Cow, Fish, Krishna, Yashoda, KaliyaSerpent, Nagapatni } from '../CharactersNew';

const scenes = {
  'kk-yamuna-river': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}><Water y={280} /></svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <svg width="200" height="40" viewBox="0 0 200 40">
          {[0, 40, 80, 120, 160].map((x, i) => (
            <ellipse key={i} cx={x + 20} cy={20} rx={15} ry={8} fill="#4DD0E1" opacity={0.5} />
          ))}
        </svg>
      </div>
      <Birds count={4} />
      <Sparkle count={5} />
      <SunsetGlow intensity={0.2} />
    </>
  ),

  'kk-dark-pool': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}><Water y={260} /></svg>
      <DarkVignette intensity={0.6} />
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <svg width="150" height="80" viewBox="0 0 150 80">
          <ellipse cx="75" cy="40" rx="70" ry="35" fill="#1A237E" opacity="0.6" />
          {[30, 60, 90, 120].map((x, i) => (
            <circle key={i} cx={x} cy={30 + i * 5} r={3 + i} fill="#76FF03" opacity={0.3 + i * 0.1}>
              <animate attributeName="cy" values={`${30 + i * 5};${25 + i * 5};${30 + i * 5}`} dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </svg>
      </div>
      <FireGlow color="#1B5E20" intensity={0.3} />
    </>
  ),

  'kk-kaliya-in-river': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}><Water y={300} /></svg>
      <DarkVignette intensity={0.5} />
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <KaliyaSerpent size={160} mood="menacing" className="anim-breathe" />
      </div>
      <FireGlow color="#004D40" intensity={0.4} />
    </>
  ),

  'kk-poisoned-water': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}><Water y={280} /></svg>
      <DarkVignette intensity={0.5} />
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '20%', zIndex: 4 }}>
        <Fish size={50} color="#37474F" mood="neutral" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', right: '25%', zIndex: 4 }}>
        <Villagers count={3} className="shake-animation" />
      </div>
      <FireGlow color="#1B5E20" intensity={0.3} />
    </>
  ),

  'kk-cows-sick': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '25%', zIndex: 4 }}>
        <Cow size={110} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', right: '25%', zIndex: 5 }}>
        <Krishna size={110} mood="sad" className="anim-breathe" />
      </div>
      <DarkVignette intensity={0.3} />
    </>
  ),

  'kk-krishna-angry': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Krishna size={150} mood="determined" className="anim-breathe" />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}><Water y={340} /></svg>
      <FireGlow color="#FF6F00" intensity={0.4} />
      <Sparkle count={5} />
    </>
  ),

  'kk-friends-warn': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Krishna size={130} mood="happy" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '10%', zIndex: 4 }}>
        <Villagers count={3} />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}><Water y={360} /></svg>
    </>
  ),

  'kk-krishna-climbs-tree': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '40%', zIndex: 3 }}>
        <svg width="80" height="180" viewBox="0 0 80 180">
          <rect x="35" y="60" width="10" height="120" fill="#5D4037" />
          <circle cx="40" cy="40" r="35" fill="#2E7D32" />
          <circle cx="25" cy="55" r="20" fill="#388E3C" />
          <circle cx="55" cy="50" r="22" fill="#1B5E20" />
        </svg>
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '50%', left: '42%', zIndex: 5 }}>
        <Krishna size={100} mood="playful" className="bounce-animation" />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}><Water y={360} /></svg>
      <DarkVignette intensity={0.3} />
    </>
  ),

  'kk-krishna-jumps': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '35%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Krishna size={130} mood="playful" className="bounce-animation" />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}><Water y={280} /></svg>
      <SpeedLines direction="down" />
      <Sparkle count={8} />
    </>
  ),

  'kk-kaliya-attacks': () => (
    <>
      <DarkVignette intensity={0.6} />
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <KaliyaSerpent size={180} mood="angry" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '50%', transform: 'translateX(-50%)', zIndex: 6 }}>
        <Krishna size={100} mood="calm" className="anim-breathe" />
      </div>
      <FireGlow color="#004D40" intensity={0.5} />
    </>
  ),

  'kk-villagers-faint': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Villagers count={4} className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '15%', zIndex: 5 }}>
        <Yashoda size={130} mood="worried" className="shake-animation" />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}><Water y={340} /></svg>
      <DarkVignette intensity={0.4} />
    </>
  ),

  'kk-krishna-breaks-free': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 6 }}>
        <Krishna size={150} mood="playful" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <KaliyaSerpent size={160} mood="angry" className="shake-animation" />
      </div>
      <Sparkle count={12} />
      <FireGlow color="#FFD600" intensity={0.4} />
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}><Water y={340} /></svg>
    </>
  ),

  'kk-krishna-dances': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '50%', transform: 'translateX(-50%)', zIndex: 6 }}>
        <Krishna size={130} mood="dancing" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <KaliyaSerpent size={170} mood="defeated" className="shake-animation" />
      </div>
      <Sparkle count={15} />
      <FireGlow color="#FFD600" intensity={0.5} />
      <Confetti />
    </>
  ),

  'kk-cosmic-dance': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '50%', transform: 'translateX(-50%)', zIndex: 6 }}>
        <Krishna size={150} mood="dancing" className="float-animation" />
      </div>
      <Sparkle count={20} />
      <FireGlow color="#7C4DFF" intensity={0.5} />
      <Confetti />
      <SunsetGlow intensity={0.3} />
    </>
  ),

  'kk-kaliya-weakens': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '50%', transform: 'translateX(-50%)', zIndex: 6 }}>
        <Krishna size={130} mood="dancing" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <KaliyaSerpent size={150} mood="defeated" className="anim-breathe" />
      </div>
      <Sparkle count={10} />
      <FireGlow color="#FFD600" intensity={0.4} />
    </>
  ),

  'kk-kaliya-wives-beg': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Nagapatni size={120} className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', right: '20%', zIndex: 4 }}>
        <Krishna size={110} mood="calm" className="float-animation" />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}><Water y={360} /></svg>
      <Sparkle count={8} />
    </>
  ),

  'kk-krishna-shows-mercy': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Krishna size={150} mood="calm" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '15%', zIndex: 4 }}>
        <KaliyaSerpent size={120} mood="humbled" className="anim-breathe" />
      </div>
      <Sparkle count={12} />
      <SunsetGlow intensity={0.3} />
    </>
  ),

  'kk-kaliya-bows': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <KaliyaSerpent size={140} mood="humbled" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', right: '20%', zIndex: 6 }}>
        <Krishna size={120} mood="calm" className="float-animation" />
      </div>
      <Sparkle count={10} />
      <SunsetGlow intensity={0.4} />
    </>
  ),

  'kk-river-purified': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}><Water y={300} /></svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '30%', zIndex: 4 }}>
        <Fish size={50} color="#42A5F5" mood="neutral" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '32%', right: '30%', zIndex: 4 }}>
        <Fish size={40} color="#26C6DA" mood="neutral" />
      </div>
      <Sparkle count={15} />
      <SunsetGlow intensity={0.4} />
      <Birds count={5} />
    </>
  ),

  'kk-celebration': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Krishna size={140} mood="happy" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '10%', zIndex: 4 }}>
        <Villagers count={4} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '10%', zIndex: 3 }}>
        <Cow size={80} />
      </div>
      <Confetti />
      <Sparkle count={15} />
      <SunsetGlow intensity={0.5} />
    </>
  ),

};

export default scenes;
