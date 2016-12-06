import React, {Component} from 'react';
import {hashHistory} from 'react-router';
import { withRouter } from 'react-router';

class SplashPage extends Component {
  constructor(props){
    super(props);

    this.loginRedirect = this.loginRedirect.bind(this);
  }


  loginRedirect(e){
    e.preventDefault();
    hashHistory.push('/login');
  }

  render(){
    return(
      <div className="splash-main">
        <h1>Trekko Splash!</h1>
        <input type="button" onClick={this.loginRedirect} className="splash-button" value='Login'/>
      </div>
    );
  }
}

export default withRouter(SplashPage);
