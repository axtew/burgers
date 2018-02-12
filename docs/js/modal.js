// modal reviews
const reviews = $('.reviews');
const openButton = $('.reviews__btn-link');
const template = $('#modalOverly').html();
const closeElement = $('.modal__close');

openButton.on('click', function(e) {
  e.preventDefault();

  let modal = $('<div>', { class: 'modal' }).appendTo('.reviews');
  modal.html(template);

  $('.modal__cont').animate({
    'top' : '50%',
    'opacity' : '1'
  }, 500)
})

$('body').on('click', '.modal__cont', function(e) {
  e.stopPropagation();
});

$('body').on('click', '.modal__close, .modal', e => {
  $('.modal__cont').animate({
    'top' : '35%',
    'opacity' : '0'
  }, 500, function() {
      $('.modal').remove();
  })
});

$('.reviews').on('wheel', '.modal', function(e) {
  e.stopPropagation();
});
