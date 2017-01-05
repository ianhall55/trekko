import React, {Component} from 'react';
import {hashHistory} from 'react-router';
import { withRouter } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from '../modal_styles';
import Header from '../header/header_container';


class SplashPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      locationModalIsOpen: false,
      signupModalIsOpen: false,
      warningModalIsOpen: false
    };

    this.loginRedirect = this.loginRedirect.bind(this);
    this.destinationEntered = this.destinationEntered.bind(this);
    this.closeLocationModal = this.closeLocationModal.bind(this);
    this.createTrip = this.createTrip.bind(this);
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

    if (place.geometry) {
      this.props.receivePlace(place);
      this.setState({locationModalIsOpen: true});
    } else {
      this.setState({warningModalIsOpen: true});
      $(".close-modal").select();
    }
  }

  closeLocationModal(e){
    e.preventDefault();
    $("#pac-input").val("");
    this.setState({
      locationModalIsOpen: false
    });
  }

  closeModal(e){
    e.preventDefault();
    this.setState({
      warningModalIsOpen: false
    });
    $("#pac-input").select();
  }

  loginRedirect(e){
    e.preventDefault();
    hashHistory.push('/login');
  }

  signupRedirect(e){
    e.preventDefault();
    hashHistory.push('/signup');
  }

  createTrip(e){
    e.preventDefault();

    let trip = {
      name: this.props.place.name,
      lat: this.props.place.geometry.location.lat(),
      lng: this.props.place.geometry.location.lng(),
      viewport: {
        north: this.props.place.geometry.viewport.f.b,
        south: this.props.place.geometry.viewport.f.f,
        east: this.props.place.geometry.viewport.b.f,
        west: this.props.place.geometry.viewport.b.b
      },
      user_id: undefined
    };
    if (this.props.currentUser) {
      trip.user_id = this.props.currentUser.id;
      this.props.createTrip({trip});
    } else {
      this.props.pendingTrip({trip});
      this.setState({
        locationModalIsOpen: false,
        signupModalIsOpen: true
      });
    }

  }

  render(){
    let place = "Morder";

    if (this.props.place){
      place = this.props.place.name;
    }

    return(
      <div className="splash-page">
        <Modal
          isOpen={this.state.locationModalIsOpen}
          onRequestClost={this.closeModal}
          contentLabel="Confirm Trip"
          style={ModalStyle.splashModal}
          >
          <h2>Do you want to create a trip to {place}?</h2>
          <button onClick={this.createTrip}>Confirm</button>
          <button onClick={this.closeLocationModal}>Cancel</button>
        </Modal>

        <Modal
          isOpen={this.state.signupModalIsOpen}
          onRequestClost={this.closeSignupModal}
          contentLabel="Confirm Trip"
          style={ModalStyle.splashModal}
          >
          <h2>You have to signin first</h2>
          <button onClick={this.signupRedirect}>Signup</button>
          <button onClick={this.loginRedirect}>Login</button>
        </Modal>

        <Modal
          isOpen={this.state.warningModalIsOpen}
          onRequestClost={this.closeModal}
          contentLabel="Confirm Trip"
          style={ModalStyle.splashModal}
          >
          <h2>Please choose location from dropdown</h2>
          <button className="close-modal" onClick={this.closeModal}>Close</button>
        </Modal>

        <div className="splash-main">
          <Header/>
          <h1>Trekko Splash!</h1>
          <input id="pac-input" ref="autocomplete"
            className="controls" type="text" placeholder="Where do you want to go?" />
        </div>

      </div>
    );
  }
}

export default withRouter(SplashPage);
