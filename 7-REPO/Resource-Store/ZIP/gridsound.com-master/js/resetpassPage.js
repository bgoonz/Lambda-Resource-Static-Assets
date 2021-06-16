"use strict";

const resetpassPage = {
  init() {
    DOM.resetpassForm.onsubmit = this._submit.bind(
      this,
      DOM.resetpassFormSubmit,
      DOM.resetpassFormError,
      DOM.resetpassFormPass,
      DOM.resetpassFormPass2
    );
  },
  show(email, code) {
    DOM.resetpassPage.classList.remove("sended");
    this.email = email;
    this.code = code;
    DOM.resetpassFormPass2.value = DOM.resetpassFormPass.value = "";
  },

  // private:
  _submit(btn, error, pass, pass2) {
    if (pass.value === pass2.value) {
      error.textContent = "";
      btn.classList.add("btn-loading");
      gsapiClient
        .resetPassword(this.email, this.code, pass.value)
        .finally(() => btn.classList.remove("btn-loading"))
        .then(
          () => {
            DOM.resetpassPage.classList.add("sended");
          },
          (err) => {
            error.textContent = err.msg;
          }
        );
    }
    return false;
  },
};
