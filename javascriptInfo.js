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
// the enclosing lexical context (Arrow functions have no “this”)
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



// Conditional operators: if, '?'
// task: The name of JavaScript
/* let userInput = prompt(`what's the "official" name of JavaScript?`, ``)

if (userInput && (userInput.toLowerCase() === 'ecmascript')) {
  alert(`Right`)
} else {
  alert(`You don't know? "ECMAScript"!`)
} */


// task: Show the sign
/* let userInput = prompt('please input a number: ', '')
if (userInput > 0) {
  alert(1)
} else if (userInput < 0) {
  alert(-1)
} else {
  alert(0)
} */


// let result = a + b < 4 ? 'Below' : 'Over'


/* let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
    (login == '') ? 'No login' :
      '' */



// Logical operators
/* if (age >= 14 && age <= 90) {}

if (!(age >= 14 && age <= 90)) {}
if (age < 14 || age > 90) {} */


/* let userInput = prompt("Who's there?", "")

if (userInput === "Admin") {
  let pwd = prompt("Password?", "")
  if (pwd === "" || pwd === null) {
    alert("Canceled")
  } else if (pwd === "TheMaster") {
    alert("Welcome")
  } else {
    alert("Wrong password")
  }
} else if (userInput === "" || userInput === null) {
  alert("Canceled")
} else {
  alert("I don’t know you")
} */



// MDN: optional chaining
/* let foo = { someFooProp: "hi" }

console.log(foo.someFooProp?.toUpperCase())
console.log(foo.someBarProp?.toUpperCase()) */


/* let obj = {
  func() {
    alert("I'm a function inside an obj")
  },
  funcLong: function() {
    alert("I'm another function inside an obj")
  }
}

const { func, funcLong, funk } = obj
func()
funcLong()
funk && funk()
funk?.() */


/* let customer = {
  name: "Carl",
  details: { age: 82 }
}

let city = customer?.city ?? 'unknown city'
console.log(city) */



// Loops: while and for
/* let i = 0
for(; i < 3;) {
  alert(i++)
} */


// this way, 'continue' not working either
/* let i = 6
if (i > 5) {
  alert(i);
} else {
  continue;
} */


// label
/* outer:
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, '')

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer;
  }
}
alert('Done!') */


/* for (let i = 2; i <= 10; i++) {
  if (i % 2) continue

  alert(i)
} */


/* let i = 0
while(i < 3) {
  alert( `number ${i}!` )
  i++
} */


/* let flag = true
while(flag) {
  let userInput = prompt('Enters a number', '')
  if (userInput > 100 || !userInput) flag = false
} */

/* let userInput
do {
  userInput = prompt("Enters a number that's greater than 100", 0)
} while (userInput <= 100 && userInput) */


/* let n = 20
for (let i = 2; i < n; i++) {
  let flag = true
  for (let j = 2; j < i; j++) {
    if (i === 2) console.log(i)

    while (i % j === 0) {
      flag = false
      break
    }
  }
  if (flag) console.log(i)
} */

/* let n = 20
for (let i = 2; i < n; i++) {
  let flag = true
  for (let j = 2; j < i; j++) {
    if (!(i % j)) flag = false
  }
  if (flag) console.log(i)
} */

/* let n = 10
nextPrime:
for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    // if (!(i % j)) continue nextPrime
    if (i % j == 0) continue nextPrime
  }
  alert(`${n}以内（含）的质数： ` + i)
  if (i === 5) {
    console.log(unde)
  }
} */



// p5.js
/* function setup() {
  createCanvas(400, 400)
}

function draw() {
  // background(220)

  if (mouseIsPressed) {
    fill(0)
  } else {
    fill(255)
  }
  ellipse(mouseX, mouseY, 80, 80)
} */



// d3.js
let poemVerses = ["Always",
  "in the middle",
  "of our bloodiest battles",
  "you lay down your arms",
  "like flowering mines",
  "to conquer me home."
]

let selection = d3.select("#viz")
  .selectAll("p")
  .data(poemVerses)
  .enter()
  .append("p")
  .text("Click Me!")
  .on("click", d => {
    console.log(d)
    console.log(this)
    this.innerText = d
  })



// The "switch" statement
/* if (browser === 'Edge') {
  alert('')
} else if (browser === 'Chrome'
  || browser === 'Firefox'
  || browser === 'Safari'
  || browser === 'Opera') {
  alert('')
} else {
  alert('')
} */


/* let a = +prompt('a?', '');

switch (a) {
  case 0:
    alert(0)
    break

  case 1:
    alert(1)
    break

  case 2:
  case 3:
    alert('2,3')
    break
} */



// Functions
/* function showMessage(from, text = 'no text') {
  alert(from + ': ' + text)
}
showMessage('Ann') */


/* function showCount(count) {
  alert(count ?? 'unknown')
}
showCount(0)
showCount(null)
showCount() */


/* let obj = {
  name: 'derek',
  gender: 'male'
}
console.log(obj)

function getName(obj) {
  obj.name = 'joshua'
  return obj.name
}

alert(getName(obj))
console.log(obj) */


