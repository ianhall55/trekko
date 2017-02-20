class Api::PlacesController < ApplicationController

  def index

    if params[:lat]
      lat, lng = params[:lat], params[:lng]
      search_type = params[:type]
      type = ''
      if search_type == "Restaurant"
        type = 'restaurant'
      elsif search_type == "Lodging"
        type = 'lodging'
      else
        type = 'aquarium,amusement_park,museum,art_gallery'
      end
      url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=#{lat},#{lng}&type=#{type}&radius=1000&key=#{ENV['MAP_KEY']}"
      response = HTTParty.get(url)
    end

    render(
      json: response["results"],
      status: 200
    )

  end

end
