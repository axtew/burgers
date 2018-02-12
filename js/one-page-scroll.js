// One page scroll
const ops = document.querySelector('.maincontent');
const section = document.querySelectorAll('.section').length;
const sectionsHeight = (section - 1) * (-100);
const down = document.querySelector('.arrow');
const step = 100;
var currentTop = 0;

document.body.addEventListener('wheel', function(e) {
  if ((e.wheelDeltaY > 0) && (currentTop < 0)) {
    currentTop += step;
    ops.style.top = currentTop + 'vh';
    $('.sidebar__item--active').prev().addClass('sidebar__item--active').siblings('.sidebar__item').removeClass('sidebar__item--active');
    }
  if ((e.wheelDeltaY < 0) && (currentTop > sectionsHeight)) {
    currentTop -= step;
    ops.style.top = currentTop + 'vh';
    $('.sidebar__item--active').next().addClass('sidebar__item--active').siblings('.sidebar__item').removeClass('sidebar__item--active');
  }
})

document.body.addEventListener('keydown', function(e) {
  if ((currentTop < 0) && (event.key == 'ArrowUp')) {
    currentTop += step;
    ops.style.top = currentTop + 'vh';
    $('.sidebar__item--active').prev().addClass('sidebar__item--active').siblings('.sidebar__item').removeClass('sidebar__item--active');
  }
  if ((currentTop > sectionsHeight) && (event.key == 'ArrowDown')) {
    currentTop -= step;
    ops.style.top = currentTop + 'vh';
    $('.sidebar__item--active').next().addClass('sidebar__item--active').siblings('.sidebar__item').removeClass('sidebar__item--active');
  }
})

down.addEventListener('click', function(e) {
  currentTop -= step;
  ops.style.top = currentTop + 'vh';
})

$('.navigation__item').on('click', function() {
  let index = $(this).index();
  currentTop = (index + 1) * (-100);
  ops.style.top = currentTop + 'vh';
})

$('.navigation__item:last-child').on('click', function() {
  let index = $(this).index();
  currentTop = sectionsHeight;
  ops.style.top = currentTop + 'vh';
})

$('.sidebar__item').on('click', function() {
  $(this).addClass('sidebar__item--active').siblings('.sidebar__item').removeClass('sidebar__item--active');
  let index = $('.sidebar__item--active').index();
  currentTop = index * (-100);
  ops.style.top = currentTop + 'vh';
})

$('.header__btn-link').on('click', function(e) {
  e.preventDefault();

  currentTop = sectionsHeight + step;
  ops.style.top = currentTop + 'vh';
})
