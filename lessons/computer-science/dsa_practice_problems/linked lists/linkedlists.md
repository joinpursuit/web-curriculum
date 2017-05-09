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

# Question
Given this implementation of a singly linked list:
```js
function Link(val) {
  this.value = val
  this.next = null
}
```
Write a function `kthNode` that receives the head of a linked list and a number `k` and will return the kth to last node of the linked list.
```js
var list = new Link(1)
list.next = new Link(2)
list.next.next = new Link(3)
list.next.next.next = new Link(2)
list.next.next.next.next = new Link(1)
kthNode(list, 1) // returns Link w/ val 5
kthNode(list, 2) // returns Link w/ val 4
kthNode(list, 3) // returns Link w/ val 3
kthNode(list, 4) // returns Link w/ val 2
```
# Answer
```js
function kthNode(head, k) {

  if (k < 1) {
      throw new Error('Impossible to find less than first to last node: ' + k);
  }

  var length = 1;
  var current = head;

  while (current.next) {
      current = current.next;
      length += 1;
  }

  if (k > length) {
      throw new Error('k is larger than the length of the linked list: ' + k);
  }

  var howFarToGo = length - k;

  current = head;
  for (var x = 0; x < howFarToGo; x++) {
      current = current.next;
  }

  return current;
}
```
