import {
  RECEIVE_POI_FOR_DESTINATION,
  RECEIVE_POI,
  CREATE_POI,
  DELETE_POI,
  REMOVE_POI,
  CLEAR_POI
} from './types';

export const fetchPOIForDestination = destinationId => {
  return (dispatch) => {
    $.get('/api/places_of_interest', {destinationId})
      .done((data) => dispatch(receivePOIForDestination(data)))
      .fail((xhr) => console.log(xhr.responseText))
  }
}

export const receivePOIForDestination = POIs => {
  return {
    type: RECEIVE_POI_FOR_DESTINATION,
    payload: POIs
  }
};

export const createPOI = POI => {
  return (dispatch) => {
    $.post('/api/places_of_interest', { "place_of_interest": POI })
      .done((data) => console.log(data))
      .fail((xhr) => console.log(xhr.responseText))
  }
};

export const receivePOI = POI => {
  return {
    type: RECEIVE_POI,
    payload: POI
  }
};

export const clearPOI = () => ({
  type: CLEAR_POI
})
