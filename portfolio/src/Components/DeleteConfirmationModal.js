import React from 'react';



class DeleteConfirmationModal extends React.Component {


    render(){
        return (
            <div className="DeleteConfirmationModal">
                <div id="modal-deleteConfirmation" className="modal grey darken-3">
                    <div className="modal-content">
                    <h4 className="white-text">Are you sure?</h4>
                    <p className="white-text" id="deleteHolding-details"></p>
                    </div>
                    <div className="modal-footer grey darken-3">
                    <a href="#!" className="btn-flat black white-text" onClick={this.props.removePosition}>Confirm</a>
                    <a href="#!" className="modal-close btn-flat black white-text">Cancel</a>
                    </div>
                </div>
            </div>
        )
    }
}


export default DeleteConfirmationModal;