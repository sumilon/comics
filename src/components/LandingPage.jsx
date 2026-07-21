import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Monkey, RoseAppleTree } from './Characters';
import { Tortoise, Goose, Jackal, Lion, Rabbit, Mongoose, Snake, Donkey, Crow, CrowWife, Brahmin, Pot, Elephant, Mouse, Fox, Cave, Fish, TwoHeadedBird, Stork, Crab, Log, Drum, Krishna, ButterPot, Bheem, MagicLadoo, Odysseus, WoodenHorse, Motu, Patlu, Samosa, Hanuman, Ganesha, Prahlad, Shinchan, Doraemon, Nobita, Hercules, Icarus, FruitSeller, OggyCharacter, CockroachTrio, BheemWarrior, KaliyaSerpent, GovardhanHill } from './CharactersNew';

const coverIllustrations = {
  'monkey-and-crocodile': () => (
    <>
      <Monkey size={130} mood="happy" className="float-animation" />
      <div style={{ position: 'absolute', right: '-20px', bottom: '-10px', opacity: 0.8 }}>
        <RoseAppleTree size={100} />
      </div>
    </>
  ),
  'tortoise-and-geese': () => (
    <>
      <Tortoise size={110} mood="happy" className="float-animation" />
      <div style={{ position: 'absolute', right: '-15px', top: '5px', opacity: 0.8 }}>
        <Goose size={80} side="right" className="float-animation" />
      </div>
      <div style={{ position: 'absolute', left: '-15px', top: '10px', opacity: 0.7 }}>
        <Goose size={70} side="left" className="float-animation" />
      </div>
    </>
  ),
  'blue-jackal': () => (
    <Jackal size={140} blue mood="regal" className="float-animation" />
  ),
  'lion-and-rabbit': () => (
    <>
      <Lion size={130} mood="neutral" className="float-animation" />
      <div style={{ position: 'absolute', right: '-10px', bottom: '0px' }}>
        <Rabbit size={70} mood="clever" className="bounce-animation" />
      </div>
    </>
  ),
  'loyal-mongoose': () => (
    <>
      <Mongoose size={120} mood="alert" className="anim-breathe" />
      <div style={{ position: 'absolute', right: '-15px', bottom: '-5px', opacity: 0.7 }}>
        <Snake size={70} mood="striking" className="anim-sway" />
      </div>
    </>
  ),
  'musical-donkey': () => (
    <Donkey size={130} mood="singing" className="anim-wobble" />
  ),
  'crow-and-snake': () => (
    <>
      <Crow size={100} mood="triumphant" className="anim-drift" />
      <div style={{ position: 'absolute', right: '-10px', bottom: '0px', opacity: 0.8 }}>
        <CrowWife size={80} mood="happy" className="anim-drift" />
      </div>
    </>
  ),
  'brahmin-dream': () => (
    <>
      <Brahmin size={120} mood="happy" className="float-animation" />
      <div style={{ position: 'absolute', right: '-10px', bottom: '0px', opacity: 0.8 }}>
        <Pot size={70} className="anim-sway" />
      </div>
    </>
  ),
  'elephant-and-mice': () => (
    <>
      <Elephant size={130} className="anim-breathe" />
      <div style={{ position: 'absolute', right: '-5px', bottom: '5px' }}>
        <Mouse size={50} className="anim-hop" />
      </div>
    </>
  ),
  'talking-cave': () => (
    <>
      <Fox size={110} mood="clever" className="float-animation" />
      <div style={{ position: 'absolute', right: '-15px', bottom: '-5px', opacity: 0.7 }}>
        <Cave size={80} className="anim-breathe" />
      </div>
    </>
  ),
  'three-fish': () => (
    <>
      <Fish size={100} className="anim-drift" />
      <div style={{ position: 'absolute', right: '10px', top: '15px', opacity: 0.7 }}>
        <Fish size={70} className="anim-drift" />
      </div>
      <div style={{ position: 'absolute', left: '-10px', bottom: '5px', opacity: 0.6 }}>
        <Fish size={60} className="anim-drift" />
      </div>
    </>
  ),
  'two-headed-bird': () => (
    <TwoHeadedBird size={140} className="float-animation" />
  ),
  'stork-and-crab': () => (
    <>
      <Stork size={120} className="anim-sway" />
      <div style={{ position: 'absolute', right: '-10px', bottom: '0px' }}>
        <Crab size={70} className="anim-wobble" />
      </div>
    </>
  ),
  'monkey-and-wedge': () => (
    <>
      <Monkey size={120} mood="happy" className="bounce-animation" />
      <div style={{ position: 'absolute', right: '-10px', bottom: '0px', opacity: 0.8 }}>
        <Log size={80} className="anim-breathe" />
      </div>
    </>
  ),
  'jackal-and-drum': () => (
    <>
      <Jackal size={110} className="anim-hop" />
      <div style={{ position: 'absolute', right: '-10px', bottom: '0px', opacity: 0.8 }}>
        <Drum size={80} className="anim-wobble" />
      </div>
    </>
  ),
  'krishna-butter': () => (
    <>
      <Krishna size={120} mood="playful" className="bounce-animation" />
      <div style={{ position: 'absolute', right: '-10px', bottom: '0px', opacity: 0.8 }}>
        <ButterPot size={70} className="anim-wobble" />
      </div>
    </>
  ),
  'chhota-bheem': () => (
    <>
      <Bheem size={130} mood="heroic" className="bounce-animation" />
      <div style={{ position: 'absolute', right: '-10px', bottom: '0px', opacity: 0.8 }}>
        <MagicLadoo size={55} glowing className="pulse-animation" />
      </div>
    </>
  ),
  'odysseus-troy': () => (
    <>
      <Odysseus size={120} mood="heroic" className="bounce-animation" />
      <div style={{ position: 'absolute', right: '-15px', bottom: '-5px', opacity: 0.8 }}>
        <WoodenHorse size={90} className="anim-wobble" />
      </div>
    </>
  ),
  'motu-patlu': () => (
    <>
      <Motu size={110} mood="happy" className="bounce-animation" />
      <div style={{ position: 'absolute', right: '-15px', bottom: '0px', opacity: 0.9 }}>
        <Patlu size={95} mood="smart" className="anim-breathe" />
      </div>
      <div style={{ position: 'absolute', right: '5px', top: '5px', opacity: 0.7 }}>
        <Samosa size={35} className="float-animation" />
      </div>
    </>
  ),
  'hanuman-sun': () => (
    <Hanuman size={130} mood="flying" className="bounce-animation" />
  ),
  'ganesha-moon': () => (
    <Ganesha size={130} mood="playful" className="float-animation" />
  ),
  'prahlad-faith': () => (
    <Prahlad size={120} mood="praying" className="anim-breathe" />
  ),
  'krishna-govardhan': () => (
    <>
      <Krishna size={110} mood="lifting" className="anim-breathe" />
      <div style={{ position: 'absolute', right: '-20px', bottom: '-10px', opacity: 0.85 }}>
        <GovardhanHill size={120} lifted className="float-animation" />
      </div>
    </>
  ),
  'krishna-kaliya': () => (
    <>
      <Krishna size={100} mood="dancing" className="bounce-animation" />
      <div style={{ position: 'absolute', right: '-15px', bottom: '-5px', opacity: 0.85 }}>
        <KaliyaSerpent size={90} mood="defeated" className="anim-sway" />
      </div>
    </>
  ),
  'krishna-fruit-seller': () => (
    <>
      <Krishna size={100} mood="happy" className="bounce-animation" />
      <div style={{ position: 'absolute', right: '-10px', bottom: '0px', opacity: 0.9 }}>
        <FruitSeller size={100} mood="kind" className="anim-breathe" />
      </div>
    </>
  ),
  'shinchan-homework': () => (
    <Shinchan size={120} mood="lazy" className="anim-wobble" />
  ),
  'doraemon-gadget': () => (
    <>
      <Doraemon size={110} mood="happy" className="bounce-animation" />
      <div style={{ position: 'absolute', right: '-10px', bottom: '0px', opacity: 0.8 }}>
        <Nobita size={90} mood="amazed" className="anim-breathe" />
      </div>
    </>
  ),
  'bheem-kirmada': () => (
    <BheemWarrior size={130} mood="fierce" className="bounce-animation" />
  ),
  'oggy-adventure': () => (
    <>
      <OggyCharacter size={110} mood="happy" className="bounce-animation" />
      <div style={{ position: 'absolute', right: '-10px', bottom: '0px', opacity: 0.8 }}>
        <CockroachTrio size={60} className="anim-hop" />
      </div>
    </>
  ),
  'hercules-apples': () => (
    <Hercules size={130} mood="determined" className="bounce-animation" />
  ),
  'icarus-wings': () => (
    <Icarus size={130} mood="flying" className="float-animation" />
  ),
};

