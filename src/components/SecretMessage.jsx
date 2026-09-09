import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, X, Star } from 'lucide-react';

export default function SecretMessage() {
  const [isOpen, setIsOpen] = useState(false);
  const [revealedPart2, setRevealedPart2] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setRevealedPart2(false);
      const timer = setTimeout(() => {
        setRevealedPart2(true);
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <>
      {/* Hidden Easter Egg: A subtle twinkling star button */}
      <div className="flex justify-center my-8">
        <button
          onClick={() => setIsOpen(true)}
          title="A secret starlight..."
          className="group relative p-2.5 rounded-full text-gold-accent/40 hover:text-gold-accent transition-all duration-500 hover:scale-125 focus:outline-none"
        >
          <Star className="w-4 h-4 fill-current animate-spin" style={{ animationDuration: '12s' }} />
          <span className="sr-only">Secret easter egg</span>
        </button>
      </div>

      {/* Secret Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-noir-950/90 backdrop-blur-2xl p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full glass-panel rounded-3xl p-8 sm:p-10 border border-gold-400/40 shadow-glow-gold text-center overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-white/10 text-champagne-300 transition-colors focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Secret Icon */}
              <div className="w-12 h-12 rounded-full bg-gold-400/10 border border-gold-400/30 mx-auto flex items-center justify-center mb-6 text-gold-accent shadow-glow-sm">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>

              {/* Secret Heading */}
              <h3 className="font-serif text-2xl text-champagne-100 font-normal mb-6">
                You found my secret 👀
              </h3>

              {/* Part 1 */}
              <p className="text-rose-100/85 font-serif italic text-lg sm:text-xl leading-relaxed">
                “If I had to choose my favorite person in this entire world…”
              </p>

              {/* Part 2 with dramatic pause reveal */}
              <div className="min-h-[70px] mt-6 flex items-center justify-center">
                {revealedPart2 ? (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 font-serif text-2xl sm:text-3xl text-rose-gradient font-bold"
                  >
                    <span>I'd still choose you.</span>
                    <Heart className="w-6 h-6 text-rose-400 fill-rose-400 animate-pulse" />
                  </motion.div>
                ) : (
                  <div className="flex items-center gap-1.5 opacity-40">
                    <span className="w-2 h-2 rounded-full bg-rose-300 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 rounded-full bg-rose-300 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 rounded-full bg-rose-300 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-rose-400/15">
                <p className="text-xs font-mono text-champagne-300/50 uppercase tracking-widest">
                  Always & Without Hesitation
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
