import React from 'react';
import { Water, Ripples, Birds, Sparkle, Confetti, LightbulbIcon, DarkVignette, SunsetGlow, FloatingBubbles } from '../Characters';
import { Stork, Crab, FishBones, Fish } from '../CharactersNew';

const scenes = {
  'sc-lake-scene': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '25%', zIndex: 5 }}>
        <Fish size={60} color="#4a90d9" className="anim-drift" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '55%', zIndex: 5 }}>
        <Fish size={50} color="#5ba3ec" className="anim-drift" style={{ animationDelay: '1s' }} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '35%', right: '20%', zIndex: 5 }}>
        <Fish size={45} color="#6db8f0" className="anim-drift" style={{ animationDelay: '2s' }} />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water />
      </svg>
      <FloatingBubbles count={8} />
      <Birds count={4} />
    </>
  ),

  'sc-old-stork-intro': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '40%', zIndex: 6 }}>
        <Stork size={160} mood="weary" className="anim-breathe" />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water />
      </svg>
    </>
  ),

  'sc-cant-catch-fish': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '35%', zIndex: 6 }}>
        <Stork size={150} mood="weary" className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '55%', zIndex: 5 }}>
        <Fish size={55} color="#4a90d9" className="anim-drift" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '28%', right: '25%', zIndex: 5 }}>
        <Fish size={45} color="#5ba3ec" className="anim-drift" style={{ animationDelay: '0.5s' }} />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water />
        <Ripples />
      </svg>
    </>
  ),

  'sc-sad-hungry': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '42%', zIndex: 6 }}>
        <Stork size={140} mood="weary" className="anim-breathe" />
      </div>
      <DarkVignette intensity={0.7} />
    </>
  ),

  'sc-devious-idea': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '38%', zIndex: 6 }}>
        <Stork size={150} mood="scheming" className="anim-thinking-bob" />
      </div>
      <LightbulbIcon />
      <DarkVignette intensity={0.4} />
    </>
  ),

  'sc-tells-fish': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '20%', zIndex: 6 }}>
        <Stork size={150} mood="scheming" className="anim-sway" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '55%', zIndex: 5 }}>
        <Fish size={50} color="#4a90d9" className="anim-gentle-float" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '26%', left: '65%', zIndex: 5 }}>
        <Fish size={45} color="#5ba3ec" className="anim-gentle-float" style={{ animationDelay: '0.5s' }} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '18%', zIndex: 5 }}>
        <Fish size={55} color="#6db8f0" className="anim-gentle-float" style={{ animationDelay: '1s' }} />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water />
      </svg>
    </>
  ),

  'sc-fish-panic': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '15%', zIndex: 5 }}>
        <Fish size={50} color="#4a90d9" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '30%', zIndex: 5 }}>
        <Fish size={55} color="#5ba3ec" className="shake-animation" style={{ animationDelay: '0.2s' }} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '50%', zIndex: 5 }}>
        <Fish size={40} color="#6db8f0" className="shake-animation" style={{ animationDelay: '0.4s' }} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', right: '22%', zIndex: 5 }}>
        <Fish size={48} color="#4a90d9" className="shake-animation" style={{ animationDelay: '0.6s' }} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '32%', right: '10%', zIndex: 5 }}>
        <Fish size={42} color="#5ba3ec" className="shake-animation" style={{ animationDelay: '0.8s' }} />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water />
        <Ripples />
      </svg>
    </>
  ),

  'sc-stork-offers': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '25%', zIndex: 6 }}>
        <Stork size={150} mood="scheming" className="anim-sway" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', right: '25%', zIndex: 5 }}>
        <Fish size={50} color="#4a90d9" className="anim-scared-shiver" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '26%', right: '35%', zIndex: 5 }}>
        <Fish size={45} color="#5ba3ec" className="anim-scared-shiver" style={{ animationDelay: '0.3s' }} />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water />
      </svg>
    </>
  ),

  'sc-fish-agree': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '30%', zIndex: 6 }}>
        <Stork size={150} mood="scheming" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '55%', zIndex: 5 }}>
        <Fish size={40} color="#4a90d9" className="anim-gentle-float" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', right: '20%', zIndex: 4 }}>
        <Fish size={45} color="#5ba3ec" className="anim-gentle-float" style={{ animationDelay: '0.5s' }} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '28%', right: '30%', zIndex: 4 }}>
        <Fish size={42} color="#6db8f0" className="anim-gentle-float" style={{ animationDelay: '1s' }} />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water />
      </svg>
    </>
  ),

  'sc-carries-fish': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', top: '20%', left: '35%', zIndex: 6 }}>
        <Stork size={150} mood="greedy" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '35%', left: '42%', zIndex: 7 }}>
        <Fish size={35} color="#4a90d9" className="anim-wiggle" />
      </div>
      <Birds count={2} />
    </>
  ),

  'sc-eats-fish': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '38%', zIndex: 6 }}>
        <Stork size={150} mood="villainous" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '30%', width: '120px', height: '20px', background: 'linear-gradient(to right, #6b7280, #9ca3af, #6b7280)', borderRadius: '50%', zIndex: 3 }} />
      <DarkVignette intensity={0.6} />
    </>
  ),

  'sc-pile-of-bones': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '30%', zIndex: 5 }}>
        <FishBones size={50} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '42%', zIndex: 5 }}>
        <FishBones size={45} className="anim-sway" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '52%', zIndex: 5 }}>
        <FishBones size={40} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', right: '20%', zIndex: 6 }}>
        <Stork size={140} mood="villainous" className="anim-breathe" />
      </div>
      <DarkVignette intensity={0.65} />
    </>
  ),

  'sc-crab-wants-to-go': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '16%', left: '30%', zIndex: 7 }}>
        <Crab size={100} mood="calm" className="anim-thinking-bob" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', right: '25%', zIndex: 5, opacity: 0.8 }}>
        <Stork size={120} mood="scheming" className="anim-breathe" />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water />
      </svg>
    </>
  ),

  'sc-stork-agrees': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '35%', zIndex: 6 }}>
        <Stork size={150} mood="greedy" className="anim-sway" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '16%', right: '30%', zIndex: 5 }}>
        <Crab size={80} mood="calm" className="anim-breathe" />
      </div>
      <DarkVignette intensity={0.35} />
    </>
  ),

  'sc-crab-rides': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', top: '22%', left: '32%', zIndex: 6 }}>
        <Stork size={150} mood="greedy" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '18%', left: '40%', zIndex: 7 }}>
        <Crab size={60} mood="calm" className="float-animation" />
      </div>
      <Birds count={3} />
    </>
  ),

  'sc-sees-bones': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', top: '15%', left: '35%', zIndex: 6 }}>
        <Stork size={130} mood="greedy" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '12%', left: '42%', zIndex: 7 }}>
        <Crab size={55} mood="fierce" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '28%', zIndex: 4 }}>
        <FishBones size={40} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '40%', zIndex: 4 }}>
        <FishBones size={35} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '16%', left: '50%', zIndex: 4 }}>
        <FishBones size={38} />
      </div>
      <DarkVignette intensity={0.7} />
    </>
  ),

  'sc-crab-realizes': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '32%', zIndex: 7 }}>
        <Crab size={140} mood="fierce" className="anim-breathe" />
      </div>
      <DarkVignette intensity={0.6} />
    </>
  ),

  'sc-crab-clamps': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '30%', zIndex: 6 }}>
        <Stork size={150} mood="begging" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '45%', left: '38%', zIndex: 8 }}>
        <Crab size={70} mood="determined" className="pulse-animation" />
      </div>
      <DarkVignette intensity={0.5} />
    </>
  ),

  'sc-stork-struggles': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '28%', zIndex: 6 }}>
        <Stork size={160} mood="begging" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '48%', left: '36%', zIndex: 8 }}>
        <Crab size={65} mood="determined" className="anim-wiggle" />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Ripples />
      </svg>
    </>
  ),

  'sc-stork-defeated': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '25%', zIndex: 5, transform: 'rotate(15deg)' }}>
        <Stork size={140} mood="begging" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', right: '30%', zIndex: 7 }}>
        <Crab size={100} mood="triumphant" className="anim-celebrate" />
      </div>
    </>
  ),

  'sc-crab-returns': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '16%', left: '40%', zIndex: 7 }}>
        <Crab size={90} mood="triumphant" className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', right: '20%', zIndex: 5 }}>
        <Fish size={45} color="#4a90d9" className="anim-gentle-float" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '26%', right: '30%', zIndex: 5 }}>
        <Fish size={40} color="#5ba3ec" className="anim-gentle-float" style={{ animationDelay: '0.5s' }} />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water />
      </svg>
    </>
  ),

  'sc-tells-truth': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '38%', zIndex: 7 }}>
        <Crab size={100} mood="calm" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '18%', zIndex: 5 }}>
        <Fish size={45} color="#4a90d9" className="anim-gentle-float" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', right: '22%', zIndex: 5 }}>
        <Fish size={50} color="#5ba3ec" className="anim-gentle-float" style={{ animationDelay: '0.4s' }} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '12%', zIndex: 5 }}>
        <Fish size={40} color="#6db8f0" className="anim-gentle-float" style={{ animationDelay: '0.8s' }} />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water />
      </svg>
    </>
  ),

  'sc-fish-grateful': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '38%', zIndex: 7 }}>
        <Crab size={90} mood="calm" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '15%', zIndex: 5 }}>
        <Fish size={45} color="#4a90d9" className="anim-excited-bounce" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '55%', zIndex: 5 }}>
        <Fish size={50} color="#5ba3ec" className="anim-excited-bounce" style={{ animationDelay: '0.3s' }} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '24%', right: '15%', zIndex: 5 }}>
        <Fish size={42} color="#6db8f0" className="anim-excited-bounce" style={{ animationDelay: '0.6s' }} />
      </div>
      <Sparkle count={10} />
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water />
      </svg>
    </>
  ),

  'sc-lesson-deception': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '16%', left: '30%', zIndex: 7 }}>
        <Crab size={90} mood="calm" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', right: '25%', zIndex: 5 }}>
        <Fish size={50} color="#4a90d9" className="anim-gentle-float" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '26%', right: '38%', zIndex: 5 }}>
        <Fish size={45} color="#5ba3ec" className="anim-gentle-float" style={{ animationDelay: '0.5s' }} />
      </div>
      <SunsetGlow intensity={0.5} />
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water />
      </svg>
    </>
  ),

  'sc-wisdom': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '16%', left: '35%', zIndex: 7 }}>
        <Crab size={85} mood="calm" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '55%', zIndex: 5 }}>
        <Fish size={45} color="#4a90d9" className="anim-gentle-float" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', right: '20%', zIndex: 5 }}>
        <Fish size={40} color="#5ba3ec" className="anim-gentle-float" style={{ animationDelay: '0.7s' }} />
      </div>
      <SunsetGlow intensity={0.6} />
      <Sparkle count={8} />
      <Birds count={3} />
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water />
      </svg>
    </>
  ),

  'sc-moral-scene': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '40%', zIndex: 7 }}>
        <Crab size={110} mood="triumphant" className="anim-celebrate" />
      </div>
      <Sparkle count={12} />
      <SunsetGlow intensity={0.5} />
      <Confetti count={10} />
      <Birds count={4} />
    </>
  ),

};

export default scenes;
