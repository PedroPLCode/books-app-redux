import { useSelector, useDispatch } from 'react-redux';

const BooksList = () => {

  const dispatch = useDispatch();
  const books = useSelector(state => state.books);

  return (
    <section>
      <h3>List od Books:</h3>
      <ul>
      {books.map(book =>
        <li>- TITLE: {book.title} AUTHOR: {book.author} <button onClick={() => dispatch( { type: 'REMOVE_BOOK', payload: book.id } )}>x</button></li>
      )}
      </ul>
    </section>
  );
}
  
export default BooksList;

