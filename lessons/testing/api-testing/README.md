# Setup
- fork and clone this repo
- `npm install`
- make sure postgres.app is open and running in the background
- open postico and create a new database called 'testing-db'
- in the `db.js` file be sure to change the username in the sequelize connection string to your username
- run your tests by running `mocha` from the command line

# Docs
- [Superagent Docs](http://visionmedia.github.io/superagent/#test-documentation)
- [Supertest Response Properties](http://visionmedia.github.io/superagent/#response-properties)
- [Chai Cheatsheet](http://ricostacruz.com/cheatsheets/chai.html)

# Part 1: User Tests
1. In the `user-tests.js` file, write the following five tests. Complete all five BEFORE you start creating any of the actual api routes in your server.js file. The first one is provided for you as an example:
  - `/users` GET all users (this test is already provided for you as an example)
  - `/users/:id` GET individual user by id
  - `/users/:username` GET individual user by username
  - `/users/sort/a-z` GET users sorted a-z by username
  - `/users` POST a new user
1. AFTER you've created all five tests, start adding the api endpoints in your server.js file. Add each route one at a time, and run your mocha tests after you create each individual route. You can run the tests by running `mocha` from the command line

# Part 2: Song Tests
1. create a Song model in the `song-model.js` file in the models folder that has the following fields:
  - artist
  - title
  - userId (this should be created by making an association with the User model, in order to keep track of which user submits which song)
1. In the `song-tests.js` file, write the following five tests. Complete all five BEFORE you start creating any of the actual api routes in your server.js file:
  - `/songs` GET all songs
  - `/songs/:id` GET individual song by id
  - `/songs/:title` GET individual song by title
  - `/songs/sort/z-a` GET songs sorted a-z by artist
  - `/songs` POST a new song
1. AFTER you've created all five tests, start adding the api endpoints in your server.js file. Add each route one at a time, and run your mocha tests after you create each individual route. You can run the tests by running `mocha` from the command line

# Part 3: Playlist App Tests
Add API route tests to your playlist app (or another project of your choice)
