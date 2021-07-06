// Your code
document.onmousedown = function (e) {
  let target = e.target;
  let rootElem = document.querySelector('html');
  
  let maximumRight = rootElem.clientWidth - target.offsetWidth;
  
  let maximumBottom;
  maximumBottom = rootElem.clientHeight - target.offsetHeight;

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
        // top = e.pageY - shiftY;
        // console.log("reached the bottom: ", rootElem.clientHeight + e.pageY - shiftY - maximumBottom)
        console.log("rootElem.clientHeight: ", rootElem.clientHeight)
        console.log("e.pageY: ", e.pageY)
        console.log("shiftY: ", shiftY)
        console.log("maximumBottom: ", maximumBottom)
        console.log(e.pageY - shiftY - maximumBottom)
        // window.scroll(0, rootElem.clientHeight + e.pageY - shiftY - maximumBottom);

        // 不知道为什么 e.pageY 的值会突然跳跃
        top = e.pageY - shiftY - maximumBottom + maximumBottom
        target.scrollIntoView();
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

