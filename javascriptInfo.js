// 从第三行的第一列和第二列中间快速向右滑出的过程理解，由于在 table.onmouseover 方法里加入了下面三行
// if (currentElem) {
//   onLeave(currentElem)
// }
// 所以textarea里有 out -> TD.s



let currentElem;

table.onmouseover = function(event) { // relatedTarget ==> target
  let target = event.target;
  console.log("mouseover", target)
  console.log("mouseover relatedTarget", event.relatedTarget)

  if (currentElem && target.closest('td') === currentElem) {
    return
  }


  if (target.closest('td')) {
    currentElem = target.closest('td')
    onEnter(target.closest('td'))
  }
};

table.onmouseout = function(event) { // target ==> relatedTarget
  let target = event.target;
  console.log("mouseout target", target)
  console.log("mouseout relatedTarget", event.relatedTarget)

  if (event.relatedTarget && event.relatedTarget.closest('td') === currentElem) {
    return
  }


  if (target.closest('td')) {
    currentElem = null;
    onLeave(target.closest('td'))
  }
};

function onEnter(target) {
  target.style.background = 'pink';

  text.value += `over -> ${target.tagName}.${target.className}\n`;
  text.scrollTop = 1e6;
}

function onLeave(target) {
  target.style.background = '';

  text.value += `out <- ${target.tagName}.${target.className}\n`;
  text.scrollTop = 1e6;
}