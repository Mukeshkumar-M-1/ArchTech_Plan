// ============================================
// SCROLL REVEAL
// ============================================
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || els.length === 0) {
    els.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => entry.target.classList.add('is-visible'), delay);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => io.observe(el));
})();

// ============================================
// SPINE LINE DRAW-IN (main page)
// ============================================
(function () {
  const spine = document.querySelector('.spine-line');
  if (!spine) return;

  function sizeSpine() {
    const track = document.querySelector('.spine-track');
    if (!track) return;
    spine.setAttribute('height', track.offsetHeight);
    const len = track.offsetHeight;
    spine.querySelector('line').style.strokeDasharray = len;
    spine.querySelector('line').style.strokeDashoffset = len;
  }
  sizeSpine();
  window.addEventListener('resize', sizeSpine);

  const line = spine.querySelector('line');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const ratio = entry.intersectionRatio;
      const track = document.querySelector('.spine-track');
      const total = track.offsetHeight;
      const rect = track.getBoundingClientRect();
      const viewH = window.innerHeight;
      const scrolled = Math.min(Math.max(viewH - rect.top, 0), total + viewH);
      const progress = Math.min(scrolled / (total + viewH * 0.3), 1);
      line.style.strokeDashoffset = total * (1 - progress);
    });
  }, { threshold: Array.from({length: 20}, (_, i) => i / 20) });

  document.addEventListener('scroll', () => {
    const track = document.querySelector('.spine-track');
    if (!track) return;
    const total = track.offsetHeight;
    const rect = track.getBoundingClientRect();
    const viewH = window.innerHeight;
    const scrolled = Math.min(Math.max(viewH - rect.top, 0), total + viewH);
    const progress = Math.min(scrolled / (total + viewH * 0.3), 1);
    line.style.strokeDashoffset = total * (1 - progress);
  }, { passive: true });
})();

// ============================================
// EXPANDABLE RICH STAGE CARDS (Phase 1 detail)
// ============================================
(function () {
  const cards = document.querySelectorAll('.stage-card.rich');
  if (!cards.length) return;

  cards.forEach((card) => {
    const toggle = card.querySelector('.stage-toggle');
    const detail = card.querySelector('.stage-detail');
    const inner = card.querySelector('.stage-detail-inner');

    toggle.addEventListener('click', () => {
      const isOpen = card.classList.contains('is-open');
      if (isOpen) {
        detail.style.maxHeight = '0px';
        card.classList.remove('is-open');
      } else {
        card.classList.add('is-open');
        detail.style.maxHeight = inner.offsetHeight + 'px';
      }
      toggle.setAttribute('aria-expanded', String(!isOpen));
    });

    window.addEventListener('resize', () => {
      if (card.classList.contains('is-open')) {
        detail.style.maxHeight = inner.offsetHeight + 'px';
      }
    });
  });
})();

// ============================================
// FLOW DIAGRAM: stagger animated paths (Phase 1)
// ============================================
(function () {
  const diagram = document.querySelector('.flow-diagram svg');
  if (!diagram) return;
  const paths = diagram.querySelectorAll('.flow-path.animated');
  paths.forEach((p, i) => {
    p.style.animationDelay = (i * 0.18) + 's';
  });
})();