import React, { Component } from 'react';
import { connect } from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';
import { createPOI } from '../../actions';

class RecommendationItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { name, place_id, photos, geometry, rating  } = this.props.recommendation;
    const destination = this.props.destination;
    const { lat, lng } = geometry.location;
    let photo_reference;
    if ( photos ) {
      photo_reference = photos[0].photo_reference;
    };
    const place_of_interest = { name, destination_id: destination.id, google_id: place_id,
      photo_reference, type: "Restaurant", lat, lng };

    this.props.createPOI( place_of_interest );
  }

  render() {
    const { name, rating, photos } = this.props.recommendation;
    let photo_url
    if ( photos ) {
      const photo_ref = photos[0].photo_reference;
      photo_url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo_ref}&key=AIzaSyB4l9vEKNdn38idNWvyHRylKtPCEt5OYYs`;
    } else {
      photo_url = "";
    }

    const backgroundPhotoStyle = {
      backgroundImage: `url(${photo_url})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    };

    return (
      <li>
        <div className="rec-item" >
          <h3>{ name }</h3>
          <div
            className="res-image-rec"
            style={ backgroundPhotoStyle }
          />
          <span>
            <StarRatingComponent
              name="airbnb-rating"
              editing={false}
              value={rating || 0}
              />
          </span>
          <button onClick={ () => this.handleClick() }>Add to Itinerary</button>
        </div>
      </li>
    );
  }
};

const mapStateToProps = state => {
  const destination = state.destinations.selectedDestination;

  return { destination };
}

export default connect(
  mapStateToProps,
  { createPOI }
)(RecommendationItem);
