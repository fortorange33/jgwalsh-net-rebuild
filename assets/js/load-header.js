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
      })
      .catch(error => {
        console.error('Error loading header:', error);
      });
  }
});