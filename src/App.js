import BooksForm from './components/BooksForm/BooksForm'
import BooksList from './components/BooksList/BooksList'

const App = () => {

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
