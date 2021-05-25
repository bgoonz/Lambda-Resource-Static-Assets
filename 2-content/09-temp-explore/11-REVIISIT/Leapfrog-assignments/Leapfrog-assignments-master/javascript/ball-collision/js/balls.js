const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

class Ball {
  constructor(x, y, radius, dx, dy, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
    this.mass = 1;
  }

  detectEdge = () => {
    if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0)
      this.dx = -this.dx;
    if (this.y + this.radius >= canvas.height || this.y - this.radius <= 0)
      this.dy = -this.dy;
  };

  resolveCollision = (otherBall) => {
    // Create collision vector
    let collisionVector = { x: this.x - otherBall.x, y: this.y - otherBall.y };
    let distance = Math.sqrt(
      getDistance(this.x, this.y, otherBall.x, otherBall.y)
    );

    // Unit vector for direction
    let unitVector = {
      x: collisionVector.x / distance,
      y: collisionVector.y / distance,
    };

    let relativeVelocity = {
      x: this.dx - otherBall.dx,
      y: this.dy - otherBall.dy,
    };

    let speed =
      relativeVelocity.x * unitVector.x + relativeVelocity.y * unitVector.y;

    let impulse = (2 * speed) / (this.mass + otherBall.mass);

    this.dx -= impulse * otherBall.mass * unitVector.x;
    this.dy -= speed * otherBall.mass * unitVector.y;
    otherBall.dx += speed * this.mass * unitVector.x;
    otherBall.dy += speed * this.mass * unitVector.y;
  };

  detectCollision = () => {
    this.detectEdge();

    for (let i = 0; i < balls.length; i++) {
      if (this === balls[i]) continue;

      if (
        getDistance(this.x, this.y, balls[i].x, balls[i].y) <=
        (this.radius + balls[i].radius) ** 2
      ) {
        this.resolveCollision(balls[i]);
      }
    }
  };

  draw = () => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  };

  move = () => {
    this.detectCollision();
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };
}
