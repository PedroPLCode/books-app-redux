import { useDispatch } from "react-redux";
import { removeBookRequest } from '../../redux/booksReducer';

const Book = props => {
  const dispatch = useDispatch();
  const handleRemoveBook = event => {
    event.preventDefault();
    dispatch(removeBookRequest(props.id))
  }

  return (
  <li>- TITLE: {props.title} AUTHOR: {props.author} <button onClick={ event => handleRemoveBook(event)}>Remove book</button></li>
  );
}

export default Book;