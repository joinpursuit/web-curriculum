<!-- @acxbank javascript-scope-1 -->
### Q1. javascript-scope-1

Given the following javascript code:

```javascript
var str = "outside";

function myFunc() {
  var str = "inside";
};

myFunc();

console.log(str);
```

what will be the output of `console.log(str)`?
<!-- end @acxbank -->
<!-- @acxbank javascript-scope-2 -->
### Q2. javascript-scope-2

Given the following javascript code:

```javascript
var num = 1;

function add() {
  num++;
};

add();
add();

console.log(num);
```

what will be the output of `console.log(num)`?
<!-- end @acxbank -->
<!-- @acxbank javascript-scope-7 -->
### Q3. javascript-scope-7

Given the following javascript code:

```javascript
var num = 10;

function mysteryFunc(x) {
  var num = x;
}

mysteryFunc(20);

console.log(num);
```

what will be the output to the console?
<!-- end @acxbank -->
<!-- @acxbank javascript-scope-8 -->
### Q4. javascript-scope-8

Given the following javascript code:

```javascript
var num = 10;

function mysteryFunc() {
  var num = 30;
}

mysteryFunc();

console.log(num);
```

what will be the output to the console?
<!-- end @acxbank -->
<!-- @acxbank javascript-scope-9 -->
### Q5. javascript-scope-9

Given the following javascript code:

```javascript
var num = 10;

function mysteryFunc() {
  num = 30;
}

mysteryFunc();

console.log(num);
```

what will be the output to the console?
<!-- end @acxbank -->
<!-- @acxbank javascript-scope-3 -->
### Q6. javascript-scope-3

Given the following javascript code:

```javascript
var num = 10;

function add(n) {
  num += n;
}

add(10)

console.log(num)
```

what will be the output of `console.log(num)`?
<!-- end @acxbank -->
<!-- @acxbank javascript-scope-4 -->
### Q7. javascript-scope-4

Given the following javascript code:

```javascript
var num = 10;

function add(num, n) {
  return num + n;
}

add(num, 10)

console.log(num)
```

what will be the output of `console.log(num)`?
<!-- end @acxbank -->
<!-- @acxbank javascript-scope-10 -->
### Q8. javascript-scope-10

Given the following javascript code:

```javascript
var num = 10;
var num2 = 20;

function mysteryFunc() {
  num = 30;
  var num2 = 10;
}

mysteryFunc();

console.log(num);
console.log(num2);
```

what will be the output to the console?
<!-- end @acxbank -->