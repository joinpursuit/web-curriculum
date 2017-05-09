
# Intro to Authentication (with Sessions and Cookies)
## Goals
- Be able to answer 'what is a session?'
- Be able to answer 'what are cookies and how are they typically used?'
- Understand basic authentication flow
- Setup basic user authentication using `express-session`

## Sessions

A browser 'session' is basically the time a user spends browsing a web site or app during one sitting. A session starts when a user first visits the site, and ends when they leave. It's basically impossible to tell the exact length of a session because it's hard to tell exactly when a user stops using their computer or phone. Browsers will typically automatically end a session if the user has been inactive for over 30 minutes. Sessions will also automatically end if the user quits their browser.

When a user first connects, a session ID is typically created for the user and stored in the browser. Your browser will use this ID to track specific sessions.

Sessions are good for tracking user activity during one sitting. But how can we make data persist between sessions to keep people logged in over a long period of time, or save info in case the browser crashes?

## Cookies

Cookies are small files (usually around 4kb or less) that hold a small amount of data (like a username or id) in the browser.

Cookies were invented to solve the problem "how to remember information about the user". They work hand in hand with your server and get sent back and forth with HTTP requests. Since they are saved in your browser (which saves them in the file system on your computer) they persist over time and will not be effected by things like browsers quits or crashes.

Cookies are typically saved as simple key-value pairs. Cookies will usually save simple ways to identify the user, like a name, or unique id.

For example:

```js
username = John Snow
```

When a browser requests a page from the server, the cookies will be included as part of the http request.

You can create cookies using JavaScript by using the `document.cookie` property. `document.cookie` is a property available through the DOM, similar to `document.getElementById` and other DOM methods and properties.

For example:

```js
document.cookie = "username=John Snow";
```

You can also include an expiration date for cookies:

```js
document.cookie = "username=John Snow; expires=Thu, 18 Dec 2020 12:00:00 UTC";
```

However, you should never really directly manipulate cookies like this as there are much easier and safer libraries that abstract over DOM cookie methods.

![cookie auth](http://robmclarty.com/system/pictures/sources/65/flow-cookie-session_large.jpg?1450223782)

## Basic Authentication Flow
1. CLIENT: user types in username/password into form `then` send `post` request with login info
1. SERVER: using the form data, find or create the user and verify password `then` attach username or id to session property on request object
1. CLIENT: when app is first loaded, send an AJAX request (request will now have session info attached) to see if there is a username or id attached to the session
1. SERVER: if there is saved user info, respond with full user info

![traditional auth flow](https://cdn.auth0.com/blog/cookies-vs-tokens/cookie-token-auth.png)

## Simple User Login Using Sessions
Here are steps to creating a basic sessions and cookies based login using Express and React:
- Create a 'user' model in the backend (users should have at least a username and password)
- Sync User to create users table
- Create a 'login' form React component
- Install ['express-session'](https://www.npmjs.com/package/express-session)
- Setup `session` middleware for all routes (to attach `.session` property to all requests)
- Create a '/login' express route. You should make an AJAX call to this route when a user enters login information into your 'login' React component. When you hit this route, it should find or create a user, verify their password, and attach their user info to the `req.session` object (for example, `req.session.username`)
- Create an '/auth' express route. This should check if there is user info attached to the `req` object. If there is, it should save that user info in your front end state. This route should be AJAX called when your app is first loaded (for example, in `componentDidMount` in your root `App.jxs` component)

## Resources
- [W3 What are Cookies?](http://www.w3schools.com/js/js_cookies.asp)
- [Stackoverflow: What are sessions and how do they work?](http://stackoverflow.com/questions/3804209/what-are-sessions-how-do-they-work)
- [What are cookies?](http://www.whatarecookies.com/)
- [What do cookies do?](http://www.webopedia.com/DidYouKnow/Internet/all_about_cookies.asp)
- [All You Ever Wanted to Know about Node.js Sessions](https://stormpath.com/blog/everything-you-ever-wanted-to-know-about-node-dot-js-sessions)
- [Cookies vs Tokens](https://auth0.com/blog/cookies-vs-tokens-definitive-guide/)
- [express-session middleware](https://www.npmjs.com/package/express-session)
- [express-session github](https://github.com/expressjs/session)
- [A very basic authentication system with express-session](http://www.codexpedia.com/node-js/a-very-basic-session-auth-in-node-js-with-express-js/)
- [What is a JSON Web Token](http://blog.myplanet.com/what-is-a-json-web-token)
