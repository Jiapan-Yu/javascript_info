'use strict'

// Browser default actions
// why just 'elem' is ok?
/* elem.oncontextmenu = function (event) {
  event.preventDefault();
  // event.stopPropagation();
  alert("Button context menu");
}; */
/* elem.addEventListener('contextmenu', function (event) {
  alert("Button context menu");
  return false
}) */

/* document.oncontextmenu = function (event) {
  if (event.defaultPrevented) return false;

  event.preventDefault();
  alert("Document context menu");
}; */
/* document.addEventListener('contextmenu', function (event) {
  if (event.defaultPrevented) return false;

  event.preventDefault();
  alert("Document context menu");
}) */

/* function handler(event) {
  alert('...');
  event.preventDefault();
} */


/* contents.addEventListener('click', function (event) {
  let target = event.target.closest('a')

  if (target && !confirm(`Leave for ${target.getAttribute('href')}?`)) {
    event.preventDefault()
  }
}, false) */

/* contents.onclick = function(event) { // because it's the on<event> handler, so 'return false' works
  // 'use strict'
  let handleLink = (href) => { // why the 'let' keyword doesn't matter, because it's non-strict mode
    let isLeaving = window.confirm(`Leave for ${href}?`)
    if (!isLeaving) return false
  }

  // function handleLink(href) {
  //   let isLeaving = window.confirm(`Leave for ${href}?`)
  //   if (!isLeaving) return false
  // }

  let target = event.target.closest('a')
  if (target && contents.contains(target)) {
    return handleLink(target.getAttribute('href'))
  }
} */


/* thumbs.addEventListener('click', function(event){
  console.log(event.target)
  let targetA = event.target.closest('a')

  largeImg.setAttribute('src', targetA.getAttribute('href'))

  event.preventDefault()
}, false) */



// Event delegation
/* class Menu {
  constructor(elem) {
    this._elem = elem;
    elem.onclick = this.onClick.bind(this);
  }

  save() {
    alert('saving');
  }

  load() {
    alert('loading');
  }

  search() {
    alert('searching');
  }

  onClick(event) {
    console.log(event.target.dataset)
    let action = event.target.dataset.action;
    if (action) {
      this[action]();
    }
  }
}

new Menu(menu) */

/* document.addEventListener('click', function(event){
  if (event.target.dataset.counter != undefined) {
    console.log(typeof event.target.value)
    // event.target.value = Number(event.target.value) + 1;
    event.target.value++;
  }
}, false) */


/* document.addEventListener('click', function(event){
  let toggleId = event.target.dataset.toggleId;
  console.log(toggleId)
  
  if (!toggleId) return;

  let elm = document.getElementById(toggleId);
  elm.hidden = !elm.hidden;
}, false) */


/* document.addEventListener('click', function(event) {
  console.log([...document.getElementsByClassName('pane')])
  // console.log(Array.from(document.getElementsByClassName('pane')))
  console.log([...document.getElementsByClassName('remove-button')])
  console.log([...document.getElementsByClassName('remove-button')].indexOf(event.target))

  // Array.from(document.getElementsByClassName('pane'))[[...document.getElementsByClassName('remove-button')].indexOf(event.target)].toggleAttribute('hidden')
}, false); */


/* document.addEventListener('click', function(event) {
  const arr = ['horse', 'donkey', 'cat']
  console.log(arr.indexOf(event.target.dataset.animal))
  if (arr.includes(event.target.dataset.animal)) {
    event.target.closest('.pane').toggleAttribute('hidden')
  }
}, false); */


/* document.addEventListener('click', function (event) {
  if (event.target.className != 'remove-button') return;
  event.target.closest('.pane').remove();
}, false); */


// after I added the span tag in RegexBuddy first
/* tree.addEventListener('click', function (event) {
  let target = event.target
  if (target.tagName != 'SPAN') return

  let nextElementSibling = target.nextElementSibling
  nextElementSibling && nextElementSibling.toggleAttribute('hidden')
}, false); */


/* for (let li of tree.querySelectorAll('li')) {
  let spanElm = document.createElement('span')
  li.prepend(spanElm)
  spanElm.append(spanElm.nextSibling)
}

tree.addEventListener('click', function (event) {
  if (event.target.tagName != 'SPAN') return

  let childrenContainer = event.target.parentNode.querySelector('ul')
  if (!childrenContainer) return

  childrenContainer.hidden = !childrenContainer.hidden
}, false); */



