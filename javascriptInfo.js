'use strict'

// Browser default actions
// why just 'elem' is ok? See https://javascript.info/searching-elements-dom
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



// from MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
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


// let globalObject = this

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
// otherwise the global object. But not applying to arrow functions
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
/* let poemVerses = ["Always",
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
  }) */



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


/* function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

alert( random(3, 5) )
// alert( random(1, 5) )
// alert( random(1, 5) ) */



// Strings
// let guestLists = `Guests:
//   * John
//   * Pete
//   * Marry
// `

// let guestLists = "Guests: \n * John \n * Pete \n * Mary"

// alert(guestLists)

// alert("the backslash: \\")

// let str = `Hello`

// the first character
// alert(str[0])
// alert(str.charAt(0))

// the last character
// alert(str[str.length - 1])

// for (let char of str) alert(char)


// let str = `Widget with id`

// alert(str.indexOf('id', 2))

/* let fromIndex = 0
while (str.indexOf('id', fromIndex) !== -1) {
  alert(str.indexOf('id', fromIndex))

  fromIndex = str.indexOf('id', fromIndex) + 1
} */

// let pos = -1
// alert(pos = str.indexOf('id', 2))


// let str = "stringify"

// alert( str.slice(2) )

// alert( str.substr(-1, 1) )


// alert( 'Österreich'.localeCompare('Zealand') )

// alert( typeof '𝒳'.charCodeAt(0) );
// alert( '𝒳'.charCodeAt(0).toString(16) );


/* alert( 'S\u0307\u0323' )
alert( '\u1e68' ) */

// alert( "hello\nworld" )


/* function ucFirst(str) {
  if (!str) return ''

  let result = str[0].toUpperCase() + str.slice(1)
  return result
}

alert(ucFirst("john")) */


/* function checkSpam(str) {
  let lowercaseStr = str.toLowerCase()

  if (lowercaseStr.includes('viagra') || lowercaseStr.includes('xxx')) {
    return true
  }

  return false
}

alert( checkSpam('buy ViAgRA now') )
alert( checkSpam('free xxxxx') )
alert( checkSpam("innocent rabbit") ) */


/* function truncate(str, maxlength) {
  if (str.length <= maxlength) {
    return str
  }

  return str.slice(0, maxlength - 1) + '...'
}

alert( truncate("What I'd like to tell on this topic is:", 20) )
alert( truncate("Hi everyone!", 20) ) */


/* function extractCurrencyValue(str) {
  return +str.slice(1)
}

alert( extractCurrencyValue('$120') === 120 ) */



// Arrays
/* let person = ['Apple', { name: 'John' }, true, function() { return 'hello' }]

alert(person[1].name)
alert(person[3]()) */

/* let fruits = ['Apple', 'Orange', 'Pear']
alert( fruits.shift() )
alert( fruits ) */


/* let arr = []
arr[123] = 'John'
alert( arr.length ) */


/* let arr = [1, 2, 3]

alert( arr )
alert( String(arr) === '1,2,3') */


/* let styles = ['Jazz', 'Blues']
alert( styles )

styles.push('Rock-n-Roll')
alert( styles )
styles[Math.floor(styles.length / 2)] = 'Classics'
alert( styles )

let firstValue = styles.shift()
// alert(firstValue)
alert( styles )

styles.unshift('Rap', 'Reggae')
alert( styles ) */


/* let arr = ['a', 'b']

arr.push(function() {
  alert( this )
})

arr[2]() */


/* let arr = []
function sumInput() {
  let userInput = prompt('Enter a value:', '')
  
  while (
    !(userInput === ''
    || userInput === null
    || +userInput === NaN)
  ) {
    arr.push(+userInput)
    userInput = prompt('Enter a value:', '')
  }
}

console.log(arr)

sumInput()

if (arr.length)
  alert(arr.reduce((acc, val) => acc + val)) */

/* function sumInput() {
  let arr = []

  while (true) {
    let userInput = prompt('Enter a value:', 0)

    if (userInput === '' || userInput === null || +userInput === NaN) break

    arr.push(+userInput)
  }

  let sum = 0
  for (let i of arr) {
    sum += i
  }

  return sum
}

alert( sumInput() ) */


// A maximal subarray
// 可不可以用 Math.max() 方法
/* function getMaxSubSum(arr) {
  let resultArr = [];

  let firstNonNegativeElmIndex = arr.findIndex((v) => v >= 0);

  if (firstNonNegativeElmIndex !== -1) {
    let initialValue = 0;

    while (firstNonNegativeElmIndex < arr.length) {
      initialValue += arr[firstNonNegativeElmIndex];

      // 如果之和小于0那么就没有意义去加后面的那个数了，应该重新
      // 以后面那个正数开始
      while (initialValue < 0) {
        if (firstNonNegativeElmIndex === arr.length - 1) {
          break;
        }

        let nextIteration = arr[++firstNonNegativeElmIndex];
        initialValue = nextIteration;
      }

      resultArr.push(initialValue);

      firstNonNegativeElmIndex++;
    }
  } else {
    resultArr = [0];
  }
  
  console.log(Math.max(...resultArr));
} */

/* getMaxSubSum([-1, 2, 3, -9])
getMaxSubSum([2, -1, 2, 3, -9])
getMaxSubSum([-1, 2, 3, -9, 11])
getMaxSubSum([-2, -1, 1, 2])
getMaxSubSum([100, -9, 2, -3, 5])
getMaxSubSum([1, 2, 3])
getMaxSubSum([-1, -2, -3]) */



// Array methods
/* let arr = ['I', 'study', 'javascript', 'right', 'now']

arr.splice(0, 3, "Let's", "dance")

console.log(arr) */

/* let arr = [1, 2, 5]

arr.splice(-1, 0, 3, 4)

alert(arr) */

/* let arr = [1, 2]

let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
}

console.log(arr.concat(arrayLike)) */

// not working, don't know why
// because JavaScript does not assume a semicolon before 
// square brackets, see https://javascript.info/structure#semicolon
// ["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

/* let arr = ["Bilbo", "Gandalf", "Nazgul"]
arr.forEach(alert); */

/* let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
]

let someUsers = users.filter(v => v.id < 3)

alert(someUsers.length) */


/* let arr = [1, 2, 15]

// let result = arr.sort()
let result = arr.reverse()

// alert(result === arr)
console.log(result === arr) */


/* let arr = ['Bilbo', 'Gandalf', 'Nazgul']

let str = arr.join(';')

console.log(str) */


/* let arr = []

// TypeError: Reduce of empty array with no initial value
let result = arr.reduce((acc, current) => acc + current)

console.log(result) */


/* let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge
  },
}

let users = [
  {age: 17},
  {age: 27},
  {age: 22},
  {age: 18},
]

let result = users.filter(army.canJoin, army)
console.log(result) */


// Tasks
/* function camelize(str) {
  // let camelizedArr = str.split('-').map((v, index) => {
  //   if (index === 0) return v

  //   return v[0].toUpperCase() + v.slice(1)
  // })

  // return camelizedArr.join("")


  return str
    .split('-')
    .map((v, index) => index === 0 ? v : v[0].toUpperCase() + v.slice(1))
    .join("")
}

console.log(camelize("background-color"))
console.log(camelize("list-style-image"))
console.log(camelize("-webkit-transition")) */


/* function filterRange(arr, a, b) {
  return arr.filter(v => v >= a && v <= b)
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log( filtered );
console.log( arr ); */


/* let arr = [5, 3, 8, 1]

function filterRangeInPlace(arr, a, b) {
  arr.forEach((v, index) => v < a || v > b ? arr.splice(index, 1) : '')  
}

filterRangeInPlace(arr, 1, 4)

console.log( arr ) */


/* let arr = [5, 2, 1, -10, 8]

arr.sort((a, b) => b - a)

console.log( arr ) */


/* function copySorted(arr) {
  let arrCopy = arr.slice()
  arrCopy.sort()
  
  return arrCopy
}

let arr = ["HTML", "JavaScript", "CSS"]
let sorted = copySorted(arr)

console.log( sorted )
console.log( arr ) */


/* function Calculator() {
  // this = {}

  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  }

  this.calculate = function (str) {
    let resultArr = str.split(" "),
      a = +resultArr[0],
      op = resultArr[1],
      b = +resultArr[2];

    return this.methods[op](a, b)
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func
  }

  // return this
}

let calc = new Calculator()
console.log(calc.calculate("3 + 7"))

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8 */


/* let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(v => v.name)

console.log( names ); // John, Pete, Mary */


/* let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(v => {
  return {
    fullName: v.name + " " + v.surname,
    id: v.id
  }
})

console.log(usersMapped) */


/* let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

function sortByAge(users) {
  users.sort((a, b) => a.age - b.age)
}

sortByAge(arr);

console.log(arr) */



// Map and Set
/* let map = new Map()

map.set('1', 'str1')
map.set(1, 'num1')
map.set(true, 'bool1')

console.log(map.get('1'))
console.log(map.get(1))
console.log(map.get(true)) */

// create a map from an object
/* let obj = {
  name: "John",
  age: 30
};

let map = new Map(Object.entries(obj));

console.log(map.get("name")) */

// Tasks
/* function unique(arr) {
  return [...new Set(arr)]
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); */

