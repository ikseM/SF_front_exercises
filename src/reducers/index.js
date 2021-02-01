import { combineReducers } from 'redux';
import playersReducer from './players';

const rootReducer = combineReducers({
  players: playersReducer
});

export default rootReducer;

