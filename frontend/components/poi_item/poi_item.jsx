import React from 'react';

const POIItem = ({ POI }) => {
  const { name } = POI;
  return (
    <li>
      <span>{name}</span>
    </li>
  );
}

export default POIItem;
