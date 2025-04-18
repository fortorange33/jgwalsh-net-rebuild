document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Mobile Menu ---------- */
  const btn  = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      const isOpen = !menu.classList.toggle('hidden');
      btn.setAttribute('aria-expanded', String(isOpen));
    });
  }

  /* ---------- Section reveal ---------- */
  const sections = document.querySelectorAll('.reveal');
  if (sections.length) {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sections.forEach(s => io.observe(s));
  }
});