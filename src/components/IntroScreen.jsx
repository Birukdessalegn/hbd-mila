import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

export default function IntroScreen({ isOpen, onOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="intro-screen"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: 'blur(10px)',
            transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-noir-950 px-6 text-center select-none overflow-hidden"
        >
          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-wine-900/20 blur-[130px] pointer-events-none" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-rose-500/10 blur-[100px] pointer-events-none" />

          {/* Starlight Accents */}
          <motion.div
            animate={{ opacity: [0.3, 0.9, 0.3], scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="mb-8"
          >
            <div className="w-12 h-12 rounded-full border border-rose-400/30 flex items-center justify-center bg-rose-950/40 backdrop-blur-md shadow-glow-sm">
              <Sparkles className="w-5 h-5 text-rose-300" />
            </div>
          </motion.div>

          {/* Opening Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-champagne-100 font-normal tracking-wide"
          >
            Hey Mila…
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-lg sm:text-xl md:text-2xl text-rose-200/80 font-light tracking-wide max-w-md font-sans"
          >
            I made something for you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12"
          >
            <button
              onClick={onOpen}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-base sm:text-lg font-medium text-champagne-100 glass-button focus:outline-none"
            >
              <span>Open Your Birthday Gift</span>
              <Heart className="w-5 h-5 text-rose-400 fill-rose-400 transition-transform duration-300 group-hover:scale-125" />
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
            className="absolute bottom-8 text-xs text-rose-300/40 tracking-widest uppercase font-mono"
          >
            Best experienced with sound
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
