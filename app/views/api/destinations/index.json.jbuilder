json.array! @destinations do |destination|
  json.partial! "destination", destination: destination
end
