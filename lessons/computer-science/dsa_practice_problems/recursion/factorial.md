# Question
Write a function `factorial` that receives a number `n` and recursively calculates and returns `n!`.

# Answer
```js
function factorial(n) {
  if (n <= 1) {
    return 1
  }
  
  return n * factorial(n - 1)
}
```
