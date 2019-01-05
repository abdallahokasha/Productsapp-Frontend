import firebase from 'firebase'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC3LQIeOZHhWKTxBLmhzPFGQNxsLpzEUY4",
    authDomain: "products-fb1dc.firebaseapp.com",
    databaseURL: "https://products-fb1dc.firebaseio.com",
    projectId: "products-fb1dc",
    storageBucket: "products-fb1dc.appspot.com",
    messagingSenderId: "568937472136"
  };
  
var fire = firebase.initializeApp(config);

export default fire;