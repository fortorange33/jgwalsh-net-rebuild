document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Mobile menu ---------- */
  const btn = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');

  if (btn && menu) {
    const closeMenu = () => {
      menu.classList.add('hidden');
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    };
    btn.addEventListener('click', () => {
      const isHidden = menu.classList.toggle('hidden');
      btn.setAttribute('aria-expanded', !isHidden);
    });
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
    // Close menu when clicking outside (mobile only)
    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !btn.contains(e.target)) closeMenu();
    });
    // Optional: close on nav link click
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
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