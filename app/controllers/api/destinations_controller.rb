class Api::DestinationsController < ApplicationController
  before_action :authenticate_request
  
  def index
    # if params[:trip_id]
    #   @destinations = Destination.where(trip_id: params[:trip_id]).order(:ord)
    # else
    #   render error
    # end
    @destinations = Destination.where(trip_id: params[:trip_id]).order(:ord)
    render :index
  end

  def show
    @destination = Destination.find(params[:id])
    render :show
  end

  def create
    @destination = Destination.new(destination_params)
    last_destination = Destination.where(trip_id: @destination.trip_id).order(:ord).last
    @destination.ord = (last_destination) ? last_destination.ord + 1 : 1
    if @destination.save
      render :show
    else
      render json: @destination.errors.full_messages, status: 422
    end
  end

  def update
    @destination = Destination.find(destination_params[:id])
    @destination.update(destination_params)
    render :show
  end

  def destroy
    @destination = Destination.find(params[:id])
    @destination.destroy
    render json: @destination
  end


  def destination_params
    params.require(:destination).permit(:name, :lat, :lng, :trip_id)
  end



end
