import React from 'react';

class Card extends React.Component {

    handleDoubleCLick(){
        console.log("doubleClick");
    }

    numberWithCommas(x) {
        return parseFloat(x).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

 
    render(){
        //define numbers
        var price = this.props.price;
        var quantity = this.props.quantity;
        var priceBought = this.props.priceBought;
        var purchaseValue = quantity * priceBought;
        var percentUp = 100*((this.props.price - this.props.priceBought) / this.props.priceBought);
        var value = this.props.quantity * this.props.price;
        var valueChange = (this.props.quantity * this.props.price) - (this.props.quantity * this.props.previousClose);
        var valueChangeClass = valueChange >= 0 ? "valueChangeUp" : "valueChangeDown"
        var dollarsUp = (this.props.price * this.props.quantity) - (this.props.priceBought * this.props.quantity);
        var perfromanceClass = dollarsUp >= 0 ? "overallPerformanceUp noSelect" : "overallPerformanceDown noSelect";
    

        //Formatting
        valueChange = this.numberWithCommas(valueChange.toFixed(2));
        value = this.numberWithCommas(value.toFixed(2));
        percentUp = percentUp.toFixed(2);
        dollarsUp = this.numberWithCommas(dollarsUp.toFixed(2));
        price = this.numberWithCommas(price.toFixed(2));
        priceBought = this.numberWithCommas(priceBought.toFixed(2));
        purchaseValue = this.numberWithCommas(purchaseValue.toFixed(2));
        quantity = this.numberWithCommas(quantity.toFixed(2));

        return(
           <div className="card" onDoubleClick={this.props.doubleClickFunction.bind(this,this.props.name,this.props.ticker,this.props.quantity,this.props.priceBought)}>
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
