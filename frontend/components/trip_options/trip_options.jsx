import React from 'react';
import {connect} from 'react-redux';

import TripOptionsNavigation from './trip_options_navigation';
import DestinationIndex from '../destination_index/destination_index';
import RecommendationsIndex from '../recommendations_index/recommendations_index';
import { receiveTripOption } from '../../actions/trip_options_actions';

class TripOptions extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.receiveTripOption("Destinations");
  }

  render(){
    switch (this.props.tripOptions) {
      case 'Destinations':
        return(
          <div className="trip-options-content" >
            <div className="trip-options-header" >
              <TripOptionsNavigation/>
            </div>
            <DestinationIndex/>

          </div>
        );
      case 'Travelers':
        return(
          <div className="trip-options-content" >
            <div className="trip-options-header" >
              <TripOptionsNavigation/>
            </div>
            <h3>Travelers</h3>

          </div>
        );
      case 'Recommendations':
        return(
          <div className="trip-options-content" >
            <div className="trip-options-header" >
              <TripOptionsNavigation/>
            </div>
            <RecommendationsIndex />

          </div>
        );
      default:
        return(
          <div className="trip-options-content" >
            <h2>Loading...</h2>
          </div>
        );
    }
  }
}

const mapStateToProps = state => ({
  tripOptions: state.tripOptions
});

const mapDispatchToProps = dispatch => ({
  receiveTripOption: (tripOption) => (dispatch(receiveTripOption(tripOption)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TripOptions);