// from MDN
// An object can be passed as the first argument to call or apply and this will be bound to it.
/* var obj = { a: 'Custom' };

// This property is set on the global object
var a = 'Global';

// function whatsThis() {
//   return this.a;  // The value of this is dependent on how the function is called
// }

let whatsThis = function () {
  return this.a;
}

console.log(whatsThis());          // 'Global'
console.log(whatsThis.call(obj));  // 'Custom'
console.log(whatsThis.apply(obj)); // 'Custom' */


/* const bruce = { name: "Bruce" }
const madeline = { name: "Madeline" }

function greet() {
  return `Hello, I'm ${this.name}`
}

console.log(greet())
console.log(greet.call(bruce))
console.log(greet.call(madeline)) */


/* function foo() {
  console.log(Object.prototype.toString.call(this))
}

foo.call(7)
foo.call('bar') */


let globalObject = this

// No matter what, foo's 'this' is set to what it was when it was created, here the 'global' object.
// The same applies to arrow functions created inside other functions: their 'this' remains that of 
// the enclosing lexical context
// let foo = (() => this)

// the value of 'this' is determined by how a function is called (runtime binding)
// let foo = function () { return this }
// console.log(foo() === globalObject)
// console.log(globalObject)

// check strict mode
// let foo = function () { return !this } // if 'strict' mode, this wil be undefined,
// otherwise the global object
// console.log(foo())

// let obj = {func: foo}
// console.log(obj.func() === globalObject)
// console.log(obj.func())


/* let obj = {
  bar: function() {
    let x = () => this
    return x
  }
}

let fn = obj.bar()

console.log(fn() === obj)

let foo = obj.bar

console.log(foo()() === window) */


/* let obj = {
  prop: 37,
  f: function() {
    return this.prop
  }
}

console.log(obj.f()) */


/* let o = {f: function () { return this.a + this.b }}
let p = Object.create(o)
p.a = 3
p.b = 2

console.log(b.f()) */


/* function sum() {
  return this.a + this.b + this.c
}

let o = {
  a: 1,
  b: 2,
  c: 3,
  get average() {
    return (this.a + this.b + this.c) / 3
  }
}

Object.defineProperty(o, 'sum', {
  get: sum, enumerable: true, configurable: true
})

console.log(o.average, o.sum) */



// from 'Learning JavaScript'
/* var i
for(i = 5; i >=0; i--) {
  setTimeout(function() {
    console.log(i === 0 ? "go!" : i)
  }, (5 - i) * 1000)
} */

// using 'Block-scoped variable'
/* for(let i = 5; i >=0; i--) {
  setTimeout(function() {
    console.log(i === 0 ? "go!" : i)
  }, (5 - i) * 1000)
} */


/* let asyncFunc = function (i) {
  setTimeout(function () {
    console.log(i === 0 ? "go!" : i)
  }, (5 - i) * 1000)
}

let i
for (i = 5; i >= 0; i--) {
  // asyncFunc(i)
  (function (i) {
    setTimeout(function () {
      console.log(i === 0 ? "go!" : i)
    }, (5 - i) * 1000)
  })(i)
} */


/* function countdown() {
  // let i
  console.log("Countdown:")
  for (let i = 5; i >= 0; i--) {
    setTimeout(function() {
      console.log(i === 0 ? "Go!" : i)
    }, (5 - i) * 1000)
  }
}
countdown() */


/* {
  // block 1
  const x = 'blue'
  console.log(x)
}
console.log(typeof x) */


/* let globalFunc
{
  let blockVar = 'a'
  globalFunc = function(){
    console.log(blockVar)
  }
}
globalFunc() */


/* const message = (function() {
  const secret = "I'm a secret!"
  return `The secret is ${secret.length} characters logn`
})()
console.log(message) */


/* const f = (function() {
  let count = 0
  return function() {
    console.log(`I have been called ${++count} times`)
  }
})()
f()
f() */


/* var f = function f() {
  console.log('f')
}
f() */


// will cause an error because 'x' is declared with let keyword
/* console.log(typeof x) // Uncaught ReferenceError: Cannot access 'x' before initialization
if(typeof x === "undefined") {
  console.log("x doesn't exist or is undefined")
} else {

}
let x = 5 */


