import React from 'react';
import Header from '../header/header_container';

export default class Corkboard extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div className='cork-page'>
        <Header/>
        <div className='cork-main'>

        </div>
      </div>
    );
  }


}
