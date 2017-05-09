# Redux Part Two: react-redux
## Table of Contents
1. [Why react-redux?](#why-react-redux)
2. [What is react-redux?](#what-is-react-redux)
3. [How to use react-redux?](#how-to-use-react-redux)
  - [Installing react-redux](#installing-react-redux)
  - [Provider](#provider)
  - [Connect](#connect)
4. [Resources](#resources)

# Why react-redux?
Redux's native `getState`, `dispatch`, and `subscribe` methods work fine with simple apps, but as you start adding more components things start getting a little messy. 'react-redux' is a separate module that makes connecting your React components to your Redux store even simpler. Redux is actually not specific to React: it is most commonly used with React, but you can use it with other frameworks like Angular, or even just with plain vanilla JavaScript. Because of this, there is a separate module to connect and optimize Redux for usage with React (and there are other, completely separate libraries for connecting it to other frameworks).

# What is react-redux?
'react-redux' is a pretty simple module that really only contains two main parts: `provider` and `connect`.

`provider` basically lets you pass in your store to your parent, app component. It then uses React context to magically make your store available to all of your other components. This makes it easy to access your app's state from any component, without needing to import the store in separately to each individual component.

The `connect` method lets you connect your individual components directly to Redux, which basically lets access certain parts of your app's state as props on that individual component. In other words, it lets you choose which parts of the state you need for each of your specific components, and gives you an easy way of accessing that state by making them available through that component's props.

# How to use react-redux
## Installing react-redux
To install react-redux you simply need to 'npm install react-redux'. Similar to Redux, you'll typically import in react-redux functions one at a time, since react-redux is a fairly small library (there are really only two main functions). For example, using ES6 modules, you can install the react-redux `provider` component like so: `import {Provider} from 'react-redux';` or the `connect` function as follows: `import {connect} from 'react-redux';`

Let's take a look at each part one at a time:

## Provider
`Provider` is a component that wraps around the most upper-level parent component of your app. You can then pass in your store directly to the `Provider` component as a prop. The `Provider` component then uses React context to pass down the store to every other component in your app. Here is an example of how to use the `Provider` component:

```js
//Note: this example assumes that you used Redux's 'createStore' method to create a store, and saved it in a 'store' variable.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

## Connect
The `connect` function is used to connect individual components to Redux. You pass in your component to `connect` as an argument, and it will basically return a new component that you can use elsewhere in your app.

`connect` also takes one additional required argument: a function called `mapStateToProps`. `mapStateToProps` takes in your app's state as an argument (which is available because it is passed down through the `Provider`) and lets you selectively choose which parts of the state you want to make available to your component as props. Let's take a look at an example of `connect` in action:

```js
import React from 'react';
import {connect} from 'react-redux';

var TodoList = React.createClass({
  render: function() {
    return (
      //The below 'todos' props is available because of the mapStateToProps function. These todos are not being passed down through any parent component; instead, they are being passed directly from the store.
      <ul>
        {this.props.todos.map((todo, indx) => <li key={indx}>{todo}</li>)}
      </ul>
    )
  }
});

//mapStateToProps takes two arguments: the first is state (which is passed down from the store, through the Provider). The second is 'ownProps', which just makes sure that the component still has access to any props that are passed down normally through a parent component.
const mapStateToProps = (state, ownProps) =>  {
  //The properties that you return here determine what your props are called within your component. In this case, we are returning 'todos', which is why our todos are accessible through 'this.props.todos' within our 'TodoList' component. However we can call them whatever we want: if we instead did the following: `return {puppyBowl: state.todos}`, our data would then be accessible in our component as 'this.props.puppyBowl' instead of 'this.props.todos'.
  return {todos: state.todos};
}

//Here's where we're using the actual connect method. Note that the arguments are passed in two separate sets of parenthesis. 'connect' basically takes 'mapStateToProps' as an argument, then  returns a new function which takes your component as an argument. This new function is then immediately invoked, and returns the fully connected component.
const TodoListConnected = connect(mapStateToProps)(TodoList);

export default TodoListConnected;
```

Connecting our components to our store in this way lets us directly access state through prop, so we do not even need to pass down our props to parent components:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

let store = createStore();

const App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Todos:</h1>
        <TodoList />
      </div>
    )
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

# Resources
- [Official Redux Documentation](http://redux.js.org/docs/basics/UsageWithReact.html)
- [Getting Started With React Redux: An Intro](https://www.codementor.io/reactjs/tutorial/intro-to-react-redux-pros)
