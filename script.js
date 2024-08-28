const bubbleContainer = document.getElementById('bubble-container');

// Create bubbles
function createBubble() {
    const bubble = document.createElement('div');
    const size = Math.random() * 60 + 40 + 'px'; // Bigger bubbles
    bubble.className = 'bubble';
    bubble.style.width = size;
    bubble.style.height = size;
    bubble.style.left = Math.random() * 100 + 'vw';
    bubbleContainer.appendChild(bubble);

    // Remove bubble after animation
    bubble.addEventListener('animationend', () => {
        bubble.remove();
    });

    // Remove bubble on click
    bubble.addEventListener('click', () => {
        bubble.remove();
    });
}

// Generate bubbles at intervals
setInterval(createBubble, 1000); // Fewer bubbles
