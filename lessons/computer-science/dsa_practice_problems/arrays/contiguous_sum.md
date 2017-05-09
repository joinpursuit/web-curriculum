# Question
Given an array of integers, find the largest sum of a contiguous subarray.
```js
largestSum([6, 4, -8, 7]) // returns 10 b/c the [6, 4] summed is the largest
largestSum([6, 4, -8, 7, 5]) // returns 14 b/c adding all the elements produces the largest sum
```

# Answer
```js
function largestSum(arr) {
    var maxSum = 0,
        currentSum = 0

    for (var i = 0; i < arr.length; i++) {
        currentSum = Math.max((currentSum + arr[i]), arr[i]);
        maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum
}
```
