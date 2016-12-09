import {connect} from 'react-redux';
import React from 'react';
import SignupForm from './signup_form.jsx';
import { signup, login } from '../../actions/session_actions';
import { clearErrors } from '../../actions/forms_actions';
import { createTrip } from '../../actions/trips_actions';


const mapStateToProps = state => ({
  loggedIn: !!state.session.currentUser,
  errors: state.forms.signup.errors,
  pendingTrip: state.trips.pendingTrip,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
  createTrip: (trip) => dispatch(createTrip(trip)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
