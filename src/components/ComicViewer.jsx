import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import SceneRenderer from './SceneRenderer';
import { useNarration } from '../hooks/useNarration';
import { getTranslation } from '../data/translations';

const pageVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '60%' : '-60%',
    opacity: 0,
    scale: 0.88,
    rotateY: direction > 0 ? 15 : -15,
    filter: 'blur(4px)',
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    filter: 'blur(0px)',
  },
  exit: (direction) => ({
    x: direction < 0 ? '60%' : '-60%',
    opacity: 0,
    scale: 0.88,
    rotateY: direction < 0 ? 15 : -15,
    filter: 'blur(4px)',
  }),
};

const reducedVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

const ComicViewer = ({ story, onBack, initialFrame = 0, onFrameChange }) => {
  const [currentFrame, setCurrentFrame] = useState(initialFrame);
  const [direction, setDirection] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const touchRef = useRef({ startX: 0, startY: 0, startTime: 0 });
  const controlsVisibleRef = useRef(true);
  const controlsTimerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const totalFrames = story?.frames?.length || 0;

  // Frame orientation: portrait (3:4) vs landscape (default)
  const [isPortrait, setIsPortrait] = useState(() => {
    try { return localStorage.getItem('kidtales-portrait') === 'true'; } catch { return false; }
  });
  const togglePortrait = useCallback(() => {
    setIsPortrait(prev => {
      const next = !prev;
      try { localStorage.setItem('kidtales-portrait', String(next)); } catch {}
      return next;
    });
  }, []);

  // Audio narration - available for all stories
  const [narrationEnabled, setNarrationEnabled] = useState(false);
  const isNarrationSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

  // Language support
  const [language, setLanguage] = useState('en'); // 'en' or 'hi'
  const translation = language === 'hi' ? getTranslation(story?.id) : null;
  const hasTranslations = !!getTranslation(story?.id);

  // Get translated frame content
  const getFrameContent = useCallback((frameIndex) => {
    const originalFrame = story?.frames?.[frameIndex];
    if (!originalFrame) return null;
    if (language === 'hi' && translation) {
      const hiFrame = translation.frames[frameIndex];
      if (hiFrame) {
        return {
          ...originalFrame,
          narrative: hiFrame.narrative,
          dialogue: hiFrame.dialogue ? { ...originalFrame.dialogue, ...hiFrame.dialogue } : hiFrame.dialogue,
        };
      }
    }
    return originalFrame;
  }, [story, language, translation]);

  const currentFrameData = useMemo(() => getFrameContent(currentFrame), [getFrameContent, currentFrame]);
  useNarration(currentFrameData, narrationEnabled && isNarrationSupported, language);

  const goToFrame = useCallback((newFrame, dir) => {
    if (newFrame >= 0 && newFrame < totalFrames) {
      setDirection(dir);
      setCurrentFrame(newFrame);
    }
  }, [totalFrames]);

  // Report frame changes to parent for progress tracking
  useEffect(() => {
    if (totalFrames > 0) {
      onFrameChange?.(story.id, currentFrame, totalFrames);
    }
  }, [currentFrame, story?.id, totalFrames, onFrameChange]);

  const nextFrame = useCallback(() => goToFrame(currentFrame + 1, 1), [currentFrame, goToFrame]);
  const prevFrame = useCallback(() => goToFrame(currentFrame - 1, -1), [currentFrame, goToFrame]);

  // Keyboard navigation
  useEffect(() => {
    if (totalFrames === 0) return;
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); nextFrame(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); prevFrame(); }
      if (e.key === 'Escape') onBack();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [nextFrame, prevFrame, onBack, totalFrames]);

  // Auto-play with tab visibility pause
  useEffect(() => {
    if (!isAutoPlay || totalFrames === 0) return;
    let timer;

    const startTimer = () => {
      timer = setInterval(() => {
        setCurrentFrame(prev => {
          if (prev >= totalFrames - 1) { setIsAutoPlay(false); return prev; }
          setDirection(1);
          return prev + 1;
        });
      }, 5000);
    };

    const handleVisibility = () => {
      if (document.hidden) {
        clearInterval(timer);
      } else {
        startTimer();
      }
    };

    startTimer();
    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      clearInterval(timer);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [isAutoPlay, totalFrames]);

  // Hide controls after inactivity
  useEffect(() => {
    if (totalFrames === 0) return;
    setShowControls(true);
    controlsVisibleRef.current = true;
    controlsTimerRef.current = setTimeout(() => {
      setShowControls(false);
      controlsVisibleRef.current = false;
    }, 4000);
    return () => clearTimeout(controlsTimerRef.current);
  }, [currentFrame, totalFrames]);

  // Throttled mouse move handler
  const handleMouseMove = useCallback(() => {
    if (controlsVisibleRef.current) return;
    controlsVisibleRef.current = true;
    setShowControls(true);
    clearTimeout(controlsTimerRef.current);
    controlsTimerRef.current = setTimeout(() => {
      setShowControls(false);
      controlsVisibleRef.current = false;
    }, 4000);
  }, []);

  // Touch/swipe handling
  const handleTouchStart = useCallback((e) => {
    const touch = e.touches[0];
    touchRef.current = {
      startX: touch.clientX,
      startY: touch.clientY,
      startTime: Date.now(),
    };
  }, []);

  const handleTouchEnd = useCallback((e) => {
    const touch = e.changedTouches[0];
    const { startX, startY, startTime } = touchRef.current;
    const deltaX = touch.clientX - startX;
    const deltaY = touch.clientY - startY;
    const elapsed = Date.now() - startTime;

    if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5 && elapsed < 400) {
      if (deltaX < 0) { nextFrame(); } else { prevFrame(); }
    } else if (Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10 && elapsed < 200) {
      setShowControls(prev => !prev);
    }
  }, [nextFrame, prevFrame]);

  // Null guard - after all hooks
  if (!totalFrames) {
    return (
      <div className="comic-viewer" role="main" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', color: '#fff' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '16px' }}>No frames available for this story.</p>
          <button className="nav-btn back-btn" onClick={onBack} aria-label="Back to stories">Back</button>
        </div>
      </div>
    );
  }

  const frame = story.frames[currentFrame];
  const displayFrame = currentFrameData || frame;

  const motionVariants = prefersReducedMotion ? reducedVariants : pageVariants;
  const motionTransition = prefersReducedMotion
    ? { duration: 0.15 }
    : { type: 'spring', stiffness: 220, damping: 26, mass: 0.9, duration: 0.55 };

  return (
    <div
      className={`comic-viewer${isPortrait ? ' portrait' : ''}`}
      role="main"
      aria-label={`Reading: ${story.title}`}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Progress bar */}
      <div className="progress-bar-container" role="progressbar" aria-valuenow={currentFrame + 1} aria-valuemin={1} aria-valuemax={totalFrames} aria-label={`Page ${currentFrame + 1} of ${totalFrames}`}>
        <div className="progress-bar" style={{ width: `${((currentFrame + 1) / totalFrames) * 100}%` }} />
        <div className="progress-dots">
          {story.frames.map((_, i) => (
            <button
              key={i}
              className={`progress-dot ${i === currentFrame ? 'active' : ''} ${i < currentFrame ? 'completed' : ''}`}
              onClick={() => goToFrame(i, i > currentFrame ? 1 : -1)}
              aria-label={`Go to frame ${i + 1}`}
              title={`Frame ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Frame counter */}
      <div className="frame-counter" aria-hidden="true">
        <span className="frame-number">{currentFrame + 1}</span>
        <span className="frame-total"> / {totalFrames}</span>
      </div>

      {/* Story title (mobile) */}
      <div className="comic-story-title" aria-hidden="true">
        {hasTranslations && language === 'hi' ? translation.title : story.title}
      </div>

      {/* Comic panel */}
      <div className="comic-panel">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentFrame}
            custom={direction}
            variants={motionVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={motionTransition}
            className="comic-frame-wrapper"
          >
            <div className="comic-frame">
              {/* Scene illustration */}
              <div className="frame-illustration" aria-hidden="true">
                <SceneRenderer frame={frame} storyId={story.id} />
              </div>

              {/* Comic panel border */}
              <div className="comic-border" />

              {/* Speech bubble */}
              {displayFrame.dialogue && (
                <motion.div
                  className={`speech-bubble ${displayFrame.dialogue.speaker === 'Finn' ? 'speaker-finn' : 'speaker-other'}`}
                  initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.6, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.5, type: 'spring', stiffness: 240, damping: 20 }}
                >
                  <span className="speaker-name">{displayFrame.dialogue.speaker}</span>
                  <p className="dialogue-text" aria-live="polite">&ldquo;{displayFrame.dialogue.text}&rdquo;</p>
                  <div className="bubble-tail" />
                </motion.div>
              )}
            </div>

            {/* Narrative text - below frame on mobile */}
            <motion.div
              className="narrative-box"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.25, duration: 0.4 }}
            >
              <p className="narrative-text" aria-live="polite">{displayFrame.narrative}</p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <nav className={`nav-controls ${showControls ? 'visible' : 'hidden'}`} aria-label="Comic navigation">
        <button className="nav-btn back-btn" onClick={onBack} aria-label="Back to stories" title="Back to stories">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="nav-main">
          {/* Language toggle */}
          {hasTranslations && (
            <button
              className={`nav-btn lang-btn`}
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              aria-label={language === 'en' ? 'Switch to Hindi' : 'Switch to English'}
              title={language === 'en' ? 'हिंदी' : 'English'}
              style={{ fontWeight: 'bold', fontSize: '0.75rem', minWidth: '38px' }}
            >
              {language === 'en' ? 'हि' : 'EN'}
            </button>
          )}

          {/* Portrait/landscape toggle */}
          <button
            className={`nav-btn orientation-btn${isPortrait ? ' active' : ''}`}
            onClick={togglePortrait}
            aria-label={isPortrait ? 'Switch to landscape view' : 'Switch to portrait view'}
            title={isPortrait ? 'Landscape view' : 'Portrait view'}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {isPortrait ? (
                <rect x="3" y="5" width="18" height="14" rx="2" />
              ) : (
                <rect x="6" y="2" width="12" height="20" rx="2" />
              )}
            </svg>
          </button>

          {isNarrationSupported && (
            <button
              className={`nav-btn narration-btn ${narrationEnabled ? 'active' : ''}`}
              onClick={() => setNarrationEnabled(!narrationEnabled)}
              aria-label={narrationEnabled ? 'Disable narration' : 'Enable narration'}
              title={narrationEnabled ? 'Narration ON' : 'Narration OFF'}
              style={narrationEnabled ? { color: '#FFD700', background: 'rgba(255,215,0,0.15)' } : {}}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M11 5L6 9H2v6h4l5 4V5z" />
                {narrationEnabled ? (
                  <>
                    <path d="M15.54 8.46a5 5 0 010 7.07" />
                    <path d="M19.07 4.93a10 10 0 010 14.14" />
                  </>
                ) : (
                  <path d="M23 9l-6 6M17 9l6 6" />
                )}
              </svg>
            </button>
          )}

          <button
            className="nav-btn prev-btn"
            onClick={prevFrame}
            disabled={currentFrame === 0}
            aria-label="Previous frame"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            className="nav-btn play-btn"
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            aria-label={isAutoPlay ? 'Pause auto-play' : 'Start auto-play'}
            title={isAutoPlay ? 'Pause' : 'Auto-play'}
          >
            {isAutoPlay ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <polygon points="6,3 20,12 6,21" />
              </svg>
            )}
          </button>

          <button
            className="nav-btn next-btn"
            onClick={nextFrame}
            disabled={currentFrame === totalFrames - 1}
            aria-label="Next frame"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Auto-play indicator */}
      {isAutoPlay && (
        <div className="autoplay-indicator" aria-live="polite">
          <span className="autoplay-dot" /> Auto-playing
        </div>
      )}

      {/* End screen */}
      {currentFrame === totalFrames - 1 && (
        <motion.div
          className="moral-card"
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={prefersReducedMotion ? { duration: 0 } : { delay: 2.5, duration: 0.5 }}
          >
            <motion.div 
            className="moral-content" 
            role="complementary" 
            aria-label="Story moral"
            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { delay: 2.8, type: 'spring', stiffness: 200, damping: 22 }}
          >
            <div className="moral-icon" aria-hidden="true">{'\u{2728}'}</div>
            <h3>The Moral</h3>
            <p>{hasTranslations && language === 'hi' ? translation.moral : story.moral}</p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="restart-btn" onClick={() => goToFrame(0, -1)}>
                {'\u{1F504}'} Read Again
              </button>
              <button className="restart-btn restart-btn-secondary" onClick={onBack}>
                {'\u{1F4DA}'} All Stories
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ComicViewer;
