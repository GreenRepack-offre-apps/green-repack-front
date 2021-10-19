// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_backend: "http://localhost:5000",
  //url_backend: "https://green-repack.herokuapp.com",
  firebaseConfig : {
    apiKey: "AIzaSyB9HiPcWV1NFEJG1d7hFUz-aJ6egMibNwk",
    authDomain: "green-repack-c4328.firebaseapp.com",
    databaseURL: "https://green-repack-c4328-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "green-repack-c4328",
    storageBucket: "green-repack-c4328.appspot.com",
    messagingSenderId: "848770591222",
    appId: "1:848770591222:web:1ec5e8b42a5e6ca4beffd7",
    measurementId: "G-BGFRLEFKTK"
  },
  onesignal_appId: "42ac6aa8-edc3-43dc-b1da-15670bdcd490", //prod
  //onesignal_appId: "50655600-2a1d-4f7e-9c0d-19667fd49ec0", //localhost
  admin_mail:"green-repack@",
  admin_remboursement_static_link: "https://buy.stripe.com/test_6oE7vogCl76J8H66oo"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
