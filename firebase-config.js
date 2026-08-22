/* Adeptly — Firebase project config (masar-22cd5). */
var firebaseConfig = {
  apiKey: "AIzaSyA3LO2k3Rn2cMGZJz1Kk_udnm3F8iL5lx4",
  authDomain: "masar-22cd5.firebaseapp.com",
  projectId: "masar-22cd5",
  storageBucket: "masar-22cd5.firebasestorage.app",
  messagingSenderId: "476980914736",
  appId: "1:476980914736:web:43051aacbcb02c09ea1bf5"
};

// App Check (anti-bot). Paste your reCAPTCHA v3 site key from Firebase Console here,
// then re-upload this file. Leave as-is to keep App Check off for now.
var APPCHECK_SITE_KEY = "6LdlFiwtAAAAAK6ctAPdpLuU7J0pCvMF0Au66zl-";

// Admin: the real control is a field  admin: true  on a user's document in Firestore.
// You can also list emails here to show the Admin menu (database access still needs the
// admin:true flag). To make yourself admin: Firebase Console → Firestore → users →
// your user document → add field  admin  (boolean) = true.
var ADMIN_EMAILS = [];
