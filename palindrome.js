// returns true if string is a palindrome
function palindrome(string) {
  var solut = ''
  for(var x = 0; x < string.length; x++) {
    solut = string[x] + solut;
  }
  if (solut === string) {
    return true
  } else {
    return false
  }
}
console.log(palindrome('three'));
