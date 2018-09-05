// returns true if a string starts with 'Java'
function sWJ(string) {
  var solut = string.split('');
  var solution = solut[0] + solut[1] + solut[2] + solut[3];
  if (solution === 'Java') {
    return true;
  } else {
    return false;
  }
return solution;
}
console.log(sWJ('Javascript'));
