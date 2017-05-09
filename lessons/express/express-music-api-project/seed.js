'use strict';

const Sequelize = require('sequelize');
const sequelizeConnection = require('./db');
const Song = require('./models/song-model');
const Artist = require('./models/artist-model');

//create the artists table. using {force: true} will forcefully drop (aka delete) the artists table if it already exists
Artist.sync({force: true})
.then(() => {
  //create the songs table
  Song.sync({force: true});
})
.then(() => {
  //create all of the artists
  Artist.bulkCreate([
    {name: 'Frank Ocean'},
    {name: 'Odesza'},
    {name: 'Jungle'},
    {name: 'Chromeo'},
    {name: 'Nas'},
  ])
})
.then(() => {
  //find all of the newly created arists and return the results
  //(if we try to immediately return the artists after bulkCreate, the ids may all show up as 'null')
  return Artist.findAll()
})
.then((artists) => {
  //map the artists into an object that has artist name as key and artist id as values. this makes it a little easier to make sure we're getting the correct artist ids when we create new songs
  var artistIDsMap = Sequelize.Utils._.reduce(artists, (obj, artist) => Object.assign(obj, {[artist.dataValues.name]: artist.dataValues.id}), {});
  //create all of the songs
  return Song.bulkCreate([
    {
      title: 'Swim Good',
      artistId: artistIDsMap['Frank Ocean'],
      youtube_url: 'https://www.youtube.com/watch?v=PmN9rZW0HGo'
    },
    {
      title: 'Pyramids',
      artistId: artistIDsMap['Frank Ocean'],
      youtube_url: 'https://www.youtube.com/watch?v=UHy8hKXi2Pc'
    },
    {
      title: 'Sweet Life',
      artistId: artistIDsMap['Frank Ocean'],
      youtube_url: 'https://www.youtube.com/watch?v=xmhrohsNJ7Y'
    },
    {
      title: 'Time',
      artistId: artistIDsMap['Jungle'],
      youtube_url: 'https://www.youtube.com/watch?v=5ItKS8bUUTA'
    },
    {
      title: 'Busy Earnin',
      artistId: artistIDsMap['Jungle'],
      youtube_url: 'https://www.youtube.com/watch?v=BcsfftwLUf0'
    },
    {
      title: 'The Heat',
      artistId: artistIDsMap['Jungle'],
      youtube_url: 'https://www.youtube.com/watch?v=Y4UckOGdZtI'
    },
    {
      title: 'My Friends Never Die',
      artistId: artistIDsMap['Odesza'],
      youtube_url: 'https://www.youtube.com/watch?v=NyPtlOoCmV4'
    },
    {
      title: 'Bloom',
      artistId: artistIDsMap['Odesza'],
      youtube_url: 'https://www.youtube.com/watch?v=wuC1fHTnuJs'
    },
    {
      title: 'Kusanagi',
      artistId: artistIDsMap['Odesza'],
      youtube_url: 'https://www.youtube.com/watch?v=I2mK-Ql9r1Y'
    },
    {
      title: 'Old 45s',
      artistId: artistIDsMap['Chromeo'],
      youtube_url: 'https://www.youtube.com/watch?v=RY5lgaeki38'
    },
    {
      title: 'Jealous',
      artistId: artistIDsMap['Chromeo'],
      youtube_url: 'https://www.youtube.com/watch?v=RhmUnk454MA'
    },
    {
      title: 'Night by Night',
      artistId: artistIDsMap['Chromeo'],
      youtube_url: 'https://www.youtube.com/watch?v=6XCcWlgVqHA'
    },
    {
      title: 'The World Is Yours',
      artistId: artistIDsMap['Nas'],
      youtube_url: 'https://www.youtube.com/watch?v=e5PnuIRnJW8'
    },
    {
      title: 'If I Ruled The World',
      artistId: artistIDsMap['Nas'],
      youtube_url: 'https://www.youtube.com/watch?v=NW55FRXlPEs'
    },
    {
      title: 'NY State of Mind',
      artistId: artistIDsMap['Nas'],
      youtube_url: 'https://www.youtube.com/watch?v=UKjj4hk0pV4'
    }
  ])
})
.then((data) => {
  if(data) console.log('Database seed successful!');
})
.catch((err) => {
  if(err) console.error('Seed error!', err);
});
