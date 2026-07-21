import React from 'react';
import { Birds, Leaves, SpeedLines, Sparkle, Confetti, ThinkingBubbles, LightbulbIcon, DarkVignette, SunsetGlow } from '../Characters';
import { Elephant, VillageSilhouette, Villagers, Moon, Stars2, Mouse, MouseKing, Net } from '../CharactersNew';

const scenes = {
  'em-village-ruins': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
        <VillageSilhouette size={300} />
      </div>
      <DarkVignette intensity={0.3} />
      <Leaves count={5} />
    </>
  ),

  'em-mice-colony': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '20%', zIndex: 3 }}>
        <Mouse size={40} className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '13%', left: '35%', zIndex: 3 }}>
        <Mouse size={35} className="anim-wiggle" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '16%', left: '50%', zIndex: 3 }}>
        <Mouse size={38} className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '25%', zIndex: 3 }}>
        <Mouse size={36} className="anim-wiggle" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <MouseKing size={55} className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '8%', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
        <VillageSilhouette size={250} />
      </div>
    </>
  ),

  'em-mice-thriving': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '15%', zIndex: 3 }}>
        <Mouse size={38} className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '17%', left: '30%', zIndex: 3 }}>
        <Mouse size={35} className="anim-wiggle" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '48%', zIndex: 3 }}>
        <Mouse size={40} className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '16%', right: '25%', zIndex: 3 }}>
        <Mouse size={36} className="anim-wiggle" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '13%', right: '12%', zIndex: 3 }}>
        <Mouse size={34} className="anim-hop" />
      </div>
      <Sparkle count={5} />
    </>
  ),

  'em-elephants-approach': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '20%', zIndex: 4 }}>
        <Elephant size={160} mood="neutral" className="anim-sway" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '13%', left: '45%', zIndex: 3 }}>
        <Elephant size={140} mood="neutral" className="anim-sway" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '15%', zIndex: 2 }}>
        <Elephant size={120} mood="neutral" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '8%', right: '5%', zIndex: 1 }}>
        <VillageSilhouette size={180} />
      </div>
    </>
  ),

  'em-elephants-crush': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '30%', zIndex: 4 }}>
        <Elephant size={170} mood="neutral" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '20%', zIndex: 3 }}>
        <Mouse size={30} className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '30%', zIndex: 3 }}>
        <Mouse size={28} className="anim-hop" />
      </div>
      <SpeedLines />
      <DarkVignette intensity={0.2} />
    </>
  ),

  'em-mice-mourning': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '25%', zIndex: 3 }}>
        <Mouse size={35} mood="sad" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '40%', zIndex: 3 }}>
        <Mouse size={32} mood="sad" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '16%', right: '30%', zIndex: 3 }}>
        <Mouse size={34} mood="sad" className="anim-sway" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <MouseKing size={50} mood="sad" className="anim-breathe" />
      </div>
      <DarkVignette intensity={0.3} />
    </>
  ),

  'em-mouse-king-brave': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <MouseKing size={70} mood="determined" className="anim-grow" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '15%', zIndex: 3 }}>
        <Mouse size={35} className="anim-sway" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '15%', zIndex: 3 }}>
        <Mouse size={35} className="anim-sway" />
      </div>
      <Sparkle count={5} />
    </>
  ),

  'em-visits-elephant-king': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '25%', zIndex: 4 }}>
        <Elephant size={180} mood="neutral" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '25%', zIndex: 4 }}>
        <MouseKing size={60} className="anim-hop" />
      </div>
    </>
  ),

  'em-makes-request': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '25%', zIndex: 4 }}>
        <Elephant size={175} mood="neutral" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '16%', left: '30%', zIndex: 4 }}>
        <MouseKing size={65} className="anim-sway" />
      </div>
      <ThinkingBubbles />
    </>
  ),

  'em-elephant-agrees': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '25%', zIndex: 4 }}>
        <Elephant size={175} mood="happy" className="anim-sway" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '16%', left: '30%', zIndex: 4 }}>
        <MouseKing size={65} mood="happy" className="anim-hop" />
      </div>
      <Sparkle count={6} />
    </>
  ),

  'em-mice-rebuild': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
        <VillageSilhouette size={250} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '16%', left: '20%', zIndex: 3 }}>
        <Mouse size={35} className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '40%', zIndex: 3 }}>
        <Mouse size={38} className="anim-wiggle" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '17%', right: '25%', zIndex: 3 }}>
        <Mouse size={36} className="anim-hop" />
      </div>
      <Sparkle count={4} />
    </>
  ),

  'em-time-passes': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
        <VillageSilhouette size={280} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '15%', right: '15%', zIndex: 2 }}>
        <Moon size={60} />
      </div>
      <Stars2 count={12} />
      <Leaves count={4} />
      <SunsetGlow intensity={0.3} />
    </>
  ),

  'em-hunters-arrive': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '20%', zIndex: 4 }}>
        <Villagers count={3} size={65} className="anim-sway" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '20%', zIndex: 3 }}>
        <Net size={100} className="anim-swing" />
      </div>
      <DarkVignette intensity={0.2} />
    </>
  ),

  'em-elephants-trapped': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '25%', zIndex: 4 }}>
        <Elephant size={160} mood="sad" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '13%', right: '25%', zIndex: 4 }}>
        <Elephant size={140} mood="sad" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Net size={250} />
      </div>
      <DarkVignette intensity={0.3} />
    </>
  ),

  'em-elephant-king-trapped': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Elephant size={180} mood="sad" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Net size={220} />
      </div>
      <DarkVignette intensity={0.4} />
    </>
  ),

  'em-baby-elephant-distressed': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '35%', zIndex: 4 }}>
        <Elephant size={100} mood="sad" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '13%', right: '25%', zIndex: 3 }}>
        <Elephant size={170} mood="sad" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '20%', zIndex: 4 }}>
        <Net size={200} />
      </div>
      <DarkVignette intensity={0.3} />
    </>
  ),

  'em-bird-carries-news': () => (
    <>
      <Birds count={1} />
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <MouseKing size={60} mood="alert" className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '20%', zIndex: 3 }}>
        <Mouse size={35} className="anim-wiggle" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '20%', zIndex: 3 }}>
        <Mouse size={35} className="anim-wiggle" />
      </div>
    </>
  ),

  'em-mouse-king-rallies': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <MouseKing size={70} mood="determined" className="anim-grow" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '10%', zIndex: 3 }}>
        <Mouse size={35} className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '25%', zIndex: 3 }}>
        <Mouse size={38} className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '25%', zIndex: 3 }}>
        <Mouse size={36} className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '10%', zIndex: 3 }}>
        <Mouse size={34} className="anim-hop" />
      </div>
      <SpeedLines />
    </>
  ),

  'em-mice-march': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '16%', left: '10%', zIndex: 3 }}>
        <Mouse size={35} className="anim-hop run-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '22%', zIndex: 3 }}>
        <Mouse size={38} className="anim-hop run-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '17%', left: '34%', zIndex: 4 }}>
        <MouseKing size={55} className="anim-hop run-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', zIndex: 3 }}>
        <Mouse size={36} className="anim-hop run-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '16%', left: '62%', zIndex: 3 }}>
        <Mouse size={34} className="anim-hop run-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '15%', zIndex: 3 }}>
        <Mouse size={37} className="anim-hop run-animation" />
      </div>
      <SpeedLines />
    </>
  ),

  'em-mice-gnaw-ropes': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Elephant size={160} mood="neutral" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Net size={200} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '25%', zIndex: 6 }}>
        <Mouse size={30} className="anim-wiggle" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '11%', left: '40%', zIndex: 6 }}>
        <Mouse size={28} className="anim-wiggle" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '30%', zIndex: 6 }}>
        <Mouse size={32} className="anim-wiggle" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '11%', right: '18%', zIndex: 6 }}>
        <Mouse size={29} className="anim-wiggle" />
      </div>
      <SpeedLines />
    </>
  ),

  'em-elephants-freed': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '25%', zIndex: 4 }}>
        <Elephant size={160} mood="happy" className="anim-sway" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '13%', right: '25%', zIndex: 4 }}>
        <Elephant size={140} mood="happy" className="anim-sway" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <MouseKing size={55} className="anim-hop" />
      </div>
      <Sparkle count={10} />
      <Confetti />
    </>
  ),

  'em-elephant-king-grateful': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '30%', zIndex: 4 }}>
        <Elephant size={180} mood="happy" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '16%', left: '30%', zIndex: 4 }}>
        <MouseKing size={65} mood="happy" className="anim-hop" />
      </div>
      <Sparkle count={8} />
    </>
  ),

  'em-friends-forever': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '35%', zIndex: 4 }}>
        <Elephant size={170} mood="happy" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '16%', left: '55%', zIndex: 5 }}>
        <MouseKing size={60} mood="happy" className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '13%', left: '15%', zIndex: 3 }}>
        <Mouse size={35} className="anim-wiggle" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '13%', right: '15%', zIndex: 3 }}>
        <Mouse size={35} className="anim-wiggle" />
      </div>
      <Sparkle count={8} />
      <SunsetGlow intensity={0.3} />
    </>
  ),

  'em-celebration': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '30%', zIndex: 4 }}>
        <Elephant size={160} mood="happy" className="anim-sway" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '16%', right: '30%', zIndex: 5 }}>
        <MouseKing size={60} mood="happy" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '13%', left: '15%', zIndex: 3 }}>
        <Mouse size={35} className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '13%', right: '15%', zIndex: 3 }}>
        <Mouse size={35} className="anim-hop" />
      </div>
      <Confetti />
      <Sparkle count={12} />
    </>
  ),

  'em-wisdom': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '35%', zIndex: 4 }}>
        <Elephant size={150} mood="happy" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '16%', right: '35%', zIndex: 4 }}>
        <MouseKing size={60} mood="happy" className="anim-breathe" />
      </div>
      <LightbulbIcon />
      <Sparkle count={6} />
      <SunsetGlow intensity={0.3} />
    </>
  ),

  'em-moral-scene': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '35%', zIndex: 4 }}>
        <Elephant size={150} mood="happy" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '16%', right: '35%', zIndex: 4 }}>
        <MouseKing size={60} mood="happy" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '13%', left: '15%', zIndex: 3 }}>
        <Mouse size={35} className="anim-sway" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '13%', right: '15%', zIndex: 3 }}>
        <Mouse size={35} className="anim-sway" />
      </div>
      <LightbulbIcon />
      <Sparkle count={8} />
      <SunsetGlow intensity={0.3} />
    </>
  ),

};

export default scenes;
