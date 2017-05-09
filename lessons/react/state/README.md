
## Setup
You can get the React libraries through npm.
```
$ npm install
```
You can also link to them using script tags.
```html
<script src="https://fb.me/react-0.14.2.js"></script>
<script src="https://fb.me/react-dom-0.14.2.js"></script>
```

## `React.createElement()`
[Documentation](https://facebook.github.io/react/docs/top-level-api.html#react.createelement) <br>
`React.createElement()` uses JavaScript to construct HTML. The first argument specifies the HTML tag you want to create. The second argument is an object that contains attribute/value pairs for the HTML tag. The third argument is the content or children within the HTML tag you're creating
```js
React.createElement('div', {id: 'greet'}, 'Hello World!'),
```
The above code produces the following HTML.
```html
<div id='greet'>Hello World</div>
```

## `ReactDOM.render()`
[Documentation](https://facebook.github.io/react/blog/2015/10/01/react-render-and-top-level-api.html) <br>
The code below will take the first argument(React component) and insert it into the second argument(HTML element) with the id `content`.
```js
ReactDOM.render(
    React.createElement('div', {}, 'Hello World!'),
    document.getElementById('content')
);
```
Another example -
```js
ReactDOM.render(
  <div className="GoT">Winter is Coming.</div>,
  document.body
);

ReactDOM.render(
  React.createElement(
    'div',
    { className: 'GoT' },
    'Winter is Coming.'
  ),
  document.body
);
```

## `React.createClass()`
The `createClass()` function constructs a React **component**. You are required to pass the function an object with the property `render` whose value is a function that return a React element or component.
```js
var funny = React.createClass({
  render: function() {
    return (
    React.createElement('div', {},
      React.createElement(
        'button',
        {className: `seinfeld`},
        "these pretzels are making me thirsty"
      )
    )
   );
  }
});
```
You can insert the components you construct into the `.createElement()` function.
```js
ReactDOM.render(
  React.createElement(funny, {}, ""),
  document.getElementById('content')
);
```

## `getInitialState()`
React components have a state that stores information that can be accessed in their `.render()` function.
```js
const funny = React.createClass({
  getInitialState() {
    return {quote: 'these pretzels are making me thirsty'};
  },
  render() {
    return (
      React.createElement('div', {},
        this.state.quote
      )
    );
  }
});
```

## `setState()`
Within a React component, you can include a function `setState` that changes the state of the component and immediately calls the render function to display the state change.
```js
ReactDOM.render(
  React.createElement(counter, {}, ""),
  document.getElementById('content')
);

const counter= React.createClass({
  getInitialState() {
    return {num: 0};
  },
  addOne() {
    this.setState({num: this.state.num + 1})
  },
  render() {
    return (
      React.createElement('div', {onclick: addOne},
        this.state.num
      )
    );
  }
});
```
