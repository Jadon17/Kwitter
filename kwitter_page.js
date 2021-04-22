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
    room_name = localStorage.getItem("room_name");

function send(){
      message = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
       name : username,
       message : message,
       like : 0     
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
names = message_data['name'];
message = message_data['message'];
like = message_data['like'];
var name_tag = "<h4> " + names + "<img class ='user_tick' src = 'tick.png' ></h4>" ;
var message_tag = "<h4 class = 'message_h4' >" + message + "</h4>";
var like_button = "<button class = 'btn btn-info' id = " + firebase_message_id + "value = " + like + "onclick = 'update_like(this.id)'> "  ;
var span_tag = "<span class = 'glyphicon glyphicon-thumbs-up ' > Like : " + like + "</span></button><hr>"
var row = name_tag+message_tag+like_button+span_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function update_like(message_id)
      {
            console.log("Clicked on like button " + message_id);
            button_id = message_id;
            likes = document.getElementById(button_id).value;
            update_likes = Number(likes) + 1;
            console.log(update_likes);
            firebase.database().ref(room_name).child(message_id).update ({
                  like : update_likes
            }
            );
      }

      function logout(){
            localStorage.removeItem("username");
            localStorage.removeItem("room_name");
            window.location = "index.html"
      }