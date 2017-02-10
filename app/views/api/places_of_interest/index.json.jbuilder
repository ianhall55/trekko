json.array! @places_of_interest do |poi|
  json.partial! "place_of_interest", placeOfInterest: poi
end
