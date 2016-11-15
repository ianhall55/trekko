import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// import components here
import App from './app';
import LoginFormContainer from './login_form/login_form_container.jsx';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
  }

  _ensureLoggedIn(nextState, replace) {
    const currentUser = this.props.currentUser;
    if(!currentUser) {
      replace('/login');
    }
  }

  _redirectIfLoggedIn(nextState, replace) {
    const currentUser = this.props.currentUser;
    if (currentUser){
      replace('/home');
    }
  }


  render() {
  	return (
  		<Router history={hashHistory}>
        <Route path="/" component={ App }>
          <Route path="/login" component={ LoginFormContainer } onEnter={this._redirectIfLoggedIn}/>
        </Route>
  		</Router>
  	);
  }
}

export default AppRouter;
