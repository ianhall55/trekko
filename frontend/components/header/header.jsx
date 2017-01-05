import React, {Component} from 'react';
import {hashHistory} from 'react-router';
import { withRouter } from 'react-router';

export default class Header extends Component {
  constructor(props){
    super(props);

    this.loginRedirect = this.loginRedirect.bind(this);
    this.signupRedirect = this.signupRedirect.bind(this);
  }

  loginRedirect(e){
    e.preventDefault();
    hashHistory.push('/login');
  }

  signupRedirect(e){
    e.preventDefault();
    hashHistory.push('/signup');
  }


  render(){
    if (this.currentUser.id) {
      return(
        <div className='header'>
          <h1>trekko</h1>
          <input type="button" onClick={this.props.logout} className="header-button" value="Logout"/>

        </div>
      );
    } else {
      return(
        <div className="header">
          <h1>trekko</h1>
          <input type="button" onClick={this.loginRedirect} className="splash-button" value='Login'/>
          <input type="button" onClick={this.signupRedirect} className="splash-button" value='Signup'/>
        </div>
      );
    }
  }
}
