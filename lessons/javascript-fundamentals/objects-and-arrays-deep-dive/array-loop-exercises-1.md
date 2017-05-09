1. What will the following function log to the console?

  ```js
  function logMystery(arr) {
    for(var i = 0; i < arr.length; i+=2) {
      console.log(arr[i + 1]);
    }
  }

  logMystery(['a', 'b', 'c', 'd', 'e', 'f']);
  ```
- What will the following function log to the console?

  ```js
  function logMystery(arr) {
    for(var i = 0; i < arr.length; i+=2) {
      console.log(i);
    }
  }

  logMystery(['a', 'b', 'c', 'd', 'e', 'f']);
  ```
- What will the following function log to the console?

  ```js
  function logMystery(arr1, arr2) {
    for(var i = 0; i < arr2.length; i++) {
      console.log(arr[i]);
    }
  }

  logMystery(['a', 'b', 'c', 'd', 'e', 'f'], ['a', 'b', 'c'] );
  ```
- What will the following function log to the console?

  ```js
  function logMystery(arr) {
    for(var i = 0; i < arr.length; i += arr[i]) {
      console.log(arr[i]);
    }
  }

  logMystery([2, 3, 2, 3, 2, 3, 2, 3]);
  ```
- What will the following function log to the console?

  ```js
  var num = 2;

  function logMystery(arr) {
    for(var i = 0; i < arr.length; i++) {
      console.log(arr[num]);
    }
  }

  logMystery(['a', 'b', 'c', 'd', 'e', 'f']);
  ```
- What will the following function log to the console?

  ```js
  var num = 1;

  function logMystery(arr) {
    for(var i = 0; i < arr.length; i++) {
      console.log(arr[num]);
      num += i;
    }
  }

  logMystery(['a', 'b', 'c', 'd', 'e', 'f']);
  ```
- What will the following function log to the console?

  ```js
  function logMystery(arr) {
    for(var i = 0; i < arr.length; i++) {
      console.log(arr[Math.min(i, 3)]);
    }
  }

  logMystery(['a', 'b', 'c', 'd', 'e', 'f']);
  ```
- What will the following function log to the console?

  ```js
  function logMystery(arr) {
    for(var i = 0; i < arr.length; i+=2) {
      console.log(arr[Math.min(i, 4)]);
    }
  }

  logMystery(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']);
  ```
- What will the following function log to the console?

  ```js
  function logMystery(arr) {
    for(var i = 0; i < arr.length; i++) {
      console.log(arr[Math.max(i, 3)]);
    }
  }

  logMystery(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']);
  ```
- What will the following function log to the console?

  ```js
  function logMystery(arr) {
    for(var i = 0; i < arr.length; i+=2) {
      console.log(arr[Math.max(i, 1)]);
    }
  }

  logMystery(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']);
  ```
