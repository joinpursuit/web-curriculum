# React Component Lifecycle Methods

## Objectives
Students will be able to use the lifecycle methods like `componentDidMount` and `componentWillMount`.
Students will be able to construct forms in React.

## getInitialState
This function is invoked once before the first render of the React component. The return value is stored in the state of the React component and can be accessed using `this.state` within the React component.

## render
The render is automatically called once when the React component is created and placed on the page. It is also called every time its React component has its state changed through `this.setState()`

## componentWillMount
This function is called right before the first render of the React component.

## componentDidMount
This function is called right after the first render of the React component.

## Example
```js
var Russia = React.createClass({
  getInitialState() {
    return ({info: null})
  },
  componentDidMount() {
    var that = this
    $.ajax({
      url: "https://restcountries.eu/rest/v1/name/russia?fullText=true",
      success: function(data) {
        that.setState({info: data[0].borders})
      }
    })
  },
  render() {
    if(this.state.info) {
      var list = this.state.info
      return (<ul>{list}</ul>)
    } else {
      return (<div>Loading...</div>)
    }
  }
})

ReactDOM.render(
  <Russia />,
  document.getElementById("root")
)

```

## Props and State
A React component can have information stored in either its state or its props. Props can be passed to React components when they are created as attributes.
```js
var children = [{name: "Charles", age: 25}, {name: "Jennifer", age: 32}]
var Parent = React.createClass({
  render() {
    return (
      <div>
        <Child bio={children[0]}/>
        <Child bio={children[1]}>
      </div>
    )
  }
})
```

# React Forms
## Synthetic Events
[Documentation](https://facebook.github.io/react/docs/events.html) <br>
React has built-in event keywords that add Event Listeners to components.
```js
var Demo = React.createClass({
  render() {
    return(
      <form onSubmit={someFunction}></form>
    )
  }
})
```
The code above is equivalent to `$(form).addEventListener('submit', someFunction)`
<br><br>
In jQuery we used a funky `.serializeArray()` function to draw out the values of input fields in a form. In React, we store the values of form inputs in the component's state. We implement this through a `onChange` synthetic event.
```js
getInitialState: function() {
  return {value: 'country name'};
},
handleChange: function(e) {
  this.setState({value: e.target.value});
},
render: function() {
  return (
    <input
      type="text"
      value={this.state.value}
      onChange={this.handleChange}
    />
  );
}
```
Every time the input changes, the state is updated through the `handleChange` event.

# Exercises
To practice React, we are going to redo some exercises we've done in the past.
* Country and Neighbors App from the previous exam
* Google Maps API
* Grocery List
* Rijksmuseum API
* To-Do List
* Weather
* Congress Person
* Currency Converter
