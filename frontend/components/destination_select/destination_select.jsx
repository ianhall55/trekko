import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  selectDestination,
  centerMap,
  clearSelectedDestination
} from '../../actions';

class DestinationList extends Component {

  componentDidMount() {
    const { selectedDestination, destinations } = this.props;
    let firstDestination = null;
    let zoom = 7;
    if (selectedDestination.id) {
      firstDestination = selectedDestination;
      zoom = 12;
    } else {
      firstDestination = destinations[0];
      this.props.selectDestination(firstDestination);
    }
  
    let { lat, lng } = firstDestination;
    this.props.centerMap({lat: lat, lng: lng, zoom: zoom});
  }

  componentWillUnmount() {
    this.props.clearSelectedDestination();
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
    const { destinations, selectedDestination } = this.props;
    let selectedIndex = '';
    if (destinations) {
      destinations.forEach((destination, index) => {
        if (selectedDestination && selectedDestination.id === destination.id) {
          selectedIndex = index;
        }
        dropdownOptions.push(
          <option key={destination.id} value={index} >{destination.name}</option>
        );
      });
    }

    return (
      <select
        className="destination-dropdown"
        onChange={this.destinationChanged.bind(this)}
        value={selectedIndex}
      >
        {dropdownOptions}
      </select>
    );
  }
}

const mapStateToProps = state => {
  const { destinations } = state.destinations;
  const selectedDestination = state.destinations.selectedDestination;

  return { destinations, selectedDestination };
};

export default connect(
  mapStateToProps,
  { selectDestination, clearSelectedDestination, centerMap }
)(DestinationList);
