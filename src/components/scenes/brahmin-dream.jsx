import React from 'react';
import { Birds, SpeedLines, Sparkle, Confetti, ThinkingBubbles, LightbulbIcon, DarkVignette, SunsetGlow, DustMotes } from '../Characters';
import { Stick, VillageSilhouette, Villagers, Brahmin, BrahminWife, Baby, Pot, Goat, Cow, House } from '../CharactersNew';

const scenes = {
  'bd-village-intro': () => (
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
  ),

  'bd-brahmin-intro': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Brahmin size={160} mood="neutral" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '10%', right: '10%', zIndex: 2 }}>
        <VillageSilhouette size={200} />
      </div>
    </>
  ),

  'bd-begging-alms': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '30%', zIndex: 4 }}>
        <Brahmin size={140} mood="sad" className="anim-sway" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', right: '25%', zIndex: 3 }}>
        <Villagers count={2} size={55} />
      </div>
    </>
  ),

  'bd-gets-pot': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '40%', zIndex: 4 }}>
        <Brahmin size={150} mood="happy" className="anim-entrance-pop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '58%', zIndex: 5 }}>
        <Pot size={80} broken={false} className="anim-wobble" />
      </div>
      <Sparkle count={5} />
    </>
  ),

  'bd-hangs-pot': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '45%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Brahmin size={150} mood="happy" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '55%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <Pot size={70} broken={false} className="anim-swing" />
      </div>
      <DustMotes count={6} />
    </>
  ),

  'bd-starts-dreaming': () => (
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
  ),

  'bd-dream-sell-flour': () => (
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
  ),

  'bd-dream-buy-goats': () => (
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
  ),

  'bd-goats-multiply': () => (
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
  ),

  'bd-dream-buy-cows': () => (
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
  ),

  'bd-cows-give-milk': () => (
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
  ),

  'bd-becomes-rich': () => (
    <>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(255, 215, 0, 0.1)', zIndex: 1 }} />
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4, opacity: 0.85 }}>
        <Brahmin size={150} mood="happy" className="anim-grow" />
      </div>
      <Sparkle count={12} />
      <Confetti />
      <ThinkingBubbles />
    </>
  ),

  'bd-builds-house': () => (
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
  ),

  'bd-gets-married': () => (
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
  ),

  'bd-has-a-son': () => (
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
  ),

  'bd-son-naughty': () => (
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
  ),

  'bd-decides-discipline': () => (
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
  ),

  'bd-kicks-pot': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '40%', zIndex: 4 }}>
        <Brahmin size={150} mood="angry" className="shake-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '45%', left: '55%', zIndex: 5 }}>
        <Pot size={70} broken={false} className="shake-animation" />
      </div>
      <SpeedLines />
    </>
  ),

  'bd-pot-breaks': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '40%', zIndex: 4 }}>
        <Brahmin size={150} mood="shocked" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '15%', left: '55%', zIndex: 5 }}>
        <Pot size={80} broken={true} className="shake-animation" />
      </div>
      <SpeedLines />
    </>
  ),

  'bd-brahmin-realizes': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Brahmin size={150} mood="sad" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '25%', zIndex: 3 }}>
        <Pot size={75} broken={true} />
      </div>
      <DarkVignette intensity={0.3} />
    </>
  ),

  'bd-neighbors-laugh': () => (
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
  ),

  'bd-brahmin-embarrassed': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Brahmin size={140} mood="sad" className="anim-sway" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '12%', right: '30%', zIndex: 3 }}>
        <Pot size={70} broken={true} />
      </div>
      <DarkVignette intensity={0.2} />
    </>
  ),

  'bd-lesson-learned': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}>
        <Brahmin size={150} mood="neutral" className="anim-breathe" />
      </div>
      <LightbulbIcon />
      <Sparkle count={4} />
    </>
  ),

  'bd-wisdom': () => (
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
  ),

  'bd-storyteller': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '30%', zIndex: 4 }}>
        <Brahmin size={140} mood="neutral" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', right: '20%', zIndex: 3 }}>
        <Villagers count={3} size={50} className="anim-sway" />
      </div>
      <SunsetGlow intensity={0.4} />
    </>
  ),

  'bd-moral-scene': () => (
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
  ),

};

export default scenes;
