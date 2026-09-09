import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { triggerBirthdayBurst, startContinuousCelebration } from '../utils/confetti';
import { Sparkles, Heart, ArrowRight, X } from 'lucide-react';

export default function BirthdaySurprise() {
  const [isCelebrating, setIsCelebrating] = useState(false);

  const handleCelebrate = () => {
    setIsCelebrating(true);
    triggerBirthdayBurst();
    startContinuousCelebration(6);
  };

  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      {/* Background Ambient Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[550px] h-[320px] sm:h-[550px] rounded-full bg-rose-600/15 blur-[100px] sm:blur-[160px] pointer-events-none" />

      {/* Dramatic Teaser Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative glass-panel rounded-2xl sm:rounded-3xl p-8 sm:p-16 border border-rose-400/30 shadow-2xl flex flex-col items-center overflow-hidden"
      >
        {/* Soft floating glow particle */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-rose-950/60 border border-rose-400/30 flex items-center justify-center text-gold-accent mb-4 sm:mb-6 shadow-glow-sm">
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
        </div>

        <h3 className="font-serif text-2xl sm:text-4xl md:text-5xl text-champagne-100 font-normal mb-2 sm:mb-3">
          But wait…
        </h3>

        <p className="text-base sm:text-2xl text-rose-200/80 font-light max-w-md font-sans mb-8 sm:mb-10">
          There's one more thing.
        </p>

        <button
          onClick={handleCelebrate}
          className="group relative inline-flex items-center gap-3 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full text-sm sm:text-lg font-medium text-champagne-100 glass-button focus:outline-none"
        >
          <span>One last surprise</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-rose-300 transition-transform duration-300 group-hover:translate-x-1.5" />
        </button>
      </motion.div>

      {/* Full-Screen Birthday Celebration Modal - Mobile Optimized */}
      <AnimatePresence>
        {isCelebrating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-noir-950/95 backdrop-blur-2xl p-4 sm:p-6 overflow-y-auto max-h-[100dvh] select-none"
          >
            {/* Close button */}
            <button
              onClick={() => setIsCelebrating(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-champagne-100 transition-colors z-50 focus:outline-none"
              aria-label="Close celebration"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Radiant Ambient Celebration Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[750px] h-[340px] sm:h-[750px] rounded-full bg-gradient-to-tr from-wine-700/25 via-rose-500/20 to-gold-400/20 blur-[100px] sm:blur-[180px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl sm:max-w-3xl mx-auto flex flex-col items-center text-center my-auto py-8 px-2">
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 180, damping: 14 }}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-wine-600 to-rose-500 border border-gold-400/50 shadow-glow-lg flex items-center justify-center mb-6 sm:mb-8"
              >
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-champagne-100 fill-champagne-100 animate-bounce" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 25, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-champagne-100 leading-tight"
              >
                HAPPY BIRTHDAY, <br />
                <span className="text-rose-gradient">MILA</span>{' '}
                <Heart className="inline-block w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 text-rose-400 fill-rose-400 align-middle -mt-1 sm:-mt-2" />
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 sm:mt-8 font-serif italic text-lg sm:text-2xl md:text-3xl text-gold-accent max-w-xl leading-relaxed"
              >
                “I hope this year becomes one of your most beautiful chapters yet.”
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-rose-100/90 font-light font-sans tracking-wide"
              >
                Keep smiling. Keep dreaming. Keep being you.
              </motion.p>

              {/* Sparkle Re-trigger button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="mt-8 sm:mt-12 flex items-center gap-3"
              >
                <button
                  onClick={() => triggerBirthdayBurst()}
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium text-rose-200 glass-panel hover:border-rose-400/50 transition-all focus:outline-none"
                >
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-accent" />
                  <span>More Confetti ✨</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
