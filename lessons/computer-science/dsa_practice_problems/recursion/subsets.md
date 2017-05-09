# Question
Write a function `subsets` that receives an array and returns all the possible subsets that can be made from the elements in the array.

# Answer
```js
function subsets(arr, output = [[]]) {
  if (arr.length === 0) {
    return output
  } else {
    let add = arr.shift() // 1
    let added = output.map(function(el){
      return el.concat(add)
    }) // [[1]]
    return subsets(arr, output.concat(added))
  }
}

subsets([1, 2])
subsets([1, 2, 3, 4])
subsets([1, 2, 3, 4])
subsets([1, 2, 3, 4, 5])
```
