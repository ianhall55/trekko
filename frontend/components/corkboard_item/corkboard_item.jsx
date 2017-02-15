import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';

const corkboardItem = ({ trip }) => {
  let photo_url;

  if ( trip.photo_reference ) {
    photo_url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${trip.photo_reference}&key=AIzaSyB4l9vEKNdn38idNWvyHRylKtPCEt5OYYs`;
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
      {<Link to={`/plan-trip/${trip.id}`}>
      <div className="cork-item" >
        <div
          className="res-image-cork"
          style={ backgroundPhotoStyle }
        />
        <h3>{trip.name}</h3>
      </div>
    </Link>}
  </li>
);
};

export default withRouter(corkboardItem);
