import React from 'react';
import { Monkey, RoseAppleTree, Birds, Leaves, Rain, SpeedLines, Sparkle, ThinkingBubbles, DarkVignette, FireGlow, SunsetGlow } from '../Characters';
import { Villagers, Log } from '../CharactersNew';

const scenes = {
  'wm-site-intro': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Birds count={3} />
        <Sparkle count={2} />
      </svg>
      {/* Construction site ground */}
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="340" width="900" height="80" fill="#8D6E63" />
        <rect x="100" y="300" width="200" height="40" fill="#A1887F" />
        <rect x="600" y="310" width="180" height="30" fill="#A1887F" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Log size={180} wedgeIn={true} />
      </div>
    </>
  ),

  'wm-workers-splitting': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="350" width="900" height="70" fill="#8D6E63" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <Log size={200} wedgeIn={true} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '15%', zIndex: 4 }}>
        <Villagers count={3} className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', right: '15%', zIndex: 4 }}>
        <Villagers count={2} className="bounce-animation" />
      </div>
    </>
  ),

  'wm-wedge-in-log': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={3} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="350" width="900" height="70" fill="#8D6E63" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Log size={220} wedgeIn={true} className="pulse-animation" />
      </div>
    </>
  ),

  'wm-lunch-break': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="350" width="900" height="70" fill="#8D6E63" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <Log size={180} wedgeIn={true} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', right: '10%', zIndex: 4, opacity: 0.5 }}>
        <Villagers count={4} className="float-animation" />
      </div>
    </>
  ),

  'wm-monkeys-nearby': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Birds count={2} />
        <Leaves count={5} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', right: '10%' }}>
        <RoseAppleTree size={240} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '45%', right: '15%', zIndex: 4 }}>
        <Monkey size={80} mood="happy" className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '50%', right: '25%', zIndex: 4 }}>
        <Monkey size={70} mood="happy" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '42%', right: '5%', zIndex: 4 }}>
        <Monkey size={75} mood="happy" className="float-animation" />
      </div>
    </>
  ),

  'wm-curious-monkey': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Leaves count={3} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="350" width="900" height="70" fill="#8D6E63" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '30%', zIndex: 3 }}>
        <Log size={180} wedgeIn={true} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', right: '20%', zIndex: 4 }}>
        <Monkey size={130} mood="excited" className="bounce-animation anim-hop" />
      </div>
    </>
  ),

  'wm-examines-log': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <ThinkingBubbles x={500} y={100} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="350" width="900" height="70" fill="#8D6E63" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '35%', zIndex: 3 }}>
        <Log size={200} wedgeIn={true} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', right: '25%', zIndex: 4 }}>
        <Monkey size={120} mood="thinking" className="anim-thinking-bob" />
      </div>
    </>
  ),

  'wm-plays-tools': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={4} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="350" width="900" height="70" fill="#8D6E63" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '25%', zIndex: 3 }}>
        <Log size={180} wedgeIn={true} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '24%', left: '55%', zIndex: 4 }}>
        <Monkey size={120} mood="excited" className="bounce-animation" />
      </div>
    </>
  ),

  'wm-sits-on-log': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="350" width="900" height="70" fill="#8D6E63" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <Log size={220} wedgeIn={true} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '32%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Monkey size={110} mood="happy" className="anim-hop" />
      </div>
    </>
  ),

  'wm-pulls-wedge': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="350" width="900" height="70" fill="#8D6E63" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <Log size={220} wedgeIn={true} className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Monkey size={120} mood="excited" className="shake-animation" />
      </div>
    </>
  ),

  'wm-wedge-out': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SpeedLines direction="left" />
        <DarkVignette />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="350" width="900" height="70" fill="#8D6E63" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <Log size={220} wedgeIn={false} className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Monkey size={120} mood="terrified" className="anim-scared-shiver" />
      </div>
      <div className="impact-text large">CRACK!</div>
    </>
  ),

  'wm-log-snaps': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SpeedLines direction="right" />
        <DarkVignette />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="350" width="900" height="70" fill="#8D6E63" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <Log size={240} wedgeIn={false} className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Monkey size={130} mood="terrified" className="shake-animation" />
      </div>
      <div className="impact-text large">SNAP!</div>
    </>
  ),

  'wm-screams': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
        <FireGlow />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="350" width="900" height="70" fill="#8D6E63" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <Log size={220} wedgeIn={false} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '26%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Monkey size={130} mood="terrified" className="shake-animation" />
      </div>
      <div className="impact-text large">AAAH!</div>
    </>
  ),

  'wm-tries-escape': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SpeedLines direction="up" />
        <DarkVignette />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="350" width="900" height="70" fill="#8D6E63" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <Log size={220} wedgeIn={false} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '26%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Monkey size={120} mood="terrified" className="shake-animation run-animation" />
      </div>
    </>
  ),

  'wm-cant-free': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
        <Rain />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="350" width="900" height="70" fill="#8D6E63" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <Log size={220} wedgeIn={false} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '26%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Monkey size={120} mood="sad" className="shake-animation" />
      </div>
    </>
  ),

  'wm-others-watch': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="350" width="900" height="70" fill="#8D6E63" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '40%', zIndex: 3 }}>
        <Log size={180} wedgeIn={false} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '26%', left: '42%', zIndex: 4 }}>
        <Monkey size={100} mood="sad" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '40%', right: '10%', zIndex: 4 }}>
        <Monkey size={70} mood="scared" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '45%', right: '22%', zIndex: 4 }}>
        <Monkey size={65} mood="scared" />
      </div>
    </>
  ),

  'wm-workers-hear': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="350" width="900" height="70" fill="#8D6E63" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Villagers count={4} className="pulse-animation" />
      </div>
      <div className="impact-text">?!</div>
    </>
  ),

  'wm-workers-return': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SpeedLines direction="right" />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="350" width="900" height="70" fill="#8D6E63" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '20%', zIndex: 3 }}>
        <Log size={180} wedgeIn={false} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '26%', right: '25%', zIndex: 4 }}>
        <Monkey size={100} mood="sad" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '10%', zIndex: 5 }}>
        <Villagers count={5} className="run-animation" />
      </div>
    </>
  ),

  'wm-chase-away': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SpeedLines direction="right" />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="350" width="900" height="70" fill="#8D6E63" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '20%', zIndex: 4 }}>
        <Villagers count={4} className="run-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', right: '10%', zIndex: 5 }}>
        <Monkey size={110} mood="terrified" className="run-animation" />
      </div>
    </>
  ),

  'wm-runs-sore': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SpeedLines direction="right" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', right: '15%' }}>
        <RoseAppleTree size={200} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '30%', zIndex: 4 }}>
        <Monkey size={120} mood="sad" className="shake-animation run-animation" />
      </div>
    </>
  ),

  'wm-monkeys-laugh': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Leaves count={4} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)' }}>
        <RoseAppleTree size={260} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Monkey size={110} mood="sad" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '48%', left: '20%', zIndex: 5 }}>
        <Monkey size={70} mood="happy" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '50%', right: '18%', zIndex: 5 }}>
        <Monkey size={65} mood="happy" className="bounce-animation" />
      </div>
    </>
  ),

  'wm-lesson-learned': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <Sparkle count={4} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Monkey size={150} mood="wise" className="float-animation" />
      </div>
    </>
  ),

  'wm-wisdom-shared': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <Birds count={3} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', right: '10%' }}>
        <RoseAppleTree size={220} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '30%', zIndex: 4 }}>
        <Monkey size={120} mood="wise" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', right: '30%', zIndex: 4 }}>
        <Monkey size={90} mood="happy" className="anim-hop" />
      </div>
    </>
  ),

  'wm-deeper-wisdom': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <Sparkle count={6} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="360" width="900" height="60" fill="#8D6E63" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '35%', zIndex: 3 }}>
        <Log size={160} wedgeIn={true} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '20%', zIndex: 4 }}>
        <Monkey size={120} mood="wise" className="pulse-animation" />
      </div>
    </>
  ),

  'wm-final-thought': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <Birds count={4} />
        <Sparkle count={5} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)' }}>
        <RoseAppleTree size={240} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '45%', left: '47%', zIndex: 4 }}>
        <Monkey size={110} mood="content" className="float-animation" />
      </div>
    </>
  ),

  'wm-moral-scene': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <Sparkle count={8} />
        <Birds count={3} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="360" width="900" height="60" fill="#8D6E63" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '30%', zIndex: 3 }}>
        <Log size={150} wedgeIn={true} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '25%', zIndex: 4 }}>
        <Monkey size={130} mood="wise" className="float-animation" />
      </div>
    </>
  ),

};

export default scenes;
