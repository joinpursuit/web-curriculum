# Question
Write a function `bestChange` that receives an amount and an array of coins in descending order. The function should return the most efficient way to construct that amount using the fewest coins possible.

```js
bestChange(39, [25, 10, 5, 1]) // returns [25, 10, 1, 1, 1, 1]
bestChange(14, [10, 7, 1]) // returns [7, 7]
```

# Answer
```js
function bestChange(amt, coins) {
  if (amt === 0) return [];

  if (coins.every(el => el > amt)) {
    return null;
  }

  let bestcombo = null;

  coins.forEach((coin, index) => {
    if (coin > amt) return;

    let remainder = amt - coin;

    let restChange = bestChange(remainder, coins.slice(index));

    if (!restChange) {
      return;
    }

    let change = [coin].concat(restChange);
    if (!bestcombo || (change.length < bestcombo.length)) {
      bestcombo = change;
    }
  });

  return bestcombo;
}

bestChange(14, [10, 7, 1])
```
