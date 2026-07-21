import { useState, useEffect, useCallback, useMemo, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LandingPage from './components/LandingPage';
const ComicViewer = lazy(() => import('./components/ComicViewer'));
import { preloadStoryScenes } from './components/SceneRenderer';
import stories from './data/stories';
import './App.css';

const READING_KEY = 'kidtales-reading-progress';

// Global SVG filter definitions for character polish
const SvgFilters = () => (
  <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
    <defs>
      <filter id="globalSoftEdge">
        <feGaussianBlur in="SourceGraphic" stdDeviation="0.3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
      <filter id="globalGlow">
        <feGaussianBlur stdDeviation="2" result="glow" />
        <feMerge>
          <feMergeNode in="glow" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  </svg>
);

function getReadingProgress() {
  try {
    return JSON.parse(localStorage.getItem(READING_KEY)) || {};
  } catch { return {}; }
}

function saveReadingProgress(storyId, frameIndex, totalFrames) {
  const progress = getReadingProgress();
  progress[storyId] = { frame: frameIndex, total: totalFrames, ts: Date.now() };
  localStorage.setItem(READING_KEY, JSON.stringify(progress));
}

function App() {
  const [selectedStory, setSelectedStory] = useState(null);
  const [resumeFrame, setResumeFrame] = useState(0);
  const [progressVersion, setProgressVersion] = useState(0);

  const continueReading = useMemo(() => {
    void progressVersion; // dependency trigger
    const progress = getReadingProgress();
    return Object.entries(progress)
      .filter(([, p]) => p.frame > 0 && p.frame < p.total - 1)
      .sort(([, a], [, b]) => b.ts - a.ts)
      .slice(0, 10)
      .map(([id]) => stories.find(s => s.id === id))
      .filter(Boolean);
  }, [progressVersion]);

  const handleSelectStory = useCallback((story) => {
    const progress = getReadingProgress();
    const saved = progress[story.id];
    setResumeFrame(saved && saved.frame > 0 && saved.frame < saved.total - 1 ? saved.frame : 0);
    setSelectedStory(story);
    preloadStoryScenes(story.id);
    window.history.pushState({ storyId: story.id }, '', `#${story.id}`);
  }, []);

  const handleBack = useCallback(() => {
    setSelectedStory(null);
    setResumeFrame(0);
    setProgressVersion(v => v + 1);
    window.history.pushState(null, '', window.location.pathname);
    window.scrollTo(0, 0);
  }, []);

  const handleFrameChange = useCallback((storyId, frameIndex, totalFrames) => {
    saveReadingProgress(storyId, frameIndex, totalFrames);
  }, []);

  // Handle browser back/forward buttons
  useEffect(() => {
    const onPopState = (e) => {
      if (e.state?.storyId) {
        const story = stories.find(s => s.id === e.state.storyId);
        if (story) { setSelectedStory(story); return; }
      }
      setSelectedStory(null);
      setProgressVersion(v => v + 1);
    };
    window.addEventListener('popstate', onPopState);

    // Handle initial hash on page load (deep linking)
    const hash = window.location.hash.slice(1);
    if (hash) {
      const story = stories.find(s => s.id === hash);
      if (story) setSelectedStory(story);
    }

    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  if (selectedStory) {
    return (
      <>
        <SvgFilters />
        <AnimatePresence mode="wait">
        <motion.div
          key="viewer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Suspense fallback={<div className="app-loading"><div className="app-loading-spinner" /><p>Loading story...</p></div>}>
            <ComicViewer
              story={selectedStory}
              onBack={handleBack}
              initialFrame={resumeFrame}
              onFrameChange={handleFrameChange}
            />
          </Suspense>
        </motion.div>
      </AnimatePresence>
      </>
    );
  }

  return (
    <>
      <SvgFilters />
      <AnimatePresence mode="wait">
      <motion.div
        key="landing"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <LandingPage
          stories={stories}
          onSelectStory={handleSelectStory}
          continueReading={continueReading}
        />
      </motion.div>
    </AnimatePresence>
    </>
  );
}

export default App;
