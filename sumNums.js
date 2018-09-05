// returns the sum of all numbers from 1 to n
function sumNums(n) {
  var solut = 0
  for (var a = 1; a <= n; a++) {
    solut += a;
  }
  return solut;
}
console.log(sumNums(7));
