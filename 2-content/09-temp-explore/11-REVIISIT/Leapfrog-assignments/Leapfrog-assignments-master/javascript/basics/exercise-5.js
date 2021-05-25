console.log('Assignment - 5: Sort Array of Objects by a Given Key');

var arr = [
  {
    id: 1,
    name: 'John',
  },
  {
    id: 2,
    name: 'Mary',
  },
  {
    id: 3,
    name: 'Andrew',
  },
];

function sortBy(array, key) {
  var tempArray = array.slice();

  for (var i = 0; i < tempArray.length; i++) {
    var smallest = i;
    for (var j = i; j < tempArray.length; j++) {
      if (arr[j][key] < arr[smallest][key]) smallest = j;
    }

    if (smallest !== i) {
      var temp = tempArray[smallest];
      tempArray[smallest] = tempArray[i];
      tempArray[i] = temp;
    }
  }

  return tempArray;
}

var sorted = sortBy(arr, 'name');

console.log(sorted);
