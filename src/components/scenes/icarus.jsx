import React from 'react';
import { Birds, SpeedLines, Sparkle, DarkVignette, FireGlow, SunsetGlow, DustMotes, FloatingBubbles } from '../Characters';
import { Surya, Icarus, Daedalus } from '../CharactersNew';

const scenes = {
  'tower-prison': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '35%', zIndex: 5 }}>
        <Icarus size={110} mood="excited" className="anim-hop" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '58%', zIndex: 4 }}>
        <Daedalus size={120} mood="warning" className="anim-breathe" />
      </div>
      <DarkVignette intensity={0.5} />
    </>
  ),

  'watching-birds': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '40%', zIndex: 5 }}>
        <Icarus size={110} mood="excited" className="anim-hop" />
      </div>
      <Birds count={5} />
    </>
  ),

  'daedalus-idea': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '45%', zIndex: 5 }}>
        <Daedalus size={130} mood="warning" className="anim-breathe" />
      </div>
      <Sparkle count={6} />
    </>
  ),

  'building-wings': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '45%', zIndex: 5 }}>
        <Daedalus size={130} mood="warning" className="anim-breathe" />
      </div>
      <DustMotes count={5} />
    </>
  ),

  'wings-ready': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '30%', zIndex: 5 }}>
        <Icarus size={110} mood="excited" className="anim-celebrate" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '58%', zIndex: 4 }}>
        <Daedalus size={120} mood="warning" className="anim-breathe" />
      </div>
      <Sparkle count={6} />
    </>
  ),

  'fathers-warning': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '40%', zIndex: 5 }}>
        <Daedalus size={130} mood="warning" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '65%', zIndex: 4 }}>
        <Icarus size={110} mood="excited" className="anim-hop" />
      </div>
    </>
  ),

  'taking-flight': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '45%', left: '45%', zIndex: 5 }}>
        <Icarus size={120} mood="flying" className="float-animation" />
      </div>
      <SpeedLines />
    </>
  ),

  'flying-together': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '50%', left: '35%', zIndex: 5 }}>
        <Icarus size={110} mood="flying" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '40%', left: '58%', zIndex: 4 }}>
        <Daedalus size={120} mood="warning" className="float-animation" />
      </div>
      <Birds count={4} />
    </>
  ),

  'temptation': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '50%', left: '35%', zIndex: 5 }}>
        <Icarus size={110} mood="flying" className="float-animation" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '70%', left: '60%', zIndex: 3 }}>
        <Surya size={140} mood="calm" className="pulse-animation" />
      </div>
    </>
  ),

  'flying-too-high': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '65%', left: '40%', zIndex: 5 }}>
        <Icarus size={110} mood="flying" className="float-animation" />
      </div>
      <SpeedLines />
      <div className="scene-element" style={{ position: 'absolute', bottom: '75%', left: '60%', zIndex: 3 }}>
        <Surya size={140} mood="calm" className="pulse-animation" />
      </div>
    </>
  ),

  'wax-melting': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '50%', left: '45%', zIndex: 5 }}>
        <Icarus size={120} mood="falling" className="anim-wobble" />
      </div>
      <FireGlow intensity={0.5} />
    </>
  ),

  'the-fall': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '30%', left: '45%', zIndex: 5 }}>
        <Icarus size={120} mood="falling" className="anim-wobble" />
      </div>
      <SpeedLines />
      <DarkVignette intensity={0.5} />
    </>
  ),

  'rescue': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '25%', left: '45%', zIndex: 5 }}>
        <Daedalus size={130} mood="worried" className="anim-breathe" />
      </div>
      <FloatingBubbles count={6} />
    </>
  ),

  'lesson-on-beach': () => (
    <>
      <div className="scene-element" style={{ position: 'absolute', bottom: '20%', left: '30%', zIndex: 5 }}>
        <Icarus size={110} mood="humble" className="anim-breathe" />
      </div>
      <div className="scene-element" style={{ position: 'absolute', bottom: '22%', left: '58%', zIndex: 4 }}>
        <Daedalus size={120} mood="relieved" className="anim-breathe" />
      </div>
      <SunsetGlow intensity={0.5} />
    </>
  ),

  'walking-free': () => (
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
  ),

};

export default scenes;
