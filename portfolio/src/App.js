import React from 'react';
import "firebase/auth";
import "firebase/firestore";
import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAPYU3kgXezIktVO4gK8orxOqGiA_4Ridc",
  authDomain: "portfolio-fb445.firebaseapp.com",
  databaseURL: "https://portfolio-fb445.firebaseio.com",
  projectId: "portfolio-fb445",
  storageBucket: "portfolio-fb445.appspot.com",
  messagingSenderId: "614891043124",
  appId: "1:614891043124:web:2acd2f4bc851ec6cebcd61"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();



//sign in

//logout

//auth status change

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Rahul',
    };
  }


  signUp = (e) => {
    e.preventDefault();
    var form = new FormData(document.getElementById("signUpForm"));
    var name = form.get("name");
    var email = form.get("email");
    var password = form.get("password");
    document.getElementById("signUpForm").reset();

    auth.createUserWithEmailAndPassword(email,password).then(cred => {
      db.collection('users').doc(cred.user.uid).set({
          email: email,
          name: name
      });
    });
  }

  logIn = (e) => {
    e.preventDefault();
    var form = new FormData(document.getElementById("logInForm"));
    var email = form.get("email");
    var password = form.get("password");

    auth.signInWithEmailAndPassword(email,password).then(cred => {
      document.getElementById("logInForm").reset();
      document.getElementById("logInError").innerHTML = "";
  }).catch(err => {
    document.getElementById("logInError").innerHTML = err.message;
  });
  }

  logOut(){
    auth.signOut();
  }





  componentDidMount() {
    //set update interval
    // this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
    //auth changes
    auth.onAuthStateChanged(user => {
      if(user){
        db.collection('users').doc(user.uid).get().then(doc => {
          this.setState({
            name: doc.data().name
          });
        });
      }else{
        this.setState({
          name: 'Not Logged In'
        });
      }
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render(){
    return (
      <div className="App">
        <form id="signUpForm" onSubmit={this.signUp}>
          <p>Sign up: </p>
          <input type="text" name="name" placeholder="name"></input>
          <input type="text" name="email" placeholder="email"></input>
          <input type="password" name="password" placeholder="password"></input>
          <button>Sign up</button>
        </form>
        <form id="logInForm" onSubmit={this.logIn}>
          <p>Log in: </p>
          <input type="text" name="email" placeholder="email"></input>
          <input type="password" name="password" placeholder="password"></input>
          <p id="logInError"></p>
          <button>Log in</button>
        </form>
        <div id="logOUt">
          <p>Log Out:</p>
          <button onClick={this.logOut}>Log out</button>
        </div>
        <p>Logged in as: {this.state.name}</p>
      </div>
    );

  }
}

export default App;
