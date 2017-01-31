import React from 'react';
import {connect} from 'react-redux';

import CorkboardItem from '../corkboard_item/corkboard_item';


class CorkboardIndex extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    let tripLines = [];
    if (this.props.trips) {
      this.props.trips.forEach((trip) => {
        tripLines.push(
          <CorkboardItem key={trip.id} trip={trip}/>
        );
      });
    }

    if (this.props.trips[0]){
      return(
        <div className="corkboard-index" >
          <div className="corkboard-items">
            <ul>
              {tripLines}
            </ul>
          </div>
        </div>
      );
    } else {
      return(
        <h2>Loading...</h2>
      );
    }
  }
}

const mapStateToProps = state => ({
  trips: state.trips.tripsForUser
});

export default connect(
  mapStateToProps
)(CorkboardIndex);
