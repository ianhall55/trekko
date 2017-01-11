import { connect } from 'react-redux';
import MapComponent from './map.jsx';


const mapStateToProps = state => ({
  trip: state.trips.trip,
  destinations: state.destinations.destinations
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapComponent);
