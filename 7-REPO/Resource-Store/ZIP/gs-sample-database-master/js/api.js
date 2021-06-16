"use strict";

var config = {
  apiKey: "AIzaSyBc3nuDxk9rn0SNe6Bkj5fyZI8IKk0m4m8",
  authDomain: "gridsound-111f5.firebaseapp.com",
  databaseURL: "https://gridsound-111f5.firebaseio.com",
  projectId: "gridsound-111f5",
  storageBucket: "gridsound-111f5.appspot.com",
  messagingSenderId: "1063806749469",
};

// var config = {
// 	apiKey: "AIzaSyCi9QugM18UlOon9YEMgZHCYdtSramztVM",
// 	authDomain: "gridsound-210e3.firebaseapp.com",
// 	databaseURL: "https://gridsound-210e3.firebaseio.com",
// 	projectId: "gridsound-210e3",
// 	storageBucket: "gridsound-210e3.appspot.com",
// 	messagingSenderId: "379607295352"
// };

window.firebase.defaultApp = firebase.initializeApp(config);
window.firebase.defaultStorage = firebase.storage();
window.firebase.storageRef = window.firebase.defaultStorage.ref();

window.api = {
  cloudStorageDownload(search, fct) {
    return Promise.all(
      window.db[search].map((s) => {
        return window.firebase.storageRef.child(`${search}/${s}`)[fct]();
      })
    );
  },
};
