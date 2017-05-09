var fs = require('fs');
//
// // function cb(err, data) {
// //   if (err) throw err;
// //   console.log(data);
// // }
// fs.readFile('test.js', function(err, data) {
//   if (err) throw err;
//   var text = data.toString();
//   fs.writeFile('message.txt', 'copy and paste the lyrics', function(err) {
//     if (err) throw err;
//     console.log('It\'s saved!');
//   });
// });
//
// // fs.readdir('.', function(err, data){
// //   if(err) console.log('Error!', err);
// //   console.log(data);
// // });
//
// //Without a callback
// // fs.mkdir('new-repo');
//
// // for(var i = 0; i < 5; i++){
// //   fs.mkdir('new-repo');
// // }
//
// //Removing folders
// // for(var i = 0; i < 100; i++){
// //   fs.mkdir('new-repo-' + i);
// // }
//
// // for(var i = 0; i < 100; i++){
// //   fs.rmdir('new-repo-' + i);
// // }
// //With a callback
// // fs.rmdir('another-new-repo', function(err, data){
// //   if(err) console.log('Error!', err);
// //   console.log('Deleted another new repo!')
// // });
// //With a callback
// // fs.mkdir('another-new-repo', function(){
// //   console.log('Created another new repo!')
// // });
//
// // var text = 'This is some text that we saved in a variable';
// //
//
//
// // fs.writeFile('new-file.js', 'Will this be in the file?');
//
// // fs.rename('not-a-new-file.js', 'new-file.js');
//
// function logDirName() {
//   console.log(__dirname);
// }
//
// logDirName();
//
// fs.watch('new-file.js', function(eventType, filename){
//   console.log(eventType + ' in ' + filename);
//   fs.readFile('new-file.js', function(err, data) {
//     if (err) throw err;
//     var text = data.toString();
//     fs.writeFile('change-log.txt', text, function(err) {
//       if (err) throw err;
//       console.log('It\'s saved!');
//     });
//   });
// })


// fs.readFile('text-1.txt', function(err, data){
//   var fullText = '';
//   fullText += data.toString();
//   fs.readFile('text-2.txt', function(err, data){
//     fullText += data.toString();
//     fs.writeFile('text-3.txt', fullText);
//   })
// })

// fs.readFile('text-1.txt', function(err, data){
//   if(err) {
//     console.log('There was an error');
//   } else {
//     console.log(data.toString());
//   }
// })

// for(var i = 0; i < 100; i++) {
//   fs.rename('text-1.txt', i + 'new-text-1.txt');
// }

fs.readdir('.', function(err, data) {
  console.log(data)
  data.filter(function(){

  })
})
