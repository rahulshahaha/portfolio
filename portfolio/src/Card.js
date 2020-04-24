import React from 'react';

class Card extends React.Component {

    handleDoubleCLick(){
        console.log("doubleClick");
    }

 
    render(){
        var ticker = this.props.ticker;
        var quantity = this.props.quantity;
        var priceBought = this.props.priceBought;
        var name = this.props.name;
        var percentUp = (this.props.price - this.props.priceBought) / this.props.priceBought;
        var value = this.props.quantity * this.props.price;
        value = value.toFixed(2);
        percentUp = percentUp * 100;
        percentUp = percentUp.toFixed(2);
        var dollarsUp = (this.props.price * this.props.quantity) - (this.props.priceBought * this.props.quantity);
        dollarsUp = dollarsUp.toFixed(2);
        var perfromanceClass = "overallPerformanceUp noSelect";
        if(dollarsUp < 0){
           perfromanceClass = "overallPerformanceDown noSelect";
        }
        return(
           <div className="card" onDoubleClick={this.props.doubleClickFunction.bind(this,name,ticker,quantity,priceBought)}>
               <h1 className="companyName noSelect">{this.props.name}</h1>
               <h1 className="currentPrice noSelect">${this.props.price} <span className={this.props.changeType}>({this.props.percentChange}%)</span></h1>
               <h6 className="overall noSelect">Value:<span className={perfromanceClass}> ${value}</span></h6>
               <h6 className="overall noSelect">Overall:<span className={perfromanceClass}> ${dollarsUp} ({percentUp}%)</span></h6>
           </div>
        )
    }
   }


   export default Card;
