//YOUR FIREBASE LINKS
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

user_name=localStorage.getItem("username");
room_name=localStorage.getItem("roomname");

function sendDEVANSH() {
      msg=document.getElementById("inputFORmsg").value
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like=0
      });
      document.getElementById("inputFORmsg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data["name"];
message=message_data["message"];
like=message_data["like"];
name_with_tag="<h4>"+name+"<img class='user_trick' src='tick.png></h4";
message_with_tag= "<h4 class='message_h4'>"+ message + "</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs up'>Like:" + like +"</span></button><hr>";

row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+= row;
//End code
      } });  }); }
getData();


function updateLike(message_id) {
console.log("clicked on like button -" + message_id);
button_id=message_id;
ikes=document.getElementById(button_id).value;
updated_likes=Number(likes)+1;

firebase.database().ref(roomname).child(message_id),update({
like:updated_likes
});

}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html")
}
