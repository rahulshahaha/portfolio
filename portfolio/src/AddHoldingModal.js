import React from 'react';



class AddHoldingModal extends React.Component {


    render(){
        return (
            <div className="LoginModal">
                <div id="modal-addHolding" className="modal bottom-sheet grey darken-3">
                    <div className="modal-content">
                    <h4 className="white-text">Add Holding</h4><br />
                    <form id="addHolding-form" onSubmit={this.props.addHoldingSubmit}>
                        <div className="input-field">
                        <input className="white-text" type="text" id="addHolding-ticker" required />
                        <label htmlFor="addHolding-ticker">Ticker</label>
                        </div>
                        <div className="input-field">
                        <input className="white-text" type="number" id="addHolding-quantity" step="any" required />
                        <label htmlFor="addHolding-quantity">Quantity</label>
                        </div>
                        <div className="input-field">
                        <input className="white-text" type="number" id="addHolding-price" step="any" required />
                        <label htmlFor="addHolding-price">Price</label>
                        </div>
                        <button className="btn black darken-2 z-depth-0">Add</button>
                        <p className="error pink-text center-align">{this.props.addHoldingError}</p>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default AddHoldingModal;