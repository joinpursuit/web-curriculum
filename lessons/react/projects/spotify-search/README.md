# Spotify Search App
We'll be building a simple Spotify search app using React. The app should have a text input box. When you type something into the input box and hit submit your app should make an AJAX call to the Spotify API, then display the results on your page as a playlist.

When you're done it should look something like this:
![completed](http://i.imgur.com/uEMldHP.png)

## Setup
- Clone the [simple-react-setup](https://github.com/nmadd/simple-react-setup) scaffolding to setup a new React project
- Change the name of simple-react-setup to "react-spotify-search"

## Instructions
Your app should contain the following components:
- An `App` component in your `App.js` file. This component will eventually contain all of our other components. It will also be our only component that has state.
- A `Song` component. This component should display individual songs, and should include things like the title, artist, and album image.
- A `Playlist` component, that should contain and display all of your songs.
- A `SongsSearch` component that contains an input box and a 'submit' button. When you type something into the search box and hit submit, your app should make an AJAX call to the Spotify API and perform a search based on your input. Read over the [Spotify search documentation](https://developer.spotify.com/web-api/search-item/) for info on how to make the call/  

## Bonus
- Use the HTML [audio](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio) tag to make your songs play.
