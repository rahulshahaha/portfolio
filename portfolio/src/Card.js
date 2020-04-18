import React from 'react';

class Card extends React.Component {


 
    render(){
        var percentUp = (this.props.price - this.props.priceBought) / this.props.priceBought;
        percentUp = percentUp * 100;
        percentUp = percentUp.toFixed(2);
        var dollarsUp = (this.props.price * this.props.quantity) - (this.props.priceBought * this.props.quantity);
        dollarsUp = dollarsUp.toFixed(2);
        var perfromanceClass = "overallPerformanceUp";
        if(dollarsUp < 0){
           perfromanceClass = "overallPerformanceDown";
        }
        return(
           <div className="card">
               <h1 className="companyName">{this.props.name}</h1>
               <h6 className="currentPrice">${this.props.price}</h6>
               <h6 className={this.props.changeType}>&nbsp; ({this.props.percentChange}%)</h6>
               <h6 className="overall">Overall:&nbsp;</h6>
               <h6 className={perfromanceClass}>${dollarsUp}&nbsp;({percentUp}%)</h6>
               {/* <Chart chartData = {this.props.chartData} width={this.props.width} height={this.props.height} /> */}
           </div>
        )
    }
   }


   export default Card;
