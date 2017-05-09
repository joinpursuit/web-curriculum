function closeIt() {
  var nums = [1, 2, 3, 4, 5];
  return function logIt() {
    nums.forEach(console.log)
  }
}

var callIt = closeIt();

document.querySelector('.closure').addEventListener('click', callIt);
