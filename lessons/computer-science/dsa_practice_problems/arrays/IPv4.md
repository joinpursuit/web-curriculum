# Question
Write a function that receives a string and outputs whether the string is a valid IPv4 address. Anything between 0.0.0.0 and 255.255.255.255 would return true. **Bonus: What is an IPv4 address?**
```js
isIPValid("195.2.43.5") // returns true
isIPValid("0.4.521.3") // returns false
```

# Answer
```js
function isIPValid(str) {
  let nums = str.split('.');

  if (nums.length !== 4) {
    return false;
  }

  for (let i = 0; i < nums.length; i++) {
    let num = Number(nums[i]);
    if (num !== num || (num > 255 || num < 0)) {
      return false;
    }
  }
  return true;
}
```
[Bonus Answer](http://whatismyipaddress.com/ip-address)
