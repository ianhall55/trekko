import React from 'react';
import {connect} from 'react-redux';
import Corkboard from './corkboard';
import { fetchTripsForUser } from '../../actions/trips_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchTripsForUser: (userId) => (dispatch(fetchTripsForUser(userId))),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Corkboard);
