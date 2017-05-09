# Question
There are 100 open lockers. You close every 2nd locker (so the 2nd, 4th, 6th, ... 100th are all closed). Then, you go to every third locker and open it if it is closed and close it if it is open. You proceed to toggle every nth locker on pass number n. So, for example, on pass number 16 – you will toggle every 16th locker. After your hundredth pass of the hallway, in which you toggle only locker number 100, what lockers are open?

# Answer
```js
function toggleLockers(n) {
  var lockers = []
  for (var x = 0; x < n; x ++) {
    lockers.push(true)
  }

  for (var y = 2; y < n; y++) {
    for(var z = y; z < n; z += y ) {
      if (lockers[z - 1]){
        lockers[z - 1] = false
      } else {
        lockers[z - 1] = true
      }
    }
  }

  var output = []

  lockers.forEach(function(locker, idx) {
    if (locker) {
      output.push(idx + 1)
    }
  })

  return output
}
```
