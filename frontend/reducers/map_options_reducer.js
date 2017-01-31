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
      return _.merge({}, state, action.payload);
    default:
      return { state };

  }
};

export default MapOptionsReducer;
