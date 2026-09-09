import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Music } from 'lucide-react';
import { ambientSound } from '../utils/soundSynth';

export default function MusicPlayer({ autoStartTrigger = false }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.6);
  const [usingSynth, setUsingSynth] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const audioRef = useRef(null);

  // When autoStartTrigger becomes true (e.g. Mila clicks "Open Your Birthday Gift")
  useEffect(() => {
    if (autoStartTrigger && !isPlaying) {
      startMusic();
    }
  }, [autoStartTrigger]);

  const startMusic = async () => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = isMuted ? 0 : volume;
      try {
        await audio.play();
        setIsPlaying(true);
        setUsingSynth(false);
      } catch (err) {
        // Fallback gracefully to Web Audio ambient synthesizer!
        console.log('Using ambient romantic synthesizer fallback');
        ambientSound.start();
        ambientSound.setVolume(isMuted ? 0 : volume);
        setIsPlaying(true);
        setUsingSynth(true);
      }
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      if (usingSynth) {
        ambientSound.stop();
      } else if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
    } else {
      startMusic();
    }
  };

  const toggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    const targetVol = nextMute ? 0 : volume;

    if (usingSynth) {
      ambientSound.setVolume(targetVol);
    } else if (audioRef.current) {
      audioRef.current.volume = targetVol;
    }
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (isMuted && val > 0) setIsMuted(false);

    if (usingSynth) {
      ambientSound.setVolume(val);
    } else if (audioRef.current) {
      audioRef.current.volume = val;
    }
  };

  return (
    <div className="fixed top-3 right-3 sm:top-5 sm:right-5 z-40">
      <audio
        ref={audioRef}
        src="/audio/our-song.mp3"
        loop
        preload="auto"
        onError={() => {
          if (isPlaying && !usingSynth) {
            ambientSound.start();
            ambientSound.setVolume(isMuted ? 0 : volume);
            setUsingSynth(true);
          }
        }}
      />

      <div
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
        onClick={() => setShowControls((prev) => !prev)}
        className="flex items-center gap-1.5 sm:gap-2 p-1.5 px-3 sm:p-2 sm:px-3.5 rounded-full glass-panel shadow-glow-sm border border-rose-500/25 backdrop-blur-xl transition-all duration-300 cursor-pointer"
      >
        {/* Animated Sound Wave Bars */}
        <div className="flex items-end gap-[2.5px] sm:gap-[3px] h-3.5 sm:h-4 w-3.5 sm:w-4 mr-0.5 sm:mr-1">
          <span
            className={`w-[2px] sm:w-[2.5px] bg-rose-400 rounded-full transition-all duration-300 ${
              isPlaying ? 'animate-pulse h-3.5 sm:h-4' : 'h-1 sm:h-1.5 opacity-40'
            }`}
          />
          <span
            className={`w-[2px] sm:w-[2.5px] bg-rose-300 rounded-full transition-all duration-300 ${
              isPlaying ? 'animate-bounce h-3 sm:h-3.5' : 'h-1.5 sm:h-2 opacity-40'
            }`}
          />
          <span
            className={`w-[2px] sm:w-[2.5px] bg-rose-400 rounded-full transition-all duration-300 ${
              isPlaying ? 'animate-pulse h-3.5 sm:h-4' : 'h-1 sm:h-1.5 opacity-40'
            }`}
          />
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
          className="p-1 sm:p-1.5 rounded-full hover:bg-white/10 text-rose-200 transition-colors focus:outline-none"
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
        </button>

        {/* Mute/Unmute Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleMute();
          }}
          aria-label={isMuted ? 'Unmute' : 'Mute'}
          className="p-1 sm:p-1.5 rounded-full hover:bg-white/10 text-rose-200 transition-colors focus:outline-none"
        >
          {isMuted || volume === 0 ? (
            <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400/70" />
          ) : (
            <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          )}
        </button>

        {/* Volume Slider */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`overflow-hidden transition-all duration-300 flex items-center ${
            showControls ? 'w-16 sm:w-20 opacity-100 ml-1' : 'w-0 opacity-0'
          }`}
        >
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-14 sm:w-16 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-rose-400"
          />
        </div>

        {/* Track / Mode Label */}
        <span className="text-[10px] sm:text-[11px] font-mono text-rose-200/60 uppercase tracking-widest pl-0.5 sm:pl-1">
          {usingSynth ? 'Serenade' : 'Our Song'}
        </span>
      </div>
    </div>
  );
}
