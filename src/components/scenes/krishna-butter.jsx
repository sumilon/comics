import React from 'react';
import { Monkey, Water, Ripples, Birds, Leaves, Rain, SpeedLines, Sparkle, Confetti, ThinkingBubbles, LightbulbIcon, DarkVignette, FireGlow, SunsetGlow } from '../Characters';
import { Krishna, Yashoda, ButterPot, Mortar, ChurningRod } from '../CharactersNew';

const scenes = {
  'kb-vrindavan-intro': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Birds count={5} />
        <Sparkle count={4} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '0%', left: '0%', right: '0%', zIndex: 2 }}>
        <svg width="100%" height="100" viewBox="0 0 900 100" preserveAspectRatio="none">
          <path d="M0,50 Q150,10 300,40 Q450,70 600,30 Q750,0 900,50 L900,100 L0,100 Z" fill="#2E7D32" opacity="0.6" />
          <path d="M0,70 Q200,40 400,60 Q600,80 900,60 L900,100 L0,100 Z" fill="#1B5E20" opacity="0.5" />
        </svg>
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water y={340} />
        <Ripples cx={300} cy={370} />
        <Ripples cx={600} cy={360} />
      </svg>
      <Leaves count={3} />
    </>
  ),

  'kb-yashoda-intro': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Yashoda size={180} mood="busy" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '20%', zIndex: 3 }}>
        <ChurningRod size={80} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '18%', zIndex: 3 }}>
        <ButterPot size={70} />
      </div>
      <Sparkle count={3} />
    </>
  ),

  'kb-baby-krishna': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Krishna size={160} mood="happy" className="bounce-animation" />
      </div>
      <Sparkle count={6} />
      <SunsetGlow intensity={0.15} />
    </>
  ),

  'kb-krishna-watches': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '30%', zIndex: 4 }}>
        <Yashoda size={160} mood="busy" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '25%', zIndex: 3 }}>
        <ChurningRod size={70} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '22%', zIndex: 5 }}>
        <Krishna size={120} mood="mischievous" className="float-animation" />
      </div>
      <Sparkle count={3} />
    </>
  ),

  'kb-krishna-hungry': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '25%', zIndex: 4 }}>
        <Yashoda size={160} mood="busy" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '55%', zIndex: 5 }}>
        <Krishna size={130} mood="happy" className="anim-hop" />
      </div>
    </>
  ),

  'kb-yashoda-busy': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '35%', zIndex: 4 }}>
        <Yashoda size={170} mood="busy" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '20%', zIndex: 3 }}>
        <ButterPot size={70} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '25%', zIndex: 5 }}>
        <Krishna size={110} mood="happy" />
      </div>
      <FireGlow intensity={0.15} />
    </>
  ),

  'kb-yashoda-leaves': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '15%', zIndex: 4 }}>
        <Yashoda size={150} mood="busy" className="run-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '35%', zIndex: 3 }}>
        <ButterPot size={90} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '25%', zIndex: 5 }}>
        <Krishna size={110} mood="mischievous" className="float-animation" />
      </div>
      <SpeedLines />
    </>
  ),

  'kb-krishna-idea': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Krishna size={140} mood="mischievous" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '20%', zIndex: 3 }}>
        <ButterPot size={90} />
      </div>
      <LightbulbIcon />
      <ThinkingBubbles />
      <Sparkle count={4} />
    </>
  ),

  'kb-climbs-mortar': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '35%', zIndex: 3 }}>
        <Mortar size={90} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '38%', zIndex: 5 }}>
        <Krishna size={130} mood="mischievous" className="anim-wobble" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '20%', right: '30%', zIndex: 3 }}>
        <ButterPot size={80} />
      </div>
    </>
  ),

  'kb-breaks-pot': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Krishna size={140} mood="mischievous" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <ButterPot size={100} broken />
      </div>
      <div className="pop-effect">CRACK!</div>
      <Sparkle count={5} />
    </>
  ),

  'kb-eats-butter': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Krishna size={160} mood="eating" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '25%', zIndex: 3 }}>
        <ButterPot size={70} broken />
      </div>
      <Sparkle count={6} />
      <SunsetGlow intensity={0.1} />
    </>
  ),

  'kb-shares-monkeys': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '40%', zIndex: 4 }}>
        <Krishna size={130} mood="eating" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '15%', zIndex: 5 }}>
        <Monkey size={100} mood="delighted" className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', right: '30%', zIndex: 4 }}>
        <Monkey size={80} mood="happy" className="bounce-animation" />
      </div>
      <Sparkle count={3} />
    </>
  ),

  'kb-monkeys-feast': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '35%', zIndex: 4 }}>
        <Krishna size={120} mood="eating" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '10%', zIndex: 5 }}>
        <Monkey size={90} mood="delighted" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '10%', zIndex: 5 }}>
        <Monkey size={85} mood="happy" className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', right: '25%', zIndex: 4 }}>
        <Monkey size={70} mood="delighted" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <ButterPot size={60} broken />
      </div>
      <Confetti />
    </>
  ),

  'kb-yashoda-returns': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '15%', zIndex: 4 }}>
        <Yashoda size={170} mood="angry" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '25%', zIndex: 3 }}>
        <ButterPot size={80} broken />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '35%', zIndex: 5 }}>
        <Krishna size={110} mood="eating" className="anim-breathe" />
      </div>
      <DarkVignette />
    </>
  ),

  'kb-krishna-runs': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '15%', zIndex: 5 }}>
        <Krishna size={130} mood="running" className="run-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '15%', zIndex: 4 }}>
        <Yashoda size={150} mood="chasing" className="run-animation" />
      </div>
      <SpeedLines />
      <Sparkle count={3} />
    </>
  ),

  'kb-yashoda-chases': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '20%', zIndex: 5 }}>
        <Krishna size={120} mood="running" className="run-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '20%', zIndex: 4 }}>
        <Yashoda size={160} mood="chasing" className="run-animation" />
      </div>
      <SpeedLines />
    </>
  ),

  'kb-krishna-hides': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <ButterPot size={120} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-40%)', zIndex: 4 }}>
        <Krishna size={110} mood="hiding" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '15%', zIndex: 4 }}>
        <Yashoda size={140} mood="angry" />
      </div>
    </>
  ),

  'kb-yashoda-catches': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Yashoda size={170} mood="angry" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '55%', zIndex: 5 }}>
        <Krishna size={110} mood="eating" className="anim-wobble" />
      </div>
    </>
  ),

  'kb-krishna-denies': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Krishna size={160} mood="eating" className="anim-sway" />
      </div>
      <Sparkle count={3} />
    </>
  ),

  'kb-yashoda-scolds': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '30%', zIndex: 4 }}>
        <Yashoda size={160} mood="happy" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '25%', zIndex: 5 }}>
        <Krishna size={120} mood="mischievous" className="bounce-animation" />
      </div>
      <Sparkle count={4} />
    </>
  ),

  'kb-ties-mortar': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '25%', zIndex: 4 }}>
        <Yashoda size={150} mood="angry" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '30%', zIndex: 3 }}>
        <Mortar size={90} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '32%', zIndex: 5 }}>
        <Krishna size={110} mood="happy" />
      </div>
    </>
  ),

  'kb-krishna-cries': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <Mortar size={100} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '16%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Krishna size={150} mood="crying" className="shake-animation" />
      </div>
      <Rain />
      <DarkVignette />
    </>
  ),

  'kb-yashoda-melts': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Yashoda size={170} mood="loving" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '55%', zIndex: 5 }}>
        <Krishna size={110} mood="crying" className="anim-breathe" />
      </div>
      <Sparkle count={5} />
      <SunsetGlow intensity={0.2} />
    </>
  ),

  'kb-krishna-smiles': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Krishna size={170} mood="mischievous" className="bounce-animation" />
      </div>
      <Sparkle count={8} />
      <Confetti />
    </>
  ),

  'kb-mother-love': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Yashoda size={180} mood="loving" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '16%', left: '53%', zIndex: 5 }}>
        <Krishna size={100} mood="happy" className="anim-breathe" />
      </div>
      <Sparkle count={8} />
      <SunsetGlow intensity={0.3} />
    </>
  ),

  'kb-moral-scene': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '35%', zIndex: 4 }}>
        <Yashoda size={150} mood="loving" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '16%', left: '55%', zIndex: 5 }}>
        <Krishna size={120} mood="happy" className="float-animation" />
      </div>
      <LightbulbIcon />
      <Sparkle count={10} />
      <SunsetGlow intensity={0.35} />
    </>
  ),

};

export default scenes;
