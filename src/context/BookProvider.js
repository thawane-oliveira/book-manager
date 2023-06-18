import { useState, useEffect } from 'react';
import searchBooks from '../helpers/BookFetch';
import PropTypes from 'prop-types';
import BookContext from './BookContext';

function BookProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [initialBooks, setInitialBooks] = useState([]);
  const [fail, setFail] = useState(false);
  const [placeholderImg, setPlaceholderImg] = useState('https://d827xgdhgqbnd.cloudfront.net/wp-content/uploads/2016/04/09121712/book-cover-placeholder.png');

  const fetchBookApi = async () => {
    try {
      const result = await searchBooks();
      setInitialBooks(result);
      setLoading(false);
    } catch (error) {
      // console.error('Erro ao buscar seus livros:', error);
      setFail(Boolean(error));
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBookApi();
  }, []);

  const info = {
    initialBooks,
    setInitialBooks,
    loading,
    setLoading,
    placeholderImg,
    setPlaceholderImg,
    fail,
    setFail
  };

  return (
    <BookContext.Provider value={info}>
      {children}
    </BookContext.Provider>
  );
}

BookProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default BookProvider;
