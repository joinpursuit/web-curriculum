const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Artist = require('./artist-model');

// create the Song model
var Song = sequelizeConnection.define('song', {
  title: {type: Sequelize.STRING},
  youtube_url: {type: Sequelize.STRING}
});

//joining Song and Artist tables. this will aumatically add an 'artistId' field to the songs table
//see the docs for more info: http://docs.sequelizejs.com/en/latest/docs/associations/
Song.belongsTo(Artist);
//there are a few other ways we can do this:
// Song.belongsTo(Artist); // artistId will be added to Song model
// Song.hasOne(Artist); //songId will be added on Artist model
// Song.hasMany(Artist, {as: 'Artists'}); //songIds will be added to Artist

module.exports = Song;
