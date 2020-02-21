import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import all reducers to be created here
import { auth } from './reducers/auth';
import loginForm from './reducers/loginForm';

const reducer = combineReducers({
  // all reducers to be combined
  auth,
  loginForm
})

// to enable redux extension in browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;