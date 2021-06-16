"use strict";

DAWCore.json.synth = (obj) => ({
  name: "synth",
  dest: "main",
  env: DAWCore.json.env(),
  lfo: DAWCore.json.lfo(),
  oscillators: {
    0: DAWCore.json.oscillator({ gain: 0.75 }),
    1: DAWCore.json.oscillator({ order: 1, gain: 0.2, detune: -24 }),
  },
  ...obj,
});
