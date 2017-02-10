import { combineReducers } from 'redux';
import FormsReducer from './forms_reducer';
import SessionReducer from './session_reducer';
import PlacesReducer from './places_reducer';
import TripsReducer from './trips_reducer';
import DestinationsReducer from './destinations_reducer';
import TripOptionsReducer from './trip_options_reducer';
import MapOptionsReducer from './map_options_reducer';
import PlacesOfInterestReducer from './places_of_interest_reducer';
import RecommendationsReducer from './recommendations_reducer';

const RootReducer = combineReducers({
  forms: FormsReducer,
  session: SessionReducer,
  places: PlacesReducer,
  trips: TripsReducer,
  destinations: DestinationsReducer,
  tripOptions: TripOptionsReducer,
  mapOptions: MapOptionsReducer,
  placesOfInterest: PlacesOfInterestReducer,
  recommendations: RecommendationsReducer
});

export default RootReducer;
