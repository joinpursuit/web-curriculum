#What is Big O?

**Big O Notation** is a way of measuring how fast a function or an algorithm executes relative to how many items you give it as input.  

We measure two types of performance with Big O Notation:

- **Time Complexity**: How long does it take an algorithm to run when given *n* elements as input?

- **Space Complexity**: How much memory does an algorithm need when given *n* elements as input?

We usually talk much more about time complexity.

Big O aims to measure the worst case scenario time complexity of an algorithm. In plain English, that basically means "what's the longest possible amount of time this function will take to run?" This is important because if an algorithm takes a really long time to run it could slow down or even crash your entire application.

Big O is usually referred to in terms of `O(n)`, where `n` is the size of the input.

## Big O Overview
Here's an overview of the most common Big O runtimes:

1. O(1) - constant runtime; takes same amount of time regardless of the input size.
2. O(n) - linear runtime; runtime scales one to one with size of input.
3. O(n<sup>2</sup>) - exponential runtime; runtime grows exponentially with size of input, for example in a nested `for` loop.


Let's take a look at the more common ones, one at a time.

## Common Time Complexities of Algorithms

|Big O Runtime|Name|Example|
|---|---|---|
|O(1) | Constant | Print the first string in an array of count *n* |
|O(n) | Linear | Print every string in an array of count *n* |
|O(n<sup>2</sup>) | Quadratic | Print every character of every string in an array of count *n* (Assume that every string is also of length n) |

### O(1):
```js
function constantTime(arr) {
  console.log(arr[0]);
}
```
Let's assume it takes 10 ms to print a string.  

|arr.count (n) | Runtime |
|---|---|
| 1 | 10 ms |
| 10 | 10 ms |
| 100 | 10 ms |

We can see that the time it takes to run constantTime(arr) does not vary.  No matter how large *n* is, it will always take the same amount of time to run our function. In other words, our function will take the same amount of time to run if our arr has 3 values in it or if it has 1,000,000 values in it. The run-time is the same regardless of the input size.


###O(n):
```js
function linearTime(arr) {
	arr.forEach(function(val){
    console.log(val);
  })
}
```
|arr.count (n) | Runtime |
|---|---|
| 1 | 10 ms |
| 10 | 100 ms |
| 50 | 500 ms |
| 1000 | 10,000 ms = 10 s |

In this example, increasing the size of our array does increase how long it takes our function to run.  Going back to our days with algebra, we can even make a math function that explaines the relationship between the count and the runtime:

<details>
  <summary>What is the relationship? </summary>
   f(n) = 10n
</details>

<details>
  <summary>What is the runtime? </summary>
   O(n)
</details>

Basically, O(n) means the runtime goes up proportionally to how big our input size is. So an array with 1,000,000 items in it will take roughly 1,000,000 times longer to run than an array with 1 item in it.

####Where'd the 10 go?

- We can generally ignore coefficients. In other words, O(2n) or O(10n) is essentially the same thing as O(n).
- Big O notation only cares about the big picture.  While it can be very relevant for our code to make something 10 times faster, Big O is only used to tell you the rough area you're in.
- One main reason for this is that the 10 ms figure isn't a part of our algorithm.  If we used a better computer, it might only take 1 ms to print a string.  Big O doesn't know what computer you're using, so it generalizes to *linear time*.

###O(n<sup>2</sup>):
```js
//Print out who selected which character.  Two players can select the same character.
function quadraticTime(arr) {
	for (var i = 0; i < arr.length; i++){
		for (var j = 0; j < arr.length; j++) {
				console.log("Player One:" + arr[i]);
        console.log("Player Two:" + arr[j]);
		}
	}
}
```
This one's a little more complicated.  Let's break it down.

Our code will then print out each pair of names.  Here's are a few sample inputs and outputs:


**Input: ["Agnes"]**

<details>
  <summary> Output (click to show): </summary>

	Player One: Agnes, Player Two: Agnes

</details>


**Input: ["Agnes", "Bart"]**
<details>
  <summary> Output (click to show): </summary>

	Player One: Agnes, Player Two: Agnes
	Player One: Agnes, Player Two: Bart
	Player One: Bart, Player Two: Agnes
	Player One: Bart, Player Two: Bart

</details>

