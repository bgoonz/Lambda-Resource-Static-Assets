console.log('Assignment - 3: Searching on an array');

var fruits = [
  { id: 1, name: 'Banana', color: 'Yellow' },
  { id: 2, name: 'Apple', color: 'Red' },
];

function searchByName(arr, name) {
  for (var i = 0; i < arr.length; i++) {
    var currentItem = arr[i].name.toLowerCase();
    var itemToBeSearched = name.toLowerCase();
    if (currentItem === itemToBeSearched) return arr[i];
  }

  return 'Not Found';
}

console.log(searchByName(fruits, 'apple'));
console.log(searchByName(fruits, 'Mango'));

function searchByKey(arr, key, value) {
  for (var i = 0; i < arr.length; i++) {
    var currentItem = arr[i][key].toLowerCase();
    var itemToBeSearched = value.toLowerCase();

    if (currentItem === itemToBeSearched) return arr[i];
  }

  return 'Not Found';
}

console.log(searchByKey(fruits, 'name', 'apple'));
