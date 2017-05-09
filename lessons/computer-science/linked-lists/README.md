# What's a Linked List?
A linked list is a data structure. It is made up of what are called nodes. Each node has a value associated with it.

## Singly Linked Lists
For example: Head (8) => (3) => (5) => (7) Tail
The (8) can access the (3).
(8).next === (3)
In singly linked lists, each node only has access to whatever node comes after it. **for visualization purposes only, I'm representing a node with value 8 as (8) and => as the next property**

## Doubly Linked Lists
In doubly linked lists, each node has access to the nodes that come before and after it. For example: Head (8) <=> (3) <=> (5) <=> (7) Tail
The (3) can access the (8) and the (5).
(8).prev === null
(8).next === (3)
(3).prev === (8)

## Build a linked list data structure with a Node object.
### Step 1A
Create a `Node` object that has the properties `value` and `next`. The default value for next should be null.

### Step 2A
Start making a linked list! Create an instance of  `Node` with the value of `blue`. Create another instance of `Node` with the value of `green`. Set the .next of the blue node to the green node. You just made a linked list!

### Step 3A
How do you get to the end or tail of a linked list? The .next of the tail should be null! Write a function `addNode` that receives the head of the linked list and value. It should use the value to create a new `Node` and add it to the end of the list. Hint: You'll need to access the tail of the linked list through the head.
```javascript
head = (8) => (3) => (4) // not real javascript syntax
addNode(head, 5)
head = (8) => (3) => (4) => (5) // not real javascript syntax
```

### Step 4A
Write a function `genLinkList` that receives an array and generates a linked list with nodes corresponding to the index within the array.
```javascript
var list = getLinkList([8, 'meow', true])
//list returns the head node of the linked list, which is (8)
```

### Step 5A
Write a function `displayList` that receives the head of the linked list and returns an array with all the nodes in the linked list.
For example: ('a') => ('c') => ('d') => ('c')
```javascript
displayList(head) // returns [('a'), ('c'), ('d'), ('c')]
```

### Step 6A
Write a function `length` that receives the head of a linked list and returns the number of nodes in the linked list.
```javascript
(8) => ('meow') => (true)  
length(head) // returns 3 because there are 3 nodes
```

## Build a linked list data structure with a LinkedList object that contains Node objects
### Step 1B
Create a `LinkedList` object that has the properties `head` and `tail`. The default values for these properties should be undefined or null. If you have only one node, the head and tail are the same.

### Step 2B
Write two functions on the prototype of LinkedList that add a `Node` to either the head or the tail. If the LinkedList is empty. It sets the head or tail to the same `Node`. The functions should take a value and create a new instance of `Node`.  
```javascript
var linklist = new LinkedList()
linklist.addTail(1)
linklist.addHead(2)
//builds the linked list with head of 2 and tail of 1
```

### Step 3B
Write a function that searches a linked list for a particular node and returns that node if found.
```javascript
linklist.search(val) //returns the first node with the value of the given argument `val` if it exists
```

### Step 4B
Write a function that traverses a linked list and returns the number of nodes present in the linked list.
```javascript
linklist.length() // returns the number of nodes that exist in the linked list
```

### Step 5B
When you delete a node in a linked list, you have to set its next node to become the next node of its previous node. For example: (A) => (B) => (C), when you delete (B), you have to tell (A) that its new next is (C). Write a function `delete` that removes the first node with the given value.
```javascript
linklist.delete(val) // traverses the linked list and deletes the first node with the value of `val`
```

### Step 6B
```javascript
linklist.insert(val, num) //inserts a new Node with value `val` at the position `num` of the linked list
```

### Step 7B
Write a function that removes the tail and another that removes the head.
```javascript
linklist.removeTail() //sets the node before the current tail to be new tail
linklist.removeHead() //sets the node after the current head to be the new head
```

## Challenge exercises once you've built a Linked List data structure - using the functions you built will help!
1) Remove the nodes with duplicate values in a given linked list. For example: (8) => (3) => (8) => (4)  becomes (8) => (3) => (4).
2) Remove all duplicate nodes. For example: (8) => (3) => (8) => (4)  becomes (3) => (4).
3) Given N, return the Nth to last node of a linked list.
4) Delete the middle node of a linked list.
5) Check to see if a linked list is a palindrome.
6) Write a function that receives two singly linked lists and checks to see if there is an intersection between the two and returns true or false.
7) Write a function that reverses a linked list.
8) Write a program that detects a loop in a linked list. **difficult-ish**

## Fun logic question unrelated to linked lists
You have two cubes and are trying to represent all the days(01 - 31) in the calendar. What numbers do you need to put on the cubes to represent all the days in a month?
