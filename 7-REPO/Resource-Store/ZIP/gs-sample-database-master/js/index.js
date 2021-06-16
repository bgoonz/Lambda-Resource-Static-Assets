"use strict";

function removeChildren(el) {
  el.innerHTML = "";
}

function setHash(v) {
  location.hash = "#/" + v.trim().replace(/\s+/g, "+");
}

function isValidHash(hash) {
  return hash && hash[0] === "#" && hash[1] === "/" && hash.length > 2;
}

function switchTheme() {
  var clHtml = document.querySelector("html").classList;

  clHtml.toggle("dark");
  clHtml.toggle("light");
  return false;
}

function switchPage() {
  var clApp = document.getElementById("app").classList;

  clApp.toggle("result", isValidHash(location.hash));
  clApp.toggle("main", !isValidHash(location.hash));
  if (isValidHash(location.hash)) {
    search.setInput(location.hash.replace(/\+/g, " ").substring(2));
  } else {
    selections.clear();
    sequencer.ui.clear();
    search.setInput("");
  }
}

function switchTabs(elPages, curr) {
  for (var i = 0; i < this.length; ++i) {
    this[i].classList.remove("active");
    elPages[i].classList.remove("active");
  }
  this[curr].classList.add("active");
  elPages[curr].classList.add("active");
}

function selectionsTabs() {
  document.querySelectorAll(".tab").forEach((tab, i, elTabs) => {
    tab.onclick = switchTabs.bind(
      elTabs,
      document.querySelectorAll(".tab-content"),
      i
    );
  });
}

// Compatibility Safari
gswaBuffer.prototype._setDataFromArrayBuffer = function (arrayBuffer) {
  return new Promise((res, rej) => {
    this.ctx.decodeAudioData(
      arrayBuffer,
      (audioBuffer) => {
        res(this._setDataFromAudioBuffer(audioBuffer));
      },
      rej
    );
  });
};

function gsSampleDatabase() {
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  window.ctx = new window.AudioContext();
  window.onhashchange = switchPage;
  window.search = new search(
    document.querySelector("form"),
    document.querySelector("input"),
    document.getElementById("keywords"),
    document.getElementById("result")
  );
  window.samples = new Samples();
  window.selections = new Selections();
  document.getElementById("theme").onclick = switchTheme;

  sequencer.init(4, 4);

  switchPage();
  selectionsTabs();
  isValidHash(location.hash) && search._evt_send();
}

gsSampleDatabase();
