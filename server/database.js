'use strict';

var firebase = require("firebase");

// Initialize the app with a service account, granting admin privileges
firebase.initializeApp({
  databaseURL: "https://hackthe6ix-daaa3.firebaseio.com/",
  serviceAccount: "credentials.json"
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
const db = firebase.database();
const ref = db.ref("server");
const userRef = ref.child("users");
const entryRef = ref.child("entries")

module.exports = {
   saveUser: function(user){
      var id = user.id;
      delete user[id];
      userRef.child(id).set(user);
   },

   saveEntry: function(entry){
      var newKey = entryRef.child(entry.userId).push().key;
      entryRef.child(newKey).set(entry);
      userRef.child(entry.userId + '/posts/' + newKey).update(entry);
   },

   updateEntry: function(entry){
      entryRef.child(entry.id).update(entry);
   },

   retrieveEntryByUser: function(user){
      var currentRef = userRef.child(user.id);
      currentRef.on("value", function(snapshot) {
         // console.log(snapshot.val());
         return snapshot.val();
      }, function (errorObject) {
         console.log("Retrieving the posts from " + user.name);
      });
   }

};
