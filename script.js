const slides = document.querySelectorAll('.slide');
const progressLines = document.querySelectorAll('.progress-line');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });

    // Reset progress lines
    progressLines.forEach((line, i) => {
        if (i === index) {
            line.style.height = '30px'; // Fill the current line
            line.classList.add('active'); // Show the current line
        } else {
            line.style.height = '0'; // Hide the other lines
            line.classList.remove('active'); // Hide the other lines
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Loop back to the start
    showSlide(currentSlide);
}

// Show the first slide initially
showSlide(currentSlide);

// Change slide every 5 seconds
setInterval(nextSlide, 5000);























