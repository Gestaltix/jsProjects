// returns the largest of each array
function largestOfArrays(array) {
  var solution = [];
  var solut = 0;
  var innerArray = [];
  for(var a = 0; a < array.length; a++) {
    solut = 0;
    innerArray = array[a];
    for(var b = 0; b < innerArray.length; b++) {
      if(solut < innerArray[b]) {
        solut = innerArray[b];
      } else {}
    }
    solution.push(solut);
  }
  return solution;
}
console.log(largestOfArrays([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
