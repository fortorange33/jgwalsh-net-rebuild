document.addEventListener('DOMContentLoaded', () => {
  // === mobile menu toggle ==============================================
  const menuBtn = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('hidden') === false; // returns false when removed
      menuBtn.setAttribute('aria-expanded', open);
      // lock body scroll when menu is open
      document.body.classList.toggle('overflow-hidden', open);
    });

    // close menu after clicking a link
    mobileMenu.querySelectorAll('a').forEach(link =>
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('overflow-hidden');
      })
    );
  }
  // =====================================================================
});