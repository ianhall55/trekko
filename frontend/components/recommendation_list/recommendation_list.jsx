import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecommendationSelect from '../recommendation_select/recommendation_select';
import RecommendationItem from '../recommendation_item/recommendation_item';

class RecommendationList extends Component {
  constructor(props) {
    super(props)

    this.renderRecommendationLines = this.renderRecommendationLines.bind(this);
  }

  renderRecommendationLines() {
    const recommendations = this.props.recommendations;
    const recommendationLines = [];
    recommendations.forEach((recommendation) => {
      recommendationLines.push(
        <RecommendationItem key={recommendation.id} recommendation={recommendation} />
      );
    });
    return recommendationLines;
  }

  render() {
    if (this.props.recommendations.length > 0) {
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

  return { recommendations };
}

export default connect(
  mapStateToProps,
  {}
)(RecommendationList);
