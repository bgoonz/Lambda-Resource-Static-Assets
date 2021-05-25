/**
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 *
 * return random number in a range
 */

function randomRange(min, max) {
  while (true) {
    let randomNum = Math.floor(Math.random() * (max - min) + min);
    if (randomNum !== 0) return randomNum;
  }
}

/**
 * @returns {String}
 */
function getRandomColor() {
  let r = randomRange(0, 255);
  let g = randomRange(0, 255);
  let b = randomRange(0, 255);
  let a = Math.random() * (1 - 0.5) + 0.5;

  return `rgb(${r}, ${g}, ${b}, ${a})`;
}

/**
 * @param {Number} x1
 * @param {Number} x2
 * @param {Number} y1
 * @param {Number} y2
 * @returns {Number}
 *
 * A function to calculate the distance between 2 points
 */

function getDistance(x1, y1, x2, y2) {
  return (x2 - x1) ** 2 + (y2 - y1) ** 2;
}
