# Question
Given a string and the position of an open parentheses bracket, return the position of the matching closing parentheses bracket.
```js
findClose("He(ll(o) Wor)ld", 2) // returns 12
findClose("(()())", 1) // returns 2
```

# Answer
```js
function findClose(str, open) {
  var openCount = 0;

  for (let pos = open + 1; pos < str.length; pos++) {
      var char = str[pos];

      if (char === '(') {
          openCount += 1;
      } else if (char === ')') {
          if (openCount === 0) {
              return pos;
          } else {
              openCount -= 1;
          }
      }
  }

  throw new Error('does not exist =O');
}
```
