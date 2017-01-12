import React from 'react';
import {connect} from 'react-redux';

import DestinationIndex from '../destination_index/destination_index';


class TripOptions extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    switch (this.props.tripOption) {
      case 'Destinations':
        return(
          <div>
            <div>
              <h2>Trip Options</h2>
            </div>
            <DestinationIndex/>

          </div>
        );
      case 'Travelers':

      case 'Hot Spots':


      default:
        return(
          <div>
            <h2>Loading...</h2>
          </div>
        );
    }
  }
}

export default connect(

)(TripOptions);
