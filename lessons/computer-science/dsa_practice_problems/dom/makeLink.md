# Question
Write a function `makeLink` that takes an `href` and an `innerHTML` generating an HTML link using the DOM API.

Example
```js
makeLink('https://www.google.com/', 'GOOGLE IT')
// returns <a href="https://www.google.com/">GOOGLE IT</a>
```

# Answer
```js
function makeLink(href, innerHTML){
  let output = document.createElement('a')
  output.setAttribute('href', href)
  output.innerHTML = innerHTML

  return output
}
```
