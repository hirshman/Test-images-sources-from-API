import { combineReducers } from 'redux';
import loadReducer from './loadReducer';


// Combine with other reducers we may add in the future
const appReducers = combineReducers({
  loadReducer
});

export default appReducers;