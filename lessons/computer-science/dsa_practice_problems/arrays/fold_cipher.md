# Question
Implement the Folding Cipher. It folds the alphabet in half and uses the adjacent letter. Ie. a <=> z, b <=> y, c <=> x, m <=> n.

```js
foldCipher("abc") // returns "zyx"
```

# Answer
```js
function foldCipher(str) {
  var output = ""
  var alphabet = "abcdefghijklmnopqrstuvwxyz"
  str.split("").forEach(function(letter) {
    output += alphabet[25 - alphabet.indexOf(letter)]
  })

  return output
}
```
