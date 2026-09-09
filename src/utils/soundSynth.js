// Ambient Romantic Sound Synthesizer via Web Audio API
// Generates gentle, warm, movie-soundtrack style ambient chords in D-flat major / F major
class AmbientSoundSynth {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.masterGain = null;
    this.intervalId = null;
    this.volume = 0.35;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return false;
      this.ctx = new AudioContext();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return true;
  }

  playNote(frequency, startTime, duration = 3.5, gainLevel = 0.12) {
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      // Warm analog low-pass filter for intimate romantic feel
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(650, startTime);
      filter.frequency.exponentialRampToValueAtTime(320, startTime + duration);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(frequency, startTime);

      // Soft envelope: gentle swell and lingering acoustic release
      noteGain.gain.setValueAtTime(0, startTime);
      noteGain.gain.linearRampToValueAtTime(gainLevel, startTime + 0.8);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

      osc.connect(filter);
      filter.connect(noteGain);
      noteGain.connect(this.masterGain);

      osc.start(startTime);
      osc.stop(startTime + duration);
    } catch (e) {
      console.warn('Audio note play error:', e);
    }
  }

  start() {
    if (this.isPlaying) return;
    const ok = this.init();
    if (!ok) return;

    this.isPlaying = true;

    // Chord progressions (frequencies in Hz: F major / Bb maj9 / Dm9 / C add9)
    const chords = [
      [174.61, 220.00, 261.63, 329.63, 392.00], // Fmaj7 (F3, A3, C4, E4, G4)
      [146.83, 220.00, 261.63, 349.23, 440.00], // Dm9 (D3, A3, C4, F4, A4)
      [116.54, 174.61, 233.08, 293.66, 349.23], // Bbmaj7 (Bb2, F3, Bb3, D4, F4)
      [130.81, 196.00, 246.94, 293.66, 392.00], // Cadd9 (C3, G3, B3, D4, G4)
    ];

    let chordIndex = 0;

    const playNextChord = () => {
      if (!this.isPlaying || !this.ctx) return;
      const now = this.ctx.currentTime;
      const currentChord = chords[chordIndex % chords.length];
      chordIndex++;

      // Strum each voice with delicate micro-delay for realistic acoustic touch
      currentChord.forEach((freq, idx) => {
        const offset = idx * 0.22 + (Math.random() * 0.05);
        this.playNote(freq, now + offset, 4.8, 0.09 / (idx === 0 ? 1 : 1.3));
      });
    };

    playNextChord();
    this.intervalId = setInterval(playNextChord, 4200);
  }

  stop() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }
}

export const ambientSound = new AmbientSoundSynth();
