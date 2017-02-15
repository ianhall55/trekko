import React, { Component } from 'react';
import { connect } from 'react-redux';
import DestinationSelect from '../destination_select/destination_select';
import RecommendationList from '../recommendation_list/recommendation_list';
import RecommendationSelect from '../recommendation_select/recommendation_select';
import { getRecommendations, clearRecommendations } from '../../actions';

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

  componentWillUnmount() {
    this.props.clearRecommendations();
  }

  render() {
    return (
      <div className="itinerary-main" >
        <div className="rec-header">
          <DestinationSelect />
          <RecommendationSelect />
        </div>
        <RecommendationList />
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
  { getRecommendations, clearRecommendations }
)(RecommendationIndex);
