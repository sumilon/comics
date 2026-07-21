import React from 'react';
import { Water, Birds, Rain, Sparkle, Confetti, DarkVignette, FireGlow, SunsetGlow } from '../Characters';
import { VillageSilhouette, Villagers, Cow, Krishna, Yashoda, Indra, GovardhanHill } from '../CharactersNew';

const Lightning = () => (
  <div className="scene-element" style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)', zIndex: 10, opacity: 0.7 }}>
    <svg width="60" height="120" viewBox="0 0 60 120">
      <path d="M30 0 L20 45 L35 45 L15 120 L40 55 L25 55 L40 0 Z" fill="#FFD600" opacity="0.9" />
    </svg>
  </div>
);

const scenes = {
  'kg-vrindavan-village': () => (
    <>
      <VillageSilhouette />
      <div className="scene-element" style={{ position: 'absolute', top: '15%', right: '15%', zIndex: 2 }}>
        <GovardhanHill size={140} />
      </div>
      <Birds count={5} />
      <Sparkle count={6} />
      <SunsetGlow intensity={0.3} />
    </>
  ),

  'kg-krishna-with-cows': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '35%', zIndex: 5 }}>
        <Krishna size={130} mood="playing" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '10%', zIndex: 3 }}>
        <Cow size={100} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '15%', zIndex: 3 }}>
        <Cow size={90} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '10%', right: '20%', zIndex: 2 }}>
        <GovardhanHill size={120} />
      </div>
      <Birds count={4} />
      <Sparkle count={5} />
    </>
  ),

  'kg-villagers-prepare-puja': () => (
    <>
      <VillageSilhouette />
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Villagers count={4} />
      </div>
      <Sparkle count={8} />
      <FireGlow color="#FF9800" intensity={0.3} />
    </>
  ),

  'kg-yashoda-explains': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '30%', zIndex: 5 }}>
        <Yashoda size={140} mood="happy" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '30%', zIndex: 5 }}>
        <Krishna size={110} mood="curious" className="anim-breathe" />
      </div>
      <SunsetGlow intensity={0.3} />
    </>
  ),

  'kg-krishna-questions': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Krishna size={140} mood="calm" className="float-animation" />
      </div>
      <Sparkle count={8} />
      <FireGlow color="#FFD600" intensity={0.2} />
    </>
  ),

  'kg-villagers-convinced': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Villagers count={5} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '15%', zIndex: 6 }}>
        <Krishna size={110} mood="happy" className="bounce-animation" />
      </div>
      <Sparkle count={5} />
    </>
  ),

  'kg-govardhan-puja': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
        <GovardhanHill size={180} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Villagers count={5} />
      </div>
      <Sparkle count={12} />
      <Confetti />
    </>
  ),

  'kg-indra-angry': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Indra size={160} mood="angry" className="shake-animation" />
      </div>
      <DarkVignette intensity={0.5} />
      <FireGlow color="#1A237E" intensity={0.4} />
      <Lightning />
    </>
  ),

  'kg-storm-clouds-gather': () => (
    <>
      <DarkVignette intensity={0.6} />
      <div className="scene-element" style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <svg width="300" height="100" viewBox="0 0 300 100">
          {[30, 90, 150, 210, 270].map((x, i) => (
            <ellipse key={i} cx={x} cy={50} rx={40} ry={30} fill="#263238" opacity={0.8 - i * 0.05} />
          ))}
        </svg>
      </div>
      <Lightning />
      <Rain intensity={0.8} />
    </>
  ),

  'kg-terrible-rain': () => (
    <>
      <DarkVignette intensity={0.7} />
      <Rain intensity={1} />
      <Lightning />
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Villagers count={3} className="shake-animation" />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}><Water y={350} /></svg>
    </>
  ),

  'kg-villagers-run-to-krishna': () => (
    <>
      <DarkVignette intensity={0.5} />
      <Rain intensity={0.7} />
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', right: '25%', zIndex: 5 }}>
        <Krishna size={130} mood="calm" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '15%', zIndex: 4 }}>
        <Yashoda size={120} mood="worried" className="shake-animation" />
      </div>
    </>
  ),

  'kg-krishna-walks-to-hill': () => (
    <>
      <DarkVignette intensity={0.4} />
      <Rain intensity={0.6} />
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Krishna size={140} mood="calm" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '10%', right: '10%', zIndex: 2 }}>
        <GovardhanHill size={130} />
      </div>
      <FireGlow color="#FFD600" intensity={0.4} />
    </>
  ),

  'kg-krishna-lifts-mountain': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <GovardhanHill size={200} lifted={true} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Krishna size={140} mood="lifting" className="float-animation" />
      </div>
      <Sparkle count={15} />
      <FireGlow color="#FFD600" intensity={0.5} />
      <Confetti />
    </>
  ),

  'kg-villagers-shelter': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', top: '2%', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
        <GovardhanHill size={220} lifted={true} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Villagers count={5} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '15%', zIndex: 3 }}>
        <Cow size={80} />
      </div>
      <Sparkle count={10} />
    </>
  ),

  'kg-seven-days-pass': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
        <GovardhanHill size={200} lifted={true} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Krishna size={130} mood="calm" className="float-animation" />
      </div>
      <Sparkle count={8} />
      <SunsetGlow intensity={0.3} />
    </>
  ),

  'kg-indra-shocked': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Indra size={150} mood="worried" className="shake-animation" />
      </div>
      <DarkVignette intensity={0.3} />
      <Lightning />
      <Sparkle count={5} />
    </>
  ),

  'kg-indra-realizes': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Indra size={140} mood="worried" className="anim-breathe" />
      </div>
      <Sparkle count={10} />
      <SunsetGlow intensity={0.4} />
    </>
  ),

  'kg-storm-stops': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
        <svg width="300" height="30" viewBox="0 0 300 30">
          <defs><linearGradient id="rainbow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F44336" /><stop offset="17%" stopColor="#FF9800" />
            <stop offset="33%" stopColor="#FFEB3B" /><stop offset="50%" stopColor="#4CAF50" />
            <stop offset="67%" stopColor="#2196F3" /><stop offset="83%" stopColor="#3F51B5" />
            <stop offset="100%" stopColor="#9C27B0" />
          </linearGradient></defs>
          <path d="M10 28 Q150 -10, 290 28" stroke="url(#rainbow)" strokeWidth="6" fill="none" />
        </svg>
      </div>
      <Sparkle count={15} />
      <SunsetGlow intensity={0.5} />
      <Confetti />
      <Birds count={5} />
    </>
  ),

  'kg-indra-bows': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '30%', zIndex: 5 }}>
        <Indra size={130} mood="worried" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '24%', right: '30%', zIndex: 5 }}>
        <Krishna size={120} mood="calm" className="float-animation" />
      </div>
      <Sparkle count={12} />
      <SunsetGlow intensity={0.4} />
    </>
  ),

  'kg-celebration': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Krishna size={140} mood="happy" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '10%', zIndex: 4 }}>
        <Villagers count={4} />
      </div>
      <Confetti />
      <Sparkle count={15} />
      <SunsetGlow intensity={0.5} />
      <Birds count={4} />
    </>
  ),

};

export default scenes;
