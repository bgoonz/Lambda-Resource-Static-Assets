var container = document.createElement('div');

function createContainer(height, width) {
  var containerStyles = {
    height: height + 'px',
    width: 800 + 'px',
    borderTop: '1px solid black',
    borderLeft: '1px solid black',
    position: 'relative',
  };

  Object.assign(container.style, containerStyles);
  document.body.appendChild(container);
}

function drawPoint(coordinate) {
  var point = document.createElement('div');

  var pointStyles = {
    height: '10px',
    width: '10px',
    borderRadius: '50%',
    background: '#000000',
    position: 'absolute',
    top: coordinate.y - 5 + 'px',
    left: coordinate.x - 5 + 'px',
  };

  Object.assign(point.style, pointStyles);
  container.appendChild(point);
}

function render() {
  var data = [
    { x: 100, y: 20 },
    { x: 200, y: 40 },
    { x: 300, y: 20 },
  ];

  createContainer();
  data.forEach(drawPoint);
}

render();
