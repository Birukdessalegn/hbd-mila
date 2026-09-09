import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryData } from '../data/gallery';
import { X, ChevronLeft, ChevronRight, Camera, Heart } from 'lucide-react';

export default function MemoryGallery() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex]);

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setSelectedPhotoIndex((prev) =>
      prev === 0 ? galleryData.photos.length - 1 : prev - 1
    );
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setSelectedPhotoIndex((prev) =>
      prev === galleryData.photos.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/40 border border-rose-400/20 text-rose-300 text-xs tracking-widest uppercase font-mono mb-3 sm:mb-4"
        >
          <Camera className="w-3 h-3 text-gold-accent" />
          Our Gallery
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl text-champagne-100 font-normal tracking-tight px-2"
        >
          {galleryData.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-3 sm:mt-4 text-rose-200/70 font-light text-sm sm:text-lg px-4"
        >
          {galleryData.subtitle}
        </motion.p>
      </div>

      {/* Consistent Luxury Grid - All cards uniform height with full-bleed photos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {galleryData.photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.07 }}
            onClick={() => setSelectedPhotoIndex(index)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl border border-rose-400/20 shadow-xl bg-noir-900 h-[400px] sm:h-[460px] md:h-[480px] w-full flex flex-col justify-end"
          >
            {/* Blurred background aura */}
            <img
              src={photo.src}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover filter blur-lg scale-110 opacity-35 pointer-events-none"
            />

            {/* Main Foreground Image - Fills entire card with no gaps */}
            <img
              src={photo.src}
              alt={photo.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.96] group-hover:scale-105 group-hover:brightness-105 transition-all duration-700 ease-out"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop";
              }}
            />

            {/* Luxurious vignette gradient overlay from bottom to top */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-noir-950/95 via-noir-950/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300 pointer-events-none" />

            {/* Top-right heart hover badge */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full glass-panel flex items-center justify-center opacity-85 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400 fill-rose-400" />
            </div>

            {/* Caption and Title - Perfectly pinned to the bottom */}
            <div className="relative z-20 p-5 sm:p-6 flex flex-col justify-end transform sm:translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-[10px] sm:text-[11px] font-mono text-gold-accent uppercase tracking-widest mb-1 drop-shadow-sm">
                {photo.date}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-champagne-100 font-normal leading-tight">
                {photo.title}
              </h3>
              <p className="text-xs sm:text-sm text-rose-200/85 font-light mt-1.5 line-clamp-2 leading-relaxed">
                {photo.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal - Shows the uncropped full photo */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedPhotoIndex(null)}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-noir-950/95 backdrop-blur-2xl p-3 sm:p-6 select-none"
          >
            {/* Top Navigation Bar: Close & Counter */}
            <div className="absolute top-3 inset-x-3 sm:top-6 sm:inset-x-8 z-50 flex items-center justify-between">
              <span className="text-xs font-mono text-rose-200/70 tracking-widest uppercase px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md">
                {selectedPhotoIndex + 1} / {galleryData.photos.length}
              </span>

              <button
                onClick={() => setSelectedPhotoIndex(null)}
                className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-champagne-100 transition-colors focus:outline-none"
                aria-label="Close photo"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Left Nav Arrow Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full bg-black/40 hover:bg-white/20 border border-white/10 text-champagne-100 transition-colors z-50 focus:outline-none"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Right Nav Arrow Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full bg-black/40 hover:bg-white/20 border border-white/10 text-champagne-100 transition-colors z-50 focus:outline-none"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Lightbox Content Container */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[88vh] flex flex-col items-center glass-panel rounded-2xl sm:rounded-3xl overflow-hidden border border-rose-400/30 shadow-2xl"
            >
              {/* Photo Area */}
              <div className="relative w-full max-h-[58vh] sm:max-h-[66vh] flex items-center justify-center bg-black/60 overflow-hidden p-2">
                <img
                  src={galleryData.photos[selectedPhotoIndex].src}
                  alt={galleryData.photos[selectedPhotoIndex].title}
                  className="max-w-full max-h-[56vh] sm:max-h-[64vh] object-contain rounded-lg"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop";
                  }}
                />
              </div>

              {/* Caption Footer in Lightbox */}
              <div className="w-full p-4 sm:p-6 bg-noir-900/95 text-center border-t border-rose-500/20">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-gold-accent">
                  {galleryData.photos[selectedPhotoIndex].date}
                </span>
                <h4 className="font-serif text-xl sm:text-2xl md:text-3xl text-champagne-100 font-normal mt-0.5 mb-1.5">
                  {galleryData.photos[selectedPhotoIndex].title}
                </h4>
                <p className="text-rose-200/90 font-serif italic text-xs sm:text-base max-w-xl mx-auto leading-relaxed px-2">
                  "{galleryData.photos[selectedPhotoIndex].caption}"
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
