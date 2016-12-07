import { combineReducers } from 'redux';
import FormsReducer from './forms_reducer';
import SessionReducer from './session_reducer';
import PlacesReducer from './places_reducer';

const RootReducer = combineReducers({
  forms: FormsReducer,
  session: SessionReducer,
  places: PlacesReducer
});

export default RootReducer;
