import React from 'react';

const DestinationItem = ({ destination }) => (
  <li>
    {destination.ord}. {destination.name}
  </li>
);

export default DestinationItem;
