import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { letterData } from '../data/letter';
import { Mail, Heart, Sparkles, X } from 'lucide-react';

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] rounded-full bg-wine-900/20 blur-[100px] sm:blur-[150px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/40 border border-rose-400/20 text-rose-300 text-xs tracking-widest uppercase font-mono mb-3 sm:mb-4"
        >
          <Mail className="w-3 h-3 text-gold-accent" />
          Intimate Words
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl text-champagne-100 font-normal tracking-tight px-2"
        >
          {letterData.sectionTitle}
        </motion.h2>
      </div>

      {/* Envelope Container */}
      <div className="relative flex flex-col items-center">
        {!isOpen ? (
          /* Sealed Envelope View */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-xl relative"
          >
            {/* Soft gold/rose glow behind envelope */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-wine-700/30 via-rose-500/20 to-gold-400/20 blur-xl pointer-events-none" />

            <div className="relative glass-panel rounded-2xl sm:rounded-3xl p-6 sm:p-12 text-center border border-rose-400/30 shadow-2xl flex flex-col items-center">
              {/* Wax Seal Icon */}
              <div className="relative mb-5 sm:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-wine-600 via-rose-700 to-wine-900 border-2 border-gold-400/50 shadow-glow-md flex items-center justify-center">
                  <Heart className="w-8 h-8 sm:w-9 sm:h-9 text-gold-300 fill-gold-400/80 animate-pulse" />
                </div>
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 text-gold-300 animate-bounce" />
              </div>

              <h3 className="font-serif text-xl sm:text-3xl text-champagne-100 font-normal mb-1.5 sm:mb-2">
                {letterData.envelopePrompt}
              </h3>

              <p className="text-rose-200/70 text-xs sm:text-base font-light mb-6 sm:mb-8 max-w-md px-2">
                {letterData.envelopeSubtext}
              </p>

              <button
                onClick={() => setIsOpen(true)}
                className="group relative inline-flex items-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-lg font-medium text-champagne-100 glass-button focus:outline-none"
              >
                <span>{letterData.openButtonText}</span>
                <Heart className="w-4 h-4 text-rose-300 fill-rose-400 transition-transform duration-300 group-hover:scale-125" />
              </button>
            </div>
          </motion.div>
        ) : (
          /* Opened Letter View */
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-full relative"
          >
            {/* Letter Paper Container */}
            <div className="relative bg-[#130d19]/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-12 md:p-14 border border-rose-400/30 shadow-glow-lg text-left overflow-hidden">
              {/* Gold foil corner ornament */}
              <div className="absolute top-0 right-0 w-24 sm:w-28 h-24 sm:h-28 bg-gradient-to-bl from-gold-400/10 via-rose-500/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-24 sm:w-28 h-24 sm:h-28 bg-gradient-to-tr from-wine-600/15 via-transparent to-transparent pointer-events-none" />

              {/* Close / Fold Button */}
              <div className="flex justify-end mb-3 sm:mb-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-rose-300/80 hover:text-rose-200 bg-white/5 hover:bg-white/10 transition-colors focus:outline-none"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>{letterData.closeButtonText}</span>
                </button>
              </div>

              {/* Date Header */}
              <div className="font-mono text-[10px] sm:text-xs text-gold-accent uppercase tracking-widest mb-6 sm:mb-8">
                {letterData.date}
              </div>

              {/* Salutation */}
              <h3 className="font-serif text-2xl sm:text-4xl text-champagne-100 font-normal mb-6 sm:mb-8">
                {letterData.salutation}
              </h3>

              {/* Letter Paragraphs */}
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-lg text-rose-100/90 font-light leading-relaxed font-sans">
                {letterData.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Emotional Highlight Box */}
              <div className="my-8 sm:my-10 p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-r from-wine-900/40 via-rose-950/40 to-noir-900 border-l-4 border-rose-400/70">
                <p className="font-serif italic text-base sm:text-2xl text-champagne-100 leading-snug">
                  "{letterData.highlight}"
                </p>
              </div>

              {/* Letter Sign-off */}
              <div className="mt-8 sm:mt-12 pt-5 sm:pt-6 border-t border-rose-400/20 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <p className="text-xs sm:text-sm font-sans text-rose-200/70">{letterData.signature}</p>
                  <p className="font-script text-2xl sm:text-4xl text-rose-300 mt-1">
                    {letterData.author}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono text-rose-300/50">
                  <Sparkles className="w-3.5 h-3.5 text-gold-accent" />
                  <span>Forever & Always</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
