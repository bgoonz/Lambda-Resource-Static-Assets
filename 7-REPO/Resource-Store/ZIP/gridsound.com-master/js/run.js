"use strict";

window.DOM = {};
document.querySelectorAll("[id]").forEach((el) => {
  DOM[el.id] = el;
  if ("toRemove" in el.dataset) {
    el.remove();
    el.removeAttribute("id");
  }
});
document.querySelectorAll(".btn").forEach((btn) => {
  rippleEffectInit(btn);
});

main.init();
authPage.init();
userPage.init();
cmpPage.init();
resetpassPage.init();
forgotpassPage.init();

gsapiClient
  .getMe()
  .then((me) => {
    main.loggedIn(me);
  })
  .finally(() => {
    DOM.headAuth.dataset.spin = "";
    main.run();
  });
