import React from 'react';



class EditHoldingModal extends React.Component {


    render(){
        return (
            <div className="EditHoldingModal">
                <div id="modal-editHolding" className="modal bottom-sheet grey darken-3">
                    <div className="modal-content">
                    <h4 id="editHolding-company" className="white-text">Edit Holding</h4>
                    <form id="editHolding-form" onSubmit={this.props.editHoldingSubmit}>
                        <input type="text" id="editHolding-ticker" className="white-text hide" />
                        <div className="input-field">
                        <input type="number" id="editHolding-quantity" step="any" required className="white-text" />
                        <label htmlFor="editHolding-quantity" className="active">Quantity</label>
                        </div>
                        <div className="input-field">
                        <input className="white-text" type="number" step="any" id="editHolding-price" required />
                        <label htmlFor="editHolding-price">Price</label>
                        </div>
                        <button className="btn black darken-2 z-depth-0">Save</button>
                        <p className="error pink-text center-align">{this.props.editHoldingError}</p>
                    </form>
                        <hr></hr>
                        <button className="left btn black darken-2 z-depth-0" onClick={this.props.addToPosition}>Add to Position</button>
                        <button className="left btn black darken-2 z-depth-0">More details</button>
                        <button className="btn black darken-2 z-depth-0" onClick={this.props.removePositionConfirmation}>Remove Position</button>
                    </div>
                </div>
            </div>
        )
    }
}


export default EditHoldingModal;