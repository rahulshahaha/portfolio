import React from 'react';


class PortfolioHeader extends React.Component {

  formatDecimal(x) {
    return parseFloat(x).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
    
    generateCards = () =>{
      var totalGainColor = this.props.totalGain >= 0 ? "green-text text-darken-4 valign-wrapper" : "red-text text-darken-2 valign-wrapper";
      var dayGainColor = this.props.dayGain >= 0 ? "green-text text-darken-4 valign-wrapper" : "red-text text-darken-2 valign-wrapper";
      var formattedTotalValue = this.formatDecimal(this.props.totalValue);
      var formattedTotalGain = this.formatDecimal(this.props.totalGain);
      var formattedDayGain = this.formatDecimal(this.props.dayGain);
      var percentGain = this.props.percentGain === undefined ? 0 : this.props.percentGain.toFixed(2);
      var dayGainPercent = this.props.dayGainPercent === undefined ? 0 : this.props.dayGainPercent.toFixed(2);


      if(this.props.userLoggedIn){
          return (
              <div>
              <h3 className="valign-wrapper">Total Value: ${formattedTotalValue}</h3>
              <h6 className="valign-wrapper">Total Gain: <span className={totalGainColor}>${formattedTotalGain} ({percentGain}%)</span></h6>
              <h6 className="valign-wrapper">Day Gain: <span className={dayGainColor}>${formattedDayGain} ({dayGainPercent}%)</span></h6>
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