import { combineReducers } from 'redux';
import FormsReducer from './forms_reducer';
import SessionReducer from './session_reducer';
import PlacesReducer from './places_reducer';
import TripsReducer from './trips_reducer';
import DestinationsReducer from './destinations_reducer';

const RootReducer = combineReducers({
  forms: FormsReducer,
  session: SessionReducer,
  places: PlacesReducer,
  trips: TripsReducer,
  destinations: DestinationsReducer,

});

export default RootReducer;
