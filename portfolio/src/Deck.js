import React from 'react';
import Card from './Card';


class Deck extends React.Component {

    
    generateCards(){
        var currentHoldings = this.props.currentHoldings;
        if(currentHoldings == null){
            return null;
        }
        var height = this.props.height;
        var width = this.props.width;
        var cardsList = this.props.currentHoldings.map(function(s){
            return <Card key={s.key} name={s.name} price={s.price} percentChange={s.percentChange} changeType={s.changeType} height={height} width={width} quantity={s.quantity} priceBought={s.priceBought} />;
        });

         return cardsList;
    }




    render(){
    return (
        <div className="deck">
            {this.generateCards()}
        </div>
    )
    }

}


export default Deck;