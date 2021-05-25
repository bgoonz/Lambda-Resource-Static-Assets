const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.height = 800;
canvas.width = 1000;

let phase = 0,
  speed = 0.03;
let maxCircleSize = 15;
let numRows = 10,
  numCols = 10;

let numStrands = 2;

// store the no of frames that has passed
let frames = 0;

function drawBackground() {
  ctx.fillStyle = '#043a4a';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawCircle() {
  phase = frames * speed;
  for (let strand = 0; strand < numStrands; strand++) {
    let strandPhase = phase + 3.14 + 3.14 * strand;

    for (let col = 0; col < numCols; col++) {
      let x = 250 + col * 50;
      let colOffset = col * 0.62;

      for (let row = 0; row < numRows; row++) {
        let y = 300 + row * 30 + Math.sin(strandPhase + colOffset) * 50;
        let sizeOffset =
          (Math.cos(strandPhase - row / numRows + colOffset) + 1) * 0.5;
        let circleSize = sizeOffset * maxCircleSize;
        ctx.beginPath();
        ctx.arc(x, y, circleSize, 0, 360);
        ctx.fillStyle = 'rgb(253, 174, 120)';
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function draw() {
  frames++;
  drawBackground();
  drawCircle();
  requestAnimationFrame(draw);
}

draw();
