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
});