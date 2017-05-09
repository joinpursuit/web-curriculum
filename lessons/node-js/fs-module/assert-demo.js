var assert = require('assert');

function add(a, b) {
  return a + b;
}


assert.equal(add(1,2), 3);
assert.equal(add(1,2), 5);
