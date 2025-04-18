document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu
  const btn  = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('-translate-x-full');
      btn.setAttribute('aria-expanded', String(!isOpen));
      // swap icons
      btn.querySelector('.hamburger').classList.toggle('hidden');
      btn.querySelector('.close').classList.toggle('hidden');
    });
  }

  // Highlight current link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navlink').forEach(a => {
    if (a.getAttribute('href').endsWith(path)) {
      a.classList.add('border-b-2','border-teal-400');
    }
  });
});