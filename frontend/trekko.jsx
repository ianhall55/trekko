import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

import { login, logout, signup, receiveCurrentUser, receiveErrors} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});


window.login = login;
window.logout = logout;
window.signup = signup;
window.receiveCurrentUser = receiveCurrentUser;
window.receiveErrors = receiveErrors;
window.user = {username: 'ian', password: 'password'};
