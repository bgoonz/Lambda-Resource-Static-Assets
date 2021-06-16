"use strict";

class GSPianoroll {
  constructor() {
    const uiPianoroll = new gsuiPianoroll(),
      dataKeys = new DAWCore.controllers.keys({
        dataCallbacks: {
          addKey: (id, blc) => uiPianoroll.addKey(id, blc),
          removeKey: (id) => uiPianoroll.removeKey(id),
          changeKeyProp: (id, prop, val) =>
            uiPianoroll.changeKeyProp(id, prop, val),
        },
      });

    this.rootElement = uiPianoroll;
    this.timeline = uiPianoroll.timeline;
    this._dataKeys = dataKeys;
    this._dawcore = this._keysId = this._patternId = null;
    Object.seal(this);

    uiPianoroll.setData(dataKeys.data);
    uiPianoroll.setCallbacks({
      onchange: this._onchange.bind(this),
    });
    uiPianoroll.uiKeys.onkeydown = (midi) =>
      this._dawcore.pianoroll.liveKeydown(midi);
    uiPianoroll.uiKeys.onkeyup = (midi) =>
      this._dawcore.pianoroll.liveKeyup(midi);
    this.rootElement.addEventListener(
      "gsuiEvents",
      this._ongsuiEvents.bind(this)
    );
  }

  // .........................................................................
  setDAWCore(core) {
    this._dawcore = core;
  }
  selectPattern(id) {
    if (id !== this._patternId) {
      this._patternId = id;
      this._keysId = null;
      this._dataKeys.clear();
      this.rootElement.reset();
      // this.rootElement.toggleShadow( !id );
      if (id) {
        const pat = this._dawcore.get.pattern(id),
          keys = this._dawcore.get.keys(pat.keys);

        this._keysId = pat.keys;
        this._dataKeys.change(keys);
        this.rootElement.scrollToKeys();
      }
    }
  }
  change(obj) {
    if ("beatsPerMeasure" in obj || "stepsPerBeat" in obj) {
      this.rootElement.timeDivision(
        this._dawcore.get.beatsPerMeasure(),
        this._dawcore.get.stepsPerBeat()
      );
    }
    if ("patternKeysOpened" in obj) {
      this.selectPattern(obj.patternKeysOpened);
    } else {
      const keys = obj.keys && obj.keys[this._keysId];

      if (keys) {
        this._dataKeys.change(keys);
      }
    }
  }
  clear() {
    this._keysId = this._patternId = null;
    this._dataKeys.clear();
    this.rootElement.reset();
  }
  getUIKeys() {
    return this.rootElement.uiKeys;
  }

  // .........................................................................
  _ongsuiEvents(e) {
    const d = e.detail;

    switch (d.component) {
      case "gsuiPianoroll":
        switch (d.eventName) {
          case "changeKeysProps":
            this._dawcore.callAction(
              "changeKeysProps",
              this._patternId,
              ...d.args
            );
            break;
        }
        break;
      case "gsuiTimeline":
        switch (d.eventName) {
          case "changeLoop":
            d.args[0] !== false
              ? this._dawcore.pianoroll.setLoop(...d.args)
              : this._dawcore.pianoroll.clearLoop();
            break;
          case "changeCurrentTime":
            this._dawcore.pianoroll.setCurrentTime(d.args[0]);
            break;
        }
        break;
    }
    e.stopPropagation();
  }

  // .........................................................................
  _onchange(obj, ...args) {
    switch (
      obj // tmp
    ) {
      case "add":
        this._dawcore.callAction("addKey", this._patternId, ...args);
        break;
      case "move":
        this._dawcore.callAction("moveKeys", this._patternId, ...args);
        break;
      case "clone":
        this._dawcore.callAction("cloneSelectedKeys", this._patternId, ...args);
        break;
      case "remove":
        this._dawcore.callAction("removeKeys", this._patternId, ...args);
        break;
      case "cropEnd":
        this._dawcore.callAction("cropEndKeys", this._patternId, ...args);
        break;
      case "redirect":
        this._dawcore.callAction("redirectKey", this._patternId, ...args);
        break;
      case "selection":
        this._dawcore.callAction("selectKeys", this._patternId, ...args);
        break;
      case "unselection":
        this._dawcore.callAction("unselectAllKeys", this._patternId, ...args);
        break;
      case "unselectionOne":
        this._dawcore.callAction("unselectKey", this._patternId, ...args);
        break;
    }
  }
}

Object.freeze(GSPianoroll);
