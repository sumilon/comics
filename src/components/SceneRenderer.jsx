import React from 'react';
import {
  Monkey, Crocodile, CrocodileWife, RoseAppleTree, FallingFruit,
  Water, Ripples, Splash, Birds, Leaves, Rain, SpeedLines,
  Sparkle, Confetti, ThinkingBubbles, LightbulbIcon,
  DarkVignette, FireGlow, SunsetGlow,
  Fireflies, DustMotes, FloatingBubbles
} from './Characters';
import {
  Tortoise, Goose, Jackal, Lion, Rabbit, Deer, Elephant, Fox,
  Well, Stick, VillageSilhouette, Villagers, DyeVat, Moon, Stars2,
  Mongoose, Snake, Brahmin, BrahminWife, Baby, Cradle, WaterPot,
  Donkey, Washerman, Farmer,
  Crow, CrowWife, Necklace, Guard,
  Pot, Goat, Cow, Mouse, MouseKing, Net, House,
  TwoHeadedBird, Stork, Crab, FishBones,
  Log, Drum,
  Cave, Fish, Fisherman,
  Krishna, Yashoda, ButterPot, Mortar, ChurningRod,
  Bheem, Chutki, Raju, Jaggu, Kalia, DholuBholu, MagicLadoo,
  Odysseus, WoodenHorse, Athena, Penelope, Telemachus, GreekShip, TrojanGuard, TrojanWall,
  Motu, Patlu, Samosa, ChingumInspector, SamosaShop,
  Hanuman, Surya, Indra, Vayu, Anjana, Ganesha, MoonGod,
  Prahlad, Holika, Hiranyakashipu, Narasimha,
  Shinchan, HomeworkMonster, Doraemon, Nobita,
  Hercules, Atlas, Icarus, Daedalus,
  KaliyaSerpent, FruitSeller, GovardhanHill, Nagapatni,
  OggyCharacter, CockroachTrio, BheemWarrior, Kirmada
} from './CharactersNew';

// Simple Lightning effect for storm scenes
const Lightning = () => (
  <div className="scene-element" style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)', zIndex: 10, opacity: 0.7 }}>
    <svg width="60" height="120" viewBox="0 0 60 120">
      <path d="M30 0 L20 45 L35 45 L15 120 L40 55 L25 55 L40 0 Z" fill="#FFD600" opacity="0.9" />
    </svg>
  </div>
);

