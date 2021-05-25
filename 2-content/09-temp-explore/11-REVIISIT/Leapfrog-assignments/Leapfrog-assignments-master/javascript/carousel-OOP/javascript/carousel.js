/**
 * @param {string} selector
 * @returns {HTMLElement}
 */

var _ = function (selector) {
  return document.querySelector(selector);
};

/**
 * @param {string} selector
 * @returns {NodeList}
 */

var __ = function (selector) {
  return document.querySelectorAll(selector);
};

/**
 * @param {string} containerSelector
 * @param {number} delay
 * A constructor function to create carousel object
 */
function Carousel(containerSelector, speed, delay) {
  this.container = _(containerSelector);
  this.imageContainer = this.container.querySelector('.img-container');
  this.imageWidth = parseInt(
    window.getComputedStyle(_(containerSelector)).width
  );
  this.totalCarouselItems = this.container.querySelectorAll(
    '.carousel-item'
  ).length;
  this.delay = delay * 1000;
  this.selected = 0;
  this.position = 0;
  this.speed = this.imageWidth / (speed * 60);
  this.interval = null;

  /**
   * @returns {undefined}
   * A function that sets the width of container
   * and images dynamically
   */
  this.initializeCarouselElements = function () {
    this.containerWidth = this.imageWidth * this.totalCarouselItems;
    _(containerSelector + ' .img-container').style.width =
      this.containerWidth + 'px';
    _(containerSelector + ' .carousel-item').style.width =
      this.containerWidth / this.totalCarouselItems;
    __(containerSelector + ' img').forEach(
      function (image) {
        image.style.width = this.imageWidth + 'px';
      }.bind(this)
    );

    this.insertControls();
    this.addSelectedClass();
    this.addEventListeners();
  };

  /**
   * @returns {undefined}
   * A function that slides elements
   */
  this.slide = function () {
    var startAnimation = window.requestAnimationFrame(this.slide.bind(this));
    if (
      parseInt(this.position.toFixed(0)) === -(this.selected * this.imageWidth)
    ) {
      window.cancelAnimationFrame(startAnimation);
    } else if (this.position < -(this.selected * this.imageWidth)) {
      this.position += this.speed;
    } else {
      this.position -= this.speed;
    }

    this.imageContainer.style.left = this.position + 'px';
  };

  /**
   * @returns {undefined}
   * A function that inserts controls in carousel
   */
  this.insertControls = function () {
    var controls = document.createElement('div');
    var carouselButtons = document.createElement('div');
    var leftButton = document.createElement('button');
    var rightButton = document.createElement('button');
    var carouselDotsContainer = document.createElement('div');

    controls.classList.add('controls');
    carouselButtons.classList.add('carousel-buttons');
    leftButton.classList.add('carousel-left-button');
    rightButton.classList.add('carousel-right-button');
    carouselDotsContainer.classList.add('carousel-dots-container');

    leftButton.innerHTML = '&#9001;';
    rightButton.innerHTML = '&#9002;';

    this.container.appendChild(controls);
    controls.appendChild(carouselButtons);
    carouselButtons.appendChild(leftButton);
    carouselButtons.appendChild(rightButton);
    controls.appendChild(carouselDotsContainer);

    for (var i = 0; i < this.totalCarouselItems; i++) {
      var carouselDot = document.createElement('div');
      carouselDot.classList.add('carousel-dot');
      carouselDotsContainer.appendChild(carouselDot);
    }
  };

  this.addEventListeners = function () {
    _(containerSelector + ' .carousel-left-button').addEventListener(
      'click',
      function () {
        clearInterval(this.interval);
        if (this.selected === 0) this.selected = this.totalCarouselItems - 1;
        else this.selected--;

        this.slide();
        this.addSelectedClass();
        this.makeDelay();
      }.bind(this)
    );

    _(containerSelector + ' .carousel-right-button').addEventListener(
      'click',
      function () {
        clearInterval(this.interval);
        this.selected = (this.selected + 1) % this.totalCarouselItems;
        this.slide();
        this.addSelectedClass();
        this.makeDelay();
      }.bind(this)
    );

    __(containerSelector + ' .carousel-dot').forEach(
      function (dot, index) {
        dot.addEventListener(
          'click',
          function () {
            this.selected = index;
            this.slide();
            this.addSelectedClass();
          }.bind(this)
        );
      }.bind(this)
    );
  };

  this.makeDelay = function () {
    this.interval = setInterval(
      function () {
        this.selected = (this.selected + 1) % this.totalCarouselItems;
        this.addSelectedClass();
        this.slide();
      }.bind(this),
      this.delay
    );
  };

  this.addSelectedClass = function () {
    var carouselDots = __(containerSelector + ' .carousel-dot');
    carouselDots.forEach(
      function (element, index) {
        if (index === this.selected) element.classList.add('selected');
        else element.classList.remove('selected');
      }.bind(this)
    );
  };

  this.setContainerHeight = function () {
    window.addEventListener(
      'load',
      function () {
        var imageHeights = Array.from(__(containerSelector + ' img')).map(
          function (image) {
            return parseInt(window.getComputedStyle(image).height);
          }
        );

        this.container.style.height = Math.min.apply(null, imageHeights) + 'px';
      }.bind(this)
    );
  };

  this.initializeCarouselElements();
  this.setContainerHeight();
  this.makeDelay();
}
