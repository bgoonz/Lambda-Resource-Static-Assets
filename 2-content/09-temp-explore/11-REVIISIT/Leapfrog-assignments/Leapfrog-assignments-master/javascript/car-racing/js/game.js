const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.height = 983;
canvas.width = 1000;

/**
 * Game Constants
 */
let score = 0;
let possibleXPositions = [60, 410, 760];
let speed = 10;
let gamePaused = true;
let playerCarPositionX = 410;
let playerCarPositionY = 803;
let tick = 0;
let canShoot = false;

class Obstacle {
  constructor(y) {
    this.x = getRandomElement(possibleXPositions);
    this.y = y;
    this.prevY = this.y;
    this.speed = speed / 2;
  }

  detectCollision = () => {
    if (
      this.x === playerCarPositionX &&
      Math.abs(playerCarPositionY - this.y) <= 179
    ) {
      gameOver();
      gamePaused = true;
      tick = 0;
      canShoot = false;
      return;
    }
  };

  isBeingShot = () => {
    if (this.x + 70 === bulletPositionX && bulletPositionY - this.y <= 179) {
      bulletPositionX = playerCarPositionX + 70;
      bulletPositionY = canvas.height - (179 + 30);
      isShooting = false;

      this.y = -(canvas.height - this.y) - 400;
      this.x = getRandomElement(possibleXPositions);
    }
  };

  drawObstacle = () => {
    const obstacle = new Image();
    obstacle.src = 'images/car.png';
    obstacle.onload = () => {
      const moveObstacle = () => {
        ctx.drawImage(obstacle, this.x, this.y);
        this.y += speed;

        if (this.y > canvas.height + 10) {
          this.y = -400;
          this.x = getRandomElement(possibleXPositions);
          score++;
          _('.game-score h4').innerText = score;
          if (speed < 50) {
            speed += 0.1;
            this.speed = speed / 2;
          }
        }
        this.detectCollision();
        if (isShooting) this.isBeingShot();

        if (gamePaused) return;
        requestAnimationFrame(moveObstacle);
      };

      moveObstacle();
    };
  };
}

function drawRoad() {
  const road = new Image();
  road.src = 'images/road.png';

  road.onload = () => {
    let y = 0;
    const moveRoad = () => {
      ctx.drawImage(
        road,
        0,
        y - canvas.height,
        canvas.width,
        canvas.height * 2
      );
      y += speed;
      if (y >= canvas.height) y = 0;

      tick++;
      if (tick === 300) {
        tick = 0;
        canShoot = true;

        _('.shooter').style.display = 'block';
      }

      if (gamePaused) return;
      requestAnimationFrame(moveRoad);
    };
    moveRoad();
  };
}

function drawPlayer() {
  const playerCar = new Image();
  playerCar.src = 'images/audi.png';

  const drawCar = () => {
    ctx.drawImage(playerCar, playerCarPositionX, playerCarPositionY);

    if (gamePaused) return;
    requestAnimationFrame(drawCar);
  };

  playerCar.onload = () => {
    drawCar();
  };
}

let isShooting = false;
let bulletPositionX = playerCarPositionX + 70;
let bulletPositionY = canvas.height - (179 + 30);

function drawBullet() {
  const bullet = new Image();
  bullet.src = 'images/bullet.png';

  bullet.onload = () => {
    function drawBulletImg() {
      ctx.drawImage(bullet, bulletPositionX, bulletPositionY);
      if (!isShooting) return;

      if (bulletPositionY === -bullet.height) {
        bulletPositionX = playerCarPositionX + 70;
        bulletPositionY = canvas.height - (179 + 30);
        isShooting = false;
        canShoot = false;
      }

      bulletPositionY = bulletPositionY - 10;

      requestAnimationFrame(drawBulletImg);
    }

    drawBulletImg();
  };
}

function drawRoadAndPlayer() {
  drawRoad();
  drawPlayer();
}

document.addEventListener('keydown', (e) => {
  if (e.code === 'ArrowLeft' && playerCarPositionX > 60)
    playerCarPositionX -= 350;

  if (e.code === 'ArrowRight' && playerCarPositionX < 760)
    playerCarPositionX += 350;

  if (e.code === 'Space' && canShoot) {
    tick = 0;
    isShooting = true;
    bulletPositionX = playerCarPositionX + 70;
    bulletPositionY = canvas.height - (179 + 30);
    drawBullet();
    canShoot = false;
    _('.shooter').style.display = 'none';
  }
});
