function frequencyCounter(character) {
  var input = "asdwqdaabbwwddssafhjkls";
  var frequency = {}; 
  for (var index = 0; index < input.length; index++) {
    var char = input[index];     
    if (frequency[char] == undefined) {
      frequency[char] = 1;
    } else {
      frequency[char] = frequency[char] + 1;
      }
  }
  for (var key in frequency) {
    console.log(key + " : " + frequency[key]);
  }
}
frequencyCounter("asdwgdfaadwasfge");

