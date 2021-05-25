/**
 * ? config options
 * * selector - string - COMPULSORY
 * * slideTime - number (in seconds) - Optional
 * * autoSlide - boolean - Optional
 * * autoSlideInterval - number (in seconds) - Optional
 * * allowDarkTheme - boolean - Optional
 * * slideNumbers - boolean - Optional
 * * zoomedOutView - boolean - Optional
 */

const slide = new Swift({
  selector: '#my-presentation',
  allowDarkTheme: true,
  slideNumbers: true,
  zoomedOutView: true,
});

slide.init();
