class Bird {
  constructor(image) {
    this.image = image;
    this.imagePosX = 115;
    this.imagePosY = 329;
    this.height = 12;
    this.width = 17;
    this.birdX = 30 * SCALE;
    this.birdY = 128 * SCALE;
    this.tick = 0;
    this.step = 0;
  }

  jump = (gameOver) => {
    if (!gameOver) {
      this.birdY -= 50;
      this.step = 0;
    }
  };

  draw = (gameOver) => {
    ctx.drawImage(
      this.image,
      this.imagePosX,
      this.imagePosY,
      this.width,
      this.height,
      this.birdX,
      this.birdY,
      this.width * SCALE,
      this.height * SCALE
    );

    this.birdY += this.step;
    this.step += 0.1;

    if (gameOver) return;
  };
}
