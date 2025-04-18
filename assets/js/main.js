document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Mobile menu ---------- */
  const btn  = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (btn && menu) {
    const close = () => { menu.classList.add('hidden'); btn.setAttribute('aria-expanded','false'); btn.textContent='☰'; };
    btn.addEventListener('click', () => {
      const open = menu.classList.toggle('hidden');
      btn.setAttribute('aria-expanded', String(!open));
      btn.textContent = open ? '☰' : '✕';
    });
    links.forEach(l => l.addEventListener('click', close));
    document.addEventListener('click', e => { if (!menu.contains(e.target) && !btn.contains(e.target)) close(); });
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