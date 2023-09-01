import { createStore } from 'redux';
import shortid from 'shortid';

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

const initialState = {
  books: [
    {
      id: 1,
      title: 'QWERTY',
      author: '21321',
    },
    {
      id: 2,
      title: 'Trala La La',
      author: 'XXX',
    },
    {
      id: 3,
      title: 'sratatata',
      author: 'WQE',
    },
  ]
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
  
export default store;
