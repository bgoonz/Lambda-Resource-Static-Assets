let ants = [];

/**
 * @param {Number} totalants
 * @returns {undefined}
 *
 * A function to initialize the canvas draw
 * totalants number of ants
 */
function init(totalants) {
  const img = new Image();
  img.src = 'images/ant.png';
  img.onload = () => {
    for (let i = 0; i < totalants; i++) {
      let radius = 16;
      let x = randomRange(radius, canvas.width - radius);
      let y = randomRange(radius, canvas.height - radius);
      let dx = randomRange(-3, 3);
      let dy = randomRange(-3, 3);

      // Detect collision and modify center
      if (i !== 0) {
        for (let j = 0; j < i; j++) {
          let d = getDistance(x, y, ants[j].x, ants[j].y);
          if (d <= (radius + ants[j].radius) ** 2) {
            x = randomRange(radius, canvas.width - radius);
            y = randomRange(radius, canvas.height - radius);
            j = -1;
          }
        }
      }

      let ball = new Ant(x, y, dx, dy, img);

      ants.push(ball);
    }
  };
}

/**
 * @returns {undefined}
 * A function that animates the ants in the canvas
 */
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ants.forEach((ball) => ball.move());
}

init(30);
animate();

const destruct = (ant) => {
  const updatedAnts = ants.filter((items, index) => ant !== index);
  ants = updatedAnts;
};

canvas.addEventListener('mousedown', (event) => {
  let x = event.x;
  let y = event.y;

  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;

  for (let i = 0; i < ants.length; i++) {
    if (getDistance(x, y, ants[i].x, ants[i].y) <= ants[i].radius ** 2) {
      destruct(i);
    }
  }
});
