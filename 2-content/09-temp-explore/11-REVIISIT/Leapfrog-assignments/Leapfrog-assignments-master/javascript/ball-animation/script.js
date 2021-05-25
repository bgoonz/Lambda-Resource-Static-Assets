var container = document.createElement('div');
container.style.height = '500px';
container.style.width = '500px';
container.style.border = '1px solid black';
container.style.position = 'relative';
document.body.appendChild(container);

var element = document.createElement('div');
element.style.height = '100px';
element.style.width = '100px';
element.style.borderRadius = '50%';
element.style.position = 'absolute';
element.style.background = randomRGBAColor();

var topPos = 0;
var leftPos = 200;
var velocity = 5;

function randomRGBAColor() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  var a = Math.random();

  return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}

function render() {
  element.style.top = topPos + 'px';
  element.style.left = leftPos + 'px';

  container.appendChild(element);

  if (topPos >= 400 && velocity === 5) {
    element.style.background = randomRGBAColor();
    velocity = -velocity;
  } else if (topPos <= 0 && velocity === -5) {
    element.style.background = randomRGBAColor();
    velocity = -velocity;
  }

  topPos += velocity;
  requestAnimationFrame(render);
}

render();
