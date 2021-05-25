let highScore = +localStorage.getItem('highScore') || 0;
_('.high-score span').innerText = highScore;

function gameOver() {
  _('.game-over-screen').style.display = 'flex';
  _('.shooter').style.display = 'none';
  __('.game-over-screen strong').forEach((element) => {
    element.innerText = score;
  });

  if (score > highScore) {
    highScore = score;
    localStorage.setItem('highScore', score);
    _('.received-highscore').style.display = 'block';
    _('.received-score').style.display = 'none';
  } else _('.received-score').style.display = 'block';
}

function init() {
  drawRoadAndPlayer();

  const obstacle1 = new Obstacle(-100);
  const obstacle2 = new Obstacle(-550);
  const obstacle3 = new Obstacle(-1000);

  obstacle1.drawObstacle();
  obstacle2.drawObstacle();
  obstacle3.drawObstacle();
}

_('#start').addEventListener('click', () => {
  gamePaused = false;
  init();
  _('.game-initializatation-screen').style.display = 'none';
});

_('#restart').addEventListener('click', () => {
  gamePaused = false;
  speed = 10;
  score = 0;
  tick = 0;
  canShoot = false;
  playerCarPositionX = 410;
  _('.game-score h4').innerText = score;

  init();
  _('.game-over-screen').style.display = 'none';
});
