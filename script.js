// Toggle mobile navbar
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    navLinks.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', String(!isOpen));
  });
}

// Typewriter that never clips
(function () {
  const el = document.querySelector('.typewriter');
  if (!el) return;

  const full = 'Full-Stack Developer focused on fast, clean web apps for real users.';
  const speed = 30;
  let timer = null;

  function run() {
    clearInterval(timer);
    if (window.innerWidth <= 768) {
      el.textContent = full;          // full line on mobile
      el.classList.remove('cursor');
      return;
    }
    el.textContent = '';              // type on desktop
    let i = 0;
    timer = setInterval(() => {
      el.textContent = full.slice(0, i++);
      if (i > full.length) {
        clearInterval(timer);
        el.classList.add('cursor');   // add blinking cursor at the end
      }
    }, speed);
  }

  run();
  window.addEventListener('resize', run);
})();
