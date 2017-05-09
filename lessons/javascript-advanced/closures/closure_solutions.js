// Q1
function sum(a) {
  function partDeux(b) {
    return a + b
  }

  return partDeux
}


// Q2
function createFunc(bubbles) {
  return function() {
    console.log('My value: ' + bubbles)
  }
}

var funcs = [];
for (var i = 0; i < 3; i++) {
    funcs[i] = createFunc(i)
}

for (var j = 0; j < 3; j++) {
    funcs[j]();
}

// Q3 && Q4
function handlerWrapper(i) {
   return function() {
      console.log('You clicked element #' + i);
   }
}

var buttons = document.getElementsByTagName('button');
for (var i = 0; i < nodes.length; i++) {
   buttons[i].addEventListener('click', handlerWrapper(i));
}

// Q5
var hidden = mystery(3);
var jumble = mystery3(hidden);
var result = jumble(2);

function mystery ( input ){
  var secret = 4;
  input += 2;
  function mystery2 ( multiplier ) {
    multiplier *= input;
    return secret * multiplier;
  }
  return mystery2;
}
function mystery3 (param){
  function mystery4 (bonus){
    return param(6) + bonus;
  }
  return mystery4;
}

// Q6
var bulb = first(3)
var char = second(bulb, 6)
var squirt = char(4)



function first(a) {
  return function(b) {
    return a + b
  }
}

function second(callback, c) {
  c *= callback(5)
  return function(d) {
    return c - d
  }
}

// Q7
function divide(a) {
  return function(b) {
    return a / b
  }
}

function multiply(callback) {
  var c = callback(2)
  return function(d) {
    return c * d
  }
}

var sennacy = divide(24)
var breakfast = multiply(sennacy)(3)

// Q8
function google(n) {
  return function(i) {
    return n * i
  }
}

function yahoo(callback) {
  return 1000 + callback(4000)
}

var big = google(1000)
var bigger = yahoo(big)
