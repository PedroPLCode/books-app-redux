import BooksForm from './components/BooksForm/BooksForm'
import BooksList from './components/BooksList/BooksList'
import { fetchBooks } from './redux/booksReducer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchBooks()), [dispatch]);

  return (
    <div>
      <header>
        <h2>Books List App</h2>
      </header>
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
