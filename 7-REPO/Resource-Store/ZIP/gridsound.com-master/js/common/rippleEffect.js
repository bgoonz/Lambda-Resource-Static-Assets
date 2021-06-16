function rippleEffectInit(el) {
  el.classList.add("rippleEffect");
  el.addEventListener("click", rippleEffectExec, false);
}

function rippleEffectExec(e) {
  const el = e.currentTarget,
    circ = document.createElement("span"),
    bcr = el.getBoundingClientRect(),
    x = e.pageX - bcr.left,
    y = e.pageY - bcr.top;

  clearTimeout(el._rippleId);
  if (el._rippleCirc) {
    el._rippleCirc.remove();
  }
  el._rippleCirc = circ;
  circ.className = "rippleEffect-circle";
  circ.style.left = (x / bcr.width) * 100 + "%";
  circ.style.top = (y / bcr.height) * 100 + "%";
  el.prepend(circ);
  el.classList.remove("rippleEffect-active");
  setTimeout(() => el.classList.add("rippleEffect-active"), 100);
  el._rippleId = setTimeout(() => {
    el.classList.remove("rippleEffect-active");
    circ.remove();
  }, 700);
}
