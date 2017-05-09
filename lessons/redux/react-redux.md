# Japanese Restaurant

## Overview
We're going to create a little menu application that adds an emoji onto the page whenever we click a button.

## React-Redux
### Why?
Redux's native getState, dispatch, and subscribe methods work fine with simple apps, but as you start adding more components things start getting a little messy. 'react-redux' is a separate module that makes connecting your React components to your Redux store even simpler. Redux is actually not specific to React: it is most commonly used with React, but you can use it with other frameworks like Angular, or even just with plain vanilla JavaScript. Because of this, there is a separate module to connect and optimize Redux for usage with React (and there are other, completely separate libraries for connecting it to other frameworks).

### What?
'react-redux' is a pretty simple module that really only contains two main parts: provider and connect.

provider basically lets you pass in your store to your parent, app component. It then uses React context to magically make your store available to all of your other components. This makes it easy to access your app's state from any component, without needing to import the store in separately to each individual component.

The connect method lets you connect your individual components directly to Redux, which basically lets access certain parts of your app's state as props on that individual component. In other words, it lets you choose which parts of the state you need for each of your specific components, and gives you an easy way of accessing that state by making them available through that component's props.

### <Provider>
Provider is a component that wraps around the most upper-level parent component of your app. You can then pass in your store directly to the Provider component as a prop. The Provider component then uses React context to pass down the store to every other component in your app.
```js
//Note: this example assumes that you used Redux's 'createStore' method to create a store, and saved it in a 'store' variable.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

### Stateless React Components
Since the Redux store is one big state for React, there is no need to establish state within components. Instead, we can have stateless React components that render props passed down from Redux.
```js
//without the ES6 arrow function
function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}

ReactDOM.render(
  <Greeting name="Sebastian" />,
  document.getElementById('example')
);

//with the ES6 arrow function
const Greeting = (props) => (
  <h1>Hello, {props.name}</h1>
);

ReactDOM.render(
  <Greeting name="Sebastian" />,
  document.getElementById('example')
);
```

### mapStateToProps()

### connect(...)
The connect function is used to connect individual components to Redux. You pass in your component to connect as an argument, and it will basically return a new component that you can use elsewhere in your app.

connect also takes one additional required argument: a function called mapStateToProps. mapStateToProps takes in your app's state as an argument (which is available because it is passed down through the Provider) and lets you selectively choose which parts of the state you want to make available to your component as props.
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

### mapDispatchToProps()
## Instructions
### Step 1 - Store
Create your store! Within the `store.js` file in the frontend folder, import the createStore function from the redux library. Create a constant `Store` by passing a reducer to the `createStore` function. Export the constant.

### Step 2 - Actions & Action Creators
Actions are POJOs(Plain Old JavaScript Objects) with a type property or key and a payload. But to easily access the objects, you'll want to wrap the Actions in an Action Creator function.

```js
export const ADD_SOMETHING = "ADD_SOMETHING";

export const addSomething = () => ({
  type: ADD_SOMETHING,
  thing: "SOME"
})
```
**you might ask "Charles why not just use regular variables?!" Google it.**

### Step 3 - Reducer
The actions you just created will be provided to the reducer using the store's dispatch function. The reducer receives two arguments: theOldState and an action. You need to use the information within the action to return a new state.
```js
const _defaultState = {
  things: []
}

const reducer = (oldState = _defaultState, action) => {
  switch(action.type) {
    case ADD_SOMETHING:
      return {
        things: [
          ...oldState.things,
          action.thing
        ]
      };
    case CLEAR:
      return _defaultState;
    default:
      return oldState;
  }
}
```

### Step 4 - entry.js
We have our standard React functions happening - an App React component and a ReactDOM.render function. But two things might be noticeably different. We have a `<Provider />` and a `<Container />`.
```js
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import Container from './components/container';

const App = () => (
	<Provider store={store}>
		<Container />
	</Provider>
);

document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(
		<App />,
		document.getElementById('root')
	);
});
```
### Step 5 - Provider
The `<Provider>` component passes down the store as a prop. You have to import it from the react-redux module. It also has to wrap your entire application.

### Step 6 - Container
[From the creator of Redux](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.9t5eklfqp) <br />
The Container is the link between Redux and React. Redux has the store, while React has the ability to display information.

|          | Presentational | Container |
|---------------|---------------|---------------|
| Purpose | How things look (markup, styles) | How things work (data fetching, state updates) |
| Aware of Redux | No | Yes |
| To Read Data | Read data from `props`| Subscribe to Redux state |   
| To Change Data | Invoke callbacks from `props` | Dispatch Redux actions |
| Are Written | By hand | Generated by `React-Redux` `connect()` |

### Step 7 - connect(...)
The `.connect()` function is what is called curried function. It accepts arguments in sequence.
```js
fn(arg1, arg2)
fn(arg1)(arg2) //curried function
```
Anyways, the `.connect()` function has a function as its first argument. This first argument is called `mapStatetoProps`. It accepts the state as its own argument and returns specific parts of the Redux store to be given to the React component as props.
```js
const mapStateToProps = state => ({
  things: state.things
});

export default connect(
  mapStateToProps
)(Component);
```

### Step 8 - Component
Our Component now has access to the parts of the state through the connect function.
```js
const Component = props => (
  <div>
    {props.things}
  </div>
)
```

### Step 9 - Challenge
When you click on an emoji, remove it from the page cuz you've just eaten it!