/* let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let sortedNewArr = []
  for (let i = 0; i < arr.length; i++) {
    // 数组的元素全部转为小写
    let elm = arr[i].toLowerCase();

    // convert an iterable object to an array and sort them alphabetically
    let elmArr = [...elm].sort();

    // alphabetically sorted string
    let sortedElmStr = elmArr.join("");

    sortedNewArr.push(sortedElmStr)
  }

  console.log("sortedNewArr: ", sortedNewArr);
  let set = new Set(sortedNewArr);

  return set;
}

let set = aclean(arr);
console.log("set: ", set);

console.log("===============================")
// 将数组按照 anagrams 转换成 map
function arrToMap(arr) {
  let map = new Map();
  // iterate over the set
  for(let value of set) {
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
      if (value === [...arr[i].toLowerCase()].sort().join("")) {
        newArr.push(arr[i])
      }
    }
    map.set(value, newArr);
  }

  return map;
}

function arrayClean(arr) {
  let map = arrToMap(arr);

  console.log("arrToMap: ", map)
  console.log("map to array's values: ", [...map.values()])
  let mapValuesArr = [...map.values()];

  let resultArr = [];

  for (let i = 0; i < mapValuesArr.length; i++) {
    console.log("mapValuesArr[i].length: ", mapValuesArr[i].length);
    let randomIndex = Math.floor(Math.random() * mapValuesArr[i].length)
    console.log(Math.floor(Math.random() * mapValuesArr[i].length));

    resultArr.push(mapValuesArr[i][randomIndex]);
  }

  console.log("map: ", map);
  return resultArr;
}

console.log(arrayClean(arr)) */

/* object from map:Object.fromEntries()
map from object:Object.entries() */

// alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

/* let map = new Map();

map.set("name", "John");

let keys = [...map.keys()];

// Error: keys.push is not a function
keys.push("more");

alert(keys) */



// WeakMap and WeakSet
/* let john = { name: "John" };

let array = [ john ];

john = null

console.log(array[0]) */

/* let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok");

console.log(weakMap.get(obj));

weakMap.set("obj", "ok"); */



// Object.keys, values, entries
/* let user = {
  name: "John",
  age: 30
};

user[Symbol('login')] = "login";

console.log(Object.keys(user));
console.log(Reflect.ownKeys(user))
console.log(Object.getOwnPropertySymbols(user)) */


/* let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(salaries) {
  let allSalariesArr = Object.values(salaries);

  let sum = 0;

  for (let salary of allSalariesArr) {
    sum += salary;
  }

  return sum;
}

alert( sumSalaries(salaries) ); */


/* let user = {
  name: 'John',
  age: 30
};

function count(obj) {
  return Object.keys(obj).length;
}

alert( count(user) ); */



// Recursion and stack
/* function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

console.log(pow(2, 3)); */

/* function pow(x, n) {
  if (n === 1) {
    return x;
  } else {
    return x * pow(x, n - 1)
  }
}

console.log(pow(2, 3)); */

/* let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 1600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

function sumSalaries (obj) {
  let sum = 0;

  if (Array.isArray(obj)) {
    return obj.reduce((acc, curVal) => acc + curVal.salary, 0)
  } else {
    let arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++) {
      sum += sumSalaries(arr[i])
    }
  }

  return sum;
}

console.log(sumSalaries(company)); */

/* let sum = 0;

console.log(company.sales)

sum = company.sales.reduce((acc, curVal) => acc + curVal.salary, 0)

console.log(sum) */

/* // 自己的错误解决方案
function sumSalaries (obj) {
  let sum = 0;

  if (Array.isArray(obj)) {
    for (let value of obj) {
      sum += value.salary;
    }
  } else {
    let arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++) {
      sumSalaries(arr[i])
    }
  }

  return sum;
} */

// console.log(Object.values(company))

/* console.log(Object.values(company.development))

let arrs = Object.values(company.development);

console.log([].concat(...arrs)) */

// linked lists
// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };


// tasks
/* // Using a for loop.
function sumTo(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumTo(100)) */

/* // Using a recursion
function sumTo(n) {
  if (n == 1) {
    return 1;
  } else {
    let sum = 0;
    sum = n + sumTo(n - 1);
    return sum;
  }
}

console.log(sumTo(100)) */

/* // Using the arithmetic progression formula
function sumTo(n) {
  return n * (1 + n)/2;
}

console.log(sumTo(100)) */

/* // Calculate factorial
function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)) */

// Fibonacci numbers
/* function fib(n) {
  if (n == 1 || n == 2) {
    return 1;
  } else {
    return fib(n-1) + fib(n - 2)
  }
} */

/* // 1, 1, 2, 3, 5, 8, 13, 21
function fib(n) {
  let a = 1;
  let b = 1;
  let c = a + b;
  for (let i = 3; i < n; i++) {
    a = b;
    b = c;
    c = a + b;
  }
  return c;
}

console.log(fib(3)); // 2
console.log(fib(4)); // 3
console.log(fib(7)); // 13
console.log(fib(77)); */

/* // Output a single-linked list
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// using a loop
function printList(list) {
  let tmp = list;
  
  while(tmp) {
    console.log(tmp);
    tmp = tmp.next;
  }
}

// using recursion
// function printList(list) {
//   console.log({ value: list.value, next: list.next });
//   if (list.next !== null) {
//     printList(list.next);
//   }
// }

printList(list); */


// Output a single-linked list in the reverse order
/* let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
}; */

// using a loop
// function printList(list) {
//   let tmp = list;
//   let count = 0;
  
//   while (tmp.next !== null) {
//     tmp = tmp.next;
//     count++;
//   }

//   console.log("count: ", count);

//   while (count) {
//     let anotherTmp = list;
//     for (let i = 0; i < count; i++) {
//       tmp = anotherTmp.next;
//       anotherTmp = anotherTmp.next;
//     }

//     console.log(tmp.value);
//     count--;
//   }
//   console.log(list.value)
// }

// using recursion
// function printList(list) {
//   if (list.next !== null) {
//     printList(list.next);
//   }
  
//   console.log(list.value);
// }

// printList(list);



//Destructuring assignment
/* let [name, surname] = "John Smith".split(" ");

console.log(name);
console.log(surname); */

/* let guest = "Jane";
let admin = "Mike";

[guest, admin] = [admin, guest]

console.log(guest);
console.log(admin); */

/* let [name = prompt("name?"), surname = prompt("surname?")] = ["Julie"];

console.log(name);
console.log(surname); */

/* let height, width, title;

({height, width, title} = { title: "Menu", height: 200, width: 100 })

console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200 */

/* let user = {
  name: "John",
  years: 30
};

let {name, years: age, isAdmin = false} = user;

console.log(name);
console.log(age);
console.log(isAdmin); */

/* let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  let salaryPairArr = Object.entries(salaries);

  let topPerson = null;
  let tempSalary = 0;

  for (let [person, salary] of salaryPairArr) {
    if (tempSalary < salary) {
      topPerson = person;
      tempSalary = salary;
    }
  }

  return topPerson;
}

console.log(topSalary(salaries)); */



// Date and time
/* let start = Date.now();

for (let i = 0; i < 100000; i++) {
  let m = i * i * i;
}

let end = Date.now();

console.log(`it spent: ${end - start}ms`) */


/* let date = new Date(2012, 1, 20, 3, 12);

alert(date); */


// let date = new Date(2012, 0, 3);  // 3 Jan 2012

// function getWeekDay(date) {
//   let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']

//   return days[date.getDay()]
// }

// alert( getWeekDay(date) );        // should output "TU"


/* let date = new Date(2012, 0, 3); // 3 Jan 2012

function getLocalDay(date) {
  console.log(date.getDay())
  if (date.getDay() === 0) {
    return 'Sunday, 7'
  }

  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return `${days[date.getDay()]}, ${date.getDay()}`
}

console.log(getLocalDay(date)) */


// Which day of month was many days ago?
/* function getDateAgo(date, days) {
  return new Date(date.getTime() - days * 24 * 60 * 60 * 1000).getDate();
}

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014) */


// Last day of month?
function getLastDayOfMonth(year, month) {
  /* if (month === 11) {
    let dateCopy = new Date(year + 1, 1);

    dateCopy.setDate(dateCopy.getDate() - 1);

    return dateCopy.getDate()
  }

  let dateCopy = new Date(year, month + 1);

  dateCopy.setDate(dateCopy.getDate() - 1);

  return dateCopy.getDate() */

  return new Date(year, month + 1, 0).getDate();
}

// console.log(getLastDayOfMonth(2012, 1));


/* // How many seconds have passed today?
function getSecondsToday() {
  let date = new Date();

  let timePortion = date.toTimeString().substring(0, 8);

  let timeArr = timePortion.split(":");
  
  return timeArr[0] * 60 * 60 + timeArr[1] * 60 + timeArr[2];
}

console.log(getSecondsToday()) */


// How many seconds till tomorrow?
/* function getSecondsToTomorrow() {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  let millisecondsToTomorrow = tomorrow - now;

  return Math.round(millisecondsToTomorrow / 1000);
} */

/* function getSecondsToTomorrow() {
  let now = new Date();
  
  // 返回距离到明天凌晨的秒数
  return (23 - now.getHours()) * 60 * 60 + (59 - now.getMinutes()) * 60 + (60 - now.getSeconds());
} */

