console.clear();

console.log('%cHiya! 👋 Thanks for taking a look at my codes 😎 Follow me on twitter or instagram to see more of my work; I\'m @Rumyra 🐧', 'background-color: hsla(315, 3%, 25%, 1); font-size: 120%; line-height: 1.4; text-align: center; color: hsla(33, 55%, 92%, 1); border: 2px solid hsla(273, 36%, 64%, 1); padding: 0.5em;');

// ~~~~~~~~~~~~~~~ utility functions

// ! LET'S START WITH NOISE & OSCILLATOR
// ~~~~~~~~~~~~~~ setup & init

let actx = new AudioContext();
let oscNode, noiseNode;

// these get mutated later to return actual params on node, not just values
// has to be a value so param desc works in worklet (not sure I'm into this)
let noiseParams = {
  type: 0 // 0 = random or 1 = gaussian
}
let oscParams = {
  freq: 440,
  wave: 1, // 0: tri, 1: pulse, 2: saw, 3: sine, 4: noise
  phase: 0, // offset
  sync: 0, // hard sync freq
  duty: 0.5 // 0-1 pulse only duty
}

// actually better to have a setup/create node function rather than put it in play
// then possibly a modify for the params??

// init
async function init() {

  // ~~~~~~~~~~~~~~~~~~~~~ noise node
  // add worklet
  await actx.audioWorklet.addModule('worklets/noisenode.js');

  // create new oscillator node
  noiseNode = await new AudioWorkletNode(actx, 'noise');

  // get params and modify previously declared object to hold them
  // noise type
  noiseParams.type = noiseNode.parameters.get('type');

  // ~~~~~~~~~~~~~~~~~~~~~ osc node
  // add worklet
  await actx.audioWorklet.addModule('worklets/betterosc.js');

  // create new oscillator node
  oscNode = await new AudioWorkletNode(actx, 'better-oscillator');

  // get params and modify previously declared object to hold them
  // frequency
  oscParams.freq = oscNode.parameters.get("frequency");
  // wave
  oscParams.wave = oscNode.parameters.get("wave");
  // phase
  oscParams.phase = oscNode.parameters.get("phase");
  // hard sync
  oscParams.sync = oscNode.parameters.get("sync");
  // duty
  oscParams.duty = oscNode.parameters.get("duty");
}
init();

// functions to call on interaction
// update
function update(params, param, value) {
  params[param].setValueAtTime(value, actx.currentTime);
}
// play
function play(node) {
  node.connect(actx.destination);
}
// stop
function stop(node) {
  node.disconnect();
}

// input change events
// these need to be for each section: noise, osc & hard sync

// ~~~~~~~~~~~~~~~~~ noise
// get type buttons
const noiseButtons = document.querySelectorAll('.node-noise .select--btns button');

// set noise type
noiseButtons.forEach( (butt, i) => {
  butt.addEventListener('click', () => {
    
    // change the current button state
    const lastButt = document.querySelector('button[data-selected="true"]');
    lastButt.dataset.selected = 'false';
    // switch to our new button
    butt.dataset.selected = 'true';
    
    // update audio graph
    update(noiseParams, 'type', Number(butt.dataset.type));
  })
} )

// play/pause
const noisePlay = document.querySelector('.node-noise .play-button');
noisePlay.addEventListener('click', function() {

  // check if context is in suspended state (autoplay policy)
  if (actx.state === 'suspended') {
      actx.resume();
  }

  // play or pause track depending on state
  if (this.dataset.playing === 'false') {
    play(noiseNode);
    this.dataset.playing = 'true';
    this.innerText = 'Pause';
  } else if (this.dataset.playing === 'true') {
    stop(noiseNode);
    this.dataset.playing = 'false';
    this.innerText = 'Play';
  }

}, false);

// ~~~~~~~~~~~~~~~~~~ oscillator
// get osc buttons
const oscButtons = document.querySelectorAll('.node-osc .select--btns button');

// set noise type
oscButtons.forEach( (butt, i) => {
  butt.addEventListener('click', () => {
    
    // change the current button state
    const lastButt = document.querySelector('button[data-selected="true"]');
    lastButt.dataset.selected = 'false';
    // switch to our new button
    butt.dataset.selected = 'true';
    
    // update audio graph
    update(oscParams, 'wave', Number(butt.dataset.type));
  })
} )

// update other params on input
const oscInputs = document.querySelectorAll('.node-osc div input');
oscInputs.forEach( (inp, i) => {
  inp.addEventListener('input', () => {
    update(inp.name, Number(inp.value));
  })
})

// play/pause
const oscPlay = document.querySelector('.node-osc .play-button');
oscPlay.addEventListener('click', function() {

  // check if context is in suspended state (autoplay policy)
  if (actx.state === 'suspended') {
      actx.resume();
  }

  // play or pause track depending on state
  if (this.dataset.playing === 'false') {
    play(oscNode);
    this.dataset.playing = 'true';
    this.innerText = 'Pause';
  } else if (this.dataset.playing === 'true') {
    stop(oscNode);
    this.dataset.playing = 'false';
    this.innerText = 'Play';
  }

}, false);

// ~~~~~~~~~~~~~~~~~~~~ hard sync
// NB slightly different as we need multiple nodes


// ~~~~~~~~~~~~~~~~~~~~~~ analysing

