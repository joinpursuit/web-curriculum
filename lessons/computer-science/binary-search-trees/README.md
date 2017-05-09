## Overview
A binary-search tree (BST) is a specific type of tree where values are divided into either the left or right half of the tree.

Basically, BST's start with a 'root' node (aka the first node on the tree). Then for each subsequent node, you first check if the new node's value is greater or less than the root node's value. If it is less, you add it to the left side of the tree. If it is greater, you add it to the right side of tree. You keep repeating this process until you find an empty slot, where you insert the new node.

Each node can have a maximum of TWO children nodes (which is why it's called a BINARY search tree).

A correctly implemented BST will guarantee that higher values will be on the right side of the tree, and lower values on the left, which is how it makes searching faster.

![bst](https://encrypt3d.files.wordpress.com/2010/09/nodes-in-binary-search-tree.png)

BST's are used to help make searching a lot faster. For example, if you have a large collection of strings (or phone numbers) sorted into a BST, you can find if the tree contains a specific string a lot faster than you'd be able to if you were searching through an array or object.

![strings bst](http://math.hws.edu/eck/cs225/s03/binary_trees/sortTree.gif)

## Methods
Some typical BST methods include:
- insert: add a new node onto the tree
- contains: search the tree to see if it contains a specific value
- depth-first traversal: search a tree in a 'vertical' order, by repeatedly going downward starting at the root and ending at leaf nodes
- breadth-first traversal: search a tree in a 'horizontal' order, by searching each layer of nodes before moving downwards

## Balanced Tree
![balanced vs non balanced](http://www.stoimen.com/blog/wp-content/uploads/2012/07/3.-Balanced-vs.-Non-Balanced.png)

A non-balanced tree is a tree where the difference of heights (starting at any node) is greater than 1 level.

![non-balanced tree](http://algorithmsandme.in/wp-content/uploads/2015/04/Balanced-binary-tree-4.png)

Why is this important? Because the Big(O) runtime for a balanced tree vs a non-balanced tree can be drastically different!

**Discussion:** What is the Big(O) runtime of a balanced tree? What about of a completed non-balanced tree?


## Challenges
- Write a binary-search tree class that includes an 'insert' method
- Write a breadth-first search method for a binary search tree
- Write a depth-first search method for a binary search tree
- Write a method to get the maximum height of a binary search tree
- Write a method to check if a binary search tree is balanced
