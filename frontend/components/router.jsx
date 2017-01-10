import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// import components here
import App from './app';
import LoginFormContainer from './login_form/login_form_container.jsx';
import SignupFormContainer from './signup_form/signup_form_container.jsx';
import SplashContainer from './splash/splash_container.jsx';
import CorkboardContainer from './corkboard/corkboard_container.jsx';
import TripContainer from './trip/trip_container.jsx';


class AppRouter extends React.Component{
  constructor(props){
    super(props);
    
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    // this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
  }

  _ensureLoggedIn(nextState, replace) {
    const currentUser = store.getState().session.currentUser;
    if(!currentUser) {
      replace('/login');
    }
  }

  // #likely won't need this method, redirect logic already in login, signup forms
  //
  // _redirectIfLoggedIn(nextState, replace) {
  //   const currentUser = store.getState().session.currentUser;
  //   if (currentUser){
  //     replace('/corkboard');
  //   }
  // }


  render() {
  	return (
  		<Router history={hashHistory}>
        <Route path="/" component={ SplashContainer } />
        <Route path="/login" component={ LoginFormContainer }  />
        <Route path="/signup" component={ SignupFormContainer }  />
        <Route path="/corkboard" component={ CorkboardContainer }  onEnter={this._ensureLoggedIn} />
        <Route path="/plan-trip/:tripId" component={ TripContainer } onEnter={this._ensureLoggedIn} />
  		</Router>
  	);
  }
}

export default AppRouter;
