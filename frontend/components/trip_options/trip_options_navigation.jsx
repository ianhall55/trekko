import React from 'react';
import { connect } from 'react-redux';

import { receiveTripOption } from '../../actions/trip_options_actions';

class TripOptionsNavigation extends React.Component {
  constructor(props){
    super(props);

    this.tripOptionSelected = this.tripOptionSelected.bind(this);
  }

  tripOptionSelected(e){
    debugger;
    e.preventDefault();
    this.props.receiveTripOption(e.target.dataset.option);
  }

  render(){
    switch(this.props.tripOptions){
      case 'Destinations':
        return(
          <nav>
            <button  disabled>
              Destinations
            </button>
            <button data-option="Recommendations" onClick={this.tripOptionSelected} >
              Recommendations
            </button>
            <button data-option="Travelers" onClick={this.tripOptionSelected} >
              Travelers
            </button>
          </nav>
        );
      case 'Recommendations':
        return(
          <nav>
            <button data-option="Destinations" onClick={this.tripOptionSelected}>
              Destinations
            </button>
            <button disabled >
              Recommendations
            </button>
            <button data-option="Travelers" onClick={this.tripOptionSelected} >
              Travelers
            </button>
          </nav>
        );
      case 'Travelers':
        return(
          <nav>
            <button data-option="Destinations" onClick={this.tripOptionSelected}>
              Destinations
            </button>
            <button data-option="Recommendations" onClick={this.tripOptionSelected} >
              Recommendations
            </button>
            <button disabled >
              Travelers
            </button>
          </nav>
        );
      default:
        return(
          <div>
            <h2>Trip Navbar</h2>
          </div>
        );
    }
  }

}

const mapStateToProps = state => ({
  tripOptions: state.tripOptions
});

const mapDispatchToProps = dispatch => ({
  receiveTripOption: (tripOption) => (dispatch(receiveTripOption(tripOption)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TripOptionsNavigation);
