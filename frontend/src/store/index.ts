// store.ts
import { createStore, combineReducers } from 'redux';
import eventReducer from '../reducers/eventReducer';

const rootReducer = combineReducers({
  event: eventReducer,
});

const store = createStore(rootReducer);

export default store;
