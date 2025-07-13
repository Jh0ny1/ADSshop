const carousel = document.getElementById('special-offers-carousel');
const prevBtn = document.querySelector('.special-offers-prev');
const nextBtn = document.querySelector('.special-offers-next');

let currentSlide = 0;
const totalSlides = carousel ? carousel.children.length : 0;

function updateCarousel() {
    const offset = currentSlide * -100;
    if (carousel) {
        carousel.style.transform = `translateX(${offset}%)`;
    }
}

if (prevBtn && nextBtn && carousel) {
    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });
    
    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    });
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}, 5000);
