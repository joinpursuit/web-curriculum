function myEach(callback, array) {
  let output = []
  for(let i = 0; i < array.length; i++) {
    output.push(callback(array[i]))
  }

}

function Stack() {
  this.stack = []
  this.min = []
}

Stack.prototype.add = function(el) {
  this.stack.push(el)
  if (this.min.length === 0) {
    this.min.push(el)
  } else {
    if (this.peekStack() < this.peekMin()) {
      this.min.push(this.peekStack())
    } else {
      this.min.push(this.peekMin())
    }
  }
}

Stack.prototype.remove = function() {
  this.stack.pop()
  this.min.pop()
}

Stack.prototype.peekStack = function() {
  let last = this.stack.length - 1
  return this.stack[last]
}
Stack.prototype.peekMin = function() {
  let last = this.min.length - 1
  return this.min[last]
}


///////////

function myQueue() {
    this.enter  = [];
    this.exit = [];
}

myQueue.prototype.enqueue = function(el) {
    this.enter.push(el);
}

myQueue.prototype.dequeue = function() {
    if (this.exit.length === 0) {
        // Move items from in_stack to out_stack, reversing order
        while (this.enter.length > 0) {
          this.exit.push(this.enter.pop());
        }
        // If out_stack is still empty, raise an error
        if (this.exit.length === 0) {
            return undefined
        }
    }
    return this.exit.pop();
}
