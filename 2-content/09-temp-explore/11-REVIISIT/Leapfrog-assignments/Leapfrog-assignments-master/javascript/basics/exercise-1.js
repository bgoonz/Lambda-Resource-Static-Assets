console.log(
  'Assignment-1: A program that includes a function which takes no of rows as argument and prints a pattern like the following'
);

function renderPattern(noOfRows) {
  for (var i = noOfRows; i > 0; i--) {
    var str = '';
    for (var j = 0; j < i; j++) {
      str += '* ';
    }
    console.log(str.trim());
  }
}

renderPattern(10);
