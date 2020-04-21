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
               <h6 className="currentPrice noSelect">${this.props.price}</h6>
               <h6 className={this.props.changeType}>&nbsp; ({this.props.percentChange}%)</h6>
               <h6 className="overall noSelect">Overall:&nbsp;</h6>
               <h6 className={perfromanceClass}>${dollarsUp}&nbsp;({percentUp}%)</h6>
               {/* <Chart chartData = {this.props.chartData} width={this.props.width} height={this.props.height} /> */}
           </div>
        )
    }
   }


   export default Card;