// console.log(getSecondsToTomorrow());


// Format the relative date
/* function formatDate(date) {
  let diffFromNow = new Date() - date;

  if (diffFromNow < 1000) {
    return "right now";
  } else if (diffFromNow < 1000 * 60) {
    return `${Math.round(diffFromNow / 1000)} sec. ago`;
  } else if (diffFromNow < 1000 * 60 * 60) {
    return `${Math.round(diffFromNow / 1000 / 60)} min. ago`;
  } else {
    let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    let month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    let year = date.getFullYear().toString().substring(2);
    let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

    return `${day}.${month}.${year} ${hours}:${minutes}`;
  }
}

console.log(formatDate(new Date(new Date - 1)));
console.log(formatDate(new Date(new Date - 30 * 1000)));
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));

console.log(formatDate(new Date(new Date - 86400 * 1000 * 20 - 60 * 60 * 1000 * 3))); */



// JSON methods, toJSON
/* let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room
}

room.occupiedBy = meetup;

// console.log( JSON.stringify(meetup, ['title', 'participants', 'name', 'place', 'number']) );

console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    // console.log("key: ", key, "value: ", value);
    console.log("key: " + key);
    console.log("value: " + value);

    if (key == "occupiedBy") return undefined;

    return value;
  },
  2)
); */

/* console.log( JSON.stringify(meetup, function replacer(key, value) {
  console.log(`${key}: ${value}`);
  return (key == 'occupiedBy') ? undefined : value;
})); */


/* let room = {
  number: 23,
  toJSON() {
    return this.number;
  }
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  room
}

console.log(JSON.stringify(room))
console.log(JSON.stringify(meetup)) */


// Tasks
/* let user = {
  name: "John Smith",
  age: 35
}

let stringifiedUser = JSON.stringify(user);
console.log(stringifiedUser);

let newUser=  JSON.parse(stringifiedUser);
console.log(newUser); */


/* let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

// console.log( JSON.stringify(meetup, function replacer(key, value) {
//   if (key === "self") return undefined;

//   if (key === "occupiedBy") {
//     if (value.hasOwnProperty("occupiedBy"))
//       return undefined;
//   }

//   return value;
// }));

// remove properties that reference meetup
console.log( JSON.stringify(meetup, function replacer(key, value) {
  console.log(key)
  return (key != "" && value == meetup) ? undefined : value;
})); */



// The old "var"
/* let arr = [function () { }];

console.log(arr[0].name); */



// Function object, NFE
/* isYes = true
alert('You said yes')
alert(true)

isYes = false
alert(false) */


// tasks: Set and decrease for counter
// function property solution
/* function makeCounter() {
  function counter() {
    console.log("counter.count: ", counter.count);
    return counter.count++;
  }

  counter.count = 0;

  counter.set = function(val) {
    counter.count = val;
  }

  counter.decrease = function() {
    counter.count--;
  }

  return counter;
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

counter.set(6)
console.log(counter()); // 6

counter.decrease();
console.log(counter.count); // 6 */

// closure solution
/* function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = function(val) {
    count = val;
  }

  counter.decrease = function() {
    count--;
  }

  return counter;
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

counter.set(6)
console.log(counter()); // 6

counter.decrease();
console.log(counter()); // 6 */


// Sum with an arbitrary amount of brackets
/* function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  }

  return f;
}

sum(1)(2)
sum(1)(2)(3)
sum(5)(-1)(2)
sum(6)(-1)(-2)(-3)
sum(0)(1)(2)(3)(4)(5) */



// Scheduling: setTimeout and setInterval
/* let timerID = setInterval(() => alert("tick"), 2000);
setTimeout(() => {clearInterval(timerID); alert("stop");}, 5000); */

/* setTimeout(() => alert("World"), 0);

alert("Hello"); */

/* function printNumbers(from, to) {
  window.setTimeout(function f() {
    console.log(from++)
    let timerID = window.setTimeout(f, 1000);

    if (from > to) {
      clearTimeout(timerID);
    }
  }, 1000);
} */

/* function printNumbers(from, to) {
  let timerID = window.setInterval(function() {
    console.log(from++);

    if (from > to) {
      clearInterval(timerID);
    }
  }, 1000);
} */

// printNumbers(1, 3);



// Decorators and forwarding, call/apply
// we'll make worker.slow caching
/* let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    // scary CPU-heavy task here
    alert("Called with " + x);
    return x * this.someMethod(); // (*)
  }
};

// same code as before
function cachingDecorator(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func.call(this, x); // (**)
    cache.set(x, result);
    return result;
  };
}

alert( worker.slow(1) ); // the original method works

worker.slow = cachingDecorator(worker.slow); // now make it caching

alert( worker.slow(2) ); // Whoops! Error: Cannot read property 'someMethod' of undefined */

// method borrowing
/* function hash() {
  alert( [].join.apply(arguments) ); // Error: arguments.join is not a function
}

hash(1, 2, 3); */


// Tasks
/* function work(a, b) {
  alert( a + b ); // work is an arbitrary function or method
}

function spy(func) {
  let cache = new Map();

  return function interFunc() {
    cache.set(arguments[0], arguments[1] );
    
    interFunc.calls = [...cache];
    func(...arguments);
  }
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
} */


/* function f(x) {
  alert(x);
}

function delay(f, ms) {
  function wrapper() {
    setTimeout(() => {
      console.log(this);
      f.apply(this, arguments)
    }, ms);
  }
  return wrapper;
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // shows "test" after 1000ms
f1500("test"); // shows "test" after 1500ms */


// tasks
/* function f(x) {
  alert("called after 1000ms");
  alert(x);
}

function debounce(handler, delay) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => handler(...arguments), delay);
  }
}

f = debounce(f, 1000);

f(5);
f(6); */

// Throttle decorator
/* function f(a) {
  console.log(a);
}

function throttle(handler, delay) {
  let savedId;
  let timerId;
  return function() {
    if (!timerId) {
      // 第一次立即执行
      timerId = setTimeout(() => {
        handler.apply(this, arguments);
      }, 0);
      savedId = timerId;
    } else {
      // 如果1秒内的id跟上次执行的id不一制，则不执行
      if (savedId !== timerId){
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        handler.apply(this, arguments)
      }, delay);
    }
  }
}

// f1000 passes calls to f at maximum once per 1000 ms
let f1000 = throttle(f, 1000);

f1000(1); // shows 1
f1000(2); // (throttling, 1000ms not out yet)
f1000(3); // (throttling, 1000ms not out yet)
setTimeout(function() {f1000(4)}, 888);

// when 1000 ms time out...
// ...outputs 3, intermediate value 2 was ignored */


/* function f(a) {
  let now = new Date();
  console.log(now.toLocaleTimeString(), now.getMilliseconds());
  console.log("a:", a);
}

function throttle(func, delay) {
  let isThrottled = false, savedThis, savedArgs;

  return function wrapper() {
    // console.log("args: ", args);
    if (isThrottled) {
      savedThis = this;
      savedArgs = arguments; //为什么 args[0] 会报错，而 args 不报错。报错的是下面的 func.apply(this, savedArgs);
      return;
    }

    func.apply(this, arguments);
    isThrottled = true;
    savedArgs = null;

    setTimeout(() => {
      if (savedArgs) {
        isThrottled = false;
        wrapper.apply(savedThis, savedArgs);
      }
    }, delay);
  }
}

// f1000 passes calls to f at maximum once per 1000 ms
let f1000 = throttle(f, 1000);

let obj = {
  a: 'abc',
  f: f1000
}

let obj2 = {
  a: 'abc2',
  f: f1000
}

obj.f(1); // shows 1
setTimeout(() => obj2.f(2), 995);
// f1000(2); // (throttling, 1000ms not out yet)

setTimeout(() => obj.f(3), 1234); // 在f1000(1)后的1234ms就打印出来了
// f1000(3); // (throttling, 1000ms not out yet)

// when 1000 ms time out...
// ...outputs 3, intermediate value 2 was ignored */



// Arrow functions revisited
/* let group = {
  title: 'our group',
  names: ['Pete', 'Alice', 'Derek'],

  showList() {
    this.names.forEach(student => {
      alert(`${this.title}: ${student}`);
    });
  }
}

group.showList(); */


/* function sayHi(name) {
  alert("Hello " + name);
}

function defer(f, ms) {
  return function() {
    setTimeout(() => {
      console.log("this: ", this);
      f.apply(this, arguments);
    }, ms);
  }
}

let sayHiDeferred = defer(sayHi, 2000);

sayHiDeferred("John"); */


/* let array_like = {
  0: 'joshua',
  1: 'derek',
  length: 2
};

// let realArr = Array.from(array_like);
let realArr = [...'abc'];

console.log(realArr); */



// Function binding
/* let o = {
  firstName: "Joshua",
  f: function() {
    console.log("hello ", this.firstName);
  }
}

// o.f(); */

/* let f = o.f.bind(o);

let obj = {
  foo() {
    setTimeout(f, 0);  
  }
}

// obj.foo(); */


//tasks
// null

/* function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};

// askPassword(user.loginOk, user.loginFail);
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
// askPassword(() => user.loginOk(), () => user.loginFail());
askPassword(function() {user.loginOk()}, function() {user.loginFail()}); */


/* function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

// askPassword(() => user.login(true), () => user.login(false)); // ?
askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ? */



