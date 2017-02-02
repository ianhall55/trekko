import React from 'react';
import { connect } from 'react-redux';
import DestinationItem from '../destination_item/destination_item';
import { createDestination, centerMap } from '../../actions';

class DestinationIndex extends React.Component {
  constructor(props){
    super(props);

    this.destinationEntered = this.destinationEntered.bind(this);
  }

  componentDidMount(){
    if (this.props.trip.id) {
      const { lat, lng, viewport } = this.props.trip;
      this.props.centerMap({ lat, lng, viewport });
    }

    const autocompleteInput = this.refs.autocomplete;

    const autocompleteOptions = {
      types: ['geocode']
    };

    this.autocomplete = new google.maps.places.Autocomplete(autocompleteInput, autocompleteOptions);

    this.autocomplete.addListener('place_changed', this.destinationEntered);
  }


  destinationEntered(){
    var place = this.autocomplete.getPlace();

    if (place.geometry) {
      let destination = {
        name: place.name,
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
        trip_id: this.props.trip.id
      };

      this.props.createDestination({destination});
      $("#trip-places-input").val("");
    }
  }


  render(){

    let destinationLines = [];
    if (this.props.destinations[0]){
      this.props.destinations.forEach((destination) => {
        destinationLines.push(
          <DestinationItem key={destination.id} destination={destination} />
        );
      });
    }

    return(
      <div className="destination-index">
        <input id="trip-places-input" ref="autocomplete"
          className="controls" type="text" placeholder="Add Destination" />
        <ul>
          {destinationLines}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  destinations: state.destinations.destinations,
  trip: state.trips.trip
});

// const mapDispatchToProps = dispatch => ({
//   createDestination: (destination) => (dispatch(createDestination(destination)))
//   centerMap: ()
// });

export default connect(
  mapStateToProps,
  { createDestination, centerMap }
)(DestinationIndex);
