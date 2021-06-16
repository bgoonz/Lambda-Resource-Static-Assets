"use strict";

const forgotpassPage = {
  init() {
    DOM.forgotpassForm.onsubmit = this._submit.bind(
      this,
      DOM.forgotpassFormSubmit,
      DOM.forgotpassFormError,
      DOM.forgotpassFormEmail
    );
  },
  show() {
    DOM.forgotpassPage.classList.remove("sended");
    DOM.forgotpassFormEmail.value = "";
  },

  // private:
  _submit(btn, error, email) {
    btn.classList.add("btn-loading");
    error.textContent = "";
    gsapiClient
      .recoverPassword(email.value)
      .finally(() => btn.classList.remove("btn-loading"))
      .then(
        () => {
          DOM.forgotpassPage.classList.add("sended");
        },
        (res) => {
          error.textContent = res.msg;
        }
      );
    return false;
  },
};
