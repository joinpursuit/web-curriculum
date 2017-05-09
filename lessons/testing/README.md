# Testing
## Intro
- The basic idea behind testing is to write a piece of code that will call a function or API route with an expected result, and compare the expected result to the actual result.
- To write tests, you generally need a testing framework, which is basically a framework that 'runs' (aka executes) your tests
  - there are a [bunch of JS testing frameworks](http://stackoverflow.com/questions/4308786/what-is-the-best-testing-framework-to-use-with-node-js) but we're going to use [Mocha](https://mochajs.org/)
- You also need a way of writing 'assertions' (also called 'epectations'). Assertions are basically pieces of code that specify what the expected result of a function or API call will be
  - there are also a bunch of JS assertion libraries, but we'll be using [Chai](http://chaijs.com/)
- Test Driven Development (often called 'TDD') is the idea of writing tests before you write your actual code
- There are [many different ways to test your code](http://stackoverflow.com/questions/437897/what-are-unit-testing-and-integration-testing-and-what-other-types-of-testing-s), but we are going to focus on 'unit tests', which basically means 'testing the smallest isolatable unit of an application'
- **Discussion:** how much of your code should you write tests for?

## Warmup
1. Start by reading the following article: [Getting started with Mocha/Chai Testing](http://ricostacruz.com/til/get-started-with-mocha)
1. Setup a new repo and create a `test/my_test.js` file, similar to the example in the article
1. Experiment and add more tests in your `my_test.js` file. Look over the below docs for more info on more things you can do
1. As you experiment, try to answer the following questions:
  - how is 'it' used in Chai?
  - what is 'describe'?
  - what is 'before and beforeEach'?
  - what is the difference between 'expect' and 'assert'?
  - what happens when you run `mocha -R nyan` from the command line?

## Docs
- [Mocha Docs](https://mochajs.org/)
- [Chai docs](http://chaijs.com/)
- [Chai Cheatsheet](http://ricostacruz.com/cheatsheets/chai.html)

## Exercises
Complete the following exercises to practice TDD:

1. [Testing number and strings functions](https://github.com/C4Q/numbers-and-strings-testing)
1. [Testing an API](https://github.com/C4Q/api-testing)

## Other Resources
- [What's the difference between assertion library, testing framework?](http://stackoverflow.com/questions/25678063/whats-the-difference-between-assertion-library-testing-framework-and-testing-e)
- [Getting started with Mocha/Chai Testing](http://ricostacruz.com/til/get-started-with-mocha)
- [JS Assertion Libraries](http://stackoverflow.com/questions/10472152/standalone-assertion-libraries)
- [Stop unit testing database code](https://blog.jooq.org/2014/06/26/stop-unit-testing-database-code/)
- [Superagent Docs](http://visionmedia.github.io/superagent/#test-documentation)
- [Supertest Response Properties](http://visionmedia.github.io/superagent/#response-properties)
