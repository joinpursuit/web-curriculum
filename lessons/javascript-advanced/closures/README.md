# Closures

## Objectives
Students will be able to write functions that include closures and be able to describe the different variable scopes closures have access to. 

## Resources
[Private Variables](http://javascript.crockford.com/private.html) <br>
[JavaScript is Sexy](http://javascriptissexy.com/understand-javascript-closures-with-ease/)
[Fun Office Example](https://medium.com/written-in-code/practical-uses-for-closures-c65640ae7304?swoff=true#.k7llhs28l)

## Scope
A function has access to variables that were either defined in the arguments, locally declared, or declared when the function was first defined.

```js
function inspiration(author, quote, times) {
  function printQuote() {
    console.log(quote)
  }
  function printAuthor() {
    console.log("-" + author)
  }

  for (var i = 0; i < times; i++) {
    printQuote()
    printAuthor()
  }
}

inspiration('Kurt Vonnegut', 'So it goes', 4)
```
The functions `printQuote` and `printAuthor` functions are examples of closures since they have access to variables that were defined in the arguments of their parent function. Anything inside the code block for `inspiration` has access to the variables: `author`, `quote`, and `times`.

```js
function excite(str, n) {
  function exclaim() {
    str += '!'
  }

  for (let i = 0; i < n; i++) {
    exclaim()
  }

  return str
}
```
In this example, the `exclaim` function is modifying the `str` variable. Closures can change variables defined outside of their own local scope.

## Basic Examples of a Closure
```js
function printCost(item, cost) {
  var output = " costs $"
  function makeCost() {
    return item + output + cost
  }

  return makeCost()
}
```

```js
function makeMilkShake(firstIngredient) {
  function shake(secondIngredient) {
    return firstIngredient + ' and ' + secondIngredient
  }

  return shake
}
```

## Private Variables
```js
function grade() {
  var score = 95
  return {
    increase: function(pts) {
      score += pts
    },
    decrease: function(pts) {
      score -= pts
    },
    getScore: function() {
      return score
    }
  }
}

var goodGrade = grade()
```

## [Mailing a package example](https://medium.freecodecamp.com/javascript-closures-explained-by-mailing-a-package-4f23e9885039#.fqccgyy9q)
