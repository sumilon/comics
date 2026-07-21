import React from 'react';
import { Birds, Leaves, SpeedLines, Sparkle, Confetti, ThinkingBubbles, LightbulbIcon, DarkVignette, FireGlow, SunsetGlow, DustMotes } from '../Characters';
import { Jackal, Lion, Cave } from '../CharactersNew';

const scenes = {
  'tc-forest-scene': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Birds count={4} />
        <Leaves count={6} />
        <Sparkle count={3} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 1 }}>
        <polygon points="100,380 130,200 160,380" fill="#2E7D32" />
        <polygon points="250,380 280,220 310,380" fill="#388E3C" />
        <polygon points="500,380 540,180 580,380" fill="#1B5E20" />
        <polygon points="700,380 730,230 760,380" fill="#2E7D32" />
        <rect x="125" y="340" width="10" height="40" fill="#5D4037" />
        <rect x="275" y="340" width="10" height="40" fill="#4E342E" />
        <rect x="535" y="340" width="10" height="40" fill="#5D4037" />
        <rect x="725" y="340" width="10" height="40" fill="#4E342E" />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="380" width="900" height="40" fill="#4E342E" />
      </svg>
    </>
  ),

  'tc-hungry-lion': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
        <FireGlow />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Lion size={200} mood="angry" className="anim-breathe" />
      </div>
    </>
  ),

  'tc-finds-cave': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
        <Cave size={320} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '15%', zIndex: 4 }}>
        <Lion size={160} mood="curious" className="anim-wobble" />
      </div>
      <DustMotes count={10} />
    </>
  ),

  'tc-waits-inside': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
        <Cave size={350} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 3, opacity: 0.4 }}>
        <Lion size={130} mood="angry" className="pulse-animation" />
      </div>
      <DustMotes count={8} />
    </>
  ),

  'tc-jackal-returning': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <Birds count={2} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '5%', left: '30%', zIndex: 2 }}>
        <Cave size={280} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '10%', zIndex: 4 }}>
        <Jackal size={130} mood="happy" className="anim-hop" />
      </div>
    </>
  ),

  'tc-notices-footprints': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '5%', left: '30%', zIndex: 2 }}>
        <Cave size={280} />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <g fill="#5D4037" opacity="0.7">
          <ellipse cx="520" cy="385" rx="8" ry="10" />
          <circle cx="512" cy="375" r="4" />
          <circle cx="520" cy="372" r="4" />
          <circle cx="528" cy="375" r="4" />
          <ellipse cx="580" cy="390" rx="8" ry="10" />
          <circle cx="572" cy="380" r="4" />
          <circle cx="580" cy="377" r="4" />
          <circle cx="588" cy="380" r="4" />
          <ellipse cx="640" cy="385" rx="8" ry="10" />
          <circle cx="632" cy="375" r="4" />
          <circle cx="640" cy="372" r="4" />
          <circle cx="648" cy="375" r="4" />
        </g>
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '12%', zIndex: 4 }}>
        <Jackal size={120} mood="curious" className="anim-sway" />
      </div>
    </>
  ),

  'tc-studies-tracks-in': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
        <ThinkingBubbles x={650} y={120} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <g fill="#5D4037" opacity="0.8">
          <ellipse cx="600" cy="388" rx="7" ry="9" />
          <circle cx="593" cy="379" r="3.5" />
          <circle cx="600" cy="376" r="3.5" />
          <circle cx="607" cy="379" r="3.5" />
          <ellipse cx="540" cy="385" rx="7" ry="9" />
          <circle cx="533" cy="376" r="3.5" />
          <circle cx="540" cy="373" r="3.5" />
          <circle cx="547" cy="376" r="3.5" />
          <ellipse cx="480" cy="382" rx="7" ry="9" />
          <circle cx="473" cy="373" r="3.5" />
          <circle cx="480" cy="370" r="3.5" />
          <circle cx="487" cy="373" r="3.5" />
        </g>
        <path d="M620,395 L440,395" stroke="#8D6E63" strokeWidth="2" strokeDasharray="8,4" markerEnd="url(#arrowIn)" />
        <defs>
          <marker id="arrowIn" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#8D6E63" />
          </marker>
        </defs>
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '5%', left: '25%', zIndex: 2 }}>
        <Cave size={260} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '10%', zIndex: 4 }}>
        <Jackal size={110} mood="curious" className="anim-wobble" />
      </div>
    </>
  ),

  'tc-no-tracks-out': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
        <LightbulbIcon x={680} y={80} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <g fill="#5D4037" opacity="0.8">
          <ellipse cx="550" cy="388" rx="7" ry="9" />
          <circle cx="543" cy="379" r="3.5" />
          <circle cx="550" cy="376" r="3.5" />
          <circle cx="557" cy="379" r="3.5" />
          <ellipse cx="490" cy="385" rx="7" ry="9" />
          <circle cx="483" cy="376" r="3.5" />
          <circle cx="490" cy="373" r="3.5" />
          <circle cx="497" cy="376" r="3.5" />
        </g>
        <g stroke="#F44336" strokeWidth="4" opacity="0.8">
          <line x1="400" y1="375" x2="430" y2="405" />
          <line x1="430" y1="375" x2="400" y2="405" />
        </g>
        <text x="415" y="370" fill="#F44336" fontSize="14" textAnchor="middle" fontWeight="bold">No tracks out!</text>
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '5%', left: '20%', zIndex: 2 }}>
        <Cave size={260} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '8%', zIndex: 4 }}>
        <Jackal size={120} mood="clever" className="anim-breathe" />
      </div>
    </>
  ),

  'tc-suspects-danger': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
        <FireGlow />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '5%', left: '30%', zIndex: 2 }}>
        <Cave size={300} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '10%', zIndex: 4 }}>
        <Jackal size={130} mood="alert" className="anim-wiggle" />
      </div>
      <div className="impact-text">!</div>
    </>
  ),

  'tc-thinks-plan': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <ThinkingBubbles x={600} y={100} />
        <LightbulbIcon x={650} y={60} />
        <Sparkle count={4} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '5%', left: '25%', zIndex: 2 }}>
        <Cave size={260} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '12%', zIndex: 4 }}>
        <Jackal size={130} mood="clever" className="anim-sway" />
      </div>
    </>
  ),

  'tc-calls-cave': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '5%', left: '30%', zIndex: 2 }}>
        <Cave size={300} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '8%', zIndex: 4 }}>
        <Jackal size={140} mood="clever" className="anim-entrance-pop" />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 5 }}>
        <g stroke="#FFD54F" strokeWidth="2" fill="none" opacity="0.7">
          <path d="M580,280 Q560,260 580,240">
            <animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.5s" repeatCount="indefinite" />
          </path>
          <path d="M560,290 Q530,260 560,230">
            <animate attributeName="opacity" values="0.5;0.1;0.5" dur="1.5s" repeatCount="indefinite" begin="0.3s" />
          </path>
          <path d="M540,300 Q500,260 540,220">
            <animate attributeName="opacity" values="0.3;0.05;0.3" dur="1.5s" repeatCount="indefinite" begin="0.6s" />
          </path>
        </g>
      </svg>
    </>
  ),

  'tc-pretends-routine': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
        <Sparkle count={2} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '5%', left: '30%', zIndex: 2 }}>
        <Cave size={300} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '10%', zIndex: 4 }}>
        <Jackal size={130} mood="clever" className="anim-swing" />
      </div>
    </>
  ),

  'tc-lion-panics': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
        <FireGlow />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '5%', left: '30%', zIndex: 2 }}>
        <Cave size={320} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '38%', zIndex: 3, opacity: 0.5 }}>
        <Lion size={150} mood="scared" className="shake-animation" />
      </div>
    </>
  ),

  'tc-lion-roars-back': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
        <SpeedLines />
      </svg>
      <div className="scene-element shake-animation" style={{ position: 'absolute', bottom: '5%', left: '30%', zIndex: 2 }}>
        <Cave size={320} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '38%', zIndex: 3, opacity: 0.6 }}>
        <Lion size={170} mood="angry" className="shake-animation" />
      </div>
      <div className="impact-text large">ROAR!</div>
    </>
  ),

  'tc-jackal-recognizes': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
        <LightbulbIcon x={650} y={70} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '5%', left: '30%', zIndex: 2 }}>
        <Cave size={300} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '8%', zIndex: 4 }}>
        <Jackal size={130} mood="clever" className="anim-ripple-scale" />
      </div>
    </>
  ),

  'tc-jackal-smiles': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={5} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '5%', left: '25%', zIndex: 2 }}>
        <Cave size={280} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '15%', zIndex: 4 }}>
        <Jackal size={150} mood="clever" className="anim-grow" />
      </div>
    </>
  ),

  'tc-jackal-backs-away': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '5%', left: '25%', zIndex: 2 }}>
        <Cave size={280} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '5%', zIndex: 4 }}>
        <Jackal size={120} mood="clever" className="anim-drift" />
      </div>
    </>
  ),

  'tc-runs-to-safety': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SpeedLines direction="right" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '5%', left: '10%', zIndex: 2, opacity: 0.4 }}>
        <Cave size={200} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '10%', zIndex: 4 }}>
        <Jackal size={130} mood="happy" className="run-animation" />
      </div>
    </>
  ),

  'tc-lion-comes-out': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '5%', left: '30%', zIndex: 2 }}>
        <Cave size={300} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '55%', zIndex: 4 }}>
        <Lion size={180} mood="angry" className="anim-entrance-pop" />
      </div>
    </>
  ),

  'tc-lion-sees-jackal-far': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '5%', left: '15%', zIndex: 2 }}>
        <Cave size={250} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '45%', zIndex: 4 }}>
        <Lion size={170} mood="angry" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '5%', zIndex: 3, opacity: 0.5 }}>
        <Jackal size={60} mood="happy" />
      </div>
    </>
  ),

  'tc-lion-frustrated': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
        <FireGlow />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Lion size={200} mood="angry" className="shake-animation" />
      </div>
    </>
  ),

  'tc-jackal-celebrates': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={8} />
        <Confetti />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Jackal size={160} mood="happy" className="bounce-animation" />
      </div>
    </>
  ),

  'tc-lesson-observation': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <Sparkle count={4} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <g fill="#5D4037" opacity="0.5">
          <ellipse cx="300" cy="390" rx="7" ry="9" />
          <circle cx="293" cy="381" r="3.5" />
          <circle cx="300" cy="378" r="3.5" />
          <circle cx="307" cy="381" r="3.5" />
          <ellipse cx="400" cy="388" rx="7" ry="9" />
          <circle cx="393" cy="379" r="3.5" />
          <circle cx="400" cy="376" r="3.5" />
          <circle cx="407" cy="379" r="3.5" />
          <ellipse cx="500" cy="390" rx="7" ry="9" />
          <circle cx="493" cy="381" r="3.5" />
          <circle cx="500" cy="378" r="3.5" />
          <circle cx="507" cy="381" r="3.5" />
        </g>
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Jackal size={140} mood="clever" className="anim-sway" />
      </div>
    </>
  ),

  'tc-wisdom': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <Sparkle count={6} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4, opacity: 0.7 }}>
        <Jackal size={150} mood="clever" className="float-animation" />
      </div>
    </>
  ),

  'tc-moral-teaching': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <Birds count={3} />
        <Sparkle count={5} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '25%', zIndex: 4 }}>
        <Jackal size={130} mood="clever" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '20%', zIndex: 3, opacity: 0.4 }}>
        <Lion size={120} mood="sad" />
      </div>
    </>
  ),

  'tc-moral-scene': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <Sparkle count={8} />
        <Birds count={4} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '5%', left: '35%', zIndex: 2, opacity: 0.3 }}>
        <Cave size={180} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '20%', zIndex: 4 }}>
        <Jackal size={120} mood="happy" className="anim-sway" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '20%', zIndex: 4, opacity: 0.5 }}>
        <Lion size={110} mood="sad" className="anim-breathe" />
      </div>
    </>
  ),

};

export default scenes;
