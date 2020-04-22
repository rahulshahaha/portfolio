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

//Delete test account holdings
// db.collection('holdings').where('owner','==',db.collection('users').doc("xiaKXXUB4za5NkiFIrEBmkawTnu1")).get().then(holdings =>{
//   holdings.forEach(holding => {
//     db.collection('holdings').doc(holding.id).delete().then(() => {
//         console.log("deleted");
//     })
//   });
// });




// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  var modalOptions = {
    onOpenStart: () => {
      const addHoldingForm = document.querySelector('#addHolding-form');
      //addHoldingForm.reset();
      addHoldingForm['addHolding-ticker'].defaultValue = "";
    }
}
  M.Modal.init(modals,modalOptions);

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
    var dayGain = 0;
    var dayGainPercent = 0;
    if(holdings != null){
      holdings.forEach(holding => {
        totalInvested += (holding.priceBought * holding.quantity);
        totalValue += (holding.price * holding.quantity);
        dayGain += (holding.quantity*(holding.price - holding.previousClose));
      });
    }

    totalGain = totalValue - totalInvested;
    percentGain = totalGain / totalInvested;
    percentGain *= 100;

    var beforeValue = totalValue - dayGain;
    dayGainPercent = (totalValue - beforeValue) / beforeValue
    dayGainPercent *= 100;

    this.setState({
      totalInvested: totalInvested.toFixed(2),
      totalValue: totalValue.toFixed(2),
      totalGain: totalGain.toFixed(2),
      percentGain: percentGain.toFixed(2),
      dayGain: dayGain.toFixed(2),
      dayGainPercent: dayGainPercent.toFixed(2)
    });

  }


  signUp = (e) => {
    e.preventDefault();
    const signupForm = document.querySelector('#signup-form');
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    const name = signupForm['signup-name'].value;
    document.getElementById("signup-form").reset();

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
    const addHoldingForm = document.querySelector('#addHolding-form');
    const ticker = addHoldingForm['addHolding-ticker'].value.toLowerCase();
    const quantity = parseFloat(addHoldingForm['addHolding-quantity'].value);
    const price = parseFloat(addHoldingForm['addHolding-price'].value);


    const Http = new XMLHttpRequest();
    const url='https://cloud.iexapis.com/stable/ref-data/iex/symbols?token=pk_ea3fad39b66c4c08a98acce72eda2aaa';
    Http.open("GET", url);
    Http.send();
    Http.onload = (e) => {
      var availibleData = JSON.parse(Http.responseText);
      var matchingTickers = availibleData.filter(function(data){
          return data.symbol === ticker.toUpperCase();
      });
      if(matchingTickers.length > 0){
        //ticker is valid
        this.setState({
          addHoldingError: ""
        })
        if(!isNaN(quantity) && !isNaN(price)){
          this.dbAddHolding(ticker,quantity,price);
          this.setState({
            addHoldingError: ""
          })
        }else{
          this.setState({
            addHoldingError: "Please input valid numbers"
          })
        }
      }else{
        //ticker is not valid
        this.setState({
          addHoldingError: "Invalid ticker"
        })
      }
    }


  }

  dbAddHolding(ticker,quantity,price){
    const addHoldingForm = document.querySelector('#addHolding-form');


    //check if ticker exists
    db.collection('holdings').where('owner','==',db.collection('users').doc(firebase.auth().currentUser.uid)).where('ticker','==',ticker).get().then(existingHoldings =>{
      if(existingHoldings.docs[0] != null){
        //ticker already exists
        var existingTicker = existingHoldings.docs[0];
        var newTicker = existingTicker.data().ticker;
        var newQuantity = existingTicker.data().quantity + quantity;
        var newPrice = ((price * quantity) + (existingTicker.data().price * existingTicker.data().quantity)) / newQuantity;
        db.collection("holdings").doc(existingTicker.id).set({
            ticker: newTicker,
            quantity: newQuantity,
            price: newPrice,
            owner: existingTicker.data().owner
        }).then(() => {
          addHoldingForm.reset();
          addHoldingForm['addHolding-ticker'].focus();
          addHoldingForm['addHolding-ticker'].select();
        });
      }else{
        //ticker does not exist
        db.collection("holdings").add({
          ticker: ticker.toLowerCase(),
          price: price,
          quantity: quantity,
          owner: db.doc('users/'+ firebase.auth().currentUser.uid)
      }).then(() =>{
        addHoldingForm.reset();
        addHoldingForm['addHolding-ticker'].focus();
        addHoldingForm['addHolding-ticker'].select();
      });
      }
    })


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
            var changeType = percentChange >= 0 ? "percentChangeUp noSelect" : "percentChangeDown noSelect";
            fullStockData.push({
              key: holding.data().ticker,
              name: apiStockData.companyName,
              percentChange: percentChange,
              changeType: changeType,
              quantity: holding.data().quantity,
              priceBought: holding.data().price,
              price: apiStockData.latestPrice,
              previousClose: apiStockData.previousClose
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
            user: doc,
            userLoggedIn: true
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
          percentGain: 0,
          dayGain: 0,
          dayGainPercent: 0,
          userLoggedIn: false
        });
      }
    });

 
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleDoubleCLick(name,ticker,quantity,price){
    const modal = document.querySelector('#modal-editHolding');
    M.Modal.getInstance(modal).open();
    const editHoldingForm = document.querySelector('#editHolding-form');
    const editHoldingCompany = document.querySelector('#editHolding-company');

    editHoldingForm['editHolding-quantity'].defaultValue = quantity;
    editHoldingForm['editHolding-price'].defaultValue = price;
    editHoldingForm['editHolding-ticker'].defaultValue = ticker;
    editHoldingCompany.innerHTML = name + " (" + ticker + ")";
    M.updateTextFields();

  }


 editHolding = (e) =>{
    e.preventDefault();
    const modal = document.querySelector('#modal-editHolding');
    const editHoldingForm = document.querySelector('#editHolding-form');

    const ticker = editHoldingForm['editHolding-ticker'].value.toLowerCase();
    const quantity = parseFloat(editHoldingForm['editHolding-quantity'].value);
    const price = parseFloat(editHoldingForm['editHolding-price'].value);


    if(!isNaN(quantity) && !isNaN(price)){
      //this.dbAddHolding(ticker,quantity,price);
      this.setState({
        editHoldingError: ""
      })
      db.collection('holdings').where('owner','==',db.collection('users').doc(firebase.auth().currentUser.uid)).where('ticker','==',ticker).get().then(holdings => {
        if(holdings.docs[0] == null){
          this.setState({
            editHoldingError: "Holding no longer exists"
          })
        }else{
          db.collection('holdings').doc(holdings.docs[0].id).set({
            ticker: ticker.toLowerCase(),
            price: price,
            quantity: quantity,
            owner: db.doc('users/'+ firebase.auth().currentUser.uid)
          }).then(() => {
            M.Modal.getInstance(modal).close();
            editHoldingForm.reset();
            editHoldingForm.querySelector('.error').innerHTML = '';
          });
        }
      });
    }else{
      this.setState({
        editHoldingError: "Please input valid numbers"
      })
    }

 }

  addToPosition(){
    //close position modal
    const editModal = document.querySelector('#modal-editHolding');
    const editHoldingForm = document.querySelector('#editHolding-form');
    const ticker = editHoldingForm['editHolding-ticker'].value.toLowerCase();

    M.Modal.getInstance(editModal).close();
    editHoldingForm.reset();
    editHoldingForm.querySelector('.error').innerHTML = '';

    //open holding modal
    const addModal = document.querySelector('#modal-addHolding');
    const addHoldingForm = document.querySelector('#addHolding-form');
    M.Modal.getInstance(addModal).open();

    //populate ticker
    addHoldingForm['addHolding-ticker'].defaultValue = ticker;
    addHoldingForm['addHolding-quantity'].focus();
    addHoldingForm['addHolding-quantity'].select();
    M.updateTextFields();
  }

 removePosition(){

 }


  render(){
    var totalGainColor;
    if(this.state.totalGain >= 0){
      totalGainColor = "green-text text-darken-4 valign-wrapper";
    }else{
      totalGainColor = "red-text text-darken-2 valign-wrapper";
    }
    var dayGainColor
    if(this.state.dayGain >0){
      dayGainColor = "green-text text-darken-4 valign-wrapper";
    }else{
      dayGainColor = "red-text text-darken-2 valign-wrapper";
    }


    let userInfo;
    if(this.state.userLoggedIn){
        userInfo = (
          <div>
            <p>Logged in as: {this.state.email}</p>
            <button onClick={this.pullStockData}>Update Data</button>
            <hr></hr>
            <h3 className="valign-wrapper">Total Value: ${this.state.totalValue}</h3>
            <h3 className="valign-wrapper">Total Gain: <span className={totalGainColor}>${this.state.totalGain} ({this.state.percentGain}%)</span></h3>
            <h3 className="valign-wrapper">Day Gain: <span className={dayGainColor}>${this.state.dayGain} ({this.state.dayGainPercent}%)</span></h3>
            <hr></hr>
          </div>
        );
    }else{
        userInfo = (
          <hr></hr>
        );
    }

    return (
      <div className="App">
        <Nav user={this.state.user} addToPosition={this.addToPosition} editHoldingError={this.state.editHoldingError} editHoldingSubmit={this.editHolding} addHoldingError={this.state.addHoldingError} userLoggedIn={this.state.userLoggedIn} loginSubmit={this.logIn} signUpSubmit={this.signUp} logOut={this.logOut} addHoldingSubmit={this.addHolding}></Nav>
        {userInfo}
        <Deck doubleClickFunction={this.handleDoubleCLick} currentHoldings={this.state.currentHoldings} height={this.state.height} width={this.state.width}></Deck>
      </div>
    );

  }
}

export default App;
