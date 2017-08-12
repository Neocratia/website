var firebase = require('firebase');
// Initialize Firebase
var config = {
  databaseURL: process.env.firebase_url
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

// Get a reference to the database service
var database = firebase.database();
