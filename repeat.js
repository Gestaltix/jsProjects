// repeats a sting a number of times
function repeat(string,n) {
  var solut = string;
  if (n > 0) {
    for (var a = 0; a < n; a++) {
      solut = solut + ' ' + string;
    }
    return solut;
  } else if (n === 0) {
    return solut;
  } else {
    return '';
  }
}
console.log(repeat('hello', 9));
