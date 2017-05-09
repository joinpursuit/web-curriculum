//1. write a function (or series of functions) that takes in an array that contains numbers, and returns the sum of all the even numbers
const filterEvens = arr => arr.filter(num => num % 2 === 0);
const sum = arr => arr.reduce((a, b) => a + b);

console.log(sum(filterEvens([1, 2, 3 ,4, 5])));

//2. write a function (or series of functions) that takes in an array that contains strings, and returns an array with the number of letters in each string

const letterCount = arr => arr.map(str => str.length);

console.log(letterCount(['this', 'is', 'a', 'test']));

//3. write a function (or series of functions) that takes in an array that can contain both words and numbers, and returns the sum of all the even numbers
const removeWith = arr => arr.filter(val => typeof val !== 'string');

console.log(sum(filterEvens(removeWords(['hey', 1, 'hi', 2, 'hello', 4]))))

//4. write a function (or series of functions) that takes in an array that an contain strings or numbers, and returns the sums of the length of all of the words (in other words, returns the sum of the total number of letters in all of the words combined)
const removeNumbers = arr => arr.filter(val => typeof val !== 'number');
console.log(sum(letterCount(removeNumbers(['this', 5, 'is', 7, 'a', 'longer', 10, 'array']))))


//5. write a function (or series of functions) that takes in an array of strings, and returns an object with the vowel count of all of the strings combined

const stringsToLetters = arr => arr.join('').split('');
const vowelCount = arr => arr.reduce((count, letter) => {
  if(count[letter] !== undefined) count[letter]++;
  return count;
}, {'a': 0, e: 0, i: 0, o: 0, u: 0});

console.log(vowelCount(stringsToLetters(['this', 'is', 'a', 'test'])));

//6. write a function (or series of functions) that takes in an array of numbers, and returns an object with a count of the number of even numbers and number of odd numbers in the array
const evenOddCount = arr => arr.reduce((count, num) => {
  count[num % 2 === 0 ? 'even' : 'odd']++;
  return count;
},{'even': 0, 'odd': 0})

console.log(evenOddCount([1, 2, 3, 4, 5]));

//7. write a function (or series of functions) that takes in an array of numbers, and returns an array of only the unique numbers

//8. write a function (or series of functions) that takes in a string of words, capitalizes the last letter of every word, removes any word that has an even amount of letters, and returns a string.
const removeValsWith()
