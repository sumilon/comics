import React from 'react';
import { Birds, SpeedLines, Sparkle, Confetti, DarkVignette, SunsetGlow, FloatingBubbles } from '../Characters';
import { Stars2, Shinchan, HomeworkMonster } from '../CharactersNew';

const scenes = {
  'shinchan-bedroom-morning': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '45%', zIndex: 5 }}>
        <Shinchan size={120} mood="lazy" className="anim-wobble" />
      </div>
    </>
  ),

  'living-room-tv': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '40%', zIndex: 5 }}>
        <Shinchan size={120} mood="lazy" className="anim-breathe" />
      </div>
    </>
  ),

  'garden-playing': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '42%', zIndex: 5 }}>
        <Shinchan size={120} mood="proud" className="anim-hop" />
      </div>
      <Birds count={3} />
    </>
  ),

  'bedroom-night': () => (
    <>
      <DarkVignette intensity={0.6} />
      <Stars2 count={5} />
    </>
  ),

  'dream-sequence-start': () => (
    <>
      <FloatingBubbles count={6} />
      <DarkVignette intensity={0.4} />
    </>
  ),

  'monster-appears': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '45%', zIndex: 6 }}>
        <HomeworkMonster size={160} mood="scary" className="anim-wobble" />
      </div>
      <DarkVignette intensity={0.6} />
    </>
  ),

  'monster-chases': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '55%', zIndex: 6 }}>
        <HomeworkMonster size={150} mood="scary" className="bounce-animation" />
      </div>
      <SpeedLines />
    </>
  ),

  'hiding-behind-desk': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '40%', zIndex: 5 }}>
        <Shinchan size={100} mood="scared" className="anim-wobble" />
      </div>
      <DarkVignette intensity={0.5} />
    </>
  ),

  'fighting-with-pencil': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '40%', zIndex: 5 }}>
        <Shinchan size={120} mood="determined" className="anim-hop" />
      </div>
      <SpeedLines />
    </>
  ),

  'monster-shrinking': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', zIndex: 5 }}>
        <HomeworkMonster size={80} mood="shrinking" className="anim-wobble" />
      </div>
      <Sparkle count={6} />
    </>
  ),

  'waking-up': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '45%', zIndex: 5 }}>
        <Shinchan size={120} mood="determined" className="anim-hop" />
      </div>
      <SunsetGlow intensity={0.4} />
    </>
  ),

  'doing-homework': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '45%', zIndex: 5 }}>
        <Shinchan size={120} mood="determined" className="anim-breathe" />
      </div>
      <Sparkle count={5} />
    </>
  ),

  'showing-mom': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '42%', zIndex: 5 }}>
        <Shinchan size={120} mood="proud" className="anim-celebrate" />
      </div>
      <Confetti count={8} />
    </>
  ),

  'school-happy': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '42%', zIndex: 5 }}>
        <Shinchan size={120} mood="proud" className="anim-hop" />
      </div>
      <Sparkle count={6} />
      <Birds count={3} />
    </>
  ),

};

export default scenes;