// Derive category from story subtitle/id
const getCategory = (story) => {
  const sub = story.subtitle.toLowerCase();
  if (sub.includes('panchatantra')) return 'panchatantra';
  if (sub.includes('greek') || ['odysseus-troy', 'hercules-apples', 'icarus-wings'].includes(story.id)) return 'greek';
  if (sub.includes('mytholog') || ['krishna-butter', 'hanuman-sun', 'ganesha-moon', 'prahlad-faith', 'krishna-govardhan', 'krishna-kaliya', 'krishna-fruit-seller'].includes(story.id)) return 'mythology';
  if (['chhota-bheem', 'motu-patlu', 'shinchan-homework', 'doraemon-gadget', 'bheem-kirmada', 'oggy-adventure'].includes(story.id)) return 'indian-animation';
  if (sub.includes('indian animation') || sub.includes('animation')) return 'indian-animation';
  return 'panchatantra';
};

const categoryConfig = {
  panchatantra:       { label: 'Panchatantra Tales',   emoji: '\u{1F3EF}' },
  mythology:          { label: 'Indian Mythology',     emoji: '\u{1F31F}' },
  'indian-animation': { label: 'Indian Animation',     emoji: '\u{1F4AB}' },
  greek:              { label: 'Greek Mythology',       emoji: '\u{1F3DB}' },
};

