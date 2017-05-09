let dog = {
  woof: function() {
    console.log('woof')
  },
  woofAlot: function() {
    [1, 2, 3].forEach(this.woof)
  }
}

dog.woof()
dog.woofAlot()





Function.prototype.call
Function.prototype.apply
Function.prototype.bind
