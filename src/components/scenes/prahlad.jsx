import React from 'react';
import { SpeedLines, Sparkle, Confetti, DarkVignette, FireGlow, SunsetGlow, Fireflies } from '../Characters';
import { Prahlad, Holika, Hiranyakashipu, Narasimha } from '../CharactersNew';

const scenes = {
  'pf-demon-kingdom': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '45%', zIndex: 5 }}>
        <Hiranyakashipu size={150} mood="angry" className="anim-breathe" />
      </div>
      <DarkVignette intensity={0.6} />
      <FireGlow intensity={0.4} />
    </>
  ),

  'pf-prahlad-born': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '45%', zIndex: 5 }}>
        <Prahlad size={110} mood="happy" className="anim-hop" />
      </div>
      <Sparkle count={8} />
    </>
  ),

  'pf-father-angry': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '55%', zIndex: 4 }}>
        <Hiranyakashipu size={150} mood="angry" className="anim-wobble" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '30%', zIndex: 5 }}>
        <Prahlad size={100} mood="brave" className="anim-breathe" />
      </div>
    </>
  ),

  'pf-prahlad-brave': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '45%', zIndex: 5 }}>
        <Prahlad size={110} mood="praying" className="anim-breathe" />
      </div>
      <Sparkle count={8} />
    </>
  ),

  'pf-evil-plans': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '35%', zIndex: 5 }}>
        <Hiranyakashipu size={140} mood="angry" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '60%', zIndex: 4 }}>
        <Holika size={130} mood="evil" className="anim-sway" />
      </div>
      <DarkVignette intensity={0.6} />
    </>
  ),

  'pf-holika-arrives': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '45%', zIndex: 5 }}>
        <Holika size={140} mood="evil" className="anim-sway" />
      </div>
      <FireGlow intensity={0.5} />
    </>
  ),

  'pf-fire-prepared': () => (
    <>
      <FireGlow intensity={0.8} />
      <DarkVignette intensity={0.5} />
    </>
  ),

  'pf-prahlad-faith': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '45%', zIndex: 5 }}>
        <Prahlad size={110} mood="praying" className="anim-breathe" />
      </div>
      <Sparkle count={8} />
      <FireGlow intensity={0.6} />
    </>
  ),

  'pf-miracle-happens': () => (
    <>
      <Sparkle count={12} />
      <FireGlow intensity={0.5} />
    </>
  ),

  'pf-holika-defeated': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '45%', zIndex: 5 }}>
        <Holika size={120} mood="burning" className="anim-wobble" />
      </div>
      <FireGlow intensity={0.7} />
      <Confetti count={6} />
    </>
  ),

  'pf-prahlad-emerges': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '45%', zIndex: 5 }}>
        <Prahlad size={120} mood="happy" className="anim-celebrate" />
      </div>
      <Sparkle count={10} />
      <Confetti count={8} />
    </>
  ),

  'pf-narasimha-appears': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '42%', zIndex: 6 }}>
        <Narasimha size={160} mood="fierce" className="anim-wobble" />
      </div>
      <SpeedLines />
      <DarkVignette intensity={0.5} />
    </>
  ),

  'pf-evil-destroyed': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '42%', zIndex: 6 }}>
        <Narasimha size={150} mood="protective" className="anim-breathe" />
      </div>
      <Confetti count={10} />
    </>
  ),

  'pf-prahlad-king': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '45%', zIndex: 5 }}>
        <Prahlad size={130} mood="happy" className="float-animation" />
      </div>
      <Sparkle count={8} />
      <SunsetGlow intensity={0.5} />
    </>
  ),

  'pf-holi-celebration': () => (
    <>
      <Confetti count={15} />
      <Sparkle count={10} />
      <Fireflies count={6} />
    </>
  ),

};

export default scenes;
