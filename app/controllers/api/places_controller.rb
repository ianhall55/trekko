class Api::PlacesController < ApplicationController

  def index

    if params[:lat]
      lat, lng = params[:lat], params[:lng]
      type = 'restaurant'
      url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=#{lat},#{lng}&radius=1000&key=#{ENV['MAP_KEY']}"
      response = HTTParty.get(url)
    end

    render(
      json: response["results"],
      status: 200
    )

  end

end
