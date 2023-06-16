import { useState, useEffect } from 'react';
import searchBooks from '../helpers/BookFetch';
import PropTypes from 'prop-types';
import BookContext from './BookContext';

function BookProvider({ children }) {
  const [initialBooks, setInitialBooks] = useState([]);
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [bookImage, setBookImage] = useState('');

  const fetchBookApi = async () => {
      const result = await searchBooks();
      setInitialBooks(result);
  }

  useEffect(() => {
    fetchBookApi();
  }, []);

  const info = {
    initialBooks,
    setInitialBooks,
    bookName,
    setBookName,
    bookImage,
    setBookImage,
    authorName,
    setAuthorName,
  };

  return (
    <BookContext.Provider value={ info }>
      {children}
    </BookContext.Provider>
  );
}

BookProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default BookProvider;
