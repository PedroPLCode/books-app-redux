import { useSelector } from 'react-redux';
import { getAllBooks } from '../../redux/store';
import Book from '../Book/Book';

const BooksList = () => {

  const books = useSelector(getAllBooks);

  return (
    <section>
      <h3>List od Books:</h3>
      <ul>
        {books.map(book => <Book key={book.id} {...book} />
      )}
      </ul>
    </section>
  );
}
  
export default BooksList;

