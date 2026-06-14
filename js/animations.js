// ========================================
// AURA & ONYX — GSAP ANIMATIONS
// ========================================

// Wait for GSAP to load
window.addEventListener('load', () => {
  if (typeof gsap === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  // --- HERO TITLE ENTRANCE ---
  gsap.from('.hero-eyebrow', {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.3,
    ease: 'power2.out'
  });

  gsap.from('.hero-title', {
    opacity: 0,
    y: 50,
    duration: 1.4,
    delay: 0.6,
    ease: 'power3.out'
  });

  gsap.from('.hero-subtitle', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 1.1,
    ease: 'power2.out'
  });

  gsap.from('.hero-cta-group', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 1.5,
    ease: 'power2.out'
  });

  gsap.from('.hero-scroll-indicator', {
    opacity: 0,
    duration: 1,
    delay: 2.2,
    ease: 'power1.out'
  });

  // --- WELCOME SECTION PARALLAX ---
  gsap.to('.welcome-image img', {
    yPercent: -12,
    ease: 'none',
    scrollTrigger: {
      trigger: '.welcome-section',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });

  // --- PROJECT CARDS STAGGER ---
  gsap.from('.project-card', {
    opacity: 0,
    y: 60,
    duration: 0.9,
    stagger: 0.2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.projects-grid',
      start: 'top 80%'
    }
  });

  // --- STATS STRIP SLIDE IN ---
  gsap.from('.stat-item', {
    opacity: 0,
    y: 30,
    duration: 0.7,
    stagger: 0.15,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.stats-section',
      start: 'top 75%'
    }
  });

  // --- QUOTE SECTION SCALE ---
  gsap.from('blockquote', {
    opacity: 0,
    scale: 0.95,
    duration: 1.2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.quote-section',
      start: 'top 70%'
    }
  });

  // --- 3D SCROLL TILT ON WELCOME IMAGE ---
  const welcomeImg = document.querySelector('.welcome-image');
  if (welcomeImg) {
    gsap.to(welcomeImg, {
      rotateY: 3,
      rotateX: -2,
      ease: 'none',
      scrollTrigger: {
        trigger: '.welcome-section',
        start: 'top center',
        end: 'bottom center',
        scrub: 1
      }
    });
  }

});
