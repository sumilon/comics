import React from 'react';
import { Birds, Leaves, Rain, SpeedLines, Sparkle, DarkVignette, FireGlow, SunsetGlow } from '../Characters';
import { VillageSilhouette, Mongoose, Snake, Brahmin, BrahminWife, Baby, Cradle, WaterPot } from '../CharactersNew';

const scenes = {
  'lm-village-intro': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Birds count={3} />
        <Sparkle count={4} />
      </svg>
      <VillageSilhouette />
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '25%', zIndex: 4 }}>
        <Brahmin size={140} className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '25%', zIndex: 4 }}>
        <BrahminWife size={130} mood="happy" className="anim-sway" />
      </div>
    </>
  ),

  'lm-mongoose-arrives': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={5} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '35%', zIndex: 4 }}>
        <Brahmin size={150} mood="happy" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '55%', zIndex: 5 }}>
        <Mongoose size={70} mood="happy" className="anim-entrance-pop" />
      </div>
    </>
  ),

  'lm-wife-worried': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '30%', zIndex: 4 }}>
        <BrahminWife size={150} mood="worried" className="anim-sway" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '30%', zIndex: 5 }}>
        <Mongoose size={60} mood="happy" className="anim-hop" />
      </div>
    </>
  ),

  'lm-growing-together': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={6} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <Cradle size={120} className="anim-swing" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '48%', zIndex: 4 }}>
        <Baby size={50} className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '20%', zIndex: 5 }}>
        <Mongoose size={80} mood="happy" className="anim-hop" />
      </div>
      {/* Hearts */}
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 6 }}>
        {[0,1,2].map(i => (
          <text key={i} x={380 + i * 80} y={120 + i * 20} fontSize="24" fill="#E91E63" opacity={0.6}>
            <animate attributeName="y" values={`${120+i*20};${100+i*20};${120+i*20}`} dur={`${2+i*0.3}s`} repeatCount="indefinite" />
            ♥
          </text>
        ))}
      </svg>
    </>
  ),

  'lm-mongoose-plays': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={3} />
        <SunsetGlow />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '40%', zIndex: 3 }}>
        <Cradle size={110} className="anim-swing" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '55%', zIndex: 5 }}>
        <Mongoose size={75} mood="happy" className="anim-wiggle" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '15%', zIndex: 4 }}>
        <Brahmin size={130} mood="happy" className="anim-breathe" />
      </div>
    </>
  ),

  'lm-wife-leaves': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Leaves count={3} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <Cradle size={100} className="anim-swing" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '55%', zIndex: 5 }}>
        <Mongoose size={70} mood="alert" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '8%', zIndex: 4, opacity: 0.7 }}>
        <BrahminWife size={120} className="anim-drift" />
      </div>
    </>
  ),

  'lm-snake-approaches': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
        <FireGlow />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '25%', zIndex: 3 }}>
        <Cradle size={100} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '8%', left: '15%', zIndex: 4 }}>
        <Snake size={140} mood="menacing" className="anim-drift" />
      </div>
    </>
  ),

  'lm-mongoose-alert': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '20%', zIndex: 3 }}>
        <Cradle size={90} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '15%', zIndex: 4 }}>
        <Snake size={130} mood="menacing" className="anim-sway" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Mongoose size={90} mood="alert" className="pulse-animation" />
      </div>
      <div className="impact-text">!</div>
    </>
  ),

  'lm-battle-begins': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SpeedLines direction="left" />
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '25%', zIndex: 4 }}>
        <Mongoose size={100} mood="fierce" className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '25%', zIndex: 4 }}>
        <Snake size={140} mood="menacing" className="anim-sway" />
      </div>
    </>
  ),

  'lm-fierce-fight': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <FireGlow />
        <SpeedLines direction="right" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '35%', zIndex: 5 }}>
        <Mongoose size={110} mood="fierce" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '30%', zIndex: 4 }}>
        <Snake size={150} mood="menacing" className="shake-animation" />
      </div>
      <div className="impact-text large">!!!</div>
    </>
  ),

  'lm-mongoose-wins': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={5} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Mongoose size={120} mood="triumphant" className="anim-celebrate" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '8%', right: '20%', zIndex: 3, opacity: 0.5 }}>
        <Snake size={110} mood="defeated" />
      </div>
    </>
  ),

  'lm-mongoose-proud': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={3} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '35%', zIndex: 5 }}>
        <Mongoose size={110} mood="proud" className="anim-breathe" />
      </div>
      {/* Blood marks */}
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 6 }}>
        <circle cx="370" cy="290" r="4" fill="#C62828" opacity="0.8" />
        <circle cx="385" cy="300" r="3" fill="#C62828" opacity="0.7" />
        <circle cx="360" cy="310" r="3.5" fill="#C62828" opacity="0.6" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '20%', zIndex: 3 }}>
        <Cradle size={100} className="anim-swing" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', right: '22%', zIndex: 4 }}>
        <Baby size={45} className="anim-breathe" />
      </div>
    </>
  ),

  'lm-runs-to-mother': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SpeedLines direction="right" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '20%', zIndex: 4 }}>
        <Mongoose size={90} mood="happy" className="run-animation" />
      </div>
      {/* Door/entrance */}
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="750" y="180" width="100" height="200" fill="#5D4037" rx="5" />
        <rect x="760" y="190" width="80" height="160" fill="#3E2723" rx="3" />
        <circle cx="830" cy="270" r="5" fill="#FFD54F" />
      </svg>
    </>
  ),

  'lm-wife-returns': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Leaves count={3} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '20%', zIndex: 4 }}>
        <BrahminWife size={140} className="anim-drift" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '15%', zIndex: 5 }}>
        <WaterPot size={50} className="anim-wobble" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '30%', zIndex: 5 }}>
        <Mongoose size={80} mood="happy" className="anim-hop" />
      </div>
    </>
  ),

  'lm-wife-panics': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
        <FireGlow />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '30%', zIndex: 4 }}>
        <BrahminWife size={160} mood="horrified" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '30%', zIndex: 5 }}>
        <Mongoose size={85} mood="happy" className="anim-hop" />
      </div>
      {/* Blood marks on mongoose */}
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 6 }}>
        <circle cx="590" cy="320" r="3" fill="#C62828" opacity="0.8" />
        <circle cx="600" cy="330" r="2.5" fill="#C62828" opacity="0.7" />
      </svg>
      <div className="impact-text">!</div>
    </>
  ),

  'lm-wife-strikes': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SpeedLines direction="down" />
        <FireGlow />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '35%', zIndex: 4 }}>
        <BrahminWife size={150} mood="angry" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', zIndex: 5 }}>
        <WaterPot size={60} className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '30%', zIndex: 4 }}>
        <Mongoose size={80} mood="scared" className="anim-scared-shiver" />
      </div>
      <div className="impact-text large">CRASH!</div>
    </>
  ),

  'lm-mongoose-falls': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
        <Rain />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Mongoose size={100} mood="hurt" className="float-animation" style={{ transform: 'rotate(90deg)' }} />
      </div>
    </>
  ),

  'lm-rushes-inside': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
        <SpeedLines direction="right" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '25%', zIndex: 4 }}>
        <BrahminWife size={130} mood="panicked" className="run-animation" />
      </div>
    </>
  ),

  'lm-baby-safe': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={6} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <Cradle size={130} className="anim-swing" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '48%', zIndex: 4 }}>
        <Baby size={55} className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '8%', right: '15%', zIndex: 3, opacity: 0.5 }}>
        <Snake size={100} mood="defeated" />
      </div>
    </>
  ),

  'lm-truth-revealed': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '25%', zIndex: 4 }}>
        <BrahminWife size={140} mood="shocked" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '20%', zIndex: 3 }}>
        <Cradle size={100} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '8%', left: '50%', transform: 'translateX(-50%)', zIndex: 3, opacity: 0.6 }}>
        <Snake size={100} mood="defeated" />
      </div>
      <div className="impact-text">!!!</div>
    </>
  ),

  'lm-wife-rushes-back': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Rain />
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <BrahminWife size={140} mood="grieving" className="anim-sway" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '45%', zIndex: 5 }}>
        <Mongoose size={70} mood="hurt" className="float-animation" />
      </div>
    </>
  ),

  'lm-brahmin-returns': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Rain />
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '30%', zIndex: 4 }}>
        <Brahmin size={140} mood="grieving" className="anim-sway" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '30%', zIndex: 4 }}>
        <BrahminWife size={130} mood="grieving" className="anim-sway" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '8%', left: '50%', transform: 'translateX(-50%)', zIndex: 5, opacity: 0.6 }}>
        <Mongoose size={70} mood="hurt" />
      </div>
    </>
  ),

  'lm-regret': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Rain />
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <BrahminWife size={150} mood="grieving" className="anim-sway" />
      </div>
    </>
  ),

  'lm-lesson': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={8} />
      </svg>
      {/* Flower memorial */}
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        {[0,1,2,3,4].map(i => (
          <g key={i}>
            <circle cx={350 + i * 50} cy={300} r="12" fill={['#F48FB1','#CE93D8','#90CAF9','#FFD54F','#A5D6A7'][i]} opacity="0.8">
              <animate attributeName="cy" values="300;290;300" dur={`${2+i*0.2}s`} repeatCount="indefinite" />
            </circle>
            <circle cx={350 + i * 50} cy={300} r="4" fill="#FFF9C4" />
          </g>
        ))}
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '50%', transform: 'translateX(-50%)', zIndex: 4, opacity: 0.5 }}>
        <Mongoose size={90} mood="happy" className="anim-grow" />
      </div>
    </>
  ),

  'lm-wisdom': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <Sparkle count={4} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4, opacity: 0.4 }}>
        <Mongoose size={150} mood="happy" className="anim-breathe" />
      </div>
    </>
  ),

  'lm-moral-scene': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <Sparkle count={8} />
        <Birds count={4} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 4, opacity: 0.5 }}>
        <Mongoose size={120} mood="happy" className="anim-ripple-scale" />
      </div>
    </>
  ),

};

export default scenes;
