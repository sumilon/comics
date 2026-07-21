import React from 'react';
import { Birds, Leaves, SpeedLines, Sparkle, Confetti, ThinkingBubbles, LightbulbIcon, DarkVignette, SunsetGlow } from '../Characters';
import { Mouse, Motu, Patlu, Samosa, ChingumInspector, SamosaShop } from '../CharactersNew';

const scenes = {
  'mp-furfuri-nagar-intro': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <SamosaShop size={200} />
      </div>
      <Birds count={5} />
      <Leaves count={6} />
      <Sparkle count={5} />
    </>
  ),

  'mp-motu-intro': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Motu size={160} mood="happy" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '10%', zIndex: 3 }}>
        <Samosa size={50} className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '20%', left: '15%', zIndex: 3 }}>
        <Samosa size={40} className="float-animation" />
      </div>
      <Sparkle count={6} />
    </>
  ),

  'mp-patlu-intro': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Patlu size={150} mood="smart" className="anim-breathe" />
      </div>
      <Sparkle count={5} />
    </>
  ),

  'mp-samosa-shop-morning': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '8%', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
        <SamosaShop size={220} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '15%', zIndex: 5 }}>
        <Motu size={120} mood="excited" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '15%', zIndex: 5 }}>
        <Patlu size={110} mood="happy" className="anim-breathe" />
      </div>
      <Sparkle count={4} />
    </>
  ),

  'mp-eating-samosas': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '30%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Motu size={150} mood="eating" className="anim-wobble" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '15%', zIndex: 5 }}>
        <Patlu size={120} mood="happy" className="anim-breathe" />
      </div>
      {[0,1,2,3,4].map(i => (
        <div key={i} className="scene-element" style={{ position: 'absolute', bottom: `${25 + i * 8}%`, left: `${20 + i * 12}%`, zIndex: 4 }}>
          <Samosa size={35} className="float-animation" />
        </div>
      ))}
      <Confetti count={8} />
    </>
  ),

  'mp-chingum-arrives': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <ChingumInspector size={140} mood="alert" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '10%', zIndex: 4 }}>
        <Motu size={110} mood="happy" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '10%', zIndex: 4 }}>
        <Patlu size={100} mood="happy" className="anim-breathe" />
      </div>
    </>
  ),

  'mp-motu-shocked': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Motu size={170} mood="scared" className="shake-animation" />
      </div>
      <Sparkle count={6} />
    </>
  ),

  'mp-patlu-plan': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Patlu size={160} mood="thinking" className="anim-breathe" />
      </div>
      <ThinkingBubbles />
      <Sparkle count={4} />
    </>
  ),

  'mp-investigating-shop': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '8%', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
        <SamosaShop size={200} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '20%', zIndex: 5 }}>
        <Motu size={110} mood="thinking" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '20%', zIndex: 5 }}>
        <Patlu size={100} mood="smart" className="anim-breathe" />
      </div>
      <Sparkle count={5} />
    </>
  ),

  'mp-following-trail': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '25%', zIndex: 5 }}>
        <Motu size={120} mood="sad" className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '25%', zIndex: 5 }}>
        <Patlu size={110} mood="smart" className="anim-hop" />
      </div>
      <Leaves count={6} />
    </>
  ),

  'mp-warehouse-outside': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '25%', zIndex: 5 }}>
        <Motu size={120} mood="excited" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '25%', zIndex: 5 }}>
        <Patlu size={110} mood="thinking" className="anim-breathe" />
      </div>
      <Sparkle count={4} />
    </>
  ),

  'mp-sneaking-in': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '30%', zIndex: 5 }}>
        <Motu size={130} mood="scared" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '25%', zIndex: 5 }}>
        <Patlu size={110} mood="worried" className="anim-breathe" />
      </div>
      <DarkVignette />
    </>
  ),

  'mp-samosa-mountain': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '20%', zIndex: 5 }}>
        <Motu size={120} mood="excited" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '20%', zIndex: 5 }}>
        <Patlu size={110} mood="excited" className="bounce-animation" />
      </div>
      {[0,1,2,3,4,5,6,7].map(i => (
        <div key={i} className="scene-element" style={{ position: 'absolute', bottom: `${10 + (i % 3) * 15}%`, left: `${30 + (i % 4) * 10}%`, zIndex: 3 }}>
          <Samosa size={30 + (i % 3) * 10} className="float-animation" />
        </div>
      ))}
      <Sparkle count={8} />
    </>
  ),

  'mp-thief-revealed': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '20%', zIndex: 5 }}>
        <Motu size={120} mood="scared" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '20%', zIndex: 5 }}>
        <Patlu size={110} mood="thinking" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 6 }}>
        <Mouse size={60} className="anim-wobble" />
      </div>
      <Sparkle count={4} />
    </>
  ),

  'mp-motu-angry-then-soft': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '30%', zIndex: 5 }}>
        <Motu size={140} mood="sad" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '25%', zIndex: 5 }}>
        <Patlu size={110} mood="worried" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Mouse size={45} className="anim-wobble" />
      </div>
      <Sparkle count={4} />
    </>
  ),

  'mp-patlu-idea': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Patlu size={160} mood="excited" className="bounce-animation" />
      </div>
      <LightbulbIcon />
      <Sparkle count={8} />
    </>
  ),

  'mp-chingum-joins': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <ChingumInspector size={130} mood="proud" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '8%', zIndex: 4 }}>
        <Motu size={100} mood="happy" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '8%', zIndex: 4 }}>
        <Patlu size={95} mood="happy" className="anim-breathe" />
      </div>
      <Sparkle count={5} />
    </>
  ),

  'mp-building-home': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '15%', zIndex: 5 }}>
        <Motu size={120} mood="proud" className="anim-wobble" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Patlu size={110} mood="smart" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '10%', zIndex: 4 }}>
        <ChingumInspector size={100} mood="alert" className="anim-breathe" />
      </div>
      <Sparkle count={5} />
      <SpeedLines />
    </>
  ),

  'mp-mouse-house-done': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '20%', zIndex: 5 }}>
        <Motu size={120} mood="happy" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '20%', zIndex: 5 }}>
        <Patlu size={110} mood="happy" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Mouse size={50} className="anim-hop" />
      </div>
      <Sparkle count={8} />
      <Confetti count={10} />
    </>
  ),

  'mp-returning-samosas': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '20%', zIndex: 5 }}>
        <Motu size={120} mood="happy" className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '20%', zIndex: 5 }}>
        <Patlu size={110} mood="smart" className="anim-hop" />
      </div>
      {[0,1,2,3,4].map(i => (
        <div key={i} className="scene-element" style={{ position: 'absolute', bottom: `${20 + i * 7}%`, left: `${35 + i * 6}%`, zIndex: 3 }}>
          <Samosa size={35} className="float-animation" />
        </div>
      ))}
      <Sparkle count={5} />
      <Confetti count={6} />
    </>
  ),

  'mp-motu-sneaks-samosa': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Motu size={160} mood="eating" className="anim-wobble" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', right: '20%', zIndex: 4 }}>
        <Samosa size={50} className="float-animation" />
      </div>
      <Confetti count={5} />
    </>
  ),

  'mp-town-celebration': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <ChingumInspector size={130} mood="proud" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '8%', zIndex: 4 }}>
        <Motu size={110} mood="happy" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '8%', zIndex: 4 }}>
        <Patlu size={100} mood="proud" className="bounce-animation" />
      </div>
      <Confetti count={15} />
      <Sparkle count={8} />
    </>
  ),

  'mp-feast-begins': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '8%', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
        <SamosaShop size={200} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '15%', zIndex: 5 }}>
        <Motu size={130} mood="eating" className="anim-wobble" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '15%', zIndex: 5 }}>
        <Patlu size={110} mood="happy" className="anim-breathe" />
      </div>
      {[0,1,2].map(i => (
        <div key={i} className="scene-element" style={{ position: 'absolute', bottom: `${30 + i * 10}%`, left: `${25 + i * 15}%`, zIndex: 4 }}>
          <Samosa size={35} className="float-animation" />
        </div>
      ))}
      <Confetti count={12} />
      <Sparkle count={6} />
    </>
  ),

  'mp-mice-visit': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '20%', zIndex: 5 }}>
        <Motu size={120} mood="happy" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '20%', zIndex: 5 }}>
        <Patlu size={110} mood="happy" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 6 }}>
        <Mouse size={55} className="anim-hop" />
      </div>
      <Sparkle count={6} />
      <Confetti count={8} />
    </>
  ),

  'mp-friends-sunset': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '30%', zIndex: 5 }}>
        <Motu size={130} mood="happy" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '25%', zIndex: 5 }}>
        <Patlu size={120} mood="happy" className="anim-breathe" />
      </div>
      <SunsetGlow intensity={0.4} />
      <Sparkle count={5} />
    </>
  ),

  'mp-motu-reply': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '30%', zIndex: 5 }}>
        <Motu size={140} mood="happy" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '25%', zIndex: 5 }}>
        <Patlu size={120} mood="happy" className="anim-breathe" />
      </div>
      <SunsetGlow intensity={0.35} />
      <Sparkle count={6} />
      <Confetti count={8} />
    </>
  ),

  'mp-moral-scene': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Motu size={130} mood="happy" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '10%', zIndex: 4 }}>
        <Patlu size={110} mood="proud" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '10%', zIndex: 4 }}>
        <ChingumInspector size={100} mood="alert" className="anim-breathe" />
      </div>
      <LightbulbIcon />
      <Sparkle count={10} />
      <SunsetGlow intensity={0.3} />
      <Confetti count={8} />
      <Birds count={4} />
    </>
  ),

};

export default scenes;
