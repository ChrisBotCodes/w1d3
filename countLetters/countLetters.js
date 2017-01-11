function countLetters(string){
  var string = string.split(' ').join('');
  // console.log(string);
  var letterCount = {};
  for (var i = 0; i < string.length; i++) {
    if (letterCount[string[i]] === undefined) {
      letterCount[string[i]] = 1;
    } else {
      letterCount[string[i]] += 1;
    }
  }
  return letterCount;
}

console.log(countLetters("lighthouse in the house"));