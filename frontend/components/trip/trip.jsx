import React from 'react';
import Map from '../map_component/map.jsx';
import Header from '../header/header_container';
import TripOptions from '../trip_options/trip_options';

export default class Trip extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    if (!this.props.trip.id) {
      this.props.fetchTrip(this.props.params.tripId);
    } else {
      const { lat, lng, viewport } =  this.props.trip;
      this.props.centerMap({ lat: lat, lng: lng, viewport: viewport });
    }
  }

  componentWillUnmount(){
    if (this.props.trip.id) {
      this.props.clearTrip();
    }
  }

  componentWillReceiveProps(nextProps){

    if (this.props.trip.id && (nextProps.params.tripId != this.props.trip.id)) {
      this.props.fetchTrip(nextProps.params.tripId);
    }
  }


  render(){
    if (this.props.trip.id) {
      return(
        <div>
          <Header/>
          <div className="trip-content">
            <Map />

            <div className="trip-options">
              <h1>{this.props.trip.name}</h1>
              <TripOptions />
            </div>

          </div>
        </div>
      );
    } else {
      return(
        <div>
          <Header />
          <h1>Loading...</h1>
        </div>
      );
    }
  }

}
