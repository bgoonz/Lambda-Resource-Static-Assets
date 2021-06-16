"use strict";

sequencer.audio = {
  _init() {
    sequencer.audio.pattern = [];
  },
  startLoopOnce(when) {
    var i = 0,
      id,
      stepTime = sequencer.stepTime(),
      pattern = sequencer.audio.pattern;

    for (; i < sequencer.measure; ++i) {
      for (id in pattern) {
        if (pattern[id][i]) {
          samples.bank[id].waBuf.start(stepTime * i + when);
        }
      }
    }
  },
  play() {
    var aud = sequencer.audio,
      when = window.ctx.currentTime,
      dur = sequencer.stepTime() * sequencer.measure;

    aud.startLoopOnce(when);
    aud._interv = setInterval(function () {
      aud.startLoopOnce((when += dur));
    }, (dur / 1) * 1000);
  },
  stop() {
    clearTimeout(sequencer.audio._interv);
    for (var id in sequencer.audio.pattern) {
      samples.bank[id].waBuf.stop();
    }
  },
};
