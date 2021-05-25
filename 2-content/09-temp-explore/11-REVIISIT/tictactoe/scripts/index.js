let $ = selector => document.querySelector(selector);
let $$ = selector => document.querySelectorAll(selector);

let boxes = new Array(9).fill(null);
let winner = false;
const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function sweetAlert({ icon, title, text }) {
  Swal.fire({
    icon,
    title,
    text
  }).then(() => {
    window.location.reload();
  });
}

function checkWinner() {
  winningPatterns.forEach(WP => {
    if (
      boxes[WP[0]] != null &&
      boxes[WP[0]] == boxes[WP[1]] &&
      boxes[WP[1]] == boxes[WP[2]]
    ) {
      winner = true;
      if (boxes[WP[0]] == 'x') {
        sweetAlert({
          icon: 'success',
          title: 'Congratulations',
          text: 'You win'
        });
      } else {
        sweetAlert({
          icon: 'error',
          title: 'You loose.',
          text: 'Better Luck Next Time.'
        });
      }
    }
  });

  if (!winner && boxes.filter(box => box == null).length === 0) {
    sweetAlert({
      icon: 'info',
      title: 'Draw',
      text: 'You failed to win, better luck next time.'
    });
  }

  return 1;
}

function writeOnBoxes() {
  $$('.boxes').forEach((box, index) => {
    box.innerText = boxes[index];
  });
}

function cpuClick() {
  while (true) {
    let randomIndex = Math.floor(Math.random() * 9);
    if (!boxes[randomIndex]) {
      boxes[randomIndex] = 'o';
      checkWinner();
      break;
    }
  }
  writeOnBoxes();
}

function playerClick(index) {
  if (!boxes[index]) {
    boxes[index] = 'x';
    checkWinner();
    if (!winner && boxes.filter(box => box === null).length > 0) {
      setTimeout(() => {
        cpuClick();
      }, 100);
    }
  }
  writeOnBoxes();
}

function clickHandler() {
  $$('.boxes').forEach((box, index) =>
    box.addEventListener('click', () => playerClick(index))
  );
}

clickHandler();
writeOnBoxes();
