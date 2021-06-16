"use strict";

window.sequencer = {
  init(b, s) {
    sequencer.beats = b;
    sequencer.steps = s;
    sequencer.measure = b * s;
    sequencer.bpm = 120;

    sequencer.ui._init();
    sequencer.audio._init();
  },
  setBPM(n) {
    sequencer.bpm = n;
  },
  stepTime() {
    return 60 / (sequencer.bpm * sequencer.steps);
  },
};
