let currentSlide = 1;
const totalSlides = 4;

function nextSlide() {
  document.getElementById(`slide-${currentSlide}`).style.display = 'none';
  currentSlide++;
  if (currentSlide <= totalSlides) {
    document.getElementById(`slide-${currentSlide}`).style.display = 'block';
  }
}

function showThanks() {
  document.getElementById(`slide-4`).style.display = 'none';
  document.getElementById(`thank-you`).style.display = 'block';
}