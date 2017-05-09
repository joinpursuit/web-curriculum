const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Genre = require('../models/genre-model');

//Genre.sync will create the genres table
Genre.sync({force: true})
//add the following three genres to the database:
.then(() => Genre.bulkCreate([
  {title: 'hip hop'},
  {title: 'electronic'},
  {title: 'r & b'},
], {validate: true}))
//the following genres should NOT be added to your database:
//(if your validations are setup correctly)
.then(() => Genre.create({title: ''}))
.then(() => Genre.create({title: ['genre1', 'genre2']}))
// if everything is correct, you should only have THREE genres in your database
.catch((err) => console.log(err));
