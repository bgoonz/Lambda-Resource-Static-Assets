function init() {
  const game = new Game();
  game.initializeGame();
}

function gameOver() {
  _('.end-screen').style.display = 'flex';
  _('.end-screen #score').innerText = SCORE;
}

_('#start').addEventListener('click', function () {
  _('.start-screen').style.display = 'none';
  init();
});

_('#restart').addEventListener('click', function () {
  _('.end-screen').style.display = 'none';
  SCORE = 0;
  init();
});
