
export const addTrip = function(trip, success, error) {
  $.ajax({
    method: 'POST',
    url: 'api/trips',
    data: trip,
    success,
    error
  });
};

export const fetchTrip = function(tripId, success, error) {
  $.ajax({
    method: 'GET',
    url: `api/trips/${tripId}`,
    success,
    error
  });
};
