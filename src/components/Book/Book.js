import { useDispatch } from "react-redux";
import { removeBook } from '../../redux/store';

const Book = props => {
  const dispatch = useDispatch();

  return (
  <li>- TITLE: {props.title} AUTHOR: {props.author} <button onClick={() => dispatch(removeBook(props.id))}>x</button></li>
  );
}

export default Book;