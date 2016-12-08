import React from 'react';
import {connect} from 'react-redux';
import SplashPage from './splash.jsx';
import { receivePlace } from '../../actions/places_actions';
import { pendingTrip, createTrip } from '../../actions/trips_actions';


const mapStateToProps = state => ({
  place: state.places.currentPlace,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  receivePlace: (place) => dispatch(receivePlace(place)),
  pendingTrip: (trip) => dispatch(pendingTrip(trip)),
  createTrip: (trip) => dispatch(createTrip(trip)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashPage);
