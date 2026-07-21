import React from 'react';
import { Water, Birds, Leaves, Sparkle, Confetti, DarkVignette, SunsetGlow, Fireflies, FloatingBubbles } from '../Characters';
import { Tortoise, TwoHeadedBird, Fish } from '../CharactersNew';

const scenes = {
  'bh-lake-intro': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water />
      </svg>
      <FloatingBubbles count={6} />
      <Birds count={3} />
      <Sparkle count={4} />
      <Leaves count={5} />
      {/* Trees represented by leaves clusters */}
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '5%', zIndex: 2 }}>
        <Leaves count={4} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '5%', zIndex: 2 }}>
        <Leaves count={4} />
      </div>
    </>
  ),

  'bh-bird-intro': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <TwoHeadedBird size={150} mood="happy" className="anim-gentle-float" />
      </div>
    </>
  ),

  'bh-shared-body': () => (
    <>
      <Sparkle count={5} />
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <TwoHeadedBird size={160} mood="happy" className="anim-breathe" />
      </div>
    </>
  ),

  'bh-happy-days': () => (
    <>
      <Birds count={4} />
      <Sparkle count={8} />
      <div className="scene-element" style={{ position: 'absolute', bottom: '45%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <TwoHeadedBird size={140} mood="happy" className="float-animation" />
      </div>
    </>
  ),

  'bh-flying-together': () => (
    <>
      <Birds count={5} />
      <Leaves count={6} />
      <div className="scene-element" style={{ position: 'absolute', bottom: '55%', left: '40%', zIndex: 5 }}>
        <TwoHeadedBird size={150} mood="happy" className="float-animation" />
      </div>
    </>
  ),

  'bh-finds-fruit': () => (
    <>
      <Sparkle count={6} />
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <TwoHeadedBird size={150} mood="happy" className="anim-excited-bounce" />
      </div>
      {/* Golden fruit */}
      <div style={{ position: 'absolute', bottom: '22%', left: '48%', width: '30px', height: '30px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, #FFD700, #FFA000)', boxShadow: '0 0 15px rgba(255, 215, 0, 0.5)', zIndex: 6 }} />
    </>
  ),

  'bh-eats-happily': () => (
    <>
      <Sparkle count={8} />
      <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '45%', zIndex: 5 }}>
        <TwoHeadedBird size={150} mood="happy" className="anim-excited-bounce" />
      </div>
      {/* Golden fruit near mouth */}
      <div style={{ position: 'absolute', bottom: '38%', left: '52%', width: '30px', height: '30px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, #FFD700, #FFA000)', boxShadow: '0 0 15px rgba(255, 215, 0, 0.5)', zIndex: 6 }} />
    </>
  ),

  'bh-second-head-wants': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <TwoHeadedBird size={150} mood="sad" className="anim-thinking-bob" />
      </div>
      {/* Golden fruit nearby */}
      <div style={{ position: 'absolute', bottom: '25%', left: '70%', width: '30px', height: '30px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, #FFD700, #FFA000)', boxShadow: '0 0 15px rgba(255, 215, 0, 0.5)', zIndex: 6 }} />
    </>
  ),

  'bh-refuses': () => (
    <>
      <DarkVignette intensity={0.3} />
      <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <TwoHeadedBird size={155} mood="angry" className="anim-wobble" />
      </div>
    </>
  ),

  'bh-argument': () => (
    <>
      <DarkVignette intensity={0.4} />
      <div className="scene-element" style={{ position: 'absolute', bottom: '26%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <TwoHeadedBird size={160} mood="angry" className="shake-animation" />
      </div>
    </>
  ),

  'bh-escalation': () => (
    <>
      <DarkVignette intensity={0.5} />
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '45%', zIndex: 5 }}>
        <TwoHeadedBird size={160} mood="angry" className="anim-wobble" />
      </div>
    </>
  ),

  'bh-hurt-and-angry': () => (
    <>
      <DarkVignette intensity={0.55} />
      <div className="scene-element" style={{ position: 'absolute', bottom: '24%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <TwoHeadedBird size={150} mood="sad" className="anim-scared-shiver" />
      </div>
    </>
  ),

  'bh-plans-revenge': () => (
    <>
      <DarkVignette intensity={0.6} />
      <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <TwoHeadedBird size={150} mood="angry" className="anim-thinking-bob" />
      </div>
    </>
  ),

  'bh-finds-poison': () => (
    <>
      <DarkVignette intensity={0.6} />
      <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '42%', zIndex: 5 }}>
        <TwoHeadedBird size={150} mood="angry" className="anim-thinking-bob" />
      </div>
      {/* Poison berry */}
      <div className="pulse-animation" style={{ position: 'absolute', bottom: '22%', left: '62%', width: '24px', height: '24px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, #FF1744, #B71C1C)', boxShadow: '0 0 12px rgba(255, 23, 68, 0.5)', zIndex: 6 }} />
    </>
  ),

  'bh-warning': () => (
    <>
      <DarkVignette intensity={0.6} />
      <div className="scene-element" style={{ position: 'absolute', bottom: '26%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <TwoHeadedBird size={155} mood="angry" className="anim-scared-shiver" />
      </div>
      {/* Poison berry */}
      <div className="pulse-animation" style={{ position: 'absolute', bottom: '28%', left: '55%', width: '24px', height: '24px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, #FF1744, #B71C1C)', boxShadow: '0 0 12px rgba(255, 23, 68, 0.5)', zIndex: 6 }} />
    </>
  ),

  'bh-eats-poison': () => (
    <>
      <DarkVignette intensity={0.7} />
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <TwoHeadedBird size={150} mood="sad" className="shake-animation" />
      </div>
      {/* Poison berry near mouth */}
      <div className="pulse-animation" style={{ position: 'absolute', bottom: '35%', left: '52%', width: '24px', height: '24px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, #FF1744, #B71C1C)', boxShadow: '0 0 12px rgba(255, 23, 68, 0.5)', zIndex: 6 }} />
    </>
  ),

  'bh-poison-spreads': () => (
    <>
      <DarkVignette intensity={0.75} />
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <TwoHeadedBird size={150} mood="sick" className="shake-animation" />
      </div>
    </>
  ),

  'bh-both-sick': () => (
    <>
      <DarkVignette intensity={0.7} />
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <TwoHeadedBird size={145} mood="sick" className="anim-scared-shiver" />
      </div>
    </>
  ),

  'bh-collapse': () => (
    <>
      <DarkVignette intensity={0.7} />
      <Leaves count={3} />
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%) rotate(15deg)', zIndex: 5 }}>
        <TwoHeadedBird size={140} mood="sick" className="anim-breathe" />
      </div>
    </>
  ),

  'bh-realization': () => (
    <>
      <DarkVignette intensity={0.65} />
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%) rotate(10deg)', zIndex: 5 }}>
        <TwoHeadedBird size={140} mood="sad" className="anim-breathe" />
      </div>
    </>
  ),

  'bh-regret': () => (
    <>
      <DarkVignette intensity={0.5} />
      <Sparkle count={2} />
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <TwoHeadedBird size={140} mood="sad" className="anim-breathe" />
      </div>
    </>
  ),

  'bh-farewell': () => (
    <>
      <DarkVignette intensity={0.4} />
      <Sparkle count={3} />
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <TwoHeadedBird size={140} mood="sad" className="anim-gentle-float" />
      </div>
    </>
  ),

  'bh-lesson-unity': () => (
    <>
      <SunsetGlow intensity={0.4} />
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Tortoise size={130} mood="happy" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '8%', left: '25%', zIndex: 4 }}>
        <Fish size={50} color="#FF6B6B" mood="happy" className="anim-drift" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '6%', left: '65%', zIndex: 4 }}>
        <Fish size={45} color="#4FC3F7" mood="happy" className="anim-drift" />
      </div>
    </>
  ),

  'bh-unity-message': () => (
    <>
      <SunsetGlow intensity={0.5} />
      <Sparkle count={8} />
      <Birds count={4} />
    </>
  ),

  'bh-wisdom': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <Water />
      </svg>
      <Birds count={3} />
      <SunsetGlow intensity={0.4} />
      <Sparkle count={6} />
      <Fireflies count={8} />
    </>
  ),

  'bh-moral-scene': () => (
    <>
      <SunsetGlow intensity={0.5} />
      <Sparkle count={10} />
      <Confetti count={6} />
      <Birds count={4} />
      <div className="scene-element" style={{ position: 'absolute', bottom: '35%', left: '50%', transform: 'translateX(-50%)', zIndex: 5, opacity: 0.85 }}>
        <TwoHeadedBird size={140} mood="happy" className="anim-gentle-float" />
      </div>
    </>
  ),

};

export default scenes;
