import {
  CENTER_MAP
} from './types';


export const centerMap = (coordinates) => {
  return {
    type: CENTER_MAP,
    payload: coordinates
  };
};
