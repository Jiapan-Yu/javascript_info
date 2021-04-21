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


function f(a) {
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
// ...outputs 3, intermediate value 2 was ignored



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