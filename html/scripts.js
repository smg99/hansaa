// script.js
let currentSlideIndex = 0;
let slides = document.getElementsByClassName('carousel-slide');
let dots = document.getElementsByClassName('carousel-dot');
let startX = 0;
let endX = 0;

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlides();
}

// Auto-slide every 5 seconds
setInterval(() => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlides();
}, 5000);

// Swipe detection for touch screens
const carousel = document.querySelector('.carousel');

carousel.addEventListener('touchstart', handleTouchStart, false);
carousel.addEventListener('touchend', handleTouchEnd, false);

function handleTouchStart(event) {
    startX = event.changedTouches[0].clientX; // Record the starting touch point (X-axis)
}

function handleTouchEnd(event) {
    endX = event.changedTouches[0].clientX; // Record the ending touch point (X-axis)

    if (startX - endX > 50) {
        // Swipe left (next slide)
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlides();
    } else if (endX - startX > 50) {
        // Swipe right (previous slide)
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        showSlides();
    }
}

// Toggle the side menu when the burger menu is clicked
function toggleMenu() {
  document.getElementById('menu').classList.toggle('active');
  document.querySelector('.burger-menu').classList.toggle('active');
}

// Close icon to go back to home page
function goHome() {
  window.location.href = 'index.html'; // Replace with your home page URL
}


function toggleFullscreen() {
    const fullscreenEnterIcon = document.querySelector('.fullscreen-enter');
    const fullscreenExitIcon = document.querySelector('.fullscreen-exit');

    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            alert(`Error attempting to enable fullscreen mode: ${err.message}`);
        });
        fullscreenEnterIcon.style.display = 'none';
        fullscreenExitIcon.style.display = 'block';
    } else {
        document.exitFullscreen();
        fullscreenEnterIcon.style.display = 'block';
        fullscreenExitIcon.style.display = 'none';
    }
}
