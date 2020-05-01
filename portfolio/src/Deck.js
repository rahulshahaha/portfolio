import React from 'react';
import Card from './Card';


class Deck extends React.Component {

    generateCards = () =>{
        var func = this.props.doubleClickFunction;
        var currentHoldings = this.props.currentHoldings;
        if(currentHoldings == null){
            return null;
        }
        var cardsList = this.props.currentHoldings.map(function(s){
            return <Card key={s.key} doubleClickFunction={func} holding={s} />;
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