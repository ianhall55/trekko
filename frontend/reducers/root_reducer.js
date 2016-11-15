import { combineReducers } from 'redux';
import FormsReducer from './forms_reducer';
import SessionReducer from './session_reducer';

const RootReducer = combineReducers({
  forms: FormsReducer,
  session: SessionReducer
});

export default RootReducer;
