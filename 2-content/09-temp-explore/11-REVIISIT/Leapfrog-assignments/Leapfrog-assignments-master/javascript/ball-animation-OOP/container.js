class Container {
  constructor(height, width, background) {
    this.height = height;
    this.width = width;
    this.background = background;
    this.containerElement = document.createElement('div');
  }

  styleElement() {
    const containerStyles = {
      position: 'relative',
      height: this.height + 'px',
      width: this.width + 'px',
      background: this.background,
    };

    Object.assign(this.containerElement.style, containerStyles);
  }

  render() {
    this.styleElement();
    document.body.appendChild(this.containerElement);
  }
}
