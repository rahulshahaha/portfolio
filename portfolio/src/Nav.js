import React from 'react';

class Nav extends React.Component {



 
    render(){
        return(
            <div className="nav">
                <nav className="z-depth-0 grey darken-3">
                    <div className="nav-wrapper">
                        <ul id="nav-mobile" className="left">
                            {/* <li className="logged-in">
                                <button className="btn black darken-2 z-depth-0 modal-trigger" data-target="modal-account">Account</button>
                            </li> */}
                            <li className="logged-in">
                                <button className="btn black darken-2 z-depth-0" id="logout" onClick={this.props.logOut}>Logout</button>
                            </li>
                            {/* <li className="logged-out">
                                <button className="btn black darken-2 z-depth-0 modal-trigger" data-target="modal-login">Login</button>
                            </li> */}
                            <li className="logged-out">
                                <button className="btn black darken-2 z-depth-0 modal-trigger" data-target="modal-signup">Sign up</button>
                            </li>
                        </ul>
                    </div>
                </nav>
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
            </div>
        )
    }
   }


   export default Nav;
