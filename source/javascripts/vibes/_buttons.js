injectIcons();

function injectIcons() {
  $('i').each( function() {
    var svgId = $(this).attr('class').split('-')[1];
    loadSvg($(this),svgId)
  });
}

function loadSvg(selector, svgId) {
  var target = selector;

  // If SVG is supported
  if (typeof SVGRect != "undefined") {
    // Request the SVG file
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "images/svg/icon_" + svgId + ".svg", true);
    ajax.send();

    // Append the SVG to the target
    ajax.onload = function(e) {
      target.html( ajax.responseText );
    }
  } else {}
}