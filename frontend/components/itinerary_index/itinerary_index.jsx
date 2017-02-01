import React, { Component } from 'react';
import DestinationList from '../destination_list/destination_list';

class RecommendationsIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="recommendations-main" >
        <DestinationList />
      </div>
    );
  }
}

export default RecommendationsIndex;
