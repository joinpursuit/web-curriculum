var mkdirp = require('mkdirp');

// mkdirp('/maze-1/foo/bar/baz', function (err) {
//     if (err) console.error(err)
//     else console.log('pow!')
// });

var path = '';
for(var i = 0; i < 111; i++) {
  var randoNum = Math.floor(Math.random() * 1000);
  path += '/';
  path += randoNum.toString();
}
console.log(path);
var mazePath = './maze-1' + path;
mkdirp(mazePath, function (err) {
    if (err) console.error(err)
    else console.log('pow!')
});
