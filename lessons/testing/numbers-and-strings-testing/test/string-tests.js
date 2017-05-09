const expect = require('chai').expect;
const capitalize = require('../js/strings-funcs').capitalize;

describe('strings tests', () => {
  it('capitalize() mshould capitalize all letters in a string', () => {
    var result1 = capitalize('hello');
    var result2 = capitalize('world');
    expect(result1).equal('HELLO');
    expect(result2).equal('WORLD');
  });
  //Add more tests here:
});
