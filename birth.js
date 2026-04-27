function burst() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ffd700', '#ffffff', '#ffdf00']
    });
}

// Auto-start on load
window.onload = burst;