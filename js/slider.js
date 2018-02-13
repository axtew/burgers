// slider
const slider = document.querySelector('.burger__list');
const left = document.querySelector('.burgers__left-arrow');
const right = document.querySelector('.burgers__right-arrow');
const sliderStep = 100;
var currentLeft = 0;

left.addEventListener('click', function(e) {
  if (currentLeft < 0) {
    currentLeft += sliderStep;
    slider.style.left = currentLeft + '%';
  } else {
    currentLeft = -300;
    slider.style.left = currentLeft + '%';
  }
})

right.addEventListener('click', function(e) {
  if (currentLeft > -300) {
    currentLeft -= sliderStep;
    slider.style.left = currentLeft + '%';
  } else {
    currentLeft = 0;
    slider.style.left = currentLeft + '%';
  }
})
