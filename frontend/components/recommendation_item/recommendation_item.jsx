import React from 'react';

const RecommendationItem = ({ recommendation }) => {
  return (
    <li>
      <div className="rec-item" >
        <h3>{ recommendation.name }</h3>
        <span>Rating: { recommendation.rating }</span>
        <button onClick={ (e) => console.log(recommendation) }>Add to Itinerary</button>
      </div>
    </li>
  )
};

export default RecommendationItem;
