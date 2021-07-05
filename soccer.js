// Your code
document.onmousedown = function(e) {
  let target = e.target;
  console.log("target: ", target)
  let targetRect = target.getBoundingClientRect();
  let shiftX = e.pageX - targetRect.left;
  let shiftY = e.pageY - targetRect.top;

  function onMouseMove(e) {
    console.log("mousemove")

    if (target.classList.contains('draggable')) {
      target.style.position = "absolute";
      target.style.left = e.pageX - shiftX + 'px';
      target.style.top = e.pageY - shiftY + 'px';
    }

    /* if (targetRect.top < 0) {
      window.scroll(0, 10)
    } */
  }

  document.addEventListener('mousemove', onMouseMove);

  document.onmouseup = function(e) {
    document.removeEventListener('mousemove', onMouseMove);
    document.onmouseup = null;
  }
};

document.ondragstart = function() {
  return false;
};

