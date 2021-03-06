import React from 'react';
import {connect} from 'react-redux';

import TripOptionsNavigation from './trip_options_navigation';
import DestinationIndex from '../destination_index/destination_index';
import ItineraryIndex from '../itinerary_index/itinerary_index';
import RecommendationIndex from '../recommendation_index/recommendation_index';
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
      case 'Recommendations':
        return(
          <div className="trip-options-content" >
            <div className="trip-options-header" >
              <TripOptionsNavigation/>
            </div>
            <RecommendationIndex />

          </div>
        );
      case 'Itinerary':
        return(
          <div className="trip-options-content" >
            <div className="trip-options-header" >
              <TripOptionsNavigation/>
            </div>
            <ItineraryIndex />

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
