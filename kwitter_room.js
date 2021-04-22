
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAerRlGKrZHY9UOdBov7DY7qIy-TX7UJzo",
      authDomain: "kwitter-2fd72.firebaseapp.com",
      databaseURL: "https://kwitter-2fd72-default-rtdb.firebaseio.com",
      projectId: "kwitter-2fd72",
      storageBucket: "kwitter-2fd72.appspot.com",
      messagingSenderId: "231769393041",
      appId: "1:231769393041:web:14300d4b994b62de4e7c30"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    username = localStorage.getItem("username");
    document.getElementById("welcome").innerHTML = "Welcome " + username + " !";
    
    function addroom(){
          Room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(Room_name).update(
                {
                      purpose : "adding a room" 
                }
          );
      localStorage.setItem( "room_name" ,Room_name);
      window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row = "<div class = 'room_name' id = "+Room_names + " onclick = 'Redirect_to_Room_Name(this.id)' >#"+ Room_names + "</div> <hr>"
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
function Redirect_to_Room_Name(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}