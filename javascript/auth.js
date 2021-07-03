var firebaseConfig = {
    apiKey: "AIzaSyCR4kiDja25H1HQtbTOJ8seXcGRDkwp3ig",
    authDomain: "authentication-cc6ec.firebaseapp.com",
    projectId: "authentication-cc6ec",
    storageBucket: "authentication-cc6ec.appspot.com",
    messagingSenderId: "98155738609",
    appId: "1:98155738609:web:2f833428a99ff6edf5c050"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function SignUp(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(name.length!=0 && email.length!=0 && password.length!=0){
        firebase.auth().createUserWithEmailAndPassword(email, password).then((res) => {
            firebase.database().ref('User/'+firebase.auth().currentUser.uid).set({
                email:email,
                name: name,
            });
            alert("Signup succesful...😊😇");
        }).catch((error) => {
            console.log(error);
            alert(error.message);
        });
    }
    else{
        alert("Please enter all the fields...🙃");
    }
}

function Login(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
        alert("Logged in succesful.... 🤗🤭");
    }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
    }); 
}