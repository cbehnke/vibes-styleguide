function resetErrorFields() {
  var $errorFields = $('.input-container.error');

  $errorFields.children().on('focus', function() {
    var $fieldContainer = $(this).parents('.input-container');

    $fieldContainer.removeClass('error').find('.input-info').text('');
  })
}

$(function() { resetErrorFields(); });