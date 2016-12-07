import React, {Component} from 'react';
import {hashHistory} from 'react-router';
import { withRouter } from 'react-router';

class SplashPage extends Component {
  constructor(props){
    super(props);

    this.loginRedirect = this.loginRedirect.bind(this);
    this.destinationEntered = this.destinationEntered.bind(this);
  }

  componentDidMount(){
    const autocompleteInput = this.refs.autocomplete;

    const autocompleteOptions = {
      types: ['geocode']
    };

    this.autocomplete = new google.maps.places.Autocomplete(autocompleteInput, autocompleteOptions);

    this.autocomplete.addListener('place_changed', this.destinationEntered);
  }

  destinationEntered(){
    var place = this.autocomplete.getPlace();
    window.place = place;
    if (place) {
      this.props.receivePlace(place);
    }
  }

  loginRedirect(e){
    e.preventDefault();
    hashHistory.push('/login');
  }

  render(){
    return(
      <div className="splash-main">
        <h1>Trekko Splash!</h1>
        <input type="button" onClick={this.loginRedirect} className="splash-button" value='Login'/>
        <br/>
        <input id="pac-input" ref="autocomplete"
          className="controls" type="text" placeholder="Start typing here" />
      </div>
    );
  }
}

export default withRouter(SplashPage);
