import React from 'react';
import { motion } from 'framer-motion';
import { storyData } from '../data/story';
import { Calendar, Sparkles } from 'lucide-react';

export default function StoryTimeline() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/40 border border-rose-400/20 text-rose-300 text-xs tracking-widest uppercase font-mono mb-3 sm:mb-4"
        >
          <Sparkles className="w-3 h-3 text-gold-accent" />
          Our Journey
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl text-champagne-100 font-normal tracking-tight px-2"
        >
          {storyData.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-3 sm:mt-4 text-rose-200/70 font-light text-sm sm:text-lg px-4"
        >
          {storyData.subtitle}
        </motion.p>
      </div>

      {/* Vertical Timeline Track */}
      <div className="relative">
        {/* Glowing Center Line (desktop center, mobile left at left-3 sm:left-4) */}
        <div className="absolute left-3 sm:left-4 md:left-1/2 top-0 bottom-0 w-[1px] md:-translate-x-1/2 bg-gradient-to-b from-transparent via-rose-500/40 to-transparent" />

        <div className="space-y-12 sm:space-y-16 md:space-y-28">
          {storyData.timeline.map((item, index) => {
            const isEven = index % 2 === 0;
            const isPortrait = item.orientation === 'portrait';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-14 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Milestone Node on Spine */}
                <div className="absolute left-3 sm:left-4 md:left-1/2 -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-noir-950 border-2 border-rose-400/70 shadow-glow-sm flex items-center justify-center z-20">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-rose-300 animate-pulse" />
                </div>

                {/* Content Card */}
                <div className="w-full pl-8 sm:pl-12 md:pl-0 md:w-1/2">
                  <div className={`glass-panel p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl glass-panel-hover group ${
                    isEven ? 'md:mr-3' : 'md:ml-3'
                  }`}>
                    <div className="flex items-center justify-between gap-3 mb-2.5 sm:mb-3">
                      <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-gold-accent">
                        {item.chapter}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono text-rose-300/60">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-champagne-100 mb-1.5 font-normal">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-serif italic text-rose-300/90 mb-3 sm:mb-4">
                      "{item.tagline}"
                    </p>

                    <p className="text-rose-100/80 text-xs sm:text-sm md:text-base leading-relaxed font-light font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Photo Beside Timeline Item */}
                <div className="w-full pl-8 sm:pl-12 md:pl-0 md:w-1/2">
                  <div className={`relative group/photo overflow-hidden rounded-2xl sm:rounded-3xl border border-rose-400/20 shadow-xl bg-noir-900 ${
                    isEven ? 'md:ml-3' : 'md:mr-3'
                  }`}>
                    <div className={`relative overflow-hidden w-full flex items-center justify-center ${
                      isPortrait ? 'aspect-[3/4] sm:aspect-[4/5] max-h-[420px]' : 'aspect-[4/3] sm:aspect-[16/10] max-h-[340px]'
                    }`}>
                      {/* Blurred backdrop using same image */}
                      <img
                        src={item.image}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-full object-cover filter blur-lg scale-110 opacity-30"
                      />

                      {/* Foreground Image */}
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="relative z-10 w-full h-full object-cover object-center filter brightness-[0.96] group-hover/photo:scale-105 transition-transform duration-700 ease-out"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=900&auto=format&fit=crop";
                        }}
                      />

                      {/* Subtle Gradient Veil */}
                      <div className="absolute inset-0 z-20 bg-gradient-to-t from-noir-950/80 via-transparent to-transparent pointer-events-none" />

                      <div className="absolute bottom-2.5 sm:bottom-3 left-3 sm:left-4 right-3 sm:right-4 z-30 flex items-center justify-between text-[11px] sm:text-xs text-rose-200/90 drop-shadow-md">
                        <span className="font-serif italic line-clamp-1">{item.tagline}</span>
                        <span className="font-mono text-[9px] sm:text-[10px] text-champagne-300/70 uppercase tracking-widest shrink-0 ml-2">
                          {item.chapter}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
