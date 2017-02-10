import _ from 'lodash'
import {
  RECEIVE_POI_FOR_DESTINATION,
  RECEIVE_POI
} from '../actions/types';

const _defaultState = {
  placesOfInterest: {
    restaurants: [],
    lodgings: [],
    attractions: []
  }
}

export default ( state = _defaultState, action ) => {
  switch ( action.type ) {
    case RECEIVE_POI_FOR_DESTINATION:
      return { placesOfInterest: action.payload };
    case RECEIVE_POI:
      let placesOfInterest = [ ...state.placesOfInterest ];
      placesOfInterest.push(action.payload);
      return _.merge( {}, state, placesOfInterest );
    default:
      return state;
  }
};
