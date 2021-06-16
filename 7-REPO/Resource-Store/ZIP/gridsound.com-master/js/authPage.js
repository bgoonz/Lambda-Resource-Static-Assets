"use strict";

const authPage = {
  init() {
    DOM.authPageLogin.onsubmit = () =>
      this._signSubmit("login", DOM.authPageLoginBtn, DOM.authPageLoginError, [
        DOM.authPageLoginEmail,
        DOM.authPageLoginPass,
      ]);
    DOM.authPageSignup.onsubmit = () =>
      this._signSubmit(
        "signup",
        DOM.authPageSignupBtn,
        DOM.authPageSignupError,
        [
          DOM.authPageSignupUsername,
          DOM.authPageSignupEmail,
          DOM.authPageSignupPass,
        ]
      );
  },
  show() {
    DOM.authPageSignupUsername.value =
      DOM.authPageSignupEmail.value =
      DOM.authPageSignupPass.value =
        "";
  },

  // private:
  _signSubmit(signAction, btn, error, inps) {
    btn.classList.add("btn-loading");
    error.textContent = "";
    DOM.headAuth.dataset.spin = "on";
    gsapiClient[signAction]
      .apply(
        gsapiClient,
        inps.map((inp) => inp.value)
      )
      .finally(() => btn.classList.remove("btn-loading"))
      .then(
        (me) => {
          inps.forEach((inp) => (inp.value = ""));
          main.loggedIn(me);
          location.hash = `#/u/${me.usernameLow}`;
        },
        (res) => {
          DOM.headAuth.dataset.spin = "";
          error.textContent = res.msg;
        }
      );
    return false;
  },
};
