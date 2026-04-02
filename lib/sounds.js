'use client';

class SoundLibrary {
  constructor() {
    this.audioCtx = null;
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  // 1. Begin Mission
  playBeginMission() {
    try {
      this.init();
      const ctx = this.audioCtx;
      const t = ctx.currentTime;

      // Soft digital click
      const clickOsc = ctx.createOscillator();
      const clickGain = ctx.createGain();
      clickOsc.type = 'square';
      clickOsc.frequency.setValueAtTime(800, t);
      clickOsc.frequency.exponentialRampToValueAtTime(100, t + 0.05);
      clickGain.gain.setValueAtTime(0, t);
      clickGain.gain.linearRampToValueAtTime(0.3, t + 0.01);
      clickGain.gain.exponentialRampToValueAtTime(0.01, t + 0.05);

      clickOsc.connect(clickGain);
      clickGain.connect(ctx.destination);
      clickOsc.start(t);
      clickOsc.stop(t + 0.05);

      // Rising synth energy
      const riseOsc = ctx.createOscillator();
      const riseGain = ctx.createGain();
      riseOsc.type = 'sawtooth';
      riseOsc.frequency.setValueAtTime(50, t);
      riseOsc.frequency.exponentialRampToValueAtTime(600, t + 0.8);

      riseGain.gain.setValueAtTime(0, t);
      riseGain.gain.linearRampToValueAtTime(0.15, t + 0.5);
      riseGain.gain.exponentialRampToValueAtTime(0.01, t + 0.8);

      riseOsc.connect(riseGain);
      riseGain.connect(ctx.destination);
      riseOsc.start(t);
      riseOsc.stop(t + 0.8);

      // Powerful activation pulse
      const pulseOsc = ctx.createOscillator();
      const pulseGain = ctx.createGain();
      pulseOsc.type = 'square';
      pulseOsc.frequency.setValueAtTime(100, t + 0.8);
      pulseOsc.frequency.exponentialRampToValueAtTime(20, t + 1.5);

      pulseGain.gain.setValueAtTime(0, t + 0.8);
      pulseGain.gain.linearRampToValueAtTime(0.4, t + 0.85);
      pulseGain.gain.exponentialRampToValueAtTime(0.01, t + 1.5);

      // Glitch / filter effect on pulse
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(2000, t + 0.8);
      filter.frequency.exponentialRampToValueAtTime(100, t + 1.5);

      pulseOsc.connect(filter);
      filter.connect(pulseGain);
      pulseGain.connect(ctx.destination);
      pulseOsc.start(t + 0.8);
      pulseOsc.stop(t + 1.5);

    } catch (e) {
      console.warn("Audio Context failed:", e);
    }
  }

  // 2. Loadout
  playLoadout() {
    try {
      this.init();
      const ctx = this.audioCtx;
      let t = ctx.currentTime;

      // Mechanical clicks
      for (let i = 0; i < 3; i++) {
        const clickOsc = ctx.createOscillator();
        const clickGain = ctx.createGain();
        clickOsc.type = 'square';
        clickOsc.frequency.setValueAtTime(1200 + (i * 200), t);
        clickOsc.frequency.exponentialRampToValueAtTime(200, t + 0.05);

        clickGain.gain.setValueAtTime(0, t);
        clickGain.gain.linearRampToValueAtTime(0.1, t + 0.01);
        clickGain.gain.exponentialRampToValueAtTime(0.01, t + 0.05);

        clickOsc.connect(clickGain);
        clickGain.connect(ctx.destination);
        clickOsc.start(t);
        clickOsc.stop(t + 0.05);
        t += 0.08; // stagger clicks
      }

      // Scanning tone (rapid modulation)
      const scanOsc = ctx.createOscillator();
      const scanGain = ctx.createGain();
      scanOsc.type = 'sawtooth';

      // modulate frequency to sound like scanning
      scanOsc.frequency.setValueAtTime(400, t);
      scanOsc.frequency.linearRampToValueAtTime(600, t + 0.1);
      scanOsc.frequency.linearRampToValueAtTime(300, t + 0.2);
      scanOsc.frequency.linearRampToValueAtTime(800, t + 0.4);

      scanGain.gain.setValueAtTime(0, t);
      scanGain.gain.linearRampToValueAtTime(0.05, t + 0.1);
      scanGain.gain.setValueAtTime(0.05, t + 0.3);
      scanGain.gain.linearRampToValueAtTime(0.01, t + 0.4);

      scanOsc.connect(scanGain);
      scanGain.connect(ctx.destination);
      scanOsc.start(t);
      scanOsc.stop(t + 0.4);

    } catch (e) {
      console.warn("Audio Context failed:", e);
    }
  }

  // 3. Send Message
  playSendMessage() {
    try {
      this.init();
      const ctx = this.audioCtx;
      const t = ctx.currentTime;

      // Soft pop
      const popOsc = ctx.createOscillator();
      const popGain = ctx.createGain();
      popOsc.type = 'sine';
      popOsc.frequency.setValueAtTime(800, t);
      popOsc.frequency.exponentialRampToValueAtTime(400, t + 0.05);

      popGain.gain.setValueAtTime(0, t);
      popGain.gain.linearRampToValueAtTime(0.2, t + 0.01);
      popGain.gain.exponentialRampToValueAtTime(0.01, t + 0.05);

      popOsc.connect(popGain);
      popGain.connect(ctx.destination);
      popOsc.start(t);
      popOsc.stop(t + 0.05);

      // Light digital chime
      const chimeOsc = ctx.createOscillator();
      const chimeGain = ctx.createGain();
      chimeOsc.type = 'sine';
      chimeOsc.frequency.setValueAtTime(1200, t + 0.05);
      chimeOsc.frequency.exponentialRampToValueAtTime(2400, t + 0.3);

      chimeGain.gain.setValueAtTime(0, t + 0.05);
      chimeGain.gain.linearRampToValueAtTime(0.2, t + 0.1);
      chimeGain.gain.exponentialRampToValueAtTime(0.01, t + 0.6);

      chimeOsc.connect(chimeGain);
      chimeGain.connect(ctx.destination);
      chimeOsc.start(t + 0.05);
      chimeOsc.stop(t + 0.6);

    } catch (e) {
      console.warn("Audio Context failed:", e);
    }
  }
}

export const sounds = typeof window !== 'undefined' ? new SoundLibrary() : null;






//made this part using Gemini 3 Pro High