import React from 'react';
import { Water, Ripples, Splash, Birds, Rain, SpeedLines, Sparkle, Confetti, ThinkingBubbles, DarkVignette, SunsetGlow, FloatingBubbles } from '../Characters';
import { Fish, Fisherman } from '../CharactersNew';

const scenes = {
  'tf-peaceful-lake': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Birds count={3} />
        <Sparkle count={4} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={250} />
        <Ripples cx={300} cy={300} />
        <Ripples cx={600} cy={320} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <ellipse cx="200" cy="310" rx="25" ry="8" fill="#2E7D32" opacity="0.6" />
        <ellipse cx="700" cy="330" rx="22" ry="7" fill="#388E3C" opacity="0.5" />
      </svg>
      <FloatingBubbles count={8} />
    </>
  ),

  'tf-three-friends': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={5} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={220} />
        <Ripples cx={450} cy={300} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '35%', left: '15%', zIndex: 4 }}>
        <Fish size={90} color="#FFD700" className="anim-drift" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '45%', zIndex: 4 }}>
        <Fish size={85} color="#66BB6A" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '38%', right: '15%', zIndex: 4 }}>
        <Fish size={80} color="#FF7043" className="anim-wobble" />
      </div>
      <FloatingBubbles count={7} />
    </>
  ),

  'tf-wise-fish': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={6} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={240} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Fish size={140} color="#FFD700" mood="wise" className="anim-sway" />
      </div>
      <FloatingBubbles count={6} />
    </>
  ),

  'tf-clever-fish': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={4} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={240} />
        <Ripples cx={450} cy={310} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Fish size={130} color="#66BB6A" mood="clever" className="anim-drift" />
      </div>
    </>
  ),

  'tf-foolish-fish': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={240} />
        <Ripples cx={400} cy={320} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Fish size={120} color="#FF7043" mood="happy" className="anim-hop" />
      </div>
    </>
  ),

  'tf-fishermen-spotted': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
        <Birds count={2} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={300} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '15%', zIndex: 4 }}>
        <Fisherman size={140} className="anim-sway" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '28%', right: '20%', zIndex: 4 }}>
        <Fisherman size={130} className="anim-wobble" />
      </div>
    </>
  ),

  'tf-wise-overhears': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={280} />
        <Ripples cx={400} cy={320} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '32%', left: '15%', zIndex: 3, opacity: 0.5 }}>
        <Fisherman size={120} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Fish size={110} color="#FFD700" mood="alert" className="anim-wiggle" />
      </div>
    </>
  ),

  'tf-warns-friends': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={250} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '15%', zIndex: 4 }}>
        <Fish size={100} color="#FFD700" mood="alert" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '45%', zIndex: 4 }}>
        <Fish size={90} color="#66BB6A" mood="curious" className="anim-sway" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '32%', right: '15%', zIndex: 4 }}>
        <Fish size={85} color="#FF7043" mood="happy" className="anim-wobble" />
      </div>
      <div className="impact-text">!</div>
    </>
  ),

  'tf-foolish-dismisses': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={250} />
        <Ripples cx={500} cy={310} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '20%', zIndex: 4 }}>
        <Fish size={90} color="#FFD700" mood="alert" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', right: '20%', zIndex: 4 }}>
        <Fish size={100} color="#FF7043" mood="happy" className="anim-hop" />
      </div>
    </>
  ),

  'tf-clever-stays': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <ThinkingBubbles x={500} y={130} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={250} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Fish size={120} color="#66BB6A" mood="clever" className="anim-drift" />
      </div>
    </>
  ),

  'tf-wise-leaves': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SpeedLines direction="right" />
        <Sparkle count={3} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={260} />
        <Ripples cx={650} cy={310} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', right: '5%', zIndex: 4 }}>
        <Fish size={100} color="#FFD700" mood="wise" className="run-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '20%', zIndex: 3, opacity: 0.5 }}>
        <Fish size={70} color="#66BB6A" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '32%', left: '40%', zIndex: 3, opacity: 0.5 }}>
        <Fish size={65} color="#FF7043" />
      </div>
    </>
  ),

  'tf-fishermen-arrive': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={300} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '10%', zIndex: 4 }}>
        <Fisherman size={150} className="anim-entrance-pop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '26%', left: '40%', zIndex: 4 }}>
        <Fisherman size={140} className="anim-entrance-pop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', right: '10%', zIndex: 4 }}>
        <Fisherman size={135} className="anim-entrance-pop" />
      </div>
    </>
  ),

  'tf-nets-cast': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={280} />
        <Splash cx={450} cy={300} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 4 }}>
        <g stroke="#8D6E63" strokeWidth="1.5" fill="none" opacity="0.7">
          <path d="M250,290 Q450,350 650,290" />
          <path d="M280,290 L320,340 L360,290" />
          <path d="M360,290 L400,340 L440,290" />
          <path d="M440,290 L480,340 L520,290" />
          <path d="M520,290 L560,340 L600,290" />
          <line x1="320" y1="340" x2="400" y2="340" />
          <line x1="400" y1="340" x2="480" y2="340" />
          <line x1="480" y1="340" x2="560" y2="340" />
        </g>
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '35%', left: '15%', zIndex: 5 }}>
        <Fisherman size={130} className="anim-swing" />
      </div>
      <div className="impact-text">SPLASH!</div>
    </>
  ),

  'tf-clever-caught': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={280} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 4 }}>
        <g stroke="#8D6E63" strokeWidth="1.5" fill="none" opacity="0.6">
          <ellipse cx="450" cy="320" rx="80" ry="50" />
          <line x1="400" y1="290" x2="420" y2="350" />
          <line x1="450" y1="280" x2="450" y2="360" />
          <line x1="500" y1="290" x2="480" y2="350" />
        </g>
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Fish size={110} color="#66BB6A" mood="scared" className="anim-scared-shiver" />
      </div>
      <FloatingBubbles count={5} />
    </>
  ),

  'tf-plays-dead': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%) rotate(180deg)', zIndex: 4 }}>
        <Fish size={120} color="#66BB6A" mood="dead" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '15%', zIndex: 3 }}>
        <Fisherman size={130} className="anim-wobble" />
      </div>
    </>
  ),

  'tf-thrown-back': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SpeedLines direction="down" />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={300} />
        <Splash cx={500} cy={310} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Fish size={100} color="#66BB6A" mood="dead" className="anim-swing" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '35%', left: '15%', zIndex: 3 }}>
        <Fisherman size={120} className="anim-sway" />
      </div>
    </>
  ),

  'tf-clever-escapes': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SpeedLines direction="right" />
        <Sparkle count={5} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={260} />
        <Ripples cx={600} cy={310} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', right: '10%', zIndex: 4 }}>
        <Fish size={100} color="#66BB6A" mood="clever" className="run-animation" />
      </div>
    </>
  ),

  'tf-foolish-caught': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={290} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 4 }}>
        <g stroke="#8D6E63" strokeWidth="1.5" fill="none" opacity="0.6">
          <ellipse cx="450" cy="310" rx="70" ry="45" />
          <line x1="410" y1="280" x2="425" y2="350" />
          <line x1="450" y1="270" x2="450" y2="355" />
          <line x1="490" y1="280" x2="475" y2="350" />
        </g>
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Fish size={110} color="#FF7043" mood="scared" className="shake-animation" />
      </div>
    </>
  ),

  'tf-foolish-struggles': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
        <SpeedLines />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={300} />
        <Splash cx={450} cy={310} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Fish size={120} color="#FF7043" mood="scared" className="shake-animation" />
      </div>
      <div className="impact-text large">!!!</div>
    </>
  ),

  'tf-fishermen-celebrate': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={320} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '20%', zIndex: 4 }}>
        <Fisherman size={140} className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '23%', right: '20%', zIndex: 4 }}>
        <Fisherman size={135} className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '35%', left: '50%', transform: 'translateX(-50%)', zIndex: 5, opacity: 0.6 }}>
        <Fish size={70} color="#FF7043" mood="dead" />
      </div>
    </>
  ),

  'tf-wise-safe': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={6} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={240} />
        <Ripples cx={450} cy={300} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Fish size={130} color="#FFD700" mood="wise" className="anim-drift" />
      </div>
    </>
  ),

  'tf-clever-relieved': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={5} />
        <Confetti />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={250} />
        <Ripples cx={400} cy={310} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Fish size={120} color="#66BB6A" mood="happy" className="bounce-animation" />
      </div>
    </>
  ),

  'tf-foolish-fate': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
        <Rain />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%) rotate(180deg)', zIndex: 4, opacity: 0.5 }}>
        <Fish size={100} color="#FF7043" mood="dead" />
      </div>
    </>
  ),

  'tf-lesson-preparation': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <Sparkle count={4} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={270} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '25%', zIndex: 4 }}>
        <Fish size={100} color="#FFD700" mood="wise" className="anim-sway" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '28%', right: '25%', zIndex: 4 }}>
        <Fish size={95} color="#66BB6A" mood="clever" className="anim-drift" />
      </div>
    </>
  ),

  'tf-wisdom': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <Sparkle count={6} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={280} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 4, opacity: 0.7 }}>
        <Fish size={140} color="#FFD700" mood="wise" className="float-animation" />
      </div>
    </>
  ),

  'tf-moral-scene': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <Sparkle count={8} />
        <Birds count={3} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={280} />
        <Ripples cx={350} cy={320} />
        <Ripples cx={550} cy={330} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '20%', zIndex: 4 }}>
        <Fish size={90} color="#FFD700" mood="wise" className="anim-sway" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Fish size={85} color="#66BB6A" mood="happy" className="anim-drift" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '20%', zIndex: 3, opacity: 0.3 }}>
        <Fish size={70} color="#FF7043" mood="dead" />
      </div>
     </>
  ),

};

export default scenes;
