class Platform {
  constructor(image) {
    this.image = image;
    this.imagePosX = 292;
    this.imagePosY = 0;
    this.height = 56;
    this.width = 168;
    this.positionX = 0;
    this.positionY = canvas.height - this.height * SCALE;
  }

  draw = (gameOver) => {
    ctx.drawImage(
      this.image,
      this.imagePosX,
      this.imagePosY,
      this.width,
      this.height,
      this.positionX,
      this.positionY,
      this.width * SCALE,
      this.height * SCALE
    );

    if (gameOver) return;
  };
}
