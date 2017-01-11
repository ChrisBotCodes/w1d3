function countIndex(string){
  var indexCount = {};
  for (var i = 0; i < string.length; i++) {
    if (indexCount[string[i]] === undefined) { //can write if (!indexCount[string[i]]) but our method is safer
      indexCount[string[i]] = [i];
    } else {
      indexCount[string[i]].push(i);
    }
  }
  return indexCount;
}
console.log(countIndex("lighthouse in the house"));