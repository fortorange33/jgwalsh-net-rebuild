document.addEventListener('DOMContentLoaded', () => {
  const btn   = document.getElementById('mobile-menu-button');
  const menu  = document.getElementById('mobile-menu');

  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('hidden') === false;      // hidden removed → open
    btn.setAttribute('aria-expanded', open);
    document.body.classList.toggle('overflow-hidden', open);     // lock scroll
  });
});