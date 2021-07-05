// Your code
document.onmousedown = function (e) {
  let target = e.target;
  let rootElem = document.querySelector('html');
  
  let maximumRight = rootElem.clientWidth - target.offsetWidth;
  console.log("rootElem.scrollTop: ", rootElem.scrollTop);
  
  let maximumBottom;
  if (rootElem.scrollTop === 0) { // field 下面还有空间
    maximumBottom = rootElem.clientHeight - target.offsetHeight;
  } else {
    maximumBottom = field.getBoundingClientRect().bottom + rootElem.scrollTop - target.offsetHeight;
  }

  if (target.classList.contains("draggable")) {
    console.log("target: ", target);
    let targetRect = target.getBoundingClientRect();
    let shiftX = e.pageX - targetRect.left;
    let shiftY = e.pageY - targetRect.top;

    function onMouseMove(e) {
      console.log("mousemove");
      let left = e.pageX - shiftX;
      let top = e.pageY - shiftY;

      if (top < 0) {
        top = 0;
      }

      if (top > maximumBottom) {
        top = maximumBottom - 1;
      }

      if (left < 0) {
        left = 0;
      }

      if (left > maximumRight) {
        left = maximumRight;
      }

      

      target.style.position = "absolute";
      target.style.left = left + "px";
      target.style.top = top + "px";
    }

    document.addEventListener("mousemove", onMouseMove);

    document.onmouseup = function (e) {
      document.removeEventListener("mousemove", onMouseMove);
      document.onmouseup = null;
    };
  }
};

document.ondragstart = function() {
  return false;
};

