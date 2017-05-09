const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog-api');
const db = mongoose.connection;
const models = require('./models');
const Post = models.Post;
const Author = models.Author;

const posts = [
  {title: 'React is Awesome', body: 'React is the best. Heres why...', tags: ['react', 'javascript', 'frontend']},
  {title: 'jQuery 4ever', body: 'You think React is great? Heres why jQuery is all you need...', tags: ['react', 'javascript', 'jquery', 'frontend']},
  {title: 'The DOM Rocks', body: 'Heres why the DOM is better than React and jQuery combined', tags: ['DOM', 'javascript', 'frontend']},
  {title: 'Angular > Everything', body: 'Angular is the best framework for me...', tags: ['angular', 'javascript', 'frontend']},
  {title: 'React is the Future', body: 'Ten reasons why React is the future of JavaScript frameworks', tags: ['react', 'javascript', 'frontend']},
  {title: 'Express from the Beginning', body: 'Heres how to setup Express from scratch', tags: ['express', 'javascript', 'backend']},
  {title: 'SQL or NoSQL?', body: 'What type of database should you use?', tags: ['databases', 'backend']},
  {title: 'React, Angular, or Vue?', body: 'Comparison of top JavaScript frontend frameworks', tags: ['frameworks', 'javascript', 'frontend']},
  {title: 'Building an Express, React, Mongo, Node App', body: 'Heres a guide on getting your fullstack JavaScript app up and running', tags: ['javascript', 'fullstack']},
  {title: 'Realtime web with Socket.io and React', body: 'Info on how to get started with Socket.io and React', tags: ['react', 'javascript', 'frontend', 'socket.io']},
  {title: 'JavaScript on the backend with Node js', body: 'Node is a whole new world for JavaScript', tags: ['javascript', 'backend']},
  {title: 'Intro to JavaScript', body: 'Getting started with JavaScript', tags: ['javascript']},
];

const authors = [
  {name: 'Kendrick Shakur'},
  {name: 'Von Burgandy'},
  {name: 'LeBron Bryant'},
  {name: 'Leslie Swanson'},
  {name: 'Quatro Quatro'},
]

//First create authors
//Then take random author IDs, add them to posts, and create posts
db.on('open', () => {
  Author.create(authors, (err, data) => {
    const randomlyAddAuthorsToPosts = posts.map((post, indx) => Object.assign(post, {author: data[Math.floor(Math.random() * data.length)]._id}));
    if(err) console.log('Author Err!', err);
    else Post.create(randomlyAddAuthorsToPosts, (err, data) => {
        if(err) console.log('Author Err!', err);
        else {
          console.log('Posts created!', data);
          process.kill(0);
        }
    })
  });
});
