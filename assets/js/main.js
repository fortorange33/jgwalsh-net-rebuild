document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Mobile menu ---------- */
  const btn = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      // Toggle the 'hidden' class as requested
      const isHidden = menu.classList.toggle('hidden');
      // Update aria-expanded based on the presence of 'hidden'
      btn.setAttribute('aria-expanded', !isHidden);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      // Check if the menu is NOT hidden before trying to close
      if (!menu.classList.contains('hidden') && !menu.contains(e.target) && !btn.contains(e.target)) {
        menu.classList.add('hidden');
        btn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu on link click
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.add('hidden');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Section reveal ---------- */
  const toReveal = document.querySelectorAll('.reveal');
  if (toReveal.length) {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold:0.1 }
    );
    toReveal.forEach(el => io.observe(el));
  }

  /* ---------- Dark mode toggle ---------- */
  const darkToggle = document.createElement('button');
  darkToggle.setAttribute('id', 'dark-mode-toggle');
  darkToggle.setAttribute('aria-label', 'Toggle dark mode');
  darkToggle.style.marginLeft = '1rem';
  darkToggle.style.background = 'none';
  darkToggle.style.border = 'none';
  darkToggle.style.cursor = 'pointer';
  darkToggle.style.fontSize = '1.5rem';
  darkToggle.innerHTML = '🌙';

  // Insert after navbar if present
  const nav = document.querySelector('.navbar');
  if (nav && !document.getElementById('dark-mode-toggle')) {
    nav.appendChild(darkToggle);
  }

  function setDarkMode(enabled) {
    document.body.classList.toggle('dark-mode', enabled);
    localStorage.setItem('darkMode', enabled ? '1' : '0');
    darkToggle.innerHTML = enabled ? '☀️' : '🌙';
    darkToggle.setAttribute('aria-pressed', enabled ? 'true' : 'false');
  }

  // On load, set mode from localStorage or system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const saved = localStorage.getItem('darkMode');
  const dark = saved === null ? prefersDark : saved === '1';
  setDarkMode(dark);

  darkToggle.addEventListener('click', () => {
    setDarkMode(!document.body.classList.contains('dark-mode'));
  });
});