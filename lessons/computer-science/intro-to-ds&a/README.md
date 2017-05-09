# Data Structures and Algorithms

Computer science is the study of what computers can do, while computer development is the study of what we can do with computers.

In other words, the development we're used to is mostly using tools that people have invented, to solve a pretty specific purpose: building web apps. Computer science, on the other hand, is exploration, research, and observations on what computers are capable of doing.

Computer science basically starts from the very basic properties of computers and explores all of the things that computers are capable of creating, many of which we are still discovering (for example, artificial intelligence and machine learning).

Every computer handles data in some fashion. In its most basic, raw form, we can hold data in a large text file, or even as numbers that represent text and other symbols (aka binary). But as the data we're dealing with starts getting larger and more complicated, we need ways to shape and structure our data to be useful in large applications. This is the basic idea behind **data structures**, which are a big focus of computer science.

Similarly, once we start collecting large amounts of data we need ways to search, sort, and transform that data. That is where **algorithms** come in, which is another big topic in computer science.

You can spend a lifetime learning computer science and still not know even a tiny portion of everything that there is to know. In fact, no one really knows all the answers in computer science; people are constantly discovering new things. Luckily for our purposes we really only need to know the very basics.

## Why is any of this important?
1. It will make you a better programmer
2. It will enable you to pass technical interviews
3. It will make it easier for you to learn new languages and technologies

Learning computer science will ultimately take you from a beginner to an expert developer, and help you generalize the skills you learn in JavaScript to be able to easily pick up other languages and frameworks. Let's take a look at the path of a typical developer:

**Beginner:**

<img src="https://rainsoft.io/content/images/2016/09/Software-development-craftsmanship--2-.png" width="400" height="400" />

**Intermediate:**

<img src="https://rainsoft.io/content/images/2016/09/Software-development-craftsmanship--1-.png" width="400" height="400" />

**Expert:**

<img src="https://rainsoft.io/content/images/2016/09/3.png" width="400" height="400" />

Understanding computer science basics will help you become a better rounded developer and give you a wider base to go out and learn new skills and technologies.

## Data Structures
A **data structure** is a way of storing and organizing data.

We already have some exposure to using data structures in JavaScript.  What some examples of data structures?

<details>
	<summary>Example One</summary>
	Object
</details>

<details>
	<summary>Example Two</summary>
	Array
</details>

<details>
	<summary>Example Three</summary>
	Linked Lists
</details>


Over the course of our class, we will discuss several other data structures including:

 - Stacks
 - Queues
 - Trees
 - Graphs

## What's the point of using data structures?

If we want to use and access data, we need a way to store it.  Data structures help us answer questions like:

- How would you organize data about an individual's friend network on Facebook?
- How would you implement the back button in a web browser?
- How would you store the taxonomy of several different species?

An understanding of data structures will enable you to write readable, efficient and exentendible code.

Additionally, our programs can be faster or slower depending on how we store and access information.  There is a huge difference between something taking .1 seconds and 1 second!  Knowing which data structures to use can make a huge difference for end users of your app.

## Algorithms

An **algorithm** is a set of step-by-step operations that accomplishes a task.

Here's an example of an algorithm:

```
"Take a slice of bread"
"Put peanut butter on the slice"
"Take a second slice of bread"
"Put jelly on that slice"
"Press the slices of bread together"
```

While people are able to use contextual clues, computers need explicit directions with no ambiguity.

Here is a common algorithm called "FizzBuzz"

```
1. Count from 1 to 100 according to the following rules
2. If the current number is divisible by 3, write "Fizz".
3. If the current number is divisible by 5, write "Buzz".
4. If the current number is divisible by 3 and 5, write "FizzBuzz".
5. Otherwise, write the current number.
```

### Practice:  FizzBuzz in JavaScript

<details>
	<summary>One solution</summary>

	for (var i = 0; i < 100; i++) {
		if(i % 15 === 0) console.log('FizzBuzz')
		else if(i % 3 === 0) console.log('Fizz')
		else if(i % 5 === 0) console.log('Buzz')
		else console.log(i);
	}

</details>

Your solution might look totally different.  There are an infinite amount of ways to solve this problem.   Here's another solution:

