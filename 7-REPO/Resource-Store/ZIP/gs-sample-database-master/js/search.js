"use strict";

window.keywords = [
  "drum",
  "tom",
  "snare",
  "openhat",
  "kick",
  "clap",
  "crash",
  "cymbal",
  "bitcoder",
  "vocoder",
  // "hat",
  // "vocal",
  // "impact",
  // "builup",
  // "glass",
  // "bass",
  // "perc",
  // "hihat",
  // "loop",
  // "reverbe",
  // "synth",
  // "words",
  // "chord",
  // "arp",
];

function search(elForm, elInput, elKeywords, elResult) {
  this.elForm = elForm;
  this.elInput = elInput;
  this.elResult = elResult;
  this.elKeywords = elKeywords;

  this._keywords();
  this.elForm.onsubmit = this._evt_send.bind(this);
  this.elInput.oninput = this._evt_autoComplete.bind(this);
}

search.prototype = {
  setInput(v) {
    this.elInput.value = v;
  },
  _clearResult() {
    this.elResult.innerHTML = "";
  },
  _keywords() {
    keywords.forEach((k, i) => {
      var a = document.createElement("a");

      a.innerText = k;
      a.href = "#";
      a.innerHTML += " ";
      a.onclick = this._evt_keywordsOnclick.bind(this, k);
      this.elKeywords.appendChild(a);
    });
  },
  _evt_send(e) {
    e && e.preventDefault();
    window.db.hasOwnProperty(this.elInput.value) &&
      samples.loadsamples.call(
        samples,
        document.getElementById("result"),
        window.api.cloudStorageDownload(this.elInput.value, "getMetadata")
      );
    // else {
    // 	// no result found
    // }
    setHash(this.elInput.value);
    this._clearResult();
    return false;
  },
  _evt_keywordsOnclick(query) {
    this.elInput.value = query;
    this.elForm.onsubmit();
    return false;
  },
  _evt_autoComplete() {
    this.elKeywords.querySelectorAll("a").forEach((k) => {
      k.classList.toggle(
        "hide",
        !(
          this.elInput.value === "" ||
          k.innerHTML.includes(this.elInput.value.toLowerCase())
        )
      );
    });
  },
};
