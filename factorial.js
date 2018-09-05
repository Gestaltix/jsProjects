// returns a factorial
function factorial(n) {
  var solut = 1;
  for (var a = 0; a < n; a++) {
    solut = solut * (a + 1);
  };
  return solut;
}
console.log(factorial(4));
