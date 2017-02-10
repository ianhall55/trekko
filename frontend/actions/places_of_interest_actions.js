import {
  RECEIVE_POI_FOR_TRIP,
  RECEIVE_POI,
  CREATE_POI,
  DELETE_POI,
  REMOVE_POI
} from './types';

export const fetchPOIForTrip = tripId => {
  return (dispatch) => {
    $.get('/api/places_of_interest', {tripId})
      .done((data) => dispatch(receivePOIForTrip(data)))
      .fail((xhr) => console.log(xhr.responseText))
  }
}

export const receivePOIForTrip = POIs => {
  return {
    type: RECEIVE_POI_FOR_TRIP,
    payload: POIs
  }
};

export const createPOI = POI => {
  return (dispatch) => {
    $.post('/api/places_of_interest', { "place_of_interest": POI })
      .done((data) => dispatch(receivePOI(data)))
      .fail((xhr) => console.log(xhr.responseText))
  }
};

export const receivePOI = POI => {
  return {
    type: RECEIVE_POI,
    payload: POI
  }
};
