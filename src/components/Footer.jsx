import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import SecretMessage from './SecretMessage';

export default function Footer() {
  return (
    <footer className="relative py-28 px-6 text-center border-t border-rose-500/10 overflow-hidden">
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full bg-wine-900/15 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
        {/* Hidden secret star */}
        <SecretMessage />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif italic text-2xl sm:text-3xl text-rose-200/90 font-light mb-4"
        >
          “Thank you for being you.”
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-3xl sm:text-4xl text-champagne-100 font-normal tracking-wide mb-8"
        >
          Happy Birthday, Mila.
        </motion.h3>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center gap-2 pt-6 border-t border-rose-400/15 w-full max-w-xs"
        >
          <div className="flex items-center gap-1.5 text-xs text-rose-300/60 font-mono tracking-widest uppercase">
            <span>Made with love, just for you</span>
            <Heart className="w-3 h-3 text-rose-400 fill-rose-400" />
          </div>

          <p className="font-script text-2xl sm:text-3xl text-rose-300 mt-1">
            — Biruk
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