const getReadingTime = (story) => {
  const frames = story.frames?.length || 0;
  const minutes = Math.max(2, Math.ceil(frames * 0.4));
  return `${minutes} min`;
};

// Featured stories are randomly selected per visit (see useMemo in component)

// ===== Horizontal Scroll Row Component =====
const StoryRow = ({ title, stories, onSelectStory, coverIllustrations, onInfoClick }) => {
  const rowRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = rowRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState, stories]);

  const scroll = useCallback((dir) => {
    const el = rowRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.75;
    el.scrollBy({ left: dir * scrollAmount, behavior: 'smooth' });
  }, []);

  if (!stories.length) return null;

  return (
    <div className="nf-row">
      <h2 className="nf-row-title">{title}</h2>
      <div className="nf-row-slider">
        {canScrollLeft && (
          <button className="nf-row-arrow nf-row-arrow--left" onClick={() => scroll(-1)} aria-label="Scroll left">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
        )}
        <div className="nf-row-cards" ref={rowRef}>
          {stories.map((story) => {
            const CoverArt = coverIllustrations[story.id];
            return (
              <div
                key={story.id}
                className="nf-card"
                tabIndex={0}
                onClick={() => onSelectStory(story)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelectStory(story); } }}
                aria-label={`${story.title} - ${getReadingTime(story)}`}
              >
                <div
                  className="nf-card-cover"
                  style={{ background: `linear-gradient(145deg, ${story.coverColor}ee, ${story.coverColor}99, ${story.coverColor}66)` }}
                >
                  <div className="cover-illustration">
                    {CoverArt ? <CoverArt /> : (
                      <svg width="70" height="70" viewBox="0 0 100 100"><text x="50" y="65" textAnchor="middle" fontSize="50">{story.coverEmoji}</text></svg>
                    )}
                  </div>
                  <div className="nf-card-hover-info">
                    <h3 className="nf-card-title">{story.title}</h3>
                    <p className="nf-card-subtitle">{story.subtitle}</p>
                    <div className="nf-card-meta">
                      <span className="nf-card-time">{getReadingTime(story)}</span>
                      <span className="nf-card-theme">{story.theme}</span>
                    </div>
                    <div className="nf-card-actions">
                      <button className="nf-card-play" tabIndex={-1}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="6,3 20,12 6,21" /></svg>
                        <span className="nf-play-text-full">Read Now</span>
                        <span className="nf-play-text-short">Read</span>
                      </button>
                      <button className="nf-card-info-btn" onClick={(e) => { e.stopPropagation(); onInfoClick(story); }} aria-label={`More info about ${story.title}`}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="nf-card-name">{story.title}</div>
              </div>
            );
          })}
        </div>
        {canScrollRight && (
          <button className="nf-row-arrow nf-row-arrow--right" onClick={() => scroll(1)} aria-label="Scroll right">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        )}
      </div>
    </div>
  );
};

