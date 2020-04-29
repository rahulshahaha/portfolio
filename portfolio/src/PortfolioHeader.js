import React from 'react';


class PortfolioHeader extends React.Component {

    numberWithCommas(x) {
        if(x === undefined){
          return 0;
        }else{
         return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
     }
    
    generateCards = () =>{
        var totalGainColor;
        if(this.props.totalGain >= 0){
            totalGainColor = "green-text text-darken-4 valign-wrapper";
          }else{
            totalGainColor = "red-text text-darken-2 valign-wrapper";
          }
          var dayGainColor
          if(this.props.dayGain >0){
            dayGainColor = "green-text text-darken-4 valign-wrapper";
          }else{
            dayGainColor = "red-text text-darken-2 valign-wrapper";
          }

          var formattedTotalValue, formattedTotalGain, formattedDayGain;
          formattedTotalValue = this.numberWithCommas(this.props.totalValue);
          formattedTotalGain = this.numberWithCommas(this.props.totalGain);
          formattedDayGain = this.numberWithCommas(this.props.dayGain);

        if(this.props.userLoggedIn){
            return (
                <div>
                <h3 className="valign-wrapper">Total Value: ${formattedTotalValue}</h3>
                <h6 className="valign-wrapper">Total Gain: <span className={totalGainColor}>${formattedTotalGain} ({this.props.percentGain}%)</span></h6>
                <h6 className="valign-wrapper">Day Gain: <span className={dayGainColor}>${formattedDayGain} ({this.props.dayGainPercent}%)</span></h6>
                <hr></hr>
              </div>
            )
        }else{
            return null
        }
    }




    render(){
    return (
        <div className="portfolioHeader">
            {this.generateCards()}
        </div>
    )
    }

}


export default PortfolioHeader;