// Object properties configuration
// Object.getOwnPropertyDescriptor();

/* let user = {
  name: "John"
};

Object.defineProperty(user, "name", {
  writable: false
});

user.name = "Derek"; */

/* let descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log( JSON.stringify(descriptor, null, 2) ); */

/* let user = {
  name: "John"
};

Object.defineProperty(user, "name", {
  writable: false
});

// won't be able to change user.name or its flags
// all this won't work:
Object.defineProperty(user, "name", { value: "Pete" }); */


/* function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  Object.defineProperty(this, "age", {
    get() {
      let nowYear = new Date().getFullYear();
      return nowYear - birthday.getFullYear();
    }
  })
}

let john = new User("John", new Date(1992, 6, 1));

console.log(john.name);
console.log(john.birthday);
console.log(john.age); */



// Prototypal inheritance
// rabbit.__proto__ = animal;

/* let animal = {
  eats: true
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

for (let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    console.log("Our: ", prop);
  } else {
    console.log("Inherited: ", prop)
  }
} */

// tasks
/* true
null
undefined */

/* let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};

// console.log(pockets.pen);
// console.log(bed.glasses);

let pocketStartTime = new Date();
console.log(pockets.glasses);
let pocketEndTime = new Date();
console.log(pocketEndTime - pocketStartTime);

let headStartTime = new Date();
console.log(head.glasses);
let headEndTime = new Date();
console.log(headEndTime - headStartTime); */

/* let hamster = {

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  stomach: [],
  __proto__: hamster
};

let lazy = {
  stomach: [],
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// This one also has it, why? fix please.
alert( lazy.stomach ); // apple */



// F.prototype
/* function Func() {}

Func.prototype = {
  a: '',
  constructor: ''
};

// Func.prototype = {
//   a: "abc"
// };

let obj = new Func(); // [[prototype]] or __proto__

let obj2 = new obj.constructor();

console.log(obj2.constructor === obj.constructor);

// new obj.constructor()
// new obj.constructor()
// console.log(obj.constructor);

// console.log(Func.prototype.constructor);

// console.log(Func.prototype); */


/* true
true
true
undefined */

/* function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

alert( rabbit.eats ); // ? */



// Native prototypes
/* let arr = [1, 2, 3];

console.log(arr.__proto__) */

// console.log(new Array(4).join('la'));

// console.log(Function.prototype.__proto__ === Object.prototype);

// tasks
/* function f() {
  console.log(this);
  alert("Hello!");
}

Function.prototype.defer = function(delay) {
  setTimeout(() => this(), delay);
}

f.defer(1000); // shows "Hello!" after 1 second */

/* Function.prototype.defer = function (func) {
  return function () {
    let delay = arguments[0];
    return function() {
      setTimeout(() => {
        func(...arguments);
      }, delay);
    }
  };
};

f.defer = f.defer(f); */

/* Function.prototype.defer = function(delay) {
  let f = this;
  return function() {
    setTimeout(() => f.apply(this, arguments), delay);
  }
}

function f(a, b) {
  alert(a + b);
}

f.defer(1000)(1, 2);  */



// Prototype methods, objects without __proto__
/* let dictionary = Object.create(null, {
  toString: {
    configurable: true,
    enumerable: false,
    value() {
      // return Object.getOwnPropertyNames(dictionary).join();
      return Object.keys(dictionary).join();
    }    
  }
}); */

// add some data
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// // only apple and __proto__ are in the loop
// for(let key in dictionary) {
//   alert(key); // "apple", then "__proto__"
// }

// // your toString in action
// alert(dictionary); // "apple,__proto__"

// The difference between calls
/* function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype.sayHi = function() {
  // this.name = name;
  // console.log(this.name);
  return this.name;
}

let rabbit = new Rabbit("Rabbit");

console.log(rabbit.sayHi());
console.log(Rabbit.prototype.sayHi());
console.log(Object.getPrototypeOf(rabbit).sayHi());
console.log(rabbit.__proto__.sayHi()); */



// Class basic syntax
/* class c {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }
}

let john = new c("John");
john.sayHi();
console.log(typeof c) */

/* let User = class MyClass {
  sayHi() {
    console.log(MyClass); // MyClass name is visible only inside the class
  }
};

new User().sayHi(); // works, shows MyClass definition */

/* class Clock {
  timer = null;
  
  constructor({template}) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop = function() {
    clearInterval(this.timer);
  };

  start = function() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  };
}

let clock = new Clock({template: 'h:m:s'});
clock.start(); */

/* class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
alert(rabbit.name); */


/* class Clock {
  constructor({ template }) {
    this.template = template;
    console.log(this.template);
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
} */



// Class inheritance
/* class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    alert(`${this.name} stands still.`);
  }
}

let animal = new Animal("My animal");

console.log(animal.__proto__); */



// Static properties and methods
/* class Animal {
  static planet = "Earth";

  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }
}

class Rabbit extends Animal {
  run(speed = 0) {
    this.speed += speed;
    console.log(`${this.name} runs with speed ${this.speed}`);
  }
}

let rabbits = [
  new Rabbit("White rabbit", 10),
  new Rabbit("Black rabbit", 5)
];

rabbits.sort(Rabbit.compare);

rabbits[1].run(); // Black Rabbit runs with speed 5.

alert(Rabbit.planet); // Earth */

/* class Rabbit extends Object {
  constructor(name) {
    super();
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

alert( rabbit.hasOwnProperty('name') ); // Error */


/* function Asteroids(num) {
  this.population = num;

  this.printPopulation = function() {
    console.log(this.population + 1000);
  }
}

Asteroids.prototype = {
  printPopulation() {
    console.log(this.population);
  }
}

let earth = new Asteroids(1000);

earth.printPopulation();
console.log(earth.hasOwnProperty("population")); */



// Private and protected properties and methods
/* class CoffeeMachine {
  #waterLimit = 200;

  #fixWaterAmount(value) {
    if (value < 0) return 0;
    if (value > this.#waterLimit) return this.#waterLimit;
  }

  setWaterAmount(value) {
    this.#waterLimit = this.#fixWaterAmount(value);
  }

  getWaterAmount() {
    return this.#waterLimit;
  }

}

let coffeeMachine = new CoffeeMachine();

// can't access privates from outside of the class
// coffeeMachine.#fixWaterAmount(123); // Error
// coffeeMachine.#waterLimit = 1000; // Error
coffeeMachine.setWaterAmount(123);

console.log(coffeeMachine.getWaterAmount()); */

/* class User {
  name = "joshua";

  sayHi() {
    let fieldName = "name";
    alert(`Hello, ${this[fieldName]}`);
  }
}

let user = new User();

user.sayHi(); */


/* function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true

Object.assign(User.prototype, sayHiMixin); */



// Mixins
// let eventMixin = {
//   /**
//    * Subscribe to event, usage:
//    *  menu.on('select', function(item) { ... }
//   */
//   on(eventName, handler) {
//     if (!this._eventHandlers) this._eventHandlers = {};
//     if (!this._eventHandlers[eventName]) {
//       this._eventHandlers[eventName] = [];
//     }
//     this._eventHandlers[eventName].push(handler);
//   },

//   /**
//    * Cancel the subscription, usage:
//    *  menu.off('select', handler)
//    */
//   off(eventName, handler) {
//     let handlers = this._eventHandlers?.[eventName];
//     if (!handlers) return;
//     for (let i = 0; i < handlers.length; i++) {
//       if (handlers[i] === handler) {
//         handlers.splice(i--, 1);
//       }
//     }
//   },

//   /**
//    * Generate an event with the given name and data
//    *  this.trigger('select', data1, data2);
//    */
//   trigger(eventName, ...args) {
//     if (!this._eventHandlers?.[eventName]) {
//       return; // no handlers for that event name
//     }

//     // call the handlers
//     this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
//   }
// };

// // Make a class
// class Menu {
//   choose(value) {
//     this.trigger("select", value);
//   }
// }
// // Add the mixin with event-related methods
// Object.assign(Menu.prototype, eventMixin);

// let menu = new Menu();

// // add a handler, to be called on selection:
// menu.on("select", value => alert(`Value selected: ${value}`));

// // triggers the event => the handler above runs and shows:
// // Value selected: 123
// menu.choose("123");



// Error handling, "try...catch"
/* try {
  blabla;
} catch (err) {
  console.log(err.name);
  console.log(err.message);
  console.log(err.stack);

  console.log(err);
} */

// let json = '{"name": "derek"}'


/* window.onerror = function(message, url, line, col, error) {
  console.log(`${message}\n At ${line}:${col} of ${url}`);
};

function readData() {
  badFunc(); // Whoops, something went wrong!
}

readData(); */


/* function isFinal() {
  try {
    console.log("work");
    return true;
  } catch (err) {
    console.log("handle errors");
  } finally {
    console.log("cleanup the working space");
  }
} */

/* function isFinal() {
  try {
    console.log("work");
    return true;
  } catch (err) {
    console.log("handle errors");
  }

  console.log("cleanup the working space");
}

console.log(isFinal()); */



// Custom errors, extending Error
/* class ValidationError {}

Object.assign(ValidationError.prototype, Error); */

/* class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

let err = new FormatError("formatting error");

console.log( err.message ); // formatting error
console.log( err.name ); // FormatError
console.log( err.stack ); // stack

console.log( err instanceof FormatError ); // true
console.log( err instanceof SyntaxError ); // true (because inherits from SyntaxError) */