**Input: ["Agnes", "Bart", "Carl"]**
<details>
  <summary> Output (click to show): </summary>

	Player One: Agnes, Player Two: Agnes
	Player One: Agnes, Player Two: Bart
	Player One: Agnes, Player Two: Carl
	Player One: Bart, Player Two: Agnes
	Player One: Bart, Player Two: Bart
	Player One: Bart, Player Two: Carl
	Player One: Carl, Player Two: Agnes
	Player One: Carl, Player Two: Bart
	Player One: Carl, Player Two: Carl

</details>


Let's format the count of the array, number of print statements and the runtime.


|arr.count (n) | Number of print statements | Runtime |
|---|---|---|
| 1 | 1 | 10 ms |
| 2 | 4 | 40 ms |
| 3 | 9 | 90 ms |
| 4 | 16 | 160 ms |

<details>
	<summary> What function describes the relationship between *n* and the runtime? </summary>
	f(n) = 10n<sup>2</sup>
</details>

<details>
	<summary> What is the runtime? </summary>
	O(n<sup>2</sup>)
</details>


We can then extrapolate to fill in the same chart we were using above.

|arr.count (n) | Runtime |
|---|---|
| 1 | 10 ms |
| 10 | 1000 ms = 1 s |
| 50 | 25000 ms = 25 s |
| 1000 | 10,000,000 ms = 2.78 hours |

That gets slow fast!  

Let's put all the charts together:

|arr.count (n) | Runtime: O(1) | Runtime: O(n) | Runtime: O(n<sup>2</sup>) |
|---|---|---|---|
| 1 | 10 ms | 10 ms |10 ms |
| 10 | 10 ms | 100 ms | 1000 ms = 1 s |
| 50 | 10 ms | 500 ms | 25000 ms = 25 s |
| 1000 | 10 ms | 10,000 ms = 10 s | 10,000,000 ms = 2.78 hours |

**Chart of Big O runtimes**

