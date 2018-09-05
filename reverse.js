// reverses a string
function reverse(string) {
  var solut = ''
  for(var x = 0; x < string.length; x++) {
    solut = string[x] + solut;
  }
  return solut;
}
console.log(reverse('life is good'));
