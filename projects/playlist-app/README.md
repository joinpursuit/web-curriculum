# Playlist App
Your goal will be to build a simple playlist app that lets you see a list of all playlists, select an individual playlist and play it, and create a new playlist.

Use your music database + API as a backend for this app. We will pick up where we left off and start adding a frontend using React to create a truly fullstack app.

## Goal
You'll need to create the following features. It is up to you how many components you want to break up each feature into (for example, should you have a separate component for Song? Genre?):

- **Navbar**:
<br/>
You should have a navbar that is visible on every page. Your Navbar should have the following links:
  - Artists
  - Songs
  - Playlists
  - Create Playlist
- **Artists Page**:
<br/>
Displays a list of all of your artists.
- **Songs Page**:
<br/>
Displays all of your songs. Each song should have a title, artist, and youtube embed. You can create a song by using the following iFrame embed in your jsx. You will need to change the 'localhost:9999' part of the `src` string to match whatever port you're using to host your app:
```html
<iframe id="ytplayer" type="text/html" width="640" height="360"
src={`${this.props.song.youtube_url.replace('watch?v=', 'embed/')}?origin=http://localhost:9999.com`}></iframe>
```
To make this work as is, you would need to pass in a 'song' prop to this component. The 'song' prop should have a 'youtube_url' property that holds a youtube link. Or, you could refactor this if you'd like to structure your props differently.
The '.replace' method is used to replace 'watch' with 'embed', which is needed to embed youtube vids.
- **Playlists Page**:
<br/>
Displays all of your playlists by title. It should only display the title of each playlist, not the full song listing. When you click on a playlist title it should take you to the individual playlist page for that particular playlist.  
- **Individual Playlist Page:**:
<br/>
This page should display an individual playlist. Each playlist should have a title, songs (with title and artist), youtube embed, creation date, and a list of the genres that the playlist includes. You should only be able to reach an individual playlist page by first going to the 'Playlists' page.
- **Create Playlist Page**:
<br/>
A 'create a playlist' component that has a form that lets you submit a new playlist. You should be able to create the playlist title and add new songs to the playlist. When you add a new song you should have a form that lets you add song name, title, and youtube link. You can also optionally have a field to add genres (although this will be a little more complicated).
<br/>
<br/>
To get the youtube urls, you can either copy and paste the urls from youtube, or use the YouTube search API to add new songs. You may want to start by copying and pasting in order to test a basic setup, but in the long run you will want your users to have some way to search for youtube urls from within your own app.
<br/>
<br/>
To do this, you should have a 'YouTube song search' input box - when you type something into it and hit enter, you should make an AJAX call to YouTube's API to search for that song. You should then show a list of the search results on your page with a '+' button next to each song. If you click the '+' button that specific song url should be added to your new song.
<br/>
<br/>
  - [YouTube Search API Docs](https://developers.google.com/youtube/v3/docs/search/list)

## Bonuses:
- Make your songs play continuously. You'll probably want to refactor to use this [react-youtube npm module](https://github.com/troybetz/react-youtube) or something similar, in order to make controlling audio playback easier. You can even make your own custom youtube player react component using the YouTube iframe API.
- Create a 'playbar' at the bottom of your page that displays the currently playing song and youtube embed. Your playbar should be visible on every page, similar to your navbar. it should play the song continuously, so if you switch back and forth between pages your song will keep playing without interruption. You should also refactor your playlist pages to remove the youtube embeds, since you can now just display the currently playing video in the playbar.
- Add basic playback controls to the playbar (for example, play, pause, skip a song, go back a song).

## Setup
- `npm i --save react react-dom react-router babel-core babel-loader babel-preset-react babel-preset-es2015  webpack webpack-livereload-plugin jquery`
- Setup a webpack file:

```js
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: ["./front/App.jsx"],
  output: {
    path: __dirname + "/front/bundle",
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", ".jsx" ]
  },
  plugins: [
    new LiveReloadPlugin()
  ]
};
```
- edit the 'start' script in your `package.json` file to be: `"webpack --watch & nodemon server.js"`
- create a 'front' directory that has an `App.jsx` file, `index.html` file, and empty 'bundle' folder.
- Add the following into your `index.html` file:
```html
<head>
  <script src='/bundle.js' defer></script>
</head>
<body>
  <div id='app'>
  </div>
</body>
```
- Import React and ReactDOM into your `App.jsx` file and call a `ReactDOM.render()` using 'app' as the element id to attach your rendered component to.
- Add the following into your `server.js` file. Make sure you put it at the BEGINNING of your  `server.js` file, before all of your API routes:
```js
app.use(express.static(path.join(__dirname, '/front/bundle')));
```
this will statically serve up your `bundle` folder which will allow your `index.html` file to link to your `bundle.js` file.
- updated your `app.get('/')` router in your server to be a catchall (aka add a `*`). Make sure you put it AFTER (at the end) of all your API routes:
```js
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/front/index.html'));
});
```
this will basically make your express server send back your React frontend app (which is loaded when you send `index.html`) whenever anyone navigates to any URL that's not caught by your API.