![runtimes](http://apprize.info/science/algorithms/algorithms.files/image060.jpg)


##Other Runtimes
**Note**: log(n) means log<sub>2</sub>(n)

We'll get to these all going forwards.  Don't worry about them too much right now.

1. O(log n) - runtime for programs that consistently cut the search data in half (or by a significant amount), like for example a binary search tree
2. O(2^n) - often seen in recursive problems
3. O(n!) - factorial runtime; crazy long

##Ranking and Visualizing Big O Runtimes
From fastest to slowest:

O(1) < O(log(n)) < O(n) < O(nlog(n)) < O(n<sup>2</sup>) < O(2<sup>n</sup>) < O(n!)

The following graph is from [http://bigocheatsheet.com](http://bigocheatsheet.com):
![From Big O Cheat Sheet](https://github.com/C4Q/AC-DSA/blob/master/Big_O/images/BigOCheatSheet.png)

##Deriving Runtime
We just saw an example of how to derive the runtime of a function.  Let's try it with some similar examples.


```js
//Loops through a string to see if 'char' is contained in that string
function exampleOne(str, char) {
  for(var i = 0; i < str.length; i++){
    if(str[i] === char) return true;
  }
  return false;
}
```

<details>
	<summary>What is the runtime of exampleOne('test string', 'l')?</summary>
	O(n)
</details>

<details>
	<summary> Explanation: </summary>
	We might need to look at each of the n characters inside str.characters.  "n" here represents 	str.characters.count.  The more characters we have in our string, the longer it will take to find 	our target character
</details>


```js
function exampleTwo(arr) {
	for (var i = 0; i < 1,000,000; i++) {
		console.log("Many printings!");
	}
}
```

<details>
	<summary>What is the runtime of exampleTwo(['this', 'is', 'a', 'test'])?</summary>
	O(1)
</details>


<details>
	<summary>Explanation: </summary>
	No matter how big our array is, this will always print "Many printings" 1,000,000 times.  While this 	would take a really long time, it is always the ***same*** amount of time.  It will take a constant 	time to run this function and it is entirely independant of the count of arr.
</details>


```js
function exampleThree(arr){
   var counter = 0;
   for(var i = 0; i < arr.length; i++) {
       if arr.indexOf((arr[0] + 1) > -1) {
           counter += 1
       }
   }
   return counter;
}
```

<details>
	<summary>What is the runtime of exampleThree(arr:)?</summary>
	O(n<sup>2</sup>)
</details>

<details>
	<summary>Explanation: </summary>
	Our for loop goes over each of *n* Ints.  Then for each of those Ints, we run contains, which will 	go over each of *n* Ints.  We would then end up looking at *n<sup>2</sup>* Ints in total.
</details>


##Compound Runtimes

So far, we've been working with functions with either a nested loop, or a single loop.  What happens when we have multiple different runtimes in sequence?  Let's look at an example:

```js
function compoundRuntimes(arr) {
	for (var i = 0; i < 1000; i++) {
		console.log("Hi!");
	}
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  for (var i = 0; i < arr.length; i++){
    for (var j = 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        console.log("It's a match!" + arr[i] + " and " + arr[j] " are equal")
      }
    }
  }
}
```
<details>
	<summary>How long would it take to run this code?</summary>
	O(1) + O(n) + O(n<sup>2</sup>)
</details>

Let's see how the runtime increases with count using our chart from above

|arr.count (n) | Runtime: O(1) | Runtime: O(n) | Runtime: O(n<sup>2</sup>) | <details><summary>compoundRuntimes(arr:)</summary>Runtime: O(1) + O(n) + O(n<sup>2</sup>) |
|---|---|---|---|---|
| 1 | 10 ms | 10 ms |10 ms | 30 ms |
| 10 | 10 ms | 100 ms | 1000 ms = 1 s | 1110 ms = 1.11 s |
| 50 | 10 ms | 500 ms | 25000 ms = 25 s | 25510 ms = 25.51 s |
| 1000 | 10 ms | 10,000 ms = 10 s | 10,000,000 ms = 2.78 hours | 10,010,010 ms = 2.78 hours |

As the count gets bigger and bigger, the only term that matters is the O(n<sup>2</sup>) term.  Therefore, we say that the runtime of compoundRuntimes(arr:) is O(n<sup>2</sup>)

When we have a compound runtime, we only keep the ***most significent*** term.  In fact, the O in *Big O Notation* stands for "Order" because we care most about the "Biggest Order" that appears.  Order in this case is talking about the [order of the algebraic function](https://en.wikipedia.org/wiki/Order_of_a_polynomial) also called the [degree](https://en.wikipedia.org/wiki/Degree_of_a_polynomial).


##Compound Runtime Examples

For the examples below, give the average case runtime

###Example One:
```js
function doStuff(arr) {
  for (var i = 0; i < arr.length; i++){
    for (var j = 0; j < arr.length; j++) {
      for (var k = 0; k < arr.length; k++) {
        console.log(k);
      }
    }
  }
}
```

<details>
	<summary>What is the runtime of doStuff(arr:)?</summary>
	O(n<sup>3</sup>)
</details>

###Example Two:
```js
function doOtherStuff(arr) {
  arr.forEach(funciton(num){
    console.log(num);
  })
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr.length; j++) {
      console.log(arr[j]);
    }
  }
  arr.forEach(funciton(num){
    console.log(num);
  })
}
```

<details>
	<summary>What is the runtime of doOtherStuff(arr:)?</summary>
	O(n<sup>2</sup>)
</details>

###Example Three:
```js
function exampleThree(arr) {
  arr.forEach(function(num){
    console.log(num);
  })
  arr.map(function(num){
    return num * 2;
  })
}
```

<details>
	<summary>What is the runtime of exampleThree([2, 3, 4, 5])?</summary>
	O(n)
</details>

###Example Four:
```js
function exampleFour(arr) {
  arr.forEach(function(num){
    console.log(num);
  })
  arr.forEach(function(num){
    for(var i = 0; i < arr.length; i ++) {
      console.log(num);
    }
  })
}
```

<details>
	<summary>What is the runtime of exampleFour([2, 3, 4, 5])?</summary>
	O(n<sup>2</sup>)
</details>

###Example Five:
```js
function exampleFive(arr) {
  return arr[arr.length - 1];
}
```

<details>
	<summary>What is the runtime of exampleFive([2, 3, 4, 5, 10, 22, 33, 1, 4, 5, 6])?</summary>
	O(1)
</details>



# Resources
- [Codecademy Big O](https://www.codecademy.com/courses/big-o/0/1)
- [Algorithms In Plain English: time complexity and Big-O](https://medium.freecodecamp.com/time-is-complex-but-priceless-f0abd015063c#.miw91ta8e)
- [Beginner's Guide to Big O](https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/)
