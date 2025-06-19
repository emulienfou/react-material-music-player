var shuffle = function (array) {
  var newArray = array.slice();
  for (var i = 0; i < Math.ceil(array.length / 2); i++) {
    var randIndex1 = Math.round(Math.random() * (array.length - 1));
    var randIndex2 = Math.round(Math.random() * (array.length - 1));
    var temp = newArray[randIndex1];
    newArray[randIndex1] = newArray[randIndex2];
    newArray[randIndex2] = temp;
  }
  return newArray;
};
export default shuffle;
//# sourceMappingURL=shuffle.js.map
