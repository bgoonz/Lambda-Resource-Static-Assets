class Ball {
  constructor(container, x, y, size, velocity, color) {
    this.container = container;
    this.x = x;
    this.y = y;
    this.size = size;
    this.velocity = velocity;
    this.color = color;

    this.ball = document.createElement('div');
  }

  styleBall() {
    const ballStyles = {
      position: 'absolute',
      top: this.y + 'px',
      left: this.x + 'px',
      background: this.color,
      height: this.size + 'px',
      width: this.size + 'px',
      borderRadius: '50%',
    };

    Object.assign(this.ball.style, ballStyles);
  }

  checkCollision() {
    if (this.y + this.size === this.container.height) {
      this.velocity = -this.velocity;
    }

    if (this.y === 0) {
      this.velocity = -this.velocity;
    }
  }

  render() {
    this.styleBall();
    this.container.containerElement.appendChild(this.ball);

    this.checkCollision();
    this.y += this.velocity;

    window.requestAnimationFrame(this.render.bind(this));
  }
}

const container = new Container(500, 300, '#3B3355');
const container2 = new Container(500, 500, '#2A324B');
const ball = new Ball(container, 150, 150, 50, 5, '#FEFCFD');
const ball2 = new Ball(container2, 100, 50, 50, 5, '#FEFCFD');
const ball3 = new Ball(container2, 150, 150, 30, 5, '#917C78');

container.render();
container2.render();
ball.render();
ball2.render();
ball3.render();
