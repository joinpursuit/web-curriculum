# Question
Given this implementation of a doubly linked list:
```js
function Link(val) {
  this.value = val
  this.next = null
  this.prev = null
}
```
Write a function `isLinkPalindrome` that will receive the head of the linked list and return whether or not the values of the linked list are a palindrome.

# Answer
```js
function isPalindrome(arr) {
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[arr.length - i - 1]) {
      return false
    }
  }

  return true
}

function isLinkPalindrome(head) {
  let current = head
  let links = []
  while (current) {
    links.push(current.value)
    current = current.next
  }

  return isPalindrome(links)
}
```
