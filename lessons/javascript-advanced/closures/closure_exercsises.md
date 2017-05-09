# Exercises
## Q1
Write a function `sum` that uses a closure that performs addition on arguments in two separate function calls.
```js
sum(a)(b) // returns a + b
```

## Q2
```js
var funcs = [];
for (var i = 0; i < 3; i++) {          // let's create 3 functions
    funcs[i] = function() {            // and store them in funcs
        console.log("My value: " + i); // each should log its value.
    };
}
for (var j = 0; j < 3; j++) {
    funcs[j]();                        // and now let's run each one to see
}
```
The code above currently outputs this: <br>
My value: 3 <br>
My value: 3 <br>
My value: 3 <br><br>
Rewrite the code using a closure so that it outputs: <br>
My value: 0 <br>
My value: 1 <br>
My value: 2 <br>


## Q3
```html
<button>one</button>
<button>two</button>
<button>three</button>
<button>four</button>
```
```js
var buttons = document.getElementsByTagName('button');
for (var i = 0; i < buttons.length; i++) {
   buttons[i].addEventListener('click', function() {
      console.log('You clicked button #' + i);
   });
}
```
What will get printed to the console when you click each of the buttons? Why?

## Q4
Rewrite the code for the previous question such that when you click a button, it will console log the number assigned to that button. When you click one, it should console log `You clicked button #1`. When you click four, it should console log `You clicked button #4`.

## Q5
**Challenge: What is the return value of result?**
```js
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
```
