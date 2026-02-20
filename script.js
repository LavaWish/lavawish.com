document.addEventListener('DOMContentLoaded', () => {
    const words = ["birthday", "event", "anniversary", "graduation", "moment"];
    const animatedWordElement = document.getElementById('animated-word');
    let currentIndex = 0;

    function changeWord() {
        // Fade out
        animatedWordElement.style.opacity = 0;

        setTimeout(() => {
            // Change word
            currentIndex = (currentIndex + 1) % words.length;
            animatedWordElement.textContent = words[currentIndex];
            
            // Fade in
            animatedWordElement.style.opacity = 1;
        }, 300); // Corresponds to the transition time in CSS
    }

    setInterval(changeWord, 2000); // Change word every 2 seconds
});
