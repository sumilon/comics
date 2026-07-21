import React from 'react';
import { Birds, Leaves, Rain, SpeedLines, Sparkle, Confetti, ThinkingBubbles, LightbulbIcon, DarkVignette, FireGlow, SunsetGlow } from '../Characters';
import { Bheem, Chutki, Raju, Jaggu, Kalia, DholuBholu, MagicLadoo } from '../CharactersNew';

const scenes = {
  'cb-dholakpur-intro': () => (
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
      <Leaves count={4} />
    </>
  ),

  'cb-bheem-intro': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Bheem size={180} mood="happy" className="bounce-animation" />
      </div>
      <Sparkle count={6} />
      <SunsetGlow intensity={0.15} />
    </>
  ),

  'cb-friends-playing': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '15%', zIndex: 4 }}>
        <Bheem size={130} mood="happy" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '38%', zIndex: 4 }}>
        <Chutki size={110} mood="happy" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '30%', zIndex: 4 }}>
        <Raju size={90} mood="happy" className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '16%', right: '12%', zIndex: 4 }}>
        <Jaggu size={80} mood="playful" className="bounce-animation" />
      </div>
      <Sparkle count={3} />
    </>
  ),

  'cb-sky-glows': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <MagicLadoo size={80} glowing className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '25%', zIndex: 4 }}>
        <Bheem size={120} mood="thinking" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '25%', zIndex: 4 }}>
        <Chutki size={100} mood="surprised" />
      </div>
      <Sparkle count={8} />
      <SunsetGlow intensity={0.3} />
    </>
  ),

  'cb-ladoo-lands': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <MagicLadoo size={100} glowing className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '15%', zIndex: 4 }}>
        <Bheem size={120} mood="thinking" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '20%', zIndex: 4 }}>
        <Raju size={85} mood="excited" className="anim-hop" />
      </div>
      <Sparkle count={6} />
      <Confetti />
    </>
  ),

  'cb-ladoo-examined': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <MagicLadoo size={90} glowing className="pulse-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '20%', zIndex: 4 }}>
        <Bheem size={120} mood="thinking" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '25%', zIndex: 4 }}>
        <Chutki size={100} mood="happy" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '10%', zIndex: 4 }}>
        <Jaggu size={70} mood="excited" className="bounce-animation" />
      </div>
      <Sparkle count={5} />
    </>
  ),

  'cb-raju-wishes': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '32%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <MagicLadoo size={80} glowing className="pulse-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Raju size={110} mood="excited" className="bounce-animation" />
      </div>
      <Sparkle count={8} />
      <Confetti />
    </>
  ),

  'cb-chutki-wishes': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '32%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <MagicLadoo size={80} glowing className="pulse-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Chutki size={120} mood="happy" className="float-animation" />
      </div>
      <Sparkle count={8} />
      <Leaves count={5} />
    </>
  ),

  'cb-bheem-declines': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '28%', right: '20%', zIndex: 5 }}>
        <MagicLadoo size={70} glowing />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Bheem size={150} mood="thinking" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '15%', zIndex: 3 }}>
        <Chutki size={90} mood="happy" />
      </div>
      <Sparkle count={3} />
    </>
  ),

  'cb-kalia-spies': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '15%', zIndex: 5 }}>
        <Kalia size={130} mood="mischievous" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '5%', zIndex: 4 }}>
        <DholuBholu size={100} mood="happy" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '35%', zIndex: 3 }}>
        <MagicLadoo size={60} glowing />
      </div>
      <DarkVignette />
    </>
  ),

  'cb-kalia-steals': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Kalia size={140} mood="mischievous" className="run-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '52%', zIndex: 6 }}>
        <MagicLadoo size={50} glowing />
      </div>
      <SpeedLines />
      <DarkVignette />
    </>
  ),

  'cb-kalia-first-wish': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Kalia size={160} mood="angry" className="anim-grow" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '52%', zIndex: 5 }}>
        <MagicLadoo size={70} glowing className="pulse-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '10%', zIndex: 3 }}>
        <DholuBholu size={90} mood="scared" />
      </div>
      <Sparkle count={6} />
      <FireGlow intensity={0.2} />
    </>
  ),

  'cb-chaos-animals': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Birds count={8} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '20%', zIndex: 4 }}>
        <Bheem size={120} mood="determined" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '20%', zIndex: 4 }}>
        <Jaggu size={80} mood="scared" className="shake-animation" />
      </div>
      <SpeedLines />
      <Leaves count={6} />
    </>
  ),

  'cb-chaos-weather': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '30%', zIndex: 4 }}>
        <Bheem size={130} mood="determined" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '25%', zIndex: 4 }}>
        <Chutki size={100} mood="worried" className="shake-animation" />
      </div>
      <Rain />
      <DarkVignette />
    </>
  ),

  'cb-village-trouble': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '15%', zIndex: 4 }}>
        <Bheem size={120} mood="determined" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '38%', zIndex: 4 }}>
        <Chutki size={95} mood="worried" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '30%', zIndex: 4 }}>
        <Raju size={80} mood="scared" className="shake-animation" />
      </div>
      <Rain />
      <DarkVignette />
    </>
  ),

  'cb-bheem-steps-up': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Bheem size={170} mood="heroic" className="anim-entrance-pop" />
      </div>
      <Sparkle count={6} />
      <SunsetGlow intensity={0.25} />
    </>
  ),

  'cb-fixing-animals': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '25%', zIndex: 4 }}>
        <Bheem size={140} mood="strong" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '16%', right: '20%', zIndex: 4 }}>
        <Jaggu size={90} mood="happy" className="bounce-animation" />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Birds count={4} />
      </svg>
      <Sparkle count={4} />
    </>
  ),

  'cb-bheem-fixes-storm': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Bheem size={160} mood="heroic" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '15%', zIndex: 3 }}>
        <Raju size={80} mood="brave" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '15%', zIndex: 3 }}>
        <Chutki size={90} mood="determined" />
      </div>
      <SpeedLines />
      <Sparkle count={5} />
    </>
  ),

  'cb-bheem-finds-kalia': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '25%', zIndex: 5 }}>
        <Bheem size={140} mood="determined" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '20%', zIndex: 4 }}>
        <Kalia size={130} mood="scared" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '28%', right: '22%', zIndex: 5 }}>
        <MagicLadoo size={50} glowing />
      </div>
    </>
  ),

  'cb-kalia-surprised': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Kalia size={150} mood="scared" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '10%', zIndex: 3 }}>
        <DholuBholu size={100} mood="scared" />
      </div>
      <DarkVignette />
    </>
  ),

  'cb-bheem-explains': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '25%', zIndex: 5 }}>
        <Bheem size={140} mood="happy" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '20%', zIndex: 4 }}>
        <Kalia size={120} mood="scared" />
      </div>
      <ThinkingBubbles />
      <Sparkle count={3} />
    </>
  ),

  'cb-kalia-sorry': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Kalia size={140} mood="sorry" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '52%', zIndex: 5 }}>
        <MagicLadoo size={60} glowing />
      </div>
      <Sparkle count={4} />
    </>
  ),

  'cb-kalia-helps': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '20%', zIndex: 4 }}>
        <Bheem size={130} mood="happy" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '20%', zIndex: 4 }}>
        <Kalia size={120} mood="sorry" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '45%', zIndex: 3 }}>
        <Raju size={80} mood="happy" />
      </div>
      <Sparkle count={5} />
    </>
  ),

  'cb-village-restored': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '10%', zIndex: 4 }}>
        <Bheem size={120} mood="happy" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '30%', zIndex: 4 }}>
        <Chutki size={100} mood="happy" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '30%', zIndex: 4 }}>
        <Raju size={85} mood="happy" className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '16%', right: '12%', zIndex: 4 }}>
        <Jaggu size={75} mood="happy" className="bounce-animation" />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Birds count={4} />
      </svg>
      <Sparkle count={6} />
      <SunsetGlow intensity={0.2} />
    </>
  ),

  'cb-ladoo-dissolves': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '35%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <MagicLadoo size={100} glowing className="pulse-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '30%', zIndex: 4 }}>
        <Bheem size={120} mood="happy" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '25%', zIndex: 4 }}>
        <Chutki size={100} mood="surprised" />
      </div>
      <Sparkle count={10} />
      <Confetti />
      <SunsetGlow intensity={0.3} />
    </>
  ),

  'cb-moral-celebration': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '15%', zIndex: 4 }}>
        <Bheem size={130} mood="heroic" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '38%', zIndex: 4 }}>
        <Chutki size={95} mood="happy" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '30%', zIndex: 4 }}>
        <Raju size={80} mood="happy" className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '16%', right: '15%', zIndex: 4 }}>
        <Jaggu size={70} mood="happy" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '5%', zIndex: 3 }}>
        <Kalia size={100} mood="sorry" />
      </div>
      <LightbulbIcon />
      <Sparkle count={10} />
      <Confetti />
      <SunsetGlow intensity={0.35} />
    </>
  ),

};

export default scenes;
