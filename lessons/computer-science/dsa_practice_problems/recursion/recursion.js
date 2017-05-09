function recursiveMultiply(a, b) {
  if (b === 0) {
    return 1
  } else {
    return a * recursiveMultiply(a, b - 1)
  }
}

function sumNat(n) {
  if (n === 0) {
    return 0
  } else {
    return n + sumNat(n - 1)
  }
}
