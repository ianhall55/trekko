import _ from 'lodash';
import { PlaceConstants } from '../actions/places_actions';
import {hashHistory} from 'react-router';

const _defaultState = {
  currentPlace: {},
};

const PlacesReducer = function(state = _defaultState, action){
  switch (action.type) {
    case PlaceConstants.RECEIVE_PLACE:
      const currentPlace = action.place;
      return _.merge({}, _defaultState, {currentPlace});
    default:
      return state;
  }
};

export default PlacesReducer;
