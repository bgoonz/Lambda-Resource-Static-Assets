class Game {
  constructor() {
    this.spriteImg = new Image();
    this.spriteImg.src = 'images/sprites.png';
    this.gameOver = false;
    this.bird = new Bird(this.spriteImg);
    this.platform = new Platform(this.spriteImg);
    this.pipes = [new Pipe(this.spriteImg, 100), new Pipe(this.spriteImg, 200)];
    this.tick = 0;
  }

  checkGameOver = () => {
    if (
      this.platform.positionY - this.bird.birdY <= this.bird.height * SCALE ||
      this.bird.birdY <= 0
    ) {
      this.bird.gravity = 0;
      this.gameOver = true;
    }
  };

  animateObjects = () => {
    ctx.drawImage(
      this.spriteImg,
      0,
      0,
      144,
      256,
      0,
      0,
      144 * SCALE,
      256 * SCALE
    );

    this.bird.draw(this.gameOver);
    this.pipes.forEach((pipe) => pipe.draw(this.gameOver));
    this.platform.draw();

    this.checkGameOver();
    this.pipes.forEach((pipe) => pipe.checkCollision(this, this.bird));
    if (this.gameOver) {
      gameOver();
      return;
    }

    window.requestAnimationFrame(this.animateObjects);
  };

  drawGameObjects = () => {
    this.spriteImg.onload = () => {
      this.animateObjects();
    };
  };

  setEventListeners = () => {
    window.addEventListener('keydown', (e) => {
      if (e.key === ' ') {
        this.bird.jump(this.gameOver);
      }
    });

    document.addEventListener('mouseup', () => {
      this.bird.jump(this.gameOver);
    });
  };

  initializeGame = () => {
    this.setEventListeners();
    this.drawGameObjects();
  };
}
