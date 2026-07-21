import React from 'react';
import { RoseAppleTree, Birds, Leaves, SpeedLines, Sparkle, Confetti, ThinkingBubbles, LightbulbIcon, DarkVignette, FireGlow, SunsetGlow, DustMotes } from '../Characters';
import { Jackal, Drum } from '../CharactersNew';

const scenes = {
  'jd-battlefield-intro': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
      </svg>
      {/* Desolate battlefield ground */}
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="330" width="900" height="90" fill="#5D4037" />
        <rect x="150" y="340" width="60" height="10" fill="#795548" rx="2" />
        <rect x="500" y="350" width="80" height="8" fill="#795548" rx="2" />
        <rect x="700" y="335" width="50" height="12" fill="#795548" rx="2" />
      </svg>
      <DustMotes count={12} />
    </>
  ),

  'jd-hungry-jackal': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="340" width="900" height="80" fill="#5D4037" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Jackal size={150} mood="tired" className="float-animation" />
      </div>
    </>
  ),

  'jd-hears-sound': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="340" width="900" height="80" fill="#5D4037" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '30%', zIndex: 4 }}>
        <Jackal size={140} mood="scared" className="shake-animation" />
      </div>
      {/* Sound waves */}
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 5 }}>
        <circle cx="700" cy="250" r="20" fill="none" stroke="#FFD54F" strokeWidth="2" opacity="0.8">
          <animate attributeName="r" values="20;50;20" dur="1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1s" repeatCount="indefinite" />
        </circle>
        <circle cx="700" cy="250" r="35" fill="none" stroke="#FFD54F" strokeWidth="1.5" opacity="0.5">
          <animate attributeName="r" values="35;70;35" dur="1.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0.1;0.5" dur="1.2s" repeatCount="indefinite" />
        </circle>
      </svg>
      <div className="impact-text">BOOM!</div>
    </>
  ),

  'jd-terrified': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
        <FireGlow />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="340" width="900" height="80" fill="#5D4037" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Jackal size={160} mood="scared" className="shake-animation" />
      </div>
      <div className="impact-text large">!</div>
    </>
  ),

  'jd-sound-again': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="340" width="900" height="80" fill="#5D4037" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '25%', zIndex: 4 }}>
        <Jackal size={130} mood="scared" className="pulse-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', right: '20%', zIndex: 3 }}>
        <RoseAppleTree size={200} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '22%', zIndex: 4 }}>
        <Drum size={80} className="shake-animation" />
      </div>
      <div className="impact-text">BOOM!</div>
    </>
  ),

  'jd-runs-hides': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SpeedLines direction="left" />
        <DarkVignette />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="340" width="900" height="80" fill="#5D4037" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '15%', zIndex: 4 }}>
        <Jackal size={120} mood="scared" className="run-animation" />
      </div>
    </>
  ),

  'jd-peeks-out': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="340" width="900" height="80" fill="#5D4037" />
      </svg>
      {/* Bush to hide behind */}
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <ellipse cx="200" cy="310" rx="80" ry="40" fill="#2E7D32" />
        <ellipse cx="170" cy="300" rx="50" ry="30" fill="#388E3C" />
        <ellipse cx="240" cy="305" rx="55" ry="32" fill="#43A047" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '12%', zIndex: 4 }}>
        <Jackal size={100} mood="neutral" className="anim-breathe" />
      </div>
    </>
  ),

  'jd-decides-investigate': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <ThinkingBubbles x={300} y={100} />
        <LightbulbIcon x={350} y={60} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="340" width="900" height="80" fill="#5D4037" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '25%', zIndex: 4 }}>
        <Jackal size={140} mood="neutral" className="anim-breathe" />
      </div>
    </>
  ),

  'jd-approaches': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="340" width="900" height="80" fill="#5D4037" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', right: '20%', zIndex: 3 }}>
        <RoseAppleTree size={220} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '22%', zIndex: 4 }}>
        <Drum size={90} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '30%', zIndex: 4 }}>
        <Jackal size={130} mood="neutral" className="anim-hop" />
      </div>
    </>
  ),

  'jd-finds-tree-drum': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={3} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="340" width="900" height="80" fill="#5D4037" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <RoseAppleTree size={250} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Drum size={110} className="pulse-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '15%', zIndex: 4 }}>
        <Jackal size={130} mood="neutral" className="anim-breathe" />
      </div>
    </>
  ),

  'jd-wind-branch': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Leaves count={6} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="340" width="900" height="80" fill="#5D4037" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <RoseAppleTree size={240} className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Drum size={100} className="shake-animation" />
      </div>
      {/* Sound waves from drum */}
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 5 }}>
        <circle cx="450" cy="280" r="15" fill="none" stroke="#FFD54F" strokeWidth="2" opacity="0.7">
          <animate attributeName="r" values="15;40;15" dur="0.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;0.1;0.7" dur="0.8s" repeatCount="indefinite" />
        </circle>
      </svg>
      <div className="impact-text">BOOM!</div>
    </>
  ),

  'jd-realizes': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={5} />
        <LightbulbIcon x={350} y={50} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="340" width="900" height="80" fill="#5D4037" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', right: '25%', zIndex: 3 }}>
        <Drum size={100} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '25%', zIndex: 4 }}>
        <Jackal size={140} mood="happy" className="anim-entrance-pop" />
      </div>
    </>
  ),

  'jd-laughs': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={6} />
        <Confetti />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="340" width="900" height="80" fill="#5D4037" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Jackal size={160} mood="happy" className="bounce-animation" />
      </div>
    </>
  ),

  'jd-examines-drum': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <ThinkingBubbles x={400} y={100} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="340" width="900" height="80" fill="#5D4037" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <Drum size={130} className="pulse-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '20%', zIndex: 4 }}>
        <Jackal size={130} mood="neutral" className="anim-breathe" />
      </div>
    </>
  ),

  'jd-finds-food': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={8} />
        <LightbulbIcon x={450} y={40} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="340" width="900" height="80" fill="#5D4037" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '25%', zIndex: 3 }}>
        <Drum size={120} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '25%', zIndex: 4 }}>
        <Jackal size={140} mood="happy" className="anim-entrance-pop" />
      </div>
    </>
  ),

  'jd-eats-happily': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={6} />
        <Confetti />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="340" width="900" height="80" fill="#5D4037" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Jackal size={150} mood="happy" className="bounce-animation" />
      </div>
    </>
  ),

  'jd-reflects-fear': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <ThinkingBubbles x={400} y={80} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="340" width="900" height="80" fill="#5D4037" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Jackal size={140} mood="neutral" className="float-animation" />
      </div>
    </>
  ),

  'jd-sunset-wisdom': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <Birds count={3} />
        <Sparkle count={4} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="350" width="900" height="70" fill="#5D4037" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Jackal size={140} mood="happy" className="float-animation" />
      </div>
    </>
  ),

  'jd-new-morning': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Birds count={4} />
        <Sparkle count={5} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="350" width="900" height="70" fill="#6D4C41" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Jackal size={140} mood="happy" className="anim-hop" />
      </div>
    </>
  ),

  'jd-tells-others': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={3} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="350" width="900" height="70" fill="#6D4C41" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '25%', zIndex: 4 }}>
        <Jackal size={130} mood="happy" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', right: '20%', zIndex: 4 }}>
        <Jackal size={100} mood="neutral" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', right: '35%', zIndex: 4 }}>
        <Jackal size={95} mood="neutral" className="float-animation" />
      </div>
    </>
  ),

  'jd-lesson-courage': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <Sparkle count={5} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="350" width="900" height="70" fill="#5D4037" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Jackal size={150} mood="happy" className="float-animation" />
      </div>
    </>
  ),

  'jd-courage-rewarded': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Confetti />
        <Sparkle count={8} />
        <SunsetGlow />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="350" width="900" height="70" fill="#5D4037" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '30%', zIndex: 3 }}>
        <Drum size={90} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '30%', zIndex: 4 }}>
        <Jackal size={140} mood="happy" className="bounce-animation" />
      </div>
    </>
  ),

  'jd-deeper-lesson': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <Sparkle count={6} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="350" width="900" height="70" fill="#5D4037" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Jackal size={150} mood="happy" className="pulse-animation" />
      </div>
    </>
  ),

  'jd-apply-lesson': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <Birds count={3} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="350" width="900" height="70" fill="#5D4037" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', right: '15%', zIndex: 3 }}>
        <RoseAppleTree size={200} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '30%', zIndex: 4 }}>
        <Jackal size={130} mood="happy" className="anim-hop" />
      </div>
    </>
  ),

  'jd-wisdom': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <Birds count={4} />
        <Sparkle count={5} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="350" width="900" height="70" fill="#5D4037" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Jackal size={150} mood="happy" className="float-animation" />
      </div>
    </>
  ),

  'jd-moral-scene': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <Confetti />
        <Sparkle count={8} />
        <Birds count={3} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="350" width="900" height="70" fill="#5D4037" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '30%', zIndex: 3 }}>
        <Drum size={80} className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '30%', zIndex: 4 }}>
        <Jackal size={140} mood="happy" className="float-animation" />
      </div>
    </>
  ),

};

export default scenes;
