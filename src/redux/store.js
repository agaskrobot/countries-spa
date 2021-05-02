import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { country } from './reducers';

const history = createBrowserHistory({ basename: '/' });

const initialState = {};
const rootReducer = combineReducers({
  country,
  router: routerReducer
});

const store = createStore(rootReducer, initialState);

export { store, history };
