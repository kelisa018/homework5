var drag = document.querySelector('.dragElement');

drag.onmousedown = function(e) {

  var coords = getCoords(drag);
  var shiftX = e.pageX - coords.left;
  var shiftY = e.pageY - coords.top;

  drag.style.position = 'absolute';
  document.body.appendChild(drag);
  moveAt(e);

  //ball.style.zIndex = 1000; // над другими элементами

  function moveAt(e) {
    drag.style.left = e.pageX - shiftX + 'px';
    drag.style.top = e.pageY - shiftY + 'px';
  }

  document.onmousemove = function(e) {
    moveAt(e);
  };

  drag.onmouseup = function() {
    document.onmousemove = null;
    drag.onmouseup = null;
  };

}

drag.ondragstart = function() {
  return false;
};

function getCoords(elem) {
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };

}
