import { useState, useEffect } from 'react';
import { searchBooks } from '../helpers/BookFetch';
import PropTypes from 'prop-types';
import BookContext from './BookContext';

function BookProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [initialBooks, setInitialBooks] = useState([]);

  const fetchBookApi = async () => {
      const result = await searchBooks();
      setInitialBooks(result);
      setLoading(false);
  }

  useEffect(() => {
    fetchBookApi();
  }, []);

  const info = {
    initialBooks,
    setInitialBooks,
    loading,
    setLoading,
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
