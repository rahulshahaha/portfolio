import React from 'react';
import "firebase/auth";
import "firebase/firestore";
import * as firebase from "firebase/app";
import Deck from './Deck';
import Nav from './Nav';
import M from 'materialize-css';


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


// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "rahul",
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    };
  }

  calculateMetrics = () =>{
    var totalInvested = 0;
    var totalValue = 0;
    var totalGain = 0;
    var percentGain = 0;
    var holdings = this.state.currentHoldings;
    if(holdings != null){
      holdings.forEach(holding => {
        totalInvested += (holding.priceBought * holding.quantity);
        totalValue += (holding.price * holding.quantity);
      });
    }

    totalGain = totalValue - totalInvested;
    percentGain = totalGain / totalInvested;
    percentGain *= 100;

    this.setState({
      totalInvested: totalInvested.toFixed(2),
      totalValue: totalValue.toFixed(2),
      totalGain: totalGain.toFixed(2),
      percentGain: percentGain.toFixed(2)
    });

  }


  signUp = (e) => {
    e.preventDefault();
    const signupForm = document.querySelector('#signup-form');
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    const name = signupForm['signup-name'].value;
    document.getElementById("signup-form").reset();
    console.log(email, password, name);

    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();

    auth.createUserWithEmailAndPassword(email,password).then(cred => {
      db.collection('users').doc(cred.user.uid).set({
          email: email,
          name: name
      });
    });
  }

  logIn = (e) => {
    e.preventDefault();
    const loginForm = document.querySelector('#login-form');
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    // var form = new FormData(document.getElementById("logInForm"));
    // var email = form.get("email");
    // var password = form.get("password");

    auth.signInWithEmailAndPassword(email,password).then(cred => {
      const modal = document.querySelector('#modal-login');
      M.Modal.getInstance(modal).close();
      loginForm.reset();
      loginForm.querySelector('.error').innerHTML = '';
  }).catch(err => {
    loginForm.querySelector('.error').innerHTML = err.message;
  });
  }

  logOut(){
    auth.signOut();
  }

  addHolding = (e) => {
    e.preventDefault();
    var form = new FormData(document.getElementById("addHolding"));
    var ticker = form.get("ticker");
    var price = form.get("price");
    var quantity = form.get("quantity");

    db.collection("holdings").add({
      ticker: ticker,
      price: price,
      quantity: quantity,
      owner: db.doc('users/'+ firebase.auth().currentUser.uid)
  }).then(() =>{
    document.getElementById("addHolding").reset();
  });

  }


  pullStockData = () => {
    var userHoldings = this.state.userHoldings;
    //get ticker list
    var tickers = '';
      if(userHoldings.docs[0] != null){
        userHoldings.docs.forEach(holding => {
            tickers += holding.data().ticker;
            tickers += ',';
        });
        const Http = new XMLHttpRequest();
        const url='https://cloud.iexapis.com/stable/stock/market/batch?symbols='+tickers+'&types=quote&range=1d&token=pk_ea3fad39b66c4c08a98acce72eda2aaa';
        Http.open("GET", url);
        Http.send();
        Http.onload = (e) => {
          var stockData = JSON.parse(Http.responseText);
          this.setState({
            rawData: stockData
          })
          //build state data
          var fullStockData = [];
          userHoldings.docs.forEach(holding => {
            var apiStockData;
            for(var key in stockData){
              if(stockData[key].quote.symbol.toLowerCase() === holding.data().ticker.toLowerCase()){
                apiStockData = stockData[key].quote;
              }
            }
            var percentChange = (apiStockData.latestPrice - apiStockData.previousClose) / apiStockData.previousClose;
            percentChange = Math.round(percentChange * 100 * 100) / 100;
            var changeType = percentChange >= 0 ? "percentChangeUp" : "percentChangeDown";
            fullStockData.push({
              key: holding.data().ticker,
              name: apiStockData.companyName,
              percentChange: percentChange,
              changeType: changeType,
              quantity: holding.data().quantity,
              priceBought: holding.data().price,
              price: apiStockData.latestPrice
            })
          })
          this.setState({
            currentHoldings: fullStockData
          });
          this.calculateMetrics();
        }

      }else{
        console.log("user does not own anything");
      }
  }

displayWindowSize = () => {
    // Get width and height of the window excluding scrollbars
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    this.setState({
      width: w,
      height: h
    })
}
 
// Attaching the event listener function to window's resize event

  componentDidMount() {
    //set update interval
    // this.interval = setInterval(() => this.pullStockData(), 1000);

    //window size changes
    window.addEventListener("resize", this.displayWindowSize);


    //auth changes
    auth.onAuthStateChanged(user => {
      if(user){
        db.collection('users').doc(user.uid).get().then(doc => {
          this.setState({
            email: doc.data().email,
            user: doc
          });
          var userRef = db.collection('users').doc(this.state.user.id);
          db.collection('holdings').where("owner", "==", userRef).onSnapshot(userHoldings => {
            this.setState({
              userHoldings: userHoldings
            })
            this.pullStockData();
          });
        });
      }else{
        this.setState({
          email: 'Not Logged In',
          currentHoldings: null,
          totalInvested: 0,
          totalValue: 0,
          totalGain: 0,
          percentGain: 0
        });
      }
    });

 
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleDoubleCLick(ticker){
    //show update modal
  }

  render(){
    return (
      <div className="App">
        <Nav loginSubmit={this.logIn} signUpSubmit={this.signUp} logOut={this.logOut}></Nav>
        <p>Logged in as: {this.state.email}</p>
        <button onClick={this.pullStockData}>Update Data</button>
        <form autoComplete="off" id="addHolding" onSubmit={this.addHolding}>
          <p>Add Holding: </p>
          <input type="text" name="ticker" placeholder="ticker"></input>
          <input type="number" name="price" placeholder="price" step="0.0000001"></input>
          <input type="number" name="quantity" placeholder="quantity" step="0.0000001"></input>
          <button>Add holding</button>
        </form>
        <hr></hr>
        <h3>Total Value: ${this.state.totalValue} Total Gain: ${this.state.totalGain}({this.state.percentGain}%)</h3>
        {/* <Card key="W" name="Wayfair" price={100} percentChange={10} changeType="percentChangeUp" height={window.innerHeight} width={window.innerWidth} quantity={10} priceBought={25} /> */}
        <Deck doubleClickFunction={this.handleDoubleCLick} currentHoldings={this.state.currentHoldings} height={this.state.height} width={this.state.width}></Deck>
      </div>
    );

  }
}

export default App;
