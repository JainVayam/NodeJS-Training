function printChecker() {
  var dictionary = { 
    i: 1, 
    like: 2, 
    samsung: 3, 
    mobile: 4, 
    cecream: 7, 
    mans: 8, 
    go: 9
  };
  var inputs = "cecream";
  var count = 0;
  var answer = "" ;
  for (var inputIndex = 0; inputIndex < inputs.length; inputIndex++) {
    for (var secondIndex = inputIndex; secondIndex < inputs.length; secondIndex++) {
      var selection = inputs.slice(inputIndex, secondIndex + 1);
      for (var key in dictionary) {
        if (key == selection) {
          answer = answer + selection;
          count = count + dictionary[key];
          break;
        } 
      }
      if (selection == key) {
        break;
      }
    }
    if (answer == inputs && answer.length == inputs.length) {
      break;
    }
  } 
  if (answer == inputs) {
    answer = "yes";
    console.log(count);
    console.log(answer);
  } else {
    answer = "no";
    console.log(answer);
    }
} 
printChecker();
