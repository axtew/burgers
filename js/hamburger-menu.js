// гамбургер-меню
const hamburger = document.querySelector('.hamburger-menu__list');
const nav = document.querySelector('.navigation__list');

hamburger.addEventListener('click', function(e) {
  hamburger.classList.toggle('hamburger-menu__list--active');
  nav.classList.toggle('navigation__list--active');
})

nav.addEventListener('click', function(e) {
  hamburger.classList.remove('hamburger-menu__list--active');
  nav.classList.remove('navigation__list--active');
})

document.body.addEventListener('wheel', function(e) {
  if (nav.classList.contains('navigation__list--active')) {
    e.preventDefault();
  }
})

document.body.addEventListener('keydown', function(e) {
  if ((nav.classList.contains('navigation__list--active')) && (event.key == 'ArrowDown')) {
    e.preventDefault();
  }
})

document.body.addEventListener('touchmove', function(e) {
  if (nav.classList.contains('navigation__list--active')) {
    e.preventDefault();
  }
})

$('.intro').on('wheel', '.navigation__list', function(e) {
  e.stopPropagation();
});

$('.intro').on('touchend', '.navigation__list', function(e) {
  e.stopPropagation();
});
