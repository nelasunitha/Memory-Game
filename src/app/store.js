import { combineReducers, createStore } from 'redux';

import { boardReducer } from '../components/board/boardAction.js';

const rootReducer = combineReducers({
  board: boardReducer,
});

export const store = createStore(rootReducer);