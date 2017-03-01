function resetErrorFields() {
  var $errorFields = $('.input-container.error');

  $errorFields.children().on('focus', function() {
    var $fieldContainer = $(this).parents('.input-container');

    $fieldContainer.removeClass('error').find('.input-info').text('');
  })
}

function initializeSelectFields() {
  let selectInstance = new Select( {
    el: document.querySelector( 'select.select-target' ),
    className: 'select-theme-default'
  } );
}

$(function() { resetErrorFields(); initializeSelectFields(); });