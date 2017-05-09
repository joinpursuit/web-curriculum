# Question

Write a function `makeMonies` that receives an array of stock prices throughout the course of the day and returns the maximum profit that could have been made. The indices of the array correspond to different times of the day. Shorting is not an option. The index or time that you buy into the stock has to be smaller or earlier than the index or time you sell the stock. What is the time complexity of your solution?
```js
makeMonies([20, 14, 10, 16, 22, 18]) // returns 12 b/c buy @ 10 & sell @ 22
makeMonies([19, 24, 18, 12, 15, 30]) // returns 18 b/c buy @ 12 & sell @ 30
```

# Answer
```js
function makeMonies(stocks) {

  var minPrice = stocks[0];
  var maxProfit = 0;

  for (var i = 0; i < stocks.length; i++) {
      var currentPrice = stocks[i];
      minPrice = Math.min(minPrice, currentPrice);
      var profit = currentPrice - minPrice;
      maxProfit = Math.max(maxProfit, profit);
  }

  return maxProfit;
}
```
