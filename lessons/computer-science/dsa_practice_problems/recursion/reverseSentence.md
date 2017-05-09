# Question
Write a function `reverseSentence` that receives a sentence and returns the sentence in reverse order. Assume the sentence doesn't have any punctuation or special characters.

Example
```js
reverseSentence("Hello World") // returns "World Hello"
reverseSentence("it was the best of times it was the worst of times")
//returns "times of worst the was it times of best the was it"
```

# Answer
```js
function reverseSentence(sentence) {
  if (sentence.length === 0) {
    return ""
  } else {
    var words = sentence.split(' ')
    var word = words.pop()
    if (words.length === 0) {
      return word
    } else {
      return word + " " + reverseSentence(words.join(" "))
    }
  }
}

reverseSentence("it was the best of times it was the worst of times")
```
