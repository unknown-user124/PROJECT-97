
//ADD YOUR FIREBASE LINKS HERE
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

    usernameafterwelcome=localStorage.getItem("username");
    document.getElementById("hTAG").innerHTML="Welcome "+ usernameafterwelcome+" "+"!";
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-" + Room_names);
      row="<div class='INPUT2' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("divTAG").innerHTML +=row;
      //End code
      });});}
getData();

  
    // Initialize Firebase

  
  function addROOM() {
      roomnameinput=document.getElementById("INPUT2").value;
      firebase.database().ref("/").child(roomnameinput).update({
      purpose:"addingroomname" 
      });
  localStorage.setItem("the_roomname",roomnameinput);
  window.location="kwitter_page.html";
  }
function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("roomname",name);
  window.location="kwitter_page.html";
}
function logoutime() {
  localStorage.removeItem("username");
  localStorage.removeItem("roomname");
  window.location="index.html";
}
