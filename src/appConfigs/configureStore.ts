import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk'

import { IStoreState } from './libs/noteActionType';
import NoteReducer from './libs/noteReducer'

const store:Store<IStoreState> = createStore(
  NoteReducer,
  applyMiddleware(thunk)
);

export default store;
