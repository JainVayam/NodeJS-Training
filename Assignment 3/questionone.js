function secondHighest(inptArray) {
  var largest, secondLargest = 0;
  largest = inptArray[0];
  for (var index = 0; index < inptArray.length; index++) {
    if (inptArray[index] > largest) {
      secondLargest = largest;
      largest = inptArray[index];
    }
  }
  return secondLargest;
}
var input = [40, 100, 1, 5, 25, 10]; 
console.log(secondHighest(input));
