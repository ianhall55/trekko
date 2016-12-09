class Api::TripsController < ApplicationController


  def show
    @trip = Trip.find(params[:id])

    render :show
  end

  def create

    @trip = Trip.new(trip_params)
    @trip.viewport = params[:trip][:viewport]
    @trip.viewport.each {|k,v| @trip.viewport[k] = v.to_f}
    if @trip.save

      render :show
    else
      render json: @trip.errors.full_messages, status: 422
    end
  end

  def trip_params
    params.require(:trip).permit(:id, :name, :lat, :lng, :viewport, :user_id, :date)
  end

end
