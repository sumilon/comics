import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Hook that uses the Web Speech API to narrate comic frames.
 * Reads the narrative text and dialogue when the frame changes.
 * 
 * @param {object} frame - Current frame object with narrative and dialogue
 * @param {boolean} enabled - Whether narration is active
 * @param {string} language - 'en' or 'hi'
 * @returns {{ isSpeaking }}
 */
export function useNarration(frame, enabled, language = 'en') {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const lastSpokenRef = useRef(null);
  const synth = typeof window !== 'undefined' && window.speechSynthesis ? window.speechSynthesis : null;
  const [voices, setVoices] = useState(() => synth ? synth.getVoices() : []);

  // Load voices when they become available (some browsers load async)
  useEffect(() => {
    if (!synth) return;
    const handler = () => setVoices(synth.getVoices());
    synth.addEventListener('voiceschanged', handler);
    return () => synth.removeEventListener('voiceschanged', handler);
  }, []);

  // Build the text to read for a frame
  const getFrameText = useCallback((f, lang) => {
    if (!f) return '';
    let text = f.narrative || '';
    if (f.dialogue?.text) {
      const connector = lang === 'hi' ? ' बोला: ' : ' says: ';
      text += ` ${f.dialogue.speaker}${connector}${f.dialogue.text}`;
    }
    return text;
  }, []);

  // Cancel speech whenever language changes or narration is disabled
  useEffect(() => {
    if (!synth) return;
    synth.cancel();
    setIsSpeaking(false);
  }, [language, enabled]);

  // Speak the current frame - keyed on frame.id + language
  const frameId = frame?.id;
  useEffect(() => {
    if (!synth || !enabled || !frame || !frameId) return;

    // Avoid double-speaking the same frame+language combo
    const key = `${frameId}-${language}`;
    if (lastSpokenRef.current === key) return;

    // Small delay to let cancel() from language switch take effect
    const timer = setTimeout(() => {
      synth.cancel();

      const text = getFrameText(frame, language);
      if (!text) return;

      const utterance = new SpeechSynthesisUtterance(text);
      // Same soft, clear settings for both languages - kid-friendly storytelling
      utterance.volume = 0.7;
      utterance.rate = 0.78;
      utterance.pitch = 1.15;

      if (language === 'hi') {
        utterance.lang = 'hi-IN';
        const hiVoice = voices.find(v => v.lang === 'hi-IN' && v.name.toLowerCase().includes('female'))
          || voices.find(v => v.lang === 'hi-IN' && v.name.includes('Swara'))
          || voices.find(v => v.lang === 'hi-IN' && v.name.includes('Microsoft Swara'))
          || voices.find(v => v.lang.startsWith('hi'));
        if (hiVoice) utterance.voice = hiVoice;
      } else {
        utterance.lang = 'en-US';
        const preferred = voices.find(v => v.name.includes('Samantha'))
          || voices.find(v => v.name.includes('Microsoft Zira'))
          || voices.find(v => v.name.includes('Google UK English Female'))
          || voices.find(v => v.name.includes('Microsoft Jenny'))
          || voices.find(v => v.lang.startsWith('en') && v.name.toLowerCase().includes('female'));
        if (preferred) utterance.voice = preferred;
      }

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      lastSpokenRef.current = key;
      synth.speak(utterance);
    }, 50);

    return () => {
      clearTimeout(timer);
      synth.cancel();
      setIsSpeaking(false);
    };
  }, [frameId, enabled, language, frame, getFrameText, voices]);

  // Reset tracking when narration is toggled off
  useEffect(() => {
    if (!enabled) {
      lastSpokenRef.current = null;
    }
  }, [enabled]);

  // Cleanup on unmount
  useEffect(() => {
    return () => { if (synth) synth.cancel(); };
  }, []);

  return { isSpeaking };
}
