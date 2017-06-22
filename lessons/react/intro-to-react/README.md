# Objectives
- Describe React in 2-4 sentences and be able to discuss some pros and cons
- Create a simple, stateless component

# Intro to React
- [Intro To React Slides](https://slides.com/natemaddrey/intro-to-react/live#/)

# Components
Components are the fundamental building blocks of React apps. Let's take a look at how they're made:
![Lego Components](http://greenbuildingelements.com/wp-content/uploads/2015/06/LEGO-1.jpg)
## First Component
Components are the basic building blocks of React. Here's the simplest way to define a new component:

```js
var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
  render: function() {
    return (
      <h1>Hello World</h1>
    )
  }
});

ReactDOM.render(
  <HelloWorld />, document.getElementById('main')
)
```
Here's a slightly more complicated component, which contains multiple HTML elements:
```js
var React = require('react');
var ReactDOM = require('react-dom');

var GIFs = React.createClass({
  render: function() {
    return (
      <div>
      <h1>GIF Gallery:</h1>
        <img src="https://media.giphy.com/media/PZ0mCZOwWHSVi/giphy.gif"></img>
        <img src="https://media1.giphy.com/media/UkhHIZ37IDRGo/200.gif"></img>
      <div>
    )
  }
});

ReactDOM.render(
  <GIFs />, document.getElementById('main')
)
```

## Multiple components
Components can also be nested within eachother:
```js
var React = require('react');
var ReactDOM = require('react-dom');

var GifApp = React.createClass({
  render: function() {
    return (
      <div>
        <Title />
        <GifOne />
        <GifTwo />
      </div>
    )
  }
})
var Title = React.createClass({
  render: function() {
    return (
      <h1>GIF Gallery</h1>
    )
  }
});

var GifOne = React.createClass({
  render: function() {
    return (
      <img src="https://media1.giphy.com/media/UkhHIZ37IDRGo/200.gif"></img>
    )
  }
});

var GifTwo = React.createClass({
  render: function() {
    return (
      <img src="https://media.giphy.com/media/PZ0mCZOwWHSVi/giphy.gif"></img>
    )
  }
});

ReactDOM.render(
  <GifApp />, document.getElementById('root')
)
```
## Reusing components
Components can also be nested within eachother:
```js
var React = require('react');
var ReactDOM = require('react-dom');

var GifApp = React.createClass({
  render: function() {
    return (
      <div>
        <Title />
        <Gif gifSource="https://media1.giphy.com/media/UkhHIZ37IDRGo/200.gif" />
        <Gif gifSource="https://media.giphy.com/media/PZ0mCZOwWHSVi/giphy.gif" />
      </div>
    )
  }
})
var Title = React.createClass({
  render: function() {
    return (
      <h1>GIF Gallery</h1>
    )
  }
});

var Gif = React.createClass({
  render: function() {
    return (
      <img src={this.props.gifSource}></img>
    )
  }
});

ReactDOM.render(
  <GifApp />, document.getElementById('root')
)
```

## Project
[Store Listing App](../projects/store-listing/README.md)
