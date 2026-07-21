import React from 'react';
import { RoseAppleTree, Water, Ripples, Splash, Birds, Leaves, Rain, SpeedLines, Sparkle, Confetti, ThinkingBubbles, LightbulbIcon, DarkVignette, FireGlow, SunsetGlow } from '../Characters';
import { Fox, Snake, Crow, CrowWife, Necklace, Guard } from '../CharactersNew';

const scenes = {
  'cs-tree-intro': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Birds count={5} />
        <Sparkle count={4} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)' }}>
        <RoseAppleTree size={300} />
      </div>
    </>
  ),

  'cs-crow-nest': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={3} />
        <Leaves count={4} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '15%' }}>
        <RoseAppleTree size={260} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '52%', right: '22%', zIndex: 4 }}>
        <CrowWife size={100} mood="happy" className="float-animation" />
      </div>
    </>
  ),

  'cs-snake-lives-below': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)' }}>
        <RoseAppleTree size={240} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '8%', left: '45%', zIndex: 4 }}>
        <Snake size={150} mood="menacing" className="anim-drift" />
      </div>
    </>
  ),

  'cs-snake-eats-eggs': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
        <FireGlow />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', right: '20%' }}>
        <RoseAppleTree size={240} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', right: '25%', zIndex: 4 }}>
        <Snake size={130} mood="menacing" className="anim-sway" />
      </div>
    </>
  ),

  'cs-crows-cry': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
        <Rain />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '25%', zIndex: 4 }}>
        <Crow size={110} mood="sad" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', right: '25%', zIndex: 4 }}>
        <CrowWife size={100} mood="sad" className="shake-animation" />
      </div>
    </>
  ),

  'cs-crow-angry': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
        <FireGlow />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Crow size={140} mood="angry" className="pulse-animation" />
      </div>
      <div className="impact-text">!</div>
    </>
  ),

  'cs-visit-fox': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={3} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '25%', zIndex: 4 }}>
        <Crow size={100} mood="neutral" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '25%', zIndex: 4 }}>
        <Fox size={120} className="float-animation" />
      </div>
    </>
  ),

  'cs-fox-thinks': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <ThinkingBubbles x={600} y={100} />
        <Sparkle count={2} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Fox size={150} className="pulse-animation" />
      </div>
    </>
  ),

  'cs-fox-plan': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <LightbulbIcon x={450} y={50} />
        <Sparkle count={5} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '30%', zIndex: 4 }}>
        <Fox size={130} className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', right: '20%', zIndex: 4 }}>
        <Crow size={90} mood="neutral" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '30%', right: '35%', zIndex: 5 }}>
        <Necklace size={70} className="anim-ripple-scale" />
      </div>
    </>
  ),

  'cs-crows-understand': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={8} />
        <Confetti />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '30%', zIndex: 4 }}>
        <Crow size={110} mood="happy" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '30%', zIndex: 4 }}>
        <CrowWife size={100} mood="happy" className="bounce-animation" />
      </div>
    </>
  ),

  'cs-palace-pond': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={6} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={280} />
        <Ripples cx={400} cy={320} />
        <Ripples cx={550} cy={340} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Necklace size={80} className="pulse-animation" />
      </div>
    </>
  ),

  'cs-crow-grabs-necklace': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SpeedLines direction="down" />
        <Sparkle count={3} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={300} />
        <Splash cx={450} cy={290} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', top: '20%', left: '45%', zIndex: 5 }}>
        <Crow size={110} mood="happy" className="run-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '35%', left: '50%', zIndex: 5 }}>
        <Necklace size={60} className="shake-animation" />
      </div>
    </>
  ),

  'cs-guards-chase': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SpeedLines direction="right" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', top: '10%', right: '15%', zIndex: 5 }}>
        <Crow size={100} mood="happy" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '15%', right: '20%', zIndex: 4 }}>
        <Necklace size={50} className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '15%', zIndex: 4 }}>
        <Guard size={120} className="run-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '40%', zIndex: 4 }}>
        <Guard size={110} className="run-animation" />
      </div>
    </>
  ),

  'cs-crow-flies-home': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SpeedLines direction="right" />
        <Birds count={2} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', right: '10%' }}>
        <RoseAppleTree size={220} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '15%', left: '40%', zIndex: 5 }}>
        <Crow size={100} className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '22%', left: '45%', zIndex: 4 }}>
        <Necklace size={50} className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '10%', zIndex: 4, opacity: 0.7 }}>
        <Guard size={100} className="run-animation" />
      </div>
    </>
  ),

  'cs-drops-necklace': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SpeedLines direction="down" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)' }}>
        <RoseAppleTree size={260} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '12%', left: '48%', zIndex: 5 }}>
        <Crow size={90} className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '35%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Necklace size={65} className="shake-animation" />
      </div>
    </>
  ),

  'cs-guards-arrive': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
        <FireGlow />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)' }}>
        <RoseAppleTree size={240} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '42%', zIndex: 4 }}>
        <Snake size={140} mood="menacing" className="anim-sway" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '10%', zIndex: 5 }}>
        <Guard size={130} className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '10%', zIndex: 5 }}>
        <Guard size={120} className="shake-animation" />
      </div>
      <div className="impact-text">!</div>
    </>
  ),

  'cs-snake-killed': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SpeedLines direction="left" />
        <FireGlow />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Snake size={130} mood="menacing" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '10%', zIndex: 5 }}>
        <Guard size={140} className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '10%', zIndex: 5 }}>
        <Guard size={130} className="bounce-animation" />
      </div>
      <div className="impact-text large">!!!</div>
    </>
  ),

  'cs-guards-leave': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <Sparkle count={3} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', right: '10%' }}>
        <RoseAppleTree size={200} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '15%', zIndex: 4, opacity: 0.7 }}>
        <Guard size={110} className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '35%', zIndex: 4 }}>
        <Necklace size={50} className="pulse-animation" />
      </div>
    </>
  ),

  'cs-crows-celebrate': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={8} />
        <Confetti />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)' }}>
        <RoseAppleTree size={240} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '50%', left: '40%', zIndex: 5 }}>
        <Crow size={110} mood="happy" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '50%', right: '35%', zIndex: 5 }}>
        <CrowWife size={100} mood="happy" className="bounce-animation" />
      </div>
    </>
  ),

  'cs-thank-fox': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <Sparkle count={5} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '20%', zIndex: 4 }}>
        <Fox size={130} className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', right: '20%', zIndex: 4 }}>
        <Crow size={100} mood="happy" className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', right: '35%', zIndex: 4 }}>
        <CrowWife size={90} mood="happy" className="anim-hop" />
      </div>
    </>
  ),

  'cs-new-eggs': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={6} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)' }}>
        <RoseAppleTree size={260} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '52%', left: '47%', zIndex: 4 }}>
        <CrowWife size={100} mood="happy" className="pulse-animation" />
      </div>
    </>
  ),

  'cs-chicks-hatch': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={8} />
        <Confetti />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)' }}>
        <RoseAppleTree size={260} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '52%', left: '42%', zIndex: 4 }}>
        <CrowWife size={90} mood="happy" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '50%', left: '55%', zIndex: 5 }}>
        <Crow size={40} mood="happy" className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '48%', left: '60%', zIndex: 5 }}>
        <Crow size={35} mood="happy" className="bounce-animation" />
      </div>
    </>
  ),

  'cs-family-tree': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Birds count={4} />
        <Sparkle count={5} />
        <Leaves count={3} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)' }}>
        <RoseAppleTree size={280} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '55%', left: '40%', zIndex: 4 }}>
        <Crow size={90} mood="happy" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '53%', right: '38%', zIndex: 4 }}>
        <CrowWife size={85} mood="happy" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '48%', left: '48%', zIndex: 5 }}>
        <Crow size={35} mood="happy" className="anim-hop" />
      </div>
    </>
  ),

  'cs-tell-story': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={4} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)' }}>
        <RoseAppleTree size={250} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '50%', left: '35%', zIndex: 4 }}>
        <CrowWife size={100} mood="happy" className="anim-sway" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '46%', left: '55%', zIndex: 5 }}>
        <Crow size={40} className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '44%', left: '62%', zIndex: 5 }}>
        <Crow size={38} className="anim-breathe" />
      </div>
    </>
  ),

  'cs-wisdom': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <Sparkle count={6} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Crow size={140} mood="happy" className="float-animation" />
      </div>
    </>
  ),

  'cs-moral-scene': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <Sparkle count={8} />
        <Birds count={4} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '30%', zIndex: 4 }}>
        <Crow size={110} mood="happy" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '25%', zIndex: 4 }}>
        <Fox size={100} className="float-animation" />
      </div>
    </>
  ),

};

export default scenes;
