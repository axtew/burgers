// команда (вертикальный аккордеон)
const teamItem = document.querySelectorAll('.team__item');

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
