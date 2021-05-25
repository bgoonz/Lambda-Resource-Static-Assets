class Swift {
  constructor(config) {
    this.element = document.querySelector(config.selector);
    this.slidesContainer =
      this.element.querySelector('.slides-container') || null;
    this.slides = [];
    this.slidesHeight = 0;
    this.slidesWidth = 0;
    this.selectedSlide = [0, 0];
    this.horizontalSlides = 0;
    this.verticalSlides = 0;
    this.intervalRef = null;
    this.config = config;
    this.theme = null;
    this.zoomedOut = false;
  }

  setSlideDimentions() {
    //* Set the width of direct decendants of .slides-container
    [...this.element.querySelectorAll('section')]
      .filter((section) => section.parentNode.className === 'slides-container')
      .forEach((element) => {
        element.style.width = this.slidesWidth + 'px';
      });

    //* Set height and width of actual slide elements
    //* including vertical slides
    this.slides.flat().forEach((element) => {
      element.style.height = this.slidesHeight + 'px';
      element.style.width = this.slidesWidth + 'px';
      element.classList.add('slide');
    });

    this.element.style.position = 'relative';
  }

  setDimensions() {
    window.addEventListener('load', () => {
      this.slidesWidth = parseInt(window.getComputedStyle(this.element).width);
      this.slidesHeight = parseInt(
        window.getComputedStyle(this.element).height
      );

      const maxSlides = this.slides.length;
      const verticalSlidesLengths = this.slides.map(
        (verticalSlide) => verticalSlide.length
      );
      const maxVerticalSlides = Math.max.apply(null, verticalSlidesLengths);
      this.horizontalSlides = maxSlides;
      this.verticalSlides = maxVerticalSlides;

      this.slidesContainer.style.height =
        maxVerticalSlides * this.slidesHeight + 'px';
      this.slidesContainer.style.width = maxSlides * this.slidesWidth + 'px';

      this.setSlideDimentions();
      this.element.style.overflow = 'hidden';
    });
  }

  getSlideDomElements() {
    const sections = [...this.element.querySelectorAll('section')];
    const childSections = sections.filter(
      (section) => section.parentNode.className === 'slides-container'
    );

    childSections.forEach((section) => {
      const elements = section.querySelectorAll('section');
      if (elements.length) this.slides.push([...elements]);
      else this.slides.push([section]);
    });
  }

  setKeyboardEvents() {
    window.addEventListener('keydown', (event) => {
      if (this.zoomedOut) return;

      let [x, y] = this.selectedSlide;
      if (event.key === 'ArrowLeft' && x > 0) {
        this.selectedSlide = [x - 1, 0];
        clearInterval(this.intervalRef);
      }

      if (event.key === 'ArrowRight' && x < this.horizontalSlides - 1) {
        this.selectedSlide = [x + 1, 0];
        clearInterval(this.intervalRef);
      }

      if (event.key === 'ArrowUp' && y > 0) {
        this.selectedSlide[1]--;
        clearInterval(this.intervalRef);
      }

      if (event.key === 'ArrowDown' && y < this.slides[x].length - 1) {
        this.selectedSlide[1]++;
        clearInterval(this.intervalRef);
      }

      if (event.key === 'f') {
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else {
          document.documentElement.requestFullscreen();
        }
      }

      this.slide();
    });
  }

  setSwipeEvents() {
    let xDown = null;
    let yDown = null;

    this.element.addEventListener(
      'touchstart',
      (event) => {
        xDown = event.touches[0].clientX;
        yDown = event.touches[0].clientY;
      },
      false
    );

    this.element.addEventListener(
      'touchmove',
      (event) => {
        let [x, y] = this.selectedSlide;

        if (!xDown || !yDown) {
          return;
        }

        let xUp = event.touches[0].clientX;
        let yUp = event.touches[0].clientY;

        let xDiff = xDown - xUp;
        let yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
          if (xDiff > 0 && x < this.horizontalSlides - 1) {
            this.selectedSlide = [x + 1, 0];
            clearInterval(this.intervalRef);
          } else if (x > 0) {
            this.selectedSlide = [x - 1, 0];
            clearInterval(this.intervalRef);
          }
        } else {
          if (yDiff > 0 && y < this.slides[x].length - 1) {
            this.selectedSlide[1]++;
            clearInterval(this.intervalRef);
          } else if (y > 0) {
            this.selectedSlide[1]--;
            clearInterval(this.intervalRef);
          }
        }
        /* reset values */
        xDown = null;
        yDown = null;

        this.slide();
      },
      false
    );
  }

  slide() {
    const [x, y] = this.selectedSlide;
    this.slidesContainer.style.left = `${x * -this.slidesWidth}px`;
    this.slidesContainer.style.top = `${y * -this.slidesHeight}px`;

    if (this.config.slideNumbers) this.updateSlideNumber();
    this.insertIndicators();
  }

  autoSlide() {
    window.addEventListener('load', () => {
      let autoSlideInterval = this.config.autoSlideInterval || 5;
      let totalIntervalTime = autoSlideInterval * 1000;

      this.intervalRef = setInterval(() => {
        let [x, y] = this.selectedSlide;
        if (this.slides[x][y + 1]) {
          this.selectedSlide = [x, y + 1];
        } else if (this.slides[x + 1]) {
          this.selectedSlide = [x + 1, 0];
        }

        this.slide();
      }, totalIntervalTime);
    });
  }

  switchTheme() {
    if (!this.theme) {
      this.theme = 'dark';
      this.element.classList.add('dark');
      this.element.querySelector('#switch-theme button').innerHTML =
        '<i class="fa fa-sun-o"></i>';
    } else {
      this.theme = null;
      this.element.classList.remove('dark');
      this.element.querySelector('#switch-theme button').innerHTML =
        '<i class="fa fa-moon-o"></i>';
    }
  }

  setTheme() {
    this.theme = [...slide.element.classList].includes('dark') ? 'dark' : '';

    this.element.insertAdjacentHTML(
      'beforeend',
      `<div id="switch-theme">
        <button><i class="fa fa-moon-o"></i></button>
      </div>`
    );

    this.element.querySelector('button').addEventListener('click', () => {
      this.switchTheme();
    });

    window.addEventListener('keydown', (event) => {
      if (event.key.toLowerCase() === 't') this.switchTheme();
    });
  }

  showSlideNumbers() {
    this.element.insertAdjacentHTML(
      'beforeend',
      `<div class="slide-number">
        1
      </div>`
    );
  }

  updateSlideNumber() {
    const [x, y] = this.selectedSlide;
    let pageNo = '';
    if (this.slides[x].length > 1) {
      pageNo = `${x + 1}.${y + 1}`;
    } else {
      pageNo = `${x + 1}`;
    }

    this.element.querySelector('.slide-number').innerText = pageNo;
  }

  zoomOut() {
    this.element.insertAdjacentHTML(
      'beforeend',
      `<div class="zoom-out-view"></div>`
    );
    this.element.querySelector(
      '.zoom-out-view'
    ).innerHTML = this.slidesContainer.innerHTML;

    let zoomOutElement = this.element.querySelector('.zoom-out-view');

    window.addEventListener('keydown', (event) => {
      let display = window.getComputedStyle(zoomOutElement).display;

      if (event.key.toLowerCase() === 'z') {
        if (display === 'none') {
          zoomOutElement.style.display = 'block';
          this.zoomedOut = true;
        } else {
          zoomOutElement.style.display = 'none';
          this.zoomedOut = false;
        }
      }
    });

    zoomOutElement.addEventListener('click', () => {
      zoomOutElement.style.display = 'none';
      this.zoomOut = false;
    });
  }

  setConfigurationOptions() {
    if (this.config.autoSlide) {
      this.autoSlide();
    }

    if (this.config.slideTime) {
      this.slidesContainer.style.transition = `${this.config.slideTime}s`;
    }

    if (this.config.allowDarkTheme) {
      this.setTheme();
    }

    if (this.config.slideNumbers) {
      this.showSlideNumbers();
    }
  }

  getEachSection(data) {
    if (data.markdown) {
      return `
        <section class='markdown'>
          ${data.markdown}
        </section>
      `;
    }

    return `
      <section>
        <h1>${data.title}</h1>
        <p>${data.content}</p>
      </section>
    `;
  }

  insertDataToDOM() {
    this.element.insertAdjacentHTML(
      'afterbegin',
      '<div class="slides-container"></div>'
    );

    this.slidesContainer = this.element.querySelector('.slides-container');
    let domElement = '';

    this.config.data.forEach((slide) => {
      let section = '';
      if (slide.length) {
        let verticalSlideDOM = '';
        slide.forEach((verticalSlide) => {
          verticalSlideDOM += this.getEachSection(verticalSlide);
        });

        section += `
          <section>
            ${verticalSlideDOM}
          </section>
        `;
      } else {
        section += this.getEachSection(slide);
      }

      domElement += section;
    });

    this.slidesContainer.innerHTML = domElement;
  }

  convertMarkdown() {
    const markdownSections = this.element.querySelectorAll('.markdown');
    if (markdownSections) {
      markdownSections.forEach((section) => {
        const text = section.innerHTML;
        section.innerHTML = parseMarkdown(text);
      });
    }
  }

  insertIndicators() {
    this.element.insertAdjacentHTML(
      'beforeend',
      `
      <div class="indicator-container">
        <div class="indicators">
          <button class="up">
            <i class="fa fa-chevron-up"></i>
          </button>
          <button class="down">
            <i class="fa fa-chevron-down"></i>
          </button>
          <button class="left">
            <i class="fa fa-chevron-left"></i>
          </button>
          <button class="right">
            <i class="fa fa-chevron-right"></i>
          </button>
        </div>
      </div>`
    );

    if (this.zoomedOut) return;
    const [x, y] = this.selectedSlide;

    if (x !== 0)
      this.element.querySelector('.indicators .left').style.display = 'block';
    else this.element.querySelector('.indicators .left').style.display = 'none';

    if (x < this.slides.length - 1)
      this.element.querySelector('.indicators .right').style.display = 'block';
    else
      this.element.querySelector('.indicators .right').style.display = 'none';

    if (y !== 0)
      this.element.querySelector('.indicators .up').style.display = 'block';
    else this.element.querySelector('.indicators .up').style.display = 'none';

    if (y < this.slides[x].length - 1)
      this.element.querySelector('.indicators .down').style.display = 'block';
    else this.element.querySelector('.indicators .down').style.display = 'none';
  }

  init() {
    if (this.config.data) {
      this.insertDataToDOM();
    }

    if (this.config.zoomedOutView) {
      this.zoomOut();
    }

    this.convertMarkdown();

    this.getSlideDomElements();
    this.setDimensions();
    this.setKeyboardEvents();
    this.setSwipeEvents();
    this.setConfigurationOptions();
    this.insertIndicators();
  }
}
