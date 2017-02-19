import React, { Component } from 'react';
import { connect } from 'react-redux';
import DestinationSelect from '../destination_select/destination_select';
import RecommendationList from '../recommendation_list/recommendation_list';
import RecommendationSelect from '../recommendation_select/recommendation_select';
import { startGetRecommendations, getRecommendations, clearRecommendations } from '../../actions';

class RecommendationIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger;
    const { lat, lng } = this.props.selectedDestination;
    const type = this.props.recommendationType;

    if (lat) { this.props.getRecommendations({ lat, lng, type}); }
  }

  componentWillReceiveProps(nextProps) {
    const currentDestination = this.props.selectedDestination
    const destination = nextProps.selectedDestination
    const type = nextProps.recommendationType;
    if (destination.id != currentDestination.id || type != this.props.recommendationType) {
      const { lat, lng } = destination;
      this.props.startGetRecommendations();
      this.props.getRecommendations({ lat, lng, type });
    }
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
  const recommendationType = state.recommendations.recommendationType;

  return { selectedDestination, recommendationType };
}

export default connect(
  mapStateToProps,
  { startGetRecommendations, getRecommendations, clearRecommendations }
)(RecommendationIndex);
