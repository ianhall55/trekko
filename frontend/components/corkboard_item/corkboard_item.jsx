import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';

const corkboardItem = ({ trip }) => (

  <li>
    {<Link to={`/plan-trip/${trip.id}`}>
      <div>
        <h3>{trip.name}</h3>
      </div>
    </Link>}
  </li>
);

export default withRouter(corkboardItem);
