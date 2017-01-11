import React from 'react';
import MapContainer from '../map_component/map_container.jsx';
import Header from '../header/header_container';
import DestinationIndex from '../destination_index/destination_index';

export default class Trip extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    if (!this.props.trip.id) {
      this.props.fetchTrip(this.props.params.tripId);
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
            <MapContainer />

            <div className="trip-options">
              <h2>{this.props.trip.name}</h2>
              <DestinationIndex />
            </div>

          </div>
        </div>
      );
    } else {
      return(
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }
  }

}
