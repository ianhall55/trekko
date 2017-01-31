import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectDestination, centerMap } from '../../actions';

class DestinationList extends Component {

  componentDidMount() {
    let firstDestination = this.props.destinations[0];
    let { lat, lng } = firstDestination;
    this.props.selectDestination(firstDestination);
    this.props.centerMap({lat: lat, lng: lng});
  }

  destinationChanged(e) {
    e.preventDefault();
    const newDestination = this.props.destinations[e.currentTarget.value];
    let { lat, lng } = newDestination;
    this.props.selectDestination(newDestination);
    this.props.centerMap({lat: lat, lng: lng, zoom: 12});
  }

  render() {
    const dropdownOptions = [];
    const destinations = this.props.destinations;

    if (destinations) {
      destinations.forEach((destination, index) => {
        dropdownOptions.push(
          <option key={destination.id} value={index}>{destination.name}</option>
        );
      });
    }

    return (
      <select className="destination-dropdown" onChange={this.destinationChanged.bind(this)}>
        {dropdownOptions}
      </select>
    );
  }
}

const mapStateToProps = state => {
  const { destinations } = state.destinations;

  return { destinations };
};

export default connect(
  mapStateToProps,
  { selectDestination, centerMap }
)(DestinationList);
