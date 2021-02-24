function buttonLogin() {
    localstore=document.getElementById("input1").value;
    localStorage.setItem("username",localstore);
    window.location= "kwitter_room.html" ;
    
}