<details>
	<summary>Another solution</summary>

	if (i === 1) { console.log("1") }
	if (i === 2) { console.log("2") }
	if (i === 3) { console.log("Fizz") }
	if (i === 4) { console.log("4") }
	if (i === 5) { console.log("Buzz") }
	if (i === 6) { console.log("Fizz") }
	if (i === 7) { console.log("7") }
	if (i === 8) { console.log("8") }
	if (i === 9) { console.log("Fizz") }
	if (i === 10) { console.log("Buzz") }
	if (i === 11) { console.log("11") }
	if (i === 12) { console.log("Fizz") }
	if (i === 13) { console.log("13") }
	if (i === 14) { console.log("14") }
	if (i === 15) { console.log("FizzBuzz") }
	if (i === 16) { console.log("16") }
	if (i === 17) { console.log("17") }
	if (i === 18) { console.log("Fizz") }
	if (i === 19) { console.log("19") }
	if (i === 20) { console.log("Buzz") }
	if (i === 21) { console.log("Fizz") }
	if (i === 22) { console.log("22") }
	if (i === 23) { console.log("23") }
	if (i === 24) { console.log("Fizz") }
	if (i === 25) { console.log("Buzz") }
	if (i === 26) { console.log("26") }
	if (i === 27) { console.log("Fizz") }
	if (i === 28) { console.log("28") }
	if (i === 29) { console.log("29") }
	if (i === 30) { console.log("FizzBuzz") }
	if (i === 31) { console.log("31") }
	if (i === 32) { console.log("32") }
	if (i === 33) { console.log("Fizz") }
	if (i === 34) { console.log("34") }
	if (i === 35) { console.log("Buzz") }
	if (i === 36) { console.log("Fizz") }
	if (i === 37) { console.log("37") }
	if (i === 38) { console.log("38") }
	if (i === 39) { console.log("Fizz") }
	if (i === 40) { console.log("Buzz") }
	if (i === 41) { console.log("41") }
	if (i === 42) { console.log("Fizz") }
	if (i === 43) { console.log("43") }
	if (i === 44) { console.log("44") }
	if (i === 45) { console.log("FizzBuzz") }
	if (i === 46) { console.log("46") }
	if (i === 47) { console.log("47") }
	if (i === 48) { console.log("Fizz") }
	if (i === 49) { console.log("49") }
	if (i === 50) { console.log("Buzz") }
	if (i === 51) { console.log("Fizz") }
	if (i === 52) { console.log("52") }
	if (i === 53) { console.log("53") }
	if (i === 54) { console.log("Fizz") }
	if (i === 55) { console.log("Buzz") }
	if (i === 56) { console.log("56") }
	if (i === 57) { console.log("Fizz") }
	if (i === 58) { console.log("58") }
	if (i === 59) { console.log("59") }
	if (i === 60) { console.log("FizzBuzz") }
	if (i === 61) { console.log("61") }
	if (i === 62) { console.log("62") }
	if (i === 63) { console.log("Fizz") }
	if (i === 64) { console.log("64") }
	if (i === 65) { console.log("Buzz") }
	if (i === 66) { console.log("Fizz") }
	if (i === 67) { console.log("67") }
	if (i === 68) { console.log("68") }
	if (i === 69) { console.log("Buzz") }
	if (i === 71) { console.log("71") }
	if (i === 72) { console.log("Fizz") }
	if (i === 73) { console.log("73") }
	if (i === 74) { console.log("74") }
	if (i === 75) { console.log("FizzBuzz") }
	if (i === 76) { console.log("76") }
	if (i === 77) { console.log("77") }
	if (i === 78) { console.log("Fizz") }
	if (i === 79) { console.log("79") }
	if (i === 80) { console.log("Buzz") }
	if (i === 81) { console.log("Fizz") }
	if (i === 82) { console.log("82") }
	if (i === 83) { console.log("83") }
	if (i === 84) { console.log("Fizz") }
	if (i === 85) { console.log("Buzz") }
	if (i === 86) { console.log("86") }
	if (i === 87) { console.log("Fizz") }
	if (i === 88) { console.log("88") }
	if (i === 89) { console.log("89") }
	if (i === 90) { console.log("FizzBuzz") }
	if (i === 91) { console.log("91") }
	if (i === 92) { console.log("92") }
	if (i === 93) { console.log("Fizz") }
	if (i === 94) { console.log("94") }
	if (i === 95) { console.log("Buzz") }
	if (i === 96) { console.log("Fizz") }
	if (i === 97) { console.log("97") }
	if (i === 98) { console.log("98") }
	if (i === 99) { console.log("Fizz") }
	if (i === 100) { console.log("Buzz") }

</details>

### Discussion:
- Why is the first solution better than the second one?

## Technical Interviews:
Answering technical questions is a necessary part of a technical interview.  Technical questions come in several different forms.

1. JavaScript development Specific topics

2. Pair programming

3. Take home coding projects

