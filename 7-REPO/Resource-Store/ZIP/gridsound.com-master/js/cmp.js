"use strict";

class Cmp {
  constructor() {
    const el = DOM.cmp.cloneNode(true),
      elPlay = el.querySelector(".cmpPlay");

    this.rootElement = el;
    this._slider = el.querySelector(".cmpSliderInput");
    this._currTime = el.querySelector(".cmpCurrentTime");
    this._sliderValue = el.querySelector(".cmpSliderValue");
    this._slider.onfocus = this._onfocusSlider.bind(this);
    this._slider.oninput = this._oninputSlider.bind(this);
    this._slider.onchange = this._onchangeSlider.bind(this);
    elPlay.onclick = this._onclickPlay.bind(this);
  }

  setData(cmp) {
    const el = this.rootElement,
      dur = (cmp.duration * 60) / cmp.bpm,
      durMin = Math.floor(dur / 60),
      durSec = Math.round(dur % 60) + "";

    this.data = cmp;
    this._slider.max = cmp.duration;
    el.querySelector(".cmpNameLink").textContent = cmp.name;
    el.querySelector(".cmpBPM").textContent = cmp.bpm;
    el.querySelector(".cmpDur").textContent = `${durMin}:${durSec.padStart(
      2,
      "0"
    )}`;
  }
  setLink(id) {
    const ln = this.rootElement.querySelector(".cmpNameLink");

    id ? ln.setAttribute("href", `#/cmp/${id}`) : ln.removeAttribute("href");
  }
  setUserData(u) {
    const root = this.rootElement;

    root.querySelector(".cmpUser").href = `#/u/${u.username}`;
    root.querySelector(
      ".cmpUserAvatar"
    ).style.backgroundImage = `url(${u.avatar})`;
    root.querySelector(".cmpUserUsername").textContent = u.username;
    root.querySelector(".cmpUserName").textContent =
      u.firstname || u.lastname ? `- ${u.firstname} ${u.lastname}` : "";
  }
  showUser(b) {
    this.rootElement.classList.toggle("cmpUserShown", b);
  }
  play() {
    this.rootElement.classList.add("cmpPlaying");
    this.rootElement.querySelector(".cmpPlay").dataset.icon = "pause";
  }
  stop() {
    this.rootElement.classList.remove("cmpPlaying");
    this.rootElement.querySelector(".cmpPlay").dataset.icon = "play";
    this.currentTime(0);
    delete this._focused;
  }
  currentTime(t, force) {
    if (!this._focused || force === "-f") {
      const el = this.rootElement,
        cmp = this.data,
        sec = (t * 60) / cmp.bpm,
        durMin = Math.floor(sec / 60),
        durSec = Math.round(sec % 60) + "";

      this._currTime.textContent = `${durMin}:${durSec.padStart(2, "0")}`;
      this._slider.value = t;
      this._sliderValue.style.width = `${(t / cmp.duration) * 100}%`;
    }
  }

  // events:
  _onclickPlay() {
    main.play(this);
  }
  _onfocusSlider() {
    this._focused = true;
  }
  _oninputSlider() {
    this.currentTime(+this._slider.value, "-f");
  }
  _onchangeSlider() {
    main.currentTime(+this._slider.value);
    document.activeElement.blur();
    delete this._focused;
  }

  // private:
  _fillInfo(cmp) {}
}
