function Node(val) {
  this.value = val;
  this.next = null;
}

var linkedlist = new Node(1);
linkedlist.next = new Node(2);
linkedlist.next.next = new Node(3)
linkedlist.next.next.next = new Node(4)

function deleteNode(a, b) {
  var currentNode = a
  if (currentNode.value === b) {
    a.value = a.next.value
    a.next = a.next.next
    return a
  }
  while(currentNode.next) {
    var nextNode = currentNode.next
    if (nextNode.value === b) {
      currentNode.next = nextNode.next
      nextNode.next = null
    }
    currentNode = nextNode
  }

  return a
}

deleteNode(linkedlist, 2)


function getKeys(obj) {
  var arr = []
  for(key in obj) {
    arr.push(key)
  }

  return arr
}

function countChars(str) {
  var output = {}
  for(var i = 0; i < str.length; i++){
    var char = str[i]
    if (output[char]) {
      output[char] += 1
    } else {
      output[char] = 1
    }
  }
  return output
}

function findUniq(arr) {
  var count = {}
  // count = {1: 2, 2: 2, 3: 2, 4: 2, 5: 1}
  for (var i = 0; i < arr.length; i++) {
    if (count[arr[i]]) {
      count[arr[i]] += 1
    } else {
      count[arr[i]] = 1
    }
  }

  for(key in count) {
    if (count[key] === 1) {
      return key
    }
  }

}

findUniq([1, 2, 3, 4, 1, 2, 3, 4, 5])




function Node(val) {
  this.value = val;
  this.next = null;
}

var linkedlist = new Node(1);
linkedlist.next = new Node(2);
linkedlist.next.next = new Node(3)
linkedlist.next.next.next = new Node(4)

function reDelete(head, val) {
  function recurse(node, val) {
    if (node.value === val){
      head = node.next
      return head
    } else if (node.next) {
      if (node.next.value === val) {
        node.next = node.next.next
      }
      return recurse(node.next, val)
    }
  }

  recurse(head, val)
  return head
}

reDelete(linkedlist, 3)

function Node(val) {
  this.value = val;
  this.next = null;
}

var linkedlist = new Node(1);
linkedlist.next = new Node(2);
linkedlist.next.next = new Node(3)
linkedlist.next.next.next = new Node(4)


function rubenGil(node, val) {
  if (node.value === val || node.next === null) {
    return node.next
  }
  node.next = rubenGil(node.next, val)
  return node
}


function combineStrings(a, b) {
  if (a.length === 0 || b.length === 0) {
    return a + b
  } else {
    return a[0] + b[0] + combineStrings(a.slice(1), b.slice(1))
  }
}



function Node(val) {
  this.value = val;
  this.next = null;
}

var linkedlist = new Node(1)
linkedlist.next  = new Node(2)
linkedlist.next.next = new Node(3)
linkedlist.next.next.next = new Node(2)
linkedlist.next.next.next.next = new Node(5)


function removeDup(head) {
  var currentNode = head
  while (currentNode) {
    var nextNode = currentNode.next
    while (nextNode) {
      console.log([currentNode, nextNode])

      if (nextNode.next && currentNode.value === nextNode.next.value) {
        nextNode.next = nextNode.next.next
      }
      nextNode = nextNode.next
    }

    currentNode = currentNode.next
  }

  return head
}

removeDup(linkedlist)
