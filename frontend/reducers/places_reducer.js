import { PlaceConstants } from '../actions/places_actions';
import { merge } from 'lodash';
import {hashHistory} from 'react-router';

const _defaultState = {
  currentPlace: {}
};

const PlacesReducer = function(state = _defaultState, action){
  switch (action.type) {
    case PlaceConstants.RECEIVE_PLACE:
      const currentPlace = action.place;
      return merge({}, _defaultState, {currentPlace});
    default:
      return state;
  }
};

export default PlacesReducer;
