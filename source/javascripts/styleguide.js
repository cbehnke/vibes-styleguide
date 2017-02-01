( function ( $ ) {

  // Create a new instance of Slidebars
  var controller = new slidebars();
  controller.init();

  // Left Slidebar controls
  $( '.js-toggle-left-slidebar' ).on( 'click', function ( event ) {
    event.stopPropagation();
    controller.toggle( 'slidebar-1' );
  } );
    
} ) ( jQuery );