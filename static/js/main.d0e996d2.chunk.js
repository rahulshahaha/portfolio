(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{15:function(e,t,a){e.exports=a(26)},20:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(14),r=a.n(l),o=(a(20),a(2)),c=a(3),s=a(5),d=a(4),u=(a(21),a(23),a(6)),m=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"handleDoubleCLick",value:function(){console.log("doubleClick")}},{key:"render",value:function(){var e=this.props.ticker,t=(this.props.price-this.props.priceBought)/this.props.priceBought;t=(t*=100).toFixed(2);var a=this.props.price*this.props.quantity-this.props.priceBought*this.props.quantity,n="overallPerformanceUp";return(a=a.toFixed(2))<0&&(n="overallPerformanceDown"),i.a.createElement("div",{className:"card",onDoubleClick:this.props.doubleClickFunction.bind(this,{ticker:e})},i.a.createElement("h1",{className:"companyName"},this.props.name),i.a.createElement("h6",{className:"currentPrice"},"$",this.props.price),i.a.createElement("h6",{className:this.props.changeType},"\xa0 (",this.props.percentChange,"%)"),i.a.createElement("h6",{className:"overall"},"Overall:\xa0"),i.a.createElement("h6",{className:n},"$",a,"\xa0(",t,"%)"))}}]),a}(i.a.Component),p=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).generateCards=function(){var t=e.props.doubleClickFunction;if(null==e.props.currentHoldings)return null;var a=e.props.height,n=e.props.width;return e.props.currentHoldings.map((function(e){return i.a.createElement(m,{doubleClickFunction:t,key:e.key,ticker:e.key,name:e.name,price:e.price,percentChange:e.percentChange,changeType:e.changeType,height:a,width:n,quantity:e.quantity,priceBought:e.priceBought})}))},e}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"deck"},this.generateCards())}}]),a}(i.a.Component),h=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"nav"},i.a.createElement("nav",{className:"z-depth-0 grey darken-3"},i.a.createElement("div",{className:"nav-wrapper"},i.a.createElement("ul",{id:"nav-mobile",className:"left"},i.a.createElement("li",{className:"logged-in"},i.a.createElement("button",{className:"btn black darken-2 z-depth-0",id:"logout",onClick:this.props.logOut},"Logout")),i.a.createElement("li",{className:"logged-out"},i.a.createElement("button",{className:"btn black darken-2 z-depth-0 modal-trigger","data-target":"modal-login"},"Login")),i.a.createElement("li",{className:"logged-out"},i.a.createElement("button",{className:"btn black darken-2 z-depth-0 modal-trigger","data-target":"modal-signup"},"Sign up")),i.a.createElement("li",{className:"logged-out"},i.a.createElement("button",{className:"btn black darken-2 z-depth-0 modal-trigger","data-target":"modal-addHolding"},"Add Holding"))))),i.a.createElement("div",{id:"modal-signup",className:"modal grey darken-3"},i.a.createElement("div",{className:"modal-content"},i.a.createElement("h4",{className:"white-text"},"Sign up"),i.a.createElement("form",{id:"signup-form",onSubmit:this.props.signUpSubmit},i.a.createElement("div",{className:"input-field"},i.a.createElement("input",{type:"email",id:"signup-email",required:!0,className:"white-text"}),i.a.createElement("label",{htmlFor:"signup-email"},"Email address")),i.a.createElement("div",{className:"input-field"},i.a.createElement("input",{className:"white-text",type:"password",id:"signup-password",required:!0}),i.a.createElement("label",{htmlFor:"signup-password"},"Choose password")),i.a.createElement("div",{className:"input-field"},i.a.createElement("input",{className:"white-text",type:"text",id:"signup-name",required:!0}),i.a.createElement("label",{htmlFor:"signup-name"},"Name")),i.a.createElement("button",{className:"btn black darken-2 z-depth-0"},"Sign up"),i.a.createElement("p",{className:"error pink-text center-align"})))),i.a.createElement("div",{id:"modal-login",className:"modal grey darken-3"},i.a.createElement("div",{className:"modal-content"},i.a.createElement("h4",{className:"white-text"},"Login"),i.a.createElement("br",null),i.a.createElement("form",{id:"login-form",onSubmit:this.props.loginSubmit},i.a.createElement("div",{className:"input-field"},i.a.createElement("input",{className:"white-text",type:"email",id:"login-email",required:!0}),i.a.createElement("label",{htmlFor:"login-email"},"Email address")),i.a.createElement("div",{className:"input-field"},i.a.createElement("input",{className:"white-text",type:"password",id:"login-password",required:!0}),i.a.createElement("label",{htmlFor:"login-password"},"Your password")),i.a.createElement("button",{className:"btn black darken-2 z-depth-0"},"Login"),i.a.createElement("p",{className:"error pink-text center-align"})))),i.a.createElement("div",{id:"modal-addHolding",className:"modal grey darken-3"},i.a.createElement("div",{className:"modal-content"},i.a.createElement("h4",{className:"white-text"},"Add Holding"),i.a.createElement("br",null),i.a.createElement("form",{id:"addHolding-form",onSubmit:this.props.addHoldingSubmit},i.a.createElement("div",{className:"input-field"},i.a.createElement("input",{className:"white-text",type:"text",id:"addHolding-ticker",required:!0}),i.a.createElement("label",{htmlFor:"addHolding-ticker"},"Ticker")),i.a.createElement("div",{className:"input-field"},i.a.createElement("input",{className:"white-text",type:"number",id:"addHolding-quantity",step:"0.0000001",required:!0}),i.a.createElement("label",{htmlFor:"addHolding-quantity"},"Quantity")),i.a.createElement("div",{className:"input-field"},i.a.createElement("input",{className:"white-text",type:"number",id:"addHolding-price",step:"0.0000001",required:!0}),i.a.createElement("label",{htmlFor:"addHolding-price"},"Price")),i.a.createElement("button",{className:"btn black darken-2 z-depth-0"},"Add"),i.a.createElement("p",{className:"error pink-text center-align"})))))}}]),a}(i.a.Component),g=a(7),v=a.n(g);u.initializeApp({apiKey:"AIzaSyAPYU3kgXezIktVO4gK8orxOqGiA_4Ridc",authDomain:"portfolio-fb445.firebaseapp.com",databaseURL:"https://portfolio-fb445.firebaseio.com",projectId:"portfolio-fb445",storageBucket:"portfolio-fb445.appspot.com",messagingSenderId:"614891043124",appId:"1:614891043124:web:2acd2f4bc851ec6cebcd61"});var b=u.auth(),E=u.firestore();document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".modal");v.a.Modal.init(e);var t=document.querySelectorAll(".collapsible");v.a.Collapsible.init(t)}));var f=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).calculateMetrics=function(){var e=0,t=0,a=0,i=0,l=n.state.currentHoldings;null!=l&&l.forEach((function(a){e+=a.priceBought*a.quantity,t+=a.price*a.quantity})),i=(a=t-e)/e,i*=100,n.setState({totalInvested:e.toFixed(2),totalValue:t.toFixed(2),totalGain:a.toFixed(2),percentGain:i.toFixed(2)})},n.signUp=function(e){e.preventDefault();var t=document.querySelector("#signup-form"),a=t["signup-email"].value,n=t["signup-password"].value,i=t["signup-name"].value;document.getElementById("signup-form").reset(),console.log(a,n,i);var l=document.querySelector("#modal-signup");v.a.Modal.getInstance(l).close(),t.reset(),b.createUserWithEmailAndPassword(a,n).then((function(e){E.collection("users").doc(e.user.uid).set({email:a,name:i})}))},n.logIn=function(e){e.preventDefault();var t=document.querySelector("#login-form"),a=t["login-email"].value,n=t["login-password"].value;b.signInWithEmailAndPassword(a,n).then((function(e){var a=document.querySelector("#modal-login");v.a.Modal.getInstance(a).close(),t.reset(),t.querySelector(".error").innerHTML=""})).catch((function(e){t.querySelector(".error").innerHTML=e.message}))},n.addHolding=function(e){e.preventDefault();var t=document.querySelector("#addHolding-form"),a=t["addHolding-ticker"].value,n=t["addHolding-quantity"].value,i=t["addHolding-price"].value;E.collection("holdings").add({ticker:a,price:i,quantity:n,owner:E.doc("users/"+u.auth().currentUser.uid)}).then((function(){t.reset()}))},n.pullStockData=function(){var e=n.state.userHoldings,t="";if(null!=e.docs[0]){e.docs.forEach((function(e){t+=e.data().ticker,t+=","}));var a=new XMLHttpRequest,i="https://cloud.iexapis.com/stable/stock/market/batch?symbols="+t+"&types=quote&range=1d&token=pk_ea3fad39b66c4c08a98acce72eda2aaa";a.open("GET",i),a.send(),a.onload=function(t){var i=JSON.parse(a.responseText);n.setState({rawData:i});var l=[];e.docs.forEach((function(e){var t;for(var a in i)i[a].quote.symbol.toLowerCase()===e.data().ticker.toLowerCase()&&(t=i[a].quote);var n=(t.latestPrice-t.previousClose)/t.previousClose,r=(n=Math.round(100*n*100)/100)>=0?"percentChangeUp":"percentChangeDown";l.push({key:e.data().ticker,name:t.companyName,percentChange:n,changeType:r,quantity:e.data().quantity,priceBought:e.data().price,price:t.latestPrice})})),n.setState({currentHoldings:l}),n.calculateMetrics()}}else console.log("user does not own anything")},n.displayWindowSize=function(){var e=document.documentElement.clientWidth,t=document.documentElement.clientHeight;n.setState({width:e,height:t})},n.state={email:"rahul",width:document.documentElement.clientWidth,height:document.documentElement.clientHeight},n}return Object(c.a)(a,[{key:"logOut",value:function(){b.signOut()}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",this.displayWindowSize),b.onAuthStateChanged((function(t){t?E.collection("users").doc(t.uid).get().then((function(t){e.setState({email:t.data().email,user:t});var a=E.collection("users").doc(e.state.user.id);E.collection("holdings").where("owner","==",a).onSnapshot((function(t){e.setState({userHoldings:t}),e.pullStockData()}))})):e.setState({email:"Not Logged In",currentHoldings:null,totalInvested:0,totalValue:0,totalGain:0,percentGain:0})}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"handleDoubleCLick",value:function(e){}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(h,{loginSubmit:this.logIn,signUpSubmit:this.signUp,logOut:this.logOut,addHoldingSubmit:this.addHolding}),i.a.createElement("p",null,"Logged in as: ",this.state.email),i.a.createElement("button",{onClick:this.pullStockData},"Update Data"),i.a.createElement("hr",null),i.a.createElement("h3",null,"Total Value: $",this.state.totalValue," Total Gain: $",this.state.totalGain,"(",this.state.percentGain,"%)"),i.a.createElement(p,{doubleClickFunction:this.handleDoubleCLick,currentHoldings:this.state.currentHoldings,height:this.state.height,width:this.state.width}))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.d0e996d2.chunk.js.map