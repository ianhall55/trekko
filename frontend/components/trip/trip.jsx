import React from 'react';
import MapContainer from '../map_component/map_container.jsx';

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
    return(
      <div>
        <h1>Hi {this.props.currentUser.username}!</h1>

        <h2>{this.props.trip.name}</h2>

        <h3>Map</h3>

        <MapContainer />
      </div>
    );
  }

}
