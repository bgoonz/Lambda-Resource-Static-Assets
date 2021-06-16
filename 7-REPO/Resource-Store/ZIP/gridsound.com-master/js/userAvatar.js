"use strict";

const userAvatar = {
  setAvatar(el, url) {
    const img = el.querySelector("img");

    el.classList.remove("userAvatarHas");
    img.onload = userAvatar.onload;
    img.onerror = userAvatar.onerror;
    img.src = `${url || "/"}?s=120&d=404`;
  },
  onload(e) {
    e.target.parentNode.classList.add("userAvatarHas");
  },
  onerror(e) {
    e.target.parentNode.classList.remove("userAvatarHas");
  },
};
