console.log('Assignment - 4: Transformation function');

var numbers = [1, 2, 3, 4, 5];

function transform(collection, transformationFunction) {
  var newCollection = [];

  for (var i = 0; i < collection.length; i++) {
    newCollection.push(transformationFunction(collection[i]));
  }

  return newCollection;
}

var output = transform(numbers, function (element) {
  return element * 2;
});

console.log('Input: ', numbers, 'Output: ', output);
