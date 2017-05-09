## Objectives
- Understand the difference between React Router and server side Routing
- Be able to build a three page app (with static pages) using React router

## Resources
- [Beginner's Guide to React Router](https://medium.com/@dabit3/beginner-s-guide-to-react-router-53094349669#.ut0ardwf9)
- [Leveling Up With React: React Router](https://css-tricks.com/learning-react-router/)
- [Index Routes Guide](https://github.com/ReactTraining/react-router/blob/master/docs/guides/IndexRoutes.md)
- [Component Children (this.props.children)](http://buildwithreact.com/article/component-children)

## Basic Routing
```js
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';

var Home = React.createClass({
  render: function() {
    return (
      <h1>Home</h1>
    )
  }
});

var PageOne = React.createClass({
  render: function() {
    return (
      <h1>Page One</h1>
    )
  }
});

var PageTwo = React.createClass({
  render: function() {
    return (
      <h1>Page Two</h1>
    )
  }
});

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Home} />
    <Route path='/page-one' component={PageOne} />
    <Route path='/page-two'  component={PageTwo} />
  </Router>,
  document.getElementById('root')
);

```
## IndexRoute
```js
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Welcome to the app</h1>
        {this.props.children}
      </div>
    )
  }
});

var Home = React.createClass({
  render: function() {
    return (
      <h1>Home page</h1>
    )
  }
});

var PageOne = React.createClass({
  render: function() {
    return (
      <h1>Page One</h1>
    )
  }
});

var PageTwo = React.createClass({
  render: function() {
    return (
      <h1>Page Two</h1>
    )
  }
});

var NotFound = React.createClass({
  render: function() {
    return (
      <h1>404</h1>
    )
  }
});

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/page-one' component={PageOne} />
      <Route path='/page-two'  component={PageTwo} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>,
  document.getElementById('root')
);
```


## Navbar Example
```js
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    )
  }
});

var Nav = React.createClass({
  render: function() {
    return (
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/page-one'>Page One</Link></li>
          <li><Link to='/page-two'>Page Two</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
});

var PageOne = React.createClass({
  render: function() {
    return (
      <h1>Page One</h1>
    )
  }
});

var PageTwo = React.createClass({
  render: function() {
    return (
      <h1>Page Two</h1>
    )
  }
});

var NotFound = React.createClass({
  render: function() {
    return (
      <h1>404</h1>
    )
  }
});

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/page-one' component={PageOne} />
      <Route path='/page-two'  component={PageTwo} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>,
  document.getElementById('root')
);

```
