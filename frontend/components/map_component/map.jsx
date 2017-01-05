import React from 'react';

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

    // this.map.fitBounds(this.props.trip.viewport);
  }

  render(){

    return(
      <div id='map' ref="map"></div>
    );
  }
}
