const express = require('express');
const app = express();
const User = require('./models/user-model');

app.get('/', (req, res) => {
  res.send('hello world!');
});

app.get('/users', (req, res) => {
  User.findAll()
  .then((data) => {
    res.send(data);
  })
});


module.exports = app;
