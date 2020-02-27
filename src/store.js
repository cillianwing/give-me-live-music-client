import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import all reducers to be created here
import { currentUser } from './reducers/currentUser';
import { loginForm, signupForm} from './reducers/authForm';
import { search } from './reducers/search';
import { searchForm } from './reducers/searchForm';
import { userConcerts } from './reducers/userConcerts';

const reducer = combineReducers({
  // all reducers to be combined
  currentUser,
  loginForm,
  signupForm,
  searchForm,
  search,
  userConcerts
})

// to enable redux extension in browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;