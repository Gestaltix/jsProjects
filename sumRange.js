// returns  the sum of all numbers between n and n2
function addAll(n,n2) {
  solut = 0
  if (n < n2) {
    for (n; n < n2; n++) {
      solut += n;
    }
    solut += n2;
  } else if (n > n2) {
    for (n2; n2 < n; n2++) {
      solut += n2;
    }
    solut += n
  } else {
    solut = n + n2;
  }
  return solut;
}
console.log(addAll(23,23));
