# RESTful APIs

## REALLY GOOD ARTICLE
[Scotch.io](https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4)

## RESTful?!
CRUD|HTTP Verb
:---------|:---
Create|POST
Read|GET
Update|PUT
Destroy|DELETE

## Express Router
Route | Verb | Action
:-----|:-----|:------
/api/students	|GET|	Get all students.
/api/students	|POST|	Create one student.
/api/students/:student_id	|GET|	Get student with student_id.
/api/students/:student_id	|PUT|	Update student with student_id..
/api/students/:student_id	|DELETE|	Delete student with student_id.


## Whiteboarding Problems
### Question 1
Find the greater product that can be made from three elements in an array.
```js
highThree([1, 2, 3, 4, 5, 6, 7]) // returns 5 * 6 * 7
highThree([13, 8, 2, 14, 24, 59]) // returns 14 * 24 * 59
```
**Challenge: handles negative numbers...**
```js
highThree([-8, 5, 2, 8, 10]) // returns 5 * 8 * 10
highThree([-9, 3, 5, -6, 7]) // returns 7 * -9 * -6
```

### Question 2
Write a function that receives a string and an index of an opening parentheses within that string and returns the position of the corresponding closing parentheses.
```js
findClose('(Don’t (let the noise of others’) opinions) drown (out) your own (inner voice).', 50) // returns 54
```
