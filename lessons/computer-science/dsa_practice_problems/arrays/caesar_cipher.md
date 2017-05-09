## Question
Write a function that performs the [Caesar Cipher](https://learncryptography.com/classical-encryption/caesar-cipher). The function caesarCipher should receive two arguments: a string and a number. The number specifies how many letters to shift the string by.

```js
caesarCipher("hello", 1) // returns "ifmmp"
caesarCipher("dog", 3) // returns "grj"
```

## Answer
```js
function caesarCipher(str, shift) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let encodedStr = '';

  str.split('')
     .forEach(letter => {
       if (letter === ' ') {
         encodedStr += ' ';
       } else {
         var oldIdx = alphabet.indexOf(letter);
         var newIdx = (oldIdx + shift) % 26;

         encodedStr += alphabet[newIdx];
       }
     });
  return encodedStr;
}
```