// will not cause an error because 'x' is not declared
/* 'use strict'
{
  // block 1
  const x = 'blue'
  console.log(x)
}
console.log(typeof x) */



// Variable scope
/* {
  let message = "Hello"
  alert(message)
}

alert(message) */


/* for (let i = 0; i < 3; i++) {
  // the variable i is only visible inside this for
  alert(i)
} */


/* function sayHiBye(firstName, lastName) {
  
  // helper nested function to use below
  function getFullName() {
    return firstName + " " + lastName
  }

  alert("Hello, " + getFullName())
  alert("Bye, " + getFullName())
}
sayHiBye('Joshua', 'Yu') */


/* function makeCounter() {
  let count = 0

  return function() {
    return count++
  }
}

let counter = makeCounter()

alert(counter())
alert(counter())
alert(counter()) */


/* function f() {
  let value = Math.random();

  return function() { alert(value) };
}

let arr = [f(), f(), f()]
arr[0]()
arr[1]()
arr[2]() */


/* function f() {
  let value = Math.random();

  function g() {
    debugger
  }

  return g
}

let g = f()
g() */


/* function makeCounter() {
  let count = 0

  return function () {
    return count++
  }
}

let counter = makeCounter()

alert(counter())
alert(counter())

let counter2 = makeCounter()

alert(counter2())
alert(counter2()) */


/* function Counter() {
  let count = 0

  this.up = function() {
    return ++count
  }
  this.down = function() {
    return --count
  }
}

let counter = new Counter()

alert( counter.up() )
alert( counter.up() )
alert( counter.down() ) */


/* let phrase = "Hello"

if (true) {
  let user = "John"

  function sayHi() {
    alert(`${phrase}, ${user}`)
  }
}

sayHi() */


/* function sum(a) {
  return function(b) {
    return a + b
  }
}

alert(sum(5)(-1)) */


/* let x = 1

function func() {
  console.log(x)

  let x = 2
}

func() */


/* let isBigEnough = (a, b) => (v) => {
  console.log(a, b, v)
  // return value >= 10
} */

/* function inBetween(a, b) {
  return function(x) {
    if (x >= a && x <= b) {
      return true
    }
    return false
  }
}

let filtered = [12, 5, 8, 130, 44].filter(inBetween(10, 100))
alert(filtered) */


/* let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
]

function byField(flag) {
  return (a, b) => {
    console.log(flag)
    return a[flag] > b[flag] ? 1 : -1
  }
}

// console.log(users.sort(byField('name')))
console.log(users.sort(byField('age'))) */


/* function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i
    let shooter = function () { // shooter function
      alert(j); // should show its number
    };
    shooters.push(shooter);
    i++;
  }

  // for (let i = 0; i < 10; i++) {
  //   let shooter = function () { // shooter function
  //     alert(i); // should show its number
  //   };
  //   shooters.push(shooter);        
  // }

  return shooters;
}

let army = makeArmy();

army[0](); // the shooter number 0 shows 10
army[5](); // and number 5 also outputs 10...
// ... all shooters show 10 instead of their 0, 1, 2, 3... */



// Introduction to browser events
/* hideSelfBtn.addEventListener('click', this.hideSelf)

function hideSelf() {
  this.hidden = true
} */

/* let hideSelf = () => {
  this.hidden = true
} */


/* function handler() {
  alert("1")
}
hideSelfBtn.addEventListener("click", this.handler);

// hideSelfBtn.removeEventListener("click", this.handler);

hideSelfBtn.onclick = () => alert(2); */



// Interaction: alert, prompt, confirm
/* let test = prompt("what's your name");
alert(test) */



// Dispatching custom events
/* let event = new Event("click")
console.log(event.isTrusted)
elem.dispatchEvent(event) */


/* document.addEventListener('hello', e => {
  alert('hello from ' + e.target.tagName)
})

let hello = new Event('hello', { bubbles: true })
elem.dispatchEvent(hello) */



// Hello, world!
// alert("I’m JavaScript!")



// Variables
/* let admin
let name
name = 'John'
admin = name
alert(admin)


let earth
let currentVisitorName */



// Data types
/* let name = 'Ilya'

alert(`hello ${1}`)
alert(`hello ${"name"}`)
alert(`hello ${name}`) */