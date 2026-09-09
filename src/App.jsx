import React, { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import MusicPlayer from './components/MusicPlayer';
import FloatingParticles from './components/FloatingParticles';
import Hero from './components/Hero';
import StoryTimeline from './components/StoryTimeline';
import LoveCards from './components/LoveCards';
import MemoryGallery from './components/MemoryGallery';
import LoveLetter from './components/LoveLetter';
import BirthdaySurprise from './components/BirthdaySurprise';
import Footer from './components/Footer';
import { triggerBirthdayBurst } from './utils/confetti';

export default function App() {
  const [introOpen, setIntroOpen] = useState(true);
  const [musicTriggered, setMusicTriggered] = useState(false);

  const handleOpenGift = () => {
    setIntroOpen(false);
    setMusicTriggered(true);
    // Subtle romantic particle burst on initial opening
    setTimeout(() => {
      triggerBirthdayBurst();
    }, 400);
  };

  return (
    <div className="relative min-h-screen bg-noir-950 text-champagne-100 overflow-x-hidden selection:bg-rose-500/30 selection:text-rose-200">
      {/* Film grain subtle cinematic texture overlay */}
      <div className="film-grain" />

      {/* Floating particles background canvas */}
      <FloatingParticles />

      {/* Persistent floating music player */}
      <MusicPlayer autoStartTrigger={musicTriggered} />

      {/* Initial cinematic opening screen */}
      <IntroScreen isOpen={introOpen} onOpen={handleOpenGift} />

      {/* Main Website Flow */}
      <main className="relative z-20">
        <Hero />
        <StoryTimeline />
        <LoveCards />
        <MemoryGallery />
        <LoveLetter />
        <BirthdaySurprise />
      </main>

      <Footer />
    </div>
  );
}
