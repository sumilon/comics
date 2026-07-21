import React from 'react';
import { Water, Ripples, Birds, Rain, SpeedLines, Sparkle, LightbulbIcon, DarkVignette, FireGlow, SunsetGlow } from '../Characters';
import { Tortoise, Goose, Stick, VillageSilhouette, Villagers } from '../CharactersNew';

const scenes = {
  'tg-lake-intro': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Birds count={3} />
        <Sparkle count={4} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={280} />
        <Ripples cx={300} cy={320} />
        <Ripples cx={600} cy={340} />
      </svg>
      {/* Lotus flowers */}
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '30%', zIndex: 3 }}>
        <svg width="60" height="50" viewBox="0 0 60 50">
          <ellipse cx="30" cy="40" rx="20" ry="5" fill="#2E7D32" opacity="0.6" />
          <path d="M30,35 Q25,20 15,15 Q25,22 30,10 Q35,22 45,15 Q35,20 30,35" fill="#F48FB1" />
          <circle cx="30" cy="25" r="4" fill="#FFD54F" />
        </svg>
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '25%', zIndex: 3 }}>
        <svg width="50" height="40" viewBox="0 0 60 50">
          <ellipse cx="30" cy="40" rx="20" ry="5" fill="#2E7D32" opacity="0.6" />
          <path d="M30,35 Q25,20 15,15 Q25,22 30,10 Q35,22 45,15 Q35,20 30,35" fill="#CE93D8" />
          <circle cx="30" cy="25" r="4" fill="#FFD54F" />
        </svg>
      </div>
    </>
  ),

  'tg-tortoise-intro': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={290} />
        <Ripples cx={450} cy={330} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Tortoise size={160} mood="chatty" className="bounce-animation" />
      </div>
    </>
  ),

  'tg-geese-arrive': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Birds count={2} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={300} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '40%', zIndex: 4 }}>
        <Tortoise size={130} mood="happy" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '15%', left: '15%', zIndex: 4 }}>
        <Goose size={110} side="right" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '20%', right: '15%', zIndex: 4 }}>
        <Goose size={100} side="left" className="float-animation" />
      </div>
    </>
  ),

  'tg-happy-days': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <Sparkle count={4} />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <Water y={300} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Tortoise size={130} mood="chatty" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '35%', left: '15%', zIndex: 4 }}>
        <Goose size={100} side="right" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '35%', right: '15%', zIndex: 4 }}>
        <Goose size={100} side="left" className="float-animation" />
      </div>
    </>
  ),

  'tg-drought-begins': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <FireGlow />
      </svg>
      {/* Cracked ground */}
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="320" width="900" height="100" fill="#8D6E63" />
        <path d="M100,320 L120,360 M200,320 L180,380 M350,320 L370,370 M500,320 L490,400 M650,320 L670,360 M800,320 L780,390" stroke="#5D4037" strokeWidth="2" fill="none" />
      </svg>
      {/* Small shrinking water puddle */}
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
        <ellipse cx="450" cy="340" rx="120" ry="20" fill="#4FC3F7" opacity="0.5">
          <animate attributeName="rx" values="120;100;120" dur="3s" repeatCount="indefinite" />
        </ellipse>
      </svg>
    </>
  ),

  'tg-lake-drying': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <FireGlow />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="340" width="900" height="80" fill="#8D6E63" />
        <path d="M100,340 L110,380 M250,340 L240,400 M400,340 L420,380 M600,340 L580,400 M750,340 L770,370" stroke="#5D4037" strokeWidth="2" fill="none" />
        <ellipse cx="450" cy="355" rx="80" ry="12" fill="#4FC3F7" opacity="0.3" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Tortoise size={150} mood="panicked" className="shake-animation" />
      </div>
    </>
  ),

  'tg-geese-worried': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="350" width="900" height="70" fill="#8D6E63" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '20%', zIndex: 4 }}>
        <Goose size={110} side="right" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '20%', zIndex: 4 }}>
        <Goose size={110} side="left" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '50%', transform: 'translateX(-50%)', zIndex: 3, opacity: 0.6 }}>
        <Tortoise size={100} mood="panicked" />
      </div>
    </>
  ),

  'tg-the-plan': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={4} />
        <LightbulbIcon x={450} y={50} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <Stick width={180} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '15%', zIndex: 4 }}>
        <Goose size={110} side="right" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', right: '15%', zIndex: 4 }}>
        <Goose size={110} side="left" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Tortoise size={120} mood="happy" />
      </div>
    </>
  ),

  'tg-the-warning': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '25%', zIndex: 4 }}>
        <Goose size={130} side="right" className="pulse-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '25%', zIndex: 4 }}>
        <Tortoise size={120} mood="happy" />
      </div>
      <div className="impact-text">!</div>
    </>
  ),

  'tg-tortoise-promises': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={3} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Tortoise size={150} mood="happy" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '10%', zIndex: 3 }}>
        <Goose size={90} side="right" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', right: '10%', zIndex: 3 }}>
        <Goose size={90} side="left" />
      </div>
    </>
  ),

  'tg-taking-off': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SpeedLines direction="up" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '40%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Stick width={200} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '42%', left: '18%', zIndex: 5 }}>
        <Goose size={100} side="right" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '42%', right: '18%', zIndex: 5 }}>
        <Goose size={100} side="left" className="bounce-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '35%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Tortoise size={90} mood="happy" />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="370" width="900" height="50" fill="#8D6E63" />
      </svg>
    </>
  ),

  'tg-flying-high': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={6} />
      </svg>
      {/* Clouds */}
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 1 }}>
        <ellipse cx="150" cy="300" rx="80" ry="25" fill="white" opacity="0.4" />
        <ellipse cx="700" cy="330" rx="100" ry="30" fill="white" opacity="0.3" />
        <ellipse cx="400" cy="380" rx="90" ry="20" fill="white" opacity="0.35" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Stick width={200} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '12%', left: '20%', zIndex: 5 }}>
        <Goose size={100} side="right" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '12%', right: '20%', zIndex: 5 }}>
        <Goose size={100} side="left" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Tortoise size={80} mood="happy" className="float-animation" />
      </div>
    </>
  ),

  'tg-over-fields': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Sparkle count={3} />
      </svg>
      {/* Fields below */}
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 1 }}>
        <rect x="0" y="320" width="900" height="100" fill="#66BB6A" />
        <rect x="0" y="340" width="300" height="80" fill="#43A047" />
        <rect x="350" y="340" width="250" height="80" fill="#81C784" />
        <rect x="650" y="340" width="250" height="80" fill="#388E3C" />
        {/* River */}
        <path d="M0,370 Q200,355 450,370 Q700,385 900,365" stroke="#29B6F6" strokeWidth="8" fill="none" opacity="0.6" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Stick width={180} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '8%', left: '22%', zIndex: 5 }}>
        <Goose size={90} side="right" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '8%', right: '22%', zIndex: 5 }}>
        <Goose size={90} side="left" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '17%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Tortoise size={70} mood="happy" />
      </div>
    </>
  ),

  'tg-over-village': () => (
    <>
      <VillageSilhouette />
      <div className="scene-element" style={{ position: 'absolute', top: '12%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Stick width={180} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '5%', left: '22%', zIndex: 5 }}>
        <Goose size={90} side="right" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '5%', right: '22%', zIndex: 5 }}>
        <Goose size={90} side="left" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '14%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Tortoise size={70} mood="happy" />
      </div>
    </>
  ),

  'tg-people-point': () => (
    <>
      <VillageSilhouette />
      <div className="scene-element" style={{ position: 'absolute', top: '8%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Stick width={150} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '2%', left: '25%', zIndex: 5 }}>
        <Goose size={80} side="right" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '2%', right: '25%', zIndex: 5 }}>
        <Goose size={80} side="left" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Tortoise size={60} mood="happy" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 6 }}>
        <Villagers count={5} className="bounce-animation" />
      </div>
    </>
  ),

  'tg-children-laugh': () => (
    <>
      <VillageSilhouette />
      <div className="scene-element" style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Stick width={140} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '0%', left: '28%', zIndex: 5 }}>
        <Goose size={70} side="right" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '0%', right: '28%', zIndex: 5 }}>
        <Goose size={70} side="left" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '7%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Tortoise size={55} mood="happy" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '50%', transform: 'translateX(-50%)', zIndex: 6 }}>
        <Villagers count={4} className="bounce-animation" />
      </div>
    </>
  ),

  'tg-tortoise-angry': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <FireGlow />
      </svg>
      {/* Clouds */}
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 1 }}>
        <ellipse cx="200" cy="350" rx="100" ry="25" fill="white" opacity="0.3" />
        <ellipse cx="650" cy="370" rx="90" ry="20" fill="white" opacity="0.25" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', top: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Stick width={180} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '18%', left: '20%', zIndex: 5 }}>
        <Goose size={90} side="right" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '18%', right: '20%', zIndex: 5 }}>
        <Goose size={90} side="left" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '27%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Tortoise size={80} mood="angry" className="shake-animation" />
      </div>
    </>
  ),

  'tg-geese-warn': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', top: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Stick width={180} className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '15%', left: '20%', zIndex: 5 }}>
        <Goose size={90} side="right" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '15%', right: '20%', zIndex: 5 }}>
        <Goose size={90} side="left" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '24%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Tortoise size={80} mood="angry" className="shake-animation" />
      </div>
    </>
  ),

  'tg-more-mocking': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <FireGlow />
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Tortoise size={70} mood="furious" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Villagers count={5} className="bounce-animation" />
      </div>
      <div className="impact-text">HA HA HA!</div>
    </>
  ),

  'tg-tortoise-snaps': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <FireGlow />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Tortoise size={120} mood="furious" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '25%', left: '15%', zIndex: 3, opacity: 0.5 }}>
        <Stick width={80} />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '25%', right: '15%', zIndex: 3, opacity: 0.5 }}>
        <Stick width={80} />
      </div>
      <div className="impact-text large">!!!</div>
    </>
  ),

  'tg-falling': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SpeedLines direction="down" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translateX(-50%) rotate(180deg)', zIndex: 5 }}>
        <Tortoise size={120} mood="falling" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '8%', left: '15%', zIndex: 4, opacity: 0.5 }}>
        <Goose size={70} side="right" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '8%', right: '15%', zIndex: 4, opacity: 0.5 }}>
        <Goose size={70} side="left" />
      </div>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="380" width="900" height="40" fill="#8D6E63" />
      </svg>
    </>
  ),

  'tg-crash': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="340" width="900" height="80" fill="#8D6E63" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%) rotate(180deg)', zIndex: 4 }}>
        <Tortoise size={110} mood="falling" />
      </div>
      <div className="impact-text large">CRASH!</div>
    </>
  ),

  'tg-geese-mourn': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Rain />
        <DarkVignette />
      </svg>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
        <rect x="0" y="350" width="900" height="70" fill="#607D8B" />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '25%', zIndex: 4 }}>
        <Goose size={110} side="right" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', right: '25%', zIndex: 4 }}>
        <Goose size={110} side="left" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '16%', left: '50%', transform: 'translateX(-50%)', zIndex: 3, opacity: 0.5 }}>
        <Tortoise size={80} mood="falling" />
      </div>
    </>
  ),

  'tg-lesson': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <Rain />
        <DarkVignette />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Villagers count={4} />
      </div>
    </>
  ),

  'tg-wisdom': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <Birds count={2} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Goose size={120} side="right" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '22%', right: '25%', zIndex: 4 }}>
        <Goose size={110} side="left" className="float-animation" />
      </div>
    </>
  ),

  'tg-moral-scene': () => (
    <>
      <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
        <SunsetGlow />
        <Sparkle count={8} />
        <Birds count={3} />
      </svg>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Tortoise size={120} mood="happy" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '15%', left: '15%', zIndex: 3 }}>
        <Goose size={80} side="right" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', top: '18%', right: '15%', zIndex: 3 }}>
        <Goose size={80} side="left" className="float-animation" />
      </div>
    </>
  ),

};

export default scenes;