/* function checkAge(age) {
  return age > 18 ? true : confirm('Did parents allow you?')

  // return age > 18 || confirm('Did parents allow you?')
} */


/* function min(a, b) {
  return a > b ? b : a
}
console.log(min(2, 5))
console.log(min(3, -1))
console.log(min(1, 1)) */


/* let x = +prompt('x?', '')
let n = +prompt('n?', '')

function pow(x, n) {
  if (n > 1) {
    x *= x
    n--
  }
  return x
}

alert(pow(x, n)) */


/* ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
) */



// Coding Style
/**
 * Returns x raised to the n-th power
 * 
 * multiplies x by n times
 * @param {number} x - The number to multiply
 * @param {number} n - The number of times x should be multiplied by itself
 */
/* function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n <= 0) {
  alert(`Power ${n} is not supported, please enter an integer number greater 
         than zero`);
} else {
  alert( pow(x, n) );
} */



// Objects
/* let user = {}
user.name = 'John'
user.surname = 'Smith'
user.name = 'Pete'
delete user.name */


/* function isEmpty(obj) {
  for (let v in obj) {
    // if the loop has started, there's a property
    return false
  }

  return true
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false */


/* let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
}

let sum = 0
for (let salary in salaries) {
  sum += salaries[salary]
}

alert(sum) */


/* let menu = {
  width: 200,
  height: 300,
  title: "My menu"
}

multiplyNumeric(menu)

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2
    }
  }
}

console.log(menu) */


// Object copying, references
// Object.assign(dest, [obj1, obj2]) // return dest

/* let user = { name: "John" }

let permissions1 = { canView: true }
let permissions2 = { canEdit: true }

Object.assign(user, permissions1, permissions2)
console.log(user) */



// Object methods, "this"
/* function makeUser() {
  return {
    name: "John",
    ref() {
      return this
    }
  }
}

let user = makeUser()

alert( user.ref().name ) */


/* let calculator = {
  read() {
    let val1 = +prompt("Enter the first number", "")
    let val2 = +prompt("Enter the second number", "")
    this.value1 = val1
    this.value2 = val2
  },
  sum() {
    return this.value1 + this.value2
  },
  mul() {
    return this.value1 * this.value2
  },
}

calculator.read()
alert( calculator.sum() )
alert( calculator.mul() ) */


/* let ladder = {
  step: 0,
  up() {
    this.step++;
    return this
  },
  down() {
    this.step--;
    return this
  },
  showStep: function() { // shows the current step
    alert( this.step );
    return this
  }
}

ladder.up().up().down().showStep() */



// Constructor, operator "new"
/* function Calculator() {
  this.read = function() {
    this.a = +prompt("a?", "0")
    this.b = +prompt("b?", "0")
  }

  this.sum = function() {
    return this.a + this.b
  }

  this.mul = function() {
    return this.a * this.b
  }
}

let calculator = new Calculator()
calculator.read()

alert( "Sum=" + calculator.sum() )
alert( "Mul=" + calculator.mul() ) */


/* function Accumulator(startingValue = null) {
  this.value = startingValue

  this.read = function() {
    let userInput = +prompt("new number?", "0")
    this.value += userInput
  }
}

let accumulator = new Accumulator()

accumulator.read()
accumulator.read()

alert(accumulator.value) */



// Optional chaining '?.'
// user.address?.street



// Object to primitive conversion
/* let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`)
    // return hint == "string" ? `{name: "${this.name}"}` : this.money
    return {
      [this.name]: "Joshua"
    }
  }
}

alert(user.valueOf())
console.log(user.toString())
console.log(user)
// alert(+user)
// alert(user + 500) */


// In the absence of Symbol.toPrimitive and valueOf, toString will handle all primitive conversions
/* let user = {
  name: "John",

  toString() {
    return this.name
  }
}

alert(user)
alert(user + 500) */



// Methods of primitives
/* let str = "Hello"

str.test = 5

alert(str.test) */



// Numbers
// alert(7e2)

/* alert(0b11)
alert(0o11)
alert(0x11) */

/* alert( 6.35.toFixed(1) )

alert( Math.round(6.35 * 10) / 10 ) */

/* function readNumber() {
  // let userInput = prompt("Please enter a value", "")

  // if (userInput === "" || userInput === null) {
  //   return null
  // }

  // while (Number.isNaN(+userInput)) {
  //   userInput = prompt("Please enter a value", "")
  // }

  // return +userInput


  let userInput = prompt("Please enter a value", "")

  if (userInput === "" || userInput === null) {
    return null
  }

  while (!isFinite(userInput)) {
    userInput = prompt("Please enter a value", "")
  }

  return +userInput
}

console.log(readNumber()) */


/* let i = 0
while (i != 2.4) {
  i += 0.2
}

console.log("i = 2.4") */


/* function random(min, max) {
  return Math.random() * (max - min) + min
}

alert( random(1, 5) )
alert( random(1, 5) )
alert( random(1, 5) ) */


function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

alert( random(3, 5) )
// alert( random(1, 5) )
// alert( random(1, 5) )