//returns the longest word in a string
function longestWord(string) {
  var split = string.split(' ')
  var solut = ''
  var solution = ''
  for (var a = 0; a < split.length; a++) {
    if (solut.length < split[a].length) {
      solut = split[a];
    } else if (solut.length === split[a].length) {
      if (solution === '') {
        solution = split[a];
      } else {
        solution = solution + ', ' + split[a];
      }
    } else {}
  }
  if (solut.length > solution.length) {
    return solut;
  } else {
    return solution;
  }
}
console.log(longestWord('This is an amazing test'));
