import React from 'react';
import { Birds, SpeedLines, Sparkle, Confetti, DarkVignette, FireGlow, SunsetGlow, DustMotes } from '../Characters';
import { VillageSilhouette, Chutki, Raju, Jaggu, MagicLadoo, BheemWarrior, Kirmada } from '../CharactersNew';

const scenes = {
  'bk-dholakpur-morning': () => (
    <>
      <VillageSilhouette />
      <Birds count={5} />
      <Sparkle count={5} />
      <SunsetGlow intensity={0.3} />
    </>
  ),

  'bk-bheem-playing': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '25%', zIndex: 5 }}>
        <BheemWarrior size={130} mood="happy" className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '24%', right: '25%', zIndex: 4 }}>
        <Chutki size={100} className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '55%', zIndex: 4 }}>
        <MagicLadoo size={40} className="float-animation" />
      </div>
      <Sparkle count={5} />
    </>
  ),

  'bk-ground-shakes': () => (
    <>
      <VillageSilhouette />
      <DarkVignette intensity={0.4} />
      <div className="scene-element shake-animation" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Raju size={100} className="shake-animation" />
      </div>
      <DustMotes count={15} />
    </>
  ),

  'bk-kirmada-appears': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Kirmada size={180} mood="menacing" className="anim-breathe" />
      </div>
      <DarkVignette intensity={0.5} />
      <FireGlow color="#B71C1C" intensity={0.4} />
    </>
  ),

  'bk-villagers-flee': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '10%', zIndex: 3 }}>
        <Kirmada size={150} mood="menacing" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '20%', zIndex: 5 }}>
        <Chutki size={90} className="shake-animation" />
      </div>
      <SpeedLines direction="left" />
      <DarkVignette intensity={0.3} />
    </>
  ),

  'bk-bheem-stands-up': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <BheemWarrior size={150} mood="fierce" className="anim-breathe" />
      </div>
      <FireGlow color="#FF6F00" intensity={0.4} />
      <Sparkle count={5} />
    </>
  ),

  'bk-friends-unite': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '35%', zIndex: 5 }}>
        <BheemWarrior size={120} mood="fierce" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '24%', left: '15%', zIndex: 4 }}>
        <Chutki size={90} className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '24%', right: '20%', zIndex: 4 }}>
        <Raju size={85} className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '28%', right: '10%', zIndex: 4 }}>
        <Jaggu size={70} className="anim-hop" />
      </div>
      <Sparkle count={5} />
    </>
  ),

  'bk-first-attack': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '25%', zIndex: 5 }}>
        <BheemWarrior size={130} mood="fierce" className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '15%', zIndex: 4 }}>
        <Kirmada size={160} mood="menacing" className="shake-animation" />
      </div>
      <SpeedLines direction="right" />
      <DustMotes count={10} />
    </>
  ),

  'bk-teamwork-attack': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <Kirmada size={150} mood="menacing" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '10%', zIndex: 5 }}>
        <Raju size={80} className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '20%', right: '25%', zIndex: 5 }}>
        <Jaggu size={70} className="anim-hop" />
      </div>
      <SpeedLines direction="left" />
      <Confetti />
    </>
  ),

  'bk-bheem-eats-laddoo': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <BheemWarrior size={140} mood="happy" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '50%', left: '55%', zIndex: 6 }}>
        <MagicLadoo size={50} className="float-animation" />
      </div>
      <FireGlow color="#FFD600" intensity={0.5} />
      <Sparkle count={15} />
    </>
  ),

  'bk-final-battle': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '30%', zIndex: 5 }}>
        <BheemWarrior size={150} mood="fierce" className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '15%', right: '20%', zIndex: 4 }}>
        <Kirmada size={120} mood="menacing" className="shake-animation" style={{ transform: 'rotate(30deg)' }} />
      </div>
      <SpeedLines direction="up" />
      <DustMotes count={15} />
      <FireGlow color="#FF5722" intensity={0.4} />
    </>
  ),

  'bk-kirmada-defeated': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <BheemWarrior size={140} mood="fierce" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '10%', right: '10%', zIndex: 3, opacity: 0.5, transform: 'scale(0.5)' }}>
        <Kirmada size={80} mood="menacing" />
      </div>
      <Sparkle count={10} />
      <Confetti />
    </>
  ),

  'bk-celebration': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '35%', zIndex: 5 }}>
        <BheemWarrior size={130} mood="happy" className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '24%', left: '15%', zIndex: 4 }}>
        <Chutki size={90} className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '24%', right: '15%', zIndex: 4 }}>
        <Raju size={85} className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '40%', left: '55%', zIndex: 6 }}>
        <MagicLadoo size={40} className="float-animation" />
      </div>
      <Confetti />
      <Sparkle count={15} />
    </>
  ),

  'bk-moral-ending': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <BheemWarrior size={140} mood="happy" className="float-animation" />
      </div>
      <SunsetGlow intensity={0.6} />
      <Sparkle count={10} />
      <Birds count={4} />
    </>
  ),

};

export default scenes;
