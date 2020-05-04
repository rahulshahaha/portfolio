(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{15:function(e,t,a){e.exports=a(26)},20:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(14),r=a.n(i),l=(a(20),a(2)),c=a(3),s=a(5),d=a(4),u=(a(21),a(23),a(7)),m=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"formatDecimal",value:function(e){return parseFloat(e).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}},{key:"render",value:function(){var e=this.props.holding.price,t=this.props.holding.quantity,a=this.props.holding.priceBought,n=t*a,i=(this.props.holding.price-this.props.holding.priceBought)/this.props.holding.priceBought*100,r=this.props.holding.value,l=this.props.holding.quantity*this.props.holding.price-this.props.holding.quantity*this.props.holding.previousClose,c=l>=0?"valueChangeUp":"valueChangeDown",s=this.props.holding.price*this.props.holding.quantity-this.props.holding.priceBought*this.props.holding.quantity,d=s>=0?"overallPerformanceUp noSelect":"overallPerformanceDown noSelect";return l=this.formatDecimal(l.toFixed(2)),r=this.formatDecimal(r.toFixed(2)),i=i.toFixed(2),s=this.formatDecimal(s.toFixed(2)),e=this.formatDecimal(e.toFixed(2)),a=this.formatDecimal(a.toFixed(2)),n=this.formatDecimal(n.toFixed(2)),t=this.formatDecimal(t.toFixed(2)),o.a.createElement("div",{className:"card",onDoubleClick:this.props.doubleClickFunction.bind(this,this.props.holding.name,this.props.holding.key,this.props.holding.quantity,this.props.holding.priceBought)},o.a.createElement("h1",{className:"companyName noSelect"},this.props.holding.name," (",this.props.holding.key,")"),o.a.createElement("h1",{className:"currentPrice noSelect"},"$",e," ",o.a.createElement("span",{className:this.props.holding.changeType},"(",this.props.holding.percentChange,"%)")),o.a.createElement("h6",{className:"overall noSelect"},"Purchase: ",t," @ $",a," ($",n,")"),o.a.createElement("h6",{className:"overall noSelect"},"Value:",o.a.createElement("span",{className:c}," $",r," ($",l,")")),o.a.createElement("h6",{className:"overall noSelect"},"Gain:",o.a.createElement("span",{className:d}," $",s," (",i,"%)")))}}]),a}(o.a.Component);m.defaultProps={holding:{}};var p=m,h=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).generateCards=function(){var t=e.props.doubleClickFunction,a=e.props.currentHoldings;return null==a?null:(a.sort((function(e,t){var a=0;return e.value===t.value&&(a=0),e.value<t.value&&(a=1),e.value>t.value&&(a=-1),a})),e.props.currentHoldings.map((function(e){return o.a.createElement(p,{key:e.key,doubleClickFunction:t,holding:e})})))},e}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"deck"},this.generateCards())}}]),a}(o.a.Component),g=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"SignupModal"},o.a.createElement("div",{id:"modal-signup",className:"modal grey darken-3"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("h4",{className:"white-text"},"Sign up"),o.a.createElement("form",{id:"signup-form",onSubmit:this.props.signUpSubmit},o.a.createElement("div",{className:"input-field"},o.a.createElement("input",{type:"email",id:"signup-email",required:!0,className:"white-text"}),o.a.createElement("label",{htmlFor:"signup-email"},"Email address")),o.a.createElement("div",{className:"input-field"},o.a.createElement("input",{className:"white-text",type:"password",id:"signup-password",required:!0}),o.a.createElement("label",{htmlFor:"signup-password"},"Choose password")),o.a.createElement("div",{className:"input-field"},o.a.createElement("input",{className:"white-text",type:"text",id:"signup-name",required:!0}),o.a.createElement("label",{htmlFor:"signup-name"},"Name")),o.a.createElement("button",{className:"btn black darken-2 z-depth-0"},"Sign up"),o.a.createElement("p",{className:"error pink-text center-align"})))))}}]),a}(o.a.Component),v=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"LoginModal"},o.a.createElement("div",{id:"modal-login",className:"modal grey darken-3"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("h4",{className:"white-text"},"Login"),o.a.createElement("br",null),o.a.createElement("form",{id:"login-form",onSubmit:this.props.loginSubmit},o.a.createElement("div",{className:"input-field"},o.a.createElement("input",{className:"white-text",type:"email",id:"login-email",required:!0}),o.a.createElement("label",{htmlFor:"login-email"},"Email address")),o.a.createElement("div",{className:"input-field"},o.a.createElement("input",{className:"white-text",type:"password",id:"login-password",required:!0}),o.a.createElement("label",{htmlFor:"login-password"},"Your password")),o.a.createElement("button",{className:"btn black darken-2 z-depth-0"},"Login"),o.a.createElement("p",{className:"error pink-text center-align"})))))}}]),a}(o.a.Component),f=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"LoginModal"},o.a.createElement("div",{id:"modal-addHolding",className:"modal bottom-sheet grey darken-3"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("h4",{className:"white-text"},"Add Holding"),o.a.createElement("br",null),o.a.createElement("form",{id:"addHolding-form",onSubmit:this.props.addHoldingSubmit},o.a.createElement("div",{className:"input-field"},o.a.createElement("input",{className:"white-text",type:"text",id:"addHolding-ticker",required:!0}),o.a.createElement("label",{htmlFor:"addHolding-ticker"},"Ticker")),o.a.createElement("div",{className:"input-field"},o.a.createElement("input",{className:"white-text",type:"number",id:"addHolding-quantity",step:"any",required:!0}),o.a.createElement("label",{htmlFor:"addHolding-quantity"},"Quantity")),o.a.createElement("div",{className:"input-field"},o.a.createElement("input",{className:"white-text",type:"number",id:"addHolding-price",step:"any",required:!0}),o.a.createElement("label",{htmlFor:"addHolding-price"},"Price")),o.a.createElement("button",{className:"btn black darken-2 z-depth-0"},"Add"),o.a.createElement("p",{className:"error pink-text center-align"},this.props.addHoldingError)))))}}]),a}(o.a.Component),E=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"EditHoldingModal"},o.a.createElement("div",{id:"modal-editHolding",className:"modal bottom-sheet grey darken-3"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("h4",{id:"editHolding-company",className:"white-text"},"Edit Holding"),o.a.createElement("form",{id:"editHolding-form",onSubmit:this.props.editHoldingSubmit},o.a.createElement("input",{type:"text",id:"editHolding-ticker",className:"white-text hide"}),o.a.createElement("div",{className:"input-field"},o.a.createElement("input",{type:"number",id:"editHolding-quantity",step:"any",required:!0,className:"white-text"}),o.a.createElement("label",{htmlFor:"editHolding-quantity",className:"active"},"Quantity")),o.a.createElement("div",{className:"input-field"},o.a.createElement("input",{className:"white-text",type:"number",step:"any",id:"editHolding-price",required:!0}),o.a.createElement("label",{htmlFor:"editHolding-price"},"Price")),o.a.createElement("button",{className:"btn black darken-2 z-depth-0"},"Save"),o.a.createElement("p",{className:"error pink-text center-align"},this.props.editHoldingError)),o.a.createElement("hr",null),o.a.createElement("button",{className:"left btn black darken-2 z-depth-0",onClick:this.props.addToPosition},"Add to Position"),o.a.createElement("button",{className:"left btn black darken-2 z-depth-0"},"More details"),o.a.createElement("button",{className:"btn black darken-2 z-depth-0",onClick:this.props.removePositionConfirmation},"Remove Position"))))}}]),a}(o.a.Component),y=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"DeleteConfirmationModal"},o.a.createElement("div",{id:"modal-deleteConfirmation",className:"modal grey darken-3"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("h4",{className:"white-text"},"Are you sure?"),o.a.createElement("p",{className:"white-text",id:"deleteHolding-details"})),o.a.createElement("div",{className:"modal-footer grey darken-3"},o.a.createElement("a",{href:"#!",className:"btn-flat black white-text",onClick:this.props.removePosition},"Confirm"),o.a.createElement("a",{href:"#!",className:"modal-close btn-flat black white-text"},"Cancel"))))}}]),a}(o.a.Component),k=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"StockDetailsModal"},o.a.createElement("div",{id:"modal-stockDetails",className:"modal grey darken-3"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("h4",{id:"stockDetails-company",className:"white-text"},"Company"),o.a.createElement("h4",{id:"stockDetails-price",className:"white-text"},"Price"),o.a.createElement("h4",{id:"stockDetails-previousClose",className:"white-text"},"Previous Close"),o.a.createElement("h4",{id:"stockDetails-pe",className:"white-text"},"PE"),o.a.createElement("h4",{id:"stockDetails-exchange",className:"white-text"},"Exchange"),o.a.createElement("h4",{id:"stockDetails-week52Low",className:"white-text"},"52 Week Low"),o.a.createElement("h4",{id:"stockDetails-week52High",className:"white-text"},"52 Week High"),o.a.createElement("h4",{id:"stockDetails-marketCap",className:"white-text"},"Market Cap"),o.a.createElement("h4",{id:"stockDetails-ytdChange",className:"white-text"},"YTD Change"))))}}]),a}(o.a.Component),b=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e;return e=this.props.userLoggedIn?o.a.createElement("div",{className:"navbar-fixed"},o.a.createElement("nav",{className:"z-depth-0 grey darken-3 col l10"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"nav-wrapper col l10"},o.a.createElement("a",{href:".",className:"brand-logo center"},"Welcome, ",this.props.user.data().name),o.a.createElement("ul",{id:"nav-mobile",className:"left"},o.a.createElement("li",{className:"logged-in"},o.a.createElement("button",{className:"btn black darken-2 z-depth-0",id:"logout",onClick:this.props.logOut},"Logout")),o.a.createElement("li",{className:"logged-in"},o.a.createElement("button",{className:"btn black darken-2 z-depth-0 modal-trigger","data-target":"modal-addHolding"},"Add Holding")),o.a.createElement("li",{className:"logged-in"},o.a.createElement("button",{className:"btn yellow darken-2 z-depth-0 black-text",onClick:this.props.dataUpdate},"Update Data")))),o.a.createElement("form",{onSubmit:this.props.search,id:"search-form",autoComplete:"off",className:"right grey darken-3 input-field col l2"},o.a.createElement("input",{placeholder:"Search",id:"search-ticker",type:"text",className:"white-text"}),o.a.createElement("label",{htmlFor:"search-ticker"}))))):o.a.createElement("div",{className:"navbar-fixed"},o.a.createElement("nav",{className:"z-depth-0 grey darken-3"},o.a.createElement("div",{className:"nav-wrapper"},o.a.createElement("a",{href:".",className:"brand-logo center"},"Please Login"),o.a.createElement("ul",{id:"nav-mobile",className:"left"},o.a.createElement("li",{className:"logged-out"},o.a.createElement("button",{className:"btn black darken-2 z-depth-0 modal-trigger","data-target":"modal-login"},"Login")),o.a.createElement("li",{className:"logged-out"},o.a.createElement("button",{className:"btn black darken-2 z-depth-0 modal-trigger","data-target":"modal-signup"},"Sign up")))))),o.a.createElement("div",{className:"nav"},e,o.a.createElement(g,{signUpSubmit:this.props.signUpSubmit}),o.a.createElement(v,{loginSubmit:this.props.loginSubmit}),o.a.createElement(f,{addHoldingSubmit:this.props.addHoldingSubmit,addHoldingError:this.props.addHoldingError}),o.a.createElement(E,{editHoldingSubmit:this.props.editHoldingSubmit,editHoldingError:this.props.editHoldingError,addToPosition:this.props.addToPosition,removePositionConfirmation:this.props.removePositionConfirmation}),o.a.createElement(y,{removePosition:this.props.removePosition}),o.a.createElement(k,null))}}]),a}(o.a.Component),H=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).generateCards=function(){var t=e.props.totalGain>=0?"green-text text-darken-4 valign-wrapper":"red-text text-darken-2 valign-wrapper",a=e.props.dayGain>=0?"green-text text-darken-4 valign-wrapper":"red-text text-darken-2 valign-wrapper",n=e.formatDecimal(e.props.totalValue),i=e.formatDecimal(e.props.totalGain),r=e.formatDecimal(e.props.dayGain),l=void 0===e.props.percentGain?0:e.props.percentGain.toFixed(2),c=void 0===e.props.dayGainPercent?0:e.props.dayGainPercent.toFixed(2);return e.props.userLoggedIn?o.a.createElement("div",null,o.a.createElement("h3",{className:"valign-wrapper"},"Total Value: $",n),o.a.createElement("h6",{className:"valign-wrapper"},"Total Gain: ",o.a.createElement("span",{className:t},"$",i," (",l,"%)")),o.a.createElement("h6",{className:"valign-wrapper"},"Day Gain: ",o.a.createElement("span",{className:a},"$",r," (",c,"%)")),o.a.createElement("hr",null)):null},e}return Object(c.a)(a,[{key:"formatDecimal",value:function(e){return parseFloat(e).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}},{key:"render",value:function(){return o.a.createElement("div",{className:"portfolioHeader"},this.generateCards())}}]),a}(o.a.Component),N=a(6),w=a.n(N);u.initializeApp({apiKey:"AIzaSyAPYU3kgXezIktVO4gK8orxOqGiA_4Ridc",authDomain:"portfolio-fb445.firebaseapp.com",databaseURL:"https://portfolio-fb445.firebaseio.com",projectId:"portfolio-fb445",storageBucket:"portfolio-fb445.appspot.com",messagingSenderId:"614891043124",appId:"1:614891043124:web:2acd2f4bc851ec6cebcd61"});var S=u.auth(),C=u.firestore();document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".modal"),t={onOpenStart:function(){document.querySelector("#addHolding-form")["addHolding-ticker"].defaultValue=""},opacity:0,preventScrolling:!1};w.a.Modal.init(e,t);var a=document.querySelectorAll(".collapsible");w.a.Collapsible.init(a)}));var q=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).calculateMetrics=function(){var e,t=0,a=0,o=0,i=n.state.currentHoldings,r=0,l=0;null!=i&&i.forEach((function(e){t+=e.priceBought*e.quantity,a+=e.price*e.quantity,r+=e.quantity*(e.price-e.previousClose)})),o=(e=a-t)/t,o*=100;var c=a-r;l=(a-c)/c,l*=100,n.setState({totalInvested:t,totalValue:a,totalGain:e,percentGain:o,dayGain:r,dayGainPercent:l})},n.signUp=function(e){e.preventDefault();var t=document.querySelector("#signup-form"),a=t["signup-email"].value,n=t["signup-password"].value,o=t["signup-name"].value;document.getElementById("signup-form").reset();var i=document.querySelector("#modal-signup");w.a.Modal.getInstance(i).close(),t.reset(),S.createUserWithEmailAndPassword(a,n).then((function(e){C.collection("users").doc(e.user.uid).set({email:a,name:o})}))},n.logIn=function(e){e.preventDefault();var t=document.querySelector("#login-form"),a=t["login-email"].value,n=t["login-password"].value;S.signInWithEmailAndPassword(a,n).then((function(e){var a=document.querySelector("#modal-login");w.a.Modal.getInstance(a).close(),t.reset(),t.querySelector(".error").innerHTML=""})).catch((function(e){t.querySelector(".error").innerHTML=e.message}))},n.addHolding=function(e){e.preventDefault();var t=document.querySelector("#addHolding-form"),a=t["addHolding-ticker"].value.toUpperCase(),o=parseFloat(t["addHolding-quantity"].value),i=parseFloat(t["addHolding-price"].value),r=new XMLHttpRequest;r.open("GET","https://cloud.iexapis.com/stable/ref-data/iex/symbols?token=pk_ea3fad39b66c4c08a98acce72eda2aaa"),r.send(),r.onload=function(e){JSON.parse(r.responseText).filter((function(e){return e.symbol===a.toUpperCase()})).length>0?(n.setState({addHoldingError:""}),isNaN(o)||isNaN(i)?n.setState({addHoldingError:"Please input valid numbers"}):(n.dbAddHolding(a,o,i),n.setState({addHoldingError:""}))):n.setState({addHoldingError:"Invalid ticker"})}},n.pullStockData=function(){var e=n.state.userHoldings,t="";if(null!=e.docs[0]){e.docs.forEach((function(e){t+=e.data().ticker,t+=","}));var a=new XMLHttpRequest,o="https://cloud.iexapis.com/stable/stock/market/batch?symbols="+t+"&types=quote&token=pk_ea3fad39b66c4c08a98acce72eda2aaa";a.open("GET",o),a.send(),a.onload=function(t){var o=JSON.parse(a.responseText),i=[];e.docs.forEach((function(e){var t;for(var a in o)o[a].quote.symbol.toUpperCase()===e.data().ticker.toUpperCase()&&(t=o[a].quote);var n=(t.latestPrice-t.previousClose)/t.previousClose,r=(n=Math.round(100*n*100)/100)>=0?"percentChangeUp noSelect":"percentChangeDown noSelect",l=e.data().quantity*t.latestPrice;i.push({key:e.data().ticker,name:t.companyName,percentChange:n,changeType:r,quantity:e.data().quantity,priceBought:e.data().price,price:t.latestPrice,previousClose:t.previousClose,value:l})})),n.setState({currentHoldings:i},(function(){w.a.toast({html:"Pulled updated market data"})})),n.calculateMetrics()}}else console.log("user does not own anything")},n.displayWindowSize=function(){var e=document.documentElement.clientWidth,t=document.documentElement.clientHeight;n.setState({width:e,height:t})},n.editHolding=function(e){e.preventDefault();var t=document.querySelector("#modal-editHolding"),a=document.querySelector("#editHolding-form"),o=a["editHolding-ticker"].value.toUpperCase(),i=parseFloat(a["editHolding-quantity"].value),r=parseFloat(a["editHolding-price"].value);isNaN(i)||isNaN(r)?n.setState({editHoldingError:"Please input valid numbers"}):(n.setState({editHoldingError:""}),C.collection("holdings").where("owner","==",C.collection("users").doc(u.auth().currentUser.uid)).where("ticker","==",o).get().then((function(e){null==e.docs[0]?n.setState({editHoldingError:"Holding no longer exists"}):C.collection("holdings").doc(e.docs[0].id).set({ticker:o.toUpperCase(),price:r,quantity:i,owner:C.doc("users/"+u.auth().currentUser.uid)}).then((function(){w.a.Modal.getInstance(t).close(),a.reset(),a.querySelector(".error").innerHTML="",w.a.toast({html:"Edited "+o+" position"})}))})))},n.removePosition=function(){var e=document.querySelector("#modal-editHolding"),t=document.querySelector("#modal-deleteConfirmation"),a=document.querySelector("#editHolding-form")["editHolding-ticker"].value.toUpperCase();C.collection("holdings").where("owner","==",C.collection("users").doc(u.auth().currentUser.uid)).where("ticker","==",a).get().then((function(n){C.collection("holdings").doc(n.docs[0].id).delete().then((function(){w.a.Modal.getInstance(e).close(),w.a.Modal.getInstance(t).close(),w.a.toast({html:"Removed "+a+" position"})}))}))},n.search=function(e){e.preventDefault();var t=document.querySelector("#search-form"),a=t["search-ticker"].value.toUpperCase();t["search-ticker"].value="";var n=document.querySelector("#modal-stockDetails"),o=document.querySelector("#stockDetails-company"),i=document.querySelector("#stockDetails-price"),r=document.querySelector("#stockDetails-previousClose"),l=document.querySelector("#stockDetails-pe"),c=document.querySelector("#stockDetails-exchange"),s=document.querySelector("#stockDetails-week52Low"),d=document.querySelector("#stockDetails-week52High"),u=document.querySelector("#stockDetails-marketCap"),m=document.querySelector("#stockDetails-ytdChange");o.innerHTML="Company",i.innerHTML="Price",r.innerHTML="Previous Close",l.innerHTML="P/E Ratio",c.innerHTML="Exchange",s.innerHTML="52 Week Low",d.innerHTML="52 Week High",u.innerHTML="Market Cap",m.innerHTML="YTD Change";var p=new XMLHttpRequest;p.open("GET","https://cloud.iexapis.com/stable/ref-data/iex/symbols?token=pk_ea3fad39b66c4c08a98acce72eda2aaa"),p.send(),p.onload=function(e){if(JSON.parse(p.responseText).filter((function(e){return e.symbol===a.toUpperCase()})).length>0){var t=new XMLHttpRequest,h="https://cloud.iexapis.com/stable/stock/"+a+"/quote?token=pk_ea3fad39b66c4c08a98acce72eda2aaa";t.open("GET",h),t.send(),t.onload=function(e){var p=JSON.parse(t.responseText);o.innerHTML=p.companyName+" ("+a+")",i.innerHTML="Last: $"+p.latestPrice,r.innerHTML="Previous Close: $"+p.previousClose,l.innerHTML="P/E Ratio: "+p.peRatio,c.innerHTML="Exchange: "+p.primaryExchange,s.innerHTML="52 Week Low: "+p.week52Low,d.innerHTML="52 Week High: "+p.week52High,u.innerHTML="Market Cap: $"+p.marketCap,m.innerHTML="YTD Change: "+p.ytdChange,w.a.Modal.getInstance(n).open()}}else console.log("no match")}},n.state={email:"rahul",width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,userHoldings:{docs:{}}},n}return Object(c.a)(a,[{key:"logOut",value:function(){S.signOut()}},{key:"dbAddHolding",value:function(e,t,a){var n=document.querySelector("#addHolding-form");C.collection("holdings").where("owner","==",C.collection("users").doc(u.auth().currentUser.uid)).where("ticker","==",e).get().then((function(o){if(null!=o.docs[0]){var i=o.docs[0],r=i.data().ticker,l=i.data().quantity+t,c=(a*t+i.data().price*i.data().quantity)/l;C.collection("holdings").doc(i.id).set({ticker:r,quantity:l,price:c,owner:i.data().owner}).then((function(){n.reset(),n["addHolding-ticker"].focus(),n["addHolding-ticker"].select(),w.a.toast({html:"Added "+t+" "+e+" shares"})}))}else C.collection("holdings").add({ticker:e.toUpperCase(),price:a,quantity:t,owner:C.doc("users/"+u.auth().currentUser.uid)}).then((function(){n.reset(),n["addHolding-ticker"].focus(),n["addHolding-ticker"].select(),w.a.toast({html:"Added "+t+" "+e+" shares"})}))}))}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",this.displayWindowSize),S.onAuthStateChanged((function(t){t?C.collection("users").doc(t.uid).get().then((function(t){e.setState({user:t,userLoggedIn:!0});var a=C.collection("users").doc(e.state.user.id);C.collection("holdings").where("owner","==",a).onSnapshot((function(t){e.setState({userHoldings:t},(function(){e.pullStockData()}))}))})):e.setState({email:"Not Logged In",currentHoldings:null,totalInvested:0,totalValue:0,totalGain:0,percentGain:0,dayGain:0,dayGainPercent:0,userLoggedIn:!1})}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"handleDoubleCLick",value:function(e,t,a,n){var o=document.querySelector("#modal-editHolding");w.a.Modal.getInstance(o).open();var i=document.querySelector("#editHolding-form"),r=document.querySelector("#editHolding-company");i["editHolding-quantity"].defaultValue=a,i["editHolding-price"].defaultValue=n,i["editHolding-ticker"].defaultValue=t,r.innerHTML=e+" ("+t+")",w.a.updateTextFields()}},{key:"addToPosition",value:function(){var e=document.querySelector("#modal-editHolding"),t=document.querySelector("#editHolding-form"),a=t["editHolding-ticker"].value.toUpperCase();w.a.Modal.getInstance(e).close(),t.reset(),t.querySelector(".error").innerHTML="";var n=document.querySelector("#modal-addHolding"),o=document.querySelector("#addHolding-form");w.a.Modal.getInstance(n).open(),o["addHolding-ticker"].defaultValue=a,o["addHolding-quantity"].focus(),o["addHolding-quantity"].select(),w.a.updateTextFields()}},{key:"removePositionConfirmation",value:function(){var e=document.querySelector("#editHolding-form")["editHolding-ticker"].value.toUpperCase(),t=document.querySelector("#modal-deleteConfirmation");w.a.Modal.getInstance(t).open(),document.querySelector("#deleteHolding-details").innerHTML="This action will remove your "+e+" position"}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(b,{search:this.search,removePosition:this.removePosition,removePositionConfirmation:this.removePositionConfirmation,dataUpdate:this.pullStockData,user:this.state.user,addToPosition:this.addToPosition,editHoldingError:this.state.editHoldingError,editHoldingSubmit:this.editHolding,addHoldingError:this.state.addHoldingError,userLoggedIn:this.state.userLoggedIn,loginSubmit:this.logIn,signUpSubmit:this.signUp,logOut:this.logOut,addHoldingSubmit:this.addHolding}),o.a.createElement(H,{dayGainPercent:this.state.dayGainPercent,percentGain:this.state.percentGain,totalValue:this.state.totalValue,totalGain:this.state.totalGain,dayGain:this.state.dayGain,userLoggedIn:this.state.userLoggedIn}),o.a.createElement(h,{doubleClickFunction:this.handleDoubleCLick,currentHoldings:this.state.currentHoldings,height:this.state.height,width:this.state.width}))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.ef1a9fe5.chunk.js.map