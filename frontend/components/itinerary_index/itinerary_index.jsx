import React, { Component } from 'react';
import DestinationSelect from '../destination_select/destination_select';

class RecommendationsIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="itinerary-main" >
        <DestinationSelect />

      </div>
    );
  }
}

export default RecommendationsIndex;
