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

        // Reinitialize mobile menu toggle functionality
        const toggleButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        if (toggleButton && mobileMenu) {
          toggleButton.addEventListener('click', () => {
            const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
            toggleButton.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.classList.toggle('hidden');
          });
        }
      })
      .catch(error => {
        console.error('Error loading header:', error);
      });
  }
});