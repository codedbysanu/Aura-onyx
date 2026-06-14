// ========================================
// AURA & ONYX — MAIN JS (CRASH-PROOF)
// =======================================nano js/main.js
  
  // --- NAVBAR SCROLL EFFECT ---
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // --- HAMBURGER MENU ---
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // --- SCROLL REVEAL ---
  const revealElements = document.querySelectorAll('.reveal-up, .reveal-right, .quote-inner');
  if (revealElements.length > 0) {
    if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px' // Slightly reduced margin to trigger faster on mobile
      });

      revealElements.forEach(el => revealObserver.observe(el));
    } else {
      // Fallback for very old browsers
      revealElements.forEach(el => el.classList.add('visible'));
    }
    
    // NUCLEAR FALLBACK: If observer fails or hangs, force show everything after 1.5s
    setTimeout(() => {
      revealElements.forEach(el => el.classList.add('visible'));
    }, 1500);
  }

  // --- STAT COUNTER ANIMATION ---
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length > 0 && 'IntersectionObserver' in window) {
    const countUp = (el) => {
      const text = el.innerText;
      const target = parseInt(text) || 0;
      const suffix = text.replace(/[0-9]/g, '');
      if (target === 0) return;
      
      let count = 0;
      const step = Math.ceil(target / 40);
      const timer = setInterval(() => {
        count += step;
        if (count >= target) {
          count = target;
          clearInterval(timer);
        }
        el.innerText = count + suffix;
      }, 40);
    };

    const statObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          countUp(entry.target);
          statObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => statObserver.observe(el));
  }

  // --- PORTFOLIO FILTERING ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  if (filterBtns.length > 0 && portfolioItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        portfolioItems.forEach(item => {
          if (filterValue === 'all' || item.classList.contains(filterValue)) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 400);
          }
        });
        
        if (typeof ScrollTrigger !== 'undefined') {
          setTimeout(() => { ScrollTrigger.refresh(); }, 450);
        }
      });
    });
  }
