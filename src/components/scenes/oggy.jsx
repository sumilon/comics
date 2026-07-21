import React from 'react';
import { Birds, Rain, SpeedLines, Sparkle, Confetti, DarkVignette, SunsetGlow, DustMotes, FloatingBubbles } from '../Characters';
import { OggyCharacter, CockroachTrio } from '../CharactersNew';

const scenes = {
  'og-oggy-house': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <svg width="200" height="140" viewBox="0 0 200 140">
          <rect x="30" y="50" width="140" height="90" fill="#42A5F5" rx="5" />
          <path d="M20 55 L100 10 L180 55" fill="#1565C0" />
          <rect x="75" y="80" width="30" height="50" fill="#5D4037" rx="3" />
          <rect x="50" y="65" width="25" height="25" fill="#BBDEFB" rx="2" />
          <rect x="125" y="65" width="25" height="25" fill="#BBDEFB" rx="2" />
          <circle cx="97" cy="105" r="3" fill="#FFD600" />
        </svg>
      </div>
      <Birds count={3} />
      <Sparkle count={5} />
    </>
  ),

  'og-birthday-plan': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <OggyCharacter size={150} mood="happy" className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '15%', right: '15%', zIndex: 4 }}>
        <svg width="60" height="60" viewBox="0 0 60 60">
          <rect x="10" y="25" width="40" height="30" rx="5" fill="#6D4C41" />
          <rect x="5" y="20" width="50" height="10" rx="3" fill="#8D6E63" />
          <circle cx="30" cy="15" r="8" fill="#E91E63" />
          <rect x="28" y="5" width="4" height="12" fill="#FFD600" />
          <circle cx="30" cy="4" r="3" fill="#FF6F00" />
        </svg>
      </div>
      <Sparkle count={8} />
    </>
  ),

  'og-kitchen-setup': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '40%', zIndex: 5 }}>
        <OggyCharacter size={130} mood="happy" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', right: '15%', zIndex: 4 }}>
        <svg width="100" height="60" viewBox="0 0 100 60">
          <ellipse cx="20" cy="40" rx="15" ry="18" fill="#ECEFF1" />
          <rect x="45" y="30" width="20" height="28" fill="#FFCC80" rx="3" />
          <circle cx="80" cy="35" r="12" fill="#6D4C41" />
          <rect x="70" y="25" width="20" height="5" rx="2" fill="#8D6E63" />
        </svg>
      </div>
      <Sparkle count={3} />
    </>
  ),

  'og-cockroaches-watching': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <CockroachTrio size={100} className="anim-breathe" />
      </div>
      <DarkVignette intensity={0.3} />
      <Sparkle count={3} />
    </>
  ),

  'og-mixing-batter': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '30%', zIndex: 5 }}>
        <OggyCharacter size={130} mood="scared" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', right: '20%', zIndex: 6 }}>
        <CockroachTrio size={60} className="anim-hop" />
      </div>
      <SpeedLines direction="right" />
    </>
  ),

  'og-chase-living-room': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '20%', zIndex: 5 }}>
        <OggyCharacter size={130} mood="scared" className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', right: '25%', zIndex: 6 }}>
        <CockroachTrio size={50} className="anim-hop" />
      </div>
      <SpeedLines direction="right" />
      <DustMotes count={10} />
    </>
  ),

  'og-flour-explosion': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <OggyCharacter size={140} mood="scared" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 6 }}>
        <svg width="200" height="100" viewBox="0 0 200 100">
          {Array.from({ length: 20 }).map((_, i) => (
            <circle key={i} cx={100 + Math.cos(i * 0.8) * (30 + i * 4)} cy={50 + Math.sin(i * 0.8) * (20 + i * 3)} r={3 + Math.random() * 5} fill="white" opacity={0.6 + Math.random() * 0.4} />
          ))}
        </svg>
      </div>
      <DustMotes count={20} />
    </>
  ),

  'og-oggy-sad': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <OggyCharacter size={140} mood="scared" className="anim-breathe" />
      </div>
      <Rain intensity={0.3} />
      <DarkVignette intensity={0.4} />
    </>
  ),

  'og-cockroaches-guilty': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '30%', zIndex: 5 }}>
        <OggyCharacter size={120} mood="scared" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '28%', right: '25%', zIndex: 4 }}>
        <CockroachTrio size={70} className="anim-breathe" />
      </div>
      <DarkVignette intensity={0.2} />
    </>
  ),

  'og-cockroaches-help': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '35%', zIndex: 5 }}>
        <OggyCharacter size={130} mood="happy" className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '28%', right: '20%', zIndex: 5 }}>
        <CockroachTrio size={70} className="anim-hop" />
      </div>
      <Sparkle count={10} />
    </>
  ),

  'og-baking-together': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '30%', zIndex: 5 }}>
        <OggyCharacter size={120} mood="happy" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '28%', right: '25%', zIndex: 5 }}>
        <CockroachTrio size={60} className="anim-hop" />
      </div>
      <Sparkle count={8} />
      <FloatingBubbles count={5} />
    </>
  ),

  'og-cake-ready': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '35%', zIndex: 5 }}>
        <OggyCharacter size={130} mood="happy" className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '55%', zIndex: 6 }}>
        <svg width="80" height="70" viewBox="0 0 80 70">
          <rect x="10" y="30" width="60" height="35" rx="8" fill="#5D4037" />
          <rect x="5" y="25" width="70" height="10" rx="4" fill="#6D4C41" />
          <rect x="15" y="18" width="50" height="10" rx="4" fill="#8D6E63" />
          <circle cx="25" cy="25" r="4" fill="#F44336" />
          <circle cx="40" cy="22" r="4" fill="#F44336" />
          <circle cx="55" cy="25" r="4" fill="#F44336" />
          <rect x="38" y="8" width="4" height="14" fill="#FFD600" />
          <circle cx="40" cy="6" r="4" fill="#FF6F00" />
        </svg>
      </div>
      <Sparkle count={15} />
      <Confetti />
    </>
  ),

  'og-jack-arrives': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '25%', zIndex: 5 }}>
        <OggyCharacter size={120} mood="happy" className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', right: '20%', zIndex: 5 }}>
        <svg width="80" height="100" viewBox="0 0 80 100">
          <ellipse cx="40" cy="55" rx="18" ry="25" fill="#FFD600" />
          <circle cx="40" cy="28" r="15" fill="#FFD600" />
          <circle cx="34" cy="25" r="4" fill="white" /><circle cx="46" cy="25" r="4" fill="white" />
          <circle cx="34" cy="25" r="2" fill="#333" /><circle cx="46" cy="25" r="2" fill="#333" />
          <ellipse cx="40" cy="31" rx="3" ry="2" fill="#E91E63" />
          <path d="M33 36 Q40 42, 47 36" stroke="#333" strokeWidth="1.5" fill="none" />
          <line x1="22" y1="28" x2="32" y2="28" stroke="#333" strokeWidth="0.8" />
          <line x1="48" y1="28" x2="58" y2="28" stroke="#333" strokeWidth="0.8" />
        </svg>
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '50%', zIndex: 4 }}>
        <CockroachTrio size={50} className="anim-hop" />
      </div>
      <Confetti />
      <Sparkle count={12} />
    </>
  ),

  'og-moral-ending': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '30%', zIndex: 5 }}>
        <OggyCharacter size={130} mood="happy" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '28%', right: '25%', zIndex: 5 }}>
        <CockroachTrio size={60} className="float-animation" />
      </div>
      <SunsetGlow intensity={0.6} />
      <Sparkle count={10} />
      <Birds count={3} />
    </>
  ),

};

export default scenes;
