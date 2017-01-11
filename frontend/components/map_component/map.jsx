import React from 'react';
import MarkerManager from '../../util/marker_manager';
// api_key = AIzaSyB4l9vEKNdn38idNWvyHRylKtPCEt5OYYs

export default class MapComponent extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const mapElement = this.refs.map;

    const autocompleteOptions = {
      types: ['geocode']
    };

    let uluru = {};
    if (this.props.trip) {
      uluru = {
        lat: this.props.trip.lat,
        lng: this.props.trip.lng
      };
    }

    this.map = new google.maps.Map(mapElement, {
      center: uluru
    });

    this.map.fitBounds(this.props.trip.viewport);

    this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));
    if (this.props.destinations[0]){
      this.MarkerManager.updateMarkers(this.props.destinations);
    }
  }

  componentDidUpdate(){
    if (this.props.destinations[0]){
      this.MarkerManager.updateMarkers(this.props.destinations);
    }
  }

  _handleMarkerClick(bench) {
    this.props.router.push(`benches/${bench.id}`);
  }

  render(){

    return(
      <div className="map">
        <div id='map' ref="map"/>
      </div>
    );
  }
}
