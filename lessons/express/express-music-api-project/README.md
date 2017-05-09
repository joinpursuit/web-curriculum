# Music API
Your goal is to build a music API using youtube links. Your API should have the below endpoints and simple user interface:

## Setup:
- fork and clone this repo
- download [Postico](https://eggerapps.at/postico/) or [pgAdmin](https://www.pgadmin.org/) if you haven't already
- make sure [Postgres.app](http://postgresapp.com/) is open and running in the background
- use either Postico or pgAdmin to create a new database called 'music-db'
- run `npm install` from your terminal (make sure you `cd` into the correct directory first)
- in the `db.js` file, there's a string that's being passed in as an argument to `Sequelize`. In that string, change 'natemaddrey' to your username (the exact username you use for your computer)
- run `node seed.js` from your terminal to setup the database
- start the app by running `npm start` (see the  `package.json` file for the exact 'start' script)
- test the app using [Postman](https://www.getpostman.com/)

## API Endpoints:
Edit the `server.js` file to create an api with the following endpoints:

1. `/api/songs` GET all songs
1. `/api/songs/id/:id` GET specific song by id   
  - [Express params docs - Read the 'Route Parameters section'](https://expressjs.com/en/guide/routing.html)
  - [Sequelize 'find' docs](http://docs.sequelizejs.com/en/latest/docs/models-usage/#find-search-for-one-specific-element-in-the-database)
  - [Sequelize 'where' docs](http://docs.sequelizejs.com/en/latest/docs/querying/#where)
1. `/api/songs/name/:name` GET specific song by name  
1. `/api/songs/sort/by-date` GET all songs and order by date created
  - [Sequelize Ordering Docs](http://docs.sequelizejs.com/en/latest/docs/querying/#ordering)
1. `api/songs/sort/a-z` GET all songs sorted alphabetically by title
1. `api/songs/count` GET the count of the number of songs in the database
  - [Sequelize count docs](http://docs.sequelizejs.com/en/latest/docs/models-usage/#count-count-the-occurrences-of-elements-in-the-database)
1. `api/songs/first-five` GET the first five songs, ordered by date created. You should return exactly five songs.
  - [Sequelize 'limit' docs](http://docs.sequelizejs.com/en/latest/docs/models-usage/#manipulating-the-dataset-with-limit-offset-order-and-group)
1. `/api/artists` GET all artists
1. `/api/artists/sort/a-z` GET all artists sorted alphabetically  
1. `/api/artists/id/:id` GET specific artist by id
1. `/api/artists/name/:name` GET specific artist by name
1. `/api/artists/no-jungle` GET all artists except for 'Jungle'
  - [Sequelize complex filtering](http://docs.sequelizejs.com/en/latest/docs/models-usage/#complex-filtering-or-not-queries)
1. `/api/songs-with-artists` GET all songs with artist fully populated (in other words, the full artist information should be displayed, including artist name and id)
  - [Sequelize Relations/Assocations (aka JOIN queries)](http://docs.sequelizejs.com/en/latest/docs/querying/#relations-associations)
  - [How to Make Join Queries in Sequelize](http://stackoverflow.com/questions/20460270/how-to-make-join-querys-using-sequelize-in-nodejs)
1. go back and refactor all of your previous endpoints to include the full artist info
1. `/api/artists/frank-or-chromeo` GET all songs where the artist is either 'Frank Ocean' OR 'Chromeo'
  - [Sequelize complex filtering](http://docs.sequelizejs.com/en/latest/docs/models-usage/#complex-filtering-or-not-queries)
1. `/api/artists` POST (aka create) a new artist
  - [Sequelize 'create' docs](http://docs.sequelizejs.com/en/v3/docs/instances/#creating-persistent-instances)
1. `/api/artists/:id` DELETE an artist
  - [Sequelize 'delete' docs](http://docs.sequelizejs.com/en/v3/docs/instances/#destroying-deleting-persistent-instances)
1. `/api/artists/:id` PUT (update) an artist
  - [Sequelize 'updating' docs](http://docs.sequelizejs.com/en/v3/docs/instances/#updating-saving-persisting-an-instance)
1. `/api/songs` POST a new song. The song should have an id for its artist as the 'artistId' field. In other words, if I created I have a 'Frank Ocean' entry in my 'artists' table that has an id of '1', a new Frank Ocean song would look like `{title: 'Sweet Life', artistId: 1}`. You should use `findOrCreate`to either find or create the artist, then use the id from that artist when you're creating your song:
    - [Sequelize 'findOrCreate' docs](http://docs.sequelizejs.com/en/latest/docs/models-usage/#findorcreate-search-for-a-specific-element-or-create-it-if-not-available)

## User Interface:
1. Edit the `script` tag in the 'all-artists.html' page (in the 'views' folder) to do the following: When you go to 'localhost:8888/view/all-artists' in your browser (the route is already set up for you in the server.js file), the page should display all the artists in your database as a list. You should only edit the `script` tag (and not the actual HTML). You can use either native DOM methods or jQuery.
1. Edit the `script` tag in the 'all-songs.html' page (in the 'views' folder) to do the following: When you go to 'localhost:8888/view/all-songs' in your browser (the route is already set up for you in the server.js file), the page should display all the songs in your database as a list. The list should show artist, title, and youtube link (for example, Frank Ocean - Pyramids [YouTube Link](https://www.youtube.com/watch?v=UHy8hKXi2Pc)). You should only edit the `script` tag (and not the actual HTML). You can use either native DOM methods or jQuery.
1. Edit the `script` tag in the 'artists-search.html' page (in the 'views' folder) to do the following: When you go to 'localhost:8888/view/artists-search' in your browser (the route is already set up for you in the server.js file) and type something into the input box and hit enter, you should get all the songs by the artist that you typed into the input box, and display the songs in a list on the page. For example, if you type 'Frank Ocean' into the input box and hit enter, you should see a list of all of Frank Ocean's songs as a result. Your list should include both title and artist. You should only edit the `script` tag (and not the actual HTML). You can use either native DOM methods or jQuery.
1. Edit the `script` tag in the 'youtube-search.html' page (in the 'views' folder) to do the following: When you go to 'localhost:8888/view/youtube-search' in your browser and you type something into the input box and hit enter, you should make an AJAX request to the YouTube API to search for video titles that match the input text. Display the search results on your page. You just need to display the title, not the actual video.
  - [YouTube API Docs: Search](https://developers.google.com/youtube/v3/docs/search/list)
  - [Code Examples of YouTube Search API](https://developers.google.com/youtube/v3/sample_requests#search)
1. add a '+' button to your list of youtube search results (in other words, each youtube video title in the search results should have a '+' button next to it). When you click the '+' button that specific song should be added to your database as a new song.

## Bonuses:
- on the 'all-songs' page embed the youtube videos along with the search results (in other words, instead of just the link, embed the entire video)
- refactor your API to use express router
  - [Express Router Docs](http://expressjs.com/en/api.html#router)
  - [Learn to Use Express Router](https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4)
