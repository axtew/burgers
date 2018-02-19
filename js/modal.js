var modalEvent = function(Modal, Section, Close) {
  let modalWindow = $('<div>', { class: 'modal' }).appendTo(Section);
  modalWindow.html(Modal);

  $('.modal__cont').animate({
    'top' : '50%',
    'opacity' : '1'
  }, 500)

  $('body').on('click', '.modal__cont', function(e) {
    e.stopPropagation(Section);
  });

  $('body').on('click', '.modal, ' + Close, e => {
    $('.modal__cont').animate({
      'top' : '35%',
      'opacity' : '0'
    }, 500, function() {
        $('.modal').remove();
    })
  });

  $(section).on('wheel', '.modal', function(e) {
    e.stopPropagation();
  });
};
