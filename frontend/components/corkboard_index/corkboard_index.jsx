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

    return(
      <div className="corkboard-index" >
        <h1>Corkboard Index</h1>
        <ul>
          {tripLines}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  trips: state.trips.tripsForUser
});

export default connect(
  mapStateToProps
)(CorkboardIndex);
