# Music Database
This time we'll be creating a music database from the ground up. You'll need to create the models for songs, artists, genres, and playlist, and then create an API with endpoints to access all of that data.

## Setup
- fork and clone this repo
- make sure Postgres.app is open and running in the background
- in Postico, create a new database called 'music-db'
- `npm install`
- run `npm start` to start the app

## Models
Edit the files in the 'models' folder to create the following models.

You can find [documentation on creating models in Sequelize here](http://docs.sequelizejs.com/en/latest/docs/models-definition/).

You'll need to build in validations for most of the models...you can find [Sequelize validation docs here](http://docs.sequelizejs.com/en/latest/docs/models-definition/#validations).

Once you have created the models you can test them by running the model's specific seed file, which you can find in the 'seeds' folder. Run the seed file by running `node ./seeds/<name-of-file>` from the terminal.

Each of the following models should include the specific fields (for example, Artist needs a 'name', Song needs a 'title' and 'youtube_url', etc) but feel free to include your own fields as well:

1. Artist
  - name
    - type: string
    - validations: length must be between 1 and 100 characters

1. Genre
  - title
    - type: string
    - validations: length must be between 1 and 100 characters

1. Song:
  - title
    - type: string
    - validations: length must be between 1 and 250 characters
  - youtube_url
    - type: string
    - validations: must be url format, length must be between 1 and 50   characters
  - Song should also have an 'artistId' field that references the Artist table. However you should NOT manually add the 'artistId' field. Instead, it should be created automatically using associations (aka joins). For the artistId, you can use the 'belongsTo' method:
    - [Sequelize belongsTo documentation](http://docs.sequelizejs.com/en/latest/docs/associations/#belongsto)
  - Song should also have multiple genres. To add genres to a song we'll need to reference ids from the 'genres' table. Similarly, you should NOT manually add the genres field; we'll use an association (aka) join to automatically create it. However, in this instance, the join is a little more complicated, because we are going to need to create a 'many to many' relationship (in other words, each song can have multiple genres, and each genre can be on multiple songs). To do this we'll need to use the 'belongsToMany' method:
    - [Sequelize belongsToMany documentation](http://docs.sequelizejs.com/en/latest/docs/associations/#belongs-to-many-associations)
    <br />
    <br />
    Here's an example of how you could do a many to many relationship if you were creating a model for a todos list that had a many to many relationship with tags. You need to add both add Tag to Todo and Todo to Tag. You also need to pass in a second argument, which is an object that has a 'through' property. 'through' lets you define the name of a new table that will automatically be created. In this instance, a join table called 'todo_tags' will be automatically be created that will had ids from both Todo and Tag:    
    ```js
    Todo.belongsToMany(Tag, { through: 'todo_tags'});
    Tag.belongsToMany(Todo, { through: 'todo_tags'});
    ```
1. Playlist
  - title
    - type: string
    - validations: length must be between 1 and 100 characters
  - Playlist should also have multiple songs. To add songs to a playlist we'll need to reference ids from the 'genres' table. Similarly, you should NOT manually add the songs field; we'll use an association (aka) join to automatically create it. This is also a 'many to many' relationship (in other words, each playlist can have multiple songs, and each songs can be on multiple playlists). To do this we'll need to use more 'belongsToMany' methods.
1. **Bonus:** create any other models that you think would be helpful to have

## API Endpoints
Now that your models are built, edit the `server.js` file to add the following API endpoints:

1. `/api/artists` GET all artists, ordered a-z
1. `/api/artists/:id` GET a specific artist by id
1. `/api/artists/` POST (create) a new artist
1. `/api/artists/:id` DELETE an artist by id
1. `/api/artists/:id/:newName` PUT (update) a specific artist's name
1. `/api/songs` GET all songs with genre and artist information fully populated (in other words, should say full artist name and genre names, instead of only having the ids)
1. `/api/songs/:id` GET specific song by id
1. `/api/songs` POST (create) a new song
  - To add in the genres you will need to use a special 'accessor' method. That Sequelize automatically creates. Checkout the [following Sequelize docs](http://docs.sequelizejs.com/en/latest/docs/associations/?highlight=accessor%20methods#one-to-many-associations) and look at the 'getUsers', 'setUsers', 'addUser', 'addProject', 'setProject', 'getProject', etc. examples. These methods are all automatically created and will be named according to the name of your models. You can also see the `song-seed.js` file for a code example of one of these methods in use. Note that when you call the methods you have to use them on the individual songs (aka instances) and not on the model itsel.
1. `/api/songs/:id/:newTitle` PUT (update) a specific song's title
1. `/api/songs/:id` DELETE a specific song by id
1. `/api/playlists` GET all playlists with song information fully populated (in other words, should say full song, artist, and genre names, instead of only having the ids)
1. `/api/playlists/:id` GET a specific playlist by id
1. `/api/playlists` POST (create) a new playlist
  - You will also have to use a special 'accessor' method here to add in the songs
1. `/api/playlists/:id` DELETE a playlist by id
1. `/api/genres` GET all genres, ordered a-z
1. `/api/genres/:id` GET a specific genre by id
1. `/api/genres` POST (create) a new genre
1. `/api/genres/:id/:newGenre` PUT (update) a specific genre's name
