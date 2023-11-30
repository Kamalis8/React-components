import {createStore, combineReducers} from 'redux';
import Reducer from './Reducer';

const rootReducer = combineReducers({
  count: Reducer,
});

export const store = createStore(rootReducer);