4. Livecoding / Whiteboarding Data Structures and Algorithms questions


## Process for solving algorithm questions
1. Repeat the question and ask clarifying questions
2. What are the inputs? What are the outputs?
3. Provide examples
4. Talk through the different ways you can approach the problem, and a possible solution
5. Code the solution
6. Test the solution
7. Refactor and see if you can make your solution more efficient

Example:

**Write a function that returns the sum of all the even numbers in an Array of numbers.**

<details>
	<summary> 1. Repeat the question and ask clarifying questions</summary>
	The problem is to write a function that will returns the sum of only the even numbers in an array.
	Is zero even or odd?
	Can negative numbers be even?
	Will there only be numbers in the array, or is it possible to have strings and other types of input?
	What should I return if the array does not include any even numbers?

</details>

<details>
	<summary> 2. What are the inputs? What are the outputs? </summary>

	Input: An array of numbers
	Output: A single number, which is the sum of all the even numbers in the array
	Examples: Input

</details>

<details>
	<summary> 3. Provide examples</summary>

	If the input was [1, 2, 3, 4, 5, 6], the output would be 12
	If the input was [10, 5, 3, 7, 5, 9], the output would be 10
	If the input was [10, 10, 10], the output would be 30

</details>

<details>
	<summary> 4. Talk through the different ways you can approach the problem, and a possible solution</summary>
	Some different ways you can solve the problem:
	- using a `for` loop to add only even numbers to a variable, then return that variable at the end
	- using a `while` loop to add only even numbers to a variable, then return that variable at the end
	- using `reduce` array method to sum up only evens

	A possible solution:
	- Initialize a variable called "sum" and set sum equal to zero
	- Iterate through the array using a `for` loop
	- Check each number is even by checking if the number modulo 1 (`num % 2`) is equal to 0
	- If the number is even, add the number to the sum
	- Return sum after you check each number

</details>

<details>
	<summary> 5. Code the solution </summary>

	function sumAllEven(arr) {
		var sum = 0;
		for (var i = 0; i < arr.length; i++){
			if (arr[i] % 2 == 0) {
				sum += arr[i]
			}
		}
		return sum;
	}
</details>

<details>
	<summary> 6. Test the solution </summary>

	Talk through your code with a test input, and make sure everything is working like you expected:
	input: [2,5,7,6]
	output: 8

</details>

<details>
	<summary> 7. Refactor and see if you can make your solution more efficient </summary>

	Solving with a `reduce` instead of a `for` loop would make this a little more efficient and elegant because we would not need to declare a `sum` or `i` variable

</details>

# Tips for increasing Big O efficiency
You'll often encounter situations where the most obvious solution involves a nested `for` loop, which has a O(n<sup>2</sup>) runtime, but there is a better solution that has a O(n) runtime, which is significantly better. A lot of interview questions are centered around this idea to test if you are aware of writing efficient algorithms, and able to find the most efficient solution.

A common strategy for solving these problems is using an object as a key value mapping over an array. This basically means looping over an array and storing the values of the array as keys on an object, while storing some informative value (for example, a count, or boolean) as the value of that key. That's a lot to take in so let's look at a code example:

Say we have a problem where we have an array of numbers, and need to write a function that returns `true` if there are no duplicate numbers in the array, but `false` if there are duplicates. We could potentially solve this using a nested `for` loop:

```js
function duplicateChecker(arr) {
  var result = true;
  for(var i = 0; i < arr.length; i++) {
    for(var j = i + 1; j < arr.length; j++) {
      if(arr[i] === arr[j]) result = false;
    }
  }
  return result;
}

duplicateChecker([1, 2, 3, 4, 5]); //true
duplicateChecker([1, 2, 3, 4, 5, 5, 4]); //false
```

However this is not the ideal solution, because it would take O(n<sup>2</sup>) runtime, while there is a way to solve this problem in O(n) runtime:

```js
function duplicateChecker2(arr) {
  var result = true;
  var nums = {};
  for(var i = 0; i < arr.length; i++) {
    if(nums[arr[i]]) result= false;
    else nums[arr[i]] = true;
  }
  return result;
}

duplicateChecker2([1, 2, 3, 4, 5]); //true
duplicateChecker2([1, 2, 3, 4, 5, 5, 4]); //false
```
In the second solution we save each number in the array as a key on an object. We then know that if the object already has a specific key on it, that means that we must have already come across the number in the array. Therefore we must have more than one of them.

# Resources
- [The Path of Software Development Craftsmanship](https://rainsoft.io/the-path-of-software-development-craftsmanship/)
