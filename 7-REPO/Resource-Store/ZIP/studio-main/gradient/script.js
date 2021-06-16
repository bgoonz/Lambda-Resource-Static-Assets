import tinycolor from './tinyCol.js';

// TODO add window resize

console.clear();

console.log('%cHiya! 👋 Thanks for taking a look at my codes 😎 Follow me on twitter or instagram to see more of my work; I\'m @Rumyra 🐧', 'background-color: hsla(315, 3%, 25%, 1); font-size: 120%; line-height: 1.4; text-align: center; color: hsla(33, 55%, 92%, 1); border: 2px solid hsla(273, 36%, 64%, 1); padding: 0.5em;');

// set up canvas, context and sizes
const container = document.querySelector('#gradients');
const canvasEl = container.querySelector('canvas');
const dpr = window.devicePixelRatio;
const w = canvasEl.getBoundingClientRect().width * dpr;
const h = canvasEl.getBoundingClientRect().height * dpr;

canvasEl.width = w;
canvasEl.height = h;

const ctx = canvasEl.getContext("2d");

// cols across, rows down
const cols = 10;
const rows = 7;
const cw = w/cols;
const ch = h/rows;

// for the copy to clipboard
let copyHSL = '';

// for generating png
const dlLink = container.querySelector('a');

const callback = function (blob) {
  const url = window.URL.createObjectURL(blob);
  dlLink.href = url;
}

// generate some colours
function generateCols() {

  const colTL = tinycolor.random();
  const colTR = tinycolor.random();
  const colBL = tinycolor.random();
  const colBR = tinycolor.random();

  const rects = [];

  // counting up in x & y indexes
  for (let yi = 0; yi < rows; yi++) {

    // ! this mixes across the grid & looks nice but isn't quite right
    // let mix = ( yi/(rows-1) ) * 100;
    // let colY = tinycolor.mix(colTL, colBR, mix);

    // get mix value
    let mixVal = ( yi/(rows-1) ) * 100;
    // mix left hand side
    let colYL = tinycolor.mix(colTL, colBL, mixVal);
    // mix right hand side
    let colYR = tinycolor.mix(colTR, colBR, mixVal);
    
    for (let xi = 0; xi < cols; xi++) {

      // ! this mixes across the grid & looks nice but isn't quite right
      // mix = ( xi/(cols-1) ) * 100;
      // let colX = tinycolor.mix(colBL, colTR, mix);
      // mix = ( (xi+yi) / (rows+cols-1) ) * 100;
      // let col = tinycolor.mix(colY, colX, 50);

      // get mix value
      mixVal = ( xi/(cols-1) ) * 100;
      // mix left to right
      let col = tinycolor.mix(colYL, colYR, mixVal);

      // get coords for rects
      let x = xi*cw;
      let y = yi*ch;
      rects.push({
        x: x, y: y,
        col: col.toHslString()
      });
    }
  }

  rects.forEach( (el, i) => {
    ctx.fillStyle = el.col;
    ctx.fillRect(el.x, el.y, cw, ch);

    copyHSL += el.col+"\n";
  })

  canvasEl.toBlob(callback);
}
generateCols();


// yeh I know, bite me
const buttons = container.querySelectorAll('button');

// generate button
buttons[0].addEventListener('click', function() {
  generateCols();
}, false);

// copy button
buttons[1].addEventListener('click', function() {
  navigator.clipboard.writeText(copyHSL).then(function() {buttons[1].innerText = 'Cool'},
    function() {buttons[1].innerText = 'Not Cool'})
}, false);







