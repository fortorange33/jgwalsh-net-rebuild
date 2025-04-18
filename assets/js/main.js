document.addEventListener('DOMContentLoaded', () => {
  // ── MOBILE MENU TOGGLE ──────────────────────────────────────────
  (() => {
    const btn   = document.getElementById('mobile-menu-button');
    const menu  = document.getElementById('mobile-menu');
    if (!btn || !menu) return;

    const open  = () => {
      menu.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
      btn.setAttribute('aria-expanded', 'true');
      btn.querySelector('.hamburger')?.classList.add('hidden');
      btn.querySelector('.close')?.classList.remove('hidden');
    };

    const close = () => {
      menu.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
      btn.setAttribute('aria-expanded', 'false');
      btn.querySelector('.hamburger')?.classList.remove('hidden');
      btn.querySelector('.close')?.classList.add('hidden');
    };

    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      expanded ? close() : open();
    });

    // close when a menu link is tapped
    menu.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', close)
    );

    // close on ESC
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
        close();
      }
    });
  })();
});