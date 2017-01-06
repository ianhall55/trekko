import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';

const corkboardItem = ({ trip }) => (

  <li>
    {<Link to={`/plan-trip/${trip.id}`}>
        <h3>{trip.name}</h3>
    </Link>}
  </li>
);

export default withRouter(corkboardItem);
