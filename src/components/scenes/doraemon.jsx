import React from 'react';
import { Birds, Sparkle, Confetti, DarkVignette, SunsetGlow, DustMotes, FloatingBubbles } from '../Characters';
import { Doraemon, Nobita } from '../CharactersNew';

const scenes = {
  'nobita-crying-room': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '45%', zIndex: 5 }}>
        <Nobita size={120} mood="lazy" className="anim-wobble" />
      </div>
      <DarkVignette intensity={0.4} />
    </>
  ),

  'doraemon-appears': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '45%', zIndex: 5 }}>
        <Doraemon size={130} mood="happy" className="bounce-animation" />
      </div>
      <Sparkle count={6} />
    </>
  ),

  'nobita-request': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '30%', zIndex: 5 }}>
        <Nobita size={110} mood="lazy" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '55%', zIndex: 4 }}>
        <Doraemon size={120} mood="thinking" className="anim-breathe" />
      </div>
    </>
  ),

  'gadget-reveal': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '45%', zIndex: 5 }}>
        <Doraemon size={130} mood="happy" className="anim-celebrate" />
      </div>
      <Sparkle count={8} />
      <Confetti count={6} />
    </>
  ),

  'school-next-day': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '45%', zIndex: 5 }}>
        <Nobita size={120} mood="amazed" className="anim-hop" />
      </div>
      <Birds count={3} />
    </>
  ),

  'too-many-friends': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '42%', zIndex: 5 }}>
        <Nobita size={120} mood="amazed" className="anim-wobble" />
      </div>
      <FloatingBubbles count={6} />
    </>
  ),

  'shizuka-scene': () => (
    <>
      <Sparkle count={6} />
      <SunsetGlow intensity={0.4} />
    </>
  ),

  'realization': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '45%', zIndex: 5 }}>
        <Nobita size={120} mood="working" className="anim-breathe" />
      </div>
      <DarkVignette intensity={0.3} />
    </>
  ),

  'removing-badge': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '45%', zIndex: 5 }}>
        <Nobita size={120} mood="working" className="anim-breathe" />
      </div>
      <DustMotes count={4} />
    </>
  ),

  'being-kind': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '45%', zIndex: 5 }}>
        <Nobita size={120} mood="working" className="anim-hop" />
      </div>
      <Sparkle count={6} />
    </>
  ),

  'friends-returning': () => (
    <>
      <Sparkle count={8} />
      <Birds count={4} />
    </>
  ),

  'playing-together': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '42%', zIndex: 5 }}>
        <Nobita size={120} mood="proud" className="anim-celebrate" />
      </div>
      <Confetti count={8} />
    </>
  ),

  'returning-badge': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '55%', zIndex: 4 }}>
        <Doraemon size={120} mood="happy" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '30%', zIndex: 5 }}>
        <Nobita size={110} mood="proud" className="anim-hop" />
      </div>
    </>
  ),

  'doraemon-smile': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '45%', zIndex: 5 }}>
        <Doraemon size={130} mood="happy" className="anim-celebrate" />
      </div>
      <Sparkle count={8} />
      <Confetti count={6} />
    </>
  ),

  'ending': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '55%', zIndex: 4 }}>
        <Doraemon size={120} mood="happy" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '30%', zIndex: 5 }}>
        <Nobita size={110} mood="proud" className="anim-hop" />
      </div>
      <Sparkle count={8} />
      <SunsetGlow intensity={0.5} />
    </>
  ),

};

export default scenes;
