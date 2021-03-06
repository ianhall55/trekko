import {connect} from 'react-redux';
import React from 'react';
import LoginForm from './login_form.jsx';
import { login } from '../../actions/session_actions';
import { clearErrors } from '../../actions/forms_actions';
import { createTrip } from '../../actions/trips_actions';


const mapStateToProps = state => ({
  loggedIn: !!state.session.currentUser,
  errors: state.forms.login.errors,
  pendingTrip: state.trips.pendingTrip,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
  createTrip: (trip) => dispatch(createTrip(trip)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
