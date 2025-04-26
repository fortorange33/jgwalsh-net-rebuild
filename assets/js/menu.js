document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.toggle('hidden');
      menuButton.setAttribute('aria-expanded', String(!isHidden));
    });
    // Keyboard accessibility: toggle on Enter/Space
    menuButton.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        menuButton.click();
      }
    });
  }
});
