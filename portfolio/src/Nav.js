import React from 'react';
import SignupModal from './SignupModal';
import LoginModal from './LoginModal';
import AddHoldingModal from './AddHoldingModal';
import EditHoldingModal from './EditHoldingModal';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import StockDetailsModal from './StockDetailsModal';


class Nav extends React.Component {


    render(){
        let navBar;
        if(this.props.userLoggedIn){
            navBar = (
            <div className="navbar-fixed">
                <nav className="z-depth-0 grey darken-3 col l10">
                    <div className="row">
                        <div className="nav-wrapper col l10">
                            <a href="." className="brand-logo center">Welcome, {this.props.user.data().name}</a>
                            <ul id="nav-mobile" className="left">
                                <li className="logged-in">
                                    <button className="btn black darken-2 z-depth-0" id="logout" onClick={this.props.logOut}>Logout</button>
                                </li>
                                <li className="logged-in">
                                    <button className="btn black darken-2 z-depth-0 modal-trigger" data-target="modal-addHolding">Add Holding</button>
                                </li>
                                <li className="logged-in">
                                    <button className="btn yellow darken-2 z-depth-0 black-text" onClick={this.props.dataUpdate}>Update Data</button>
                                </li>
                            </ul>
                        </div>
                        <form onSubmit={this.props.search} id="search-form" autoComplete="off" className="right grey darken-3 input-field col l2">
                            <input placeholder="Search" id="search-ticker" type="text" className="white-text"/>
                            <label htmlFor="search-ticker"></label>
                        </form>
                    </div>
                </nav>
            </div>
            );
        }else{
            navBar = (
            <div className="navbar-fixed">
                <nav className="z-depth-0 grey darken-3">
                    <div className="nav-wrapper">
                        <a href="." className="brand-logo center">Please Login</a>
                        <ul id="nav-mobile" className="left">
                            <li className="logged-out">
                                <button className="btn black darken-2 z-depth-0 modal-trigger" data-target="modal-login">Login</button>
                            </li>
                            <li className="logged-out">
                                <button className="btn black darken-2 z-depth-0 modal-trigger" data-target="modal-signup">Sign up</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            );
        }



        return(
            <div className="nav">
                {navBar}
                <SignupModal signUpSubmit={this.props.signUpSubmit}></SignupModal>
                <LoginModal loginSubmit={this.props.loginSubmit}></LoginModal>
                <AddHoldingModal addHoldingSubmit={this.props.addHoldingSubmit} addHoldingError={this.props.addHoldingError}></AddHoldingModal>
                <EditHoldingModal editHoldingSubmit={this.props.editHoldingSubmit} editHoldingError={this.props.editHoldingError} addToPosition={this.props.addToPosition} removePositionConfirmation={this.props.removePositionConfirmation}></EditHoldingModal>
                <DeleteConfirmationModal removePosition={this.props.removePosition}></DeleteConfirmationModal>
                <StockDetailsModal></StockDetailsModal>
            </div>
        )
    }
   }


   export default Nav;
