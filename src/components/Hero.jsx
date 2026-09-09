import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Heart, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-24 text-center overflow-hidden">
      {/* Cinematic Ambient Lighting - Adjusted for mobile performance */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] rounded-full bg-wine-800/20 blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[240px] sm:w-[450px] h-[240px] sm:h-[450px] rounded-full bg-rose-500/10 blur-[90px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] rounded-full bg-gold-400/10 blur-[80px] sm:blur-[110px] pointer-events-none" />

      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center w-full">
        {/* Soft Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full glass-panel border border-rose-400/25 mb-6 sm:mb-8 shadow-glow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-accent animate-pulse" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-rose-200/90 font-mono">
            A special day for someone extraordinary
          </span>
        </motion.div>

        {/* Hero Photo with Cinematic Framing - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative group mb-8 sm:mb-10 w-full flex justify-center"
        >
          {/* Glowing Ambient Halo */}
          <div className="absolute -inset-2 w-[85vw] max-w-[330px] sm:max-w-[370px] md:max-w-[400px] rounded-[28px] bg-gradient-to-tr from-wine-600/40 via-rose-500/30 to-gold-400/30 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Photo Frame */}
          <div className="relative w-[85vw] max-w-[320px] sm:max-w-[360px] md:max-w-[390px] aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden border border-rose-300/30 shadow-2xl bg-noir-900 flex items-center justify-center">
            {/* Blurred background aura using the same image */}
            <img
              src="/images/mila-hero.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover filter blur-xl scale-110 opacity-40"
              onError={(e) => {
                e.target.src = "/images/mila-hero.jpg";
              }}
            />

            {/* Main Foreground Image */}
            <motion.img
              src="/images/mila-hero.png"
              alt="Mila"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.02] transition-all duration-700"
              onError={(e) => {
                // Fallback to jpg if png not found
                if (e.target.src.endsWith('.png')) {
                  e.target.src = "/images/mila-hero.jpg";
                }
              }}
            />

            {/* Subtle Gradient Vignette Overlay */}
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-noir-950/80 via-transparent to-black/20 pointer-events-none" />

            {/* Bottom Photo Caption Accent */}
            <div className="absolute bottom-3 sm:bottom-4 inset-x-0 z-30 px-4 text-center">
              <span className="text-[11px] sm:text-xs font-serif italic text-rose-200/90 tracking-wider drop-shadow-md">
                My favorite person in the universe
              </span>
            </div>
          </div>
        </motion.div>

        {/* Main Title - Responsive Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-champagne-100 px-2"
        >
          Happy Birthday, <span className="text-rose-gradient">Mila</span>{' '}
          <Heart className="inline-block w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 text-rose-400 fill-rose-400 align-middle ml-1 -mt-1 sm:-mt-2 animate-pulse" />
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 sm:mt-6 text-base sm:text-xl md:text-2xl text-rose-100/85 font-light max-w-xl sm:max-w-2xl leading-relaxed font-sans px-4"
        >
          Today is about celebrating the person who makes my world a little brighter.
        </motion.p>

        {/* Scroll Instruction */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-8 sm:mt-10 flex flex-col items-center gap-3"
        >
          <p className="text-xs sm:text-sm font-serif italic text-champagne-300/80 tracking-wider">
            Scroll slowly… I made this for you.
          </p>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border border-rose-400/30 flex items-start justify-center p-1 sm:p-1.5 bg-rose-950/20 backdrop-blur-sm"
          >
            <motion.div
              animate={{ height: ['4px', '10px', '4px'], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 bg-rose-300 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
