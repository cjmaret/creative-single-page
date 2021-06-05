const buttonRight = document.querySelector(".slideshow__button_type_right");
const buttonLeft = document.querySelector(".slideshow__button_type_left");
const slide = document.querySelectorAll(".slideshow");

let currentSlide = 0;

function goToSlide(n) {
    slide[currentSlide].className = "slideshow";
    currentSlide = (n + slide.length)%slide.length;
    slide[currentSlide].className = "slideshow slideshow_active";
}

function nextSlide() {
    goToSlide(currentSlide+1);
}

function previousSlide() {
    goToSlide(currentSlide-1);
}

buttonRight.addEventListener('click', nextSlide);
buttonLeft.addEventListener('click', previousSlide);
