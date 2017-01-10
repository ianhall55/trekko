class Api::TripsController < ApplicationController

  def index
    @trips = Trip.where(user_id: params[:user_id])

    render :index
  end

  def show
    @trip = Trip.find(params[:id])

    render :show
  end

  def create

    @trip = Trip.new(trip_params)
    @trip.viewport = params[:trip][:viewport]
    @trip.viewport.each {|k,v| @trip.viewport[k] = v.to_f}
    if @trip.save
      @destination = Destination.create(name: @trip.name, lat: @trip.lat,
        lng: @trip.lng, trip_id: @trip.id, ord: 1)
      render :show
    else
      render json: @trip.errors.full_messages, status: 422
    end
  end

  def trip_params
    params.require(:trip).permit(:id, :name, :lat, :lng, :viewport, :user_id, :date)
  end

end
