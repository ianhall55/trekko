import {
  SELECT_DESTINATION,
  CLEAR_SELECTED_DESTINATION,
  CLEAR_DESTINATIONS
} from './types';

export const DestinationConstants = {
  CREATE_DESTINATION: "CREATE_DESTINATION",
  RECEIVE_DESTINATION: "RECEIVE_DESTINATION",
  RECEIVE_DESTINATIONS_FOR_TRIP: "RECEIVE_DESTINATIONS_FOR_TRIP",
  PENDING_DESTINATION: "PENDING_DESTINATION",
  FETCH_DESTINATION: "FETCH_DESTINATION",
  FETCH_DESTINATIONS_FOR_TRIP: "FETCH_DESTINATIONS_FOR_TRIP",
  CLEAR_DESTINATION: "CLEAR_DESTINATION"
};

export const createDestination = destination => ({
  type: DestinationConstants.CREATE_DESTINATION,
  destination
});

export const receiveDestination = destination => ({
  type: DestinationConstants.RECEIVE_DESTINATION,
  destination
});

export const receiveDestinationsForTrip = destinations => ({
  type: DestinationConstants.RECEIVE_DESTINATIONS_FOR_TRIP,
  destinations
});

export const pendingDestination = destination => ({
  type: DestinationConstants.PENDING_DESTINATION,
  destination
});

export const fetchDestination = destinationId => ({
  type: DestinationConstants.FETCH_DESTINATION,
  destinationId
});

export const fetchDestinationsForTrip = tripId => ({
  type: DestinationConstants.FETCH_DESTINATIONS_FOR_TRIP,
  tripId
});

export const clearDestination = () => ({
  type: DestinationConstants.CLEAR_DESTINATION
});

export const selectDestination = destination => ({
  type: SELECT_DESTINATION,
  payload: destination
});

export const clearSelectedDestination = () => ({
  type: CLEAR_SELECTED_DESTINATION
});

export const clearDestinations = () => ({
  type: CLEAR_DESTINATIONS
});
