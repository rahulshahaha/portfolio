(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{15:function(e,t,a){e.exports=a(26)},20:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(14),l=a.n(r),o=(a(20),a(3)),c=a(4),d=a(6),s=a(5),u=(a(21),a(23),a(7)),m=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"handleDoubleCLick",value:function(){console.log("doubleClick")}},{key:"render",value:function(){var e=this.props.ticker,t=this.props.quantity,a=this.props.priceBought,n=this.props.name,r=(this.props.price-this.props.priceBought)/this.props.priceBought;r=(r*=100).toFixed(2);var l=this.props.price*this.props.quantity-this.props.priceBought*this.props.quantity,o="overallPerformanceUp noSelect";return(l=l.toFixed(2))<0&&(o="overallPerformanceDown noSelect"),i.a.createElement("div",{className:"card",onDoubleClick:this.props.doubleClickFunction.bind(this,n,e,t,a)},i.a.createElement("h1",{className:"companyName noSelect"},this.props.name),i.a.createElement("h6",{className:"currentPrice noSelect"},"$",this.props.price),i.a.createElement("h6",{className:this.props.changeType},"\xa0 (",this.props.percentChange,"%)"),i.a.createElement("h6",{className:"overall noSelect"},"Overall:\xa0"),i.a.createElement("h6",{className:o},"$",l,"\xa0(",r,"%)"))}}]),a}(i.a.Component),p=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).generateCards=function(){var t=e.props.doubleClickFunction;if(null==e.props.currentHoldings)return null;var a=e.props.height,n=e.props.width;return e.props.currentHoldings.map((function(e){return i.a.createElement(m,{doubleClickFunction:t,key:e.key,ticker:e.key,name:e.name,price:e.price,percentChange:e.percentChange,changeType:e.changeType,height:a,width:n,quantity:e.quantity,priceBought:e.priceBought})}))},e}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"deck"},this.generateCards())}}]),a}(i.a.Component),g=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e;return e=this.props.userLoggedIn?i.a.createElement("div",{className:"navbar-fixed"},i.a.createElement("nav",{className:"z-depth-0 grey darken-3"},i.a.createElement("div",{className:"nav-wrapper"},i.a.createElement("a",{href:".",className:"brand-logo center"},"Welcome, ",this.props.user.data().name),i.a.createElement("ul",{id:"nav-mobile",className:"left"},i.a.createElement("li",{className:"logged-in"},i.a.createElement("button",{className:"btn black darken-2 z-depth-0",id:"logout",onClick:this.props.logOut},"Logout")),i.a.createElement("li",{className:"logged-in"},i.a.createElement("button",{className:"btn black darken-2 z-depth-0 modal-trigger","data-target":"modal-addHolding"},"Add Holding")),i.a.createElement("li",{className:"logged-in"},i.a.createElement("button",{className:"btn yellow darken-2 z-depth-0 black-text",onClick:this.props.dataUpdate},"Update Data")))))):i.a.createElement("div",{className:"navbar-fixed"},i.a.createElement("nav",{className:"z-depth-0 grey darken-3"},i.a.createElement("div",{className:"nav-wrapper"},i.a.createElement("a",{href:".",className:"brand-logo center"},"Please Login"),i.a.createElement("ul",{id:"nav-mobile",className:"left"},i.a.createElement("li",{className:"logged-out"},i.a.createElement("button",{className:"btn black darken-2 z-depth-0 modal-trigger","data-target":"modal-login"},"Login")),i.a.createElement("li",{className:"logged-out"},i.a.createElement("button",{className:"btn black darken-2 z-depth-0 modal-trigger","data-target":"modal-signup"},"Sign up")))))),i.a.createElement("div",{className:"nav"},e,i.a.createElement("div",{id:"modal-signup",className:"modal grey darken-3"},i.a.createElement("div",{className:"modal-content"},i.a.createElement("h4",{className:"white-text"},"Sign up"),i.a.createElement("form",{id:"signup-form",onSubmit:this.props.signUpSubmit},i.a.createElement("div",{className:"input-field"},i.a.createElement("input",{type:"email",id:"signup-email",required:!0,className:"white-text"}),i.a.createElement("label",{htmlFor:"signup-email"},"Email address")),i.a.createElement("div",{className:"input-field"},i.a.createElement("input",{className:"white-text",type:"password",id:"signup-password",required:!0}),i.a.createElement("label",{htmlFor:"signup-password"},"Choose password")),i.a.createElement("div",{className:"input-field"},i.a.createElement("input",{className:"white-text",type:"text",id:"signup-name",required:!0}),i.a.createElement("label",{htmlFor:"signup-name"},"Name")),i.a.createElement("button",{className:"btn black darken-2 z-depth-0"},"Sign up"),i.a.createElement("p",{className:"error pink-text center-align"})))),i.a.createElement("div",{id:"modal-login",className:"modal grey darken-3"},i.a.createElement("div",{className:"modal-content"},i.a.createElement("h4",{className:"white-text"},"Login"),i.a.createElement("br",null),i.a.createElement("form",{id:"login-form",onSubmit:this.props.loginSubmit},i.a.createElement("div",{className:"input-field"},i.a.createElement("input",{className:"white-text",type:"email",id:"login-email",required:!0}),i.a.createElement("label",{htmlFor:"login-email"},"Email address")),i.a.createElement("div",{className:"input-field"},i.a.createElement("input",{className:"white-text",type:"password",id:"login-password",required:!0}),i.a.createElement("label",{htmlFor:"login-password"},"Your password")),i.a.createElement("button",{className:"btn black darken-2 z-depth-0"},"Login"),i.a.createElement("p",{className:"error pink-text center-align"})))),i.a.createElement("div",{id:"modal-addHolding",className:"modal bottom-sheet grey darken-3"},i.a.createElement("div",{className:"modal-content"},i.a.createElement("h4",{className:"white-text"},"Add Holding"),i.a.createElement("br",null),i.a.createElement("form",{id:"addHolding-form",onSubmit:this.props.addHoldingSubmit},i.a.createElement("div",{className:"input-field"},i.a.createElement("input",{className:"white-text",type:"text",id:"addHolding-ticker",required:!0}),i.a.createElement("label",{htmlFor:"addHolding-ticker"},"Ticker")),i.a.createElement("div",{className:"input-field"},i.a.createElement("input",{className:"white-text",type:"number",id:"addHolding-quantity",step:"0.0000001",required:!0}),i.a.createElement("label",{htmlFor:"addHolding-quantity"},"Quantity")),i.a.createElement("div",{className:"input-field"},i.a.createElement("input",{className:"white-text",type:"number",id:"addHolding-price",step:"0.0000001",required:!0}),i.a.createElement("label",{htmlFor:"addHolding-price"},"Price")),i.a.createElement("button",{className:"btn black darken-2 z-depth-0"},"Add"),i.a.createElement("p",{className:"error pink-text center-align"},this.props.addHoldingError)))),i.a.createElement("div",{id:"modal-editHolding",className:"modal bottom-sheet grey darken-3"},i.a.createElement("div",{className:"modal-content"},i.a.createElement("h4",{id:"editHolding-company",className:"white-text"},"Edit Holding"),i.a.createElement("form",{id:"editHolding-form",onSubmit:this.props.editHoldingSubmit},i.a.createElement("input",{type:"text",id:"editHolding-ticker",className:"white-text hide"}),i.a.createElement("div",{className:"input-field"},i.a.createElement("input",{type:"number",id:"editHolding-quantity",step:"0.0000001",required:!0,className:"white-text"}),i.a.createElement("label",{htmlFor:"editHolding-quantity",className:"active"},"New Quantity")),i.a.createElement("div",{className:"input-field"},i.a.createElement("input",{className:"white-text",type:"number",step:"0.0000001",id:"editHolding-price",required:!0}),i.a.createElement("label",{htmlFor:"editHolding-price"},"New Price")),i.a.createElement("button",{className:"btn black darken-2 z-depth-0"},"Save"),i.a.createElement("p",{className:"error pink-text center-align"},this.props.editHoldingError)),i.a.createElement("hr",null),i.a.createElement("button",{className:"left btn black darken-2 z-depth-0",onClick:this.props.addToPosition},"Add to Position"),i.a.createElement("button",{className:"btn black darken-2 z-depth-0"},"Remove Position"))))}}]),a}(i.a.Component),h=a(2),v=a.n(h);u.initializeApp({apiKey:"AIzaSyAPYU3kgXezIktVO4gK8orxOqGiA_4Ridc",authDomain:"portfolio-fb445.firebaseapp.com",databaseURL:"https://portfolio-fb445.firebaseio.com",projectId:"portfolio-fb445",storageBucket:"portfolio-fb445.appspot.com",messagingSenderId:"614891043124",appId:"1:614891043124:web:2acd2f4bc851ec6cebcd61"});var E=u.auth(),f=u.firestore();document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".modal"),t={onOpenStart:function(){document.querySelector("#addHolding-form")["addHolding-ticker"].defaultValue=""}};v.a.Modal.init(e,t);var a=document.querySelectorAll(".collapsible");v.a.Collapsible.init(a)}));var b=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).calculateMetrics=function(){var e=0,t=0,a=0,i=0,r=n.state.currentHoldings,l=0,o=0;null!=r&&r.forEach((function(a){e+=a.priceBought*a.quantity,t+=a.price*a.quantity,l+=a.quantity*(a.price-a.previousClose)})),i=(a=t-e)/e,i*=100;var c=t-l;o=(t-c)/c,o*=100,n.setState({totalInvested:e.toFixed(2),totalValue:t.toFixed(2),totalGain:a.toFixed(2),percentGain:i.toFixed(2),dayGain:l.toFixed(2),dayGainPercent:o.toFixed(2)})},n.signUp=function(e){e.preventDefault();var t=document.querySelector("#signup-form"),a=t["signup-email"].value,n=t["signup-password"].value,i=t["signup-name"].value;document.getElementById("signup-form").reset();var r=document.querySelector("#modal-signup");v.a.Modal.getInstance(r).close(),t.reset(),E.createUserWithEmailAndPassword(a,n).then((function(e){f.collection("users").doc(e.user.uid).set({email:a,name:i})}))},n.logIn=function(e){e.preventDefault();var t=document.querySelector("#login-form"),a=t["login-email"].value,n=t["login-password"].value;E.signInWithEmailAndPassword(a,n).then((function(e){var a=document.querySelector("#modal-login");v.a.Modal.getInstance(a).close(),t.reset(),t.querySelector(".error").innerHTML=""})).catch((function(e){t.querySelector(".error").innerHTML=e.message}))},n.addHolding=function(e){e.preventDefault();var t=document.querySelector("#addHolding-form"),a=t["addHolding-ticker"].value.toUpperCase(),i=parseFloat(t["addHolding-quantity"].value),r=parseFloat(t["addHolding-price"].value),l=new XMLHttpRequest;l.open("GET","https://cloud.iexapis.com/stable/ref-data/iex/symbols?token=pk_ea3fad39b66c4c08a98acce72eda2aaa"),l.send(),l.onload=function(e){JSON.parse(l.responseText).filter((function(e){return e.symbol===a.toUpperCase()})).length>0?(n.setState({addHoldingError:""}),isNaN(i)||isNaN(r)?n.setState({addHoldingError:"Please input valid numbers"}):(n.dbAddHolding(a,i,r),n.setState({addHoldingError:""}))):n.setState({addHoldingError:"Invalid ticker"})}},n.pullStockData=function(){var e=n.state.userHoldings,t="";if(null!=e.docs[0]){e.docs.forEach((function(e){t+=e.data().ticker,t+=","}));var a=new XMLHttpRequest,i="https://cloud.iexapis.com/stable/stock/market/batch?symbols="+t+"&types=quote&token=pk_ea3fad39b66c4c08a98acce72eda2aaa";a.open("GET",i),a.send(),a.onload=function(t){var i=JSON.parse(a.responseText);n.setState({rawData:i});var r=[];e.docs.forEach((function(e){var t;for(var a in i)i[a].quote.symbol.toUpperCase()===e.data().ticker.toUpperCase()&&(t=i[a].quote);var n=(t.latestPrice-t.previousClose)/t.previousClose,l=(n=Math.round(100*n*100)/100)>=0?"percentChangeUp noSelect":"percentChangeDown noSelect";r.push({key:e.data().ticker,name:t.companyName,percentChange:n,changeType:l,quantity:e.data().quantity,priceBought:e.data().price,price:t.latestPrice,previousClose:t.previousClose})})),n.setState({currentHoldings:r}),n.calculateMetrics()}}else console.log("user does not own anything")},n.displayWindowSize=function(){var e=document.documentElement.clientWidth,t=document.documentElement.clientHeight;n.setState({width:e,height:t})},n.editHolding=function(e){e.preventDefault();var t=document.querySelector("#modal-editHolding"),a=document.querySelector("#editHolding-form"),i=a["editHolding-ticker"].value.toUpperCase(),r=parseFloat(a["editHolding-quantity"].value),l=parseFloat(a["editHolding-price"].value);isNaN(r)||isNaN(l)?n.setState({editHoldingError:"Please input valid numbers"}):(n.setState({editHoldingError:""}),f.collection("holdings").where("owner","==",f.collection("users").doc(u.auth().currentUser.uid)).where("ticker","==",i).get().then((function(e){null==e.docs[0]?n.setState({editHoldingError:"Holding no longer exists"}):f.collection("holdings").doc(e.docs[0].id).set({ticker:i.toUpperCase(),price:l,quantity:r,owner:f.doc("users/"+u.auth().currentUser.uid)}).then((function(){v.a.Modal.getInstance(t).close(),a.reset(),a.querySelector(".error").innerHTML=""}))})))},n.state={email:"rahul",width:document.documentElement.clientWidth,height:document.documentElement.clientHeight},n}return Object(c.a)(a,[{key:"logOut",value:function(){E.signOut()}},{key:"dbAddHolding",value:function(e,t,a){var n=document.querySelector("#addHolding-form");f.collection("holdings").where("owner","==",f.collection("users").doc(u.auth().currentUser.uid)).where("ticker","==",e).get().then((function(i){if(null!=i.docs[0]){var r=i.docs[0],l=r.data().ticker,o=r.data().quantity+t,c=(a*t+r.data().price*r.data().quantity)/o;f.collection("holdings").doc(r.id).set({ticker:l,quantity:o,price:c,owner:r.data().owner}).then((function(){n.reset(),n["addHolding-ticker"].focus(),n["addHolding-ticker"].select()}))}else f.collection("holdings").add({ticker:e.toUpperCase(),price:a,quantity:t,owner:f.doc("users/"+u.auth().currentUser.uid)}).then((function(){n.reset(),n["addHolding-ticker"].focus(),n["addHolding-ticker"].select()}))}))}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",this.displayWindowSize),E.onAuthStateChanged((function(t){t?f.collection("users").doc(t.uid).get().then((function(t){e.setState({email:t.data().email,user:t,userLoggedIn:!0});var a=f.collection("users").doc(e.state.user.id);f.collection("holdings").where("owner","==",a).onSnapshot((function(t){e.setState({userHoldings:t}),e.pullStockData()}))})):e.setState({email:"Not Logged In",currentHoldings:null,totalInvested:0,totalValue:0,totalGain:0,percentGain:0,dayGain:0,dayGainPercent:0,userLoggedIn:!1})}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"handleDoubleCLick",value:function(e,t,a,n){var i=document.querySelector("#modal-editHolding");v.a.Modal.getInstance(i).open();var r=document.querySelector("#editHolding-form"),l=document.querySelector("#editHolding-company");r["editHolding-quantity"].defaultValue=a,r["editHolding-price"].defaultValue=n,r["editHolding-ticker"].defaultValue=t,l.innerHTML=e+" ("+t+")",v.a.updateTextFields()}},{key:"addToPosition",value:function(){var e=document.querySelector("#modal-editHolding"),t=document.querySelector("#editHolding-form"),a=t["editHolding-ticker"].value.toUpperCase();v.a.Modal.getInstance(e).close(),t.reset(),t.querySelector(".error").innerHTML="";var n=document.querySelector("#modal-addHolding"),i=document.querySelector("#addHolding-form");v.a.Modal.getInstance(n).open(),i["addHolding-ticker"].defaultValue=a,i["addHolding-quantity"].focus(),i["addHolding-quantity"].select(),v.a.updateTextFields()}},{key:"removePosition",value:function(){}},{key:"render",value:function(){var e,t,a;return e=this.state.totalGain>=0?"green-text text-darken-4 valign-wrapper":"red-text text-darken-2 valign-wrapper",t=this.state.dayGain>0?"green-text text-darken-4 valign-wrapper":"red-text text-darken-2 valign-wrapper",a=this.state.userLoggedIn?i.a.createElement("div",null,i.a.createElement("h3",{className:"valign-wrapper"},"Total Value: $",this.state.totalValue),i.a.createElement("h3",{className:"valign-wrapper"},"Total Gain: ",i.a.createElement("span",{className:e},"$",this.state.totalGain," (",this.state.percentGain,"%)")),i.a.createElement("h3",{className:"valign-wrapper"},"Day Gain: ",i.a.createElement("span",{className:t},"$",this.state.dayGain," (",this.state.dayGainPercent,"%)")),i.a.createElement("hr",null)):i.a.createElement("div",null),i.a.createElement("div",{className:"App"},i.a.createElement(g,{dataUpdate:this.pullStockData,user:this.state.user,addToPosition:this.addToPosition,editHoldingError:this.state.editHoldingError,editHoldingSubmit:this.editHolding,addHoldingError:this.state.addHoldingError,userLoggedIn:this.state.userLoggedIn,loginSubmit:this.logIn,signUpSubmit:this.signUp,logOut:this.logOut,addHoldingSubmit:this.addHolding}),a,i.a.createElement(p,{doubleClickFunction:this.handleDoubleCLick,currentHoldings:this.state.currentHoldings,height:this.state.height,width:this.state.width}))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.e1eff250.chunk.js.map