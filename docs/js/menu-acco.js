// меню (горизонтальный аккордеон)
const acco = document.querySelector('.menu');
const accoItem = document.querySelectorAll('.menu__item');

acco.addEventListener('click', function(e) {
  for (let i = 0; i < accoItem.length; i++) {
    accoItem[i].classList.remove('menu__item--active');
  }
})

for (let i = 0; i < accoItem.length; i++) {
  accoItem[i].addEventListener('click', function(e) {
    e.stopPropagation();

    if (accoItem[i].classList.contains('menu__item--active')) {
      accoItem[i].classList.remove('menu__item--active');
    } else {

      for (let i = 0; i < accoItem.length; i++) {
        if (accoItem[i].classList.contains('menu__item--active')) {
          accoItem[i].classList.remove('menu__item--active');
        }
      }

      accoItem[i].classList.add('menu__item--active');

    }
  })
}
