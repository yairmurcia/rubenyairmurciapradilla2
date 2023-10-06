let currentSlide = 0;

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = 1;
    }
    updateSlide();
}

function nextSlide() {
    currentSlide++;
    if (currentSlide > 1) {
        currentSlide = 0;
    }
    updateSlide();
}

function updateSlide() {
    const slides = document.querySelectorAll('.carousel img');
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
        if (index === currentSlide) {
            slide.style.display = 'block';
        }
    });
}

updateSlide();