import React from 'react';
import { Birds, SpeedLines, Sparkle, Confetti, FireGlow, SunsetGlow, DustMotes } from '../Characters';
import { VillageSilhouette, Villagers, Pot, House, Krishna, Yashoda, ButterPot, ChurningRod, FruitSeller } from '../CharactersNew';

const scenes = {
  'kf-vrindavan-morning': () => (
    <>
      <VillageSilhouette />
      <SunsetGlow intensity={0.5} />
      <Birds count={4} />
      <Sparkle count={5} />
    </>
  ),

  'kf-fruit-seller-home': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <FruitSeller size={140} mood="kind" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '10%', zIndex: 2 }}>
        <House size={100} />
      </div>
      <SunsetGlow intensity={0.3} />
    </>
  ),

  'kf-picking-fruits': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <FruitSeller size={140} mood="kind" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '15%', zIndex: 3 }}>
        <svg width="80" height="120" viewBox="0 0 80 120">
          <rect x="35" y="50" width="10" height="70" fill="#5D4037" />
          <circle cx="40" cy="35" r="30" fill="#4CAF50" />
          <circle cx="30" cy="30" r="5" fill="#FF9800" />
          <circle cx="50" cy="25" r="5" fill="#F44336" />
          <circle cx="42" cy="40" r="4" fill="#FFEB3B" />
        </svg>
      </div>
      <Birds count={3} />
    </>
  ),

  'kf-walking-to-village': () => (
    <>
      <VillageSilhouette />
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <FruitSeller size={130} mood="kind" className="anim-breathe" />
      </div>
      <DustMotes count={10} />
      <SunsetGlow intensity={0.3} />
    </>
  ),

  'kf-baby-krishna-hears': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '30%', zIndex: 5 }}>
        <Krishna size={100} mood="playful" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', right: '25%', zIndex: 4 }}>
        <Yashoda size={130} mood="happy" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '15%', zIndex: 3 }}>
        <ButterPot size={60} />
      </div>
      <Sparkle count={5} />
    </>
  ),

  'kf-yashoda-busy': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Yashoda size={140} mood="happy" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '15%', zIndex: 4 }}>
        <ChurningRod size={60} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '15%', zIndex: 4 }}>
        <Krishna size={90} mood="happy" className="bounce-animation" />
      </div>
    </>
  ),

  'kf-krishna-grabs-grain': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Krishna size={110} mood="playful" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '25%', zIndex: 3 }}>
        <Pot size={70} />
      </div>
      <Sparkle count={5} />
    </>
  ),

  'kf-krishna-runs-out': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '40%', zIndex: 5 }}>
        <Krishna size={110} mood="playful" className="bounce-animation" />
      </div>
      <SpeedLines direction="right" />
      <DustMotes count={8} />
    </>
  ),

  'kf-meets-sundari': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '25%', zIndex: 5 }}>
        <Krishna size={100} mood="happy" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', right: '25%', zIndex: 5 }}>
        <FruitSeller size={140} mood="kind" className="anim-breathe" />
      </div>
      <Sparkle count={5} />
      <SunsetGlow intensity={0.2} />
    </>
  ),

  'kf-krishna-offers-grain': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '35%', zIndex: 5 }}>
        <Krishna size={110} mood="happy" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', right: '25%', zIndex: 5 }}>
        <FruitSeller size={130} mood="laughing" className="anim-breathe" />
      </div>
      <Sparkle count={3} />
    </>
  ),

  'kf-sundari-laughs': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <FruitSeller size={150} mood="laughing" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '15%', zIndex: 4 }}>
        <Krishna size={100} mood="happy" className="bounce-animation" />
      </div>
      <Sparkle count={5} />
    </>
  ),

  'kf-sundari-gives-fruits': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', right: '30%', zIndex: 5 }}>
        <FruitSeller size={140} mood="kind" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '25%', zIndex: 5 }}>
        <Krishna size={110} mood="happy" className="bounce-animation" />
      </div>
      <Sparkle count={8} />
      <SunsetGlow intensity={0.3} />
    </>
  ),

  'kf-krishna-hugs-fruits': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Krishna size={130} mood="happy" className="bounce-animation" />
      </div>
      <Sparkle count={10} />
      <FireGlow color="#FFD600" intensity={0.3} />
      <SunsetGlow intensity={0.3} />
    </>
  ),

  'kf-krishna-runs-home': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '35%', zIndex: 5 }}>
        <Krishna size={110} mood="happy" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', right: '20%', zIndex: 4 }}>
        <FruitSeller size={120} mood="kind" className="anim-breathe" />
      </div>
      <SpeedLines direction="left" />
      <Sparkle count={5} />
    </>
  ),

  'kf-sundari-lifts-basket': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <FruitSeller size={140} mood="surprised" className="anim-breathe" />
      </div>
      <Sparkle count={5} />
    </>
  ),

  'kf-basket-transforms': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <FruitSeller size={150} mood="overwhelmed" className="shake-animation" />
      </div>
      <Sparkle count={20} />
      <FireGlow color="#FFD600" intensity={0.6} />
      <Confetti />
    </>
  ),

  'kf-jewels-overflow': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <FruitSeller size={140} mood="overwhelmed" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <svg width="200" height="40" viewBox="0 0 200 40">
          {['#F44336', '#4CAF50', '#2196F3', '#FFD600', '#E91E63', '#FF9800'].map((c, i) => (
            <circle key={i} cx={20 + i * 32} cy={20} r={8} fill={c} opacity="0.8" />
          ))}
        </svg>
      </div>
      <Sparkle count={20} />
      <FireGlow color="#FFD600" intensity={0.7} />
      <Confetti />
    </>
  ),

  'kf-sundari-cries-joy': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <FruitSeller size={140} mood="crying" className="anim-breathe" />
      </div>
      <Sparkle count={15} />
      <FireGlow color="#FFD600" intensity={0.4} />
      <SunsetGlow intensity={0.4} />
    </>
  ),

  'kf-sundari-shares': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <FruitSeller size={130} mood="kind" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '10%', zIndex: 4 }}>
        <Villagers count={4} />
      </div>
      <Sparkle count={10} />
      <Confetti />
      <SunsetGlow intensity={0.4} />
    </>
  ),

  'kf-moral-ending': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <FruitSeller size={130} mood="kind" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '10%', right: '20%', zIndex: 3, opacity: 0.6 }}>
        <Krishna size={80} mood="calm" className="float-animation" />
      </div>
      <SunsetGlow intensity={0.6} />
      <Sparkle count={12} />
      <Birds count={4} />
    </>
  ),

};

export default scenes;
