import React from 'react';
import { Birds, Leaves, SpeedLines, Sparkle, Confetti, DarkVignette, SunsetGlow, DustMotes } from '../Characters';
import { Hercules, Atlas } from '../CharactersNew';

const scenes = {
  'mount-olympus': () => (
    <>
      <Sparkle count={8} />
      <SunsetGlow intensity={0.5} />
      <Birds count={4} />
    </>
  ),

  'kings-court': () => (
    <>
      <DarkVignette intensity={0.3} />
      <Sparkle count={4} />
    </>
  ),

  'journey-begins': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '35%', zIndex: 5 }}>
        <Hercules size={140} mood="determined" className="anim-breathe" />
      </div>
      <Birds count={3} />
    </>
  ),

  'meeting-atlas': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '55%', zIndex: 4 }}>
        <Atlas size={160} mood="tired" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '25%', zIndex: 5 }}>
        <Hercules size={130} mood="determined" className="anim-breathe" />
      </div>
    </>
  ),

  'hercules-thinks': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '45%', zIndex: 5 }}>
        <Hercules size={130} mood="thinking" className="anim-breathe" />
      </div>
      <DustMotes count={4} />
    </>
  ),

  'clever-plan': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '45%', zIndex: 5 }}>
        <Hercules size={130} mood="clever" className="anim-breathe" />
      </div>
      <Sparkle count={6} />
    </>
  ),

  'holding-sky': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '45%', zIndex: 5 }}>
        <Hercules size={140} mood="determined" className="anim-breathe" />
      </div>
      <DarkVignette intensity={0.4} />
    </>
  ),

  'atlas-in-garden': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '45%', zIndex: 5 }}>
        <Atlas size={140} mood="tired" className="anim-breathe" />
      </div>
      <Sparkle count={5} />
      <Leaves count={4} />
    </>
  ),

  'atlas-trick': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '55%', zIndex: 4 }}>
        <Atlas size={140} mood="tricked" className="anim-wobble" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '25%', zIndex: 5 }}>
        <Hercules size={130} mood="clever" className="anim-breathe" />
      </div>
    </>
  ),

  'outsmarting-atlas': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '45%', zIndex: 5 }}>
        <Hercules size={130} mood="clever" className="anim-hop" />
      </div>
      <SpeedLines />
    </>
  ),

  'tricked': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '45%', zIndex: 5 }}>
        <Atlas size={150} mood="angry" className="anim-wobble" />
      </div>
      <DarkVignette intensity={0.4} />
    </>
  ),

  'journey-home': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '40%', zIndex: 5 }}>
        <Hercules size={130} mood="triumphant" className="anim-hop" />
      </div>
      <Birds count={4} />
      <SunsetGlow intensity={0.5} />
    </>
  ),

  'returning-to-king': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '45%', zIndex: 5 }}>
        <Hercules size={130} mood="triumphant" className="anim-celebrate" />
      </div>
      <Sparkle count={8} />
    </>
  ),

  'lesson-learned': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '45%', zIndex: 5 }}>
        <Hercules size={140} mood="triumphant" className="float-animation" />
      </div>
      <Confetti count={8} />
      <Sparkle count={8} />
      <SunsetGlow intensity={0.5} />
    </>
  ),

};

export default scenes;
