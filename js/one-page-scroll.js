// One page scroll
const dnd = $('body');
const ops = document.querySelector('.maincontent');
const section = $('.section');
const sectionsLenght = section.length;
const sectionsHeight = (sectionsLenght - 1) * (-100);
const down = document.querySelector('.arrow');
const step = 100;
var currentTop = 0;

document.body.addEventListener('wheel', function(e) {
  if ((e.wheelDeltaY > 0) && (currentTop < 0)) {
    currentTop += step;
    ops.style.top = currentTop + 'vh';

    $('.sidebar__item--active').prev().addClass('sidebar__item--active')
      .siblings('.sidebar__item').removeClass('sidebar__item--active');
  }
  if ((e.wheelDeltaY < 0) && (currentTop > sectionsHeight)) {
    currentTop -= step;
    ops.style.top = currentTop + 'vh';

    $('.sidebar__item--active').next().addClass('sidebar__item--active')
      .siblings('.sidebar__item').removeClass('sidebar__item--active');
  }
})

document.body.addEventListener('keydown', function(e) {
  if ((currentTop < 0) && (event.key == 'ArrowUp')) {
    currentTop += step;
    ops.style.top = currentTop + 'vh';
    $('.sidebar__item--active').prev().addClass('sidebar__item--active')
      .siblings('.sidebar__item').removeClass('sidebar__item--active');
  }
  if ((currentTop > sectionsHeight) && (event.key == 'ArrowDown')) {
    currentTop -= step;
    ops.style.top = currentTop + 'vh';
    $('.sidebar__item--active').next().addClass('sidebar__item--active')
      .siblings('.sidebar__item').removeClass('sidebar__item--active');
  }
})

down.addEventListener('click', function(e) {
  currentTop -= step;
  ops.style.top = currentTop + 'vh';

  $('.sidebar__item--active').next().addClass('sidebar__item--active')
    .siblings('.sidebar__item').removeClass('sidebar__item--active');
})

$('.sidebar__item').on('click', function() {
  $(this).addClass('sidebar__item--active')
    .siblings('.sidebar__item').removeClass('sidebar__item--active');

  let index = $('.sidebar__item--active').index();
  currentTop = index * (-100);
  ops.style.top = currentTop + 'vh';
})

$('.navigation__item').on('click', function() {
  let index = $(this).index();
  currentTop = (index + 1) * (-100);
  ops.style.top = currentTop + 'vh';

  $('.sidebar__item').each((ndx, item) => {
    if (ndx == index) {
      $(item).next().addClass('sidebar__item--active')
        .siblings('.sidebar__item').removeClass('sidebar__item--active');
    }
  })
})

$('.navigation__item:last-child').on('click', function() {
  currentTop = sectionsHeight;
  ops.style.top = currentTop + 'vh';

  $('.sidebar__item:last-child').addClass('sidebar__item--active')
    .siblings('.sidebar__item').removeClass('sidebar__item--active');
})

$('.header__btn-link').on('click', function(e) {
  e.preventDefault();

  currentTop = sectionsHeight + step;
  ops.style.top = currentTop + 'vh';

  $('.sidebar__item:last-child').prev().addClass('sidebar__item--active')
    .siblings('.sidebar__item').removeClass('sidebar__item--active');
})

var touchStartY;
dnd.on('touchstart', function(e) {
  for (var i = 0; i < e.changedTouches.length; i++) {
    touchStartY = e.changedTouches[i].pageY;
  }
});

var touchEndY;
dnd.on('touchend', function(e) {
  for (var i = 0; i < e.changedTouches.length; i++) {
    touchEndY = e.changedTouches[i].pageY;
  }

  if ((touchStartY > touchEndY) && (currentTop > sectionsHeight)) {
    currentTop -= step;
    ops.style.top = currentTop + 'vh';
  }

  if ((touchStartY < touchEndY) && (currentTop < 0)) {
    currentTop += step;
    ops.style.top = currentTop + 'vh';
  }
});
