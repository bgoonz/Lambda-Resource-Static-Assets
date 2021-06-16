"use strict";

function Selections() {
  var root = this._init();

  this.rootElement = root;
  this.selected = [];
  this.elSelectedNb = document.getElementById("selected-nb");
}

Selections.prototype = {
  selectedNb(n) {
    this.elSelectedNb.textContent = n;
  },
  isAlreadySelected(id) {
    if (this.selected.indexOf(id) !== -1) {
      document.getElementById(id).classList.toggle("selected");
    }
  },
  toggle(id) {
    if (this.selected.indexOf(id) === -1) {
      this.add(id);
      sequencer.ui.add(id);
    } else {
      this.remove(id);
      sequencer.ui.remove(id);
    }
    document.getElementById(id).classList.toggle("selected");
    this.selectedNb(this.selected.length);
  },
  cloneElUiBlock(id) {
    var uiBlock = samples._newAudioBlock(id, samples.bank[id].name);

    uiBlock.rootElement.setAttribute("data-id", id);
    uiBlock.rootElement.classList.add("selected");
    this.rootElement.appendChild(uiBlock.rootElement);
    samples._fillAudioBlock(uiBlock, id);
    samples._addEventAudioBlock(uiBlock.rootElement);
    return uiBlock.rootElement;
  },
  add(id) {
    this.cloneElUiBlock(id);
    this.selected.push(id);
  },
  remove(id) {
    this.rootElement.removeChild(
      this.rootElement.querySelector(`[data-id="${id}"]`)
    );
    this.selected.splice(this.selected.indexOf(id), 1);
  },
  clear() {
    this.rootElement.innerHTML = "";
    this.selected = [];
  },
  _init() {
    return document.getElementById("selected");
  },
};
