import { createStore, combineReducers, applyMiddleware, compose } from 'react-redux';
import thunk from 'redux-thunk';
// import all reducers to be created here
import { auth } from './reducers/auth';

const reducer = combineReducers({
  // all reducers to be combined
  auth
})

// to enable redux extension in browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;