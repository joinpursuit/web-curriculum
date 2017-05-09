//Multiply array
const multArr = (arr) => {
    if(arr.length === 1) return arr[0];
    else return arr[0] * multArr(arr.slice(1));
}

console.log('multArr expect 27:', multArr([3, 3, 3]));
console.log('multArr expect 90:', multArr([3, 1, 3, 10]));

//concat arrays
const concatArr = (arr) => {
  if (arr.length === 1) return arr[0];
  else return arr[0] + ' ' + concatArr(arr.slice(1));
}

console.log("concatArr expect 'is it tomorrow':", concatArr(['is', 'it', 'tomorrow']));
console.log("concatArr expect 'or just the end of time':", concatArr(['or', 'just', 'the', 'end', 'of', 'time']));

//concat arrays using ES6 desctruturing
const concatArr = ([head, ...tail]) => {
  if (tail.length === 0) return head;
  else return head + ' ' + concatArr(tail);
}

//sum evens
const sumEvens = arr => {
  if (arr.length === 1) {
    return arr[0] % 2 === 0 ? arr[0] : 0;
  }
  else {
    var numToAdd = arr[0] % 2 === 0 ? arr[0] : 0;
    return numToAdd + sumEvens(arr.slice(1));
  }
}

console.log('sumEvens expects 6:', sumEvens([2, 3, 4, 5, 9]));
console.log('sumEvens expects 22:', sumEvens([2, 3, 10, 5, 10]));


//square and multiply
const squareAndMult = arr => {
  if(arr.length === 1) return arr[0] * arr[0];
  else return arr[0] * arr[0] * squareAndMult(arr.slice(1));
}

//square and multiply using ES6 desturcturing
const squareAndMult = ([head, ...tail]) => {
  if(tail.length === 0) return head * head;
  else return head * head * squareAndMult(tail);
}


//Range
const range = (num1, num2) => {
  if(num1 === num2) return [num2];
  else return [].concat([num1]).concat(range(num1 + 1, num2));
}

console.log(range(2, 10));

//Range w/ ES6 spread operator
const rangeSpread = (num1, num2) => {
  if(num1 === num2) return [num2];
  else return [num1, ...range(num1 + 1, num2)];
}

console.log(rangeSpread(1, 15));



//count the vowels
const countVowels = (str, obj = {'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0}) => {
  if(str.length === 0) return obj;
  if(obj[str.charAt(0)] !== undefined) obj[str.charAt(0)]++;
  return countVowels(str.slice(1), obj);
}

//add and mult
const addAndMult = (arr, obj = {'sum': 0, 'product': 1}) => {
  if(arr.length === 0) return obj;
  else {
    obj.sum += arr[0];
    obj.product *= arr[0];
  }
  return addAndMult(arr.slice(1), obj);
}

//sum evens ES6 desturcturing
const sumEvens = ([head, ...tail]) => {
  if (tail.length === 1) {
    return head % 2 === 0 ? head : 0;
  }
  else {
    var numToAdd = head % 2 === 0 ? head : 0;
    return numToAdd + sumEvens(tail);
  }
}
