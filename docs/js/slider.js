// slider
const slider = document.querySelector('.burger__list');
const left = document.querySelector('.burgers__left-arrow');
const right = document.querySelector('.burgers__right-arrow');
const burgers = $('.burgers__item');
const burgersLenght = burgers.length;
const burgersHeight = (burgersLenght - 1) * -100;
console.log(burgersHeight);
const sliderStep = 100;
var currentLeft = 0;

left.addEventListener('click', function(e) {
  if (currentLeft < 0) {
    currentLeft += sliderStep;
    slider.style.left = currentLeft + '%';
  } else {
    currentLeft = burgersHeight;
    slider.style.left = currentLeft + '%';
  }
})

right.addEventListener('click', function(e) {
  if (currentLeft > burgersHeight) {
    currentLeft -= sliderStep;
    slider.style.left = currentLeft + '%';
  } else {
    currentLeft = 0;
    slider.style.left = currentLeft + '%';
  }
})
