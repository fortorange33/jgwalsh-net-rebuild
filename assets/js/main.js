document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && mobileMenu) { // Check if elements exist
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden'); // Toggle the 'hidden' class
        });
    }
});