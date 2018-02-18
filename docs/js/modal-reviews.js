// modal reviews
const reviews = $('.reviews');
const openButton = $('.reviews__btn-link');
const review = $('#modalOverly').html();
const close = '.modal__close';

openButton.on('click', function(e) {
  e.preventDefault();

  modalEvent(review, reviews, close);
})
