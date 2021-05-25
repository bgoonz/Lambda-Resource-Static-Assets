var input = {
  '1': {
    id: 1,
    name: 'John',
    children: [
      { id: 2, name: 'Sally' },
      { id: 3, name: 'Mark', children: [{ id: 4, name: 'Harry' }] },
    ],
  },
  '5': {
    id: 5,
    name: 'Mike',
    children: [{ id: 6, name: 'Peter' }],
  },
};

function childrenArray(input) {
  return input.map(function (element) {
    return element.id;
  });
}

function normalize(input) {
  var result = {};

  Object.keys(input).forEach((element) => {
    result[element] = input[element];

    function addChildrenToResult(childrenArray) {
      childrenArray.forEach(function (child) {
        result[child.id] = child;

        if (child.children) {
          addChildrenToResult(child.children);
        }
      });
    }

    addChildrenToResult(input[element].children);
  });

  Object.keys(result).forEach((element) => {
    if (result[element].children)
      result[element].children = childrenArray(result[element].children);
  });

  return result;
}

console.log(normalize(input));
