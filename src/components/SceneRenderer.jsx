import React, { useState, useEffect } from 'react';
import storyToSceneFile from './scenes/index.js';

// Dynamic import map - Vite will code-split each into its own chunk
const sceneLoaders = {
  'monkey-crocodile': () => import('./scenes/monkey-crocodile.jsx'),
  'tortoise-geese': () => import('./scenes/tortoise-geese.jsx'),
  'blue-jackal': () => import('./scenes/blue-jackal.jsx'),
  'lion-rabbit': () => import('./scenes/lion-rabbit.jsx'),
  'loyal-mongoose': () => import('./scenes/loyal-mongoose.jsx'),
  'crow-snake': () => import('./scenes/crow-snake.jsx'),
  'musical-donkey': () => import('./scenes/musical-donkey.jsx'),
  'monkey-wedge': () => import('./scenes/monkey-wedge.jsx'),
  'jackal-drum': () => import('./scenes/jackal-drum.jsx'),
  'talking-cave': () => import('./scenes/talking-cave.jsx'),
  'three-fish': () => import('./scenes/three-fish.jsx'),
  'brahmin-dream': () => import('./scenes/brahmin-dream.jsx'),
  'elephant-mice': () => import('./scenes/elephant-mice.jsx'),
  'krishna-butter': () => import('./scenes/krishna-butter.jsx'),
  'chhota-bheem': () => import('./scenes/chhota-bheem.jsx'),
  'troy': () => import('./scenes/troy.jsx'),
  'motu-patlu': () => import('./scenes/motu-patlu.jsx'),
  'two-headed-bird': () => import('./scenes/two-headed-bird.jsx'),
  'stork-crab': () => import('./scenes/stork-crab.jsx'),
  'hanuman-sun': () => import('./scenes/hanuman-sun.jsx'),
  'ganesha-moon': () => import('./scenes/ganesha-moon.jsx'),
  'prahlad': () => import('./scenes/prahlad.jsx'),
  'shinchan': () => import('./scenes/shinchan.jsx'),
  'doraemon': () => import('./scenes/doraemon.jsx'),
  'hercules': () => import('./scenes/hercules.jsx'),
  'icarus': () => import('./scenes/icarus.jsx'),
  'krishna-govardhan': () => import('./scenes/krishna-govardhan.jsx'),
  'krishna-kaliya': () => import('./scenes/krishna-kaliya.jsx'),
  'krishna-fruit': () => import('./scenes/krishna-fruit.jsx'),
  'bheem-kirmada': () => import('./scenes/bheem-kirmada.jsx'),
  'oggy': () => import('./scenes/oggy.jsx'),
};

// Cache loaded scene modules
const loadedScenes = {};

// Preload scenes for a story (call on story selection for instant rendering)
export function preloadStoryScenes(storyId) {
  const sceneFile = storyToSceneFile[storyId];
  if (!sceneFile || loadedScenes[sceneFile]) return Promise.resolve();
  const loader = sceneLoaders[sceneFile];
  if (!loader) return Promise.resolve();
  return loader().then((mod) => {
    loadedScenes[sceneFile] = mod.default;
  });
}

const SceneRenderer = ({ frame, storyId }) => {
  const { scene, bg } = frame;
  const sceneFile = storyToSceneFile[storyId];
  const [scenes, setScenes] = useState(() => loadedScenes[sceneFile] || null);

  // Load scenes for the current story
  useEffect(() => {
    if (!sceneFile) return;

    // Check cache first (may have been preloaded)
    if (loadedScenes[sceneFile]) {
      setScenes(loadedScenes[sceneFile]);
      return;
    }

    const loader = sceneLoaders[sceneFile];
    if (loader) {
      loader().then((mod) => {
        loadedScenes[sceneFile] = mod.default;
        setScenes(mod.default);
      });
    }
  }, [sceneFile]);

  // Generate CSS gradient from bg array
  const bgGradient = Array.isArray(bg)
    ? `linear-gradient(180deg, ${bg[0]} 0%, ${bg[1]} 33%, ${bg[2]} 66%, ${bg[3]} 100%)`
    : bg;

  const renderScene = () => {
    if (scenes && scenes[scene]) return scenes[scene]();
    // Neutral loading state (shown briefly while scene module loads)
    return null;
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
