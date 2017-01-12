import React from 'react';
import {connect} from 'react-redux';

import DestinationIndex from '../destination_index/destination_index';
import TripOptionsNavigation from './trip_options_navigation';

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
          <div>
            <div>
              <h2>Trip Options</h2>
              <TripOptionsNavigation/>
            </div>
            <DestinationIndex/>

          </div>
        );
      case 'Travelers':
        return(
          <div>
            <div>
              <h2>Trip Options</h2>
              <TripOptionsNavigation/>
            </div>
            <h3>Travelers</h3>

          </div>
        );
      case 'Recommendations':
        return(
          <div>
            <div>
              <h2>Trip Options</h2>
              <TripOptionsNavigation/>
            </div>
            <h3>Recommendations</h3>

          </div>
        );
      default:
        return(
          <div>
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
