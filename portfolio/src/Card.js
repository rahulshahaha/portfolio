import React from 'react';

class Card extends React.Component {

    handleDoubleCLick(){
        console.log("doubleClick");
    }

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

 
    render(){
        var ticker = this.props.ticker;
        var quantity = this.props.quantity;
        var priceBought = this.props.priceBought;
        var purchaseValue = quantity * priceBought;
        purchaseValue = purchaseValue.toFixed(2);
        var name = this.props.name;
        var percentUp = (this.props.price - this.props.priceBought) / this.props.priceBought;
        var value = this.props.quantity * this.props.price;
        var valueChange = (this.props.quantity * this.props.price) - (this.props.quantity * this.props.previousClose);
        valueChange = valueChange.toFixed(2);
        var valueChangeClass;
        if(valueChange >= 0){
            valueChangeClass = "valueChangeUp"
        }else{
            valueChangeClass = "valueChangeDown"
        }
        value = value.toFixed(2);
        percentUp = percentUp * 100;
        percentUp = percentUp.toFixed(2);
        var dollarsUp = (this.props.price * this.props.quantity) - (this.props.priceBought * this.props.quantity);
        dollarsUp = dollarsUp.toFixed(2);
        var perfromanceClass = "overallPerformanceUp noSelect";
        if(dollarsUp < 0){
           perfromanceClass = "overallPerformanceDown noSelect";
        }

        value = this.numberWithCommas(value);
        valueChange = this.numberWithCommas(valueChange);
        dollarsUp = this.numberWithCommas(dollarsUp);
        var price = this.numberWithCommas(this.props.price);

        return(
           <div className="card" onDoubleClick={this.props.doubleClickFunction.bind(this,name,ticker,quantity,priceBought)}>
               <h1 className="companyName noSelect">{this.props.name} ({this.props.ticker})</h1>
               <h1 className="currentPrice noSelect">${price} <span className={this.props.changeType}>({this.props.percentChange}%)</span></h1>
               <h6 className="overall noSelect">Purchase: {quantity} @ ${priceBought} (${purchaseValue})</h6>
               <h6 className="overall noSelect">Value:<span className={valueChangeClass}> ${value} (${valueChange})</span></h6>
               <h6 className="overall noSelect">Gain:<span className={perfromanceClass}> ${dollarsUp} ({percentUp}%)</span></h6>
           </div>
        )
    }
   }


   export default Card;
