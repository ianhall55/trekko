import React, { Component } from 'react';
import { connect } from 'react-redux';
import DestinationSelect from '../destination_select/destination_select';
import { getRecommendations } from '../../actions';

class RecommendationIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const destination = this.props.selectedDestination;

    if (destination.id) { this.props.getRecommendations(destination); }
  }

  componentWillReceiveProps(nextProps) {
    const destination = nextProps.selectedDestination

    this.props.getRecommendations(destination);
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
  { getRecommendations }
)(RecommendationIndex);
