# Question
Write a function that reads an array and outputs an array of arrays describing the number of each element in the array.

```js
elementCount([2, 1]) == [[1, 2], [1, 1]]
elementCount([1, 2, 1, 1]) == [[1, 1], [1, 2], [2, 1]]
elementCount(['a', 'a', 'c', 'd', 'e']) == [[2, 'a'], [1, 'c'], [1, 'd'], [1, 'e']]
```

# Answer
```js
function elementCount(arr) {
  let output = [[1, arr[0]]]
  for(let i = 1; i < arr.length; i++) {
    let el = arr[i]
    if (el == output[output.length - 1][1]) {
      output[output.length - 1][0] += 1
    }
    else {
      output.push([1, el])
    }
  }
  return output
}
elementCount([2, 1])
```
