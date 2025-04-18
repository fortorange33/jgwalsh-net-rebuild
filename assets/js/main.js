document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      document.body.classList.toggle('menu-open');
    });
  }
});