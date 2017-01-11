

export const addDestination = function(destination, success, error) {
  $.ajax({
    method: 'POST',
    url: 'api/destinations',
    data: destination,
    success,
    error
  });
};
