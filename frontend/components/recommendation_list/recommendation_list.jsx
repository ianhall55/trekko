import React from 'react';
import { connect } from 'react-redux';
import RecommendationSelect from '../recommendation_select/recommendation_select';
import RecommendationItem from '../recommendation_item/recommendation_item';

const RecommendationList = ({ recommendations }) => {

  const recommendationLines = [];
  recommendations.forEach((recommendation) => {
    recommendationLines.push(
      <RecommendationItem key={recommendation.id} recommendation={recommendation} />
    );
  });

  return (
    <div className="rec-content">
      <div className="rec-list">
        <ul>
          {recommendationLines}
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const recommendations = state.recommendations.recommendations;

  return { recommendations };
}

export default connect(
  mapStateToProps,
  {}
)(RecommendationList);
