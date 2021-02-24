
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDSC4rBYOwD18LHvgnrW47ixdsLcP6F540",
    authDomain: "kwitterproject-real-devansh.firebaseapp.com",
    databaseURL: "https://kwitterproject-real-devansh-default-rtdb.firebaseio.com",
    projectId: "kwitterproject-real-devansh",
    storageBucket: "kwitterproject-real-devansh.appspot.com",
    messagingSenderId: "1015276144269",
    appId: "1:1015276144269:web:e4ac6ca25b535f4bc784c4",
    measurementId: "G-NLF7YVJ55F"
  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

function Add_user_name() {
    usernameinput=document.getElementById("input2").value;
    firebase.database().ref("/").child(usernameinput).update({
    purpose:"addinguser" 
    });

}
