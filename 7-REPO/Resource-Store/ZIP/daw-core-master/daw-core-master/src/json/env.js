"use strict";

DAWCore.json.env = (obj) => ({
  toggle: true,
  attack: 0.04,
  hold: 0,
  decay: 0.08,
  sustain: 0.75,
  release: 0.25,
  ...obj,
});