// Promise
// new Promise((resolve, reject) => {})

/* let promise = new Promise(function(resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => {
    console.log(promise);
    resolve("done")
  }, 1000);
});

console.log(promise); */

/* let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

promise.catch(console.log); */

/* let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert); */

/* function delay(ms) {
  // your code
  return new Promise((resolve, reject)=> {
    setTimeout(resolve, ms);
  })
}

delay(3000).then(() => alert('runs after 3 seconds')); */

/* function go() {
  showCircle(150, 150, 100).then(div => {
    console.log(div);
    div.classList.add('message-ball');
    div.append("Hello, world!");
  });
}

function showCircle(cx, cy, radius) {
  let div = document.createElement('div');
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + 'px';
  div.style.top = cy + 'px';
  div.className = 'circle';
  document.body.append(div);
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';

      div.addEventListener('transitionend', function handler() {
        div.removeEventListener('transitionend', handler);
        resolve(div);
      });
    }, 0);
  });
} */



// Promises chaining
/* class Thenable {
  constructor(num) {
    this.num = num;
  }

  then(resolve) {
    console.log(resolve);

    setTimeout(() => resolve(this.num * 2), 1000);
  }
}

new Promise((resolve, reject) => {
  resolve(1);
}).then(val => {
  return new Thenable(val);
}).then(alert); */



// Error handling with promises
/* new Promise((resolve, reject) => {
  return resolve(1);
}).then(
  result => blabla()
).catch(alert); */

// the execution: catch -> catch
/* new Promise((resolve, reject) => {
  throw new Error("Whoops!");
}).catch(error => {
  if (error instanceof URIError) {
    // handle the error
  } else {
    // else rethrow it
    alert("can't handle this error")
    throw error;
  }
}).then(function() {
  // doesn't run
}).catch(error => {
  alert(`catch the error ${error}`)
}).then(() => alert("Next successful handler runs")); */

/* new Promise(function() {
  noSuchFunction(); // Error here (no such function)
})
  .then(() => {
    // successful promise handlers, one or more
  }); // without .catch at the end! */

  /* new Promise(function(resolve, reject) {
    throw new Error("Whoops!");
  }).catch(alert); */



// Promise API
/* let names = ['iliakan', 'remy', 'jeresig'];

let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
  .then(responses => {
    // all responses are resolved successfully
    for(let response of responses) {
      alert(`${response.url}: ${response.status}`); // shows 200 for every url
    }

    return responses;
  })
  // map array of responses into an array of response.json() to read their content
  .then(responses => {
    console.log("responses: ", responses);
    return Promise.all(responses.map(r => r.json()));
  })
  // all JSON answers are parsed: "users" is the array of them
  .then(users => {
    console.log("users: ", users);
    users.forEach(user => {
      console.log(user);
      console.log(user.name);
      alert(user.name); // refresh 后只 alert 了第一个和第三个名字，不知道为什么？可能跟 server side 有关
    })
  }); */


/* let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
];

Promise.allSettled(urls.map(url => fetch(url)))
  .then(results => { // (*)
    results.forEach((result, num) => {
      if (result.status == "fulfilled") {
        console.log(result.value);
        // alert(`${urls[num]}: ${result.value.status}`);
      }
      if (result.status == "rejected") {
        // alert(`${urls[num]}: ${result.reason}`);
      }
    });
  });
 */



 // Microtasks
/*  let promise = Promise.reject(new Error("Promise Failed!"));
setTimeout(() => promise.catch(err => alert('caught')), 1000);

// Error: Promise Failed!
window.addEventListener('unhandledrejection', event => alert(event.reason)); */



// Async/await
/* async function showAvatar() {

  // read our JSON
  let response = await fetch('https://javascript.info/article/promise-chaining/user.json');
  let user = await response.json();

  // read github user
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // show the avatar
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // wait 3 seconds
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

console.log(showAvatar()); */


//tasks
/* async function loadJson(url) {
  let response = await fetch(url);
  
  if (response.status == 200) {
    return response.json();
  } else {
    throw new Error(response.status);
  }
}

loadJson('no-such-user.json').catch(alert); */

/* class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);

  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

// Ask for a user name until github returns a valid user
async function demoGithubUser() {

  while(true) {
    let name = prompt("Enter a name?", "iliakan");
    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break;
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("No such user, please reenter.");
      } else {
        throw err;
      }
    } finally {
      console.log("is output");
    }
  }

  alert(`Full name: ${user.name}.`); // alert 后有时会自动消失，不知道为什么？
  return user;
}

window.addEventListener("unhandledrejection", event => {
  event.preventDefault(); // 不加这个的话将会有 “report unhandled promise rejections to the console”
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/unhandledrejection_event#preventing_default_handling
  console.log("unhandledrejection event: ", event);
});

demoGithubUser(); */

/* async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  // ...what should you write here?
  // we need to call async wait() and wait to get 10
  // remember, we can't use "await"
  wait().then(response => console.log(response));
}

f(); */



// Generators
/* function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

// "generator function" creates "generator object"
let generator = generateSequence();
alert(generator);

let one = generator.next();
let two = generator.next();
let three = generator.next();
let noFour = generator.next();

console.log(one);
console.log(two);
console.log(three);
console.log(noFour); */

/* function* foo(){
  yield 1;
  yield 2;
  yield 3;
};

for (const o of foo()) {
  console.log(o);
  break; // closes iterator, execution continues outside of the loop
}
console.log('done'); */


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of#iterating_over_generators
/* let [prev, curr] = [0, 1];
[prev, curr] = [curr, prev + curr];
[prev, curr] = [curr, prev + curr];
[prev, curr] = [curr, prev + curr];

console.log(prev);
console.log(curr); */


/* function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {

  // 0..9
  yield* generateSequence(48, 57);

  // A..Z
  yield* generateSequence(65, 90);

  // a..z
  yield* generateSequence(97, 122);

}

let str = '';

for(let code of generatePasswordCodes()) {
  str += String.fromCharCode(code);
}

console.log(str); // 0..9A..Za..z */


// 48-57  65-90  97-122 (第二天自己写了一遍)
/* function* generateSequence(start, end) {
  while (start <= end) {
    yield start++;
  }
}

// for (let i of generateSequence(48, 57)) {
//   console.log(String.fromCharCode(i));
// }

let str = "";

function* genComposition() {
  yield* generateSequence(48, 57);
  yield* generateSequence(65, 90);
  yield* generateSequence(97, 122);
}

for (let i of genComposition()) {
  // str = str.concat(String.fromCharCode(i));
  str += String.fromCharCode(i);
}

console.log(str);

// console.log(String.fromCharCode(generateSequence().next().value)); */


/* function* gen() {
  // Pass a question to the outer code and wait for an answer
  let result = yield "2 + 2 = ?"; // (*)

  alert(result);
}

let generator = gen();

let question = generator.next().value; // <-- yield returns the value
console.log(question);

// generator.next(4); // --> pass the result into the generator */

/* function* gen() {
  let ask1 = yield "2 + 2 = ?";

  alert(ask1); // 4

  let ask2 = yield "3 * 3 = ?"

  alert(ask2); // 9
}

let generator = gen();

alert( generator.next().value ); // "2 + 2 = ?"

alert( generator.next(4).value ); // "3 * 3 = ?"

alert( generator.next(9).done ); // true */

/* function* gen() {
  try {
    let result = yield "2 + 2 = ?";

    alert(result);
  } catch (err) {
    console.log(err);
  }
}

let generator = gen();

let question = generator.next().value;

console.log(question);

generator.throw(new Error("The answer is not found on my database")); */


// tasks
/* function* pseudoRandom(seed) {
  let value = seed * 16807 % 2147483647;
  while(true) { // an infinite loop to generate infinite yields
    yield value;
    value =  value * 16807 % 2147483647; // 移到 while 语句的下面将不会被执行
  }
}

let generator = pseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073 */



// Async iteration and generators
/* let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() { // called once, in the beginning of for..of
    return {
      current: this.from,
      last: this.to,

      next() { // called every iteration, to get the next value
        console.log("this: ", this);
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  }
};

for(let value of range) {
  alert(value); // 1 then 2, then 3, then 4, then 5
} */


/* let range = {
  from: 1,
  to: 5,

  [Symbol.asyncIterator]() { // called once, in the beginning of for..of
    return {
      current: this.from,
      last: this.to,

      async next() { // called every iteration, to get the next value
        await new Promise((resolve, reject) => setTimeout(resolve, 1000));

        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  }
};

(async () => {
  for await (let value of range) {
    console.log(value); // 1 then 2, then 3, then 4, then 5
  }
})(); */


/* async function* fetchCommits(repo) {
  let url = `https://api.github.com/repos/${repo}/commits`;

  while (url) {
    const response = await fetch(url, { // (1)
      headers: {'User-Agent': 'Our script'}, // github needs any user-agent header
    });

    const body = await response.json(); // (2) response is JSON (array of commits)
    console.log("body: ", body);

    // (3) the URL of the next page is in the headers, extract it
    console.log("response.headers: ", response.headers);
    console.log("response.headers.get('Link'): ", response.headers.get('Link'));
    // 怎么 define 一个 named capturing groups
    let nextPage = response.headers.get('Link').match(/<(.*?)>; rel="next"/);
    console.log("nextPage: ", nextPage);
    nextPage = nextPage?.[1];

    url = nextPage;

    for(let commit of body) { // (4) yield commits one by one, until the page ends
      yield commit;
    }
  }
}

(async () => {

  let count = 0;

  for await (const commit of fetchCommits('javascript-tutorial/en.javascript.info')) {
    if (++count == 100) { // let's stop at 100 commits
      break;
    }
  }

})(); */



