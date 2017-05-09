var sum = function(x, y) {
  return (++x) + (++y.val)
}

a = 1

b = {val: 2}

c = sum(a, b)

console.log(`a:${a} b:${b.val} c:${c}`)
