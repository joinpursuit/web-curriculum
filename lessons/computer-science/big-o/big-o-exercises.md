What is the Big O runtime of the following functions?

### Problem 1

```js
function problem1 (arr) {
  for(var i = 0; i < 10; i++) {
    console.log(i);
  }
  return arr[ 0];
}

problem1([1, 2, 3, 4, 5]);
```

<details>
<summary>Problem 1 Answer:</summary>
<br>
Answer: **O(1)** (aka constant time)
<br>
<br>
Explanation: Regardless of how big the input array is, the function will still loop ten times and return the first element of the array.
</details>

### Problem 2

```js
function problem2 (arr) {
  for(var i = 0; i < arr.length; i++) {
    console.log(i);
  }
}

problem2([1, 2, 3, 4, 5]);
```

<details>
<summary>Problem 2 Answer:</summary>
<br>
Answer: **O(n)** (aka linear time)
<br>
<br>
Explanation: The amount of loops that the `for` loop makes is directly proportional to the size of the array given as an argument.
</details>

### Problem 3

```js
function problem3 (arr) {
  for(var i = 0; i < arr.length; i++) {
    console.log(i);
  }
  for(var i = 0; i < arr.length; i++) {
    console.log(i);
  }
}

problem3([1, 2, 3, 4, 5]);
```

<details>
<summary>Problem 3 Answer:</summary>
<br>
Answer: **O(n)** (aka linear time)
<br>
<br>
Explanation: Technically, this would be **O(2n)** (since there are two separate `for` loops) but we can generally ignore coefficients when calculating Big O. In other words, having two separate `for` loops will essentially take the same amount of time to run as a single `for` loop (as long as they are not nested).
</details>

### Problem 4

```js
function problem4 (arr) {
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr.length; j++) {
      console.log(arr[j]);
    }
  }
}

problem4([1, 2, 3, 4, 5]);
```

<details>
<summary>Problem 4 Answer:</summary>
<br>
Answer: **O(n<sup>2</sup>)** (aka exponential time)
<br>
<br>
Explanation: In this case, since the `for` loops are nested, the runtime of this function will grow exponentially larger as the input size gets larger. In other words, if our `arr` has five elements in it our runtime would be roughly **O(5<sup>2</sup>)**, or **O(25)**. However if our `arr` had ten elements in it our runtime would be roughly **O(10<sup>2</sup>)**, or **O(100)**. The runtime gets exponentially longer as we increase the size of our array.
</details>

### Problem 5

```js
function problem5 (arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  for(var j = 0; j < arr.length; j++) {
    sum += arr[j];
  }
  for(var k = 0; k < arr.length; k++) {
    sum += arr[k];
  }
}

problem5([1, 2, 3, 4, 5]);
```

<details>
<summary>Problem 5 Answer:</summary>
<br>
Answer: **O(n)** (aka linear time)
<br>
<br>
Explanation: Technically, this would be **O(3n)** (since there are three separate `for` loops) but we can generally ignore coefficients when calculating Big O. In other words, having three separate `for` loops will essentially take the same amount of time to run as a single `for` loop (as long as they are not nested).
</details>

### Problem 6

```js
function problem6 (arr) {
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr.length; j++) {
      for(var k = 0; k < arr.length; k++) {
        console.log(k);
      }
    }
  }
}

problem6([1, 2, 3, 4, 5]);
```

<details>
<summary>Problem 6 Answer:</summary>
<br>
Answer: **O(n<sup>3</sup>)** (aka exponential time)
<br>
<br>
Explanation: In this case, since the `for` loops are nested, the runtime of this function will grow exponentially larger as the input size gets larger. Since we have three nested loops, the runtimes will be **O(n<sup>3</sup>)**. In other words, if our `arr` has five elements in it our runtime would be roughly **O(5<sup>3</sup>)**, or **O(125)**. However if our `arr` had ten elements in it our runtime would be roughly **O(10<sup>3</sup>)**, or **O(1000)**. The runtime gets exponentially longer as we increase the size of our array.
</details>

### Problem 7

```js
function problem7 (arr) {
  for(var i = 0; i < 10; i++) {
    for(var j = 0; j < 10; j++) {
      for(var k = 0; k < 10; k++) {
        console.log(k);
      }
    }
  }
}

problem7([1, 2, 3, 4, 5]);
```

<details>
<summary>Problem 7 Answer:</summary>
<br>
Answer: **O(1)** (aka constant time)
<br>
<br>
Explanation: Even though there are nested loops, the loops are only counting up to 10 every time (and are not effected at all by the size of that input). Because of that, the time that our function takes to run will always be the same, no matter how big our input size is.
</details>
