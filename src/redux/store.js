import { createStore, applyMiddleware, compose } from 'redux';
import appReducers from './reducers/appReducer';
import appMiddleware from './middlewares/appMiddleware'
import { actions } from './actions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(appReducers,composeEnhancers(applyMiddleware(...appMiddleware)));
store.dispatch(actions.getSourceImages());
window.store = store;
export default store;