import { createStore } from 'redux';
import shortid from 'shortid';
import initialState from './initialState';

//selectors
export const getAllBooks = (state) => state.books;

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK': 
      return { ...state, books: [...state.books, { ...action.payload, id: shortid() }]};
    case 'REMOVE_BOOK': 
      return { ...state, books: [...state.books.filter(book => action.payload !== book.id)]};
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
  
export default store;
