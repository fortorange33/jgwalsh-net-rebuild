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

  // Hamburger menu toggle for new navbar
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  document.getElementById('nav-toggle').addEventListener('click', function () {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
    this.setAttribute('aria-expanded', menu.classList.contains('hidden') ? 'false' : 'true');
  });
});
