var firebaseConfig = {
    apiKey: "AIzaSyAcF7xeLLWLNavKAlT2hIyJafrCKp0mCiQ",
    authDomain: "we-wo-8538e.firebaseapp.com",
    databaseURL: "https://we-wo-8538e-default-rtdb.firebaseio.com",
    projectId: "we-wo-8538e",
    storageBucket: "we-wo-8538e.appspot.com",
    messagingSenderId: "1092488169326",
    appId: "1:1092488169326:web:0fa428183259dfaf7c637f",
    measurementId: "G-7ZBSZP61Q6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

var user_name=localStorage.getItem("user_name");
var room_name=localStorage.getItem("room_name");

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0    
    });
    document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
