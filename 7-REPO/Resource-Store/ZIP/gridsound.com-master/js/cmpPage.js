"use strict";

const cmpPage = {
  init() {
    this.cmp = new Cmp();
    DOM.cmpPageCmp.append(this.cmp.rootElement);
    Object.freeze(this);
  },
  show(cmpId) {
    return gsapiClient.getComposition(cmpId).then(
      (data) => {
        this.cmp.setData(data.composition.data);
        this.cmp.setUserData(data.user);
        this.cmp.showUser(true);
      },
      (err) => main.error(err.code)
    );
  },
};
