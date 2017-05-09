# Question
Write a recursive function `gcf` that receives two numbers and returns the greatest common factor of those two numbers.

# Answer
Euclid's Algorithm!
```js
function gcf(a,b) {
  if (b == 0)
    {return a}
  else
    {return gcf(b, a % b)}
}
```
