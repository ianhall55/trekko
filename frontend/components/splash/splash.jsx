import React, {Component} from 'react';
import {hashHistory} from 'react-router';
import { withRouter } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from '../modal_styles';

class SplashPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.loginRedirect = this.loginRedirect.bind(this);
    this.destinationEntered = this.destinationEntered.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

    if (place) {
      this.props.receivePlace(place);
      this.setState({modalIsOpen: true});
    }
  }

  closeModal(e){
    e.preventDefault();
    $("#pac-input").val("");
    this.setState({
      modalIsOpen: false
    });
  }

  loginRedirect(e){
    e.preventDefault();
    hashHistory.push('/login');
  }

  createTrip(e){
    e.preventDefault();
    let trip = {
      name: this.props.place.name,
      lat: this.props.place.geometry.location.lat(),
      lng: this.props.place.geometry.location.lng()
    };
    this.createTrip(trip);
  }

  render(){
    let place = "Morder";

    if (this.props.place){
      place = this.props.place.name;
    }

    return(
      <div className="splash-page">
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClost={this.closeModal}
          contentLabel="Confirm Trip"
          style={ModalStyle.splashModal}
          >
          <h2>Do you want to create a trip to {place}?</h2>
          <button onClick={this.closeModal}>Confirm</button>
          <button onClick={this.closeModal}>Cancel</button>
        </Modal>
        <div className="splash-main">

          <h1>Trekko Splash!</h1>
          <input type="button" onClick={this.loginRedirect} className="splash-button" value='Login'/>
          <br/>
          <input id="pac-input" ref="autocomplete"
            className="controls" type="text" placeholder="Where do you want to go?" />
        </div>
      </div>
    );
  }
}

export default withRouter(SplashPage);
