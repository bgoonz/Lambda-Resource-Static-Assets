"use strict";

sequencer.ui = {
  _evt_updateBpm() {
    var BPM = this.elMenu.uiSlider.value;

    sequencer.setBPM(BPM);
    this.elMenu.elBpm.textContent = BPM;
  },
  _state() {
    var clBtn = this.elMenu.elBtnState.classList;

    clBtn.contains("play") && sequencer.audio.play();
    clBtn.contains("stop") && sequencer.audio.stop();
    clBtn.toggle("stop");
    clBtn.toggle("play");
  },
  newRow(id) {
    var elRow = document.createElement("div"),
      elMeasure = document.createElement("div"),
      elTitle = document.createElement("div"),
      elH5 = document.createElement("h5"),
      sName = samples.bank[id].name,
      s = 0;

    elRow.setAttribute("data-id", id);
    elRow.className = "seq-row";
    elTitle.className = "title";
    elH5.textContent = sName;
    elMeasure.className = "measure";

    elTitle.onclick = samples.play.bind(samples, id);

    for (; s < sequencer.measure; ++s) {
      var elStep = document.createElement("div");

      elStep.className = "step";
      elStep.onclick = sequencer.ui.toggleStep.bind(
        sequencer.ui,
        elStep,
        id,
        s
      );
      elMeasure.appendChild(elStep);
    }
    elTitle.appendChild(elH5);
    elRow.appendChild(elTitle);
    elRow.appendChild(elMeasure);
    sequencer.ui.elSequencer.seqRows.appendChild(elRow);
  },
  add(id) {
    sequencer.ui.newRow(id);
    sequencer.audio.pattern[id] = Array(sequencer.measure).fill(0);
  },
  remove(id) {
    var elSequencer = sequencer.ui.elSequencer;

    elSequencer.seqRows.removeChild(
      elSequencer.querySelector(`[data-id="${id}"]`)
    );
    delete sequencer.audio.pattern[id];
  },
  clear() {
    var ui = sequencer.ui;

    ui.elSequencer.seqRows.innerHTML = "";
    ui.selected = [];
    ui.elMenu.uiSlider.setValue(120);
    ui._evt_updateBpm();
  },
  toggleStep(elStep, id, s) {
    elStep.classList.toggle("active");
    sequencer.audio.pattern[id][s] ^= 1;
  },
  _init() {
    var ui = sequencer.ui,
      elMenu = document.getElementById("seq-menu"),
      elSequencer = document.querySelector(".sequencer"),
      elSeqRows = document.getElementById("seq-rows"),
      elBtnState = document.getElementById("state"),
      uiSlider = new gsuiSlider(),
      elSlider = document.getElementById("sliderWrap"),
      elBpm = document.getElementById("bpm");

    ui.elSequencer = elSequencer;
    ui.elSequencer.seqRows = elSeqRows;

    elSlider.appendChild(uiSlider.rootElement);
    uiSlider.oninput = ui._evt_updateBpm.bind(ui);
    uiSlider.resize(150, 24);
    uiSlider.options({ min: 10, max: 240, step: 1, value: sequencer.bpm });

    elBtnState.onclick = ui._state.bind(ui);
    elMenu.elBtnState = elBtnState;
    elMenu.uiSlider = uiSlider;
    elMenu.elBpm = elBpm;

    ui.elMenu = elMenu;
    ui._evt_updateBpm();
  },
};
