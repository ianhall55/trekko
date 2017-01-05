

export default class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = [];
    //permanently bind instance methods
    this._createMarkerFromDestinations = this._createMarkerFromDestinations.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
    this._markersToRemove = this._markersToRemove.bind(this);
  }

  updateMarkers(destinations){
    this.destinations = destinations;
    this._destinationsToAdd().forEach(this._createMarkerFromDestinations);
    this._markersToRemove().forEach(this._removeMarker);
  }

  _destinationsToAdd() {
    const currentDestinations = this.markers.map( marker => marker.destinationId );
    return this.destinations.filter( bench => !currentDestinations.includes(bench.id) );
  }

  _markersToRemove(){
    const destinationIds = this.destinations.map( destination => destination.id );
    return this.markers.filter( marker => !destinationIds.includes(marker.destinationId) );
  }

  _createMarkerFromDestinations(destination) {
    const pos = new google.maps.LatLng(destination.lat, destination.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      destinationId: destination.id
    });
    marker.addListener('click', () => this.handleClick(destination));
    this.markers.push(marker);
  }

  _removeMarker(marker) {
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }
}
