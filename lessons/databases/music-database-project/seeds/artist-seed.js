const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Artist = require('../models/artist-model');

//Artist.sync will create the artists table
Artist.sync({force: true})
//add the following three artists to the database:
.then(() => Artist.bulkCreate([
  {name: 'Frank Ocean'},
  {name: 'Odesza'},
  {name: 'Nas'},
]))
//the following artists should NOT be added to your database:
//(if your validations are setup correctly)
.then(() => Artist.bulkCreate([
  {name: ''},
  {name: ['artist1', 'artist2']},
], {validate: true}))
// if everything is correct, you should only have THREE artists in your database
.catch((err) => console.log(err));
