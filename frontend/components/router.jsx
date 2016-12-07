import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// import components here
import App from './app';
import LoginFormContainer from './login_form/login_form_container.jsx';
import SignupFormContainer from './signup_form/signup_form_container.jsx';
import SplashContainer from './splash/splash_container.jsx';
import Corkboard from './corkboard/corkboard_container.jsx';
import TripContainer from './trip/trip_container.jsx';


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
      replace('/tripboard');
    }
  }


  render() {
  	return (
  		<Router history={hashHistory}>
        <Route path="/" component={ SplashContainer } />
        <Route path="/login" component={ LoginFormContainer } onEnter={this._redirectIfLoggedIn}/>
        <Route path="/signup" component={ SignupFormContainer } onEnter={this._redirectIfloggedIn } />
        <Route path="/tripboard" component={ Corkboard }  />
        <Route path="/plan-trip" component={ TripContainer } />
  		</Router>
  	);
  }
}

export default AppRouter;
