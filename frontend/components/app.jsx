import React from 'react';
import { Link, hashHistory } from 'react-router';
import { withRouter } from 'react-router';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.loginRedirect = this.loginRedirect.bind(this);
  }

  loginRedirect(e){
    e.preventDefault();
    hashHistory.push('/login');
  }

  render() {
    return (
      <div>
        Trekko React

        <input type="button" onClick={this.loginRedirect} className="splash-button" value='Login'/>
      </div>
    );
  }
}

export default withRouter(App);