const SceneRenderer = ({ frame }) => {
  const { scene, bg } = frame;

  // Generate CSS gradient from bg array
  const bgGradient = Array.isArray(bg)
    ? `linear-gradient(180deg, ${bg[0]} 0%, ${bg[1]} 33%, ${bg[2]} 66%, ${bg[3]} 100%)`
    : bg;

  const renderScene = () => {
    switch (scene) {
      case 'river-intro':
        return (
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
        );

      case 'monkey-intro':
        return (
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
        );

      case 'crocodile-arrives':
        return (
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
        );

      case 'monkey-shares':
        return (
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
        );

      case 'crocodile-eats':
        return (
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
        );

      case 'friendship-begins':
        return (
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
        );

      case 'fruits-for-wife':
        return (
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
        );

      case 'wife-eats':
        return (
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
        );

      case 'wife-demands':
        return (
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
        );

      case 'crocodile-shocked':
        return (
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
        );

      case 'wife-threatens':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <DarkVignette />
              <FireGlow />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <CrocodileWife size={240} mood="angry" className="shake-animation" />
            </div>
          </>
        );

      case 'crocodile-torn':
        return (
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
        );

      case 'crocodile-plan':
        return (
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
        );

      case 'monkey-excited':
        return (
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
        );

      case 'ride-on-back':
        return (
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
        );

      case 'middle-of-river':
        return (
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
        );

      case 'truth-revealed':
        return (
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
        );

      case 'monkey-thinks':
        return (
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
        );

      case 'monkey-trick':
        return (
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
        );

      case 'crocodile-fooled':
        return (
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
        );

      case 'swimming-back':
        return (
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
        );

      case 'reaching-tree':
        return (
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
        );

      case 'monkey-safe':
        return (
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
        );

      case 'crocodile-ashamed':
        return (
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
        );

      case 'monkey-lesson':
        return (
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
        );

      case 'crocodile-leaves':
        return (
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
        );

      case 'monkey-continues':
        return (
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
        );

      case 'moral-scene':
        return (
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
        );

      // ==================== STORY 2: TORTOISE AND THE GEESE ====================
      case 'tg-lake-intro':
        return (
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
        );

      case 'tg-tortoise-intro':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
              <Water y={290} />
              <Ripples cx={450} cy={330} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Tortoise size={160} mood="chatty" className="bounce-animation" />
            </div>
          </>
        );

      case 'tg-geese-arrive':
        return (
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
        );

      case 'tg-happy-days':
        return (
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
        );

      case 'tg-drought-begins':
        return (
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
        );

      case 'tg-lake-drying':
        return (
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
        );

      case 'tg-geese-worried':
        return (
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
        );

      case 'tg-the-plan':
        return (
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
        );

      case 'tg-the-warning':
        return (
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
        );

      case 'tg-tortoise-promises':
        return (
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
        );

      case 'tg-taking-off':
        return (
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
        );

      case 'tg-flying-high':
        return (
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
        );

      case 'tg-over-fields':
        return (
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
        );

      case 'tg-over-village':
        return (
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
        );

      case 'tg-people-point':
        return (
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
        );

      case 'tg-children-laugh':
        return (
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
        );

      case 'tg-tortoise-angry':
        return (
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
        );

      case 'tg-geese-warn':
        return (
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
        );

      case 'tg-more-mocking':
        return (
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
        );

      case 'tg-tortoise-snaps':
        return (
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
        );

      case 'tg-falling':
        return (
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
        );

      case 'tg-crash':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
              <rect x="0" y="340" width="900" height="80" fill="#8D6E63" />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%) rotate(180deg)', zIndex: 4 }}>
              <Tortoise size={110} mood="falling" />
            </div>
            <div className="impact-text large">CRASH!</div>
          </>
        );

      case 'tg-geese-mourn':
        return (
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
        );

      case 'tg-lesson':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Rain />
              <DarkVignette />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Villagers count={4} />
            </div>
          </>
        );

      case 'tg-wisdom':
        return (
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
        );

      case 'tg-moral-scene':
        return (
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
        );

      // ==================== STORY 3: THE BLUE JACKAL ====================
      case 'bj-forest-intro':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Birds count={2} />
              {/* Trees */}
              <rect x="50" y="180" width="30" height="200" fill="#4E342E" />
              <ellipse cx="65" cy="170" rx="50" ry="60" fill="#2E7D32" />
              <rect x="750" y="200" width="25" height="180" fill="#4E342E" />
              <ellipse cx="762" cy="190" rx="45" ry="55" fill="#1B5E20" />
              <rect x="400" y="160" width="28" height="220" fill="#4E342E" />
              <ellipse cx="414" cy="150" rx="55" ry="65" fill="#33691E" />
            </svg>
          </>
        );

      case 'bj-jackal-hungry':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <DarkVignette />
              {/* Trees */}
              <rect x="100" y="200" width="25" height="180" fill="#4E342E" />
              <ellipse cx="112" cy="190" rx="40" ry="50" fill="#1B5E20" />
              <rect x="700" y="180" width="25" height="200" fill="#4E342E" />
              <ellipse cx="712" cy="170" rx="45" ry="55" fill="#2E7D32" />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Jackal size={150} mood="sad" className="float-animation" />
            </div>
          </>
        );

      case 'bj-enters-village':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Moon x={700} y={20} />
              <Stars2 count={15} />
            </svg>
            <VillageSilhouette />
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '20%', zIndex: 4 }}>
              <Jackal size={120} mood="scared" className="run-animation" />
            </div>
            <Fireflies count={10} />
          </>
        );

      case 'bj-dogs-chase':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Moon x={700} y={20} />
              <Stars2 count={8} />
              <SpeedLines direction="left" />
            </svg>
            <VillageSilhouette />
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Jackal size={130} mood="terrified" className="run-animation" />
            </div>
          </>
        );

      case 'bj-falls-in-vat':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Splash cx={450} cy={250} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
              <DyeVat className="shake-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '48%', zIndex: 4, transform: 'rotate(-30deg)' }}>
              <Jackal size={90} mood="terrified" />
            </div>
            <div className="impact-text large">SPLASH!</div>
          </>
        );

      case 'bj-dogs-run':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Moon x={700} y={20} />
              <Stars2 count={8} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Jackal size={150} blue mood="neutral" className="pulse-animation" />
            </div>
          </>
        );

      case 'bj-sees-reflection':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <LightbulbIcon x={450} y={50} />
              <Sparkle count={5} />
            </svg>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
              <Water y={300} />
              <Ripples cx={450} cy={340} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Jackal size={140} blue mood="scheming" className="pulse-animation" />
            </div>
          </>
        );

      case 'bj-returns-forest':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Sparkle count={4} />
              {/* Trees */}
              <rect x="80" y="180" width="25" height="200" fill="#4E342E" />
              <ellipse cx="92" cy="170" rx="45" ry="55" fill="#2E7D32" />
              <rect x="750" y="190" width="25" height="190" fill="#4E342E" />
              <ellipse cx="762" cy="180" rx="40" ry="50" fill="#1B5E20" />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Jackal size={150} blue mood="regal" className="pulse-animation" />
            </div>
          </>
        );

      case 'bj-animals-bow':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Sparkle count={6} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Jackal size={140} blue mood="regal" className="pulse-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '5%', zIndex: 3 }}>
              <Deer size={80} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '8%', right: '5%', zIndex: 3 }}>
              <Elephant size={100} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '25%', zIndex: 3 }}>
              <Fox size={70} />
            </div>
          </>
        );

      case 'bj-declares-king':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Sparkle count={8} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Jackal size={170} blue mood="regal" className="bounce-animation" />
            </div>
          </>
        );

      case 'bj-crowned-king':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Sparkle count={8} />
              <Confetti />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Jackal size={160} blue mood="regal" className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '8%', left: '5%', zIndex: 3 }}>
              <Lion size={100} mood="neutral" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '8%', right: '5%', zIndex: 3 }}>
              <Elephant size={110} />
            </div>
          </>
        );

      case 'bj-living-well':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Sparkle count={6} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Jackal size={160} blue mood="regal" className="float-animation" />
            </div>
          </>
        );

      case 'bj-banishes-jackals':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <DarkVignette />
              <FireGlow />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Jackal size={150} blue mood="regal" className="pulse-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '10%', zIndex: 3, opacity: 0.6 }}>
              <Jackal size={80} mood="sad" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '10%', zIndex: 3, opacity: 0.6 }}>
              <Jackal size={80} mood="sad" />
            </div>
          </>
        );

      case 'bj-jackals-leave':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Rain />
              <DarkVignette />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '15%', zIndex: 4 }}>
              <Jackal size={100} mood="sad" className="float-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '40%', zIndex: 4, opacity: 0.7 }}>
              <Jackal size={90} mood="sad" className="float-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '15%', zIndex: 4, opacity: 0.5 }}>
              <Jackal size={80} mood="sad" />
            </div>
          </>
        );

      case 'bj-weeks-pass':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Sparkle count={5} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Jackal size={170} blue mood="regal" className="float-animation" />
            </div>
          </>
        );

      case 'bj-moonlit-night':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Moon x={350} y={20} />
              <Stars2 count={20} />
            </svg>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 1 }}>
              {/* Trees silhouette */}
              <rect x="50" y="250" width="20" height="150" fill="#0D1642" />
              <ellipse cx="60" cy="240" rx="40" ry="50" fill="#1A237E" opacity="0.5" />
              <rect x="800" y="260" width="20" height="140" fill="#0D1642" />
              <ellipse cx="810" cy="250" rx="35" ry="45" fill="#1A237E" opacity="0.5" />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Jackal size={130} blue mood="neutral" className="float-animation" />
            </div>
            <Fireflies count={12} />
          </>
        );

      case 'bj-hears-howling':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Moon x={350} y={20} />
              <Stars2 count={15} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Jackal size={140} blue mood="scared" className="anim-scared-shiver" />
            </div>
            {/* Howl sound waves */}
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 5 }}>
              <path d="M100,300 Q80,280 100,260" stroke="#FDD835" strokeWidth="3" fill="none" opacity="0.5">
                <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
              </path>
              <path d="M80,310 Q55,280 80,250" stroke="#FDD835" strokeWidth="3" fill="none" opacity="0.4">
                <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
              </path>
            </svg>
            <Fireflies count={8} />
          </>
        );

      case 'bj-cannot-resist':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Moon x={350} y={20} />
              <Stars2 count={10} />
              <DarkVignette />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Jackal size={150} blue mood="struggling" className="shake-animation" />
            </div>
            <Fireflies count={8} />
          </>
        );

      case 'bj-howls':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Moon x={350} y={20} />
              <Stars2 count={12} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Jackal size={160} blue mood="howling" className="bounce-animation" />
            </div>
            {/* Sound waves */}
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 5 }}>
              {[0,1,2].map(i => (
                <circle key={i} cx="450" cy="200" r={60 + i * 40} fill="none" stroke="#FDD835" strokeWidth="2" opacity={0.4 - i * 0.1}>
                  <animate attributeName="r" values={`${60+i*40};${100+i*40};${60+i*40}`} dur="1.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values={`${0.4-i*0.1};0;${0.4-i*0.1}`} dur="1.5s" repeatCount="indefinite" />
                </circle>
              ))}
            </svg>
            <div className="impact-text large">AAOOOOO!</div>
          </>
        );

      case 'bj-animals-realize':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <FireGlow />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Jackal size={130} blue mood="terrified" className="shake-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '5%', zIndex: 3 }}>
              <Lion size={120} mood="enraged" className="shake-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '5%', zIndex: 3 }}>
              <Deer size={80} />
            </div>
            <div className="impact-text">!</div>
          </>
        );

      case 'bj-animals-angry':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <FireGlow />
              <DarkVignette />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Jackal size={120} blue mood="terrified" className="shake-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '8%', left: '5%', zIndex: 3 }}>
              <Lion size={130} mood="enraged" className="shake-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '8%', right: '5%', zIndex: 3 }}>
              <Elephant size={120} className="shake-animation" />
            </div>
          </>
        );

      case 'bj-chased-out':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <SpeedLines direction="right" />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '10%', zIndex: 5 }}>
              <Jackal size={120} blue mood="terrified" className="run-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '10%', zIndex: 3 }}>
              <Lion size={110} mood="enraged" className="run-animation" />
            </div>
          </>
        );

      case 'bj-alone-again':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Rain />
              <DarkVignette />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Jackal size={140} blue mood="sad" className="float-animation" />
            </div>
          </>
        );

      case 'bj-jackals-reject':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <DarkVignette />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Jackal size={120} blue mood="sad" className="float-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '10%', zIndex: 3 }}>
              <Jackal size={90} mood="neutral" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '10%', zIndex: 3 }}>
              <Jackal size={90} mood="neutral" />
            </div>
          </>
        );

      case 'bj-wisdom':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <SunsetGlow />
              <Sparkle count={4} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Jackal size={150} mood="neutral" className="float-animation" />
            </div>
          </>
        );

      case 'bj-moral-scene':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <SunsetGlow />
              <Sparkle count={8} />
              <Birds count={3} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '35%', zIndex: 4 }}>
              <Jackal size={120} mood="neutral" className="float-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', right: '25%', zIndex: 4, opacity: 0.5 }}>
              <Jackal size={100} blue mood="neutral" />
            </div>
          </>
        );

      // ==================== STORY 4: THE LION AND THE RABBIT ====================
      case 'lr-forest-intro':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Birds count={4} />
              <Sparkle count={3} />
              {/* Trees */}
              <rect x="60" y="180" width="28" height="200" fill="#4E342E" />
              <ellipse cx="74" cy="165" rx="50" ry="60" fill="#2E7D32" />
              <rect x="780" y="190" width="25" height="190" fill="#4E342E" />
              <ellipse cx="792" cy="180" rx="45" ry="55" fill="#388E3C" />
              <rect x="400" y="170" width="30" height="210" fill="#4E342E" />
              <ellipse cx="415" cy="155" rx="55" ry="65" fill="#43A047" />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '15%', zIndex: 3 }}>
              <Deer size={70} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '8%', right: '15%', zIndex: 3 }}>
              <Rabbit size={50} mood="happy" />
            </div>
          </>
        );

      case 'lr-lion-intro':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <FireGlow />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Lion size={200} mood="fierce" className="shake-animation" />
            </div>
          </>
        );

      case 'lr-animals-suffer':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Rain />
              <DarkVignette />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '15%', zIndex: 4 }}>
              <Deer size={80} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '15%', zIndex: 4 }}>
              <Rabbit size={60} mood="scared" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '50%', transform: 'translateX(-50%)', zIndex: 3, opacity: 0.7 }}>
              <Elephant size={100} />
            </div>
          </>
        );

      case 'lr-meeting':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Sparkle count={3} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '5%', zIndex: 3 }}>
              <Elephant size={120} className="float-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '35%', zIndex: 4 }}>
              <Deer size={80} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '30%', zIndex: 4 }}>
              <Fox size={70} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '10%', zIndex: 4 }}>
              <Rabbit size={60} mood="happy" />
            </div>
          </>
        );

      case 'lr-proposal':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <LightbulbIcon x={450} y={50} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Fox size={120} className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '10%', zIndex: 3, opacity: 0.6 }}>
              <Deer size={70} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '10%', zIndex: 3, opacity: 0.6 }}>
              <Elephant size={90} />
            </div>
          </>
        );

      case 'lr-lion-agrees':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <FireGlow />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Lion size={190} mood="menacing" className="pulse-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '10%', zIndex: 3, opacity: 0.5 }}>
              <Fox size={60} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '10%', zIndex: 3, opacity: 0.5 }}>
              <Deer size={60} />
            </div>
          </>
        );

      case 'lr-sad-routine':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Rain />
              <DarkVignette />
            </svg>
            {/* Path leading to cave */}
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
              <path d="M200,420 Q450,350 700,300 Q750,290 780,300 Q820,320 800,350 Q780,380 750,380 L700,380" fill="#455A64" />
              {/* Cave entrance */}
              <path d="M700,250 Q750,200 800,250 Q820,280 800,350 Q780,380 750,380 L700,380 Q680,350 700,300 Q710,270 700,250" fill="#37474F" />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '25%', zIndex: 4, opacity: 0.7 }}>
              <Deer size={80} className="float-animation" />
            </div>
          </>
        );

      case 'lr-rabbits-turn':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Sparkle count={5} />
              <LightbulbIcon x={500} y={40} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Rabbit size={140} mood="clever" className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '10%', zIndex: 3, opacity: 0.5 }}>
              <Rabbit size={60} mood="happy" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '10%', zIndex: 3, opacity: 0.5 }}>
              <Rabbit size={60} mood="happy" />
            </div>
          </>
        );

      case 'lr-rabbit-walks-slow':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <SunsetGlow />
              {/* Path */}
              <path d="M100,380 Q300,350 500,360 Q700,370 900,340" stroke="#8D6E63" strokeWidth="15" fill="none" opacity="0.4" />
              {/* Grass */}
              <rect x="0" y="370" width="900" height="50" fill="#388E3C" />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '35%', zIndex: 4 }}>
              <Rabbit size={100} mood="clever" className="float-animation" />
            </div>
          </>
        );

      case 'lr-lion-angry':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <FireGlow />
              <DarkVignette />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '30%', zIndex: 4 }}>
              <Lion size={200} mood="enraged" className="shake-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', right: '20%', zIndex: 5 }}>
              <Rabbit size={80} mood="scared" className="anim-scared-shiver" />
            </div>
          </>
        );

      case 'lr-rabbit-acts-scared':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <DarkVignette />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '25%', zIndex: 4 }}>
              <Lion size={180} mood="enraged" className="pulse-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '25%', zIndex: 5 }}>
              <Rabbit size={90} mood="scared" className="anim-scared-shiver" />
            </div>
          </>
        );

      case 'lr-rabbit-tells-story':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <ThinkingBubbles x={550} y={80} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '20%', zIndex: 4 }}>
              <Lion size={170} mood="fierce" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '20%', zIndex: 5 }}>
              <Rabbit size={100} mood="clever" className="bounce-animation" />
            </div>
          </>
        );

      case 'lr-lion-jealous':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <FireGlow />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Lion size={200} mood="enraged" className="shake-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '10%', zIndex: 5 }}>
              <Rabbit size={70} mood="clever" />
            </div>
            <div className="impact-text">!!!</div>
          </>
        );

      case 'lr-rabbit-leads':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              {/* Forest path */}
              <rect x="60" y="180" width="22" height="200" fill="#4E342E" />
              <ellipse cx="71" cy="170" rx="40" ry="50" fill="#2E7D32" />
              <rect x="800" y="190" width="22" height="190" fill="#4E342E" />
              <ellipse cx="811" cy="180" rx="38" ry="48" fill="#388E3C" />
              <SpeedLines direction="right" />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', right: '25%', zIndex: 5 }}>
              <Rabbit size={90} mood="clever" className="run-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '15%', zIndex: 4 }}>
              <Lion size={160} mood="enraged" className="run-animation" />
            </div>
          </>
        );

      case 'lr-at-the-well':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Sparkle count={3} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
              <Well size={180} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', right: '10%', zIndex: 5 }}>
              <Rabbit size={80} mood="clever" className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '10%', zIndex: 4 }}>
              <Lion size={150} mood="enraged" />
            </div>
          </>
        );

      case 'lr-lion-looks-in':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <DarkVignette />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
              <Well size={200} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '32%', left: '45%', zIndex: 4, transform: 'rotate(20deg)' }}>
              <Lion size={140} mood="fierce" className="pulse-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '8%', zIndex: 5 }}>
              <Rabbit size={70} mood="clever" />
            </div>
          </>
        );

      case 'lr-lion-roars':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <FireGlow />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
              <Well size={190} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '35%', left: '43%', zIndex: 4 }}>
              <Lion size={150} mood="berserk" className="shake-animation" />
            </div>
            {/* Echo waves */}
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 5 }}>
              {[0,1,2].map(i => (
                <circle key={i} cx="450" cy="250" r={40 + i * 30} fill="none" stroke="#FF6F00" strokeWidth="2" opacity={0.3 - i * 0.08}>
                  <animate attributeName="r" values={`${40+i*30};${70+i*30};${40+i*30}`} dur="1s" repeatCount="indefinite" />
                </circle>
              ))}
            </svg>
            <div className="impact-text large">ROARRR!</div>
          </>
        );

      case 'lr-lion-jumps':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <SpeedLines direction="down" />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
              <Well size={200} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '46%', zIndex: 5, transform: 'rotate(90deg)' }}>
              <Lion size={120} mood="berserk" className="shake-animation" />
            </div>
            <div className="impact-text large">SPLASH!</div>
          </>
        );

      case 'lr-lion-trapped':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <DarkVignette />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
              <Well size={200} />
            </div>
            {/* Lion inside well - just eyes visible */}
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 4 }}>
              <circle cx="430" cy="280" r="5" fill="#FF6F00">
                <animate attributeName="r" values="5;3;5" dur="1s" repeatCount="indefinite" />
              </circle>
              <circle cx="470" cy="280" r="5" fill="#FF6F00">
                <animate attributeName="r" values="5;3;5" dur="1s" repeatCount="indefinite" />
              </circle>
              <Ripples cx={450} cy={270} />
            </svg>
          </>
        );

      case 'lr-rabbit-celebrates':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Sparkle count={6} />
              <Confetti />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '30%', zIndex: 3, opacity: 0.5 }}>
              <Well size={130} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', right: '25%', zIndex: 5 }}>
              <Rabbit size={140} mood="triumphant" className="anim-celebrate" />
            </div>
          </>
        );

      case 'lr-returns-hero':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Sparkle count={8} />
              <Confetti />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Rabbit size={130} mood="triumphant" className="anim-celebrate" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '5%', zIndex: 3 }}>
              <Elephant size={110} className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '5%', zIndex: 3 }}>
              <Deer size={80} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '30%', zIndex: 3 }}>
              <Fox size={70} />
            </div>
          </>
        );

      case 'lr-celebration':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Sparkle count={10} />
              <Confetti />
              <Birds count={4} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Rabbit size={110} mood="triumphant" className="anim-celebrate" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '8%', left: '5%', zIndex: 3 }}>
              <Elephant size={100} className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '30%', zIndex: 3 }}>
              <Deer size={70} className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '25%', zIndex: 3 }}>
              <Fox size={65} className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '5%', zIndex: 3 }}>
              <Jackal size={70} mood="neutral" className="bounce-animation" />
            </div>
          </>
        );

      case 'lr-rabbit-humble':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Sparkle count={5} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Rabbit size={130} mood="happy" className="float-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '10%', zIndex: 3 }}>
              <Elephant size={100} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '10%', zIndex: 3 }}>
              <Deer size={70} />
            </div>
          </>
        );

      case 'lr-peaceful-forest':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Birds count={4} />
              <Sparkle count={5} />
              {/* Trees */}
              <rect x="60" y="180" width="28" height="200" fill="#4E342E" />
              <ellipse cx="74" cy="165" rx="50" ry="60" fill="#66BB6A" />
              <rect x="780" y="190" width="25" height="190" fill="#4E342E" />
              <ellipse cx="792" cy="180" rx="45" ry="55" fill="#81C784" />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '15%', zIndex: 3 }}>
              <Deer size={65} className="float-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '35%', zIndex: 3 }}>
              <Rabbit size={50} mood="happy" className="float-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '8%', right: '25%', zIndex: 3 }}>
              <Fox size={55} className="float-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '5%', right: '5%', zIndex: 3 }}>
              <Elephant size={80} className="float-animation" />
            </div>
          </>
        );

      case 'lr-wisdom':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <SunsetGlow />
              <Sparkle count={6} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Rabbit size={140} mood="clever" className="float-animation" />
            </div>
          </>
        );

      case 'lr-moral-scene':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <SunsetGlow />
              <Sparkle count={8} />
              <Birds count={3} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Rabbit size={130} mood="clever" className="float-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '10%', zIndex: 3, opacity: 0.4 }}>
              <Lion size={100} mood="neutral" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '10%', zIndex: 3, opacity: 0.4 }}>
              <Well size={80} />
            </div>
          </>
        );

      // ==================== STORY 5: THE LOYAL MONGOOSE ====================
      case 'lm-village-intro':
        return (
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
        );

      case 'lm-mongoose-arrives':
        return (
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
        );

      case 'lm-wife-worried':
        return (
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
        );

      case 'lm-growing-together':
        return (
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
        );

      case 'lm-mongoose-plays':
        return (
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
        );

      case 'lm-wife-leaves':
        return (
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
        );

      case 'lm-snake-approaches':
        return (
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
        );

      case 'lm-mongoose-alert':
        return (
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
        );

      case 'lm-battle-begins':
        return (
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
        );

      case 'lm-fierce-fight':
        return (
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
        );

      case 'lm-mongoose-wins':
        return (
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
        );

      case 'lm-mongoose-proud':
        return (
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
        );

      case 'lm-runs-to-mother':
        return (
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
        );

      case 'lm-wife-returns':
        return (
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
        );

      case 'lm-wife-panics':
        return (
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
        );

      case 'lm-wife-strikes':
        return (
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
        );

      case 'lm-mongoose-falls':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <DarkVignette />
              <Rain />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Mongoose size={100} mood="hurt" className="float-animation" style={{ transform: 'rotate(90deg)' }} />
            </div>
          </>
        );

      case 'lm-rushes-inside':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <DarkVignette />
              <SpeedLines direction="right" />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '25%', zIndex: 4 }}>
              <BrahminWife size={130} mood="panicked" className="run-animation" />
            </div>
          </>
        );

      case 'lm-baby-safe':
        return (
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
        );

      case 'lm-truth-revealed':
        return (
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
        );

      case 'lm-wife-rushes-back':
        return (
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
        );

      case 'lm-brahmin-returns':
        return (
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
        );

      case 'lm-regret':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Rain />
              <DarkVignette />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <BrahminWife size={150} mood="grieving" className="anim-sway" />
            </div>
          </>
        );

      case 'lm-lesson':
        return (
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
        );

      case 'lm-wisdom':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <SunsetGlow />
              <Sparkle count={4} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4, opacity: 0.4 }}>
              <Mongoose size={150} mood="happy" className="anim-breathe" />
            </div>
          </>
        );

      case 'lm-moral-scene':
        return (
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
        );

      // ==================== STORY 7: THE CROW AND THE SNAKE ====================
      case 'cs-tree-intro':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Birds count={5} />
              <Sparkle count={4} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)' }}>
              <RoseAppleTree size={300} />
            </div>
          </>
        );

      case 'cs-crow-nest':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Sparkle count={3} />
              <Leaves count={4} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '15%' }}>
              <RoseAppleTree size={260} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '52%', right: '22%', zIndex: 4 }}>
              <CrowWife size={100} mood="happy" className="float-animation" />
            </div>
          </>
        );

      case 'cs-snake-lives-below':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <DarkVignette />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)' }}>
              <RoseAppleTree size={240} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '8%', left: '45%', zIndex: 4 }}>
              <Snake size={150} mood="menacing" className="anim-drift" />
            </div>
          </>
        );

      case 'cs-snake-eats-eggs':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <DarkVignette />
              <FireGlow />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', right: '20%' }}>
              <RoseAppleTree size={240} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '30%', right: '25%', zIndex: 4 }}>
              <Snake size={130} mood="menacing" className="anim-sway" />
            </div>
          </>
        );

      case 'cs-crows-cry':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <DarkVignette />
              <Rain />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '25%', zIndex: 4 }}>
              <Crow size={110} mood="sad" className="shake-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', right: '25%', zIndex: 4 }}>
              <CrowWife size={100} mood="sad" className="shake-animation" />
            </div>
          </>
        );

      case 'cs-crow-angry':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <DarkVignette />
              <FireGlow />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Crow size={140} mood="angry" className="pulse-animation" />
            </div>
            <div className="impact-text">!</div>
          </>
        );

      case 'cs-visit-fox':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Sparkle count={3} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '25%', zIndex: 4 }}>
              <Crow size={100} mood="neutral" className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '25%', zIndex: 4 }}>
              <Fox size={120} className="float-animation" />
            </div>
          </>
        );

      case 'cs-fox-thinks':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <ThinkingBubbles x={600} y={100} />
              <Sparkle count={2} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Fox size={150} className="pulse-animation" />
            </div>
          </>
        );

      case 'cs-fox-plan':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <LightbulbIcon x={450} y={50} />
              <Sparkle count={5} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '30%', zIndex: 4 }}>
              <Fox size={130} className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', right: '20%', zIndex: 4 }}>
              <Crow size={90} mood="neutral" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', top: '30%', right: '35%', zIndex: 5 }}>
              <Necklace size={70} className="anim-ripple-scale" />
            </div>
          </>
        );

      case 'cs-crows-understand':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Sparkle count={8} />
              <Confetti />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '30%', zIndex: 4 }}>
              <Crow size={110} mood="happy" className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '30%', zIndex: 4 }}>
              <CrowWife size={100} mood="happy" className="bounce-animation" />
            </div>
          </>
        );

      case 'cs-palace-pond':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Sparkle count={6} />
            </svg>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
              <Water y={280} />
              <Ripples cx={400} cy={320} />
              <Ripples cx={550} cy={340} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Necklace size={80} className="pulse-animation" />
            </div>
          </>
        );

      case 'cs-crow-grabs-necklace':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <SpeedLines direction="down" />
              <Sparkle count={3} />
            </svg>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
              <Water y={300} />
              <Splash cx={450} cy={290} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', top: '20%', left: '45%', zIndex: 5 }}>
              <Crow size={110} mood="happy" className="run-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', top: '35%', left: '50%', zIndex: 5 }}>
              <Necklace size={60} className="shake-animation" />
            </div>
          </>
        );

      case 'cs-guards-chase':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <SpeedLines direction="right" />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', top: '10%', right: '15%', zIndex: 5 }}>
              <Crow size={100} mood="happy" className="float-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', top: '15%', right: '20%', zIndex: 4 }}>
              <Necklace size={50} className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '15%', zIndex: 4 }}>
              <Guard size={120} className="run-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '40%', zIndex: 4 }}>
              <Guard size={110} className="run-animation" />
            </div>
          </>
        );

      case 'cs-crow-flies-home':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <SpeedLines direction="right" />
              <Birds count={2} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', right: '10%' }}>
              <RoseAppleTree size={220} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', top: '15%', left: '40%', zIndex: 5 }}>
              <Crow size={100} className="float-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', top: '22%', left: '45%', zIndex: 4 }}>
              <Necklace size={50} className="float-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '10%', zIndex: 4, opacity: 0.7 }}>
              <Guard size={100} className="run-animation" />
            </div>
          </>
        );

      case 'cs-drops-necklace':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <SpeedLines direction="down" />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)' }}>
              <RoseAppleTree size={260} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', top: '12%', left: '48%', zIndex: 5 }}>
              <Crow size={90} className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', top: '35%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Necklace size={65} className="shake-animation" />
            </div>
          </>
        );

      case 'cs-guards-arrive':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <DarkVignette />
              <FireGlow />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)' }}>
              <RoseAppleTree size={240} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '42%', zIndex: 4 }}>
              <Snake size={140} mood="menacing" className="anim-sway" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '10%', zIndex: 5 }}>
              <Guard size={130} className="shake-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '10%', zIndex: 5 }}>
              <Guard size={120} className="shake-animation" />
            </div>
            <div className="impact-text">!</div>
          </>
        );

      case 'cs-snake-killed':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <SpeedLines direction="left" />
              <FireGlow />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Snake size={130} mood="menacing" className="shake-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '10%', zIndex: 5 }}>
              <Guard size={140} className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '10%', zIndex: 5 }}>
              <Guard size={130} className="bounce-animation" />
            </div>
            <div className="impact-text large">!!!</div>
          </>
        );

      case 'cs-guards-leave':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <SunsetGlow />
              <Sparkle count={3} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', right: '10%' }}>
              <RoseAppleTree size={200} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '15%', zIndex: 4, opacity: 0.7 }}>
              <Guard size={110} className="float-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '35%', zIndex: 4 }}>
              <Necklace size={50} className="pulse-animation" />
            </div>
          </>
        );

      case 'cs-crows-celebrate':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Sparkle count={8} />
              <Confetti />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)' }}>
              <RoseAppleTree size={240} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '50%', left: '40%', zIndex: 5 }}>
              <Crow size={110} mood="happy" className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '50%', right: '35%', zIndex: 5 }}>
              <CrowWife size={100} mood="happy" className="bounce-animation" />
            </div>
          </>
        );

      case 'cs-thank-fox':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <SunsetGlow />
              <Sparkle count={5} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '20%', zIndex: 4 }}>
              <Fox size={130} className="float-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '30%', right: '20%', zIndex: 4 }}>
              <Crow size={100} mood="happy" className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '30%', right: '35%', zIndex: 4 }}>
              <CrowWife size={90} mood="happy" className="anim-hop" />
            </div>
          </>
        );

      case 'cs-new-eggs':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Sparkle count={6} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)' }}>
              <RoseAppleTree size={260} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '52%', left: '47%', zIndex: 4 }}>
              <CrowWife size={100} mood="happy" className="pulse-animation" />
            </div>
          </>
        );

      case 'cs-chicks-hatch':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Sparkle count={8} />
              <Confetti />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)' }}>
              <RoseAppleTree size={260} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '52%', left: '42%', zIndex: 4 }}>
              <CrowWife size={90} mood="happy" className="float-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '50%', left: '55%', zIndex: 5 }}>
              <Crow size={40} mood="happy" className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '48%', left: '60%', zIndex: 5 }}>
              <Crow size={35} mood="happy" className="bounce-animation" />
            </div>
          </>
        );

      case 'cs-family-tree':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Birds count={4} />
              <Sparkle count={5} />
              <Leaves count={3} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)' }}>
              <RoseAppleTree size={280} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '55%', left: '40%', zIndex: 4 }}>
              <Crow size={90} mood="happy" className="float-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '53%', right: '38%', zIndex: 4 }}>
              <CrowWife size={85} mood="happy" className="float-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '48%', left: '48%', zIndex: 5 }}>
              <Crow size={35} mood="happy" className="anim-hop" />
            </div>
          </>
        );

      case 'cs-tell-story':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Sparkle count={4} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)' }}>
              <RoseAppleTree size={250} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '50%', left: '35%', zIndex: 4 }}>
              <CrowWife size={100} mood="happy" className="anim-sway" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '46%', left: '55%', zIndex: 5 }}>
              <Crow size={40} className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '44%', left: '62%', zIndex: 5 }}>
              <Crow size={38} className="anim-breathe" />
            </div>
          </>
        );

      case 'cs-wisdom':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <SunsetGlow />
              <Sparkle count={6} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Crow size={140} mood="happy" className="float-animation" />
            </div>
          </>
        );

      case 'cs-moral-scene':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <SunsetGlow />
              <Sparkle count={8} />
              <Birds count={4} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '30%', zIndex: 4 }}>
              <Crow size={110} mood="happy" className="float-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '25%', zIndex: 4 }}>
              <Fox size={100} className="float-animation" />
            </div>
          </>
        );

      // ==================== STORY 6: THE MUSICAL DONKEY ====================
      case 'md-village-intro':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Birds count={3} />
              <Sparkle count={4} />
            </svg>
            <VillageSilhouette />
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '30%', zIndex: 4 }}>
              <Washerman size={140} className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '25%', zIndex: 4 }}>
              <Donkey size={130} mood="neutral" className="anim-sway" />
            </div>
          </>
        );

      case 'md-donkey-works':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <SunsetGlow />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '20%', zIndex: 4 }}>
              <Washerman size={120} className="anim-drift" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Donkey size={150} mood="exhausted" className="anim-wobble" />
            </div>
          </>
        );

      case 'md-night-escape':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Moon x={700} y={25} />
              <Stars2 count={18} />
              <DarkVignette />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Donkey size={130} mood="sneaky" className="anim-drift" />
            </div>
            <Fireflies count={10} />
          </>
        );

      case 'md-eating-fields':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Moon x={400} y={20} />
              <Stars2 count={12} />
            </svg>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
              <rect x="0" y="340" width="900" height="80" fill="#2E7D32" />
              <rect x="0" y="350" width="300" height="70" fill="#388E3C" />
              <rect x="400" y="350" width="250" height="70" fill="#43A047" />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Donkey size={140} mood="happy" className="anim-breathe" />
            </div>
          </>
        );

      case 'md-meets-jackal':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Moon x={450} y={15} />
              <Stars2 count={10} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '25%', zIndex: 4 }}>
              <Donkey size={140} mood="happy" className="anim-sway" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '25%', zIndex: 4 }}>
              <Jackal size={110} mood="neutral" className="anim-entrance-pop" />
            </div>
          </>
        );

      case 'md-friends-feast':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Moon x={350} y={20} />
              <Stars2 count={14} />
              <Sparkle count={4} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '30%', zIndex: 4 }}>
              <Donkey size={130} mood="happy" className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '28%', zIndex: 4 }}>
              <Jackal size={100} mood="happy" className="anim-wiggle" />
            </div>
          </>
        );

      case 'md-moonlit-night':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Moon x={400} y={10} />
              <Stars2 count={22} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Donkey size={140} mood="happy" className="float-animation" />
            </div>
            <Fireflies count={14} />
          </>
        );

      case 'md-donkey-wants-sing':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Moon x={450} y={15} />
              <Stars2 count={16} />
              <Sparkle count={5} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Donkey size={160} mood="dramatic" className="anim-grow" />
            </div>
          </>
        );

      case 'md-jackal-warns':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Moon x={700} y={20} />
              <DarkVignette />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '25%', zIndex: 4 }}>
              <Donkey size={140} mood="stubborn" className="anim-sway" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '22%', zIndex: 5 }}>
              <Jackal size={110} mood="scared" className="shake-animation" />
            </div>
            <div className="impact-text">!</div>
          </>
        );

      case 'md-donkey-offended':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Moon x={650} y={25} />
              <FireGlow />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Donkey size={160} mood="proud" className="anim-swing" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '10%', zIndex: 3, opacity: 0.7 }}>
              <Jackal size={90} mood="worried" className="anim-wobble" />
            </div>
          </>
        );

      case 'md-jackal-tries-again':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Moon x={700} y={20} />
              <Stars2 count={8} />
              <DarkVignette />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '30%', zIndex: 4 }}>
              <Donkey size={140} mood="stubborn" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '25%', zIndex: 5 }}>
              <Jackal size={110} mood="pleading" className="pulse-animation" />
            </div>
          </>
        );

      case 'md-jackal-leaves':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Moon x={700} y={25} />
              <Stars2 count={6} />
              <DarkVignette />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '40%', zIndex: 4 }}>
              <Donkey size={140} mood="proud" className="anim-sway" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '5%', zIndex: 3, opacity: 0.5 }}>
              <Jackal size={90} mood="sad" className="anim-drift" />
            </div>
          </>
        );

      case 'md-donkey-sings':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Moon x={400} y={15} />
              <Stars2 count={10} />
              <SpeedLines direction="up" />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Donkey size={170} mood="singing" className="bounce-animation" />
            </div>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 5 }}>
              {[0,1,2].map(i => (
                <circle key={i} cx="450" cy="180" r={50 + i * 35} fill="none" stroke="#FDD835" strokeWidth="2" opacity={0.4 - i * 0.1}>
                  <animate attributeName="r" values={`${50+i*35};${90+i*35};${50+i*35}`} dur="1.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values={`${0.4-i*0.1};0;${0.4-i*0.1}`} dur="1.5s" repeatCount="indefinite" />
                </circle>
              ))}
            </svg>
            <div className="impact-text large">HEE-HAW!</div>
          </>
        );

      case 'md-farmers-wake':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <FireGlow />
              <DarkVignette />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '20%', zIndex: 4 }}>
              <Farmer size={130} mood="angry" className="anim-entrance-pop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '50%', zIndex: 4 }}>
              <Farmer size={120} mood="angry" className="shake-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '15%', zIndex: 4 }}>
              <Farmer size={125} mood="angry" className="anim-wobble" />
            </div>
          </>
        );

      case 'md-farmers-find-donkey':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <FireGlow />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Donkey size={140} mood="scared" className="anim-scared-shiver" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '5%', zIndex: 3 }}>
              <Farmer size={110} mood="angry" className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '5%', zIndex: 3 }}>
              <Farmer size={115} mood="angry" className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '30%', zIndex: 3 }}>
              <Farmer size={105} mood="angry" className="anim-swing" />
            </div>
          </>
        );

      case 'md-donkey-beaten':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <SpeedLines direction="right" />
              <DarkVignette />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '15%', zIndex: 5 }}>
              <Donkey size={130} mood="terrified" className="run-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '10%', zIndex: 3 }}>
              <Farmer size={110} mood="angry" className="run-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '30%', zIndex: 3 }}>
              <Farmer size={105} mood="angry" className="run-animation" />
            </div>
            <div className="impact-text large">!!!</div>
          </>
        );

      case 'md-donkey-tied':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <DarkVignette />
              <Moon x={700} y={30} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Donkey size={150} mood="dejected" className="anim-sway" />
            </div>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 5 }}>
              <rect x="400" y="340" width="100" height="18" rx="5" fill="#5D4037" />
              <line x1="450" y1="320" x2="450" y2="340" stroke="#795548" strokeWidth="3" />
            </svg>
          </>
        );

      case 'md-donkey-limps-away':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Moon x={650} y={25} />
              <Stars2 count={6} />
              <DarkVignette />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '40%', zIndex: 4 }}>
              <Donkey size={130} mood="hurt" className="anim-wobble" />
            </div>
          </>
        );

      case 'md-jackal-finds-him':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Moon x={400} y={20} />
              <Stars2 count={8} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '30%', zIndex: 4 }}>
              <Donkey size={130} mood="hurt" className="anim-wobble" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '25%', zIndex: 5 }}>
              <Jackal size={100} mood="sad" className="anim-breathe" />
            </div>
          </>
        );

      case 'md-donkey-regrets':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Rain />
              <DarkVignette />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Donkey size={140} mood="ashamed" className="anim-sway" />
            </div>
          </>
        );

      case 'md-jackal-helps':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Moon x={350} y={20} />
              <Stars2 count={10} />
              <Sparkle count={3} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '30%', zIndex: 4 }}>
              <Donkey size={130} mood="grateful" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '28%', zIndex: 5 }}>
              <Jackal size={100} mood="happy" className="anim-hop" />
            </div>
          </>
        );

      case 'md-donkey-home':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Birds count={2} />
              <Sparkle count={3} />
            </svg>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
              <rect x="550" y="200" width="200" height="180" fill="#5D4037" />
              <path d="M530,200 L650,130 L770,200" fill="#4E342E" />
              <rect x="620" y="260" width="60" height="120" fill="#3E2723" />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '35%', zIndex: 4 }}>
              <Donkey size={130} mood="tired" className="anim-drift" />
            </div>
          </>
        );

      case 'md-donkey-wiser':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Moon x={450} y={15} />
              <Stars2 count={14} />
              <Sparkle count={4} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Donkey size={140} mood="peaceful" className="anim-breathe" />
            </div>
          </>
        );

      case 'md-friends-again':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Moon x={400} y={15} />
              <Stars2 count={18} />
              <Sparkle count={5} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '30%', zIndex: 4 }}>
              <Donkey size={130} mood="happy" className="anim-ripple-scale" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '28%', zIndex: 4 }}>
              <Jackal size={100} mood="happy" className="anim-wiggle" />
            </div>
          </>
        );

      case 'md-wisdom':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <SunsetGlow />
              <Sparkle count={6} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4, opacity: 0.6 }}>
              <Donkey size={150} mood="peaceful" className="float-animation" />
            </div>
          </>
        );

      case 'md-moral-scene':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <SunsetGlow />
              <Sparkle count={8} />
              <Birds count={3} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '30%', zIndex: 4 }}>
              <Donkey size={120} mood="happy" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', right: '25%', zIndex: 4 }}>
              <Jackal size={100} mood="happy" className="anim-sway" />
            </div>
          </>
        );

      // ==================== STORY 14: THE MONKEY AND THE WEDGE ====================
      case 'wm-site-intro':
        return (
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
        );

      case 'wm-workers-splitting':
        return (
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
        );

      case 'wm-wedge-in-log':
        return (
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
        );

      case 'wm-lunch-break':
        return (
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
        );

      case 'wm-monkeys-nearby':
        return (
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
        );

      case 'wm-curious-monkey':
        return (
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
        );

      case 'wm-examines-log':
        return (
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
        );

      case 'wm-plays-tools':
        return (
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
        );

      case 'wm-sits-on-log':
        return (
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
        );

      case 'wm-pulls-wedge':
        return (
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
        );

      case 'wm-wedge-out':
        return (
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
        );

      case 'wm-log-snaps':
        return (
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
        );

      case 'wm-screams':
        return (
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
        );

      case 'wm-tries-escape':
        return (
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
        );

      case 'wm-cant-free':
        return (
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
        );

      case 'wm-others-watch':
        return (
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
        );

      case 'wm-workers-hear':
        return (
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
        );

      case 'wm-workers-return':
        return (
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
        );

      case 'wm-chase-away':
        return (
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
        );

      case 'wm-runs-sore':
        return (
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
        );

      case 'wm-monkeys-laugh':
        return (
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
        );

      case 'wm-lesson-learned':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <SunsetGlow />
              <Sparkle count={4} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Monkey size={150} mood="wise" className="float-animation" />
            </div>
          </>
        );

      case 'wm-wisdom-shared':
        return (
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
        );

      case 'wm-deeper-wisdom':
        return (
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
        );

      case 'wm-final-thought':
        return (
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
        );

      case 'wm-moral-scene':
        return (
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
        );

      // ==================== STORY 15: THE JACKAL AND THE DRUM ====================
      case 'jd-battlefield-intro':
        return (
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
        );

      case 'jd-hungry-jackal':
        return (
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
        );

      case 'jd-hears-sound':
        return (
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
        );

      case 'jd-terrified':
        return (
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
        );

      case 'jd-sound-again':
        return (
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
        );

      case 'jd-runs-hides':
        return (
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
        );

      case 'jd-peeks-out':
        return (
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
        );

      case 'jd-decides-investigate':
        return (
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
        );

      case 'jd-approaches':
        return (
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
        );

      case 'jd-finds-tree-drum':
        return (
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
        );

      case 'jd-wind-branch':
        return (
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
        );

      case 'jd-realizes':
        return (
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
        );

      case 'jd-laughs':
        return (
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
        );

      case 'jd-examines-drum':
        return (
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
        );

      case 'jd-finds-food':
        return (
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
        );

      case 'jd-eats-happily':
        return (
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
        );

      case 'jd-reflects-fear':
        return (
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
        );

      case 'jd-sunset-wisdom':
        return (
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
        );

      case 'jd-new-morning':
        return (
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
        );

      case 'jd-tells-others':
        return (
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
        );

      case 'jd-lesson-courage':
        return (
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
        );

      case 'jd-courage-rewarded':
        return (
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
        );

      case 'jd-deeper-lesson':
        return (
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
        );

      case 'jd-apply-lesson':
        return (
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
        );

      case 'jd-wisdom':
        return (
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
        );

      case 'jd-moral-scene':
        return (
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
        );

      // ==================== STORY 10: THE TALKING CAVE ====================
      case 'tc-forest-scene':
        return (
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
        );

      case 'tc-hungry-lion':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <DarkVignette />
              <FireGlow />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Lion size={200} mood="angry" className="anim-breathe" />
            </div>
          </>
        );

      case 'tc-finds-cave':
        return (
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
        );

      case 'tc-waits-inside':
        return (
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
        );

      case 'tc-jackal-returning':
        return (
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
        );

      case 'tc-notices-footprints':
        return (
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
        );

      case 'tc-studies-tracks-in':
        return (
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
        );

      case 'tc-no-tracks-out':
        return (
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
        );

      case 'tc-suspects-danger':
        return (
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
        );

      case 'tc-thinks-plan':
        return (
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
        );

      case 'tc-calls-cave':
        return (
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
        );

      case 'tc-pretends-routine':
        return (
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
        );

      case 'tc-lion-panics':
        return (
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
        );

      case 'tc-lion-roars-back':
        return (
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
        );

      case 'tc-jackal-recognizes':
        return (
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
        );

      case 'tc-jackal-smiles':
        return (
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
        );

      case 'tc-jackal-backs-away':
        return (
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
        );

      case 'tc-runs-to-safety':
        return (
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
        );

      case 'tc-lion-comes-out':
        return (
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
        );

      case 'tc-lion-sees-jackal-far':
        return (
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
        );

      case 'tc-lion-frustrated':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <DarkVignette />
              <FireGlow />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Lion size={200} mood="angry" className="shake-animation" />
            </div>
          </>
        );

      case 'tc-jackal-celebrates':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Sparkle count={8} />
              <Confetti />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Jackal size={160} mood="happy" className="bounce-animation" />
            </div>
          </>
        );

      case 'tc-lesson-observation':
        return (
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
        );

      case 'tc-wisdom':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <SunsetGlow />
              <Sparkle count={6} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4, opacity: 0.7 }}>
              <Jackal size={150} mood="clever" className="float-animation" />
            </div>
          </>
        );

      case 'tc-moral-teaching':
        return (
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
        );

      case 'tc-moral-scene':
        return (
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
        );

      // ==================== STORY 11: THE THREE FISH ====================
      case 'tf-peaceful-lake':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Birds count={3} />
              <Sparkle count={4} />
            </svg>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
              <Water y={250} />
              <Ripples cx={300} cy={300} />
              <Ripples cx={600} cy={320} />
            </svg>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
              <ellipse cx="200" cy="310" rx="25" ry="8" fill="#2E7D32" opacity="0.6" />
              <ellipse cx="700" cy="330" rx="22" ry="7" fill="#388E3C" opacity="0.5" />
            </svg>
            <FloatingBubbles count={8} />
          </>
        );

      case 'tf-three-friends':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Sparkle count={5} />
            </svg>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
              <Water y={220} />
              <Ripples cx={450} cy={300} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '35%', left: '15%', zIndex: 4 }}>
              <Fish size={90} color="#FFD700" className="anim-drift" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '45%', zIndex: 4 }}>
              <Fish size={85} color="#66BB6A" className="float-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '38%', right: '15%', zIndex: 4 }}>
              <Fish size={80} color="#FF7043" className="anim-wobble" />
            </div>
            <FloatingBubbles count={7} />
          </>
        );

      case 'tf-wise-fish':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Sparkle count={6} />
            </svg>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
              <Water y={240} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Fish size={140} color="#FFD700" mood="wise" className="anim-sway" />
            </div>
            <FloatingBubbles count={6} />
          </>
        );

      case 'tf-clever-fish':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Sparkle count={4} />
            </svg>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
              <Water y={240} />
              <Ripples cx={450} cy={310} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Fish size={130} color="#66BB6A" mood="clever" className="anim-drift" />
            </div>
          </>
        );

      case 'tf-foolish-fish':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
              <Water y={240} />
              <Ripples cx={400} cy={320} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Fish size={120} color="#FF7043" mood="happy" className="anim-hop" />
            </div>
          </>
        );

      case 'tf-fishermen-spotted':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <DarkVignette />
              <Birds count={2} />
            </svg>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
              <Water y={300} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '15%', zIndex: 4 }}>
              <Fisherman size={140} className="anim-sway" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '28%', right: '20%', zIndex: 4 }}>
              <Fisherman size={130} className="anim-wobble" />
            </div>
          </>
        );

      case 'tf-wise-overhears':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <DarkVignette />
            </svg>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
              <Water y={280} />
              <Ripples cx={400} cy={320} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '32%', left: '15%', zIndex: 3, opacity: 0.5 }}>
              <Fisherman size={120} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Fish size={110} color="#FFD700" mood="alert" className="anim-wiggle" />
            </div>
          </>
        );

      case 'tf-warns-friends':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <DarkVignette />
            </svg>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
              <Water y={250} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '15%', zIndex: 4 }}>
              <Fish size={100} color="#FFD700" mood="alert" className="shake-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '45%', zIndex: 4 }}>
              <Fish size={90} color="#66BB6A" mood="curious" className="anim-sway" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '32%', right: '15%', zIndex: 4 }}>
              <Fish size={85} color="#FF7043" mood="happy" className="anim-wobble" />
            </div>
            <div className="impact-text">!</div>
          </>
        );

      case 'tf-foolish-dismisses':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
              <Water y={250} />
              <Ripples cx={500} cy={310} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '20%', zIndex: 4 }}>
              <Fish size={90} color="#FFD700" mood="alert" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '30%', right: '20%', zIndex: 4 }}>
              <Fish size={100} color="#FF7043" mood="happy" className="anim-hop" />
            </div>
          </>
        );

      case 'tf-clever-stays':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <ThinkingBubbles x={500} y={130} />
            </svg>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
              <Water y={250} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Fish size={120} color="#66BB6A" mood="clever" className="anim-drift" />
            </div>
          </>
        );

      case 'tf-wise-leaves':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <SpeedLines direction="right" />
              <Sparkle count={3} />
            </svg>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
              <Water y={260} />
              <Ripples cx={650} cy={310} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', right: '5%', zIndex: 4 }}>
              <Fish size={100} color="#FFD700" mood="wise" className="run-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '20%', zIndex: 3, opacity: 0.5 }}>
              <Fish size={70} color="#66BB6A" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '32%', left: '40%', zIndex: 3, opacity: 0.5 }}>
              <Fish size={65} color="#FF7043" />
            </div>
          </>
        );

      case 'tf-fishermen-arrive':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <DarkVignette />
            </svg>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
              <Water y={300} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '10%', zIndex: 4 }}>
              <Fisherman size={150} className="anim-entrance-pop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '26%', left: '40%', zIndex: 4 }}>
              <Fisherman size={140} className="anim-entrance-pop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '30%', right: '10%', zIndex: 4 }}>
              <Fisherman size={135} className="anim-entrance-pop" />
            </div>
          </>
        );

      case 'tf-nets-cast':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <DarkVignette />
            </svg>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
              <Water y={280} />
              <Splash cx={450} cy={300} />
            </svg>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 4 }}>
              <g stroke="#8D6E63" strokeWidth="1.5" fill="none" opacity="0.7">
                <path d="M250,290 Q450,350 650,290" />
                <path d="M280,290 L320,340 L360,290" />
                <path d="M360,290 L400,340 L440,290" />
                <path d="M440,290 L480,340 L520,290" />
                <path d="M520,290 L560,340 L600,290" />
                <line x1="320" y1="340" x2="400" y2="340" />
                <line x1="400" y1="340" x2="480" y2="340" />
                <line x1="480" y1="340" x2="560" y2="340" />
              </g>
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '35%', left: '15%', zIndex: 5 }}>
              <Fisherman size={130} className="anim-swing" />
            </div>
            <div className="impact-text">SPLASH!</div>
          </>
        );

      case 'tf-clever-caught':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <DarkVignette />
            </svg>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
              <Water y={280} />
            </svg>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 4 }}>
              <g stroke="#8D6E63" strokeWidth="1.5" fill="none" opacity="0.6">
                <ellipse cx="450" cy="320" rx="80" ry="50" />
                <line x1="400" y1="290" x2="420" y2="350" />
                <line x1="450" y1="280" x2="450" y2="360" />
                <line x1="500" y1="290" x2="480" y2="350" />
              </g>
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Fish size={110} color="#66BB6A" mood="scared" className="anim-scared-shiver" />
            </div>
            <FloatingBubbles count={5} />
          </>
        );

      case 'tf-plays-dead':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <DarkVignette />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%) rotate(180deg)', zIndex: 4 }}>
              <Fish size={120} color="#66BB6A" mood="dead" className="float-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '15%', zIndex: 3 }}>
              <Fisherman size={130} className="anim-wobble" />
            </div>
          </>
        );

      case 'tf-thrown-back':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <SpeedLines direction="down" />
            </svg>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
              <Water y={300} />
              <Splash cx={500} cy={310} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Fish size={100} color="#66BB6A" mood="dead" className="anim-swing" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '35%', left: '15%', zIndex: 3 }}>
              <Fisherman size={120} className="anim-sway" />
            </div>
          </>
        );

      case 'tf-clever-escapes':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <SpeedLines direction="right" />
              <Sparkle count={5} />
            </svg>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
              <Water y={260} />
              <Ripples cx={600} cy={310} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', right: '10%', zIndex: 4 }}>
              <Fish size={100} color="#66BB6A" mood="clever" className="run-animation" />
            </div>
          </>
        );

      case 'tf-foolish-caught':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <DarkVignette />
            </svg>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
              <Water y={290} />
            </svg>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 4 }}>
              <g stroke="#8D6E63" strokeWidth="1.5" fill="none" opacity="0.6">
                <ellipse cx="450" cy="310" rx="70" ry="45" />
                <line x1="410" y1="280" x2="425" y2="350" />
                <line x1="450" y1="270" x2="450" y2="355" />
                <line x1="490" y1="280" x2="475" y2="350" />
              </g>
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Fish size={110} color="#FF7043" mood="scared" className="shake-animation" />
            </div>
          </>
        );

      case 'tf-foolish-struggles':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <DarkVignette />
              <SpeedLines />
            </svg>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
              <Water y={300} />
              <Splash cx={450} cy={310} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Fish size={120} color="#FF7043" mood="scared" className="shake-animation" />
            </div>
            <div className="impact-text large">!!!</div>
          </>
        );

      case 'tf-fishermen-celebrate':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <SunsetGlow />
            </svg>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
              <Water y={320} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '20%', zIndex: 4 }}>
              <Fisherman size={140} className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '23%', right: '20%', zIndex: 4 }}>
              <Fisherman size={135} className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '35%', left: '50%', transform: 'translateX(-50%)', zIndex: 5, opacity: 0.6 }}>
              <Fish size={70} color="#FF7043" mood="dead" />
            </div>
          </>
        );

      case 'tf-wise-safe':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Sparkle count={6} />
            </svg>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
              <Water y={240} />
              <Ripples cx={450} cy={300} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Fish size={130} color="#FFD700" mood="wise" className="anim-drift" />
            </div>
          </>
        );

      case 'tf-clever-relieved':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Sparkle count={5} />
              <Confetti />
            </svg>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
              <Water y={250} />
              <Ripples cx={400} cy={310} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Fish size={120} color="#66BB6A" mood="happy" className="bounce-animation" />
            </div>
          </>
        );

      case 'tf-foolish-fate':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <DarkVignette />
              <Rain />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%) rotate(180deg)', zIndex: 4, opacity: 0.5 }}>
              <Fish size={100} color="#FF7043" mood="dead" />
            </div>
          </>
        );

      case 'tf-lesson-preparation':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <SunsetGlow />
              <Sparkle count={4} />
            </svg>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
              <Water y={270} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '25%', zIndex: 4 }}>
              <Fish size={100} color="#FFD700" mood="wise" className="anim-sway" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '28%', right: '25%', zIndex: 4 }}>
              <Fish size={95} color="#66BB6A" mood="clever" className="anim-drift" />
            </div>
          </>
        );

      case 'tf-wisdom':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <SunsetGlow />
              <Sparkle count={6} />
            </svg>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
              <Water y={280} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 4, opacity: 0.7 }}>
              <Fish size={140} color="#FFD700" mood="wise" className="float-animation" />
            </div>
          </>
        );

      case 'tf-moral-scene':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <SunsetGlow />
              <Sparkle count={8} />
              <Birds count={3} />
            </svg>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 2 }}>
              <Water y={280} />
              <Ripples cx={350} cy={320} />
              <Ripples cx={550} cy={330} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '20%', zIndex: 4 }}>
              <Fish size={90} color="#FFD700" mood="wise" className="anim-sway" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Fish size={85} color="#66BB6A" mood="happy" className="anim-drift" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '20%', zIndex: 3, opacity: 0.3 }}>
              <Fish size={70} color="#FF7043" mood="dead" />
            </div>
           </>
        );

      // ==================== STORY 8: The Brahmin's Dream (bd-) ====================

      case 'bd-village-intro':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '10%', zIndex: 2 }}>
              <VillageSilhouette size={300} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '25%', zIndex: 3 }}>
              <Villagers count={3} size={60} className="anim-sway" />
            </div>
            <Birds count={4} />
            <SunsetGlow intensity={0.3} />
          </>
        );

      case 'bd-brahmin-intro':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Brahmin size={160} mood="neutral" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '10%', zIndex: 2 }}>
              <VillageSilhouette size={200} />
            </div>
          </>
        );

      case 'bd-begging-alms':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '30%', zIndex: 4 }}>
              <Brahmin size={140} mood="sad" className="anim-sway" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', right: '25%', zIndex: 3 }}>
              <Villagers count={2} size={55} />
            </div>
          </>
        );

      case 'bd-gets-pot':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '40%', zIndex: 4 }}>
              <Brahmin size={150} mood="happy" className="anim-entrance-pop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '58%', zIndex: 5 }}>
              <Pot size={80} broken={false} className="anim-wobble" />
            </div>
            <Sparkle count={5} />
          </>
        );

      case 'bd-hangs-pot':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '45%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Brahmin size={150} mood="happy" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '55%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Pot size={70} broken={false} className="anim-swing" />
            </div>
            <DustMotes count={6} />
          </>
        );

      case 'bd-starts-dreaming':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '30%', zIndex: 4 }}>
              <Brahmin size={150} mood="happy" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '55%', left: '35%', zIndex: 5 }}>
              <Pot size={65} broken={false} className="anim-swing" />
            </div>
            <ThinkingBubbles />
            <Sparkle count={8} />
          </>
        );

      case 'bd-dream-sell-flour':
        return (
          <>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(200, 180, 255, 0.15)', zIndex: 1 }} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '35%', zIndex: 4, opacity: 0.85 }}>
              <Brahmin size={140} mood="happy" className="anim-sway" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', right: '25%', zIndex: 3, opacity: 0.85 }}>
              <Pot size={70} broken={false} />
            </div>
            <ThinkingBubbles />
            <Sparkle count={6} />
          </>
        );

      case 'bd-dream-buy-goats':
        return (
          <>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(200, 180, 255, 0.15)', zIndex: 1 }} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '25%', zIndex: 4, opacity: 0.85 }}>
              <Brahmin size={130} mood="happy" className="anim-sway" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '55%', zIndex: 3, opacity: 0.85 }}>
              <Goat size={70} className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '16%', right: '20%', zIndex: 3, opacity: 0.85 }}>
              <Goat size={60} className="anim-wobble" />
            </div>
            <ThinkingBubbles />
          </>
        );

      case 'bd-goats-multiply':
        return (
          <>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(200, 180, 255, 0.15)', zIndex: 1 }} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '15%', zIndex: 3, opacity: 0.85 }}>
              <Goat size={65} className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '35%', zIndex: 3, opacity: 0.85 }}>
              <Goat size={70} className="anim-wobble" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '55%', zIndex: 3, opacity: 0.85 }}>
              <Goat size={60} className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '15%', zIndex: 3, opacity: 0.85 }}>
              <Goat size={55} className="anim-sway" />
            </div>
            <Sparkle count={6} />
            <ThinkingBubbles />
          </>
        );

      case 'bd-dream-buy-cows':
        return (
          <>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(200, 180, 255, 0.15)', zIndex: 1 }} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '25%', zIndex: 4, opacity: 0.85 }}>
              <Brahmin size={130} mood="happy" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '25%', zIndex: 3, opacity: 0.85 }}>
              <Cow size={100} className="anim-breathe" />
            </div>
            <ThinkingBubbles />
          </>
        );

      case 'bd-cows-give-milk':
        return (
          <>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(200, 180, 255, 0.15)', zIndex: 1 }} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '20%', zIndex: 3, opacity: 0.85 }}>
              <Cow size={95} className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '20%', zIndex: 3, opacity: 0.85 }}>
              <Cow size={90} className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4, opacity: 0.85 }}>
              <Pot size={50} broken={false} />
            </div>
            <Sparkle count={5} />
            <ThinkingBubbles />
          </>
        );

      case 'bd-becomes-rich':
        return (
          <>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(255, 215, 0, 0.1)', zIndex: 1 }} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4, opacity: 0.85 }}>
              <Brahmin size={150} mood="happy" className="anim-grow" />
            </div>
            <Sparkle count={12} />
            <Confetti />
            <ThinkingBubbles />
          </>
        );

      case 'bd-builds-house':
        return (
          <>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(200, 180, 255, 0.15)', zIndex: 1 }} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 3, opacity: 0.85 }}>
              <House size={180} className="anim-entrance-pop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '15%', zIndex: 4, opacity: 0.85 }}>
              <Brahmin size={120} mood="happy" className="anim-sway" />
            </div>
            <Sparkle count={6} />
            <ThinkingBubbles />
          </>
        );

      case 'bd-gets-married':
        return (
          <>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(255, 200, 200, 0.15)', zIndex: 1 }} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '35%', zIndex: 4, opacity: 0.85 }}>
              <Brahmin size={140} mood="happy" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '35%', zIndex: 4, opacity: 0.85 }}>
              <BrahminWife size={130} mood="happy" className="anim-breathe" />
            </div>
            <Sparkle count={10} />
            <Confetti />
            <ThinkingBubbles />
          </>
        );

      case 'bd-has-a-son':
        return (
          <>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(200, 230, 255, 0.15)', zIndex: 1 }} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '30%', zIndex: 4, opacity: 0.85 }}>
              <Brahmin size={130} mood="happy" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '30%', zIndex: 4, opacity: 0.85 }}>
              <BrahminWife size={120} mood="happy" className="anim-sway" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5, opacity: 0.85 }}>
              <Baby size={50} className="anim-wobble" />
            </div>
            <Sparkle count={8} />
            <ThinkingBubbles />
          </>
        );

      case 'bd-son-naughty':
        return (
          <>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(200, 180, 255, 0.15)', zIndex: 1 }} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '25%', zIndex: 4, opacity: 0.85 }}>
              <Baby size={55} className="anim-hop bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '25%', zIndex: 4, opacity: 0.85 }}>
              <Brahmin size={130} mood="angry" className="anim-breathe" />
            </div>
            <SpeedLines />
            <ThinkingBubbles />
          </>
        );

      case 'bd-decides-discipline':
        return (
          <>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(200, 180, 255, 0.15)', zIndex: 1 }} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4, opacity: 0.85 }}>
              <Brahmin size={150} mood="angry" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '20%', zIndex: 3, opacity: 0.85 }}>
              <Stick size={60} className="anim-swing" />
            </div>
            <ThinkingBubbles />
          </>
        );

      case 'bd-kicks-pot':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '40%', zIndex: 4 }}>
              <Brahmin size={150} mood="angry" className="shake-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '45%', left: '55%', zIndex: 5 }}>
              <Pot size={70} broken={false} className="shake-animation" />
            </div>
            <SpeedLines />
          </>
        );

      case 'bd-pot-breaks':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '40%', zIndex: 4 }}>
              <Brahmin size={150} mood="shocked" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '55%', zIndex: 5 }}>
              <Pot size={80} broken={true} className="shake-animation" />
            </div>
            <SpeedLines />
          </>
        );

      case 'bd-brahmin-realizes':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Brahmin size={150} mood="sad" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '25%', zIndex: 3 }}>
              <Pot size={75} broken={true} />
            </div>
            <DarkVignette intensity={0.3} />
          </>
        );

      case 'bd-neighbors-laugh':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Brahmin size={130} mood="sad" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '10%', zIndex: 3 }}>
              <Villagers count={2} size={55} className="anim-wobble" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', right: '10%', zIndex: 3 }}>
              <Villagers count={2} size={55} className="anim-wobble" />
            </div>
          </>
        );

      case 'bd-brahmin-embarrassed':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Brahmin size={140} mood="sad" className="anim-sway" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '30%', zIndex: 3 }}>
              <Pot size={70} broken={true} />
            </div>
            <DarkVignette intensity={0.2} />
          </>
        );

      case 'bd-lesson-learned':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Brahmin size={150} mood="neutral" className="anim-breathe" />
            </div>
            <LightbulbIcon />
            <Sparkle count={4} />
          </>
        );

      case 'bd-wisdom':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Brahmin size={150} mood="neutral" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '20%', zIndex: 3 }}>
              <Pot size={65} broken={true} />
            </div>
            <LightbulbIcon />
            <Sparkle count={6} />
            <SunsetGlow intensity={0.3} />
          </>
        );

      case 'bd-storyteller':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '30%', zIndex: 4 }}>
              <Brahmin size={140} mood="neutral" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', right: '20%', zIndex: 3 }}>
              <Villagers count={3} size={50} className="anim-sway" />
            </div>
            <SunsetGlow intensity={0.4} />
          </>
        );

      case 'bd-moral-scene':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Brahmin size={140} mood="neutral" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '25%', zIndex: 3 }}>
              <Pot size={60} broken={true} />
            </div>
            <LightbulbIcon />
            <Sparkle count={8} />
            <SunsetGlow intensity={0.3} />
          </>
        );

      // ==================== STORY 9: The Elephant and the Mice (em-) ====================

      case 'em-village-ruins':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
              <VillageSilhouette size={300} />
            </div>
            <DarkVignette intensity={0.3} />
            <Leaves count={5} />
          </>
        );

      case 'em-mice-colony':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '20%', zIndex: 3 }}>
              <Mouse size={40} className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '13%', left: '35%', zIndex: 3 }}>
              <Mouse size={35} className="anim-wiggle" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '16%', left: '50%', zIndex: 3 }}>
              <Mouse size={38} className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '25%', zIndex: 3 }}>
              <Mouse size={36} className="anim-wiggle" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <MouseKing size={55} className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '8%', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
              <VillageSilhouette size={250} />
            </div>
          </>
        );

      case 'em-mice-thriving':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '15%', zIndex: 3 }}>
              <Mouse size={38} className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '17%', left: '30%', zIndex: 3 }}>
              <Mouse size={35} className="anim-wiggle" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '48%', zIndex: 3 }}>
              <Mouse size={40} className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '16%', right: '25%', zIndex: 3 }}>
              <Mouse size={36} className="anim-wiggle" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '13%', right: '12%', zIndex: 3 }}>
              <Mouse size={34} className="anim-hop" />
            </div>
            <Sparkle count={5} />
          </>
        );

      case 'em-elephants-approach':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '20%', zIndex: 4 }}>
              <Elephant size={160} mood="neutral" className="anim-sway" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '13%', left: '45%', zIndex: 3 }}>
              <Elephant size={140} mood="neutral" className="anim-sway" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '15%', zIndex: 2 }}>
              <Elephant size={120} mood="neutral" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '8%', right: '5%', zIndex: 1 }}>
              <VillageSilhouette size={180} />
            </div>
          </>
        );

      case 'em-elephants-crush':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '30%', zIndex: 4 }}>
              <Elephant size={170} mood="neutral" className="shake-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '20%', zIndex: 3 }}>
              <Mouse size={30} className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '30%', zIndex: 3 }}>
              <Mouse size={28} className="anim-hop" />
            </div>
            <SpeedLines />
            <DarkVignette intensity={0.2} />
          </>
        );

      case 'em-mice-mourning':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '25%', zIndex: 3 }}>
              <Mouse size={35} mood="sad" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '40%', zIndex: 3 }}>
              <Mouse size={32} mood="sad" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '16%', right: '30%', zIndex: 3 }}>
              <Mouse size={34} mood="sad" className="anim-sway" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <MouseKing size={50} mood="sad" className="anim-breathe" />
            </div>
            <DarkVignette intensity={0.3} />
          </>
        );

      case 'em-mouse-king-brave':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <MouseKing size={70} mood="determined" className="anim-grow" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '15%', zIndex: 3 }}>
              <Mouse size={35} className="anim-sway" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '15%', zIndex: 3 }}>
              <Mouse size={35} className="anim-sway" />
            </div>
            <Sparkle count={5} />
          </>
        );

      case 'em-visits-elephant-king':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '25%', zIndex: 4 }}>
              <Elephant size={180} mood="neutral" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '25%', zIndex: 4 }}>
              <MouseKing size={60} className="anim-hop" />
            </div>
          </>
        );

      case 'em-makes-request':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '25%', zIndex: 4 }}>
              <Elephant size={175} mood="neutral" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '16%', left: '30%', zIndex: 4 }}>
              <MouseKing size={65} className="anim-sway" />
            </div>
            <ThinkingBubbles />
          </>
        );

      case 'em-elephant-agrees':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '25%', zIndex: 4 }}>
              <Elephant size={175} mood="happy" className="anim-sway" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '16%', left: '30%', zIndex: 4 }}>
              <MouseKing size={65} mood="happy" className="anim-hop" />
            </div>
            <Sparkle count={6} />
          </>
        );

      case 'em-mice-rebuild':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
              <VillageSilhouette size={250} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '16%', left: '20%', zIndex: 3 }}>
              <Mouse size={35} className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '40%', zIndex: 3 }}>
              <Mouse size={38} className="anim-wiggle" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '17%', right: '25%', zIndex: 3 }}>
              <Mouse size={36} className="anim-hop" />
            </div>
            <Sparkle count={4} />
          </>
        );

      case 'em-time-passes':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
              <VillageSilhouette size={280} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', top: '15%', right: '15%', zIndex: 2 }}>
              <Moon size={60} />
            </div>
            <Stars2 count={12} />
            <Leaves count={4} />
            <SunsetGlow intensity={0.3} />
          </>
        );

      case 'em-hunters-arrive':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '20%', zIndex: 4 }}>
              <Villagers count={3} size={65} className="anim-sway" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '20%', zIndex: 3 }}>
              <Net size={100} className="anim-swing" />
            </div>
            <DarkVignette intensity={0.2} />
          </>
        );

      case 'em-elephants-trapped':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '25%', zIndex: 4 }}>
              <Elephant size={160} mood="sad" className="shake-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '13%', right: '25%', zIndex: 4 }}>
              <Elephant size={140} mood="sad" className="shake-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Net size={250} />
            </div>
            <DarkVignette intensity={0.3} />
          </>
        );

      case 'em-elephant-king-trapped':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Elephant size={180} mood="sad" className="shake-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Net size={220} />
            </div>
            <DarkVignette intensity={0.4} />
          </>
        );

      case 'em-baby-elephant-distressed':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '35%', zIndex: 4 }}>
              <Elephant size={100} mood="sad" className="shake-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '13%', right: '25%', zIndex: 3 }}>
              <Elephant size={170} mood="sad" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '20%', zIndex: 4 }}>
              <Net size={200} />
            </div>
            <DarkVignette intensity={0.3} />
          </>
        );

      case 'em-bird-carries-news':
        return (
          <>
            <Birds count={1} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <MouseKing size={60} mood="alert" className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '20%', zIndex: 3 }}>
              <Mouse size={35} className="anim-wiggle" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '20%', zIndex: 3 }}>
              <Mouse size={35} className="anim-wiggle" />
            </div>
          </>
        );

      case 'em-mouse-king-rallies':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <MouseKing size={70} mood="determined" className="anim-grow" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '10%', zIndex: 3 }}>
              <Mouse size={35} className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '25%', zIndex: 3 }}>
              <Mouse size={38} className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '25%', zIndex: 3 }}>
              <Mouse size={36} className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '10%', zIndex: 3 }}>
              <Mouse size={34} className="anim-hop" />
            </div>
            <SpeedLines />
          </>
        );

      case 'em-mice-march':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '16%', left: '10%', zIndex: 3 }}>
              <Mouse size={35} className="anim-hop run-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '22%', zIndex: 3 }}>
              <Mouse size={38} className="anim-hop run-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '17%', left: '34%', zIndex: 4 }}>
              <MouseKing size={55} className="anim-hop run-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', zIndex: 3 }}>
              <Mouse size={36} className="anim-hop run-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '16%', left: '62%', zIndex: 3 }}>
              <Mouse size={34} className="anim-hop run-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '15%', zIndex: 3 }}>
              <Mouse size={37} className="anim-hop run-animation" />
            </div>
            <SpeedLines />
          </>
        );

      case 'em-mice-gnaw-ropes':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Elephant size={160} mood="neutral" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Net size={200} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '25%', zIndex: 6 }}>
              <Mouse size={30} className="anim-wiggle" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '11%', left: '40%', zIndex: 6 }}>
              <Mouse size={28} className="anim-wiggle" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '30%', zIndex: 6 }}>
              <Mouse size={32} className="anim-wiggle" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '11%', right: '18%', zIndex: 6 }}>
              <Mouse size={29} className="anim-wiggle" />
            </div>
            <SpeedLines />
          </>
        );

      case 'em-elephants-freed':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '25%', zIndex: 4 }}>
              <Elephant size={160} mood="happy" className="anim-sway" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '13%', right: '25%', zIndex: 4 }}>
              <Elephant size={140} mood="happy" className="anim-sway" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <MouseKing size={55} className="anim-hop" />
            </div>
            <Sparkle count={10} />
            <Confetti />
          </>
        );

      case 'em-elephant-king-grateful':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '30%', zIndex: 4 }}>
              <Elephant size={180} mood="happy" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '16%', left: '30%', zIndex: 4 }}>
              <MouseKing size={65} mood="happy" className="anim-hop" />
            </div>
            <Sparkle count={8} />
          </>
        );

      case 'em-friends-forever':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '35%', zIndex: 4 }}>
              <Elephant size={170} mood="happy" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '16%', left: '55%', zIndex: 5 }}>
              <MouseKing size={60} mood="happy" className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '13%', left: '15%', zIndex: 3 }}>
              <Mouse size={35} className="anim-wiggle" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '13%', right: '15%', zIndex: 3 }}>
              <Mouse size={35} className="anim-wiggle" />
            </div>
            <Sparkle count={8} />
            <SunsetGlow intensity={0.3} />
          </>
        );

      case 'em-celebration':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '30%', zIndex: 4 }}>
              <Elephant size={160} mood="happy" className="anim-sway" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '16%', right: '30%', zIndex: 5 }}>
              <MouseKing size={60} mood="happy" className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '13%', left: '15%', zIndex: 3 }}>
              <Mouse size={35} className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '13%', right: '15%', zIndex: 3 }}>
              <Mouse size={35} className="anim-hop" />
            </div>
            <Confetti />
            <Sparkle count={12} />
          </>
        );

      case 'em-wisdom':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '35%', zIndex: 4 }}>
              <Elephant size={150} mood="happy" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '16%', right: '35%', zIndex: 4 }}>
              <MouseKing size={60} mood="happy" className="anim-breathe" />
            </div>
            <LightbulbIcon />
            <Sparkle count={6} />
            <SunsetGlow intensity={0.3} />
          </>
        );

      case 'em-moral-scene':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '35%', zIndex: 4 }}>
              <Elephant size={150} mood="happy" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '16%', right: '35%', zIndex: 4 }}>
              <MouseKing size={60} mood="happy" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '13%', left: '15%', zIndex: 3 }}>
              <Mouse size={35} className="anim-sway" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '13%', right: '15%', zIndex: 3 }}>
              <Mouse size={35} className="anim-sway" />
            </div>
            <LightbulbIcon />
            <Sparkle count={8} />
            <SunsetGlow intensity={0.3} />
          </>
        );

      // ============ STORY 16: LITTLE KRISHNA AND THE BUTTER (kb-) ============
      case 'kb-vrindavan-intro':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Birds count={5} />
              <Sparkle count={4} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '0%', left: '0%', right: '0%', zIndex: 2 }}>
              <svg width="100%" height="100" viewBox="0 0 900 100" preserveAspectRatio="none">
                <path d="M0,50 Q150,10 300,40 Q450,70 600,30 Q750,0 900,50 L900,100 L0,100 Z" fill="#2E7D32" opacity="0.6" />
                <path d="M0,70 Q200,40 400,60 Q600,80 900,60 L900,100 L0,100 Z" fill="#1B5E20" opacity="0.5" />
              </svg>
            </div>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
              <Water y={340} />
              <Ripples cx={300} cy={370} />
              <Ripples cx={600} cy={360} />
            </svg>
            <Leaves count={3} />
          </>
        );

      case 'kb-yashoda-intro':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Yashoda size={180} mood="busy" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '20%', zIndex: 3 }}>
              <ChurningRod size={80} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '18%', zIndex: 3 }}>
              <ButterPot size={70} />
            </div>
            <Sparkle count={3} />
          </>
        );

      case 'kb-baby-krishna':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Krishna size={160} mood="happy" className="bounce-animation" />
            </div>
            <Sparkle count={6} />
            <SunsetGlow intensity={0.15} />
          </>
        );

      case 'kb-krishna-watches':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '30%', zIndex: 4 }}>
              <Yashoda size={160} mood="busy" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '25%', zIndex: 3 }}>
              <ChurningRod size={70} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '22%', zIndex: 5 }}>
              <Krishna size={120} mood="mischievous" className="float-animation" />
            </div>
            <Sparkle count={3} />
          </>
        );

      case 'kb-krishna-hungry':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '25%', zIndex: 4 }}>
              <Yashoda size={160} mood="busy" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '55%', zIndex: 5 }}>
              <Krishna size={130} mood="happy" className="anim-hop" />
            </div>
          </>
        );

      case 'kb-yashoda-busy':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '35%', zIndex: 4 }}>
              <Yashoda size={170} mood="busy" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '20%', zIndex: 3 }}>
              <ButterPot size={70} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '25%', zIndex: 5 }}>
              <Krishna size={110} mood="happy" />
            </div>
            <FireGlow intensity={0.15} />
          </>
        );

      case 'kb-yashoda-leaves':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '15%', zIndex: 4 }}>
              <Yashoda size={150} mood="busy" className="run-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '35%', zIndex: 3 }}>
              <ButterPot size={90} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '25%', zIndex: 5 }}>
              <Krishna size={110} mood="mischievous" className="float-animation" />
            </div>
            <SpeedLines />
          </>
        );

      case 'kb-krishna-idea':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Krishna size={140} mood="mischievous" className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '20%', zIndex: 3 }}>
              <ButterPot size={90} />
            </div>
            <LightbulbIcon />
            <ThinkingBubbles />
            <Sparkle count={4} />
          </>
        );

      case 'kb-climbs-mortar':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '35%', zIndex: 3 }}>
              <Mortar size={90} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '38%', zIndex: 5 }}>
              <Krishna size={130} mood="mischievous" className="anim-wobble" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', top: '20%', right: '30%', zIndex: 3 }}>
              <ButterPot size={80} />
            </div>
          </>
        );

      case 'kb-breaks-pot':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Krishna size={140} mood="mischievous" className="shake-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
              <ButterPot size={100} broken />
            </div>
            <div className="pop-effect">CRACK!</div>
            <Sparkle count={5} />
          </>
        );

      case 'kb-eats-butter':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Krishna size={160} mood="eating" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '25%', zIndex: 3 }}>
              <ButterPot size={70} broken />
            </div>
            <Sparkle count={6} />
            <SunsetGlow intensity={0.1} />
          </>
        );

      case 'kb-shares-monkeys':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '40%', zIndex: 4 }}>
              <Krishna size={130} mood="eating" className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '15%', zIndex: 5 }}>
              <Monkey size={100} mood="delighted" className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', right: '30%', zIndex: 4 }}>
              <Monkey size={80} mood="happy" className="bounce-animation" />
            </div>
            <Sparkle count={3} />
          </>
        );

      case 'kb-monkeys-feast':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '35%', zIndex: 4 }}>
              <Krishna size={120} mood="eating" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '10%', zIndex: 5 }}>
              <Monkey size={90} mood="delighted" className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '10%', zIndex: 5 }}>
              <Monkey size={85} mood="happy" className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '30%', right: '25%', zIndex: 4 }}>
              <Monkey size={70} mood="delighted" className="float-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
              <ButterPot size={60} broken />
            </div>
            <Confetti />
          </>
        );

      case 'kb-yashoda-returns':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '15%', zIndex: 4 }}>
              <Yashoda size={170} mood="angry" className="shake-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '25%', zIndex: 3 }}>
              <ButterPot size={80} broken />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '35%', zIndex: 5 }}>
              <Krishna size={110} mood="eating" className="anim-breathe" />
            </div>
            <DarkVignette />
          </>
        );

      case 'kb-krishna-runs':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '15%', zIndex: 5 }}>
              <Krishna size={130} mood="running" className="run-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '15%', zIndex: 4 }}>
              <Yashoda size={150} mood="chasing" className="run-animation" />
            </div>
            <SpeedLines />
            <Sparkle count={3} />
          </>
        );

      case 'kb-yashoda-chases':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '20%', zIndex: 5 }}>
              <Krishna size={120} mood="running" className="run-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '20%', zIndex: 4 }}>
              <Yashoda size={160} mood="chasing" className="run-animation" />
            </div>
            <SpeedLines />
          </>
        );

      case 'kb-krishna-hides':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
              <ButterPot size={120} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-40%)', zIndex: 4 }}>
              <Krishna size={110} mood="hiding" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '15%', zIndex: 4 }}>
              <Yashoda size={140} mood="angry" />
            </div>
          </>
        );

      case 'kb-yashoda-catches':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Yashoda size={170} mood="angry" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '55%', zIndex: 5 }}>
              <Krishna size={110} mood="eating" className="anim-wobble" />
            </div>
          </>
        );

      case 'kb-krishna-denies':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Krishna size={160} mood="eating" className="anim-sway" />
            </div>
            <Sparkle count={3} />
          </>
        );

      case 'kb-yashoda-scolds':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '30%', zIndex: 4 }}>
              <Yashoda size={160} mood="happy" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '25%', zIndex: 5 }}>
              <Krishna size={120} mood="mischievous" className="bounce-animation" />
            </div>
            <Sparkle count={4} />
          </>
        );

      case 'kb-ties-mortar':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '25%', zIndex: 4 }}>
              <Yashoda size={150} mood="angry" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '30%', zIndex: 3 }}>
              <Mortar size={90} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '32%', zIndex: 5 }}>
              <Krishna size={110} mood="happy" />
            </div>
          </>
        );

      case 'kb-krishna-cries':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
              <Mortar size={100} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '16%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Krishna size={150} mood="crying" className="shake-animation" />
            </div>
            <Rain />
            <DarkVignette />
          </>
        );

      case 'kb-yashoda-melts':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Yashoda size={170} mood="loving" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '55%', zIndex: 5 }}>
              <Krishna size={110} mood="crying" className="anim-breathe" />
            </div>
            <Sparkle count={5} />
            <SunsetGlow intensity={0.2} />
          </>
        );

      case 'kb-krishna-smiles':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Krishna size={170} mood="mischievous" className="bounce-animation" />
            </div>
            <Sparkle count={8} />
            <Confetti />
          </>
        );

      case 'kb-mother-love':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Yashoda size={180} mood="loving" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '16%', left: '53%', zIndex: 5 }}>
              <Krishna size={100} mood="happy" className="anim-breathe" />
            </div>
            <Sparkle count={8} />
            <SunsetGlow intensity={0.3} />
          </>
        );

      case 'kb-moral-scene':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '35%', zIndex: 4 }}>
              <Yashoda size={150} mood="loving" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '16%', left: '55%', zIndex: 5 }}>
              <Krishna size={120} mood="happy" className="float-animation" />
            </div>
            <LightbulbIcon />
            <Sparkle count={10} />
            <SunsetGlow intensity={0.35} />
          </>
        );

      // ============ CHHOTA BHEEM SCENES ============
      case 'cb-dholakpur-intro':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Birds count={5} />
              <Sparkle count={4} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '0%', left: '0%', right: '0%', zIndex: 2 }}>
              <svg width="100%" height="100" viewBox="0 0 900 100" preserveAspectRatio="none">
                <path d="M0,50 Q150,10 300,40 Q450,70 600,30 Q750,0 900,50 L900,100 L0,100 Z" fill="#2E7D32" opacity="0.6" />
                <path d="M0,70 Q200,40 400,60 Q600,80 900,60 L900,100 L0,100 Z" fill="#1B5E20" opacity="0.5" />
              </svg>
            </div>
            <Leaves count={4} />
          </>
        );

      case 'cb-bheem-intro':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Bheem size={180} mood="happy" className="bounce-animation" />
            </div>
            <Sparkle count={6} />
            <SunsetGlow intensity={0.15} />
          </>
        );

      case 'cb-friends-playing':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '15%', zIndex: 4 }}>
              <Bheem size={130} mood="happy" className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '38%', zIndex: 4 }}>
              <Chutki size={110} mood="happy" className="float-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '30%', zIndex: 4 }}>
              <Raju size={90} mood="happy" className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '16%', right: '12%', zIndex: 4 }}>
              <Jaggu size={80} mood="playful" className="bounce-animation" />
            </div>
            <Sparkle count={3} />
          </>
        );

      case 'cb-sky-glows':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <MagicLadoo size={80} glowing className="float-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '25%', zIndex: 4 }}>
              <Bheem size={120} mood="thinking" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '25%', zIndex: 4 }}>
              <Chutki size={100} mood="surprised" />
            </div>
            <Sparkle count={8} />
            <SunsetGlow intensity={0.3} />
          </>
        );

      case 'cb-ladoo-lands':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <MagicLadoo size={100} glowing className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '15%', zIndex: 4 }}>
              <Bheem size={120} mood="thinking" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '20%', zIndex: 4 }}>
              <Raju size={85} mood="excited" className="anim-hop" />
            </div>
            <Sparkle count={6} />
            <Confetti />
          </>
        );

      case 'cb-ladoo-examined':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <MagicLadoo size={90} glowing className="pulse-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '20%', zIndex: 4 }}>
              <Bheem size={120} mood="thinking" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '25%', zIndex: 4 }}>
              <Chutki size={100} mood="happy" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '10%', zIndex: 4 }}>
              <Jaggu size={70} mood="excited" className="bounce-animation" />
            </div>
            <Sparkle count={5} />
          </>
        );

      case 'cb-raju-wishes':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '32%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <MagicLadoo size={80} glowing className="pulse-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Raju size={110} mood="excited" className="bounce-animation" />
            </div>
            <Sparkle count={8} />
            <Confetti />
          </>
        );

      case 'cb-chutki-wishes':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '32%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <MagicLadoo size={80} glowing className="pulse-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Chutki size={120} mood="happy" className="float-animation" />
            </div>
            <Sparkle count={8} />
            <Leaves count={5} />
          </>
        );

      case 'cb-bheem-declines':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '28%', right: '20%', zIndex: 5 }}>
              <MagicLadoo size={70} glowing />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Bheem size={150} mood="thinking" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '15%', zIndex: 3 }}>
              <Chutki size={90} mood="happy" />
            </div>
            <Sparkle count={3} />
          </>
        );

      case 'cb-kalia-spies':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '15%', zIndex: 5 }}>
              <Kalia size={130} mood="mischievous" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '5%', zIndex: 4 }}>
              <DholuBholu size={100} mood="happy" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '35%', zIndex: 3 }}>
              <MagicLadoo size={60} glowing />
            </div>
            <DarkVignette />
          </>
        );

      case 'cb-kalia-steals':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Kalia size={140} mood="mischievous" className="run-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '52%', zIndex: 6 }}>
              <MagicLadoo size={50} glowing />
            </div>
            <SpeedLines />
            <DarkVignette />
          </>
        );

      case 'cb-kalia-first-wish':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Kalia size={160} mood="angry" className="anim-grow" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '52%', zIndex: 5 }}>
              <MagicLadoo size={70} glowing className="pulse-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '10%', zIndex: 3 }}>
              <DholuBholu size={90} mood="scared" />
            </div>
            <Sparkle count={6} />
            <FireGlow intensity={0.2} />
          </>
        );

      case 'cb-chaos-animals':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Birds count={8} />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '20%', zIndex: 4 }}>
              <Bheem size={120} mood="determined" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '20%', zIndex: 4 }}>
              <Jaggu size={80} mood="scared" className="shake-animation" />
            </div>
            <SpeedLines />
            <Leaves count={6} />
          </>
        );

      case 'cb-chaos-weather':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '30%', zIndex: 4 }}>
              <Bheem size={130} mood="determined" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '25%', zIndex: 4 }}>
              <Chutki size={100} mood="worried" className="shake-animation" />
            </div>
            <Rain />
            <DarkVignette />
          </>
        );

      case 'cb-village-trouble':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '15%', zIndex: 4 }}>
              <Bheem size={120} mood="determined" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '38%', zIndex: 4 }}>
              <Chutki size={95} mood="worried" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '30%', zIndex: 4 }}>
              <Raju size={80} mood="scared" className="shake-animation" />
            </div>
            <Rain />
            <DarkVignette />
          </>
        );

      case 'cb-bheem-steps-up':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Bheem size={170} mood="heroic" className="anim-entrance-pop" />
            </div>
            <Sparkle count={6} />
            <SunsetGlow intensity={0.25} />
          </>
        );

      case 'cb-fixing-animals':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '25%', zIndex: 4 }}>
              <Bheem size={140} mood="strong" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '16%', right: '20%', zIndex: 4 }}>
              <Jaggu size={90} mood="happy" className="bounce-animation" />
            </div>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Birds count={4} />
            </svg>
            <Sparkle count={4} />
          </>
        );

      case 'cb-bheem-fixes-storm':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Bheem size={160} mood="heroic" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '15%', zIndex: 3 }}>
              <Raju size={80} mood="brave" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '15%', zIndex: 3 }}>
              <Chutki size={90} mood="determined" />
            </div>
            <SpeedLines />
            <Sparkle count={5} />
          </>
        );

      case 'cb-bheem-finds-kalia':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '25%', zIndex: 5 }}>
              <Bheem size={140} mood="determined" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '20%', zIndex: 4 }}>
              <Kalia size={130} mood="scared" className="shake-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '28%', right: '22%', zIndex: 5 }}>
              <MagicLadoo size={50} glowing />
            </div>
          </>
        );

      case 'cb-kalia-surprised':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Kalia size={150} mood="scared" className="shake-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '10%', zIndex: 3 }}>
              <DholuBholu size={100} mood="scared" />
            </div>
            <DarkVignette />
          </>
        );

      case 'cb-bheem-explains':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '25%', zIndex: 5 }}>
              <Bheem size={140} mood="happy" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '20%', zIndex: 4 }}>
              <Kalia size={120} mood="scared" />
            </div>
            <ThinkingBubbles />
            <Sparkle count={3} />
          </>
        );

      case 'cb-kalia-sorry':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Kalia size={140} mood="sorry" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '52%', zIndex: 5 }}>
              <MagicLadoo size={60} glowing />
            </div>
            <Sparkle count={4} />
          </>
        );

      case 'cb-kalia-helps':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '20%', zIndex: 4 }}>
              <Bheem size={130} mood="happy" className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '20%', zIndex: 4 }}>
              <Kalia size={120} mood="sorry" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '45%', zIndex: 3 }}>
              <Raju size={80} mood="happy" />
            </div>
            <Sparkle count={5} />
          </>
        );

      case 'cb-village-restored':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '10%', zIndex: 4 }}>
              <Bheem size={120} mood="happy" className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '30%', zIndex: 4 }}>
              <Chutki size={100} mood="happy" className="float-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '30%', zIndex: 4 }}>
              <Raju size={85} mood="happy" className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '16%', right: '12%', zIndex: 4 }}>
              <Jaggu size={75} mood="happy" className="bounce-animation" />
            </div>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <Birds count={4} />
            </svg>
            <Sparkle count={6} />
            <SunsetGlow intensity={0.2} />
          </>
        );

      case 'cb-ladoo-dissolves':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '35%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <MagicLadoo size={100} glowing className="pulse-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '30%', zIndex: 4 }}>
              <Bheem size={120} mood="happy" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '25%', zIndex: 4 }}>
              <Chutki size={100} mood="surprised" />
            </div>
            <Sparkle count={10} />
            <Confetti />
            <SunsetGlow intensity={0.3} />
          </>
        );

      case 'cb-moral-celebration':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '15%', zIndex: 4 }}>
              <Bheem size={130} mood="heroic" className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '38%', zIndex: 4 }}>
              <Chutki size={95} mood="happy" className="float-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '30%', zIndex: 4 }}>
              <Raju size={80} mood="happy" className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '16%', right: '15%', zIndex: 4 }}>
              <Jaggu size={70} mood="happy" className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '5%', zIndex: 3 }}>
              <Kalia size={100} mood="sorry" />
            </div>
            <LightbulbIcon />
            <Sparkle count={10} />
            <Confetti />
            <SunsetGlow intensity={0.35} />
          </>
        );

      // ============ TROY / ODYSSEY SCENES ============
      case 'tr-greece-intro':
        return (
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
        );

      case 'tr-odysseus-intro':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Odysseus size={170} mood="happy" className="bounce-animation" />
            </div>
            <Sparkle count={5} />
            <SunsetGlow intensity={0.15} />
          </>
        );

      case 'tr-troy-city':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '0%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
              <TrojanWall size={350} />
            </div>
            <SunsetGlow intensity={0.25} />
          </>
        );

      case 'tr-war-begins':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '5%', left: '8%', zIndex: 3 }}>
              <GreekShip size={150} className="anim-sway" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '0%', right: '5%', zIndex: 4 }}>
              <TrojanWall size={250} />
            </div>
            <Birds count={3} />
          </>
        );

      case 'tr-greeks-tired':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '30%', zIndex: 4 }}>
              <Odysseus size={150} mood="thinking" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', right: '10%', zIndex: 3 }}>
              <GreekShip size={130} className="anim-sway" />
            </div>
            <Rain density="light" />
          </>
        );

      case 'tr-athena-appears':
        return (
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
        );

      case 'tr-odysseus-thinks':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Odysseus size={170} mood="thinking" className="anim-breathe" />
            </div>
            <ThinkingBubbles />
            <Sparkle count={4} />
          </>
        );

      case 'tr-building-horse':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '20%', zIndex: 4 }}>
              <WoodenHorse size={150} className="anim-grow" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '15%', zIndex: 5 }}>
              <Odysseus size={130} mood="determined" className="anim-breathe" />
            </div>
            <Sparkle count={3} />
          </>
        );

      case 'tr-horse-complete':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <WoodenHorse size={200} className="anim-entrance-pop" />
            </div>
            <Sparkle count={8} />
            <SunsetGlow intensity={0.2} />
          </>
        );

      case 'tr-soldiers-hide':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '20%', zIndex: 4 }}>
              <WoodenHorse size={180} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '15%', zIndex: 5 }}>
              <Odysseus size={120} mood="determined" className="anim-breathe" />
            </div>
            <DarkVignette />
          </>
        );

      case 'tr-greeks-sail-away':
        return (
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
        );

      case 'tr-trojans-debate':
        return (
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
        );

      case 'tr-horse-enters':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '8%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <WoodenHorse size={160} className="anim-entrance-pop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '0%', left: '50%', transform: 'translateX(-50%)', zIndex: 3, maxWidth: '100%', overflow: 'hidden' }}>
              <TrojanWall size={320} />
            </div>
            <Sparkle count={5} />
          </>
        );

      case 'tr-trojans-celebrate':
        return (
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
        );

      case 'tr-night-falls':
        return (
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
        );

      case 'tr-door-opens':
        return (
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
        );

      case 'tr-open-gates':
        return (
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
        );

      case 'tr-greeks-enter':
        return (
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
        );

      case 'tr-odysseus-victory':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Odysseus size={180} mood="heroic" className="anim-entrance-pop" />
            </div>
            <Confetti />
            <Sparkle count={10} />
            <SunsetGlow intensity={0.3} />
          </>
        );

      case 'tr-journey-home':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <GreekShip size={180} className="anim-sway" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Odysseus size={90} mood="brave" className="anim-breathe" />
            </div>
            <Rain density="medium" />
          </>
        );

      case 'tr-sea-monsters':
        return (
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
        );

      case 'tr-penelope-waits':
        return (
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
        );

      case 'tr-athena-helps':
        return (
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
        );

      case 'tr-homecoming':
        return (
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
        );

      case 'tr-family-reunion':
        return (
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
        );

      case 'tr-moral-scene':
        return (
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
        );

      // ===== STORY 20: MOTU PATLU =====
      case 'mp-furfuri-nagar-intro':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
              <SamosaShop size={200} />
            </div>
            <Birds count={5} />
            <Leaves count={6} />
            <Sparkle count={5} />
          </>
        );

      case 'mp-motu-intro':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Motu size={160} mood="happy" className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '10%', zIndex: 3 }}>
              <Samosa size={50} className="float-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', top: '20%', left: '15%', zIndex: 3 }}>
              <Samosa size={40} className="float-animation" />
            </div>
            <Sparkle count={6} />
          </>
        );

      case 'mp-patlu-intro':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Patlu size={150} mood="smart" className="anim-breathe" />
            </div>
            <Sparkle count={5} />
          </>
        );

      case 'mp-samosa-shop-morning':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '8%', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
              <SamosaShop size={220} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '15%', zIndex: 5 }}>
              <Motu size={120} mood="excited" className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '15%', zIndex: 5 }}>
              <Patlu size={110} mood="happy" className="anim-breathe" />
            </div>
            <Sparkle count={4} />
          </>
        );

      case 'mp-eating-samosas':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '30%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Motu size={150} mood="eating" className="anim-wobble" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '15%', zIndex: 5 }}>
              <Patlu size={120} mood="happy" className="anim-breathe" />
            </div>
            {[0,1,2,3,4].map(i => (
              <div key={i} className="scene-element" style={{ position: 'absolute', bottom: `${25 + i * 8}%`, left: `${20 + i * 12}%`, zIndex: 4 }}>
                <Samosa size={35} className="float-animation" />
              </div>
            ))}
            <Confetti count={8} />
          </>
        );

      case 'mp-chingum-arrives':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <ChingumInspector size={140} mood="alert" className="shake-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '10%', zIndex: 4 }}>
              <Motu size={110} mood="happy" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '10%', zIndex: 4 }}>
              <Patlu size={100} mood="happy" className="anim-breathe" />
            </div>
          </>
        );

      case 'mp-motu-shocked':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Motu size={170} mood="scared" className="shake-animation" />
            </div>
            <Sparkle count={6} />
          </>
        );

      case 'mp-patlu-plan':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Patlu size={160} mood="thinking" className="anim-breathe" />
            </div>
            <ThinkingBubbles />
            <Sparkle count={4} />
          </>
        );

      case 'mp-investigating-shop':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '8%', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
              <SamosaShop size={200} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '20%', zIndex: 5 }}>
              <Motu size={110} mood="thinking" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '20%', zIndex: 5 }}>
              <Patlu size={100} mood="smart" className="anim-breathe" />
            </div>
            <Sparkle count={5} />
          </>
        );

      case 'mp-following-trail':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '25%', zIndex: 5 }}>
              <Motu size={120} mood="sad" className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '25%', zIndex: 5 }}>
              <Patlu size={110} mood="smart" className="anim-hop" />
            </div>
            <Leaves count={6} />
          </>
        );

      case 'mp-warehouse-outside':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '25%', zIndex: 5 }}>
              <Motu size={120} mood="excited" className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '25%', zIndex: 5 }}>
              <Patlu size={110} mood="thinking" className="anim-breathe" />
            </div>
            <Sparkle count={4} />
          </>
        );

      case 'mp-sneaking-in':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '30%', zIndex: 5 }}>
              <Motu size={130} mood="scared" className="shake-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '25%', zIndex: 5 }}>
              <Patlu size={110} mood="worried" className="anim-breathe" />
            </div>
            <DarkVignette />
          </>
        );

      case 'mp-samosa-mountain':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '20%', zIndex: 5 }}>
              <Motu size={120} mood="excited" className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '20%', zIndex: 5 }}>
              <Patlu size={110} mood="excited" className="bounce-animation" />
            </div>
            {[0,1,2,3,4,5,6,7].map(i => (
              <div key={i} className="scene-element" style={{ position: 'absolute', bottom: `${10 + (i % 3) * 15}%`, left: `${30 + (i % 4) * 10}%`, zIndex: 3 }}>
                <Samosa size={30 + (i % 3) * 10} className="float-animation" />
              </div>
            ))}
            <Sparkle count={8} />
          </>
        );

      case 'mp-thief-revealed':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '20%', zIndex: 5 }}>
              <Motu size={120} mood="scared" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '20%', zIndex: 5 }}>
              <Patlu size={110} mood="thinking" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 6 }}>
              <Mouse size={60} className="anim-wobble" />
            </div>
            <Sparkle count={4} />
          </>
        );

      case 'mp-motu-angry-then-soft':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '30%', zIndex: 5 }}>
              <Motu size={140} mood="sad" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '25%', zIndex: 5 }}>
              <Patlu size={110} mood="worried" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Mouse size={45} className="anim-wobble" />
            </div>
            <Sparkle count={4} />
          </>
        );

      case 'mp-patlu-idea':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Patlu size={160} mood="excited" className="bounce-animation" />
            </div>
            <LightbulbIcon />
            <Sparkle count={8} />
          </>
        );

      case 'mp-chingum-joins':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <ChingumInspector size={130} mood="proud" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '8%', zIndex: 4 }}>
              <Motu size={100} mood="happy" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '8%', zIndex: 4 }}>
              <Patlu size={95} mood="happy" className="anim-breathe" />
            </div>
            <Sparkle count={5} />
          </>
        );

      case 'mp-building-home':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '15%', zIndex: 5 }}>
              <Motu size={120} mood="proud" className="anim-wobble" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Patlu size={110} mood="smart" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '10%', zIndex: 4 }}>
              <ChingumInspector size={100} mood="alert" className="anim-breathe" />
            </div>
            <Sparkle count={5} />
            <SpeedLines />
          </>
        );

      case 'mp-mouse-house-done':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '20%', zIndex: 5 }}>
              <Motu size={120} mood="happy" className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '20%', zIndex: 5 }}>
              <Patlu size={110} mood="happy" className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Mouse size={50} className="anim-hop" />
            </div>
            <Sparkle count={8} />
            <Confetti count={10} />
          </>
        );

      case 'mp-returning-samosas':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '20%', zIndex: 5 }}>
              <Motu size={120} mood="happy" className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '20%', zIndex: 5 }}>
              <Patlu size={110} mood="smart" className="anim-hop" />
            </div>
            {[0,1,2,3,4].map(i => (
              <div key={i} className="scene-element" style={{ position: 'absolute', bottom: `${20 + i * 7}%`, left: `${35 + i * 6}%`, zIndex: 3 }}>
                <Samosa size={35} className="float-animation" />
              </div>
            ))}
            <Sparkle count={5} />
            <Confetti count={6} />
          </>
        );

      case 'mp-motu-sneaks-samosa':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Motu size={160} mood="eating" className="anim-wobble" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '30%', right: '20%', zIndex: 4 }}>
              <Samosa size={50} className="float-animation" />
            </div>
            <Confetti count={5} />
          </>
        );

      case 'mp-town-celebration':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <ChingumInspector size={130} mood="proud" className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '8%', zIndex: 4 }}>
              <Motu size={110} mood="happy" className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '8%', zIndex: 4 }}>
              <Patlu size={100} mood="proud" className="bounce-animation" />
            </div>
            <Confetti count={15} />
            <Sparkle count={8} />
          </>
        );

      case 'mp-feast-begins':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '8%', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
              <SamosaShop size={200} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '15%', zIndex: 5 }}>
              <Motu size={130} mood="eating" className="anim-wobble" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '15%', zIndex: 5 }}>
              <Patlu size={110} mood="happy" className="anim-breathe" />
            </div>
            {[0,1,2].map(i => (
              <div key={i} className="scene-element" style={{ position: 'absolute', bottom: `${30 + i * 10}%`, left: `${25 + i * 15}%`, zIndex: 4 }}>
                <Samosa size={35} className="float-animation" />
              </div>
            ))}
            <Confetti count={12} />
            <Sparkle count={6} />
          </>
        );

      case 'mp-mice-visit':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '20%', zIndex: 5 }}>
              <Motu size={120} mood="happy" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '20%', zIndex: 5 }}>
              <Patlu size={110} mood="happy" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 6 }}>
              <Mouse size={55} className="anim-hop" />
            </div>
            <Sparkle count={6} />
            <Confetti count={8} />
          </>
        );

      case 'mp-friends-sunset':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '30%', zIndex: 5 }}>
              <Motu size={130} mood="happy" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '25%', zIndex: 5 }}>
              <Patlu size={120} mood="happy" className="anim-breathe" />
            </div>
            <SunsetGlow intensity={0.4} />
            <Sparkle count={5} />
          </>
        );

      case 'mp-motu-reply':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '30%', zIndex: 5 }}>
              <Motu size={140} mood="happy" className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', right: '25%', zIndex: 5 }}>
              <Patlu size={120} mood="happy" className="anim-breathe" />
            </div>
            <SunsetGlow intensity={0.35} />
            <Sparkle count={6} />
            <Confetti count={8} />
          </>
        );

      case 'mp-moral-scene':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Motu size={130} mood="happy" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '10%', zIndex: 4 }}>
              <Patlu size={110} mood="proud" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', right: '10%', zIndex: 4 }}>
              <ChingumInspector size={100} mood="alert" className="anim-breathe" />
            </div>
            <LightbulbIcon />
            <Sparkle count={10} />
            <SunsetGlow intensity={0.3} />
            <Confetti count={8} />
            <Birds count={4} />
          </>
        );

      // ==================== TWO-HEADED BIRD (bh-) ====================

      case 'bh-lake-intro':
        return (
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
        );

      case 'bh-bird-intro':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
              <Water />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <TwoHeadedBird size={150} mood="happy" className="anim-gentle-float" />
            </div>
          </>
        );

      case 'bh-shared-body':
        return (
          <>
            <Sparkle count={5} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <TwoHeadedBird size={160} mood="happy" className="anim-breathe" />
            </div>
          </>
        );

      case 'bh-happy-days':
        return (
          <>
            <Birds count={4} />
            <Sparkle count={8} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '45%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <TwoHeadedBird size={140} mood="happy" className="float-animation" />
            </div>
          </>
        );

      case 'bh-flying-together':
        return (
          <>
            <Birds count={5} />
            <Leaves count={6} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '55%', left: '40%', zIndex: 5 }}>
              <TwoHeadedBird size={150} mood="happy" className="float-animation" />
            </div>
          </>
        );

      case 'bh-finds-fruit':
        return (
          <>
            <Sparkle count={6} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <TwoHeadedBird size={150} mood="happy" className="anim-excited-bounce" />
            </div>
            {/* Golden fruit */}
            <div style={{ position: 'absolute', bottom: '22%', left: '48%', width: '30px', height: '30px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, #FFD700, #FFA000)', boxShadow: '0 0 15px rgba(255, 215, 0, 0.5)', zIndex: 6 }} />
          </>
        );

      case 'bh-eats-happily':
        return (
          <>
            <Sparkle count={8} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '45%', zIndex: 5 }}>
              <TwoHeadedBird size={150} mood="happy" className="anim-excited-bounce" />
            </div>
            {/* Golden fruit near mouth */}
            <div style={{ position: 'absolute', bottom: '38%', left: '52%', width: '30px', height: '30px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, #FFD700, #FFA000)', boxShadow: '0 0 15px rgba(255, 215, 0, 0.5)', zIndex: 6 }} />
          </>
        );

      case 'bh-second-head-wants':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <TwoHeadedBird size={150} mood="sad" className="anim-thinking-bob" />
            </div>
            {/* Golden fruit nearby */}
            <div style={{ position: 'absolute', bottom: '25%', left: '70%', width: '30px', height: '30px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, #FFD700, #FFA000)', boxShadow: '0 0 15px rgba(255, 215, 0, 0.5)', zIndex: 6 }} />
          </>
        );

      case 'bh-refuses':
        return (
          <>
            <DarkVignette intensity={0.3} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <TwoHeadedBird size={155} mood="angry" className="anim-wobble" />
            </div>
          </>
        );

      case 'bh-argument':
        return (
          <>
            <DarkVignette intensity={0.4} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '26%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <TwoHeadedBird size={160} mood="angry" className="shake-animation" />
            </div>
          </>
        );

      case 'bh-escalation':
        return (
          <>
            <DarkVignette intensity={0.5} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '45%', zIndex: 5 }}>
              <TwoHeadedBird size={160} mood="angry" className="anim-wobble" />
            </div>
          </>
        );

      case 'bh-hurt-and-angry':
        return (
          <>
            <DarkVignette intensity={0.55} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '24%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <TwoHeadedBird size={150} mood="sad" className="anim-scared-shiver" />
            </div>
          </>
        );

      case 'bh-plans-revenge':
        return (
          <>
            <DarkVignette intensity={0.6} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <TwoHeadedBird size={150} mood="angry" className="anim-thinking-bob" />
            </div>
          </>
        );

      case 'bh-finds-poison':
        return (
          <>
            <DarkVignette intensity={0.6} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '42%', zIndex: 5 }}>
              <TwoHeadedBird size={150} mood="angry" className="anim-thinking-bob" />
            </div>
            {/* Poison berry */}
            <div className="pulse-animation" style={{ position: 'absolute', bottom: '22%', left: '62%', width: '24px', height: '24px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, #FF1744, #B71C1C)', boxShadow: '0 0 12px rgba(255, 23, 68, 0.5)', zIndex: 6 }} />
          </>
        );

      case 'bh-warning':
        return (
          <>
            <DarkVignette intensity={0.6} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '26%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <TwoHeadedBird size={155} mood="angry" className="anim-scared-shiver" />
            </div>
            {/* Poison berry */}
            <div className="pulse-animation" style={{ position: 'absolute', bottom: '28%', left: '55%', width: '24px', height: '24px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, #FF1744, #B71C1C)', boxShadow: '0 0 12px rgba(255, 23, 68, 0.5)', zIndex: 6 }} />
          </>
        );

      case 'bh-eats-poison':
        return (
          <>
            <DarkVignette intensity={0.7} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <TwoHeadedBird size={150} mood="sad" className="shake-animation" />
            </div>
            {/* Poison berry near mouth */}
            <div className="pulse-animation" style={{ position: 'absolute', bottom: '35%', left: '52%', width: '24px', height: '24px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, #FF1744, #B71C1C)', boxShadow: '0 0 12px rgba(255, 23, 68, 0.5)', zIndex: 6 }} />
          </>
        );

      case 'bh-poison-spreads':
        return (
          <>
            <DarkVignette intensity={0.75} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <TwoHeadedBird size={150} mood="sick" className="shake-animation" />
            </div>
          </>
        );

      case 'bh-both-sick':
        return (
          <>
            <DarkVignette intensity={0.7} />
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
              <Water />
            </svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <TwoHeadedBird size={145} mood="sick" className="anim-scared-shiver" />
            </div>
          </>
        );

      case 'bh-collapse':
        return (
          <>
            <DarkVignette intensity={0.7} />
            <Leaves count={3} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%) rotate(15deg)', zIndex: 5 }}>
              <TwoHeadedBird size={140} mood="sick" className="anim-breathe" />
            </div>
          </>
        );

      case 'bh-realization':
        return (
          <>
            <DarkVignette intensity={0.65} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%) rotate(10deg)', zIndex: 5 }}>
              <TwoHeadedBird size={140} mood="sad" className="anim-breathe" />
            </div>
          </>
        );

      case 'bh-regret':
        return (
          <>
            <DarkVignette intensity={0.5} />
            <Sparkle count={2} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <TwoHeadedBird size={140} mood="sad" className="anim-breathe" />
            </div>
          </>
        );

      case 'bh-farewell':
        return (
          <>
            <DarkVignette intensity={0.4} />
            <Sparkle count={3} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '14%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <TwoHeadedBird size={140} mood="sad" className="anim-gentle-float" />
            </div>
          </>
        );

      case 'bh-lesson-unity':
        return (
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
        );

      case 'bh-unity-message':
        return (
          <>
            <SunsetGlow intensity={0.5} />
            <Sparkle count={8} />
            <Birds count={4} />
          </>
        );

      case 'bh-wisdom':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
              <Water />
            </svg>
            <Birds count={3} />
            <SunsetGlow intensity={0.4} />
            <Sparkle count={6} />
            <Fireflies count={8} />
          </>
        );

      case 'bh-moral-scene':
        return (
          <>
            <SunsetGlow intensity={0.5} />
            <Sparkle count={10} />
            <Confetti count={6} />
            <Birds count={4} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '35%', left: '50%', transform: 'translateX(-50%)', zIndex: 5, opacity: 0.85 }}>
              <TwoHeadedBird size={140} mood="happy" className="anim-gentle-float" />
            </div>
          </>
        );

      // ==================== STORK AND CRAB STORY (sc-) ====================

      case 'sc-lake-scene':
        return (
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
        );

      case 'sc-old-stork-intro':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '40%', zIndex: 6 }}>
              <Stork size={160} mood="weary" className="anim-breathe" />
            </div>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 3 }}>
              <Water />
            </svg>
          </>
        );

      case 'sc-cant-catch-fish':
        return (
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
        );

      case 'sc-sad-hungry':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '42%', zIndex: 6 }}>
              <Stork size={140} mood="weary" className="anim-breathe" />
            </div>
            <DarkVignette intensity={0.7} />
          </>
        );

      case 'sc-devious-idea':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '38%', zIndex: 6 }}>
              <Stork size={150} mood="scheming" className="anim-thinking-bob" />
            </div>
            <LightbulbIcon />
            <DarkVignette intensity={0.4} />
          </>
        );

      case 'sc-tells-fish':
        return (
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
        );

      case 'sc-fish-panic':
        return (
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
        );

      case 'sc-stork-offers':
        return (
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
        );

      case 'sc-fish-agree':
        return (
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
        );

      case 'sc-carries-fish':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', top: '20%', left: '35%', zIndex: 6 }}>
              <Stork size={150} mood="greedy" className="float-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', top: '35%', left: '42%', zIndex: 7 }}>
              <Fish size={35} color="#4a90d9" className="anim-wiggle" />
            </div>
            <Birds count={2} />
          </>
        );

      case 'sc-eats-fish':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '38%', zIndex: 6 }}>
              <Stork size={150} mood="villainous" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '30%', width: '120px', height: '20px', background: 'linear-gradient(to right, #6b7280, #9ca3af, #6b7280)', borderRadius: '50%', zIndex: 3 }} />
            <DarkVignette intensity={0.6} />
          </>
        );

      case 'sc-pile-of-bones':
        return (
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
        );

      case 'sc-crab-wants-to-go':
        return (
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
        );

      case 'sc-stork-agrees':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '35%', zIndex: 6 }}>
              <Stork size={150} mood="greedy" className="anim-sway" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '16%', right: '30%', zIndex: 5 }}>
              <Crab size={80} mood="calm" className="anim-breathe" />
            </div>
            <DarkVignette intensity={0.35} />
          </>
        );

      case 'sc-crab-rides':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', top: '22%', left: '32%', zIndex: 6 }}>
              <Stork size={150} mood="greedy" className="float-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', top: '18%', left: '40%', zIndex: 7 }}>
              <Crab size={60} mood="calm" className="float-animation" />
            </div>
            <Birds count={3} />
          </>
        );

      case 'sc-sees-bones':
        return (
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
        );

      case 'sc-crab-realizes':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '32%', zIndex: 7 }}>
              <Crab size={140} mood="fierce" className="anim-breathe" />
            </div>
            <DarkVignette intensity={0.6} />
          </>
        );

      case 'sc-crab-clamps':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '30%', zIndex: 6 }}>
              <Stork size={150} mood="begging" className="shake-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '45%', left: '38%', zIndex: 8 }}>
              <Crab size={70} mood="determined" className="pulse-animation" />
            </div>
            <DarkVignette intensity={0.5} />
          </>
        );

      case 'sc-stork-struggles':
        return (
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
        );

      case 'sc-stork-defeated':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '25%', zIndex: 5, transform: 'rotate(15deg)' }}>
              <Stork size={140} mood="begging" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', right: '30%', zIndex: 7 }}>
              <Crab size={100} mood="triumphant" className="anim-celebrate" />
            </div>
          </>
        );

      case 'sc-crab-returns':
        return (
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
        );

      case 'sc-tells-truth':
        return (
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
        );

      case 'sc-fish-grateful':
        return (
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
        );

      case 'sc-lesson-deception':
        return (
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
        );

      case 'sc-wisdom':
        return (
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
        );

      case 'sc-moral-scene':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '40%', zIndex: 7 }}>
              <Crab size={110} mood="triumphant" className="anim-celebrate" />
            </div>
            <Sparkle count={12} />
            <SunsetGlow intensity={0.5} />
            <Confetti count={10} />
            <Birds count={4} />
          </>
        );

      // ===== Hanuman-Sun Story =====
      case 'hs-kishkindha-dawn':
        return (
          <>
            <Sparkle count={8} />
            <Birds count={5} />
            <SunsetGlow intensity={0.6} />
          </>
        );

      case 'hs-baby-hanuman-wakes':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '35%', zIndex: 5 }}>
              <Hanuman size={100} mood="baby" className="anim-wobble" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '55%', zIndex: 4 }}>
              <Anjana size={130} mood="loving" className="anim-breathe" />
            </div>
            <Sparkle count={4} />
          </>
        );

      case 'hs-sees-the-sun':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '30%', zIndex: 5 }}>
              <Hanuman size={100} mood="baby" className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '70%', left: '60%', zIndex: 3 }}>
              <Surya size={150} mood="calm" className="pulse-animation" />
            </div>
            <SunsetGlow intensity={0.4} />
          </>
        );

      case 'hs-hanuman-leaps':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '45%', left: '40%', zIndex: 6 }}>
              <Hanuman size={130} mood="flying" className="float-animation" />
            </div>
            <SpeedLines />
          </>
        );

      case 'hs-flying-higher':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '55%', left: '45%', zIndex: 6 }}>
              <Hanuman size={130} mood="flying" className="float-animation" />
            </div>
            <Birds count={4} />
          </>
        );

      case 'hs-surya-surprised':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '60%', left: '55%', zIndex: 4 }}>
              <Surya size={150} mood="surprised" className="pulse-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '40%', left: '30%', zIndex: 5 }}>
              <Hanuman size={120} mood="flying" className="float-animation" />
            </div>
          </>
        );

      case 'hs-indra-worried':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '65%', left: '50%', zIndex: 5 }}>
              <Indra size={140} mood="worried" className="anim-breathe" />
            </div>
            <DarkVignette intensity={0.3} />
          </>
        );

      case 'hs-vajra-strikes':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '60%', left: '50%', zIndex: 5 }}>
              <Indra size={140} mood="angry" className="anim-wobble" />
            </div>
            <SpeedLines />
            <DarkVignette intensity={0.6} />
          </>
        );

      case 'hs-vayu-angry':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '45%', zIndex: 5 }}>
              <Vayu size={150} mood="angry" className="anim-sway" />
            </div>
            <DarkVignette intensity={0.7} />
          </>
        );

      case 'hs-world-suffers':
        return (
          <>
            <DarkVignette intensity={0.8} />
            <DustMotes count={8} />
          </>
        );

      case 'hs-gods-bless':
        return (
          <>
            <Sparkle count={12} />
            <SunsetGlow intensity={0.6} />
          </>
        );

      case 'hs-hanuman-healed':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '45%', zIndex: 5 }}>
              <Hanuman size={130} mood="healed" className="anim-celebrate" />
            </div>
            <Sparkle count={8} />
            <Confetti count={8} />
          </>
        );

      case 'hs-anjana-love':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '55%', zIndex: 4 }}>
              <Anjana size={130} mood="loving" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '35%', zIndex: 5 }}>
              <Hanuman size={90} mood="baby" className="anim-hop" />
            </div>
            <Sparkle count={5} />
          </>
        );

      case 'hs-moral-ending':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '45%', zIndex: 5 }}>
              <Hanuman size={140} mood="blessed" className="float-animation" />
            </div>
            <Sparkle count={10} />
            <SunsetGlow intensity={0.5} />
          </>
        );

      // ===== Ganesha-Moon Story =====
      case 'gm-kailash-evening':
        return (
          <>
            <Stars2 count={8} />
            <Moon size={80} />
            <DarkVignette intensity={0.3} />
          </>
        );

      case 'gm-birthday-feast':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '42%', zIndex: 5 }}>
              <Ganesha size={140} mood="happy" className="anim-celebrate" />
            </div>
            <Sparkle count={8} />
            <Confetti count={8} />
          </>
        );

      case 'gm-eating-modaks':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '40%', zIndex: 5 }}>
              <Ganesha size={160} mood="happy" className="anim-wobble" />
            </div>
            <Sparkle count={4} />
          </>
        );

      case 'gm-riding-mushak':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '42%', zIndex: 5 }}>
              <Ganesha size={140} mood="playful" className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '45%', zIndex: 4 }}>
              <Mouse size={60} className="anim-hop" />
            </div>
          </>
        );

      case 'gm-ganesha-falls':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '45%', zIndex: 5 }}>
              <Ganesha size={130} mood="sad" className="anim-wobble" />
            </div>
            <SpeedLines />
          </>
        );

      case 'gm-moon-laughs':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '65%', left: '55%', zIndex: 4 }}>
              <MoonGod size={130} mood="calm" className="float-animation" />
            </div>
            <Stars2 count={6} />
          </>
        );

      case 'gm-ganesha-angry':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '42%', zIndex: 5 }}>
              <Ganesha size={140} mood="wise" className="anim-breathe" />
            </div>
            <DarkVignette intensity={0.5} />
          </>
        );

      case 'gm-moon-vanishes':
        return (
          <>
            <DarkVignette intensity={0.7} />
            <Stars2 count={4} />
          </>
        );

      case 'gm-world-dark':
        return (
          <>
            <DarkVignette intensity={0.8} />
            <DustMotes count={6} />
          </>
        );

      case 'gm-gods-plead':
        return (
          <>
            <Sparkle count={8} />
            <FloatingBubbles count={5} />
          </>
        );

      case 'gm-moon-apologizes':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '55%', left: '50%', zIndex: 5 }}>
              <MoonGod size={130} mood="embarrassed" className="anim-breathe" />
            </div>
            <DarkVignette intensity={0.3} />
          </>
        );

      case 'gm-ganesha-forgives':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '42%', zIndex: 5 }}>
              <Ganesha size={140} mood="wise" className="anim-breathe" />
            </div>
            <Sparkle count={8} />
          </>
        );

      case 'gm-moon-returns':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '60%', left: '55%', zIndex: 4 }}>
              <MoonGod size={120} mood="calm" className="float-animation" />
            </div>
            <Stars2 count={6} />
            <Sparkle count={6} />
          </>
        );

      case 'gm-celebration':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '42%', zIndex: 5 }}>
              <Ganesha size={140} mood="happy" className="anim-celebrate" />
            </div>
            <Confetti count={10} />
            <Sparkle count={8} />
            <Fireflies count={6} />
          </>
        );

      case 'gm-moral-ending':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '42%', zIndex: 5 }}>
              <Ganesha size={140} mood="wise" className="float-animation" />
            </div>
            <SunsetGlow intensity={0.5} />
            <Sparkle count={8} />
          </>
        );

      // ===== Prahlad-Faith Story =====
      case 'pf-demon-kingdom':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '45%', zIndex: 5 }}>
              <Hiranyakashipu size={150} mood="angry" className="anim-breathe" />
            </div>
            <DarkVignette intensity={0.6} />
            <FireGlow intensity={0.4} />
          </>
        );

      case 'pf-prahlad-born':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '45%', zIndex: 5 }}>
              <Prahlad size={110} mood="happy" className="anim-hop" />
            </div>
            <Sparkle count={8} />
          </>
        );

      case 'pf-father-angry':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '55%', zIndex: 4 }}>
              <Hiranyakashipu size={150} mood="angry" className="anim-wobble" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '30%', zIndex: 5 }}>
              <Prahlad size={100} mood="brave" className="anim-breathe" />
            </div>
          </>
        );

      case 'pf-prahlad-brave':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '45%', zIndex: 5 }}>
              <Prahlad size={110} mood="praying" className="anim-breathe" />
            </div>
            <Sparkle count={8} />
          </>
        );

      case 'pf-evil-plans':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '35%', zIndex: 5 }}>
              <Hiranyakashipu size={140} mood="angry" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '60%', zIndex: 4 }}>
              <Holika size={130} mood="evil" className="anim-sway" />
            </div>
            <DarkVignette intensity={0.6} />
          </>
        );

      case 'pf-holika-arrives':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '45%', zIndex: 5 }}>
              <Holika size={140} mood="evil" className="anim-sway" />
            </div>
            <FireGlow intensity={0.5} />
          </>
        );

      case 'pf-fire-prepared':
        return (
          <>
            <FireGlow intensity={0.8} />
            <DarkVignette intensity={0.5} />
          </>
        );

      case 'pf-prahlad-faith':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '45%', zIndex: 5 }}>
              <Prahlad size={110} mood="praying" className="anim-breathe" />
            </div>
            <Sparkle count={8} />
            <FireGlow intensity={0.6} />
          </>
        );

      case 'pf-miracle-happens':
        return (
          <>
            <Sparkle count={12} />
            <FireGlow intensity={0.5} />
          </>
        );

      case 'pf-holika-defeated':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '45%', zIndex: 5 }}>
              <Holika size={120} mood="burning" className="anim-wobble" />
            </div>
            <FireGlow intensity={0.7} />
            <Confetti count={6} />
          </>
        );

      case 'pf-prahlad-emerges':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '45%', zIndex: 5 }}>
              <Prahlad size={120} mood="happy" className="anim-celebrate" />
            </div>
            <Sparkle count={10} />
            <Confetti count={8} />
          </>
        );

      case 'pf-narasimha-appears':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '42%', zIndex: 6 }}>
              <Narasimha size={160} mood="fierce" className="anim-wobble" />
            </div>
            <SpeedLines />
            <DarkVignette intensity={0.5} />
          </>
        );

      case 'pf-evil-destroyed':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '42%', zIndex: 6 }}>
              <Narasimha size={150} mood="protective" className="anim-breathe" />
            </div>
            <Confetti count={10} />
          </>
        );

      case 'pf-prahlad-king':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '45%', zIndex: 5 }}>
              <Prahlad size={130} mood="happy" className="float-animation" />
            </div>
            <Sparkle count={8} />
            <SunsetGlow intensity={0.5} />
          </>
        );

      case 'pf-holi-celebration':
        return (
          <>
            <Confetti count={15} />
            <Sparkle count={10} />
            <Fireflies count={6} />
          </>
        );

      // ===== Shinchan-Homework Story =====
      case 'shinchan-bedroom-morning':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '45%', zIndex: 5 }}>
              <Shinchan size={120} mood="lazy" className="anim-wobble" />
            </div>
          </>
        );

      case 'living-room-tv':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '40%', zIndex: 5 }}>
              <Shinchan size={120} mood="lazy" className="anim-breathe" />
            </div>
          </>
        );

      case 'garden-playing':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '42%', zIndex: 5 }}>
              <Shinchan size={120} mood="proud" className="anim-hop" />
            </div>
            <Birds count={3} />
          </>
        );

      case 'bedroom-night':
        return (
          <>
            <DarkVignette intensity={0.6} />
            <Stars2 count={5} />
          </>
        );

      case 'dream-sequence-start':
        return (
          <>
            <FloatingBubbles count={6} />
            <DarkVignette intensity={0.4} />
          </>
        );

      case 'monster-appears':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '45%', zIndex: 6 }}>
              <HomeworkMonster size={160} mood="scary" className="anim-wobble" />
            </div>
            <DarkVignette intensity={0.6} />
          </>
        );

      case 'monster-chases':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '55%', zIndex: 6 }}>
              <HomeworkMonster size={150} mood="scary" className="bounce-animation" />
            </div>
            <SpeedLines />
          </>
        );

      case 'hiding-behind-desk':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '40%', zIndex: 5 }}>
              <Shinchan size={100} mood="scared" className="anim-wobble" />
            </div>
            <DarkVignette intensity={0.5} />
          </>
        );

      case 'fighting-with-pencil':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '40%', zIndex: 5 }}>
              <Shinchan size={120} mood="determined" className="anim-hop" />
            </div>
            <SpeedLines />
          </>
        );

      case 'monster-shrinking':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', zIndex: 5 }}>
              <HomeworkMonster size={80} mood="shrinking" className="anim-wobble" />
            </div>
            <Sparkle count={6} />
          </>
        );

      case 'waking-up':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '45%', zIndex: 5 }}>
              <Shinchan size={120} mood="determined" className="anim-hop" />
            </div>
            <SunsetGlow intensity={0.4} />
          </>
        );

      case 'doing-homework':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '45%', zIndex: 5 }}>
              <Shinchan size={120} mood="determined" className="anim-breathe" />
            </div>
            <Sparkle count={5} />
          </>
        );

      case 'showing-mom':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '42%', zIndex: 5 }}>
              <Shinchan size={120} mood="proud" className="anim-celebrate" />
            </div>
            <Confetti count={8} />
          </>
        );

      case 'school-happy':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '42%', zIndex: 5 }}>
              <Shinchan size={120} mood="proud" className="anim-hop" />
            </div>
            <Sparkle count={6} />
            <Birds count={3} />
          </>
        );

      // ===== Doraemon-Gadget Story =====
      case 'nobita-crying-room':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '45%', zIndex: 5 }}>
              <Nobita size={120} mood="lazy" className="anim-wobble" />
            </div>
            <DarkVignette intensity={0.4} />
          </>
        );

      case 'doraemon-appears':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '45%', zIndex: 5 }}>
              <Doraemon size={130} mood="happy" className="bounce-animation" />
            </div>
            <Sparkle count={6} />
          </>
        );

      case 'nobita-request':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '30%', zIndex: 5 }}>
              <Nobita size={110} mood="lazy" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '55%', zIndex: 4 }}>
              <Doraemon size={120} mood="thinking" className="anim-breathe" />
            </div>
          </>
        );

      case 'gadget-reveal':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '45%', zIndex: 5 }}>
              <Doraemon size={130} mood="happy" className="anim-celebrate" />
            </div>
            <Sparkle count={8} />
            <Confetti count={6} />
          </>
        );

      case 'school-next-day':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '45%', zIndex: 5 }}>
              <Nobita size={120} mood="amazed" className="anim-hop" />
            </div>
            <Birds count={3} />
          </>
        );

      case 'too-many-friends':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '42%', zIndex: 5 }}>
              <Nobita size={120} mood="amazed" className="anim-wobble" />
            </div>
            <FloatingBubbles count={6} />
          </>
        );

      case 'shizuka-scene':
        return (
          <>
            <Sparkle count={6} />
            <SunsetGlow intensity={0.4} />
          </>
        );

      case 'realization':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '45%', zIndex: 5 }}>
              <Nobita size={120} mood="working" className="anim-breathe" />
            </div>
            <DarkVignette intensity={0.3} />
          </>
        );

      case 'removing-badge':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '45%', zIndex: 5 }}>
              <Nobita size={120} mood="working" className="anim-breathe" />
            </div>
            <DustMotes count={4} />
          </>
        );

      case 'being-kind':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '45%', zIndex: 5 }}>
              <Nobita size={120} mood="working" className="anim-hop" />
            </div>
            <Sparkle count={6} />
          </>
        );

      case 'friends-returning':
        return (
          <>
            <Sparkle count={8} />
            <Birds count={4} />
          </>
        );

      case 'playing-together':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '42%', zIndex: 5 }}>
              <Nobita size={120} mood="proud" className="anim-celebrate" />
            </div>
            <Confetti count={8} />
          </>
        );

      case 'returning-badge':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '55%', zIndex: 4 }}>
              <Doraemon size={120} mood="happy" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '30%', zIndex: 5 }}>
              <Nobita size={110} mood="proud" className="anim-hop" />
            </div>
          </>
        );

      case 'doraemon-smile':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '45%', zIndex: 5 }}>
              <Doraemon size={130} mood="happy" className="anim-celebrate" />
            </div>
            <Sparkle count={8} />
            <Confetti count={6} />
          </>
        );

      case 'ending':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '55%', zIndex: 4 }}>
              <Doraemon size={120} mood="happy" className="float-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '30%', zIndex: 5 }}>
              <Nobita size={110} mood="proud" className="anim-hop" />
            </div>
            <Sparkle count={8} />
            <SunsetGlow intensity={0.5} />
          </>
        );

      // ===== Hercules-Apples Story =====
      case 'mount-olympus':
        return (
          <>
            <Sparkle count={8} />
            <SunsetGlow intensity={0.5} />
            <Birds count={4} />
          </>
        );

      case 'kings-court':
        return (
          <>
            <DarkVignette intensity={0.3} />
            <Sparkle count={4} />
          </>
        );

      case 'journey-begins':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '35%', zIndex: 5 }}>
              <Hercules size={140} mood="determined" className="anim-breathe" />
            </div>
            <Birds count={3} />
          </>
        );

      case 'meeting-atlas':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '55%', zIndex: 4 }}>
              <Atlas size={160} mood="tired" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '25%', zIndex: 5 }}>
              <Hercules size={130} mood="determined" className="anim-breathe" />
            </div>
          </>
        );

      case 'hercules-thinks':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '45%', zIndex: 5 }}>
              <Hercules size={130} mood="thinking" className="anim-breathe" />
            </div>
            <DustMotes count={4} />
          </>
        );

      case 'clever-plan':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '45%', zIndex: 5 }}>
              <Hercules size={130} mood="clever" className="anim-breathe" />
            </div>
            <Sparkle count={6} />
          </>
        );

      case 'holding-sky':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '45%', zIndex: 5 }}>
              <Hercules size={140} mood="determined" className="anim-breathe" />
            </div>
            <DarkVignette intensity={0.4} />
          </>
        );

      case 'atlas-in-garden':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '45%', zIndex: 5 }}>
              <Atlas size={140} mood="tired" className="anim-breathe" />
            </div>
            <Sparkle count={5} />
            <Leaves count={4} />
          </>
        );

      case 'atlas-trick':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '55%', zIndex: 4 }}>
              <Atlas size={140} mood="tricked" className="anim-wobble" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '25%', zIndex: 5 }}>
              <Hercules size={130} mood="clever" className="anim-breathe" />
            </div>
          </>
        );

      case 'outsmarting-atlas':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '45%', zIndex: 5 }}>
              <Hercules size={130} mood="clever" className="anim-hop" />
            </div>
            <SpeedLines />
          </>
        );

      case 'tricked':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '45%', zIndex: 5 }}>
              <Atlas size={150} mood="angry" className="anim-wobble" />
            </div>
            <DarkVignette intensity={0.4} />
          </>
        );

      case 'journey-home':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '40%', zIndex: 5 }}>
              <Hercules size={130} mood="triumphant" className="anim-hop" />
            </div>
            <Birds count={4} />
            <SunsetGlow intensity={0.5} />
          </>
        );

      case 'returning-to-king':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '45%', zIndex: 5 }}>
              <Hercules size={130} mood="triumphant" className="anim-celebrate" />
            </div>
            <Sparkle count={8} />
          </>
        );

      case 'lesson-learned':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '45%', zIndex: 5 }}>
              <Hercules size={140} mood="triumphant" className="float-animation" />
            </div>
            <Confetti count={8} />
            <Sparkle count={8} />
            <SunsetGlow intensity={0.5} />
          </>
        );

      // ===== Icarus-Wings Story =====
      case 'tower-prison':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '35%', zIndex: 5 }}>
              <Icarus size={110} mood="excited" className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '58%', zIndex: 4 }}>
              <Daedalus size={120} mood="warning" className="anim-breathe" />
            </div>
            <DarkVignette intensity={0.5} />
          </>
        );

      case 'watching-birds':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '40%', zIndex: 5 }}>
              <Icarus size={110} mood="excited" className="anim-hop" />
            </div>
            <Birds count={5} />
          </>
        );

      case 'daedalus-idea':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '45%', zIndex: 5 }}>
              <Daedalus size={130} mood="warning" className="anim-breathe" />
            </div>
            <Sparkle count={6} />
          </>
        );

      case 'building-wings':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '45%', zIndex: 5 }}>
              <Daedalus size={130} mood="warning" className="anim-breathe" />
            </div>
            <DustMotes count={5} />
          </>
        );

      case 'wings-ready':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '30%', zIndex: 5 }}>
              <Icarus size={110} mood="excited" className="anim-celebrate" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '58%', zIndex: 4 }}>
              <Daedalus size={120} mood="warning" className="anim-breathe" />
            </div>
            <Sparkle count={6} />
          </>
        );

      case 'fathers-warning':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '40%', zIndex: 5 }}>
              <Daedalus size={130} mood="warning" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '65%', zIndex: 4 }}>
              <Icarus size={110} mood="excited" className="anim-hop" />
            </div>
          </>
        );

      case 'taking-flight':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '45%', left: '45%', zIndex: 5 }}>
              <Icarus size={120} mood="flying" className="float-animation" />
            </div>
            <SpeedLines />
          </>
        );

      case 'flying-together':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '50%', left: '35%', zIndex: 5 }}>
              <Icarus size={110} mood="flying" className="float-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '40%', left: '58%', zIndex: 4 }}>
              <Daedalus size={120} mood="warning" className="float-animation" />
            </div>
            <Birds count={4} />
          </>
        );

      case 'temptation':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '50%', left: '35%', zIndex: 5 }}>
              <Icarus size={110} mood="flying" className="float-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '70%', left: '60%', zIndex: 3 }}>
              <Surya size={140} mood="calm" className="pulse-animation" />
            </div>
          </>
        );

      case 'flying-too-high':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '65%', left: '40%', zIndex: 5 }}>
              <Icarus size={110} mood="flying" className="float-animation" />
            </div>
            <SpeedLines />
            <div className="scene-element" style={{ position: 'absolute', bottom: '75%', left: '60%', zIndex: 3 }}>
              <Surya size={140} mood="calm" className="pulse-animation" />
            </div>
          </>
        );

      case 'wax-melting':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '50%', left: '45%', zIndex: 5 }}>
              <Icarus size={120} mood="falling" className="anim-wobble" />
            </div>
            <FireGlow intensity={0.5} />
          </>
        );

      case 'the-fall':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '45%', zIndex: 5 }}>
              <Icarus size={120} mood="falling" className="anim-wobble" />
            </div>
            <SpeedLines />
            <DarkVignette intensity={0.5} />
          </>
        );

      case 'rescue':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '45%', zIndex: 5 }}>
              <Daedalus size={130} mood="worried" className="anim-breathe" />
            </div>
            <FloatingBubbles count={6} />
          </>
        );

      case 'lesson-on-beach':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '30%', zIndex: 5 }}>
              <Icarus size={110} mood="humble" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '58%', zIndex: 4 }}>
              <Daedalus size={120} mood="relieved" className="anim-breathe" />
            </div>
            <SunsetGlow intensity={0.5} />
          </>
        );

      case 'walking-free':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '30%', zIndex: 5 }}>
              <Icarus size={110} mood="humble" className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '55%', zIndex: 4 }}>
              <Daedalus size={120} mood="relieved" className="anim-breathe" />
            </div>
            <Birds count={4} />
            <SunsetGlow intensity={0.5} />
          </>
        );

      // ===== KRISHNA LIFTS GOVARDHAN =====
      case 'kg-vrindavan-village':
        return (
          <>
            <VillageSilhouette />
            <div className="scene-element" style={{ position: 'absolute', top: '15%', right: '15%', zIndex: 2 }}>
              <GovardhanHill size={140} />
            </div>
            <Birds count={5} />
            <Sparkle count={6} />
            <SunsetGlow intensity={0.3} />
          </>
        );
      case 'kg-krishna-with-cows':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '35%', zIndex: 5 }}>
              <Krishna size={130} mood="playing" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '10%', zIndex: 3 }}>
              <Cow size={100} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '15%', zIndex: 3 }}>
              <Cow size={90} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', top: '10%', right: '20%', zIndex: 2 }}>
              <GovardhanHill size={120} />
            </div>
            <Birds count={4} />
            <Sparkle count={5} />
          </>
        );
      case 'kg-villagers-prepare-puja':
        return (
          <>
            <VillageSilhouette />
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Villagers count={4} />
            </div>
            <Sparkle count={8} />
            <FireGlow color="#FF9800" intensity={0.3} />
          </>
        );
      case 'kg-yashoda-explains':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '30%', zIndex: 5 }}>
              <Yashoda size={140} mood="happy" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '30%', zIndex: 5 }}>
              <Krishna size={110} mood="curious" className="anim-breathe" />
            </div>
            <SunsetGlow intensity={0.3} />
          </>
        );
      case 'kg-krishna-questions':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Krishna size={140} mood="calm" className="float-animation" />
            </div>
            <Sparkle count={8} />
            <FireGlow color="#FFD600" intensity={0.2} />
          </>
        );
      case 'kg-villagers-convinced':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Villagers count={5} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '15%', zIndex: 6 }}>
              <Krishna size={110} mood="happy" className="bounce-animation" />
            </div>
            <Sparkle count={5} />
          </>
        );
      case 'kg-govardhan-puja':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
              <GovardhanHill size={180} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Villagers count={5} />
            </div>
            <Sparkle count={12} />
            <Confetti />
          </>
        );
      case 'kg-indra-angry':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Indra size={160} mood="angry" className="shake-animation" />
            </div>
            <DarkVignette intensity={0.5} />
            <FireGlow color="#1A237E" intensity={0.4} />
            <Lightning />
          </>
        );
      case 'kg-storm-clouds-gather':
        return (
          <>
            <DarkVignette intensity={0.6} />
            <div className="scene-element" style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
              <svg width="300" height="100" viewBox="0 0 300 100">
                {[30, 90, 150, 210, 270].map((x, i) => (
                  <ellipse key={i} cx={x} cy={50} rx={40} ry={30} fill="#263238" opacity={0.8 - i * 0.05} />
                ))}
              </svg>
            </div>
            <Lightning />
            <Rain intensity={0.8} />
          </>
        );
      case 'kg-terrible-rain':
        return (
          <>
            <DarkVignette intensity={0.7} />
            <Rain intensity={1} />
            <Lightning />
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Villagers count={3} className="shake-animation" />
            </div>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}><Water y={350} /></svg>
          </>
        );
      case 'kg-villagers-run-to-krishna':
        return (
          <>
            <DarkVignette intensity={0.5} />
            <Rain intensity={0.7} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', right: '25%', zIndex: 5 }}>
              <Krishna size={130} mood="calm" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '15%', zIndex: 4 }}>
              <Yashoda size={120} mood="worried" className="shake-animation" />
            </div>
          </>
        );
      case 'kg-krishna-walks-to-hill':
        return (
          <>
            <DarkVignette intensity={0.4} />
            <Rain intensity={0.6} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Krishna size={140} mood="calm" className="float-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', top: '10%', right: '10%', zIndex: 2 }}>
              <GovardhanHill size={130} />
            </div>
            <FireGlow color="#FFD600" intensity={0.4} />
          </>
        );
      case 'kg-krishna-lifts-mountain':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
              <GovardhanHill size={200} lifted={true} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Krishna size={140} mood="lifting" className="float-animation" />
            </div>
            <Sparkle count={15} />
            <FireGlow color="#FFD600" intensity={0.5} />
            <Confetti />
          </>
        );
      case 'kg-villagers-shelter':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', top: '2%', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
              <GovardhanHill size={220} lifted={true} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Villagers count={5} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '15%', zIndex: 3 }}>
              <Cow size={80} />
            </div>
            <Sparkle count={10} />
          </>
        );
      case 'kg-seven-days-pass':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
              <GovardhanHill size={200} lifted={true} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Krishna size={130} mood="calm" className="float-animation" />
            </div>
            <Sparkle count={8} />
            <SunsetGlow intensity={0.3} />
          </>
        );
      case 'kg-indra-shocked':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Indra size={150} mood="worried" className="shake-animation" />
            </div>
            <DarkVignette intensity={0.3} />
            <Lightning />
            <Sparkle count={5} />
          </>
        );
      case 'kg-indra-realizes':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Indra size={140} mood="worried" className="anim-breathe" />
            </div>
            <Sparkle count={10} />
            <SunsetGlow intensity={0.4} />
          </>
        );
      case 'kg-storm-stops':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
              <svg width="300" height="30" viewBox="0 0 300 30">
                <defs><linearGradient id="rainbow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F44336" /><stop offset="17%" stopColor="#FF9800" />
                  <stop offset="33%" stopColor="#FFEB3B" /><stop offset="50%" stopColor="#4CAF50" />
                  <stop offset="67%" stopColor="#2196F3" /><stop offset="83%" stopColor="#3F51B5" />
                  <stop offset="100%" stopColor="#9C27B0" />
                </linearGradient></defs>
                <path d="M10 28 Q150 -10, 290 28" stroke="url(#rainbow)" strokeWidth="6" fill="none" />
              </svg>
            </div>
            <Sparkle count={15} />
            <SunsetGlow intensity={0.5} />
            <Confetti />
            <Birds count={5} />
          </>
        );
      case 'kg-indra-bows':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '30%', zIndex: 5 }}>
              <Indra size={130} mood="worried" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '24%', right: '30%', zIndex: 5 }}>
              <Krishna size={120} mood="calm" className="float-animation" />
            </div>
            <Sparkle count={12} />
            <SunsetGlow intensity={0.4} />
          </>
        );
      case 'kg-celebration':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Krishna size={140} mood="happy" className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '10%', zIndex: 4 }}>
              <Villagers count={4} />
            </div>
            <Confetti />
            <Sparkle count={15} />
            <SunsetGlow intensity={0.5} />
            <Birds count={4} />
          </>
        );

      // ===== KRISHNA AND THE SERPENT KALIYA =====
      case 'kk-yamuna-river':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}><Water y={280} /></svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
              <svg width="200" height="40" viewBox="0 0 200 40">
                {[0, 40, 80, 120, 160].map((x, i) => (
                  <ellipse key={i} cx={x + 20} cy={20} rx={15} ry={8} fill="#4DD0E1" opacity={0.5} />
                ))}
              </svg>
            </div>
            <Birds count={4} />
            <Sparkle count={5} />
            <SunsetGlow intensity={0.2} />
          </>
        );
      case 'kk-dark-pool':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}><Water y={260} /></svg>
            <DarkVignette intensity={0.6} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
              <svg width="150" height="80" viewBox="0 0 150 80">
                <ellipse cx="75" cy="40" rx="70" ry="35" fill="#1A237E" opacity="0.6" />
                {[30, 60, 90, 120].map((x, i) => (
                  <circle key={i} cx={x} cy={30 + i * 5} r={3 + i} fill="#76FF03" opacity={0.3 + i * 0.1}>
                    <animate attributeName="cy" values={`${30 + i * 5};${25 + i * 5};${30 + i * 5}`} dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
                  </circle>
                ))}
              </svg>
            </div>
            <FireGlow color="#1B5E20" intensity={0.3} />
          </>
        );
      case 'kk-kaliya-in-river':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}><Water y={300} /></svg>
            <DarkVignette intensity={0.5} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <KaliyaSerpent size={160} mood="menacing" className="anim-breathe" />
            </div>
            <FireGlow color="#004D40" intensity={0.4} />
          </>
        );
      case 'kk-poisoned-water':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}><Water y={280} /></svg>
            <DarkVignette intensity={0.5} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '20%', zIndex: 4 }}>
              <Fish size={50} color="#37474F" mood="neutral" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', right: '25%', zIndex: 4 }}>
              <Villagers count={3} className="shake-animation" />
            </div>
            <FireGlow color="#1B5E20" intensity={0.3} />
          </>
        );
      case 'kk-cows-sick':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '25%', zIndex: 4 }}>
              <Cow size={110} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', right: '25%', zIndex: 5 }}>
              <Krishna size={110} mood="sad" className="anim-breathe" />
            </div>
            <DarkVignette intensity={0.3} />
          </>
        );
      case 'kk-krishna-angry':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Krishna size={150} mood="determined" className="anim-breathe" />
            </div>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}><Water y={340} /></svg>
            <FireGlow color="#FF6F00" intensity={0.4} />
            <Sparkle count={5} />
          </>
        );
      case 'kk-friends-warn':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Krishna size={130} mood="happy" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '10%', zIndex: 4 }}>
              <Villagers count={3} />
            </div>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}><Water y={360} /></svg>
          </>
        );
      case 'kk-krishna-climbs-tree':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '40%', zIndex: 3 }}>
              <svg width="80" height="180" viewBox="0 0 80 180">
                <rect x="35" y="60" width="10" height="120" fill="#5D4037" />
                <circle cx="40" cy="40" r="35" fill="#2E7D32" />
                <circle cx="25" cy="55" r="20" fill="#388E3C" />
                <circle cx="55" cy="50" r="22" fill="#1B5E20" />
              </svg>
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '50%', left: '42%', zIndex: 5 }}>
              <Krishna size={100} mood="playful" className="bounce-animation" />
            </div>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}><Water y={360} /></svg>
            <DarkVignette intensity={0.3} />
          </>
        );
      case 'kk-krishna-jumps':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '35%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Krishna size={130} mood="playful" className="bounce-animation" />
            </div>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}><Water y={280} /></svg>
            <SpeedLines direction="down" />
            <Sparkle count={8} />
          </>
        );
      case 'kk-kaliya-attacks':
        return (
          <>
            <DarkVignette intensity={0.6} />
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <KaliyaSerpent size={180} mood="angry" className="shake-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '50%', transform: 'translateX(-50%)', zIndex: 6 }}>
              <Krishna size={100} mood="calm" className="anim-breathe" />
            </div>
            <FireGlow color="#004D40" intensity={0.5} />
          </>
        );
      case 'kk-villagers-faint':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <Villagers count={4} className="shake-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '15%', zIndex: 5 }}>
              <Yashoda size={130} mood="worried" className="shake-animation" />
            </div>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}><Water y={340} /></svg>
            <DarkVignette intensity={0.4} />
          </>
        );
      case 'kk-krishna-breaks-free':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 6 }}>
              <Krishna size={150} mood="playful" className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <KaliyaSerpent size={160} mood="angry" className="shake-animation" />
            </div>
            <Sparkle count={12} />
            <FireGlow color="#FFD600" intensity={0.4} />
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}><Water y={340} /></svg>
          </>
        );
      case 'kk-krishna-dances':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '50%', transform: 'translateX(-50%)', zIndex: 6 }}>
              <Krishna size={130} mood="dancing" className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <KaliyaSerpent size={170} mood="defeated" className="shake-animation" />
            </div>
            <Sparkle count={15} />
            <FireGlow color="#FFD600" intensity={0.5} />
            <Confetti />
          </>
        );
      case 'kk-cosmic-dance':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '50%', transform: 'translateX(-50%)', zIndex: 6 }}>
              <Krishna size={150} mood="dancing" className="float-animation" />
            </div>
            <Sparkle count={20} />
            <FireGlow color="#7C4DFF" intensity={0.5} />
            <Confetti />
            <SunsetGlow intensity={0.3} />
          </>
        );
      case 'kk-kaliya-weakens':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '50%', transform: 'translateX(-50%)', zIndex: 6 }}>
              <Krishna size={130} mood="dancing" className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
              <KaliyaSerpent size={150} mood="defeated" className="anim-breathe" />
            </div>
            <Sparkle count={10} />
            <FireGlow color="#FFD600" intensity={0.4} />
          </>
        );
      case 'kk-kaliya-wives-beg':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Nagapatni size={120} className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '30%', right: '20%', zIndex: 4 }}>
              <Krishna size={110} mood="calm" className="float-animation" />
            </div>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}><Water y={360} /></svg>
            <Sparkle count={8} />
          </>
        );
      case 'kk-krishna-shows-mercy':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Krishna size={150} mood="calm" className="float-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '15%', zIndex: 4 }}>
              <KaliyaSerpent size={120} mood="humbled" className="anim-breathe" />
            </div>
            <Sparkle count={12} />
            <SunsetGlow intensity={0.3} />
          </>
        );
      case 'kk-kaliya-bows':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <KaliyaSerpent size={140} mood="humbled" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '30%', right: '20%', zIndex: 6 }}>
              <Krishna size={120} mood="calm" className="float-animation" />
            </div>
            <Sparkle count={10} />
            <SunsetGlow intensity={0.4} />
          </>
        );
      case 'kk-river-purified':
        return (
          <>
            <svg className="scene-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}><Water y={300} /></svg>
            <div className="scene-element" style={{ position: 'absolute', bottom: '28%', left: '30%', zIndex: 4 }}>
              <Fish size={50} color="#42A5F5" mood="neutral" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '32%', right: '30%', zIndex: 4 }}>
              <Fish size={40} color="#26C6DA" mood="neutral" />
            </div>
            <Sparkle count={15} />
            <SunsetGlow intensity={0.4} />
            <Birds count={5} />
          </>
        );
      case 'kk-celebration':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Krishna size={140} mood="happy" className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '10%', zIndex: 4 }}>
              <Villagers count={4} />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '10%', zIndex: 3 }}>
              <Cow size={80} />
            </div>
            <Confetti />
            <Sparkle count={15} />
            <SunsetGlow intensity={0.5} />
          </>
        );

      // ===== KRISHNA AND THE FRUIT SELLER =====
      case 'kf-vrindavan-morning':
        return (
          <>
            <VillageSilhouette />
            <SunsetGlow intensity={0.5} />
            <Birds count={4} />
            <Sparkle count={5} />
          </>
        );
      case 'kf-fruit-seller-home':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <FruitSeller size={140} mood="kind" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '10%', zIndex: 2 }}>
              <House size={100} />
            </div>
            <SunsetGlow intensity={0.3} />
          </>
        );
      case 'kf-picking-fruits':
        return (
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
        );
      case 'kf-walking-to-village':
        return (
          <>
            <VillageSilhouette />
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <FruitSeller size={130} mood="kind" className="anim-breathe" />
            </div>
            <DustMotes count={10} />
            <SunsetGlow intensity={0.3} />
          </>
        );
      case 'kf-baby-krishna-hears':
        return (
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
        );
      case 'kf-yashoda-busy':
        return (
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
        );
      case 'kf-krishna-grabs-grain':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Krishna size={110} mood="playful" className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', right: '25%', zIndex: 3 }}>
              <Pot size={70} />
            </div>
            <Sparkle count={5} />
          </>
        );
      case 'kf-krishna-runs-out':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '40%', zIndex: 5 }}>
              <Krishna size={110} mood="playful" className="bounce-animation" />
            </div>
            <SpeedLines direction="right" />
            <DustMotes count={8} />
          </>
        );
      case 'kf-meets-sundari':
        return (
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
        );
      case 'kf-krishna-offers-grain':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '35%', zIndex: 5 }}>
              <Krishna size={110} mood="happy" className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', right: '25%', zIndex: 5 }}>
              <FruitSeller size={130} mood="laughing" className="anim-breathe" />
            </div>
            <Sparkle count={3} />
          </>
        );
      case 'kf-sundari-laughs':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <FruitSeller size={150} mood="laughing" className="bounce-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '15%', zIndex: 4 }}>
              <Krishna size={100} mood="happy" className="bounce-animation" />
            </div>
            <Sparkle count={5} />
          </>
        );
      case 'kf-sundari-gives-fruits':
        return (
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
        );
      case 'kf-krishna-hugs-fruits':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Krishna size={130} mood="happy" className="bounce-animation" />
            </div>
            <Sparkle count={10} />
            <FireGlow color="#FFD600" intensity={0.3} />
            <SunsetGlow intensity={0.3} />
          </>
        );
      case 'kf-krishna-runs-home':
        return (
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
        );
      case 'kf-sundari-lifts-basket':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <FruitSeller size={140} mood="surprised" className="anim-breathe" />
            </div>
            <Sparkle count={5} />
          </>
        );
      case 'kf-basket-transforms':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <FruitSeller size={150} mood="overwhelmed" className="shake-animation" />
            </div>
            <Sparkle count={20} />
            <FireGlow color="#FFD600" intensity={0.6} />
            <Confetti />
          </>
        );
      case 'kf-jewels-overflow':
        return (
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
        );
      case 'kf-sundari-cries-joy':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <FruitSeller size={140} mood="crying" className="anim-breathe" />
            </div>
            <Sparkle count={15} />
            <FireGlow color="#FFD600" intensity={0.4} />
            <SunsetGlow intensity={0.4} />
          </>
        );
      case 'kf-sundari-shares':
        return (
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
        );
      case 'kf-moral-ending':
        return (
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
        );

      // ===== CHHOTA BHEEM VS KIRMADA =====
      case 'bk-dholakpur-morning':
        return (
          <>
            <VillageSilhouette />
            <Birds count={5} />
            <Sparkle count={5} />
            <SunsetGlow intensity={0.3} />
          </>
        );
      case 'bk-bheem-playing':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '25%', zIndex: 5 }}>
              <BheemWarrior size={130} mood="happy" className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '24%', right: '25%', zIndex: 4 }}>
              <Chutki size={100} className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '55%', zIndex: 4 }}>
              <MagicLadoo size={40} className="float-animation" />
            </div>
            <Sparkle count={5} />
          </>
        );
      case 'bk-ground-shakes':
        return (
          <>
            <VillageSilhouette />
            <DarkVignette intensity={0.4} />
            <div className="scene-element shake-animation" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Raju size={100} className="shake-animation" />
            </div>
            <DustMotes count={15} />
          </>
        );
      case 'bk-kirmada-appears':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <Kirmada size={180} mood="menacing" className="anim-breathe" />
            </div>
            <DarkVignette intensity={0.5} />
            <FireGlow color="#B71C1C" intensity={0.4} />
          </>
        );
      case 'bk-villagers-flee':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '10%', zIndex: 3 }}>
              <Kirmada size={150} mood="menacing" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '20%', zIndex: 5 }}>
              <Chutki size={90} className="shake-animation" />
            </div>
            <SpeedLines direction="left" />
            <DarkVignette intensity={0.3} />
          </>
        );
      case 'bk-bheem-stands-up':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <BheemWarrior size={150} mood="fierce" className="anim-breathe" />
            </div>
            <FireGlow color="#FF6F00" intensity={0.4} />
            <Sparkle count={5} />
          </>
        );
      case 'bk-friends-unite':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '35%', zIndex: 5 }}>
              <BheemWarrior size={120} mood="fierce" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '24%', left: '15%', zIndex: 4 }}>
              <Chutki size={90} className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '24%', right: '20%', zIndex: 4 }}>
              <Raju size={85} className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '28%', right: '10%', zIndex: 4 }}>
              <Jaggu size={70} className="anim-hop" />
            </div>
            <Sparkle count={5} />
          </>
        );
      case 'bk-first-attack':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '25%', zIndex: 5 }}>
              <BheemWarrior size={130} mood="fierce" className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '15%', zIndex: 4 }}>
              <Kirmada size={160} mood="menacing" className="shake-animation" />
            </div>
            <SpeedLines direction="right" />
            <DustMotes count={10} />
          </>
        );
      case 'bk-teamwork-attack':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
              <Kirmada size={150} mood="menacing" className="shake-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '10%', zIndex: 5 }}>
              <Raju size={80} className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', top: '20%', right: '25%', zIndex: 5 }}>
              <Jaggu size={70} className="anim-hop" />
            </div>
            <SpeedLines direction="left" />
            <Confetti />
          </>
        );
      case 'bk-bheem-eats-laddoo':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <BheemWarrior size={140} mood="happy" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '50%', left: '55%', zIndex: 6 }}>
              <MagicLadoo size={50} className="float-animation" />
            </div>
            <FireGlow color="#FFD600" intensity={0.5} />
            <Sparkle count={15} />
          </>
        );
      case 'bk-final-battle':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '30%', zIndex: 5 }}>
              <BheemWarrior size={150} mood="fierce" className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', top: '15%', right: '20%', zIndex: 4 }}>
              <Kirmada size={120} mood="menacing" className="shake-animation" style={{ transform: 'rotate(30deg)' }} />
            </div>
            <SpeedLines direction="up" />
            <DustMotes count={15} />
            <FireGlow color="#FF5722" intensity={0.4} />
          </>
        );
      case 'bk-kirmada-defeated':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <BheemWarrior size={140} mood="fierce" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', top: '10%', right: '10%', zIndex: 3, opacity: 0.5, transform: 'scale(0.5)' }}>
              <Kirmada size={80} mood="menacing" />
            </div>
            <Sparkle count={10} />
            <Confetti />
          </>
        );
      case 'bk-celebration':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '35%', zIndex: 5 }}>
              <BheemWarrior size={130} mood="happy" className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '24%', left: '15%', zIndex: 4 }}>
              <Chutki size={90} className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '24%', right: '15%', zIndex: 4 }}>
              <Raju size={85} className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '40%', left: '55%', zIndex: 6 }}>
              <MagicLadoo size={40} className="float-animation" />
            </div>
            <Confetti />
            <Sparkle count={15} />
          </>
        );
      case 'bk-moral-ending':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <BheemWarrior size={140} mood="happy" className="float-animation" />
            </div>
            <SunsetGlow intensity={0.6} />
            <Sparkle count={10} />
            <Birds count={4} />
          </>
        );

      // ===== OGGY'S GREAT KITCHEN ADVENTURE =====
      case 'og-oggy-house':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
              <svg width="200" height="140" viewBox="0 0 200 140">
                <rect x="30" y="50" width="140" height="90" fill="#42A5F5" rx="5" />
                <path d="M20 55 L100 10 L180 55" fill="#1565C0" />
                <rect x="75" y="80" width="30" height="50" fill="#5D4037" rx="3" />
                <rect x="50" y="65" width="25" height="25" fill="#BBDEFB" rx="2" />
                <rect x="125" y="65" width="25" height="25" fill="#BBDEFB" rx="2" />
                <circle cx="97" cy="105" r="3" fill="#FFD600" />
              </svg>
            </div>
            <Birds count={3} />
            <Sparkle count={5} />
          </>
        );
      case 'og-birthday-plan':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <OggyCharacter size={150} mood="happy" className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', top: '15%', right: '15%', zIndex: 4 }}>
              <svg width="60" height="60" viewBox="0 0 60 60">
                <rect x="10" y="25" width="40" height="30" rx="5" fill="#6D4C41" />
                <rect x="5" y="20" width="50" height="10" rx="3" fill="#8D6E63" />
                <circle cx="30" cy="15" r="8" fill="#E91E63" />
                <rect x="28" y="5" width="4" height="12" fill="#FFD600" />
                <circle cx="30" cy="4" r="3" fill="#FF6F00" />
              </svg>
            </div>
            <Sparkle count={8} />
          </>
        );
      case 'og-kitchen-setup':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '40%', zIndex: 5 }}>
              <OggyCharacter size={130} mood="happy" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '30%', right: '15%', zIndex: 4 }}>
              <svg width="100" height="60" viewBox="0 0 100 60">
                <ellipse cx="20" cy="40" rx="15" ry="18" fill="#ECEFF1" />
                <rect x="45" y="30" width="20" height="28" fill="#FFCC80" rx="3" />
                <circle cx="80" cy="35" r="12" fill="#6D4C41" />
                <rect x="70" y="25" width="20" height="5" rx="2" fill="#8D6E63" />
              </svg>
            </div>
            <Sparkle count={3} />
          </>
        );
      case 'og-cockroaches-watching':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <CockroachTrio size={100} className="anim-breathe" />
            </div>
            <DarkVignette intensity={0.3} />
            <Sparkle count={3} />
          </>
        );
      case 'og-mixing-batter':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '30%', zIndex: 5 }}>
              <OggyCharacter size={130} mood="scared" className="shake-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '30%', right: '20%', zIndex: 6 }}>
              <CockroachTrio size={60} className="anim-hop" />
            </div>
            <SpeedLines direction="right" />
          </>
        );
      case 'og-chase-living-room':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '20%', zIndex: 5 }}>
              <OggyCharacter size={130} mood="scared" className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '30%', right: '25%', zIndex: 6 }}>
              <CockroachTrio size={50} className="anim-hop" />
            </div>
            <SpeedLines direction="right" />
            <DustMotes count={10} />
          </>
        );
      case 'og-flour-explosion':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <OggyCharacter size={140} mood="scared" className="shake-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 6 }}>
              <svg width="200" height="100" viewBox="0 0 200 100">
                {Array.from({ length: 20 }).map((_, i) => (
                  <circle key={i} cx={100 + Math.cos(i * 0.8) * (30 + i * 4)} cy={50 + Math.sin(i * 0.8) * (20 + i * 3)} r={3 + Math.random() * 5} fill="white" opacity={0.6 + Math.random() * 0.4} />
                ))}
              </svg>
            </div>
            <DustMotes count={20} />
          </>
        );
      case 'og-oggy-sad':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <OggyCharacter size={140} mood="scared" className="anim-breathe" />
            </div>
            <Rain intensity={0.3} />
            <DarkVignette intensity={0.4} />
          </>
        );
      case 'og-cockroaches-guilty':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '30%', zIndex: 5 }}>
              <OggyCharacter size={120} mood="scared" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '28%', right: '25%', zIndex: 4 }}>
              <CockroachTrio size={70} className="anim-breathe" />
            </div>
            <DarkVignette intensity={0.2} />
          </>
        );
      case 'og-cockroaches-help':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '35%', zIndex: 5 }}>
              <OggyCharacter size={130} mood="happy" className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '28%', right: '20%', zIndex: 5 }}>
              <CockroachTrio size={70} className="anim-hop" />
            </div>
            <Sparkle count={10} />
          </>
        );
      case 'og-baking-together':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '30%', zIndex: 5 }}>
              <OggyCharacter size={120} mood="happy" className="anim-breathe" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '28%', right: '25%', zIndex: 5 }}>
              <CockroachTrio size={60} className="anim-hop" />
            </div>
            <Sparkle count={8} />
            <FloatingBubbles count={5} />
          </>
        );
      case 'og-cake-ready':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '35%', zIndex: 5 }}>
              <OggyCharacter size={130} mood="happy" className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '55%', zIndex: 6 }}>
              <svg width="80" height="70" viewBox="0 0 80 70">
                <rect x="10" y="30" width="60" height="35" rx="8" fill="#5D4037" />
                <rect x="5" y="25" width="70" height="10" rx="4" fill="#6D4C41" />
                <rect x="15" y="18" width="50" height="10" rx="4" fill="#8D6E63" />
                <circle cx="25" cy="25" r="4" fill="#F44336" />
                <circle cx="40" cy="22" r="4" fill="#F44336" />
                <circle cx="55" cy="25" r="4" fill="#F44336" />
                <rect x="38" y="8" width="4" height="14" fill="#FFD600" />
                <circle cx="40" cy="6" r="4" fill="#FF6F00" />
              </svg>
            </div>
            <Sparkle count={15} />
            <Confetti />
          </>
        );
      case 'og-jack-arrives':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '25%', zIndex: 5 }}>
              <OggyCharacter size={120} mood="happy" className="anim-hop" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '25%', right: '20%', zIndex: 5 }}>
              <svg width="80" height="100" viewBox="0 0 80 100">
                <ellipse cx="40" cy="55" rx="18" ry="25" fill="#FFD600" />
                <circle cx="40" cy="28" r="15" fill="#FFD600" />
                <circle cx="34" cy="25" r="4" fill="white" /><circle cx="46" cy="25" r="4" fill="white" />
                <circle cx="34" cy="25" r="2" fill="#333" /><circle cx="46" cy="25" r="2" fill="#333" />
                <ellipse cx="40" cy="31" rx="3" ry="2" fill="#E91E63" />
                <path d="M33 36 Q40 42, 47 36" stroke="#333" strokeWidth="1.5" fill="none" />
                <line x1="22" y1="28" x2="32" y2="28" stroke="#333" strokeWidth="0.8" />
                <line x1="48" y1="28" x2="58" y2="28" stroke="#333" strokeWidth="0.8" />
              </svg>
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '50%', zIndex: 4 }}>
              <CockroachTrio size={50} className="anim-hop" />
            </div>
            <Confetti />
            <Sparkle count={12} />
          </>
        );
      case 'og-moral-ending':
        return (
          <>
            <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '30%', zIndex: 5 }}>
              <OggyCharacter size={130} mood="happy" className="float-animation" />
            </div>
            <div className="scene-element" style={{ position: 'absolute', bottom: '28%', right: '25%', zIndex: 5 }}>
              <CockroachTrio size={60} className="float-animation" />
            </div>
            <SunsetGlow intensity={0.6} />
            <Sparkle count={10} />
            <Birds count={3} />
          </>
        );

      default:
        return (
          <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
            <Monkey size={140} mood="happy" className="float-animation" />
          </div>
        );
    }
  };

  // Determine ambient effects from frame data
  const effects = frame.effects || [];
  const mood = frame.mood || '';

  const renderAmbientEffects = () => {
    const layers = [];

    // Clouds for outdoor/serene scenes
    if (effects.includes('clouds') || mood === 'serene' || mood === 'peaceful') {
      layers.push(
        <div key="clouds" className="scene-layer" style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', overflow: 'hidden' }}>
          <div className="ambient-cloud" style={{ top: '5%' }}>
            <svg width="120" height="45"><ellipse cx="60" cy="25" rx="55" ry="18" fill="rgba(255,255,255,0.35)" /></svg>
          </div>
          <div className="ambient-cloud" style={{ top: '12%' }}>
            <svg width="90" height="35"><ellipse cx="45" cy="18" rx="40" ry="14" fill="rgba(255,255,255,0.25)" /></svg>
          </div>
          <div className="ambient-cloud" style={{ top: '8%' }}>
            <svg width="70" height="30"><ellipse cx="35" cy="15" rx="30" ry="12" fill="rgba(255,255,255,0.2)" /></svg>
          </div>
        </div>
      );
    }

    // Fireflies for night/magical scenes
    if (effects.includes('fireflies') || mood === 'magical' || mood === 'mystical') {
      layers.push(
        <div key="fireflies" className="scene-layer" style={{ position: 'absolute', inset: 0, zIndex: 8, pointerEvents: 'none' }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="ambient-particle firefly" style={{
              left: `${12 + (i * 11) % 80}%`,
              top: `${15 + (i * 17) % 55}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }} />
          ))}
        </div>
      );
    }

    // Dust/sparkle particles
    if (effects.includes('sparkle') || effects.includes('dust') || mood === 'warm') {
      layers.push(
        <div key="particles" className="scene-layer" style={{ position: 'absolute', inset: 0, zIndex: 6, pointerEvents: 'none' }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="ambient-particle" style={{
              left: `${(i * 13) % 90 + 5}%`,
              top: `${(i * 19) % 70 + 10}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + (i % 4)}s`,
            }} />
          ))}
        </div>
      );
    }

    // Falling leaves for forest scenes
    if (effects.includes('leaves') || mood === 'autumn') {
      layers.push(
        <div key="leaves" className="scene-layer" style={{ position: 'absolute', inset: 0, zIndex: 6, pointerEvents: 'none' }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="ambient-particle leaf" style={{
              left: `${(i * 17) % 85 + 5}%`,
              top: `${(i * 11) % 40}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${7 + (i % 3) * 2}s`,
            }} />
          ))}
        </div>
      );
    }

    // Weather: Rain
    if (effects.includes('rain') || mood === 'stormy' || mood === 'tense') {
      layers.push(<div key="rain" className="weather-rain" />);
    }

    // Weather: Fog
    if (effects.includes('fog') || mood === 'eerie' || mood === 'mysterious') {
      layers.push(<div key="fog" className="weather-fog" />);
    }

    // Sunbeams
    if (effects.includes('sunbeams') || mood === 'serene' || mood === 'hopeful') {
      layers.push(<div key="sunbeams" className="weather-sunbeams" />);
    }

    // Lighting: Golden hour
    if (mood === 'warm' || mood === 'nostalgic' || effects.includes('golden')) {
      layers.push(<div key="golden" className="lighting-golden" />);
    }

    // Lighting: Moonlight
    if (mood === 'night' || mood === 'calm' || effects.includes('moonlight')) {
      layers.push(<div key="moonlight" className="lighting-moonlight" />);
    }

    // Lighting: Fire
    if (effects.includes('fire') || mood === 'danger') {
      layers.push(<div key="fire" className="lighting-fire" />);
    }

    // Dramatic vignette for intense moods
    if (mood === 'dramatic' || mood === 'angry' || mood === 'fearful' || mood === 'intense') {
      layers.push(<div key="vignette" className="scene-vignette intense" />);
    } else if (mood !== 'happy' && mood !== 'playful' && mood !== 'serene') {
      layers.push(<div key="vignette" className="scene-vignette" />);
    }

    return layers;
  };

  // Determine camera class from mood
  const getCameraClass = () => {
    if (mood === 'dramatic' || mood === 'intense' || mood === 'fearful') return 'camera-zoom';
    if (mood === 'serene' || mood === 'peaceful' || mood === 'calm') return 'camera-zoom-slow';
    if (mood === 'action' || mood === 'heroic') return 'camera-pan-left';
    return '';
  };

  return (
    <div className={`scene-container ${getCameraClass()}`} style={{ background: bgGradient }}>
      {/* Halftone comic overlay */}
      <div className="comic-halftone" />
      {renderScene()}
      {renderAmbientEffects()}
    </div>
  );
};

export default SceneRenderer;
