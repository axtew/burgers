const accoItem = document.querySelectorAll('.menu__item');

for (let i = 0; i < 3; i++) {
  accoItem[i].addEventListener('click', function(e) {

    if (accoItem[i].classList.contains('menu__item--active')) {
      accoItem[i].classList.remove('menu__item--active');
    } else {

      for (let i = 0; i < 3; i++) {
        if (accoItem[i].classList.contains('menu__item--active')) {
          accoItem[i].classList.remove('menu__item--active');
        }
      }

      accoItem[i].classList.add('menu__item--active');

    }
  })
}
