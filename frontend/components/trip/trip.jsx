import React from 'react';
import MapContainer from '../map_component/map_container.jsx';

export default class Trip extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    debugger;
    const v = 1;
  }

  render(){
    return(
      <div>
        <h1>Hi {this.props.currentUser.username}!</h1>



        <h3>Map</h3>

        <MapContainer />
      </div>
    );
  }

}
