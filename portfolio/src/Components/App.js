import React from 'react';
import "firebase/auth";
import "firebase/firestore";
import * as firebase from "firebase/app";
import Deck from './Deck';
import Nav from './Nav';
import PortfolioHeader from './PortfolioHeader';
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
  var modalOptions = {
    onOpenStart: () => {
      const addHoldingForm = document.querySelector('#addHolding-form');
      //addHoldingForm.reset();
      addHoldingForm['addHolding-ticker'].defaultValue = "";
    },
    opacity: 0,
    preventScrolling: false
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
      height: document.documentElement.clientHeight,
      userHoldings: {
        docs: {
        }
      }
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
      totalInvested: totalInvested,
      totalValue: totalValue,
      totalGain: totalGain,
      percentGain: percentGain,
      dayGain: dayGain,
      dayGainPercent: dayGainPercent
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
    const ticker = addHoldingForm['addHolding-ticker'].value.toUpperCase();
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
          M.toast({html: 'Added ' + quantity + ' ' + ticker + ' shares'});
        });
      }else{
        //ticker does not exist
        db.collection("holdings").add({
          ticker: ticker.toUpperCase(),
          price: price,
          quantity: quantity,
          owner: db.doc('users/'+ firebase.auth().currentUser.uid)
      }).then(() =>{
        addHoldingForm.reset();
        addHoldingForm['addHolding-ticker'].focus();
        addHoldingForm['addHolding-ticker'].select();
        M.toast({html: 'Added ' + quantity + ' ' + ticker + ' shares'});
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
        const url='https://cloud.iexapis.com/stable/stock/market/batch?symbols='+tickers+'&types=quote&token=pk_ea3fad39b66c4c08a98acce72eda2aaa';
        Http.open("GET", url);
        Http.send();
        Http.onload = (e) => {
          var stockData = JSON.parse(Http.responseText);
          //build state data
          var fullStockData = [];
          userHoldings.docs.forEach(holding => {
            var apiStockData;
            for(var key in stockData){
              if(stockData[key].quote.symbol.toUpperCase() === holding.data().ticker.toUpperCase()){
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
          }, () => {
            M.toast({html: 'Pulled updated market data'});
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
            user: doc,
            userLoggedIn: true
          });
          var userRef = db.collection('users').doc(this.state.user.id);
          db.collection('holdings').where("owner", "==", userRef).onSnapshot(userHoldings => {
            this.setState({
              userHoldings: userHoldings
            }, () => {
              this.pullStockData();
            });
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

    const ticker = editHoldingForm['editHolding-ticker'].value.toUpperCase();
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
            ticker: ticker.toUpperCase(),
            price: price,
            quantity: quantity,
            owner: db.doc('users/'+ firebase.auth().currentUser.uid)
          }).then(() => {
            M.Modal.getInstance(modal).close();
            editHoldingForm.reset();
            editHoldingForm.querySelector('.error').innerHTML = '';
            M.toast({html: 'Edited ' + ticker + ' position'});
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
    const ticker = editHoldingForm['editHolding-ticker'].value.toUpperCase();

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

 removePositionConfirmation(){
    const editHoldingForm = document.querySelector('#editHolding-form');
    const ticker = editHoldingForm['editHolding-ticker'].value.toUpperCase();

    //show confirmation modal
    const confirmationModal = document.querySelector('#modal-deleteConfirmation');
    M.Modal.getInstance(confirmationModal).open();
    const deleteHoldingTicker = document.querySelector('#deleteHolding-details');
    deleteHoldingTicker.innerHTML = 'This action will remove your ' + ticker + ' position';

 }

 removePosition = () =>{
  const editModal = document.querySelector('#modal-editHolding');
  const confirmationModal = document.querySelector('#modal-deleteConfirmation');
  const editHoldingForm = document.querySelector('#editHolding-form');
  const ticker = editHoldingForm['editHolding-ticker'].value.toUpperCase();

  db.collection('holdings').where('owner','==',db.collection('users').doc(firebase.auth().currentUser.uid)).where('ticker','==',ticker).get().then(holding => {
      db.collection('holdings').doc(holding.docs[0].id).delete().then(() => {
        M.Modal.getInstance(editModal).close();
        M.Modal.getInstance(confirmationModal).close();
        M.toast({html: 'Removed ' + ticker + ' position'});
      })
  })

 }

 search = (e) =>{
  e.preventDefault();
  const searchForm = document.querySelector('#search-form');
  const searchQuery = searchForm['search-ticker'].value.toUpperCase();
  searchForm['search-ticker'].value = '';

  //window.open('https://finance.yahoo.com/quote/'+searchQuery, '_blank');
  const detailModal = document.querySelector('#modal-stockDetails');

  const searchCompanyName = document.querySelector('#stockDetails-company');
  const searchPrice = document.querySelector('#stockDetails-price');
  const searchPreviousClose = document.querySelector('#stockDetails-previousClose');
  const searchPE = document.querySelector('#stockDetails-pe');
  const searchExchange = document.querySelector('#stockDetails-exchange');
  const searchWeek52Low = document.querySelector('#stockDetails-week52Low');
  const searchWeek52High = document.querySelector('#stockDetails-week52High');
  const searchMarketCap = document.querySelector('#stockDetails-marketCap');
  const searchYtdChange = document.querySelector('#stockDetails-ytdChange');

  searchCompanyName.innerHTML = "Company";
  searchPrice.innerHTML = "Price";
  searchPreviousClose.innerHTML = "Previous Close";
  searchPE.innerHTML = "P/E Ratio";
  searchExchange.innerHTML = "Exchange";
  searchWeek52Low.innerHTML = "52 Week Low";
  searchWeek52High.innerHTML = "52 Week High";
  searchMarketCap.innerHTML = "Market Cap";
  searchYtdChange.innerHTML = "YTD Change";

  const checkTicker = new XMLHttpRequest();
  const url='https://cloud.iexapis.com/stable/ref-data/iex/symbols?token=pk_ea3fad39b66c4c08a98acce72eda2aaa';
  checkTicker.open("GET", url);
  checkTicker.send();
  checkTicker.onload = (e) => {
    var availibleData = JSON.parse(checkTicker.responseText);
    var matchingTickers = availibleData.filter(function(data){
        return data.symbol === searchQuery.toUpperCase();
    });
    if(matchingTickers.length > 0){
      //match
      const pullQuote = new XMLHttpRequest();
      const url='https://cloud.iexapis.com/stable/stock/'+searchQuery+'/quote?token=pk_ea3fad39b66c4c08a98acce72eda2aaa';
      pullQuote.open("GET", url);
      pullQuote.send();
      pullQuote.onload = (e) => {
        var searchQuote = JSON.parse(pullQuote.responseText);


        searchCompanyName.innerHTML = searchQuote.companyName + " (" + searchQuery + ")";
        searchPrice.innerHTML = "Last: $" + searchQuote.latestPrice;
        searchPreviousClose.innerHTML = "Previous Close: $" + searchQuote.previousClose;
        searchPE.innerHTML = "P/E Ratio: " + searchQuote.peRatio;
        searchExchange.innerHTML = "Exchange: " + searchQuote.primaryExchange;
        searchWeek52Low.innerHTML = "52 Week Low: " + searchQuote.week52Low;
        searchWeek52High.innerHTML = "52 Week High: " + searchQuote.week52High;
        searchMarketCap.innerHTML = "Market Cap: $" + searchQuote.marketCap;
        searchYtdChange.innerHTML = "YTD Change: " + searchQuote.ytdChange;
        M.Modal.getInstance(detailModal).open();
      }
    }else{
      //invalid ticker
      console.log("no match");
    }
  }


 }

 

  render(){
    return (
      <div className="App">
        <Nav search={this.search} removePosition={this.removePosition} removePositionConfirmation={this.removePositionConfirmation} dataUpdate={this.pullStockData} user={this.state.user} addToPosition={this.addToPosition} editHoldingError={this.state.editHoldingError} editHoldingSubmit={this.editHolding} addHoldingError={this.state.addHoldingError} userLoggedIn={this.state.userLoggedIn} loginSubmit={this.logIn} signUpSubmit={this.signUp} logOut={this.logOut} addHoldingSubmit={this.addHolding}></Nav>
        <PortfolioHeader dayGainPercent={this.state.dayGainPercent} percentGain={this.state.percentGain} totalValue={this.state.totalValue} totalGain={this.state.totalGain} dayGain={this.state.dayGain} userLoggedIn={this.state.userLoggedIn}></PortfolioHeader>
        <Deck doubleClickFunction={this.handleDoubleCLick} currentHoldings={this.state.currentHoldings} height={this.state.height} width={this.state.width}></Deck>
      </div>
    );

  }
}

export default App;
