document.addEventListener('DOMContentLoaded', () => {
    
  const siteHeader = document.getElementById('site-header');

  if (siteHeader) {
    fetch('/header.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load header');
        }
        return response.text();
      })
      .then(html => {
        siteHeader.innerHTML = html;

        // Add mobile menu toggle logic after header is loaded
        const btn = document.getElementById('mobile-menu-button');
        const menu = document.getElementById('mobile-menu');

        if (btn && menu) {
          btn.addEventListener('click', () => {
            const isOpen = menu.classList.toggle('open');
            btn.setAttribute('aria-expanded', isOpen);
          });

          document.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && !btn.contains(e.target)) {
              menu.classList.remove('open');
              btn.setAttribute('aria-expanded', 'false');
            }
          });

          menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
              menu.classList.remove('open');
              btn.setAttribute('aria-expanded', 'false');
            });
          });
        }
      })
      .catch(error => {
        console.error('Error loading header:', error);
      });
  }
});