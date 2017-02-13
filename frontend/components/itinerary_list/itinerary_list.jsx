import React, { Component } from 'react';
import { connect } from 'react-redux';
import POIItem from '../poi_item/poi_item';

class ItineraryList extends Component {
  constructor(props) {
    super(props);

    this.renderPOI = this.renderPOI.bind(this);
  }

  renderPOI(type) {
    const placesOfInterest = this.props.placesOfInterest[type];
    const poiLines = [];
    placesOfInterest.forEach((POI) => {
      poiLines.push(
        <POIItem key={ POI.id } POI={ POI } />
      );
    });

    return poiLines
  }

  render() {

    return (
      <div className="itinerary-list" >
        <div className="itin-sub-index" >
          <h3>Restaurants</h3>
          <div className="itin-sect">
            <ul>
              {this.renderPOI("restaurants")}
            </ul>
          </div>
        </div>

        <div className="itin-sub-index" >
          <h3>Lodging</h3>
          <div className="itin-sect">
            <ul>
              {this.renderPOI("lodgings")}
            </ul>
          </div>
        </div>

        <div className="itin-sub-index" >
          <h3>Attractions</h3>
          <div className="itin-sect">
            <ul>
              {this.renderPOI("attractions")}
            </ul>
          </div>
        </div>
      </div>
    );

  }
}

const mapStateToProps = state => {
  const placesOfInterest = state.placesOfInterest.placesOfInterest;

  return { placesOfInterest };
}

export default connect(
  mapStateToProps,
  {}
)(ItineraryList);
