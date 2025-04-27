document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      const isHidden = menu.classList.toggle('hidden');
      menu.classList.toggle('open', !isHidden);
      btn.setAttribute('aria-expanded', !isHidden);
    });
  }
});
