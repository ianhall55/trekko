import React from 'react';
import {connect} from 'react-redux';
import SplashPage from './splash.jsx';
import { receivePlace } from '../../actions/places_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  receivePlace: (place) => dispatch(receivePlace(place)),
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashPage);
