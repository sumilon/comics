import React from 'react';
import { SpeedLines, Sparkle, Confetti, DarkVignette, SunsetGlow, Fireflies, DustMotes, FloatingBubbles } from '../Characters';
import { Moon, Stars2, Mouse, Ganesha, MoonGod } from '../CharactersNew';

const scenes = {
  'gm-kailash-evening': () => (
    <>
      <Stars2 count={8} />
      <Moon size={80} />
      <DarkVignette intensity={0.3} />
    </>
  ),

  'gm-birthday-feast': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '42%', zIndex: 5 }}>
        <Ganesha size={140} mood="happy" className="anim-celebrate" />
      </div>
      <Sparkle count={8} />
      <Confetti count={8} />
    </>
  ),

  'gm-eating-modaks': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '40%', zIndex: 5 }}>
        <Ganesha size={160} mood="happy" className="anim-wobble" />
      </div>
      <Sparkle count={4} />
    </>
  ),

  'gm-riding-mushak': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '42%', zIndex: 5 }}>
        <Ganesha size={140} mood="playful" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '45%', zIndex: 4 }}>
        <Mouse size={60} className="anim-hop" />
      </div>
    </>
  ),

  'gm-ganesha-falls': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '45%', zIndex: 5 }}>
        <Ganesha size={130} mood="sad" className="anim-wobble" />
      </div>
      <SpeedLines />
    </>
  ),

  'gm-moon-laughs': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '65%', left: '55%', zIndex: 4 }}>
        <MoonGod size={130} mood="calm" className="float-animation" />
      </div>
      <Stars2 count={6} />
    </>
  ),

  'gm-ganesha-angry': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '42%', zIndex: 5 }}>
        <Ganesha size={140} mood="wise" className="anim-breathe" />
      </div>
      <DarkVignette intensity={0.5} />
    </>
  ),

  'gm-moon-vanishes': () => (
    <>
      <DarkVignette intensity={0.7} />
      <Stars2 count={4} />
    </>
  ),

  'gm-world-dark': () => (
    <>
      <DarkVignette intensity={0.8} />
      <DustMotes count={6} />
    </>
  ),

  'gm-gods-plead': () => (
    <>
      <Sparkle count={8} />
      <FloatingBubbles count={5} />
    </>
  ),

  'gm-moon-apologizes': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '55%', left: '50%', zIndex: 5 }}>
        <MoonGod size={130} mood="embarrassed" className="anim-breathe" />
      </div>
      <DarkVignette intensity={0.3} />
    </>
  ),

  'gm-ganesha-forgives': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '42%', zIndex: 5 }}>
        <Ganesha size={140} mood="wise" className="anim-breathe" />
      </div>
      <Sparkle count={8} />
    </>
  ),

  'gm-moon-returns': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '60%', left: '55%', zIndex: 4 }}>
        <MoonGod size={120} mood="calm" className="float-animation" />
      </div>
      <Stars2 count={6} />
      <Sparkle count={6} />
    </>
  ),

  'gm-celebration': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '42%', zIndex: 5 }}>
        <Ganesha size={140} mood="happy" className="anim-celebrate" />
      </div>
      <Confetti count={10} />
      <Sparkle count={8} />
      <Fireflies count={6} />
    </>
  ),

  'gm-moral-ending': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '42%', zIndex: 5 }}>
        <Ganesha size={140} mood="wise" className="float-animation" />
      </div>
      <SunsetGlow intensity={0.5} />
      <Sparkle count={8} />
    </>
  ),

};

export default scenes;
