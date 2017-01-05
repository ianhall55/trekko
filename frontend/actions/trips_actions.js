export const TripConstants = {
  CREATE_TRIP: "CREATE_TRIP",
  RECEIVE_TRIP: "RECEIVE_TRIP",
  RECEIVE_TRIPS_FOR_USER: "RECEIVE_TRIPS_FOR_USER",
  PENDING_TRIP: "PENDING_TRIP",
  FETCH_TRIP: "FETCH_TRIP",
  FETCH_TRIPS_FOR_USER: "FETCH_TRIPS_FOR_USER",
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

export const receiveTripsForUser = trips => ({
  type: TripConstants.RECEIVE_TRIPS_FOR_USER,
  trips
});

export const pendingTrip = trip => ({
  type: TripConstants.PENDING_TRIP,
  trip
});

export const fetchTrip = tripId => ({
  type: TripConstants.FETCH_TRIP,
  tripId
});

export const fetchTripsForUser = userId => ({
  type: TripConstants.FETCH_TRIPS_FOR_USER,
  userId
});

export const clearTrip = () => ({
  type: TripConstants.CLEAR_TRIP
});
