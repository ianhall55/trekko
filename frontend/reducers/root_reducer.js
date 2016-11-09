import { combineReducers } from 'redux';
import FormsReducer from './forms_reducer';

const RootReducer = combineReducers({
  forms: FormsReducer
});

export default RootReducer;
