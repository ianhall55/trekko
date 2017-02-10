import React, { Component } from 'react';
import { connect } from 'react-redux';
import DestinationSelect from '../destination_select/destination_select';
import ItineraryList from '../itinerary_list/itinerary_list';
import { fetchPOIForDestination } from '../../actions';

class ItineraryIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const destination = this.props.selectedDestination;

    if (destination.id) { this.props.fetchPOIForDestination(destination.id); }
  }

  componentWillReceiveProps(nextProps) {
    const destination = nextProps.selectedDestination

    this.props.fetchPOIForDestination(destination.id);
  }

  render() {
    return (
      <div className="itinerary-main" >
        <DestinationSelect />
        <ItineraryList />
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
  { fetchPOIForDestination }
)(ItineraryIndex);
