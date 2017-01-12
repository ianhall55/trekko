import { TripOptionsConstants } from '../actions/trip_options_actions';
import { merge } from 'lodash';
import {hashHistory} from 'react-router';

const _defaultState = {

};

const TripOptionsReducer = function(state = _defaultState, action){
  switch (action.type) {
    case TripOptionsConstants.RECEIVE_TRIP_OPTION:
      return action.tripOption;

    default:
      return state;
  }
};

export default TripOptionsReducer;
