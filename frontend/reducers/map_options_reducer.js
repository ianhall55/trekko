import _ from 'lodash';
import {
  CENTER_MAP
} from '../actions/types';

const INITIAL_STATE = {
  lng: 0,
  lat: 0,
  viewport: null,
  zoom: undefined
};

const MapOptionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CENTER_MAP:
    
      let newState = _.merge({}, INITIAL_STATE, action.payload);
      return newState;
    default:
      return INITIAL_STATE;

  }
};

export default MapOptionsReducer;
