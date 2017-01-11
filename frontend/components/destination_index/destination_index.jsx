import React from 'react';
import { connect } from 'react-redux';
import DestinationItem from '../destination_item/destination_item';

class DestinationIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
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
      debugger;
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
      <h2>Destinations</h2>
        <ul>
          {destinationLines}
        </ul>
        Add Destination:
        <input id="trip-places-input" ref="autocomplete"
          className="controls" type="text" placeholder="Where do you want to go?" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  destinations: state.destinations
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DestinationIndex);
