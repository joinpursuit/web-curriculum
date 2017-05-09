- author: lev@c4q.nyc
- language: javascript
- topics: node

### A Personal Site with Node Server
For this project you are given a node server that handles a personal website. This is the directory structure (folders are in bold):
- server.js
- `website`:
  - index.html
  - 1.html
  - `js` :
    - index.js
    - 1.js
  - `css`:
    - index.css
    - 1.css  


The code for the server is inside the file 'server.js'. When the server is running and you navigate to http://localhost:8000/, The server registers a 'GET' request where the url is `/`. On this request the server sends back the file `index.html` inside the `website` folder. For any other url, the server returns the corresponding file, if that file exists.

Try naviagting around the site while following the messages in the terminal where node is running. For the homepage,   the server registers requests for `index.html`, and also for `index.js` and `index.css`, which are referenced from the html file:
```
<link rel="stylesheet" href="css/index.css">
<script src="js/index.js" defer>
```
On registering the request, the server sends these files to the client.

### Instructions
1. Change the file name for `1.html`, `1.css`, `1.js` to `about.html`, `about.css`, `about.js`. Also change the links in the html files.
2. Create html, css, and javascript files for `my favorite films`: `films.html`. `films.css`, `films.js`. Make sure the new page has the same navigation links on the top as the other pages. Make your `films.js` file log a message to the console once the page loads.
3. Currently, when asking for a file that does not exist, you will see an error in your terminal:
```
{ [Error: ENOENT: no such file or directory, open 'website/films.html']
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: 'website/films.html' }
```
However, there is no error being sent back to the client. The browser would keep waiting for a response and give up eventually. Find a way, when the file is not found, to return the file `404.html` to the client. There are multiple ways to accomplish this. You may try and use the command [fs.access](https://nodejs.org/api/fs.html#fs_fs_access_path_mode_callback) which will return an error if the file cannot be found. In case there is no error, return the `404.html` page. If there is no error, call the `sendFile` function. 
4. Finally, fill in the content of the html pages in any way you like.
