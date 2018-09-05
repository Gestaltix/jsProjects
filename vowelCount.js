// counts the number of vowels in a string
function vowelCount(string) {
  var solut = 0
  for (var a = 0; a < string.length; a++) {
    if (string[a] === 'a'
    || string[a] === 'e'
    || string[a] === 'i'
    || string[a] === 'o'
    || string[a] === 'u') {
      solut += 1;
    } else {}
  }
  return solut;
}
console.log(vowelCount('alphabet'));
