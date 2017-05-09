# Question
Write a function `highThree` that receives an array of positive numbers and returns the product of the largest three numbers in the array.
```js
highThree([4, 1, 6, 2, 3, 5]) // returns 120
highThree([11, 3, 20, 1]) // returns 660 
```

# Answer
```js
function highThree(arr) {
  if (arr.length <= 2) {
    throw new Error("array needs to have at least three elements")
  }
  let [first, second, third] = [0, 0, 0];
  for(let i = 0; i < arr.length; i++){
    if (arr[i] > first) {
      third = second
      second = first
      first = arr[i]
    } else if (arr[i] < first && arr[i] > second) {
      third = second
      second = arr[i]
    } else if (arr[i] < second && arr[i] > third) {
      third = arr[i]
    }
  }

  return first * second * third
}
```
