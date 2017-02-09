import React, { Component } from 'react';
import { connect } from 'react-redux';
import DestinationSelect from '../destination_select/destination_select';
import { getPlaces } from '../../actions';

class ItineraryIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    const destination = nextProps.selectedDestination

    this.props.getPlaces(destination);
  }

  render() {
    return (
      <div className="itinerary-main" >
        <DestinationSelect />

      </div>
    );
  }
}

const mapStateToProps = state => {
  const selectedDestination = state.destinations.selectedDestination;

  return { selectedDestination };
}

export default connect(
  mapStateToProps,
  { getPlaces }
)(ItineraryIndex);
