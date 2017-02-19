import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecommendationItem from '../recommendation_item/recommendation_item';

class RecommendationList extends Component {
  constructor(props) {
    super(props)

    this.renderRecommendationLines = this.renderRecommendationLines.bind(this);
  }

  renderRecommendationLines() {
    const recommendations = this.props.recommendations;
    const recommendationLines = [];
    recommendations.forEach((recommendation, idx) => {
      recommendationLines.push(
        <RecommendationItem key={recommendation.id} id={`btn-${idx}`} recommendation={recommendation} />
      );
    });
    return recommendationLines;
  }

  render() {
    if (!this.props.loading) {
      return (
        <div className="rec-content">
          <div className="rec-list">
            <ul>
              {this.renderRecommendationLines()}
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className="rec-content">
          <h1>Loading...</h1>
        </div>
      )
    }

  }
}

const mapStateToProps = (state) => {
  const recommendations = state.recommendations.recommendations;
  const loading = state.recommendations.loading;
  const recommendationType = state.recommendations.recommendationType;

  return { recommendations, loading, recommendationType };
}

export default connect(
  mapStateToProps,
  {}
)(RecommendationList);
