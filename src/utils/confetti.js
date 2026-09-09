import confetti from 'canvas-confetti';

export const triggerBirthdayBurst = () => {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    zIndex: 99999,
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  // Romantic luxury colors: Gold, Rose, Wine, Champagne, Warm White
  const romanticColors = ['#facc15', '#fb7194', '#f43f70', '#e6ca65', '#fef08a', '#ffffff', '#89143f'];

  fire(0.25, {
    spread: 30,
    startVelocity: 60,
    colors: romanticColors,
    scalar: 1.1,
  });
  fire(0.2, {
    spread: 60,
    colors: romanticColors,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.9,
    colors: romanticColors,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 30,
    decay: 0.92,
    colors: romanticColors,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 130,
    startVelocity: 50,
    colors: romanticColors,
  });
};

export const startContinuousCelebration = (durationSeconds = 6) => {
  const end = Date.now() + durationSeconds * 1000;
  const colors = ['#facc15', '#fb7194', '#e6ca65', '#fda4b8', '#ffffff'];

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.65 },
      colors: colors,
      zIndex: 99999,
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.65 },
      colors: colors,
      zIndex: 99999,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};
