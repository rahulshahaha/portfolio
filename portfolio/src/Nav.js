import React from 'react';

class Nav extends React.Component {

 
    render(){
        let navBar;
        if(this.props.userLoggedIn){
            navBar = (
            <div className="navbar-fixed">
                <nav className="z-depth-0 grey darken-3">
                    <div className="nav-wrapper">
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
                <div id="modal-signup" className="modal grey darken-3">
                    <div className="modal-content">
                    <h4 className="white-text">Sign up</h4>
                    <form id="signup-form" onSubmit={this.props.signUpSubmit}>
                        <div className="input-field">
                        <input type="email" id="signup-email" required className="white-text" />
                        <label htmlFor="signup-email">Email address</label>
                        </div>
                        <div className="input-field">
                        <input className="white-text" type="password" id="signup-password" required />
                        <label htmlFor="signup-password">Choose password</label>
                        </div>
                        <div className='input-field'>
                            <input className="white-text" type="text" id="signup-name" required />
                            <label htmlFor="signup-name">Name</label>
                        </div>
                        <button className="btn black darken-2 z-depth-0">Sign up</button>
                        <p className="error pink-text center-align"></p>
                    </form>
                    </div>
                </div>
                <div id="modal-login" className="modal grey darken-3">
                    <div className="modal-content">
                    <h4 className="white-text">Login</h4><br />
                    <form id="login-form" onSubmit={this.props.loginSubmit}>
                        <div className="input-field">
                        <input className="white-text" type="email" id="login-email" required />
                        <label htmlFor="login-email">Email address</label>
                        </div>
                        <div className="input-field">
                        <input className="white-text" type="password" id="login-password" required />
                        <label htmlFor="login-password">Your password</label>
                        </div>
                        <button className="btn black darken-2 z-depth-0">Login</button>
                        <p className="error pink-text center-align"></p>
                    </form>
                    </div>
                </div>
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
                <div id="modal-editHolding" className="modal bottom-sheet grey darken-3">
                    <div className="modal-content">
                    <h4 id="editHolding-company" className="white-text">Edit Holding</h4>
                    <form id="editHolding-form" onSubmit={this.props.editHoldingSubmit}>
                        <input type="text" id="editHolding-ticker" className="white-text hide" />
                        <div className="input-field">
                        <input type="number" id="editHolding-quantity" step="any" required className="white-text" />
                        <label htmlFor="editHolding-quantity" className="active">New Quantity</label>
                        </div>
                        <div className="input-field">
                        <input className="white-text" type="number" step="any" id="editHolding-price" required />
                        <label htmlFor="editHolding-price">New Price</label>
                        </div>
                        <button className="btn black darken-2 z-depth-0">Save</button>
                        <p className="error pink-text center-align">{this.props.editHoldingError}</p>
                    </form>
                        <hr></hr>
                        <button className="left btn black darken-2 z-depth-0" onClick={this.props.addToPosition}>Add to Position</button>
                        <button className="btn black darken-2 z-depth-0" onClick={this.props.removePositionConfirmation}>Remove Position</button>
                    </div>
                </div>
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


   export default Nav;
