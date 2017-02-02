import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectDestination, receiveTripOption } from '../../actions';

class DestinationItem extends Component {
  handleClick(e) {
    e.preventDefault();
    this.props.selectDestination(this.props.destination);
    this.props.receiveTripOption('Itinerary');
  }

  render() {
    const { destination } = this.props;

    return (
      <li onClick={this.handleClick.bind(this)}>
        {destination.name}
      </li>
    );
  }

}
export default connect(
  null,
  { selectDestination, receiveTripOption }
)(DestinationItem);
