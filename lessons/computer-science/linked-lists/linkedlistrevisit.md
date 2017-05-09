# Linked Lists

## Objectives
* Students will be able to manipulate a linked list and doubly linked list
* Hash table to solve algorithm problems
* Pass by reference or pass by value


## Array Review
<details>
	<summary>Access an element in an array</summary>
	O(1)
</details>

<details>
	<summary>Insert an element anywhere in an array</summary>
	O(n)
</details>

<details>
	<summary>Append an element to an array</summary>
	O(1)
</details>

<details>
	<summary>Find an element in an array</summary>
	O(n)
</details>

<details>
	<summary>Delete an element in an array</summary>
	O(n)
</details>


## Linked List

A linked list is a way of storing information.  A linked list consists of a series of nodes.  Each node contains data, as well as a pointer to the next node in the series.

![Linked list picture](https://upload.wikimedia.org/wikipedia/commons/6/6d/Singly-linked-list.svg)

##Common Operations

###Access an element

![Linked List Access](https://upload.wikimedia.org/wikipedia/commons/6/6d/Singly-linked-list.svg)

<details>
	<summary>Runtime</summary>
	O(n)
</details>

<details>
	<summary>Explanation</summary>
	In order to access the node at index 4, we need to 	visit every node before it.
</details>

###Insert an element

![Linked List Insertion](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/CPT-LinkedLists-addingnode.svg/474px-CPT-LinkedLists-addingnode.svg.png)


<details>
	<summary>Runtime</summary>
	O(1)
</details>


<details>
	<summary>Explanation</summary>
	We can insert a node in constant time by changing the 	pointer of the previous node to point to the new 	node.
</details>


###Find an element

![Linked List Find](https://upload.wikimedia.org/wikipedia/commons/6/6d/Singly-linked-list.svg)

<details>
	<summary>Runtime</summary>
	O(n)
</details>


<details>
	<summary>Explanation</summary>
	In order to find an element, we have to look at each 	node in the linked list.
</details>


###Delete an element

![Linked List Delete](https://modernpathshala.com/Images/singly-linked-list/Article/276195620161604035916Delete-Node-In-Linked-List.JPG)


<details>
	<summary>Runtime</summary>
	O(1)
</details>


<details>
	<summary>Explanation</summary>
	We need to change the pointer of a node to the node 	after the node we want to delete.
</details>

## Exercises
For all questions, use the following implementation of a linked list.
```js
function Node(val) {
  this.value = val;
  this.next = null;
}
```
### Question 1 - Delete Node
Write a function `deleteNode` that receives two arguments: the head of a linked list and the node to be deleted. The function should traverse the linked list and remove the designated node.
```js
var a = new Node(1);
var b = new Node(2);
var c = new Node(3);
var d = new Node(4);
a.next = b
b.next = c
c.next = d
deleteNode(a, b)
// input: (1) => (2) => (3) => (4)
// output: (1) => (3) => (4)
```
**Challenge: implement another solution that only receives the node to be deleted and does the removal in constant time**
```js
deleteNode(b)
```

### Question 2 - Remove Duplicates
Write a function that receives the head of a linked list and returns the head of the linked list with duplicates removed. Implement the solution using a hash table. You're going to have to use your delete method. **Challenge: try to solve the problem without using a hash table**
```js
var a = new Node(3);
var b = new Node(6);
var c = new Node(2);
var d = new Node(6);
var e = new Node(4);
var f = new Node(1);
var g = new Node(2);
a.next = b
b.next = c
c.next = d
d.next = e
e.next = f
f.next = g

removeDups(a)
//input: (3) => (6) => (2) => (6) => (4) => (1) => (2)
//output: (3) => (6) => (2) => (4) => (1)
//the second (6) and (2) should be removed from the linked list
```


### Question 3 - Palindrome Check
Write a function `isPalindrome` that receives the head of a linked list and returns whether the nodes in the linked list are sequenced like a palindrome.
```js
var a = new Node('r');
var b = new Node('a');
var c = new Node('d');
var d = new Node('a');
var e = new Node('r');
a.next = b
b.next = c
c.next = d
d.next = e
isPalindrome(a) // returns true
```
![palindromic linked list ](http://www.geeksforgeeks.org/wp-content/uploads/2009/08/Palindrome-Linked-List.gif)
```js

```
### Question 4 - Intersection?!
Write a function `intersects` that receives two arguments: the heads of two linked lists and returns true if the two linked lists share a common node.
```js
var a = new Node(1);
var b = new Node(10);
var c = new Node(20);
var d = new Node(5);
var e = new Node(15);
var f = new Node(30);
var g = new Node(40);
var h = new Node(50);
a.next = b
b.next = c
c.next = f
d.next = e
e.next = f
f.next = g
g.next = h
intersects(a, d) //returns true
```
![linked list](http://algorithms.tutorialhorizon.com/files/2014/09/Intersection-Point.png)

### Question 5 - Loop Detection
Write a function `existLoop` that receives the head of a linked list as an argument and returns true if a next node in the linked list refers to a previous node in the linked list.
```js
//the code below is for a linked list with a loop
var a = new Node(3);
var b = new Node(6);
var c = new Node(2);
var d = new Node(6);
var e = new Node(4);
var f = new Node(1);
var g = new Node(2);
a.next = b
b.next = c
c.next = d
d.next = e
e.next = f
f.next = g
g.next = c
existLoop(a) // returns true
```
![loop linked list](http://umairsaeed.com/images/circular-loop-figure-1.jpg)


### Whiteboarding 
Write a function that receives an array of duplicate elements and a single unique element and returns the single unique element in O(n) time. 
```js
findUniq([1, 2, 3, 4, 1, 5, 2, 3, 4]) //returns 5
```
