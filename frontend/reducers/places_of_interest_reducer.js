import _ from 'lodash'
import {
  RECEIVE_POI_FOR_TRIP,
  RECEIVE_POI
} from '../actions/types';

const _defaultState = {
  placesOfInterest: []
}

export default ( state = _defaultState, action ) => {
  switch ( action.type ) {
    case RECEIVE_POI_FOR_TRIP:
      return _.merge( state, placesOfInterest: action.payload );
    case RECEIVE_POI:
      let placesOfInterest = [ ...state.placesOfInterest ];
      placesOfInterest.push(action.payload);
      return _.merge( state, placesOfInterest );
    default:
      return state;
  }
};
