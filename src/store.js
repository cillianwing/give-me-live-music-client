import { createStore, combineReducers, applyMiddleware, compose } from 'react-redux';
import thunk from 'redux-thunk';
// will import all reducers to be created here

const reducer = combineReducers({
  // all reducers to be combined
})

// to enable redux extension in browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;