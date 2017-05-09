# Blog API 
## Setup
- fork and clone this repo
- npm install
- run `node seed.js` from the command line to setup your database (you'll need to have `mongod` running in the background)
-  to remove data from your database, run `mongo` from the command line, then `use blog-api`. run `db.posts.remove()` to remove all posts, or `db.authors.remove()` to remove all authors. You can always run `node seed.js` again to re-seed the database
- download [Postman](https://www.getpostman.com/) if you haven't already. It will be helpful for testing your api

## API Endpoints
Create an api with the following endpoints:

- `/api/posts` get all blog posts
- `/api/posts/:id` get specific blog post (by id)   
  - [Express params docs - Read the 'Route Parameters section'](https://expressjs.com/en/guide/routing.html)
  - [Mongoose 'findById' docs](http://mongoosejs.com/docs/api.html#model_Model.findById)
- `/api/posts/sort/by-date` get all blog posts and order by date
  - [Mongoose Sort Docs](http://mongoosejs.com/docs/api.html#query_Query-sort)
  - [How to Sort By Date in Mongoose](http://stackoverflow.com/questions/5825520/in-mongoose-how-do-i-sort-by-date-node-js)
- `api/posts/sort/a-z` get all blog posts sorted alphabetically by title
- `/api/authors` get all authors
- `/api/authors/sort/a-z` get all authors sorted alphabetically  
- `/api/authors/:id` get specific author (by id)
- `/api/posts/tags/react` get all blog posts that have a 'react' tag
  - [Mongoose Finding in Array](http://stackoverflow.com/questions/18148166/find-document-with-array-that-contains-a-specific-value)
- `/api/posts-with-authors` get all posts with author fully populated (in other words, the full author information should be displayed, including author name and id)
  - [Mongoose 'population' docs](http://mongoosejs.com/docs/populate.html)
- `/api/posts` POST a new blog post
- `/api/posts/:id` DELETE a blog post
  - [Mongoose remove Docs](http://mongoosejs.com/docs/api.html#query_Query-remove)
- `/api/posts/:id` PUT (update) a blog post
  - [Mongoose findOneAndUpdate docs](http://mongoosejs.com/docs/api.html#query_Query-findOneAndUpdate)

## Bonuses
- refactor your routes to use express router
  - [Express Router Docs](http://expressjs.com/en/api.html#router)
  - [Learn to Use Express Router](https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4)
- Create a 'tag search' field. add an index.html file with a text input box. When you type something into the input box and hit 'Submit', your API should search all your posts for any posts that have a tag that matches the input text
-  create a 'text search' field. add an index.html file with a text input box. When you type something into the input box and hit 'Submit', your API should search all your posts' bodies for any posts that contain the search word anywhere in their body. In other words, if you type in 'JavaScript' your should get a response will all posts that contain the word 'JavaScript' anywhere in the body