// Export and Import
/* function sayHi(user) {
  console.log("Hi, ", user);
}

function sayBye(user) {
  console.log("Hi, ", user);
}

export {sayHi as hi, sayBye as Bye};

import * as say from './say.js'; */



// Dynamic imports
/* function thumb() { // 名字改为click，不正常工作，不知道为什么？
  import("./say.js")
    .then((say) => {
      let { hi, bye, default: load } = say; // 类似于 destructuring assignment
      hi();
      bye();
      load();
    })
    .catch((err) => console.log(err));
} */



// Proxy and Reflect
/* let numbers = [0, 11, 22];

numbers = new Proxy(numbers, {
  get(target, prop) {
    if (target[prop]) {
      return target[prop];
    } else {
      return 0;  // default value
    }
  }
});

console.log(numbers[1]);
console.log(numbers[5]); */


/* let dictionary = {
  'Hello': 'Hola',
  'Bye': 'Adiós'
};

console.log( dictionary.Hello ); // Hola
console.log( dictionary['Welcome'] ); // undefined */


/* let user = {
  name: "John",
  age: 30,
  _password: "***"
};

console.log(Object.keys(user).filter(key => !key.startsWith('_'))); */


/* let user = {
  _name: "Guest",
  get name() {
    return this._name;
  }
};

// let userProxy = new Proxy(user, {
//   get(target, prop, receiver) {
//     return target[prop]; // (*) target = user
//   }
// });

let admin = {
  __proto__: user,
  _name: "Admin"
};

// Expected: Admin
alert(admin.name); // outputs: Guest (?!?) */


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
/* let user = {
  a: "Hello",
  b: "message"
};

let handler1 = {
  get(target, prop) {
    return "world"
  }
}

user = new Proxy(user, handler1);

console.log(user.a);
console.log(user.b); */


/* const handler = {
  get: function(obj, prop) {
    return prop in obj ?
      obj[prop] :
      37;
  }
};

const p = new Proxy({}, handler);
p.a = 1;
p.b = null;

console.log(p.a, p.b);
//  1, undefined

console.log('c' in p, p.c);
//  false, 37 */

/* function extend(sup, base) {
  var descriptor = Object.getOwnPropertyDescriptor(
    base.prototype, 'constructor'
  );
  console.log("base.prototype 的 constructor descriptor", descriptor);
  base.prototype = Object.create(sup.prototype);
  console.log("base.prototype: ", base.prototype); // 为什么是 Person 对象，并且包含 'gender: "M"' property?
  
  console.log("base", base);

  var handler = {
    construct: function(target, args) {
      var obj = Object.create(base.prototype);
      console.log("obj: ", obj);
      this.apply(target, obj, args);
      return obj;
    },
    apply: function(target, that, args) {
      sup.apply(that, args);
      base.apply(that, args);
    }
  };
  var proxy = new Proxy(base, handler);
  descriptor.value = proxy; // data descriptor
  Object.defineProperty(base.prototype, 'constructor', descriptor);
  console.log("base.prototype: ", base.prototype);
  return proxy;
}

var Person = function(name) {
  this.name = name;
};

var Boy = extend(Person, function(name, age) {
  this.age = age;
});

// Boy.prototype.gender = 'M';

// var Peter = new Boy('Peter', 13);

// console.log(Peter.gender);  // "M"
// console.log(Peter.name);    // "Peter"
// console.log(Peter.age);     // 13 */




// Eval: run a code string
/* let calculator = prompt("Please enter an expression", "2+2");

let result = eval(calculator);
console.log(result); */



// Reference Type
/* let user = {
  name: "John",
  hi() {
    alert(`Hi, ${this.name}`);
  },
  bye() {
    alert("bye");
  }
};

// user.hi();

// console.log(user.name === "John" ? user.hi : user.bye);
// (user.name === "John" ? user.hi : user.bye)(); // 注释掉 user.hi(); 后跟官方报错不一致，不知道为什么？
// because JavaScript doesn't assume a semicolon before IIFE
(user.hi)(); */


/* (function(a, b) {
  console.log(a + b);
})(1, 2); */


/* let user = {
  name: "John",
  go: function() { alert(this.name) }
};

(user.go)() */


/* let obj, method;

obj = {
  go: function() { console.log(this); }
};

obj.go(); 
(obj.go)(); */



// Walking the DOM
/* while (elm = elm.parentElement) {
  alert(elm);
} */

/* document.body.firstElementChild
document.body.lastElementChild
document.body.lastElementChild.lastElementChild */


/* true
false */

// column row

/* console.log(document.getElementById("age-table"));

console.log(document.getElementById("age-table").querySelectorAll('label'));
// or
console.log(document.getElementById("age-table").getElementsByTagName('label'));

console.log(document.getElementById("age-table").querySelector('td'));

console.log(document.querySelector('form[name="search"]'));

console.log(document.querySelector('form[name="search"]').querySelector('input'));

let inputsNum = document.querySelector('form[name="search"]').querySelectorAll('input').length;
console.log(document.querySelector('form[name="search"]').querySelectorAll('input')[inputsNum-1]);
// or
// console.log(document.querySelector('form[name="search"]').querySelector('input:last-child')); // 这个不行 */



// Node properties: type, tag and contents
/* console.log( document.body instanceof HTMLBodyElement ); // true
console.log( document.body instanceof HTMLElement ); // true
console.log( document.body instanceof Element ); // true
console.log( document.body instanceof Node ); // true
console.log( document.body instanceof EventTarget ); // true
console.log( document.body instanceof Object ); // true

console.log( document.body );
console.dir( document.body ); */

// console.dir(document.querySelector('form[name="search"]').querySelector('input'));


// HTMLDocument
// Object -> EventTarget -> Node -> Document -> HTMLDocument

/* console.log(window.document.constructor.name);

console.log(window.document.__proto__ === HTMLDocument.prototype);

console.log(window.document.__proto__.constructor.name);
console.log(window.document.__proto__.__proto__.constructor.name);
console.log(window.document.__proto__.__proto__.__proto__.constructor.name); */



// Attributes and properties
// alert( elem.getAttribute('About') ); // (1) 'Elephant', reading

// elem.setAttribute('Test', 123); // (2), writing

// alert( elem.outerHTML ); // (3), see if the attribute is in HTML (yes)


/* console.log(elem.attributes)

for (let attr of elem.attributes) { // (4) list all
  // alert( `${attr.name} = ${attr.value}` );
  console.log(attr.constructor.name)
  console.log(attr.__proto__ === Attr.prototype)
} */



// Modifying the document
/* let div = document.createElement('div');

console.dir(div); */

// Tasks
// let textNode = document.createTextNode("<b>Hello</b>");

// document.body.append(textNode);

// document.body.innerHTML = "<b>Hello</b>";

// document.body.textContent = "<b>Hello</b>";


/* function clear(elem) {
  // elem.innerHTML = "";
  elem.textContent = "";
}

clear(elem); */


/* let content;

while (
  content = prompt("Please type in the content that goes into the item")
) {
  let ulElem = document.createElement("ul");
  let liElem = document.createElement("li");

  liElem.textContent = content;
  ulElem.append(liElem);

  document.body.append(ulElem);
} */

/* do {
  content = prompt("Please type in the content that goes into the item");

  let ulElem = document.createElement("ul");
  let liElem = document.createElement("li");

  liElem.textContent = content;
  ulElem.append(liElem);

  document.body.append(ulElem);
} while (content) */


/* let data = {
  "Fish": {
    "trout": {},
    "salmon": {}
  },

  "Tree": {
    "Huge": {
      "sequoia": {},
      "oak": {}
    },
    "Flowering": {
      "apple tree": {},
      "magnolia": {}
    }
  }
}; */

/* function createTree(container, data) {
  let keyValArr = Object.entries(data);

  if (!keyValArr.length) return;

  let ulElem = document.createElement("ul");
  for (let i = 0; i < keyValArr.length; i++) {
    let outerLiElem = document.createElement("li");
    outerLiElem.textContent = keyValArr[i][0]

    createTree(outerLiElem, keyValArr[i][1])

    ulElem.append(outerLiElem);
  }

  container.append(ulElem)
} */

/* function createTree(container, data) {
  let keysArr = Object.entries(data);
  console.log("keysArr: ", keysArr);

  let htmlString = ""
  for (let i = 0; i < keysArr.length; i++) {

    console.log(keysArr[i][1]);

    if (!Object.entries(keysArr[i][1]).length) {
      console.log("keysArr[i][0]: ", keysArr[i][0]);
      htmlString += `<li>${keysArr[i][0]}</li>`
    } else {
      htmlString += `<li>${keysArr[i][0]}<ul>${createTree(container, keysArr[i][1])}</ul></li>`;

      container.innerHTML = "<ul>" + htmlString + "</ul>";
    }
  }
  return htmlString;
}

let container = document.getElementById('container');

createTree(container, data); */


