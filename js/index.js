const acco = document.querySelector('.menu');
const accoItem = document.querySelectorAll('.menu__item');
const teamItem = document.querySelectorAll('.team__item');

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

for (let i = 0; i < teamItem.length; i++) {
  teamItem[i].addEventListener('click', function(e) {
    e.stopPropagation();

    if (teamItem[i].classList.contains('team__item--active')) {
      teamItem[i].classList.remove('team__item--active');
    } else {

      for (let i = 0; i < teamItem.length; i++) {
        if (teamItem[i].classList.contains('team__item--active')) {
          teamItem[i].classList.remove('team__item--active');
        }
      }

      teamItem[i].classList.add('team__item--active');

    }
  })
}
