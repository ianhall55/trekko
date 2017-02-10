import React, { Component } from 'react';
import { connect } from 'react-redux';
import DestinationSelect from '../destination_select/destination_select';
import { fetchPOIForTrip } from '../../actions';

class ItineraryIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const trip = this.props.trip;

    if (trip.id) { this.props.fetchPOIForTrip(trip.id); }
  }

  componentWillReceiveProps(nextProps) {
    const trip = nextProps.trip

    this.props.fetchPOIForTrip(trip.id);
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
  const trip = state.trips.trip;

  return { trip };
}

export default connect(
  mapStateToProps,
  { fetchPOIForTrip }
)(ItineraryIndex);
