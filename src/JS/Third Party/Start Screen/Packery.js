docReady( function() {
  var container = document.querySelector('.packery');
  var pckry = new Packery( container, {
    columnWidth: 65,
    rowHeight: 65
  });
  var itemElems = pckry.getItemElements();
  // for each item element
  for ( var i=0, len = itemElems.length; i < len; i++ ) {
    var elem = itemElems[i];
    // make element draggable with Draggabilly
    var draggie = new Draggabilly( elem );
    // bind Draggabilly events to Packery
    pckry.bindDraggabillyEvents( draggie );
  }
});
