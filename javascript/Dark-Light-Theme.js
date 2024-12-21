document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.querySelector('.switch input');
    const body = document.body;

    // Set dark theme as default
    body.classList.remove('light-theme'); // Ensure dark theme is active by default
    toggleSwitch.checked = true; // Set the toggle switch to checked (dark mode)

    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            body.classList.remove('light-theme'); // Switch to dark theme
        } else {
            body.classList.add('light-theme'); // Switch to light theme
        }
    });
});
