document.addEventListener('DOMContentLoaded', function () {
    let icons = document.querySelectorAll('.Fifth-Section-Main-Icon');
    let iconCount = icons.length;

    // Set the initial positions of the icons
    const positions = [
        { top: '8%', left: '50%' },  // 12 o'clock (Book Shop)
        { top: '14%', left: '72%' }, // 1 o'clock (Gym)
        { top: '30%', left: '86%' }, // 2 o'clock (Coffee Shop)
        { top: '50%', left: '90%' }, // 3 o'clock (Restaurant)
        { top: '70%', left: '86%' }, // 4 o'clock (Hair Salon)
        { top: '86%', left: '72%' }, // 5 o'clock (Florist)
        { top: '92%', left: '50%' }, // 6 o'clock (Pharmacy)
        { top: '86%', left: '28%' }, // 7 o'clock (Pet Store)
        { top: '70%', left: '14%' }, // 8 o'clock (Clothing Boutique)
        { top: '50%', left: '10%' }, // 9 o'clock (Grocery Store)
        { top: '30%', left: '14%' }, // 10 o'clock (Bakery)
        { top: '14%', left: '28%' }  // 11 o'clock (Auto Repair)
    ];

    // Function to rotate the icons
    function rotateIcons() {
        // Save current positions
        let currentPositions = Array.from(icons).map(icon => ({
            top: icon.style.top,
            left: icon.style.left
        }));

        // Shift positions for each icon
        for (let i = 0; i < iconCount; i++) {
            // Move each icon to the next slot (clockwise)
            let nextPositionIndex = (i + 1) % iconCount; // Use modulo to wrap around the circle
            icons[i].style.top = currentPositions[nextPositionIndex].top;
            icons[i].style.left = currentPositions[nextPositionIndex].left;
        }
    }

    // Set the initial position of each icon
    icons.forEach((icon, index) => {
        icon.style.top = positions[index].top;
        icon.style.left = positions[index].left;
    });

    // Rotate the icons every 3 seconds
    setInterval(rotateIcons, 2000);
});


