import React from 'react';
import MarkerManager from '../../util/marker_manager';

import { connect } from 'react-redux';

class MapComponent extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const mapElement = this.refs.map;

    const autocompleteOptions = {
      types: ['geocode']
    };

    let uluru = {};
    if (this.props.lat) {
      uluru = {
        lat: this.props.trip.lat,
        lng: this.props.trip.lng
      };
    }

    this.map = new google.maps.Map(mapElement, {
      center: uluru,
      zoom: this.props.zoom
    });

    if (this.props.trip) {
      this.map.fitBounds(this.props.trip.viewport);
    }

    this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));
    if (this.props.destinations[0]){
      this.MarkerManager.updateMarkers(this.props.destinations);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { lat, lng, zoom, viewport } = nextProps;

    if (lat) {
      this.map.panTo({
        lat: lat,
        lng: lng
      });
    }

    if (zoom) { this.map.setZoom(zoom); }
    if (viewport) { this.map.fitBounds(this.props.trip.viewport); }
  }

  componentDidUpdate(){
    if (this.props.destinations){
      this.MarkerManager.updateMarkers(this.props.destinations);
    }
  }

  componentWillUnmount(){
    this.MarkerManager.updateMarkers([]);
  }

  _handleMarkerClick(bench) {
    this.props.router.push(`benches/${bench.id}`);
  }

  render() {
    return (
      <div className="map">
        <div id='map' ref="map"/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { lat, lng, viewport, zoom } = state.mapOptions;
  const trip = state.trips.trip;
  const destinations = state.destinations.destinations;

  return { lat, lng, viewport, zoom, trip, destinations };
};

export default connect(mapStateToProps, {})(MapComponent);
