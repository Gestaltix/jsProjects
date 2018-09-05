// converts a number of minutes into hours
function timeConversion(n) {
  if (n%60 === 0) {
    return (n/60) +':00';
  } else {
    var hours = 0;
    var remainder = n;
    for (var a = 1; a < n/60; a++) {
      remainder = remainder - 60
      hours = hours + 1
    }
    return hours + ':' + remainder;
  }
}
console.log(timeConversion(155));
