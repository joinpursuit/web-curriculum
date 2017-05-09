# Question
Write a function `digitalRoot` that receives a number and sums each digit until the sum is less than 10.
```js
digitalRoot(121) // returns 4
digitalRoot(746) // returns 17
digitalRoot(6598) // returns 1
```

# Answer
```js
function digitalRoot(n) {
  if (parseInt(n) < 10) {
    return n
  }

  var digits = (n).toString().split('')
  var next = digits.reduce(function(a, b){
    return a + parseInt(b)
  }, 0)
  return digitalRoot(next)

}
```
