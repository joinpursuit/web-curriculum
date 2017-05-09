# Question
Given an array of integers, return all pairs that sum up to a specified value k. List the pairs in [min, max] order.

Clarify if asked:

Aim for better than O(n^2), you can do it!

# Answer
```js
function pairSum(arr, k) {
  const seen = {};
  const pairs = [];

  arr.forEach((el) => {
    const target = k - el;

    if (seen[target]) {
      const pair = [Math.min(el, target), Math.max(el, target)];
      pairs.push(pair);
    }

    seen[el] = true;
  });

  return pairs;
}
```
