import React from 'react';
import { Monkey, Crocodile, CrocodileWife, RoseAppleTree, FallingFruit, Water, Ripples, Splash, Birds, Leaves, Rain, SpeedLines, Sparkle, Confetti, ThinkingBubbles, LightbulbIcon, DarkVignette, FireGlow, SunsetGlow, Fireflies, FloatingBubbles } from '../Characters';

const scenes = {
  'river-intro': () => (
    <>
      <div className="scene-layer scene-sky" />
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Birds count={4} />
        <Sparkle count={3} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)' }}>
        <RoseAppleTree size={260} />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water y={320} />
      </svg>
    </>
  ),

  'monkey-intro': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Birds count={2} />
        <Leaves count={4} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '15%' }}>
        <RoseAppleTree size={280} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '38%', right: '22%', zIndex: 4 }}>
        <Monkey size={130} mood="delighted" className="bounce-animation" />
      </div>
    </>
  ),

  'crocodile-arrives': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', right: '20%' }}>
        <RoseAppleTree size={220} />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water y={300} />
        <Ripples cx={350} cy={340} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '8%', left: '15%', zIndex: 4 }}>
        <Crocodile size={200} mood="tired" className="float-animation" />
      </div>
    </>
  ),

  'monkey-shares': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)' }}>
        <RoseAppleTree size={260} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '42%', left: '48%', zIndex: 4 }}>
        <Monkey size={110} mood="happy" className="bounce-animation" />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water y={320} />
        <FallingFruit x={420} y={200} delay={0} />
        <FallingFruit x={460} y={220} delay={0.5} />
        <FallingFruit x={440} y={180} delay={1} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '8%', left: '20%', zIndex: 4 }}>
        <Crocodile size={180} mood="neutral" className="float-animation" />
      </div>
    </>
  ),

  'crocodile-eats': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={6} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '28%', right: '15%' }}>
        <RoseAppleTree size={200} />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water y={310} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '25%', zIndex: 4 }}>
        <Crocodile size={200} mood="happy" className="bounce-animation" />
      </div>
    </>
  ),

  'friendship-begins': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)' }}>
        <RoseAppleTree size={240} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '40%', left: '45%', zIndex: 4 }}>
        <Monkey size={100} mood="happy" className="float-animation" />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water y={330} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '8%', left: '30%', zIndex: 4 }}>
        <Crocodile size={170} mood="happy" className="float-animation" />
      </div>
    </>
  ),

  'fruits-for-wife': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <FallingFruit x={500} y={180} delay={0} />
        <FallingFruit x={530} y={200} delay={0.4} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '20%' }}>
        <RoseAppleTree size={220} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '40%', left: '22%', zIndex: 4 }}>
        <Monkey size={100} mood="happy" className="bounce-animation" />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water y={320} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '6%', right: '15%', zIndex: 4 }}>
        <Crocodile size={190} mood="happy" className="float-animation" />
      </div>
    </>
  ),

  'wife-eats': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water y={310} dark />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <CrocodileWife size={220} mood="scheming" className="pulse-animation" />
      </div>
      <Fireflies count={8} />
    </>
  ),

  'wife-demands': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
        <FireGlow />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water y={310} dark />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '15%', zIndex: 4 }}>
        <CrocodileWife size={200} mood="demanding" className="anim-scared-shiver" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '15%', zIndex: 4 }}>
        <Crocodile size={180} mood="scared" className="shake-animation" />
      </div>
    </>
  ),

  'crocodile-shocked': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water y={320} dark />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Crocodile size={220} mood="scared" className="shake-animation" />
      </div>
      <div className="impact-text">!</div>
    </>
  ),

  'wife-threatens': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
        <FireGlow />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <CrocodileWife size={240} mood="angry" className="shake-animation" />
      </div>
    </>
  ),

  'crocodile-torn': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Rain />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water y={310} dark />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Crocodile size={200} mood="sad" className="float-animation" />
      </div>
      <Fireflies count={6} />
    </>
  ),

  'crocodile-plan': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Birds count={2} />
        <Sparkle count={3} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', right: '10%' }}>
        <RoseAppleTree size={220} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '40%', right: '16%', zIndex: 4 }}>
        <Monkey size={100} mood="excited" className="bounce-animation" />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water y={330} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '8%', left: '15%', zIndex: 4 }}>
        <Crocodile size={190} mood="deceptive" />
      </div>
    </>
  ),

  'monkey-excited': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={6} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)' }}>
        <RoseAppleTree size={260} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '45%', left: '48%', zIndex: 4 }}>
        <Monkey size={130} mood="excited" className="bounce-animation" />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water y={340} />
      </svg>
    </>
  ),

  'ride-on-back': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={3} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={250} />
        <Ripples cx={450} cy={300} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Crocodile size={240} mood="deceptive" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '38%', left: '46%', zIndex: 5 }}>
        <Monkey size={90} mood="excited" className="bounce-animation" />
      </div>
    </>
  ),

  'middle-of-river': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={200} dark />
        <Splash cx={450} cy={280} />
        <Ripples cx={350} cy={300} />
        <Ripples cx={550} cy={320} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%) rotate(15deg)', zIndex: 4 }}>
        <Crocodile size={220} mood="guilty" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '35%', left: '42%', zIndex: 5 }}>
        <Monkey size={100} mood="terrified" className="anim-scared-shiver" />
      </div>
      <div className="impact-text large">SPLASH!</div>
      <FloatingBubbles count={6} />
    </>
  ),

  'truth-revealed': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={250} dark />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '20%', zIndex: 4 }}>
        <Crocodile size={200} mood="guilty" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '35%', right: '25%', zIndex: 5 }}>
        <Monkey size={110} mood="terrified" className="anim-scared-shiver" />
      </div>
      <Fireflies count={6} />
    </>
  ),

  'monkey-thinks': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={250} dark />
        <ThinkingBubbles x={550} y={120} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Monkey size={140} mood="thinking" className="anim-thinking-bob" />
      </div>
      <div className="thinking-overlay">
        <div className="gear-icon">&#x2699;</div>
      </div>
    </>
  ),

  'monkey-trick': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={5} />
        <LightbulbIcon x={450} y={60} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={280} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Monkey size={140} mood="clever" className="bounce-animation" />
      </div>
    </>
  ),

  'crocodile-fooled': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={270} />
        <Ripples cx={450} cy={320} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Crocodile size={220} mood="gullible" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '35%', left: '45%', zIndex: 5 }}>
        <Monkey size={90} mood="clever" />
      </div>
    </>
  ),

  'swimming-back': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SpeedLines direction="left" />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={260} />
        <Ripples cx={350} cy={310} />
        <Ripples cx={550} cy={330} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Crocodile size={230} className="run-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '36%', left: '46%', zIndex: 5 }}>
        <Monkey size={85} mood="clever" />
      </div>
    </>
  ),

  'reaching-tree': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SpeedLines direction="right" />
        <Leaves count={8} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '15%' }}>
        <RoseAppleTree size={280} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '55%', right: '22%', zIndex: 4 }}>
        <Monkey size={100} mood="excited" className="bounce-animation" />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water y={340} />
      </svg>
    </>
  ),

  'monkey-safe': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={6} />
        <Confetti />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)' }}>
        <RoseAppleTree size={280} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '58%', left: '47%', zIndex: 4 }}>
        <Monkey size={120} mood="triumphant" className="anim-celebrate" />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water y={350} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '5%', left: '20%', zIndex: 4 }}>
        <Crocodile size={150} mood="ashamed" />
      </div>
    </>
  ),

  'crocodile-ashamed': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Rain />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={300} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Crocodile size={200} mood="ashamed" className="float-animation" />
      </div>
    </>
  ),

  'monkey-lesson': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <Leaves count={3} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)' }}>
        <RoseAppleTree size={260} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '52%', left: '47%', zIndex: 4 }}>
        <Monkey size={120} mood="wise" className="float-animation" />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water y={350} />
      </svg>
    </>
  ),

  'crocodile-leaves': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', right: '10%' }}>
        <RoseAppleTree size={200} />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water y={310} />
        <Ripples cx={250} cy={350} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '8%', left: '10%', zIndex: 4, opacity: 0.7 }}>
        <Crocodile size={160} mood="sad" className="float-animation" />
      </div>
    </>
  ),

  'monkey-continues': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Birds count={3} />
        <Sparkle count={5} />
        <Leaves count={4} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)' }}>
        <RoseAppleTree size={280} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '50%', left: '47%', zIndex: 4 }}>
        <Monkey size={120} mood="content" className="float-animation" />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water y={350} />
      </svg>
    </>
  ),

  'moral-scene': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <Birds count={4} />
        <Sparkle count={6} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', right: '15%' }}>
        <RoseAppleTree size={200} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '45%', right: '22%', zIndex: 4 }}>
        <Monkey size={100} mood="wise" className="float-animation" />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water y={340} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '5%', left: '10%', zIndex: 4, opacity: 0.4 }}>
        <Crocodile size={120} mood="sad" />
      </div>
    </>
  ),

};

export default scenes;
