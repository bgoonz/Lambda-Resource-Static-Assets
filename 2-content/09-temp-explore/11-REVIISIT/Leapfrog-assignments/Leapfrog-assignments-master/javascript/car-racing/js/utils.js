/**
 * @param {String} selector
 * @returns {HTMLElement}
 */
function _(selector) {
  return document.querySelector(selector);
}

/**
 * @param {String} selector
 * @returns {NodeList}
 */
function __(selector) {
  return document.querySelectorAll(selector);
}

/**
 * @param {Array} arr
 */
function getRandomElement(arr) {
  let randomIndex = Math.floor(arr.length * Math.random());
  return arr[randomIndex];
}
