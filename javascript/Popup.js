document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.Burger-Icon'); // Hamburger icon
    const popup = document.getElementById('Popup'); // Popup element
    const popupClose = document.getElementById('PopupClose'); // Close button inside popup

    // Open popup
    burgerMenu.addEventListener('click', () => {
        popup.style.display = 'flex'; // Ensure popup is visible
        // Trigger reflow to ensure animation works
        setTimeout(() => {
            popup.classList.add('show'); // Add 'show' class after reflow
        }, 10); // A small delay to allow the CSS transition to kick in
    });

    // Close popup
    popupClose.addEventListener('click', () => {
        popup.classList.remove('show'); // Remove the 'show' class for fade-out animation
        setTimeout(() => {
            popup.style.display = 'none'; // Hide the popup after animation ends
        }, 300); // Match the duration of the CSS transition (0.3s)
    });
});