// Show descendants in a tree
/* let treeElem = document.querySelector('ul');

console.log(treeElem)

for (let i = 0; i < treeElem.querySelectorAll('li').length; i++) {
  if (treeElem.querySelectorAll('li')[i].children.length) {
    let text = document.createTextNode(`[${treeElem.querySelectorAll('li')[i].querySelectorAll('li').length}] `);
    treeElem.querySelectorAll('li')[i].childNodes[0].after(text);
  }
} */

/* let liElems = document.getElementsByTagName('li')

for (let li of liElems) {
  let descentantsCount = li.getElementsByTagName('li').length;

  if (!descentantsCount) continue;

  li.firstChild.data += '[' + descentantsCount + ']'
} */


// Create a calendar
/* function createCalendar(elem, year, month) {
  let table = document.createElement('table');

  let weekdays = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

  for (let i = 0; i < 1; i++) {
    let trElem = document.createElement('tr')
    weekdays.forEach((val, index) => {
      let tdElem = document.createElement('th')
      tdElem.textContent = val

      trElem.append(tdElem)
    })
    table.append(trElem)
  }

  // 一个月的第一天是星期几
  let firstDayOfWeek = new Date(`${year}.${month}`).getDay()
  console.log(firstDayOfWeek)


  // 第一行是需要填充几个数字
  let offset = firstDayOfWeek === 0 ? 1 : 8 - firstDayOfWeek;


  // generate empty td before firstDayOfWeek (starts from 0 sunday to 6 saturday)
  for (let i = 0; i < 1; i++) {
    let trElem = document.createElement('tr')
    for (let i = 1; i < firstDayOfWeek; i++) {
      let tdElem = document.createElement('td');
      tdElem.textContent = "";
      trElem.append(tdElem);
    }
    table.append(trElem)

    for (let i = 1; i <= offset; i++) {
      let tdElem = document.createElement('td');
      tdElem.textContent = i;
      trElem.append(tdElem);
    }
    table.append(trElem)
  }


  let date = new Date(`${year}.${month + 1}`)
  date.setDate(date.getDate() - 1)

  let numOfDaysPerMonth = date.getDate()
  console.log(numOfDaysPerMonth)

  // 除了第一行外还需要几行
  let leftLinesNum = (numOfDaysPerMonth - offset) / 7

  for (let i = 0; i < leftLinesNum; i++) {
    let trElem = document.createElement('tr')
    for (let i = offset + 1; i <= offset + 7; i++) {
      let tdElem = document.createElement('td');
      tdElem.textContent = i <= numOfDaysPerMonth ? i : '';
      trElem.append(tdElem);
    }
    offset += 7;
    table.append(trElem)
  }

  elem.append(table)
}

createCalendar(calendar, 2012, 8); */


// Colored clock with setInterval
// window.onload = function() { // 为什么 document.onload 不行？
//   let clockDiv = document.getElementById("clock");

//   let now = new Date();
//   console.log(new Date().getHours())
//   let spans = clockDiv.querySelectorAll("span");
//   spans[0].textContent = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
//   spans[1].textContent = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
//   spans[2].textContent = now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
// }

// 在点击一次 stop 后，第过一秒立刻点击 start 会马上又过一秒，而不是等一秒，不知道为什么？
/* function update() {
  let clockDiv = document.getElementById("clock");
  let now = new Date();

  let spans = clockDiv.querySelectorAll("span");
  spans[0].textContent = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
  spans[1].textContent = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
  spans[2].textContent = now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
}

let id;

function clockStart() {
  if (!id) {
    id = setInterval(() => update(), 1000)
  }

  update();
}

function clockStop() {
  console.log("stop clock")
  clearInterval(id);
  id = null;
}

clockStart(); */


// Insert the HTML in the list
// document.getElementById("one").insertAdjacentHTML("afterend", "<li>2</li><li>3</li>")


// Sort the table
/* function sortTable() {
  console.log("sort the table by the name column")
  let trs = persons.querySelectorAll('tr');
  
  let arr = Array.from(trs);

  arr.sort((a, b) => {
    if (a.children[0].textContent > b.children[0].textContent) return 1;
    
    if (a.children[0].textContent < b.children[0].textContent) return -1;

    return 0;
  })

  // console.log(arr)
  // let html = "";
  // for (let i = 0; i < arr.length; i++) {
  //   html += arr[i].outerHTML;
  // }
  // persons.innerHTML = html;

  persons.append(...arr); // 直接 append 即可
} */

// 参照官方答案后的解答
/* function sortTable() {
  console.log("%c ----------", "color: red")
  let rowsArray = Array.from(persons.rows).sort((tr, anotherTr) => {
    return tr.children[0].textContent.localeCompare(anotherTr.children[0].textContent);
  });
  rowsArray.forEach(row => row.children[0].textContent += '1')
  persons.append(...rowsArray)
  console.log(persons.rows)
} */



// Element size and scrolling
/* offsetWidth offsetHeight
offsetParent */

//tasks
/* let scrollBottom = scrollHeight - scrollTop - clientHeight;
let scrollBottom = scrollHeight - scrollTop - clientHeight; // if there’s no scroll
let scrollBottom = scrollHeight - scrollTop - clientHeight + paddingTop; // the element is fully scrolled down. This is a wrong answer. */

/* getComputedStyle(elem).width  &  elem.clientWidth
content width  &  content width + paddingLeft + paddingRight
如果有纵向滚动条，则 width = content width + scrollbar width  &  
with unit  &  no unit */



// Coordinates
/**
 * Positions elem relative to anchor as said in position.
 *
 * @param {Node} anchor     Anchor element for positioning
 * @param {string} position One of: top/right/bottom
 * @param {Node} elem       Element to position
 *
 * Both elements: elem and anchor must be in the document
 */
function positionAt(anchor, position, elem) {
  // ... your code ...
  let anchorRectCoords = anchor.getBoundingClientRect();
  let elemRectCoords = elem.getBoundingClientRect();

  /* if (position === "top") {
    elem.style.top = anchorRectCoords.top - elemRectCoords.height + 'px';
    elem.style.left = anchorRectCoords.left + 'px';
  }

  if (position === "right") {
    elem.style.top = anchorRectCoords.top + 'px';
    elem.style.left = anchorRectCoords.right + 'px';
  }

  if (position === "bottom") {
    elem.style.top = anchorRectCoords.bottom + 'px';
    elem.style.left = anchorRectCoords.left + 'px';
  } */

  switch(position) {
    case "top-out":
      elem.style.top = anchorRectCoords.top - elemRectCoords.height + window.pageYOffset + 'px';
      elem.style.left = anchorRectCoords.left + 'px';
      break;
    case "right-out":
      elem.style.top = anchorRectCoords.top + window.pageYOffset + 'px';
      elem.style.left = anchorRectCoords.right + 'px';
      break;
    case "bottom-out":
      elem.style.top = anchorRectCoords.bottom + window.pageYOffset + 'px';
      elem.style.left = anchorRectCoords.left + 'px';
      break;
    case "bottom-in":
      elem.style.top = anchorRectCoords.bottom + window.pageYOffset - elemRectCoords.height + 'px';
      elem.style.left = anchorRectCoords.left + 'px';
      break;
    case "top-in":
      elem.style.top = anchorRectCoords.top + window.pageYOffset + 'px';
      elem.style.left = anchorRectCoords.left + 'px';
      break;
    default: {}
  }
}

/**
 * Shows a note with the given html at the given position
 * relative to the anchor element.
 */
/* function showNote(anchor, position, html) {

  let note = document.createElement('div');
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}

// test it
let blockquote = document.querySelector('blockquote');

window.scroll(0, 10); // 只有第一次加载的时候才有效果。另外可以结合 vue 的 popState 来理解

showNote(blockquote, "top-out", "note top-out");
showNote(blockquote, "right-out", "note right-out");
showNote(blockquote, "bottom-out", "note bottom-out");
showNote(blockquote, "top-in", "note top-in");
showNote(blockquote, "bottom-in", "note bottom-in"); */



// Mouse events
// 在每个 li 上 return false 怎么样？
/* ul.onmousedown = function() {
  return false;
}

ul.onclick = function(event) {
  let targetElem = event.target;

  if(targetElem.tagName != 'LI') return;

  if (event.ctrlKey || event.metaKey) {
    console.log('with ctrl key pressed')

    targetElem.classList.toggle("selected")
  } else {
    for (let li of ul.children) {
      li.classList.remove("selected")
    }

    targetElem.classList.add("selected")
  }
} */



// Moving the mouse: mouseover/out, mouseenter/leave



// Keyboard: keydown and keyup
// 效果跟官方答案基本一样，但是思路大不相同。效果基本一样的原因
// 主要在于（官方答案）：比如一根手指依次快速滑过 E W Q，当 W keydown 时 E 
// keyup 还没有触发，同样的当 Q keydown 时 W keyup 还没有触发。
// 我的答案里 Date.now() - firstKeyDownTime < 100 刚好模拟了这个情况
/* function runOnKeys(func, ...codes) {
  console.log("codes: ", codes)
  
  if (codes.includes("KeyQ") && codes.includes("KeyW")) {
    func();
  }
}

let firstKeyDownTime;
let firstEvent;
function onKeyDown(e) {
  console.log("e.code: ", e.code);
  if (!firstKeyDownTime){
    firstKeyDownTime = Date.now();
    firstEvent = e;
  } else {
    if (Date.now() - firstKeyDownTime < 100) {
      console.log("considered simultaneously")
      runOnKeys(
        () => alert("Hello!"),
        firstEvent.code,
        e.code
      );
    }
    firstKeyDownTime = Date.now(); // 如果第一次不是press Q 或者 W 且同时 press E W Q
    firstEvent = e;
  }
}
document.addEventListener("keydown", onKeyDown); */

