// https://github.com/Flarp/better-oscillator/blob/master/worklet.js
const saw = v => v - Math.floor(v);

class NoiseProcessor extends AudioWorkletProcessor {
  constructor() {
    super();

    this.type = 0; // white

    // this.phase = 0;
    // this.sync_phase = 0;
    // this.prev_sync_phase = 0
  }
  static get parameterDescriptors() {
    return [
      {
        name: "type",
        defaultValue: 0,
        max: 1,
        min: 0
      }
    ];
  }
  process(inputs, outputs, params) {
    /* using the inputs (or not, as needed), write the output into each of the outputs */

    /*
     The input and output arrays are each _input_ first, _then_ each channel, then each byte
     So you want for the bytes in the first channel, of the first item: input[0].channel[0][i] = byte i
     */
    /*
     We just need to fill the output with noise, generated based on which type
     */
    
    // we don't actually care about inputs
    // there are no inputs - inputs[0] would be enough if there were
    // these are the channels
    let input = inputs[0];
    let output = outputs[0];

    // setup
    const noiseType = params.type[0];

    output.forEach( channel => {
      for (let i=0; i<channel.length; i++) {

        if (noiseType === 0) { // if white
          channel[i] = (Math.random()+Math.random())/2;
        } else { // else gaussian
          // DO NOT DO THIS 😆 this is just a quick way of normalising random
          let val = (Math.random()
           +Math.random()
           +Math.random()
           +Math.random()
           +Math.random()
           +Math.random()
           )*0.15;
          channel[i] = val;
        }
        
      }
    })

    return true;

  }
}// constructor

registerProcessor("noise", NoiseProcessor);

