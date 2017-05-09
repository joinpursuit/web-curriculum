#Objectives
- Be able to build basic children components that get properties passed down from parent components
- Understand how data flows down from parents to children components

# ES6 Importing and Exporting
- [Intro to ES6 Modules](http://wesbos.com/javascript-modules/)

# Props
You can use props to share information between components. Properties of parent components can be accessed by child components using the special `this.props` property:
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
You can map over state to get props more dynamically:
```js
var React = require('react');
var ReactDOM = require('react-dom');

var data = {GIFs: ["https://media1.giphy.com/media/UkhHIZ37IDRGo/200.gif", "https://media.giphy.com/media/PZ0mCZOwWHSVi/giphy.gif", "https://media2.giphy.com/media/6vWVzDv19i3MQ/200.gif"]};

var GifApp = React.createClass({
  getInitialState: function(){
    return data;
  },
  render: function() {
    return (
      <div>
        <Title />
        {this.state.GIFs.map(function(gifSrc){
          return <Gif gifSource={gifSrc} />
        })}
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
You can also pass functions down through props:
```js
var React = require('react');
var ReactDOM = require('react-dom');

var data = {GIFs: ["https://media1.giphy.com/media/UkhHIZ37IDRGo/200.gif", "https://media.giphy.com/media/PZ0mCZOwWHSVi/giphy.gif", "https://media2.giphy.com/media/6vWVzDv19i3MQ/200.gif"]};

var GifApp = React.createClass({
  getInitialState: function(){
    return data;
  },
  addPuppyGif: function() {
    this.setState({GIFs: this.state.GIFs.concat(["http://i.giphy.com/3o6ZtaO9BZHcOjmErm.gif"])})
  },
  render: function() {
    return (
      <div>
        <Title />
        <AddGif handler={this.addPuppyGif} text="Add a puppy gif!" />
        {this.state.GIFs.map(function(gifSrc){
          return <Gif gifSource={gifSrc} />
        })}
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
      <div>
        <img src={this.props.gifSource}></img>
      </div>
    )
  }
});

var AddGif = React.createClass({
  render: function() {
    return (
      <button onClick={this.props.handler}>{this.props.text}</button>
    )
  }
});

ReactDOM.render(
  <GifApp />, document.getElementById('root')
)
```
