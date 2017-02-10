class Api::PlacesOfInterestController < ApplicationController

  def index
    @places_of_interest = PlaceOfInterest.where(destination_id: params[:destinationId])
    render :index
  end

  def show
    @place_of_interest = PlaceOfInterest.where(params[:id])
    render :show
  end

  def create
    @place_of_interest = PlaceOfInterest.new(place_of_interest_params)
    if @place_of_interest.save
      render :show
    else
      render json: @place_of_interest.errors.full_messages, status: 422
    end
  end

  def update
    @place_of_interest = PlaceOfInterest.find(place_of_interest_params[:id])
    @place_of_interest.update(place_of_interest_params)
    render :show
  end

  def destroy
    @place_of_interest = PlaceOfInterest.find(params[:id])
    @place_of_interest.destroy
    render json: @place_of_interest
  end

  def place_of_interest_params
    params.require(:place_of_interest)
      .permit(:id, :name, :google_id, :destination_id, :type, :photo_reference)
  end

end