// ===== Main Landing Page =====
const LandingPage = ({ stories, onSelectStory, continueReading }) => {
  const prefersReducedMotion = useReducedMotion();
  const [billboardIdx, setBillboardIdx] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(null);
  const billboardTimerRef = useRef(null);

  // Pick 5 random featured stories once per mount
  const featuredStories = useMemo(() => {
    const shuffled = [...stories].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 5);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const billboard = featuredStories[billboardIdx] || stories[0];
  const BillboardArt = coverIllustrations[billboard?.id];

  // Auto-rotate billboard
  useEffect(() => {
    if (featuredStories.length <= 1) return;
    billboardTimerRef.current = setInterval(() => {
      setBillboardIdx(prev => (prev + 1) % featuredStories.length);
    }, 8000);
    return () => clearInterval(billboardTimerRef.current);
  }, [featuredStories.length]);

  const goToBillboard = useCallback((idx) => {
    setBillboardIdx(idx);
    clearInterval(billboardTimerRef.current);
    billboardTimerRef.current = setInterval(() => {
      setBillboardIdx(prev => (prev + 1) % featuredStories.length);
    }, 8000);
  }, [featuredStories.length]);

  // Scroll-to-top & navbar
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      setNavScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Group stories by category
  const categorizedStories = useMemo(() => {
    const groups = {};
    Object.keys(categoryConfig).forEach(key => { groups[key] = []; });
    stories.forEach(story => {
      const cat = getCategory(story);
      if (groups[cat]) groups[cat].push(story);
    });
    return groups;
  }, [stories]);

  if (!stories?.length) {
    return (
      <div className="nf-landing" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <p style={{ color: '#999', fontSize: '1.1rem' }}>No stories available yet.</p>
      </div>
    );
  }

  return (
    <div className="nf-landing">
      {/* ===== Top Navbar ===== */}
      <nav className={`nf-navbar ${navScrolled ? 'nf-navbar-scrolled' : ''}`}>
        <div className="nf-navbar-brand">
          <span className="nf-logo">Kid<span className="nf-logo-accent">Tales</span></span>
        </div>
        <div className="nf-navbar-stats">
          <span className="nf-nav-stat">{stories.length} Stories</span>
          <span className="nf-nav-stat">{Object.keys(categoryConfig).length} Categories</span>
        </div>
      </nav>

      {/* ===== Hero Billboard ===== */}
      <section className="nf-billboard" aria-label="Featured story">
        <AnimatePresence mode="wait">
          <motion.div
            key={billboard.id}
            className="nf-billboard-bg"
            style={{ background: `linear-gradient(135deg, ${billboard.coverColor}cc, ${billboard.coverColor}66, #141414)` }}
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
        <div className="nf-billboard-gradient" />

        <div className="nf-billboard-content">
          <div className="nf-billboard-text">
            <AnimatePresence mode="wait">
              <motion.div
                key={billboard.id}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <span className="nf-billboard-category">{categoryConfig[getCategory(billboard)]?.label}</span>
                <h1 className="nf-billboard-title">{billboard.title}</h1>
                <p className="nf-billboard-desc">{billboard.moral}</p>
                <div className="nf-billboard-meta">
                  <span>{billboard.frames?.length} frames</span>
                  <span className="nf-meta-dot" />
                  <span>{getReadingTime(billboard)}</span>
                  <span className="nf-meta-dot" />
                  <span style={{ textTransform: 'capitalize' }}>{billboard.theme}</span>
                </div>
                <div className="nf-billboard-actions">
                  <button className="nf-btn-play" onClick={() => onSelectStory(billboard)}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="6,3 20,12 6,21" /></svg>
                    Read Now
                  </button>
                  <button className="nf-btn-info" onClick={() => setShowInfoModal(billboard)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
                    More Info
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="nf-billboard-art">
            <AnimatePresence mode="wait">
              <motion.div
                key={billboard.id}
                className="nf-billboard-illustration"
                initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                {BillboardArt && <BillboardArt />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Billboard pagination dots */}
        {featuredStories.length > 1 && (
          <div className="nf-billboard-dots">
            {featuredStories.map((_, i) => (
              <button
                key={i}
                className={`nf-billboard-dot ${i === billboardIdx ? 'active' : ''}`}
                onClick={() => goToBillboard(i)}
                aria-label={`Go to featured story ${i + 1}`}
              />
            ))}
          </div>
        )}
      </section>

      {/* ===== Continue Reading Row ===== */}
      {continueReading && continueReading.length > 0 && (
        <StoryRow
          title="Continue Reading"
          stories={continueReading}
          onSelectStory={onSelectStory}
          coverIllustrations={coverIllustrations}
          onInfoClick={setShowInfoModal}
        />
      )}

      {/* ===== Category Rows ===== */}
      {Object.entries(categoryConfig).map(([key, { label }]) => (
        <StoryRow
          key={key}
          title={label}
          stories={categorizedStories[key] || []}
          onSelectStory={onSelectStory}
          coverIllustrations={coverIllustrations}
          onInfoClick={setShowInfoModal}
        />
      ))}

      {/* ===== All Stories Row ===== */}
      <StoryRow
        title="All Stories"
        stories={stories}
        onSelectStory={onSelectStory}
        coverIllustrations={coverIllustrations}
        onInfoClick={setShowInfoModal}
      />

      {/* ===== More Info Modal ===== */}
      <AnimatePresence>
        {showInfoModal && (
          <motion.div
            className="nf-info-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowInfoModal(null)}
          >
            <motion.div
              className="nf-info-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="nf-info-modal-title"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', stiffness: 260, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => { if (e.key === 'Escape') setShowInfoModal(null); }}
              tabIndex={-1}
              ref={(el) => el?.focus()}
            >
              <button className="nf-info-close" onClick={() => setShowInfoModal(null)} aria-label="Close">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
              </button>
              <div className="nf-info-header" style={{ background: `linear-gradient(135deg, ${showInfoModal.coverColor}cc, ${showInfoModal.coverColor}55)` }}>
                <div className="nf-info-art">
                  {coverIllustrations[showInfoModal.id] && React.createElement(coverIllustrations[showInfoModal.id])}
                </div>
              </div>
              <div className="nf-info-body">
                <span className="nf-info-category">{categoryConfig[getCategory(showInfoModal)]?.label}</span>
                <h2 className="nf-info-title" id="nf-info-modal-title">{showInfoModal.title}</h2>
                <p className="nf-info-subtitle">{showInfoModal.subtitle}</p>
                <div className="nf-info-stats">
                  <span>{showInfoModal.frames?.length} Frames</span>
                  <span>{getReadingTime(showInfoModal)}</span>
                  <span style={{ textTransform: 'capitalize' }}>{showInfoModal.theme}</span>
                </div>
                <div className="nf-info-moral">
                  <strong>Moral:</strong> {showInfoModal.moral}
                </div>
                <button className="nf-info-read-btn" onClick={() => { setShowInfoModal(null); onSelectStory(showInfoModal); }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="6,3 20,12 6,21" /></svg>
                  Start Reading
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Footer ===== */}
      <footer className="nf-footer">
        <div className="nf-footer-brand">KidTales</div>
        <p className="nf-footer-tagline">Interactive comics for curious young minds</p>
        <div className="nf-footer-stats">
          <span>{stories.length}+ Stories</span>
          <span>{stories.reduce((a, s) => a + (s.frames?.length || 0), 0)}+ Frames</span>
          <span>Made with love</span>
        </div>
      </footer>

      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="nf-scroll-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            aria-label="Scroll to top"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 15l-6-6-6 6" /></svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;
