// 从第三行的第一列和第二列中间快速向右滑出的过程理解，由于在 table.onmouseover 方法里加入了下面三行
// if (currentElem) {
//   onLeave(currentElem)
// }
// 所以textarea里有 out -> TD.s



let currentElem;

table.onmouseover = function(event) { // relatedTarget ==> target
  let target = event.target;
  console.log("mouseover", target)

  currentElem = target.closest('td') || target; // 这一行很关键，如果直接从 td.w 到 td.sw 的 child strong，那么 target 就是 strong 了已理解


  // 如果 mouseover target 不是 td 则退出
  if (currentElem.tagName !== 'TD') return;

  
// 怎么和 fast movement 区分
if (currentElem.tagName === event.relatedTarget.tagName) {
  onEnter(currentElem)
  return
}
  // 从 strong 进入到 td 和 从 td 进入到 child strong 
  if (event.relatedTarget.closest('td')) return;


  // 从 td 进入 child 退出
  // 单独此行的话不行，因为从 table 进入 td 也会触发
  // if (event.relatedTarget.contains(target)) return;

  onEnter(currentElem)


  
  /*

  if (currentElem) {
    onLeave(currentElem)
  }

  currentElem = target;

  onEnter(target) */
};

table.onmouseout = function(event) { // target ==> relatedTarget
  let target = event.target;
  console.log("mouseout target", target)
  // console.log("mouseout relatedTarget", event.relatedTarget)

  // 如果 mouseout target 不是 td 则退出
  if (target.tagName !== 'TD') return;


// 怎么和 fast movement 区分
if (target.tagName === event.relatedTarget.tagName) {
  onLeave(target)
  return
}
// 比如直接从 td.w 到 td.sw 的 child strong
if (event.relatedTarget && event.relatedTarget.closest('td') !== currentElem) {
  onLeave(target)
  return
}
// 如果直接从 td.sw 的 child strong 到 table 呢？



  // 从 strong 进入到 td 和 从 td 进入到 child strong 
  if (event.relatedTarget && event.relatedTarget.closest('td')) return;
  // 从 td 进入到 table
  if (event.relatedTarget && event.relatedTarget.contains(currentElem)) {
    onLeave(target)
    return
  }
  // 下面的一块代码跟上面两行解决同样的问题
  /* let closestTd = currentElem.closest('td')
  console.log("closestTd: ", closestTd)
  // 仍然在 td 里面
  // 进入到 child 时会触发
  if (target === closestTd) return;
  // 从 td child 进入 td
  if (closestTd.tagName === 'TD') return; */

  onLeave(target)



  /* // mouseout relatedTarget null 情况
  if (!event.relatedTarget) return;
  
  // 如果 relatedTarget 是 onmouseout td 则退出
  if (event.relatedTarget.tagName === 'TD') return;

  // 如果 target element 包含 relatedTarget element，则退出
  if (target.contains(event.relatedTarget)) return;

  if (target.tagName === 'TD') {
    onLeave(target)
  } */
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