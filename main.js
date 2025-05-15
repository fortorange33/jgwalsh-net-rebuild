document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('menu');

  if (navToggle && menu) {
    navToggle.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      navToggle.setAttribute('aria-expanded', menu.classList.contains('hidden') ? 'false' : 'true');
    });
  }

  window.addEventListener("resize", () => console.log("Viewport width:", window.innerWidth));
});