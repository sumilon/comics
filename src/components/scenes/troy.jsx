import React from 'react';
import { Birds, Rain, Sparkle, Confetti, ThinkingBubbles, LightbulbIcon, DarkVignette, FireGlow, SunsetGlow, Fireflies } from '../Characters';
import { Moon, Stars2, Odysseus, WoodenHorse, Athena, Penelope, Telemachus, GreekShip, TrojanGuard, TrojanWall } from '../CharactersNew';

const scenes = {
  'tr-greece-intro': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Birds count={5} />
        <Sparkle count={4} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '0%', left: '0%', right: '0%', zIndex: 2 }}>
        <svg width="100%" height="100" viewBox="0 0 900 100" preserveAspectRatio="none">
          <path d="M0,60 Q100,30 200,50 Q350,70 450,40 Q550,20 700,50 Q800,65 900,45 L900,100 L0,100 Z" fill="#43A047" />
          <path d="M0,80 Q150,60 300,75 Q450,85 600,70 Q750,55 900,70 L900,100 L0,100 Z" fill="#2E7D32" />
        </svg>
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '0%', right: '0%', zIndex: 1 }}>
        <svg width="100%" height="80" viewBox="0 0 900 80" preserveAspectRatio="none">
          <rect x="100" y="20" width="60" height="60" fill="#E0E0E0" rx="2" />
          <path d="M95,20 L130,0 L165,20" fill="#BCAAA4" />
          <rect x="300" y="10" width="80" height="70" fill="#EEEEEE" rx="2" />
          <path d="M300,10 L340,-5 L380,10" fill="#D7CCC8" />
          <rect x="600" y="15" width="70" height="65" fill="#E0E0E0" rx="2" />
          <path d="M595,15 L635,0 L675,15" fill="#BCAAA4" />
        </svg>
      </div>
      <SunsetGlow intensity={0.15} />
    </>
  ),

  'tr-odysseus-intro': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Odysseus size={170} mood="happy" className="bounce-animation" />
      </div>
      <Sparkle count={5} />
      <SunsetGlow intensity={0.15} />
    </>
  ),

  'tr-troy-city': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '0%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <TrojanWall size={350} />
      </div>
      <SunsetGlow intensity={0.25} />
    </>
  ),

  'tr-war-begins': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '5%', left: '8%', zIndex: 3 }}>
        <GreekShip size={150} className="anim-sway" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '0%', right: '5%', zIndex: 4 }}>
        <TrojanWall size={250} />
      </div>
      <Birds count={3} />
    </>
  ),

  'tr-greeks-tired': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '30%', zIndex: 4 }}>
        <Odysseus size={150} mood="thinking" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', right: '10%', zIndex: 3 }}>
        <GreekShip size={130} className="anim-sway" />
      </div>
      <Rain density="light" />
    </>
  ),

  'tr-athena-appears': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', right: '25%', zIndex: 5 }}>
        <Athena size={160} mood="wise" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '20%', zIndex: 4 }}>
        <Odysseus size={130} mood="thinking" className="anim-breathe" />
      </div>
      <Sparkle count={8} />
      <SunsetGlow intensity={0.2} />
    </>
  ),

  'tr-odysseus-thinks': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Odysseus size={170} mood="thinking" className="anim-breathe" />
      </div>
      <ThinkingBubbles />
      <Sparkle count={4} />
    </>
  ),

  'tr-building-horse': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '20%', zIndex: 4 }}>
        <WoodenHorse size={150} className="anim-grow" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '15%', zIndex: 5 }}>
        <Odysseus size={130} mood="determined" className="anim-breathe" />
      </div>
      <Sparkle count={3} />
    </>
  ),

  'tr-horse-complete': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <WoodenHorse size={200} className="anim-entrance-pop" />
      </div>
      <Sparkle count={8} />
      <SunsetGlow intensity={0.2} />
    </>
  ),

  'tr-soldiers-hide': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '20%', zIndex: 4 }}>
        <WoodenHorse size={180} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '15%', zIndex: 5 }}>
        <Odysseus size={120} mood="determined" className="anim-breathe" />
      </div>
      <DarkVignette />
    </>
  ),

  'tr-greeks-sail-away': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '8%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <WoodenHorse size={150} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '8%', zIndex: 3 }}>
        <TrojanGuard size={90} mood="alert" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '20%', right: '10%', zIndex: 2, opacity: 0.5 }}>
        <GreekShip size={100} className="anim-drift" />
      </div>
      <Birds count={4} />
    </>
  ),

  'tr-trojans-debate': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '8%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <WoodenHorse size={160} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '10%', zIndex: 5 }}>
        <TrojanGuard size={95} mood="alert" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '10%', zIndex: 5 }}>
        <TrojanGuard size={90} mood="alert" />
      </div>
    </>
  ),

  'tr-horse-enters': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '8%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <WoodenHorse size={160} className="anim-entrance-pop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '0%', left: '50%', transform: 'translateX(-50%)', zIndex: 3, maxWidth: '100%', overflow: 'hidden' }}>
        <TrojanWall size={320} />
      </div>
      <Sparkle count={5} />
    </>
  ),

  'tr-trojans-celebrate': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '25%', zIndex: 4 }}>
        <TrojanGuard size={100} mood="alert" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '25%', zIndex: 4 }}>
        <TrojanGuard size={95} mood="alert" className="bounce-animation" />
      </div>
      <Confetti />
      <Sparkle count={6} />
      <SunsetGlow intensity={0.2} />
    </>
  ),

  'tr-night-falls': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Stars2 count={12} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', top: '8%', right: '15%', zIndex: 3 }}>
        <Moon size={70} />
      </div>
      <DarkVignette />
      <Fireflies count={10} />
    </>
  ),

  'tr-door-opens': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '20%', zIndex: 4 }}>
        <WoodenHorse size={180} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '20%', zIndex: 5 }}>
        <Odysseus size={130} mood="determined" className="anim-entrance-pop" />
      </div>
      <DarkVignette />
      <Sparkle count={3} />
      <Fireflies count={8} />
    </>
  ),

  'tr-open-gates': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Odysseus size={140} mood="heroic" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '0%', left: '50%', transform: 'translateX(-50%)', zIndex: 3, maxWidth: '100%', overflow: 'hidden' }}>
        <TrojanWall size={320} />
      </div>
      <FireGlow />
      <Sparkle count={4} />
    </>
  ),

  'tr-greeks-enter': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '25%', zIndex: 5 }}>
        <Odysseus size={140} mood="heroic" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', right: '15%', zIndex: 3 }}>
        <GreekShip size={130} className="anim-sway" />
      </div>
      <FireGlow />
      <SunsetGlow intensity={0.2} />
    </>
  ),

  'tr-odysseus-victory': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Odysseus size={180} mood="heroic" className="anim-entrance-pop" />
      </div>
      <Confetti />
      <Sparkle count={10} />
      <SunsetGlow intensity={0.3} />
    </>
  ),

  'tr-journey-home': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <GreekShip size={180} className="anim-sway" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Odysseus size={90} mood="brave" className="anim-breathe" />
      </div>
      <Rain density="medium" />
    </>
  ),

  'tr-sea-monsters': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '30%', zIndex: 5 }}>
        <Odysseus size={140} mood="brave" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '0%', left: '0%', right: '0%', zIndex: 2 }}>
        <svg width="100%" height="80" viewBox="0 0 400 80" preserveAspectRatio="none">
          <path d="M0,30 Q50,10 100,30 Q150,50 200,30 Q250,10 300,30 Q350,50 400,30 L400,80 L0,80 Z" fill="#0D47A1" opacity="0.7">
            <animate attributeName="d" values="M0,30 Q50,10 100,30 Q150,50 200,30 Q250,10 300,30 Q350,50 400,30 L400,80 L0,80 Z;M0,35 Q50,15 100,35 Q150,55 200,35 Q250,15 300,35 Q350,55 400,35 L400,80 L0,80 Z;M0,30 Q50,10 100,30 Q150,50 200,30 Q250,10 300,30 Q350,50 400,30 L400,80 L0,80 Z" dur="3s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>
      <DarkVignette />
    </>
  ),

  'tr-penelope-waits': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '30%', zIndex: 4 }}>
        <Penelope size={150} mood="hopeful" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '25%', zIndex: 4 }}>
        <Telemachus size={100} mood="happy" className="anim-breathe" />
      </div>
      <SunsetGlow intensity={0.3} />
      <Sparkle count={4} />
    </>
  ),

  'tr-athena-helps': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', top: '8%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Athena size={130} mood="wise" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <GreekShip size={160} className="anim-sway" />
      </div>
      <Sparkle count={8} />
      <SunsetGlow intensity={0.2} />
    </>
  ),

  'tr-homecoming': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <GreekShip size={170} className="anim-sway" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Odysseus size={100} mood="happy" className="bounce-animation" />
      </div>
      <Birds count={5} />
      <Sparkle count={6} />
      <SunsetGlow intensity={0.2} />
    </>
  ),

  'tr-family-reunion': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '15%', zIndex: 4 }}>
        <Odysseus size={140} mood="happy" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Penelope size={125} mood="happy" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '18%', zIndex: 4 }}>
        <Telemachus size={95} mood="happy" className="bounce-animation" />
      </div>
      <Confetti />
      <Sparkle count={10} />
      <SunsetGlow intensity={0.25} />
    </>
  ),

  'tr-moral-scene': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Odysseus size={150} mood="heroic" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '15%', zIndex: 3 }}>
        <Penelope size={105} mood="happy" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '15%', zIndex: 3 }}>
        <Telemachus size={85} mood="happy" />
      </div>
      <LightbulbIcon />
      <Sparkle count={10} />
      <SunsetGlow intensity={0.35} />
    </>
  ),

};

export default scenes;
