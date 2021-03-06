import React from 'react';

const POIItem = ({ POI }) => {

  const { name, photo_reference } = POI;
  var backgroundPhotoStyle;
  if (photo_reference) {
    backgroundPhotoStyle = {
      backgroundImage: `url(https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo_reference}&key=AIzaSyB4l9vEKNdn38idNWvyHRylKtPCEt5OYYs)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",

    };
  }

  return (
    <li className="poi-item">
      <h3>{name}</h3>
      <div
        className="res-image-itin"
        style={ backgroundPhotoStyle }
      />
    </li>
  );
}

export default POIItem;
