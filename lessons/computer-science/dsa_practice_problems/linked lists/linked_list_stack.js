// Given this implementation of a singly linked list, make a Stack data structure. NO ARRAYS!!!
function Node(val) {
  this.value = val
  this.next = null
}

function Stack() {
  this.stack = null
}

Stack.prototype.add = function(item) {
  let top = new Node(item)
  if (this.stack) {
    top.next = this.stack
  }
  this.stack = top
}

Stack.prototype.remove = function() {
  this.stack = this.stack.next
}

Stack.prototype.size = function() {
  let count = 0
  let current = this.stack
  while(current) {
    current = current.next
    count += 1
  }
  return count
}

Stack.prototype.isEmpty = function () {
  return this.stack ? false : true
}

Stack.prototype.peek = function () {
  return this.stack.value
}
