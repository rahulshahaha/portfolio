(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{15:function(e,t,a){e.exports=a(26)},20:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),l=a.n(i),o=(a(20),a(2)),c=a(3),s=a(5),d=a(4),u=(a(21),a(23),a(6)),m=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"handleDoubleCLick",value:function(){console.log("doubleClick")}},{key:"render",value:function(){var e=this.props.ticker,t=(this.props.price-this.props.priceBought)/this.props.priceBought;t=(t*=100).toFixed(2);var a=this.props.price*this.props.quantity-this.props.priceBought*this.props.quantity,n="overallPerformanceUp";return(a=a.toFixed(2))<0&&(n="overallPerformanceDown"),r.a.createElement("div",{className:"card",onDoubleClick:this.props.doubleClickFunction.bind(this,{ticker:e})},r.a.createElement("h1",{className:"companyName"},this.props.name),r.a.createElement("h6",{className:"currentPrice"},"$",this.props.price),r.a.createElement("h6",{className:this.props.changeType},"\xa0 (",this.props.percentChange,"%)"),r.a.createElement("h6",{className:"overall"},"Overall:\xa0"),r.a.createElement("h6",{className:n},"$",a,"\xa0(",t,"%)"))}}]),a}(r.a.Component),p=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).generateCards=function(){var t=e.props.doubleClickFunction;if(null==e.props.currentHoldings)return null;var a=e.props.height,n=e.props.width;return e.props.currentHoldings.map((function(e){return r.a.createElement(m,{doubleClickFunction:t,key:e.key,ticker:e.key,name:e.name,price:e.price,percentChange:e.percentChange,changeType:e.changeType,height:a,width:n,quantity:e.quantity,priceBought:e.priceBought})}))},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"deck"},this.generateCards())}}]),a}(r.a.Component),g=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e;return e=this.props.userLoggedIn?r.a.createElement("div",null,r.a.createElement("nav",{className:"z-depth-0 grey darken-3"},r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("ul",{id:"nav-mobile",className:"left"},r.a.createElement("li",{className:"logged-in"},r.a.createElement("button",{className:"btn black darken-2 z-depth-0",id:"logout",onClick:this.props.logOut},"Logout")),r.a.createElement("li",{className:"logged-in"},r.a.createElement("button",{className:"btn black darken-2 z-depth-0 modal-trigger","data-target":"modal-addHolding"},"Add Holding")))))):r.a.createElement("div",null,r.a.createElement("nav",{className:"z-depth-0 grey darken-3"},r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("ul",{id:"nav-mobile",className:"left"},r.a.createElement("li",{className:"logged-out"},r.a.createElement("button",{className:"btn black darken-2 z-depth-0 modal-trigger","data-target":"modal-login"},"Login")),r.a.createElement("li",{className:"logged-out"},r.a.createElement("button",{className:"btn black darken-2 z-depth-0 modal-trigger","data-target":"modal-signup"},"Sign up")))))),r.a.createElement("div",{className:"nav"},e,r.a.createElement("div",{id:"modal-signup",className:"modal grey darken-3"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("h4",{className:"white-text"},"Sign up"),r.a.createElement("form",{id:"signup-form",onSubmit:this.props.signUpSubmit},r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"email",id:"signup-email",required:!0,className:"white-text"}),r.a.createElement("label",{htmlFor:"signup-email"},"Email address")),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{className:"white-text",type:"password",id:"signup-password",required:!0}),r.a.createElement("label",{htmlFor:"signup-password"},"Choose password")),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{className:"white-text",type:"text",id:"signup-name",required:!0}),r.a.createElement("label",{htmlFor:"signup-name"},"Name")),r.a.createElement("button",{className:"btn black darken-2 z-depth-0"},"Sign up"),r.a.createElement("p",{className:"error pink-text center-align"})))),r.a.createElement("div",{id:"modal-login",className:"modal grey darken-3"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("h4",{className:"white-text"},"Login"),r.a.createElement("br",null),r.a.createElement("form",{id:"login-form",onSubmit:this.props.loginSubmit},r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{className:"white-text",type:"email",id:"login-email",required:!0}),r.a.createElement("label",{htmlFor:"login-email"},"Email address")),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{className:"white-text",type:"password",id:"login-password",required:!0}),r.a.createElement("label",{htmlFor:"login-password"},"Your password")),r.a.createElement("button",{className:"btn black darken-2 z-depth-0"},"Login"),r.a.createElement("p",{className:"error pink-text center-align"})))),r.a.createElement("div",{id:"modal-addHolding",className:"modal grey darken-3"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("h4",{className:"white-text"},"Add Holding"),r.a.createElement("br",null),r.a.createElement("form",{id:"addHolding-form",onSubmit:this.props.addHoldingSubmit},r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{className:"white-text",type:"text",id:"addHolding-ticker",required:!0}),r.a.createElement("label",{htmlFor:"addHolding-ticker"},"Ticker")),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{className:"white-text",type:"number",id:"addHolding-quantity",step:"0.0000001",required:!0}),r.a.createElement("label",{htmlFor:"addHolding-quantity"},"Quantity")),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{className:"white-text",type:"number",id:"addHolding-price",step:"0.0000001",required:!0}),r.a.createElement("label",{htmlFor:"addHolding-price"},"Price")),r.a.createElement("button",{className:"btn black darken-2 z-depth-0"},"Add"),r.a.createElement("p",{className:"error pink-text center-align"},this.props.addHoldingError)))))}}]),a}(r.a.Component),h=a(7),v=a.n(h);u.initializeApp({apiKey:"AIzaSyAPYU3kgXezIktVO4gK8orxOqGiA_4Ridc",authDomain:"portfolio-fb445.firebaseapp.com",databaseURL:"https://portfolio-fb445.firebaseio.com",projectId:"portfolio-fb445",storageBucket:"portfolio-fb445.appspot.com",messagingSenderId:"614891043124",appId:"1:614891043124:web:2acd2f4bc851ec6cebcd61"});var E=u.auth(),b=u.firestore();document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".modal");v.a.Modal.init(e);var t=document.querySelectorAll(".collapsible");v.a.Collapsible.init(t)}));var f=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).calculateMetrics=function(){var e=0,t=0,a=0,r=0,i=n.state.currentHoldings,l=0,o=0;null!=i&&i.forEach((function(a){e+=a.priceBought*a.quantity,t+=a.price*a.quantity,l+=a.quantity*(a.price-a.previousClose)})),r=(a=t-e)/e,r*=100;var c=t-l;o=(t-c)/c,o*=100,n.setState({totalInvested:e.toFixed(2),totalValue:t.toFixed(2),totalGain:a.toFixed(2),percentGain:r.toFixed(2),dayGain:l.toFixed(2),dayGainPercent:o.toFixed(2)})},n.signUp=function(e){e.preventDefault();var t=document.querySelector("#signup-form"),a=t["signup-email"].value,n=t["signup-password"].value,r=t["signup-name"].value;document.getElementById("signup-form").reset(),console.log(a,n,r);var i=document.querySelector("#modal-signup");v.a.Modal.getInstance(i).close(),t.reset(),E.createUserWithEmailAndPassword(a,n).then((function(e){b.collection("users").doc(e.user.uid).set({email:a,name:r})}))},n.logIn=function(e){e.preventDefault();var t=document.querySelector("#login-form"),a=t["login-email"].value,n=t["login-password"].value;E.signInWithEmailAndPassword(a,n).then((function(e){var a=document.querySelector("#modal-login");v.a.Modal.getInstance(a).close(),t.reset(),t.querySelector(".error").innerHTML=""})).catch((function(e){t.querySelector(".error").innerHTML=e.message}))},n.addHolding=function(e){e.preventDefault();var t=document.querySelector("#addHolding-form"),a=t["addHolding-ticker"].value.toLowerCase(),r=parseFloat(t["addHolding-quantity"].value),i=parseFloat(t["addHolding-price"].value);isNaN(r)||isNaN(i)?n.setState({addHoldingError:"Please input valid numbers"}):(n.dbAddHolding(a,r,i),n.setState({addHoldingError:""}))},n.pullStockData=function(){var e=n.state.userHoldings,t="";if(null!=e.docs[0]){e.docs.forEach((function(e){t+=e.data().ticker,t+=","}));var a=new XMLHttpRequest,r="https://cloud.iexapis.com/stable/stock/market/batch?symbols="+t+"&types=quote&range=1d&token=pk_ea3fad39b66c4c08a98acce72eda2aaa";a.open("GET",r),a.send(),a.onload=function(t){var r=JSON.parse(a.responseText);n.setState({rawData:r});var i=[];e.docs.forEach((function(e){var t;for(var a in r)r[a].quote.symbol.toLowerCase()===e.data().ticker.toLowerCase()&&(t=r[a].quote);var n=(t.latestPrice-t.previousClose)/t.previousClose,l=(n=Math.round(100*n*100)/100)>=0?"percentChangeUp":"percentChangeDown";i.push({key:e.data().ticker,name:t.companyName,percentChange:n,changeType:l,quantity:e.data().quantity,priceBought:e.data().price,price:t.latestPrice,previousClose:t.previousClose})})),n.setState({currentHoldings:i}),n.calculateMetrics()}}else console.log("user does not own anything")},n.displayWindowSize=function(){var e=document.documentElement.clientWidth,t=document.documentElement.clientHeight;n.setState({width:e,height:t})},n.state={email:"rahul",width:document.documentElement.clientWidth,height:document.documentElement.clientHeight},n}return Object(c.a)(a,[{key:"logOut",value:function(){E.signOut()}},{key:"dbAddHolding",value:function(e,t,a){var n=document.querySelector("#addHolding-form");b.collection("holdings").where("owner","==",b.collection("users").doc(u.auth().currentUser.uid)).where("ticker","==",e).get().then((function(r){if(null!=r.docs[0]){var i=r.docs[0],l=i.data().ticker,o=i.data().quantity+t,c=(a*t+i.data().price*i.data().quantity)/o;b.collection("holdings").doc(i.id).set({ticker:l,quantity:o,price:c,owner:i.data().owner})}else b.collection("holdings").add({ticker:e.toLowerCase(),price:a,quantity:t,owner:b.doc("users/"+u.auth().currentUser.uid)}).then((function(){n.reset()}))}))}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",this.displayWindowSize),E.onAuthStateChanged((function(t){t?(console.log(t.uid),b.collection("users").doc(t.uid).get().then((function(t){e.setState({email:t.data().email,user:t,userLoggedIn:!0});var a=b.collection("users").doc(e.state.user.id);b.collection("holdings").where("owner","==",a).onSnapshot((function(t){e.setState({userHoldings:t}),e.pullStockData()}))}))):e.setState({email:"Not Logged In",currentHoldings:null,totalInvested:0,totalValue:0,totalGain:0,percentGain:0,dayGain:0,dayGainPercent:0,userLoggedIn:!1})}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"handleDoubleCLick",value:function(e){}},{key:"render",value:function(){var e,t;return e=this.state.totalGain>=0?"green-text text-darken-4 valign-wrapper":"red-text text-darken-2 valign-wrapper",t=this.state.dayGain>0?"green-text text-darken-4 valign-wrapper":"red-text text-darken-2 valign-wrapper",r.a.createElement("div",{className:"App"},r.a.createElement(g,{addHoldingError:this.state.addHoldingError,userLoggedIn:this.state.userLoggedIn,loginSubmit:this.logIn,signUpSubmit:this.signUp,logOut:this.logOut,addHoldingSubmit:this.addHolding}),r.a.createElement("p",null,"Logged in as: ",this.state.email),r.a.createElement("button",{onClick:this.pullStockData},"Update Data"),r.a.createElement("hr",null),r.a.createElement("h3",{className:"valign-wrapper"},"Total Value: $",this.state.totalValue),r.a.createElement("h3",{className:"valign-wrapper"},"Total Gain: ",r.a.createElement("span",{className:e},"$",this.state.totalGain," (",this.state.percentGain,"%)")),r.a.createElement("h3",{className:"valign-wrapper"},"Day Gain: ",r.a.createElement("span",{className:t},"$",this.state.dayGain," (",this.state.dayGainPercent,"%)")),r.a.createElement("hr",null),r.a.createElement(p,{doubleClickFunction:this.handleDoubleCLick,currentHoldings:this.state.currentHoldings,height:this.state.height,width:this.state.width}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.bac362dc.chunk.js.map