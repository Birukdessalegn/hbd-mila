import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { loveReasonsData } from '../data/reasons';
import { Sparkles, Music, HeartHandshake, Heart, Compass, Flame, ChevronRight } from 'lucide-react';

const iconMap = {
  Sparkles,
  Music,
  HeartHandshake,
  Heart,
  Compass,
  Flame,
};

export default function LoveCards() {
  const [expandedCardId, setExpandedCardId] = useState(null);

  const toggleCard = (id) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[700px] h-[320px] sm:h-[500px] rounded-full bg-wine-900/15 blur-[100px] sm:blur-[160px] pointer-events-none" />

      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/40 border border-rose-400/20 text-rose-300 text-xs tracking-widest uppercase font-mono mb-3 sm:mb-4"
        >
          <Heart className="w-3 h-3 text-rose-400 fill-rose-400" />
          From the Heart
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl text-champagne-100 font-normal tracking-tight px-2"
        >
          {loveReasonsData.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-3 sm:mt-4 text-rose-200/70 font-light text-sm sm:text-lg px-4"
        >
          {loveReasonsData.subtitle}
        </motion.p>
      </div>

      {/* Grid of Interactive Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {loveReasonsData.cards.map((card, index) => {
          const IconComponent = iconMap[card.icon] || Heart;
          const isExpanded = expandedCardId === card.id;

          return (
            <motion.div
              key={card.id}
              layout
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.65, delay: index * 0.07 }}
              onClick={() => toggleCard(card.id)}
              className={`group cursor-pointer rounded-2xl sm:rounded-3xl p-5 sm:p-7 glass-panel glass-panel-hover border transition-all duration-300 relative overflow-hidden ${
                isExpanded
                  ? 'border-rose-400/60 bg-wine-950/60 shadow-glow-md'
                  : 'border-white/10 hover:border-rose-400/30'
              }`}
            >
              {/* Card gradient halo */}
              <div
                className={`absolute -inset-1 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl blur-xl`}
              />

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-rose-950/60 border border-rose-400/30 flex items-center justify-center text-rose-300 group-hover:scale-110 transition-transform duration-300 shadow-glow-sm">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>

                    <span className="text-[10px] sm:text-xs font-mono text-champagne-300/60 uppercase tracking-wider">
                      {isExpanded ? 'Tap to close' : 'Tap to read'}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-champagne-100 font-normal mb-1 group-hover:text-rose-200 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gold-accent font-mono mb-2.5 sm:mb-3">
                    {card.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-rose-200/80 font-light leading-relaxed">
                    {card.shortNote}
                  </p>
                </div>

                {/* Expanded Romantic Reveal Message */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-rose-400/20"
                    >
                      <p className="text-xs sm:text-sm font-serif italic text-rose-100/90 leading-relaxed">
                        "{card.message}"
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-4 sm:mt-5 flex items-center justify-between text-xs text-rose-300/70 pt-2 border-t border-white/5">
                  <span className="font-sans font-medium text-[11px] sm:text-xs">
                    {isExpanded ? 'Fold message' : 'Reveal thought'}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isExpanded ? 'rotate-90 text-rose-300' : 'group-hover:translate-x-1'
                    }`}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="mt-12 sm:mt-16 text-center px-4"
      >
        <p className="font-serif italic text-lg sm:text-2xl text-champagne-200/90 max-w-xl mx-auto">
          “{loveReasonsData.footerQuote}”
        </p>
      </motion.div>
    </section>
  );
}
