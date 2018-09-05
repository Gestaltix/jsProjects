//returns true if there are any z's up to three letters after any a's
function nearAZ(string) {
  for (var a = 0; a < string.length; a++) {
    if (string[a] === 'a') {
      for (var b = (a + 1); b < (a + 3); b++) {
        if (string[b] === 'z') {
          return true;
        } else {}
      }
    } else {
      return false;
    }
  }
}
console.log(nearAZ('abbbz'));
