import React, {Component} from 'react';
import {hashHistory} from 'react-router';
import { withRouter } from 'react-router';

export default class Header extends Component {
  constructor(props){
    super(props);

    this.loginRedirect = this.loginRedirect.bind(this);
    this.signupRedirect = this.signupRedirect.bind(this);
    this.logoutRedirect = this.logoutRedirect.bind(this);
    this.corkboardRedirect = this.corkboardRedirect.bind(this);
    this.homeRedirect = this.homeRedirect.bind(this);
  }

  homeRedirect(e){
    e.preventDefault();
    hashHistory.push('/');
  }

  corkboardRedirect(e){
    e.preventDefault();
    hashHistory.push('/corkboard');
  }

  loginRedirect(e){
    e.preventDefault();
    hashHistory.push('/login');
  }

  signupRedirect(e){
    e.preventDefault();
    hashHistory.push('/signup');
  }

  logoutRedirect(e){
    e.preventDefault();
    this.props.logout();
    hashHistory.push("/");
  }


  render(){


    if (this.props.currentUser) {
      return(
        <div className='header'>
          <h1>trekko</h1>
          <input type="button" onClick={this.homeRedirect} className="header-button" value="Home"/>
          <input type="button" onClick={this.corkboardRedirect} className="header-button" value="Corkboard"/>
          <input type="button" onClick={this.logoutRedirect} className="header-button" value="Logout"/>

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
