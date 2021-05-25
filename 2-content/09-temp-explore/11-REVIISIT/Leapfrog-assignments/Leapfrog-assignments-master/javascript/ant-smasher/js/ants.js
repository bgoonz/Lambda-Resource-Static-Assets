const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

class Ant {
  constructor(x, y, dx, dy, ant) {
    this.x = x;
    this.y = y;
    this.radius = 16;
    this.dx = dx;
    this.dy = dy;
    this.ant = ant;
    this.mass = 1;
  }

  detectEdge = () => {
    if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0)
      this.dx = -this.dx;
    if (this.y + this.radius >= canvas.height || this.y - this.radius <= 0)
      this.dy = -this.dy;
  };

  resolveCollision = (otherAnt) => {
    // Create collision vector
    let collisionVector = { x: this.x - otherAnt.x, y: this.y - otherAnt.y };
    let distance = Math.sqrt(
      getDistance(this.x, this.y, otherAnt.x, otherAnt.y)
    );

    // Unit vector for direction
    let unitVector = {
      x: collisionVector.x / distance,
      y: collisionVector.y / distance,
    };

    let relativeVelocity = {
      x: this.dx - otherAnt.dx,
      y: this.dy - otherAnt.dy,
    };

    let speed =
      relativeVelocity.x * unitVector.x + relativeVelocity.y * unitVector.y;

    let impulse = (2 * speed) / (this.mass + otherAnt.mass);

    this.dx -= impulse * otherAnt.mass * unitVector.x;
    this.dy -= speed * otherAnt.mass * unitVector.y;
    otherAnt.dx += speed * this.mass * unitVector.x;
    otherAnt.dy += speed * this.mass * unitVector.y;
  };

  detectCollision = () => {
    for (let i = 0; i < ants.length; i++) {
      if (this === ants[i]) continue;

      if (
        getDistance(this.x, this.y, ants[i].x, ants[i].y) <=
        (this.radius + ants[i].radius) ** 2
      ) {
        this.resolveCollision(ants[i]);
      }
    }
  };

  draw = () => {
    ctx.drawImage(this.ant, this.x - this.radius, this.y - this.radius);
  };

  move = () => {
    this.detectEdge();
    this.detectCollision();
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };
}
