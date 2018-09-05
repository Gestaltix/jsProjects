// returns true if number is a power of two
function power2(n) {
    if (Math.log2(n) % 1 === 0) {
      return true;
    } else {
      return false
  }
}
console.log(power2(64));
