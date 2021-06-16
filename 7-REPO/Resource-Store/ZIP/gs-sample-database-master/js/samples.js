"use strict";

function Samples() {
  this.bank = {};
  this.currWaBuff = null;
}

Samples.prototype = {
  _newAudioBlock(id, name) {
    var uiBlock = new gsuiAudioBlock();

    uiBlock.name(name);
    uiBlock.datatype("buffer");
    document.getElementById(id) || (uiBlock.rootElement.id = id);
    return uiBlock;
  },
  _fillAudioBlock(uiBlock, id) {
    if (this.bank[id].waBuf) {
      var waBuf = this.bank[id].waBuf;

      uiBlock.waBuf = waBuf;
      uiBlock.updateData(waBuf.buffer);
      uiBlock.rootElement.oncontextmenu = this.stop.bind(this);
    }
  },
  _addEventAudioBlock(elUiBlock) {
    var id = elUiBlock.id || elUiBlock.getAttribute("data-id");

    if (!elUiBlock.querySelector(".btn")) {
      var elBtnPlay = document.createElement("div"),
        elBtnSelect = document.createElement("div");

      elBtnPlay.classList.add("btn", "play");
      elBtnSelect.classList.add("btn", "select");
      elUiBlock.appendChild(elBtnPlay);
      elUiBlock.appendChild(elBtnSelect);
    }
    elUiBlock.querySelector(".btn.play").onclick = this.play.bind(this, id);
    elUiBlock.querySelector(".btn.select").onclick = selections.toggle.bind(
      selections,
      id
    );
  },
  play(id, when) {
    this.stop();
    this.currWaBuff = this.bank[id].waBuf;
    this.currWaBuff.start(); // this.currWaBuff.start( when || 0 );
    document.getElementById(id).gsuiAudioBlock.start();
    selections.selected.indexOf(id) !== -1 &&
      selections.rootElement
        .querySelector(`[data-id="${id}"]`)
        .gsuiAudioBlock.start();
  },
  stop() {
    this.currWaBuff && this.currWaBuff.stop();
    return false;
  },
  loadSample(sampleData, url, id, uiBlock) {
    var waBuf = new gswaBuffer();

    waBuf.setContext(window.ctx);
    waBuf.connect(window.ctx.destination);
    waBuf.load(url).then((_) => {
      this.bank[id] = sampleData;
      this.bank[id].waBuf = waBuf;
      this._fillAudioBlock(uiBlock, id);
      this._addEventAudioBlock(uiBlock.rootElement);
      selections.isAlreadySelected(id);
    });
  },
  loadsamples(el, data) {
    data &&
      data.then((metaData) => {
        metaData.forEach((sampleData) => {
          var url = sampleData.downloadURLs[0];
          var token = url.substring(
            url.indexOf("token=") + "token=".length,
            url.length
          );
          var uiBlock = this._newAudioBlock(token, sampleData.name);

          el.appendChild(uiBlock.rootElement);
          if (token in this.bank) {
            this._fillAudioBlock(uiBlock, token);
            this._addEventAudioBlock(uiBlock.rootElement);
            selections.isAlreadySelected(token);
          } else {
            this.loadSample(sampleData, url, token, uiBlock);
          }
        });
      });
  },
};
