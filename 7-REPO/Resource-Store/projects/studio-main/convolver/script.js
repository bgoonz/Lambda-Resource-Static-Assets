console.clear();

console.log('%cHiya! 👋 Thanks for taking a look at my codes 😎 Follow me on twitter or instagram to see more of my work; I\'m @Rumyra 🐧', 'background-color: hsla(315, 3%, 25%, 1); font-size: 120%; line-height: 1.4; text-align: center; color: hsla(33, 55%, 92%, 1); border: 2px solid hsla(273, 36%, 64%, 1); padding: 0.5em;');

// create an audio element to add the reverb to
const audioEl = new Audio('110_E_Arps_SP_01.mp3');
audioEl.crossOrigin = 'anonymous';

// instigate audio context
const actx = new AudioContext();
const source = actx.createMediaElementSource(audioEl);

// create our convolver node
const reverbNode = new ConvolverNode(actx);

// select the correct file
// data-file attr matches imported mp3Files
let useFile = 'orig';
source.connect(actx.destination);

// load file function for samples
// returns buffer
async function getFile(audioContext, filepath) {
  const response = await fetch(filepath);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  return audioBuffer;
}

// quick & dirty: grab our buttons
const buttons = document.querySelectorAll('.select--btns button');

const samples = [];
// initiate by downloading samples
function init() {
  for (const butt of buttons) {

    if (butt.dataset.file === 'orig') {
      samples.push(null);
    } else {
      getFile(actx, 'mp3/'+butt.dataset.file+'.mp3').then( (sample) => {
        samples.push(sample);
        butt.disabled = false;
      });
    }
  }  
}
init();

// connect the graph on click
buttons.forEach( (butt, i) => {
  butt.addEventListener('click', () => {
    
    // change the current button state
    const curButt = document.querySelector('button[data-selected="true"]');
    curButt.dataset.selected = 'false';
    
    // switch to our new button
    butt.dataset.selected = 'true';
    
    // update audio graph
    if (butt.dataset.file === 'orig') {
      reverbNode.disconnect();
    } else {
      reverbNode.buffer = samples[i];
      // connect our graph
      source.connect(reverbNode).connect(actx.destination);
    }
  })
} )

// play/pause functionality
const playButton = document.querySelector('#play-button');
playButton.addEventListener('click', function() {

  // check if context is in suspended state (autoplay policy)
  if (actx.state === 'suspended') {
      actx.resume();
  }

  // play or pause track depending on state
  if (this.dataset.playing === 'false') {
    audioEl.play();
    this.dataset.playing = 'true';
    this.innerText = 'Pause';
  } else if (this.dataset.playing === 'true') {
    audioEl.pause();
    this.dataset.playing = 'false';
    this.innerText = 'Play';
  }

}, false);

// when sample stops set button to play
audioEl.addEventListener('ended', function() {
  playButton.dataset.playing = 'false';
  playButton.innerText = 'Play';
}, false)





