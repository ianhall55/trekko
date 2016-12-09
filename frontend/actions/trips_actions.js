export const TripConstants = {
  CREATE_TRIP: "CREATE_TRIP",
  RECEIVE_TRIP: "RECEIVE_TRIP",
  PENDING_TRIP: "PENDING_TRIP",
  FETCH_TRIP: "FETCH_TRIP",
  CLEAR_TRIP: "CLEAR_TRIP"
};

export const createTrip = trip => ({
  type: TripConstants.CREATE_TRIP,
  trip
});

export const receiveTrip = trip => ({
  type: TripConstants.RECEIVE_TRIP,
  trip
});

export const pendingTrip = trip => ({
  type: TripConstants.PENDING_TRIP,
  trip
});

export const fetchTrip = tripId => ({
  type: TripConstants.FETCH_TRIP,
  tripId
});

export const clearTrip = () => ({
  type: TripConstants.CLEAR_TRIP
});
