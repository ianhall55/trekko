import React from 'react';
import {connect} from 'react-redux';
import Trip from './trip';
import { fetchTrip, clearTrip } from '../../actions/trips_actions';
import { centerMap } from '../../actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  trip: state.trips.trip
});

const mapDispatchToProps = dispatch => ({
  fetchTrip: (tripId) => (dispatch(fetchTrip(tripId))),
  clearTrip: () => (dispatch(clearTrip())),
  centerMap: (coordinates) => dispatch(centerMap(coordinates))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trip);
