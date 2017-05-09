
## Goals
- Be able to answer 'what is a contiguous array?'
- Be able to answer 'what is a hash table?'
- Be able to answer 'how are JavaScript objects made under the hood?'


# The Layers of an Object

JavaScript objects are built on top of several other data structures. Similar to how jQuery is an abstraction over the DOM, JavaScript objects abstract over other data types to build a more complex, nuanced data type.

Let's take a look at two of the data types that JavaScript objects are built on top of: Contiguous Arrays and Hash Tables:

JavaScript Objects<br/>
----------------^<br/>
Hash Tables<br/>
----------------^<br/>
Contiguous Arrays
<br/> ----------------^


## Contiguous Arrays

The values in contiguous arrays are stored next to each other in memory, which makes it very easy and efficient to look them up.

Contiguous arrays are stored in one contiguous block of memory. This means that elements are kept right next to each other in terms of their memory addresses. Finding an element of an array is possible by knowing (ahead of time) the size of each element and the address of any element in the array.

![](https://docs.oracle.com/javase/tutorial/figures/java/objects-tenElementArray.gif)

For example, if we know that:

1. The size of each element in an array is `4 bytes`
2. The memory address of where the array is stored
3. We want the 6th element in the array

We can infer `array[6] = (4 bytes * 6 index) + (Memory Address of array[0])`.

Here's an example of how a contiguous array may be stored in memory:

arr = ['hello', 'world', 'freeze all motor functions', 'what door?', 'hello', 'world']

|Array Index   | Memory Address  |  Value
|---|---|---|---|---|
| arr[0]  |  1245028 | 'hello'  
| arr[1]  |  1245029 | 'world'
| arr[2]  |  1245030 | 'freeze all motor functions'
| arr[3]  |  1245031 | 'what door?'
| arr[4]  |  1245032 | 'hello'
| arr[5]  |  1245032 | 'world'

Contiguous arrays also need to be:

1. **Ordered**:  Elements in an array have a definite order.

1. **Indexed**: Elements in an array are indexed using zero-based indexing. This means that the first element in an array has the `index` of `0`, while the last element has an `index` of `array.length - 1`

## Hash Tables
Contiguous arrays are very efficient, but are limited to using numbers as indexes. What if we want to use a string as an index (aka a key), but still have the efficiency of contiguous arrays?

Hash tables were created to solve this problem by allowing you to use a string as an index while still keeping an O(1) (aka constant) lookup time.

### Hash Function

Hash tables get their name from the 'hash' function, which is basically a function that converts any piece of data into a unique code. In other words, you can use a hash function to convert a string into a unique integer.

Here's an example of a relatively simple hash function:

```js
const hash = (str) => {
  let hashedVal = 0;
  str.split('').forEach((letter) => {
    hashedVal += letter.charCodeAt(0);
    //see the links below for more info about 'charCodeAt'
  })
  return hashedVal;
}

hash('hello'); //532
hash('world'); //552
hash('cat'); //312
hash('elephant'); //849
hash('platypus'); //898
```

([charCodeAt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt) is a string method that converts a string into an ASCII 'character code' number. Read more about ASCII codes [here](http://www.ascii-code.com/))

One important part of a hashing function is that, given the same string, it must always return the same, predictable value. So for example if we run our hash function with the string 'hello' 100 times (or 1,000,000) times we should ALWAYS get the same result:

```js
hash('hello'); //532
hash('hello'); //532
hash('hello'); //532
hash('hello'); //532
hash('hello'); //532
```

Hash functions are also commonly used in encryption, to help encrypt passwords or other sensitive material.

### Buckets
However you may have noticed that the numbers returned by the above hash functions are pretty spread out. Really spread out numbers are hard to store in contiguous pieces of memory without leaving a lot of space. So hash tables use something called 'buckets' to make storing much more efficient.

Basically, when creating a hash table, you choose a certain amount of 'buckets' that you want to keep your data in. Each bucket will then be allotted to certain slots in memory.

We then need to alter our hash function so it returns a number between zero and our amount of buckets.

In other words, if we decide we want 10 buckets, our hash function would need to return a number between 0 and 10. This lets us assign each of our string keys to a specific bucket, aka a specific slot in memory.

So for example, if you create a hash table with 10 buckets, it may be allotted something like this:

|Bucket Number   | Memory Address
|---|---|
| 0  |  1245027
| 1  |  1245028
| 2  |  1245029
| 3  |  1245030
| 4  |  1245031
| 5  |  1245032
| 6  |  1245033
| 7  |  1245034
| 8  |  1245035
| 9  |  1245036

### Altering the hash function
So how can we alter our hash function to make sure it returns a number between zero and our number of buckets? Luckily we can easily do this using modulo.

```js
const hash = (str, numberOfBuckets) => {
  let hashedVal = 0;
  str.split('').forEach((letter) => {
    hashedVal += letter.charCodeAt(0);
  })
  return hashedVal % numberOfBuckets;
}

hash('elephants', 10); //4
hash('platypus', 10); //8
hash('tapirs', 10); //9
hash('pandas', 10); //1
hash('birds', 10); //2
hash('cats', 10); //7
hash('tigers', 10); //4
hash('bears', 10); //5
hash('lions', 10); //9
hash('cheetahs', 10); //7
```

Notice how our hash function now only returns values between 0 and 10.

For example, if a zoo wanted to created a hash table to keep track of the count of each of the animals in their zoo, and the count of each animal was as follows:

```js
elephants: 9,
platypus: 20,
tapirs: 5,
pandas: 2,
birds: 250,
cats: 30,
tigers: 6,
bears: 25,
lions: 9,
cheetahs: 6
```

Each key/value pair would be allocated into the hash table as follows (according to the above hash function):

|Bucket Number   | Memory Address | Key | Value
|---|---|---|---|---|---|
| 0  |  1245027 | | |
| 1  |  1245028 | 'pandas' | 2
| 2  |  1245029 | 'birds' | 250
| 3  |  1245030 | | |
| 4  |  1245031 | 'elephants', 'tigers' | 9, 6
| 5  |  1245032 | 'bears' | 25
| 6  |  1245033 | | |
| 7  |  1245034 | 'cats', 'cheetahs' | 6
| 8  |  1245035 | 'platypus' | 20
| 9  |  1245036 | 'tapirs', 'lions' | 5, 9

For another example, here's a diagram of a hash table mapping for phone numbers:

![Hash](https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Hash_table_5_0_1_1_1_1_0_SP.svg/380px-Hash_table_5_0_1_1_1_1_0_SP.svg.png)

### Collisions
You may have noticed that two separate strings may sometimes get hashed to the same bucket. This is called a 'collision', and happens pretty often.

Linked lists are commonly used to handle collisions. A linked list is placed in each bucket, and if there are multiple values they are added as a new node at the end of the list.

Similarly, an array can be used, by having one array per bucket and pushing new values into the array.

### A Hash Table by any other name...

A Hash Table can also be referred to as:

* a map (or Hash Map)
* a dictionary

## JavaScript Hash Tables
There's no real reason to ever implement a hash table from scratch in JavaScript. JavaScript objects are built on top of hash tables, and abstract over them to make them easier to use.

We can get pretty much all of the benefits of a hash table by using object bracket notation. Using bracket notation we can dynamically set keys on an object to mimic a hash table.

```js
let countLetters = (str) => {
  let lettersMap = {};
  str.split('').forEach((letter) => {
    //if we don't have this letter stored in our hash map, we initialize it's count at 0
    if(!lettersMap[letter]) {
      lettersMap[letter] = 0;
    }
    //increment the letter count by 1
    lettersMap[letter]++;
  })
  return lettersMap;
}

countLetters('llama'); //{ l: 2, a: 2, m: 1 }
countLetters('apple'); //{ a: 1, p: 2, l: 1, e: 1 }
countLetters('banana'); //{ b: 1, a: 3, n: 2 }
```

This is very efficient with an O(n) runtime.



## Whiteboarding questions
1. Write a function that given an array of integers, i.e., [1, 1, 1, 1, 2, 2, 3,
	3, 5], will count and return how many times a given integer
	occurs,
	{1: 4, 2: 2, 3: 2, 5: 1}

  Your solution should be O(n).

1. Write a function that gets a string and determines if all the letters are unique.

  For example:
  'zebra' returns true,
  'llama' returns false,
  'bat' returns true,
  'elephant' returns false,

  Your solution should be O(n).

1. Given a block of text find the 5 most common words.

1. Given a string, find the first non-repeated character in the string.

1. Given two strings, check if they’re anagrams or not. Two strings are
anagrams if they are written using the same exact letters, ignoring
space, punctuation and capitalization. Each letter should have the
same count in both strings. For example, ‘eleven plus two’ and
‘twelve plus one’ are meaningful anagrams of each other.

# Resources
- [JavaScript Associative Arrays](http://www.i-programmer.info/programming/javascript/1441-javascript-data-structures-the-associative-array.html)
- [Understanding JavaScript Arrays](https://javascriptweblog.wordpress.com/2010/07/12/understanding-javascript-arrays/)
- [How Are Hash Tables Stored in Memory?](http://stackoverflow.com/questions/10894558/how-hashtable-and-hashmap-key-value-are-stored-in-the-memory)
- [What are Contiguous Arrays?](http://stackoverflow.com/questions/26998223/what-is-the-difference-between-contiguous-and-non-contiguous-arrays)
