function outer() {
  var num = 100;
  function inner() {
    var num = 200;
  }
}

outer();

document.querySelector('.scope').addEventListener('click', outer);