// 官方答案
/* function runOnKeys(func, ...codes) {
  let pressed = new Set();

  document.addEventListener('keydown', function(event) {
    console.log("keydown event.code: ", event.code);
    pressed.add(event.code);

    for (let code of codes) { // are all keys in the set?
      if (!pressed.has(code)) {
        return;
      }
    }

    // yes, they are

    // during the alert, if the visitor releases the keys,
    // JavaScript does not get the "keyup" event
    // and pressed set will keep assuming that the key is pressed
    // so, to evade "sticky" keys, we reset the status
    // if the user wants to run the hotkey again - let them press all keys again
    pressed.clear();

    func();
  });

  document.addEventListener('keyup', function(event) {
    console.log("keyup event.code: ", event.code);
    console.log("pressed: ", pressed);
    pressed.delete(event.code);
  });

}

runOnKeys(
  () => alert("Hello!"),
  "KeyQ",
  "KeyW"
); */



// Scrolling



// Form properties and methods
/* Array.from(genres.options).filter(option => option.selected).map(v => {
  console.log("value:", v.value, "text:", v.text);
  v.selected = false;
});

let op = new Option("Classic", "classic", true, true);

genres.append(op); */



// Focusing: focus/blur
/* view.setAttribute('tabindex', '0');
let textAreaElem = document.createElement('textarea');
let viewElem = view;
viewElem.addEventListener('focus', function (e) {
  textAreaElem.classList.add('edit');
  textAreaElem.value = viewElem.innerHTML;
  textAreaElem.autofocus = true;

  viewElem.replaceWith(textAreaElem);
  textAreaElem.focus(); // 需要放在 “viewElem.replaceWith(textAreaElem)” 的后面才能在第二次点击后获得焦点
});
textAreaElem.addEventListener('blur', function (e) {
  textAreaElem.replaceWith(viewElem);
  viewElem.innerHTML = textAreaElem.value;
}); */


// Edit TD on click
/* let table = document.getElementById('bagua-table');

let isEditing = false;
let textAreaElem = document.createElement('textarea');
let tdDup = null;
table.addEventListener('click', function (e) {
  let td = e.target.closest('td');

  if (!td) return;
  if(isEditing) return;

  tdDup = td;

  isEditing = true;

  let tdRect = td.getBoundingClientRect();
  
  textAreaElem.className = 'area';
  textAreaElem.value = td.innerHTML;
  console.log("getComputedStyle(td): ", getComputedStyle(td).backgroundColor);
  let borderSpace = getComputedStyle(table).borderSpacing.split(" ").reduce((acc, v) => {
    return acc + parseFloat(v);
  }, 0);
  textAreaElem.style.height = td.getBoundingClientRect().height - borderSpace + 'px';
  textAreaElem.style.width = td.getBoundingClientRect().width + 'px';
  td.replaceWith(textAreaElem);
  textAreaElem.focus();

  // create the two buttons
  let btnsDiv = document.createElement('div');
  btnsDiv.className = 'btns';
  btnsDiv.innerHTML = `<input type="button" value="OK"><input type="button" value="CANCEL">`;
  table.append(btnsDiv);
  btnsDiv.style.top = tdRect.bottom + 'px';
  btnsDiv.style.left = tdRect.left + 'px';

  btnsDiv.addEventListener('click', function (e) {
    if (e.target.value === 'OK') {
      console.log("pressed ok btn");
      tdDup.innerHTML = textAreaElem.value;
      textAreaElem.replaceWith(tdDup);
    } else {
      textAreaElem.replaceWith(tdDup);
    }
    isEditing = false;
    btnsDiv.remove();
  });
}); */


/* let table = document.getElementById('bagua-table');

let editingTd;

table.onclick = function(event) {

  // 3 possible targets
  let target = event.target.closest('.edit-cancel,.edit-ok,td');

  if (!table.contains(target)) return;

  if (target.className == 'edit-cancel') {
    finishTdEdit(editingTd.elem, false);
  } else if (target.className == 'edit-ok') {
    finishTdEdit(editingTd.elem, true);
  } else if (target.nodeName == 'TD') {
    if (editingTd) return; // already editing

    makeTdEditable(target);
  }

};

function makeTdEditable(td) {
  editingTd = {
    elem: td,
    data: td.innerHTML
  };

  td.classList.add('edit-td'); // td is in edit state, CSS also styles the area inside

  let textArea = document.createElement('textarea');
  textArea.style.width = td.clientWidth + 'px';
  textArea.style.height = td.clientHeight + 'px';
  textArea.className = 'edit-area';

  textArea.value = td.innerHTML;
  td.innerHTML = '';
  td.appendChild(textArea);
  textArea.focus();

  td.insertAdjacentHTML("beforeEnd",
    '<div class="edit-controls"><button class="edit-ok">OK</button><button class="edit-cancel">CANCEL</button></div>'
  );
}

function finishTdEdit(td, isOk) {
  if (isOk) {
    td.innerHTML = td.firstChild.value;
  } else {
    td.innerHTML = editingTd.data;
  }
  td.classList.remove('edit-td');
  editingTd = null;
} */



// Events: change, input, cut, copy, paste
/* let calculator = document.forms.namedItem('calculator');

let moneyBefore = document.getElementById('money-before');
let moneyAfter = document.getElementById('money-after');

let resultElm = document.getElementById('height-after')

function calculate() {
  let initial = calculator.elements.namedItem('money').value;
  let years = calculator.elements.namedItem('months').value / 12;
  let interest = calculator.elements.namedItem('interest').value / 100;

  let result = Math.round(initial * (1 + interest * years));

  moneyBefore.textContent = calculator.elements.namedItem('money').value;
  moneyAfter.textContent = result;

  resultElm.style.height = result * 100 / initial + 'px';
}

calculator.oninput = function () {
  calculate();
};

calculate(); */



// Event loop: microtasks and macrotasks
/* let i = 0;
let progressBar = document.getElementById('progress-bar');
function count() {
  do {
    i++;
  } while (i % 1000 != 0);

  progressBar.innerHTML = i;

  if (i < 1e6) {
    setTimeout(count);
  }
}

count(); */



// Selection and Range
/* let range = new Range();

range.setStart(p, 0);
range.setEnd(p, 2);

console.log(range);

document.getSelection().addRange(range); */


/* let range = new Range();

range.setStart(p.firstChild, 2);
range.setEnd(p.querySelector('b').firstChild, 3);

console.log(range.toString()); // ample: italic and bol

// use this range for selection (explained later)
window.getSelection().addRange(range); */


// Selection
// elem.onselectstart = () => false;



// Mutation observer
/* let observer = new MutationObserver(mutationRecords => {
  console.log(mutationRecords); // console.log(the changes)
});

// observe everything except attributes
observer.observe(elem, {
  childList: true, // observe direct children
  subtree: true, // and lower descendants too
  characterDataOldValue: true // pass old data to callback
}); */



// Regular expressions




// event loop from JSConf of youtube （21:55 starts talk about render and he 
// refers to an example about blocking at 7:45)
// 看视频的时候，一些细节方面的还是没捕捉到
/* console.log('hi')

setTimeout(function() {
  console.log('following')
}, 0)

console.log('JSConfEU') */


/* function asyncForEach(array, cb) {
  array.forEach(function (v, i, array) {
    setTimeout(cb(v), 0)
  })
}

asyncForEach([1, 2, 3, 4], function (i) {
  console.log(i)
}) */

/* function startLoop() {
  for (let i = 0; i < 10e9; i++) {
    if (false) console.log(' ')
  }
  console.log('finish loop')
}

function handleBtnOnClick() {
  console.log('...321')
  setTimeout(() => {
    alert('async timeout')
  }, 12000)
} */

/* setTimeout(function() {
  console.log('hi1')
}, 0)

setTimeout(function() {
  console.log('hi2')
}, 0)

setTimeout(function() {
  console.log('hi3')
}, 0)

setTimeout(function() {
  console.log('hi4')
}, 0) */



// Big O -- Cracking the Coding Interview
/* function sum(n) {
  if (n <= 0) {
    return 0
  }

  return n + sum(n - 1)
}
alert(sum(1)) */


/* function pairSumSequence(n) {
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += pairSum(i, i + 1)
  }

  return sum
}

function pairSum(a, b) {
  return a + b
}

alert(pairSumSequence(2)) */


/* // n = 1
function f() {
  if (n <= 1) return 1
}

// n = 2
function f() {
  return f(1) + f(1) // return 2
}

// n = 3
function f() {
  return f(2) + f(2) // return 4
}

// n = 4
function f() {
  return f(3) + f(3) // return 8
}


function f(n) {
  if (n <= 1) return 1

  return f(n-1) + f(n-1)
}

console.log(f(4)) */