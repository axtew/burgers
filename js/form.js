$('#order-form').on('submit', submitForm);
const formSection = $('.form');
const success = $('#success').html();
const error = $('#error').html();
const empty = $('#empty').html();
const formClose = '.modal__close-btn';

$(function() {
  $("#tel").mask("+7(999) 999-9999");
  $("#num-street").mask("9?99999",{placeholder:" "});
  $("#housing").mask("9?9",{placeholder:" "});
  $("#apartment").mask("9?99999",{placeholder:" "});
  $("#floor").mask("9?99",{placeholder:" "});
});

$('.form__input-text').on('click', function(e) {
  $(this).removeClass('empty_field');
});

function submitForm (e) {
  e.preventDefault();

  checkInput();

  let sizeEmpty = 0;
  $('.form__inner').find('.empty_field').each(function() {
    sizeEmpty++;
  });

  if (sizeEmpty > 0) {
    modalEvent(empty, formSection, formClose);
  } else {
    var form = $(e.target),
        data = form.serialize(),
        url = form.attr('action'),
        type = form.attr('method');

    ajaxForm(form).done(function(msg) {
      var mes = msg.mes,
          status = msg.status;

      if (status == 'OK') {
        modalEvent(success, formSection, formClose);
      } else {
        modalEvent(error, formSection, formClose);
      }
    }).fail(function(jqXHR, textStatus) {
      alert("Request failed: " + textStatus);
    });
  }
};

function checkInput() {
  $('.form__left').find('.form__input-text').each(function() {
    if ($(this).val() != '') {
      $(this).removeClass('empty_field');
    } else {
      $(this).addClass('empty_field');
    }
  });
}

// Универсальная функция для работы с формами
var ajaxForm = function (form) {
  var data = form.serialize(),
      url = form.attr('action');

  return $.ajax({
    type: 'POST',
    url: url,
    dataType : 'JSON',
    data: data
  })
};
