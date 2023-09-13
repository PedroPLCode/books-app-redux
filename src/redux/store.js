import { createStore, applyMiddleware, compose } from 'redux';
import booksReducer from './booksReducer';
import initialState from './initialState';
import thunk from 'redux-thunk';

const store = createStore(
  booksReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
  )
);
  
export default store;