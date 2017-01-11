import React from 'react';
import { connect } from 'react-redux';
import DestinationItem from '../destination_item/destination_item';

class DestinationIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let destinationLines = [];
    if (this.props.destinations[0]){
      this.props.destinations.forEach((destination) => {
        destinationLines.push(
          <DestinationItem key={destination.id} destination={destination} />
        );
      });
    }

    return(
      <div className="destination-index">
        <ul>
          {destinationLines}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  destinations: state.destinations
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DestinationIndex);
