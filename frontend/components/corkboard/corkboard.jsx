import React from 'react';
import Header from '../header/header_container';
import CorkboardIndex from '../corkboard_index/corkboard_index';


export default class Corkboard extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    
    if (this.props.currentUser){
      this.props.fetchTripsForUser(this.props.currentUser.id);
    }
  }

  render(){

    return(
      <div className='cork-page'>
        <Header/>
        <div className='cork-main'>
          <CorkboardIndex/>
        </div>
      </div>
    );
  }


}
