import React from 'react';
import { Birds, SpeedLines, Sparkle, Confetti, DarkVignette, SunsetGlow, DustMotes } from '../Characters';
import { Hanuman, Surya, Indra, Vayu, Anjana } from '../CharactersNew';

const scenes = {
  'hs-kishkindha-dawn': () => (
    <>
      <Sparkle count={8} />
      <Birds count={5} />
      <SunsetGlow intensity={0.6} />
    </>
  ),

  'hs-baby-hanuman-wakes': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '35%', zIndex: 5 }}>
        <Hanuman size={100} mood="baby" className="anim-wobble" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '55%', zIndex: 4 }}>
        <Anjana size={130} mood="loving" className="anim-breathe" />
      </div>
      <Sparkle count={4} />
    </>
  ),

  'hs-sees-the-sun': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '30%', zIndex: 5 }}>
        <Hanuman size={100} mood="baby" className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '70%', left: '60%', zIndex: 3 }}>
        <Surya size={150} mood="calm" className="pulse-animation" />
      </div>
      <SunsetGlow intensity={0.4} />
    </>
  ),

  'hs-hanuman-leaps': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '45%', left: '40%', zIndex: 6 }}>
        <Hanuman size={130} mood="flying" className="float-animation" />
      </div>
      <SpeedLines />
    </>
  ),

  'hs-flying-higher': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '55%', left: '45%', zIndex: 6 }}>
        <Hanuman size={130} mood="flying" className="float-animation" />
      </div>
      <Birds count={4} />
    </>
  ),

  'hs-surya-surprised': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '60%', left: '55%', zIndex: 4 }}>
        <Surya size={150} mood="surprised" className="pulse-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '40%', left: '30%', zIndex: 5 }}>
        <Hanuman size={120} mood="flying" className="float-animation" />
      </div>
    </>
  ),

  'hs-indra-worried': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '65%', left: '50%', zIndex: 5 }}>
        <Indra size={140} mood="worried" className="anim-breathe" />
      </div>
      <DarkVignette intensity={0.3} />
    </>
  ),

  'hs-vajra-strikes': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '60%', left: '50%', zIndex: 5 }}>
        <Indra size={140} mood="angry" className="anim-wobble" />
      </div>
      <SpeedLines />
      <DarkVignette intensity={0.6} />
    </>
  ),

  'hs-vayu-angry': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '45%', zIndex: 5 }}>
        <Vayu size={150} mood="angry" className="anim-sway" />
      </div>
      <DarkVignette intensity={0.7} />
    </>
  ),

  'hs-world-suffers': () => (
    <>
      <DarkVignette intensity={0.8} />
      <DustMotes count={8} />
    </>
  ),

  'hs-gods-bless': () => (
    <>
      <Sparkle count={12} />
      <SunsetGlow intensity={0.6} />
    </>
  ),

  'hs-hanuman-healed': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '45%', zIndex: 5 }}>
        <Hanuman size={130} mood="healed" className="anim-celebrate" />
      </div>
      <Sparkle count={8} />
      <Confetti count={8} />
    </>
  ),

  'hs-anjana-love': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '55%', zIndex: 4 }}>
        <Anjana size={130} mood="loving" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '18%', left: '35%', zIndex: 5 }}>
        <Hanuman size={90} mood="baby" className="anim-hop" />
      </div>
      <Sparkle count={5} />
    </>
  ),

  'hs-moral-ending': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '45%', zIndex: 5 }}>
        <Hanuman size={140} mood="blessed" className="float-animation" />
      </div>
      <Sparkle count={10} />
      <SunsetGlow intensity={0.5} />
    </>
  ),

};

export default scenes;
