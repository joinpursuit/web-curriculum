const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Playlist = require('../models/playlist-model');

//Song.sync will create the songs table
Playlist.sync({force: true})
.then(() => sequelizeConnection.sync())
//add the following three artists to the database:
.then((data) => Playlist.create(
  {title: 'Chill Jamz'}
))
.then((playlist) => {
  playlist.addSongs([1, 2, 3])
})
.then((data) => Playlist.create(
  {title: 'Hip Hop + R & B'}
))
.then((playlist) => {
  playlist.addSongs([1, 3])
})
.catch((err) => console.log(err));
