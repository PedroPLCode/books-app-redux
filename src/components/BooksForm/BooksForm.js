import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookRequest } from '../../redux/booksReducer';

const BooksForm = () => {

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    if (title && author) {
      dispatch(addBookRequest( {title, author} ));    
      setTitle('');
      setAuthor('');
    } else {
      alert('Error: Missing Title or Author');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Books Add Form:</h3>
      Title: <input value={title} onChange={event => setTitle(event.target.value)} />
      Author: <input value={author} onChange={event => setAuthor(event.target.value)} />
      <button>Add book</button>
    </form>
  );
}
  
export default BooksForm;